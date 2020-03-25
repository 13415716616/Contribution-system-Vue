<template>
  <page-view :avatar="'https://localhost:5001'+avatar" :title="false">
    <div slot="headerContent">
      <div class="title">{{ user.name }}<span class="welcome-text">，欢迎回来</span></div>
      <div>{{ dec }}</div>
    </div>
    <div slot="extra">
      <a-row class="more-info">
        <a-col :span="12">
          <head-info title="待审核稿件" :content="1" :center="false" :bordered="false"/>
        </a-col>
        <a-col :span="12">
          <head-info title="已审核稿件" content="1" :center="false" :bordered="false"/>
        </a-col>
      </a-row>
    </div>

    <div>
      <a-row :gutter="24">
        <a-col :xl="16" :lg="24" :md="24" :sm="24" :xs="24">
          <a-card
            class="project-list"
            :loading="loading"
            style="margin-bottom: 24px;"
            :bordered="false"
            title="已审核稿件"
            :body-style="{ padding: 0 }">
            <a slot="extra">全部项目</a>
            <div>
              <a-card-grid class="project-card-grid" :key="i" v-for="(item, i) in complete.slice(0, 6)">
                <a-card :bordered="false" :body-style="{ padding: 0 }">
                  <a-card-meta>
                    <div slot="title" class="card-title" >
                      <!-- <a-avatar size="small" :src="item.cover"/> -->
                      <a>{{ item.manuscript_Title }}</a>
                    </div>
                    <div slot="description" class="card-description">
                      &nbsp;&nbsp;&nbsp;{{ item.manuscript_Keyword }}
                    </div>
                  </a-card-meta>
                  <div class="project-item">
                    <a href="/#/">{{ item.review_Time }}</a>
                    <!-- <span class="datetime">9小时前</span> -->
                  </div>
                </a-card>
              </a-card-grid>
            </div>
          </a-card>

          <a-card :loading="loading" title="采用稿件" :bordered="false">
            <a-list>
              <a-list-item :key="index" v-for="(item, index) in complete.slice(0, 6)" >
                <a-list-item-meta>
                  <a-avatar slot="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584763258451&di=bb18e851063cfcbdf72da59ba9116830&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201705%2F13%2F20170513103720_34k2y.jpeg" />
                  <div slot="title">
                    <a href="#">{{ item.manuscript_Title }}</a>
                  </div>
                  <div slot="description">{{ item.review_Time }}</div>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-card>
        </a-col>
        <a-col
          style="padding: 0 12px"
          :xl="8"
          :lg="24"
          :md="24"
          :sm="24"
          :xs="24">
          <a-card title="留空白" style="margin-bottom: 24px" :loading="radarLoading" :bordered="false" :body-style="{ padding: 0 }">
            <div style="min-height: 400px;">
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </page-view>
</template>

<script>
import { mapState } from 'vuex'
import { PageView } from '@/layouts'
import HeadInfo from '@/components/tools/HeadInfo'
import { Radar } from '@/components'
import { GetReviewManuscript, ShowCompleteManuscript } from '@/api/ExpertManuscript'

export default {
  name: 'Workplace',
  components: {
    PageView,
    HeadInfo,
    Radar
  },
  data () {
    return {
      manuscripts: [],
      complete: [],
      num: {
        darftManuscript: '',
        reviewsManusript: '',
        completeManuscript: ''
      },
      dec: '',
      loading: false,
      radarLoading: true,
      completedata: {}
    }
  },
  computed: {
    ...mapState({
      nickname: (state) => state.user.nickname,
      welcome: (state) => state.user.welcome
    }),
    userInfo () {
      return this.$store.getters.userInfo
    }
  },
  created () {
    console.log(this.userInfo)
    this.user = this.userInfo
    this.avatar = this.userInfo.avatar
    ShowCompleteManuscript().then(res => { this.complete = res; this.num.darftManuscript = res.leng; console.log(res) }).catch()
    GetReviewManuscript().then(res => { this.manuscripts = res; console.log(res) }).catch()
  }
}
</script>

<style lang="less" scoped>
  .project-list {

    .card-title {
      font-size: 0;

      a {
        color: rgba(0, 0, 0, 0.85);
        line-height: 24px;
        height: 24px;
        display: inline-block;
        vertical-align: top;
        font-size: 14px;

        &:hover {
          color: #1890ff;
        }
      }
    }
    .card-description {
      color: rgba(0, 0, 0, 0.45);
      height: 44px;
      line-height: 22px;
      overflow: hidden;
    }
    .project-item {
      display: flex;
      margin-top: 8px;
      overflow: hidden;
      font-size: 12px;
      height: 20px;
      line-height: 20px;
      a {
        color: rgba(0, 0, 0, 0.45);
        display: inline-block;
        flex: 1 1 0;

        &:hover {
          color: #1890ff;
        }
      }
      .datetime {
        color: rgba(0, 0, 0, 0.25);
        flex: 0 0 auto;
        float: right;
      }
    }
    .ant-card-meta-description {
      color: rgba(0, 0, 0, 0.45);
      height: 44px;
      line-height: 22px;
      overflow: hidden;
    }
  }

  .item-group {
    padding: 20px 0 8px 24px;
    font-size: 0;
    a {
      color: rgba(0, 0, 0, 0.65);
      display: inline-block;
      font-size: 14px;
      margin-bottom: 13px;
      width: 25%;
    }
  }

  .members {
    a {
      display: block;
      margin: 12px 0;
      line-height: 24px;
      height: 24px;
      .member {
        font-size: 14px;
        color: rgba(0, 0, 0, .65);
        line-height: 24px;
        max-width: 100px;
        vertical-align: top;
        margin-left: 12px;
        transition: all 0.3s;
        display: inline-block;
      }
      &:hover {
        span {
          color: #1890ff;
        }
      }
    }
  }

  .mobile {

    .project-list {

      .project-card-grid {
        width: 100%;
      }
    }

    .more-info {
      border: 0;
      padding-top: 16px;
      margin: 16px 0 16px;
    }

    .headerContent .title .welcome-text {
      display: none;
    }
  }

</style>
