<template>
  <div class="divmain">
    <h1 >{{ data.manuscriptReview_Title }}</h1>
    <h2>{{ data.manuscriptReview_Etitle }}</h2>
    <div class="content">
      <h4><b>关键词：</b>{{ data.manuscriptReview_Keyword }}<br><br></h4>
      <h4> <b>摘要:</b>{{ data.manuscriptReview_Abstract }}<br><br></h4>
      <div v-html="this.content" style="size=+3"></div><br>
    </div>
    <div class="content">
      你的主要稿件：<a @click="GetMainfile(1)">111</a><br>
      你的次要稿件:<br>
    </div></div>
</template>
<script>
import { GetShowManuscriptReviews, GetFile } from '@/api/ManuscriptReview'

export default {
  data () {
    return {
      data: [],
      content: ' '
    }
  },
  created () {
    console.log('123123213123+++++' + this.$route.params.id)
    GetShowManuscriptReviews(this.$route.params.id).then(res => { console.log(res); this.data = res; this.content = res.manuscriptReview_Text }).catch()
  },
  methods: {
    GetMainfile (id) {
      GetFile(32).then(res => {
        const blob = new Blob([res.data], { type: 'application/pdf' })
        const fileName = `模板文件`
        if ('download' in document.createElement('a')) { // 非IE下载
          const elink = document.createElement('a')
          elink.download = fileName
          elink.style.display = 'none'
          elink.href = URL.createObjectURL(blob)
          document.body.appendChild(elink)
          elink.click()
          URL.revokeObjectURL(elink.href) // 释放URL 对象
          document.body.removeChild(elink)
        } else { // IE10+下载
          navigator.msSaveBlob(blob, fileName)
        }
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
</style>
