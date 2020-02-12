<template>
  <div id="components-table-demo-size">
    <a-table :columns="columns" :dataSource="data" size="middle" :rowKey="row=>row.manuscript_ID">
      <span slot="Status" slot-scope="text, record">
        <p v-if="record.manuscript_Status==1">填写稿件信息完成</p>
        <p v-if="record.manuscript_Status==2">上传稿件信息完成</p>
        <p v-if="record.manuscript_Status==3">投稿完成</p>
      </span>
      <span slot="action" slot-scope="text, record">
        <a @click="Edit(record.manuscript_ID,record.manuscript_Status)">编辑</a>
        <a-divider type="vertical" />
        <a-popconfirm
          title="你确定要删除这个稿件吗?"
          @confirm="Delete(record.manuscript_ID)"
          okText="是"
          cancelText="否"
        >
          <a>删除</a></a-popconfirm>
      </span>
    </a-table>
  </div>
</template>
<script>
import { GetManuscriptToDrafts, DeleteMansuscriptDrafts } from '@/api/Contribute'
const columns = [
  {
    title: '论文标题',
    dataIndex: 'manuscript_Title',
    width: '38%'
  },
  {
    title: '作者',
    dataIndex: 'author_name',
    width: '15%'
  },
  {
    title: '当前状态',
    key: 'Status',
    scopedSlots: { customRender: 'Status' },
    width: '20%'
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
      this.data = res
      console.log(res)
    }).catch()
  },
  data () {
    return {
      data: [],
      columns
    }
  },
  methods: {
    Delete (id) {
      this.data = this.data.filter(items => items.manuscript_ID !== id)
      DeleteMansuscriptDrafts(id).then().catch()
    },
    Edit (id, num) {
      this.$store.commit('SET_MANUSCRIPT_ID', id)
      this.$router.push({ name: 'ContributePage', params: { id: num - 1, num: num + 1 } })
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
