<template>
  <div class="t">
    <a-card>
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="稿件标题">
                <a-input v-model="serch" placeholder=""/>
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
      </div>
      <a-table :dataSource="data" :columns="columns" size="middle" :rowKey="row=>row.manuscriptReview_ID">
        <span slot="action" slot-scope="text, record">
          <a @click="Show(record.manuscript_ID)">查看稿件</a>
          <a-divider type="vertical" />
          <a @click="Reviews(record.manuscript_ID)">审查稿件</a>
        </span>
      </a-table>
    </a-card>
  </div>
</template>
<script>
import { GetChiefEditorManuscript } from '@/api/ChiefEditorManuscriptApi'
import { GetManuscriptColoum } from '@/api/AuthorManuscriptApi'

const columns = [
  {
    title: '论文编号',
    dataIndex: 'manuscript_ID',
    width: '8%'
  },
  {
    title: '投稿用户',
    dataIndex: 'author_Name',
    width: '15%'
  },
  {
    title: '论文标题',
    dataIndex: 'manuscript_Title',
    width: '30%'
  },
  {
    title: '关键词',
    dataIndex: 'manuscript_Keyword',
    width: '15%'
  },
  {
    title: '所属栏目',
    dataIndex: 'manuscriptColumn',
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
      select: {},
      state: false,
      ori: {},
      editor: {}
    }
  },
  created () {
    GetChiefEditorManuscript().then(res => { this.data = res; console.log(res); this.ori = res }).catch()
    GetManuscriptColoum().then(result => { console.log(result); this.select = result }).catch()
  },
  methods: {
    Show (mid) {
      this.$router.push({ name: 'ShowChiefManuscript', params: { id: mid } })
    },
    CommentMansucript () {
      var mid = this.$route.params.id
      console.log('id:' + mid)
      this.$router.push({ name: 'CommentChiefManuscript', params: { id: mid } })
    },
    Reviews (mid) {
      this.$router.push({ name: 'ReviewsChiefManuscript', params: { id: mid } })
    },
    search () {
      this.data = []
      this.ori.filter(item => {
        if (item.manuscript_Title.includes(this.serch) && item.manuscriptColumn.includes(this.state)) {
          this.data.push(item)
        }
      })
      console.log(this.data)
    }
  }
}
</script>
<style scoped>
  .t{
    text-align: center;
  }
</style>
