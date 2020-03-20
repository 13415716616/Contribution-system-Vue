<template>
  <div class="t">
    <a-card>
      <a-table :dataSource="data" :columns="columns" size="middle" :rowKey="row=>row.manuscriptReview_ID">
        <span slot="action" slot-scope="text, record">
          <a @click="Show(record.manuscript_ID)">查看稿件</a>
          <a-divider type="vertical" />
          <a @click="Reviews(record.manuscript_ID)">审查稿件</a>
        </span>
      </a-table>
    </a-card>
  </div>
</template>
<script>
import { GetChiefEditorManuscript } from '@/api/ChiefEditorManuscriptApi'

const columns = [
  {
    title: '论文编号',
    dataIndex: 'manuscript_ID',
    width: '8%'
  },
  {
    title: '论文标题',
    dataIndex: 'manuscript_Title',
    width: '30%'
  },
  {
    title: '投稿用户',
    dataIndex: 'author_ID',
    width: '15%'
  },
  {
    title: '当前状态',
    dataIndex: 'manuscript_Status',
    width: '15%'
  },
  {
    title: '投稿时间',
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
  data () {
    return {
      columns,
      data: []
    }
  },
  created () {
    GetChiefEditorManuscript().then(res => { this.data = res; console.log(res) }).catch()
  },
  methods: {
    Show (mid) {
      this.$router.push({ name: 'ShowChiefManuscript', params: { id: mid } })
    },
    CommentMansucript () {
      var mid = this.$route.params.id
      console.log('id:' + mid)
      this.$router.push({ name: 'CommentChiefManuscript', params: { id: mid } })
    },
    Reviews (mid) {
      this.$router.push({ name: 'ReviewsChiefManuscript', params: { id: mid } })
    }
  }
}
</script>
<style scoped>
  .t{
    text-align: center;
  }
</style>
