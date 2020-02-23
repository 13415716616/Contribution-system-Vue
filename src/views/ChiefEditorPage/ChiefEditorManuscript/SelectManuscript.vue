<template>
  <div>
    <a-table :dataSource="data" :columns="columns" size="middle" :rowKey="row=>row.manuscriptReview_ID">
      <span slot="action" slot-scope="text, record">
        <a @click="Show(record.manuscriptReview_ID)">查看稿件</a>
        <a-divider type="vertical" />
        <a>稿件留言</a>
      </span>
    </a-table>
  </div>
</template>
<script>
import { GetSecondSelectManuscript } from '@/api/SelectManuscript'

const columns = [
  {
    title: '论文标题',
    dataIndex: 'manuscriptReview_Title',
    width: '38%'
  },
  {
    title: '投稿用户',
    dataIndex: 'author_ID',
    width: '15%'
  },
  {
    title: '论文作者',
    dataIndex: 'author_name',
    width: '15%'
  },
  {
    title: '当前状态',
    dataIndex: 'manuscriptReview_Status',
    width: '20%'
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
    GetSecondSelectManuscript().then(res => { this.data = res; console.log(res) }).catch()
  },
  methods: {
    Show (mid) {
      this.$router.push({ name: 'ShowChiefManuscript', params: { id: mid } })
    }
  }
}
</script>
