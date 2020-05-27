<template>
  <a-card>
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item label="稿件标题">
              <a-input v-model="ser" placeholder=""/>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-button type="primary" @click="search"> 查询 </a-button>
          </a-col>
        </a-row>
      </a-form>
    </div>
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
    title: '类型',
    dataIndex: 'message_Type',
    width: '9%'
  },
  {
    title: '发送者',
    dataIndex: 'message_Sender',
    width: '9%'
  },
  {
    title: '标题',
    dataIndex: 'message_Title',
    key: 'message_Title',
    width: '35%'
  },
  {
    title: '接收时间',
    dataIndex: 'message_Time',
    width: '10%'
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
    GetAllMessage().then(res => { console.log(res); this.data = res.sort((a, b) => a.message_Time - b.message_Time).reverse() }).catch()
  },
  methods: {
    ShowMessage (id) {
      this.$router.push({ name: 'ReadEditorMessage', params: { id: id } })
    }
  }
}
</script>
