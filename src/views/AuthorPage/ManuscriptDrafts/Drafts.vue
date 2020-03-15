<template>
  <div id="components-table-demo-size">
    <a-card>
      <a-table :loading="loading" :columns="columns" :dataSource="data" size="middle" :rowKey="row=>row.manuscript_ID">
        <span slot="action" slot-scope="text, record">
          <a @click="Edit(record.manuscript_ID)">编辑</a>
          <a-divider type="vertical" />
          <a-popconfirm
            title="你确定要删除这个稿件吗?"
            @confirm="Delete(record.manuscript_ID)"
            okText="是"
            cancelText="否"
          >
            <a>删除</a></a-popconfirm>
          <a-divider type="vertical" />
          <a-popconfirm
            title="你确定要提交这个稿件吗?"
            @confirm="CompleteDartfs(record.manuscript_ID)"
            okText="是"
            cancelText="否"
          >
            <a @click="CompleteDartfs(record.manuscript_ID)">提交</a>
          </a-popconfirm>
        </span>
      </a-table>
    </a-card>
  </div>
</template>
<script>
import { GetManuscriptToDrafts, DeleteMansuscriptDrafts } from '@/api/AuthorManuscriptApi'
import { CompleteDratfs } from '@/api/EditManuscript'
const columns = [
  {
    title: '论文标题',
    dataIndex: 'manuscript_Title',
    width: '38%'
  },
  {
    title: '当前状态',
    dataIndex: 'manuscript_Status',
    width: '18%'
  },
  {
    title: '编辑时间',
    dataIndex: 'time',
    width: '18%'
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
]

export default {
  created () {
    GetManuscriptToDrafts().then(res => {
      console.log(res)
      this.data = res
      this.loading = false
    }).catch()
  },
  data () {
    return {
      data: [],
      columns,
      loading: true
    }
  },
  methods: {
    Delete (id) {
      this.data = this.data.filter(items => items.manuscript_ID !== id)
      DeleteMansuscriptDrafts(id).then().catch()
    },
    Edit (mid) {
      this.$router.push({ name: 'ModifyDraftManuscript', params: { id: mid } })
    },
    CompleteDartfs (id) {
      CompleteDratfs(id).then(GetManuscriptToDrafts().then(res => {
        console.log(res)
        this.data = res
        this.loading = false
      }).catch()).catch()
    }
  }
}
</script>
<style>
  #components-table-demo-size {
    margin-bottom: 16px;
    margin-left: 3%;
    margin-right: 3%;
  }
</style>
