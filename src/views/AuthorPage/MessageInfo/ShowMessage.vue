<template>
  <a-card>
    <a-table :columns="columns" :dataSource="data">
      <span slot="action" slot-scope="text, record">
        <a @click="ShowMessage(record.message_ID)">查看信息</a>
      </span>
    </a-table>
  </a-card>
</template>
<script>
import { GetAllMessage } from '@/api/AuthorPersonalApi'
const columns = [
  {
    title: '',
    dataIndex: 'message_Type',
    width: '10%'
  },
  {
    title: '',
    dataIndex: 'message_Sender',
    width: '10%'
  },
  {
    title: '',
    dataIndex: 'message_Title',
    key: 'message_Title',
    width: '18%'
  },
  {
    title: '',
    dataIndex: 'message_Time',
    width: '16%'
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
    width: '12%'
  }
]

export default {
  data () {
    return {
      data: {},
      columns
    }
  },
  created () {
    GetAllMessage().then(res => { console.log(res); this.data = res }).catch()
  },
  methods: {
    ShowMessage (id) {
      this.$router.push({ name: 'ReadManuscript', params: { id: id } })
    }
  }
}
</script>
