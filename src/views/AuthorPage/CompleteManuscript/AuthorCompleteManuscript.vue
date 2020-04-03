<template>
  <div>

    <a-card
      style="margin-top: 24px"
      :bordered="false"
      title="通过稿件">

      <a-list size="large" :pagination="{showSizeChanger: true, showQuickJumper: true}">
        <a-list-item :key="index" v-for="(item, index) in mdata">
          <a-list-item-meta :description="item.keyWord">
            <a-avatar slot="avatar" size="large" shape="square" :src="'https://localhost:5001'+item.avtor"/>
            <a slot="title">{{ item.titile }}</a>
          </a-list-item-meta>
          <div slot="actions">
            <a @click="add(item.manuscript_ID)">查看稿件</a>
          </div>
          <div class="list-content">
            <div class="list-content-item">
              <span>投稿时间</span>
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
  </div>
</template>

<script>
import HeadInfo from '@/components/tools/HeadInfo'
import TaskForm from './modules/TaskForm'
import Vue from 'vue'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { GetCompleteManuscrit } from '@/api/AuthorManuscriptApi'

export default {
  name: 'StandardList',
  components: {
    HeadInfo,
    TaskForm
  },
  data () {
    return {
      data: [],
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
    GetCompleteManuscrit().then(res => { this.mdata = res; console.log(res) }).catch()
  },
  methods: {
    add (mid) {
      this.visible = true
      this.headers.ManuscriptID = mid
    },
    setavatar (mid) {
      console.log(mid)
      // this.headers.ManuscriptID = mid
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
