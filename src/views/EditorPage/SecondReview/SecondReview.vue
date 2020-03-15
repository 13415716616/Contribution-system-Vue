<template>
  <div>
    <a-card>
      <a-table :dataSource="data" :columns="columns" size="middle" :rowKey="row=>row.manuscript_ID">
        <span slot="action" slot-scope="text, record">
          <a @click="Show(record.manuscript_ID)">查看稿件</a>
          <a-divider type="vertical" />
          <a @click="CommentMansucript(record.manuscript_ID)">稿件留言</a>
        </span>
      </a-table>
    </a-card>
  </div>
</template>
<script>
import { GetSecondEdiotrManuscript } from '@/api/EditManuscript'

const columns = [
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
    title: '当前状态',
    dataIndex: 'manuscript_Status',
    width: '20%'
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
    GetSecondEdiotrManuscript().then(res => { this.data = res; console.log(res) }).catch()
  },
  methods: {
    Show (mid) {
      this.$router.push({ name: 'ShowEditManuscript', params: { id: mid } })
    },
    CommentMansucript (mid) {
      console.log('id:' + mid)
      this.$router.push({ name: 'CommentManuscript', params: { id: mid } })
    }
  }

}
</script>
