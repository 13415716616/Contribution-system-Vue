<template>
  <div id="components-table-demo-size">
    <a-card title="编辑中稿件">
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
import { GetManuscriptToDrafts, DeleteMansuscriptDrafts, CompleteMansuscriptDrafts } from '@/api/AuthorManuscriptApi'
const columns = [
  {
    title: '论文编号',
    dataIndex: 'manuscript_ID',
    width: '10%'
  },
  {
    title: '论文标题',
    dataIndex: 'manuscript_Title',
    width: '25%'
  },
  {
    title: '关键词',
    dataIndex: 'manuscript_Keyword',
    width: '18%'
  },
  {
    title: '当前状态',
    dataIndex: 'manuscript_Status',
    width: '15%'
  },
  {
    title: '编辑时间',
    dataIndex: 'time',
    width: '15%'
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
]

export default {
  provide () {
    return {
      reload: this.reload
    }
  },
  inject: ['reload'],
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
      CompleteMansuscriptDrafts(id).then(GetManuscriptToDrafts().then(res => {
        console.log(res)
        this.$message.success('稿件投递成功')
        this.reload()
      }).catch()).catch()
    }
  }
}
</script>
<style>
  #components-table-demo-size {
    margin-bottom: 16px;
  }
</style>
