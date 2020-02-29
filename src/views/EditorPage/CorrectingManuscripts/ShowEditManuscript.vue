<template>
  <div class="divmain">
    <h1 >{{ data.manuscriptReview_Title }}</h1>
    <h3>{{ data.manuscriptReview_Etitle }}</h3>
    <div class="content">
      关键词：{{ data.manuscriptReview_Keyword }}<br><br>
      摘要:{{ data.manuscriptReview_Abstract }}<br><br>
      正文：<div v-html="this.content" style="size=+3"></div><br><br>
    </div>
    <div class="content">
      你的主要稿件：<br>
      你的次要稿件:<br>
    </div>
    <div>
      <a-button class="btn" type="primary" @click="Returnselect">返回选择</a-button>
      <a-button class="btn" type="primary" @click="CommentMansucript">稿件留言</a-button>
      <a-button type="primary">通过稿件</a-button>
    </div>
  </div>
</template>
<script>
import { GetShowManuscriptReviews } from '@/api/ManuscriptReview'

export default {
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
      this.$router.push({ name: 'ManuscriptEnquiry' })
    },
    CommentMansucript () {
      var mid = this.$route.params.id
      console.log('id:' + mid)
      this.$router.push({ name: 'CommentManuscript', params: { id: mid } })
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
