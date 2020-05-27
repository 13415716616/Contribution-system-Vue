<template>
  <div>

    <a-card
      style="margin-top: 24px"
      :bordered="false"
      title="标准列表">

      <a-list size="large" :pagination="{showSizeChanger: true, showQuickJumper: true}">
        <a-list-item :key="index" v-for="(item, index) in mdata">
          <a-list-item-meta :description="item.manuscript_Keyword">
            <a-avatar slot="avatar" size="large" shape="square" :src="'https://localhost:5001'+item.avtor"/>
            <a slot="title">{{ item.manuscript_Title }}</a>
          </a-list-item-meta>
          <div slot="actions">
            <a @click="add(item.manuscript_ID,item.avtor)">版面设计</a>
          </div>
          <div class="list-content">
            <div class="list-content-item">
              <span>投稿人</span>
              <p>{{ item.author_Name }}</p>
            </div>
            <div class="list-content-item">
              <span>开始时间</span>
              <p>{{ item.time }}</p>
            </div>
            <!-- <div class="list-content-item">
              <a-progress :percent="item.progress.value" :status="!item.progress.status ? null : item.progress.status" style="width: 180px" />
            </div> -->
          </div>
        </a-list-item>
      </a-list>

      <task-form ref="taskForm" />
    </a-card>

    <a-modal :width="840" :visible="visible" title="任务添加" @ok="handleSubmit" @cancel="visible = false">
      <a-form @submit="handleSubmit" :form="form">
        <a-form-item
          label="版面图片"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
        >
          <img width="300px" height="300px" :src="'https://localhost:5001'+image">
        </a-form-item>
        <div style="position: relative;margin: 0 auto;width: 100%;max-width: 180px;text-align: center">
          <a-upload
            name="file"
            :multiple="true"
            action="https://localhost:5001/api/ChiefEditor/LayoutUpload"
            :headers="headers"
            :beforeUpload="setavatar()"
          >
            <a-button> <a-icon type="upload" /> 上传稿件图片 </a-button>
          </a-upload></div><br>
        <a-form-item
          label="版面描述"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
        >
          <a-textarea v-decorator="['desc']" :rows="5"></a-textarea>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import HeadInfo from '@/components/tools/HeadInfo'
import TaskForm from './modules/TaskForm'
import Vue from 'vue'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { GetAllCompleteInfo } from '@/api/ChiefEditorManuscriptApi'

export default {
  name: 'StandardList',
  components: {
    HeadInfo,
    TaskForm
  },
  data () {
    return {
      image: '',
      mdata: [],
      status: 'all',
      visible: false,
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 }
      },
      headers: {
        ManuscriptID: this.$store.getters.manuscriptID,
        Authorization: 'Bearer ' + Vue.ls.get(ACCESS_TOKEN)
      }
    }
  },
  created () {
    GetAllCompleteInfo().then(res => { this.mdata = res; console.log(res) }).catch()
  },
  methods: {
    add (mid, info) {
      this.visible = true
      this.headers.ManuscriptID = mid
      console.log(this.headers.ManuscriptID)
      this.image = info
    },
    setavatar () {
      console.log(this.image)
      // this.headers.ManuscriptID = this.image
    },
    handleSubmit () {
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
    .ant-avatar-lg {
        width: 48px;
        height: 48px;
        line-height: 48px;
    }

    .list-content-item {
        color: rgba(0, 0, 0, .45);
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
        margin-left: 40px;
        span {
            line-height: 20px;
        }
        p {
            margin-top: 4px;
            margin-bottom: 0;
            line-height: 22px;
        }
    }
</style>
