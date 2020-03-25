<template>
  <a-card title="消息列表">
    <a-table :columns="columns" :dataSource="data">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
      <span slot="tags" slot-scope="tags">
        <a-tag
          v-for="tag in tags"
          :color="tag==='loser' ? 'volcano' : (tag.length > 5 ? 'geekblue' : 'green')"
          :key="tag"
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
      <span slot="action" slot-scope="text, record">
        <a>Invite 一 {{ record.name }}</a>
        <a-divider type="vertical" />
        <a>Delete</a>
        <a-divider type="vertical" />
        <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
      </span>
    </a-table>
  </a-card>
</template>
<script>
import { GetAllMessage } from '@/api/AuthorPersonalApi'
const columns = [
  {
    title: '发送人',
    dataIndex: 'message_Sender',
    width: '20%'
  },
  {
    title: '标题',
    dataIndex: 'message_Title',
    key: 'message_Title',
    width: '45%'
  },
  {
    title: '消息时间',
    dataIndex: 'message_Time',
    width: '25%'
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
  }
}
</script>
