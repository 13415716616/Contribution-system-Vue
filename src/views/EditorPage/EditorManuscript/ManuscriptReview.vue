<template>
  <div>
    <a-card :title="初审稿件">
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
        <a-table :loading="load" :dataSource="data" :columns="columns" size="middle" :rowKey="row=>row.manuscript_ID">
          <span slot="action" slot-scope="text, record">
            <a @click="Show(record.manuscript_ID)">查看稿件</a>
            <a-divider type="vertical" />
            <a @click="Review(record.manuscript_ID)">审查稿件</a>
          </span>
        </a-table>
      </div></a-card>
  </div>
</template>
<script>
import { GetAllWaitManuscript } from '@/api/EditManuscript'
import { GetManuscriptColoum } from '@/api/AuthorManuscriptApi'

const columns = [
  {
    title: '稿件编号',
    dataIndex: 'manuscript_ID',
    width: '8%'
  },
  {
    title: '论文标题',
    dataIndex: 'manuscript_Title',
    width: '25%'
  },
  {
    title: '所属栏目',
    dataIndex: 'manuscriptColumn',
    width: '12%'
  },
  {
    title: '投稿用户',
    dataIndex: 'author_Name',
    width: '12%'
  },
  {
    title: '当前状态',
    dataIndex: 'manuscript_Status',
    width: '13%'
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
      description: '在这里进行稿件的初步审查',
      columns,
      load: true,
      data: [],
      serach: '',
      queryParam: {},
      ori: [],
      select: {},
      state: ''
    }
  },
  created () {
    GetAllWaitManuscript().then(res => { this.data = res; console.log(res); this.load = false; this.ori = res }).catch()
    GetManuscriptColoum().then(result => { console.log(result); this.select = result }).catch()
  },
  methods: {
    Show (mid) {
      this.$router.push({ name: 'ShowEditManuscript', params: { id: mid } })
    },
    Review (mid) {
      this.$router.push({ name: 'ReviewFirstManuscript', params: { id: mid } })
    },
    search () {
      var str = this.serach
      // var ste = this.state
      console.log(this.ser)
      this.data = []
      this.ori.filter(item => {
        if (item.manuscript_Title.includes(str) && item.manuscriptColumn.includes(this.state)) {
          this.data.push(item)
        }
      })
      console.log(this.data)
    }
  }

}
</script>
