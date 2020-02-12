<template>
  <div class="divmain">
    <h1 >标题：{{ data.manuscriptReview_Title }}</h1>
    <h3>英文标题:{{ data.manuscriptReview_Etitle }}</h3>
    <div class="content">
      关键词：{{ data.manuscriptReview_Keyword }}<br><br>
      摘要:{{ data.manuscriptReview_Abstract }}<br><br>
      正文：{{ data.manuscriptReview_Text }}<br><br>
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
      data: []
    }
  },
  created () {
    console.log('123123213123+++++' + this.$route.params.id)
    GetShowManuscriptReviews(this.$route.params.id).then(res => { console.log(res); this.data = res }).catch()
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
