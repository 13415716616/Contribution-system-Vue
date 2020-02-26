<template>
  <div>
    <a-card>
      <a-table :columns="columns" :dataSource="data" size="middle" :rowKey="row=>row.manuscriptReview_ID">
        <span slot="action" slot-scope="text, record">
          <a @click="Show(record.manuscriptReview_ID)">查看稿件</a>
          <a-divider type="vertical" />
          <a @click="ShowComment(record.manuscriptReview_ID)">查询编辑留言</a>
        </span>
      </a-table>
    </a-card>
  </div>
</template>
<script>
import { GetAllManuscriptReviews } from '@/api/ManuscriptReview'

const columns = [
  {
    title: '论文标题',
    dataIndex: 'manuscriptReview_Title',
    width: '38%'
  },
  {
    title: '作者',
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
  created () {
    GetAllManuscriptReviews().then(res => { console.log(res); this.data = res }).catch()
  },
  data () {
    return {
      columns,
      data: []
    }
  },
  methods: {
    Show (mid) {
      this.$router.push({ name: 'ShowManscript', params: { id: mid } })
    },
    ShowComment (id) {
      this.$router.push({ name: 'ShowEditorInfo', params: { id: id } })
    }

  }
}
</script>
