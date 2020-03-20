<template>
  <div>
    <a-card>
      <a-table :dataSource="data" :columns="columns" size="middle" :rowKey="row=>row.manuscriptReview_ID">
        <span slot="action" slot-scope="text, record">
          <a @click="Show(record.manuscriptReview_ID)">查看稿件</a>
          <a-divider type="vertical" />
          <a>稿件留言</a>
        </span>
      </a-table>
    </a-card>
  </div>
</template>
<script>
import { ShowCompleteManuscript } from '@/api/ExpertManuscript'

const columns = [
  {
    title: '审核编号',
    dataIndex: 'editorReview_ID',
    width: '8%'
  },
  {
    title: '论文标题',
    dataIndex: 'manuscript_Title',
    width: '38%'
  },
  {
    title: '投稿用户',
    dataIndex: 'author_ID',
    width: '15%'
  },
  {
    title: '审核时间',
    dataIndex: 'review_Time',
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
    ShowCompleteManuscript().then(res => { this.data = res; console.log(res) }).catch()
  },
  methods: {
    Show (mid) {
      this.$router.push({ name: 'ShowChiefManuscript', params: { id: mid } })
    }
  }
}
</script>
