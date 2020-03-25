<template>
  <div>

    <a-card
      style="margin-top: 24px"
      :bordered="false"
      title="标准列表">

      <a-list size="large" :pagination="{showSizeChanger: true, showQuickJumper: true}">
        <a-list-item :key="index" v-for="(item, index) in mdata">
          <a-list-item-meta :description="item.keyWord">
            <a-avatar slot="avatar" size="large" shape="square" :src="'https://localhost:5001'+item.avtor"/>
            <a slot="title">{{ item.tiTle }}</a>
          </a-list-item-meta>
          <div slot="actions">
            <a @click="add(item.manuscript_ID,item.avtor)">版面设计</a>
          </div>
          <div class="list-content">
            <div class="list-content-item">
              <span>Owner</span>
              <p>{{ item.author_ID }}</p>
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
            :beforeUpload="setavatar(111111)"
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

const data = []
data.push({
  title: 'Alipay',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
  description: '那是一种内在的东西， 他们到达不了，也无法触及的',
  owner: '付晓晓',
  startAt: '2018-07-26 22:44',
  progress: {
    value: 90
  }
})
data.push({
  title: 'Angular',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
  description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
  owner: '曲丽丽',
  startAt: '2018-07-26 22:44',
  progress: {
    value: 54
  }
})

export default {
  name: 'StandardList',
  components: {
    HeadInfo,
    TaskForm
  },
  data () {
    return {
      data,
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
    setavatar (mid) {
      console.log(mid)
      this.headers.ManuscriptID = mid
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
