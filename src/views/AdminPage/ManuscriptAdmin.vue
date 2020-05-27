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
          <a @click="Edit(record.manuscript_ID)">修改稿件</a>
          <a-divider type="vertical" />
          <a-popconfirm
            title="你确定要删除这个稿件吗?"
            @confirm="Delete(record.manuscript_ID)"
            okText="是"
            cancelText="否"
          >
            <a>删除</a></a-popconfirm>
          <a-divider type="vertical" />
          <a @click="show">修改状态</a>
        </span>
      </a-table>
      <a-modal :visible="vis" title="修改稿件状态" @cancel="cancel" width="40%" @ok="cancel">
        <a-form :form="form">
          <a-form-item label="稿件状态" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-select v-decorator="['Expert_Education']">
              <a-select-option key="1" value="等待编辑审查">等待编辑审查</a-select-option>
              <a-select-option key="1" value="等待家审查">等待专家家审查</a-select-option>
              <a-select-option key="1" value="等待主编审查">等待主编审查</a-select-option>
              <a-select-option key="1" value="采纳稿件">采纳稿件</a-select-option>
              <a-select-option key="1" value="退回稿件">退回稿件</a-select-option>
            </a-select>
          </a-form-item>
        </a-form>
      </a-modal>
    </a-card>
  </div>
</template>
<script>
import { DeleteMansuscriptDrafts } from '@/api/AuthorManuscriptApi'
import { GetAllManuscript } from '@/api/AdminApi'
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
    width: '25%'
  },
  {
    title: '投稿栏目',
    dataIndex: 'manuscriptColumn',
    width: '10%'
  },
  {
    title: '稿件状态',
    dataIndex: 'manuscript_Status',
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
    GetAllManuscript().then(res => {
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
      queryParam: {},
      vis: false
    }
  },
  methods: {
    Delete (id) {
      this.data = this.data.filter(items => items.manuscript_ID !== id)
      DeleteMansuscriptDrafts(id).then().catch()
    },
    Edit (mid) {
      this.$router.push({ name: 'AdminEditManuscript', params: { id: mid } })
    },
    State (id) {
      this.show()
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
    },
    show () {
      this.vis = true
    },
    cancel () {
      this.vis = false
    }
  }
}
</script>
<style>
  #components-table-demo-size {
    margin-bottom: 16px;
  }
</style>
