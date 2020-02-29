<template>
  <div class="divmain">
    <h1>{{ data.manuscriptReview_Title }}</h1>
    <h4>{{ data.manuscriptReview_Etitle }}</h4>
    <div class="content">
      <h3> 关键词：{{ data.manuscriptReview_Keyword }}</h3><br>
      <h3>摘要:{{ data.manuscriptReview_Abstract }}</h3><br>
      正文：<div v-html="this.content" style="font-size:15px"></div><br>
    </div>
    <a-card type="inner" title="稿件下载" class="content">
      <detail-list size="small">
        <detail-list-item term="主要稿件下载："><a @click="getfile">下载</a></detail-list-item>
        <detail-list-item term="次要稿件下载：">下载</detail-list-item>
      </detail-list>
    </a-card><br>
    <div>
      <a-button class="btn" type="primary" @click="Returnselect">返回选择</a-button>
      <a-button class="btn" type="primary" @click="CommentMansucript">评论稿件</a-button>
      <a-button type="primary">通过稿件</a-button>
    </div>
  </div>
</template>
<script>
import { GetShowManuscriptReviews, GetFile } from '@/api/ManuscriptReview'
import DetailList from '@/components/tools/DetailList'
const DetailListItem = DetailList.Item

export default {
  components: {
    DetailList,
    DetailListItem
  },
  data () {
    return {
      data: [],
      content: ''
    }
  },
  created () {
    console.log('123123213123+++++' + this.$route.params.id)
    GetShowManuscriptReviews(this.$route.params.id).then(res => { console.log(res); this.data = res; this.content = res.manuscriptReview_Text }).catch()
  },
  methods: {
    Returnselect () {
      this.$router.push({ name: 'SelectManuscript' })
    },
    CommentMansucript () {
      var mid = this.$route.params.id
      console.log('id:' + mid)
      this.$router.push({ name: 'CommentChiefManuscript', params: { id: mid } })
    },
    getfile () {
      GetFile(this.$route.params.id).then(res => {
        console.log(res)
        const blob = new Blob([res], { type: res.type })
        const objectUrl = URL.createObjectURL(blob)
        window.location.href = objectUrl
      }).catch()
    }
  }
}
</script>

<style lang="less">
  .divmain{
    text-align: center
  }
  .content{
    text-align:left;
    margin-left: 5%;
    margin-right: 5%
  }
  .btn{
    margin-right: 30px;
  }
</style>
