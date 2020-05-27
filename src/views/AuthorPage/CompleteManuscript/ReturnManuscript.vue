<template>
  <div>
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
              <a-form-item label="稿件状态">
                <a-select v-model="state" placeholder="请选择" default-value="0">
                  <a-select-option value="">全部稿件</a-select-option>
                  <a-select-option value="等待编辑审查">等待编辑审查</a-select-option>
                  <a-select-option value="等待专家审查">等待专家审查</a-select-option>
                  <a-select-option value="等待主编审查">等待主编审查</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-button @click="search">查询</a-button>
            </a-col>
          </a-row>
        </a-form>
        <a-divider />
      </div>
      <a-table :loading="load" :columns="columns" :dataSource="data" size="middle" :rowKey="row=>row.manuscript_ID">
        <span slot="action" slot-scope="text, record">
          <a @click="ShowComment(record.manuscript_ID)">查看稿件</a>
        </span>
      </a-table>
    </a-card>
  </div>
</template>
<script>
import { GetReturnManuscript } from '@/api/AuthorManuscriptApi'

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
    title: '所属栏目',
    dataIndex: 'manuscriptColumn',
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
    GetReturnManuscript().then(res => { this.data = res.sort((a, b) => a.manuscript_ID - b.manuscript_ID).reverse(); this.load = false; console.log(res); this.ori = this.data }).catch()
  },
  data () {
    return {
      columns,
      data: [],
      ori: [],
      state: '',
      ser: '',
      queryParam: {},
      load: true
    }
  },
  methods: {
    Show (mid) {
      this.$router.push({ name: 'ShowManscript', params: { id: mid } })
    },
    ShowComment (id) {
      this.$router.push({ name: 'ShowProgress', params: { id: id } })
    },
    search () {
      var str = this.ser
      var ste = this.state
      console.log(this.ser)
      this.data = []
      this.ori.filter(item => {
        if (item.manuscript_Title.includes(str) && item.manuscript_Status.includes(ste)) {
          this.data.push(item)
        }
      })
      console.log(this.data)
    }
  }
}
</script>
