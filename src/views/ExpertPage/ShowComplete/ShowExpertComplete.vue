<template>
  <div>
    <a-card>
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="稿件标题">
                <a-input v-model="queryParam.id" placeholder=""/>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="稿件状态">
                <a-select v-model="queryParam.status" placeholder="请选择" default-value="0">
                  <a-select-option value="0">全部</a-select-option>
                  <a-select-option value="1">关闭</a-select-option>
                  <a-select-option value="2">运行中</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-button >查询</a-button>
            </a-col>
          </a-row>
        </a-form>
      </div>
      <a-table :dataSource="data" :columns="columns" size="middle" :rowKey="row=>row.manuscriptReview_ID">
        <span slot="action" slot-scope="text, record">
          <a @click="Show(record.manuscriptReview_ID)">查看稿件</a>
        </span>
      </a-table>
    </a-card>
  </div>
</template>
<script>
import { ShowCompleteManuscript } from '@/api/ExpertManuscript'

const columns = [
  {
    title: '审核编号',
    dataIndex: 'editorReview_ID',
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
    width: '18%'
  },
  {
    title: '投稿用户',
    dataIndex: 'author_ID',
    width: '15%'
  },
  {
    title: '审核时间',
    dataIndex: 'review_Time',
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
      queryParam: {}
    }
  },
  created () {
    ShowCompleteManuscript().then(res => { this.data = res; console.log(res) }).catch()
  },
  methods: {
    Show (mid) {
      this.$router.push({ name: 'ShowChiefManuscript', params: { id: mid } })
    }
  }
}
</script>
