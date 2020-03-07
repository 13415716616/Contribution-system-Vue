<template>
  <div class="divmain">
    <a-card style="margin-top: 24px" :bordered="false" >
      <h1 >{{ data.manuscriptReview_Title }}</h1>
      <h4>{{ data.manuscriptReview_Etitle }}</h4>
      <div class="content">
        <h3><b>关键词： </b>{{ data.manuscriptReview_Keyword }}<br><br></h3>
        <h3> <b>摘要:  </b>{{ data.manuscriptReview_Abstract }}<br><br></h3>
        <div v-html="this.content" style="font-size:15px">></div><br>
      </div>
      <a-card type="inner" title="稿件下载" class="content">
        <detail-list size="small">
          <detail-list-item term="主要稿件下载：">下载</detail-list-item>
          <detail-list-item term="次要稿件下载：">下载</detail-list-item>
        </detail-list>
      </a-card><br>
      <div>
        <a-button class="btn" type="primary" @click="Returnselect">返回选择</a-button>
        <a-button class="btn" type="primary" @click="CommentMansucript">查看评论</a-button>
      </div>
    </a-card>
  </div>
</template>
<script>
import { GetShowManuscriptReviews, GetFile } from '@/api/ManuscriptReview'
import DetailList from '@/components/tools/DetailList'
const DetailListItem = DetailList.Item

export default {
  name: 'CheckManuscript',
  components: {
    DetailList,
    DetailListItem
  },
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
    },
    Returnselect () {
      this.$router.push({ name: 'ShowEditorInfo' })
    },
    CommentMansucript () {
      var id = this.$route.params.id
      this.$router.push({ name: 'ShowEditorInfo', params: { id: id } })
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
    margin-right: 30px
  }
</style>
