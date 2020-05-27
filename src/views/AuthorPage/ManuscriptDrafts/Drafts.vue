<template>
  <div id="components-table-demo-size">
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
      <a-table :loading="loading" :columns="columns" :dataSource="data" size="middle" :rowKey="row=>row.manuscript_ID">
        <span slot="action" slot-scope="text, record">
          <a @click="Edit(record.manuscript_ID)">编辑</a>
          <a-divider type="vertical" />
          <a-popconfirm
            title="你确定要删除这个稿件吗?"
            @confirm="Delete(record.manuscript_ID)"
            okText="是"
            cancelText="否"
          >
            <a>删除</a></a-popconfirm>
          <a-divider type="vertical" />
          <a-popconfirm
            title="你确定要提交这个稿件吗?"
            @confirm="CompleteDartfs(record.manuscript_ID)"
            okText="是"
            cancelText="否"
          >
            <a>提交</a>
          </a-popconfirm>
        </span>
      </a-table>
    </a-card>
  </div>
</template>
<script>
import { GetManuscriptToDrafts, DeleteMansuscriptDrafts, CompleteMansuscriptDrafts } from '@/api/AuthorManuscriptApi'
const columns = [
  {
    title: '论文编号',
    dataIndex: 'manuscript_ID',
    width: '10%'
  },
  {
    title: '论文标题',
    dataIndex: 'manuscript_Name',
    width: '30%'
  },
  {
    title: '关键词',
    dataIndex: 'manuscript_KeyWork',
    width: '30%'
  },
  {
    title: '投稿栏目',
    dataIndex: 'manuscriptColumn_ID',
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
    GetManuscriptToDrafts().then(res => {
      console.log(res)
      this.data = res
      this.loading = false
      this.ori = res
    }).catch()
  },
  data () {
    return {
      data: [],
      ori: [],
      ser: '',
      columns,
      loading: true,
      queryParam: {}
    }
  },
  methods: {
    Delete (id) {
      this.data = this.data.filter(items => items.manuscript_ID !== id)
      DeleteMansuscriptDrafts(id).then().catch()
    },
    Edit (mid) {
      this.$router.push({ name: 'ModifyDraftManuscript', params: { id: mid } })
    },
    CompleteDartfs (id) {
      CompleteMansuscriptDrafts(id).then(GetManuscriptToDrafts().then(res => {
        this.$message.success('稿件投递成功')
        this.data = this.data.filter(items => items.manuscript_ID !== id)
      }).catch()).catch()
    },
    search () {
      console.log(this.ser)
      var str = this.ser
      this.data = []
      this.ori.filter(item => {
        if (item.manuscript_Name.includes(str)) {
          this.data.push(item)
        }
      })
    }
  }
}
</script>
<style>
  #components-table-demo-size {
    margin-bottom: 16px;
  }
</style>
