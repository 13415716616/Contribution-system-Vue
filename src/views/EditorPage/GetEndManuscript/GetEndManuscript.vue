<template>
  <div>
    <a-card>
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="稿件标题">
                <a-input v-model="serach" placeholder=""/>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="稿件状态">
                <a-select v-model="state" placeholder="请选择" default-value="">
                  <a-select-option value="">全部栏目</a-select-option>
                  <a-select-option v-for="item in select" :key="item.manuscriptColumn_ID" :value="item.manuscriptColumn_Name">{{ item.manuscriptColumn_Name }}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-button @click="search">查询</a-button>
            </a-col>
          </a-row>
        </a-form>
        <a-table :dataSource="data" :columns="columns" size="middle" :rowKey="row=>row.manuscript_ID">
          <span slot="action" slot-scope="text, record">
            <a @click="Show(record.manuscript_ID)">查看稿件</a>
          </span>
        </a-table></div>
    </a-card>
  </div>
</template>
<script>
import { GetEndManuscript } from '@/api/EditManuscript'

const columns = [
  {
    title: '投稿编号',
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
    dataIndex: 'author_Name',
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
      data: [],
      serach: '',
      state: ''
    }
  },
  created () {
    GetEndManuscript().then(res => { this.data = res; console.log(res) }).catch()
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
