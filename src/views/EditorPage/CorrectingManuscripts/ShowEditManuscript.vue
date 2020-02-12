<template>
  <div class="divmain">
    <h1 >标题：{{ data.manuscriptReview_Title }}</h1>
    <h3>英文标题:{{ data.manuscriptReview_Etitle }}</h3>
    <div class="content">
      关键词：{{ data.manuscriptReview_Keyword }}<br><br>
      摘要:{{ data.manuscriptReview_Abstract }}<br><br>
      正文：<div v-html="this.content" style="size=+3"></div><br><br>
    </div>
    <div class="content">
      你的主要稿件：<br>
      你的次要稿件:<br>
    </div></div>
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
    GetShowManuscriptReviews(2).then(res => { console.log(res); this.data = res; this.content = res.manuscriptReview_Text }).catch()
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
</style>
