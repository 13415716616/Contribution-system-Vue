<template>
  <a-list
    size="large"
    rowKey="id"
    :loading="loading"
    itemLayout="vertical"
    :dataSource="data"
  >
    <a-list-item :key="item.manuscriptReview_Title" slot="renderItem" slot-scope="item">
      <!--      <template slot="actions">-->
      <!--        <icon-text type="like-o" :text="item.like" />-->
      <!--        <icon-text type="message" :text="item.message" />-->
      <!--      </template>-->
      <a-list-item-meta>
        <a slot="title" href="https://vue.ant.design/">{{ item.manuscriptReview_Title }}</a><br>
        <template slot="description">
          <!--          <span>-->
          <!--            <a-tag>Ant Design</a-tag>-->
          <!--            <a-tag>设计语言</a-tag>-->
          <!--            <a-tag>蚂蚁金服</a-tag>-->
          <!--          </span>-->
          &nbsp;&nbsp;&nbsp;&nbsp; {{ item.manuscriptReview_Keyword }}<div style="margin-top: 10px">
            <p style="size: 15" class="pl" >&nbsp;&nbsp;&nbsp;&nbsp;{{ item.manuscriptReview_Abstract }}</p></div>
          &nbsp;&nbsp; {{ item.manuscriptReview_Status }}<br>
          &nbsp;&nbsp;{{ item.manuscriptReview_Time }}
        </template>
      </a-list-item-meta>
      <!--      <article-list-content :description="item.ArticleListContent" :owner="item.ArticleListContent" :avatar="item.avatar" :href="item.href" :updateAt="item.updatedAt" />-->
    </a-list-item>
    <!--    <div slot="footer" v-if="data.length > 0" style="text-align: center; margin-top: 16px;">-->
    <!--      <a-button @click="loadMore" :loading="loadingMore">加载更多</a-button>-->
    <!--    </div>-->
  </a-list>
</template>

<script>
import { ArticleListContent } from '@/components'
import IconText from '@/views/list/search/components/IconText'
import { GetAllManuscriptReviews } from '@/api/ManuscriptReview'

export default {
  name: 'Article',
  components: {
    IconText,
    ArticleListContent
  },
  data () {
    return {
      loading: true,
      loadingMore: false,
      data: []
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      GetAllManuscriptReviews().then(res => {
        console.log('res111', res)
        this.data = res
        this.loading = false
      })
    },
    loadMore () {
      this.loadingMore = true
      this.$http.get('/list/article').then(res => {
        this.data = this.data.concat(res.result)
      }).finally(() => {
        this.loadingMore = false
      })
    }
  }
}
</script>

<style scoped>
  .pl{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
</style>
