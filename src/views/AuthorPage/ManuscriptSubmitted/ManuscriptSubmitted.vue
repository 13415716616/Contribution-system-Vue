<template>
  <div>
    <a-card>
      <a-table :columns="columns" :dataSource="data" size="middle" :rowKey="row=>row.manuscript_ID">
        <span slot="action" slot-scope="text, record">
          <a @click="ShowComment(record.manuscript_ID)">查看进度</a>
        </span>
      </a-table>
    </a-card>
  </div>
</template>
<script>
import { GetReviewManuscript } from '@/api/AuthorManuscriptApi'

const columns = [
  {
    title: '论文编号',
    dataIndex: 'manuscript_ID',
    width: '8%'
  },
  {
    title: '论文标题',
    dataIndex: 'manuscript_Title',
    width: '25%'
  },
  {
    title: '关键词',
    dataIndex: 'manuscript_Keyword',
    width: '20%'
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
  created () {
    GetReviewManuscript().then(res => { console.log(res); this.data = res }).catch()
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
      this.$router.push({ name: 'ShowProgress', params: { id: id } })
    }

  }
}
</script>
