<template>
  <div id="components-table-demo-size">
    <a-card>
      <a-table :loading="loading" :columns="columns" :dataSource="data" size="middle" :rowKey="row=>row.draftManuscript_ID">
        <span slot="Status" slot-scope="text, record">
          <p v-if="record.draftManuscript_Status==1">填写稿件信息完成</p>
          <p v-if="record.draftManuscript_Status==2">上传稿件信息完成</p>
          <p v-if="record.draftManuscript_Status==3">投稿完成</p>
        </span>
        <span slot="action" slot-scope="text, record">
          <a @click="Edit(record.draftManuscript_ID)">编辑</a>
          <a-divider type="vertical" />
          <a-popconfirm
            title="你确定要删除这个稿件吗?"
            @confirm="Delete(record.draftManuscript_ID)"
            okText="是"
            cancelText="否"
          >
            <a>删除</a></a-popconfirm>
          <a-divider type="vertical" />
          <a-popconfirm
            title="你确定要提交这个稿件吗?"
            @confirm="CompleteDartfs(record.draftManuscript_ID)"
            okText="是"
            cancelText="否"
          >
            <a @click="CompleteDartfs(record.draftManuscript_ID)">提交</a>
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
    dataIndex: 'draftManuscript_Title',
    width: '38%'
  },
  {
    title: '当前状态',
    key: 'Status',
    scopedSlots: { customRender: 'Status' },
    width: '18%'
  },
  {
    title: '编辑时间',
    dataIndex: 'edit_Time',
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
