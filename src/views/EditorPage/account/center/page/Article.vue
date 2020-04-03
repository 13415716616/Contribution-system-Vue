<template>
  <a-list
    size="large"
    rowKey="id"
    :loading="loading"
    itemLayout="vertical"
    :dataSource="data"
  >
    <a-list-item :key="item.manuscript_Title" slot="renderItem" slot-scope="item">
      <!--      <template slot="actions">-->
      <!--        <icon-text type="like-o" :text="item.like" />-->
      <!--        <icon-text type="message" :text="item.message" />-->
      <!--      </template>-->
      <a-list-item-meta>
        <a slot="title">{{ item.manuscript_Title }}</a>
        <template slot="description">
          &nbsp;&nbsp;&nbsp;&nbsp; 关键词：{{ item.manuscript_Keyword }}
          &nbsp;&nbsp; 当前稿件状态：{{ item.manuscript_Status }}<br>
          &nbsp;&nbsp;投稿时间：{{ item.time }}
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
import { GetEndManuscript } from '@/api/EditManuscript'

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
      GetEndManuscript().then(res => {
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
