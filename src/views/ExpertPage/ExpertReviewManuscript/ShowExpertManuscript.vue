<template>
  <div class="divmain">
    <a-card>
      <h1 >{{ data.manuscript_Title }}</h1>
      <h3>{{ data.manuscript_Etitle }}</h3>
      <div class="content">
        <h3>关键词：{{ data.manuscript_Keyword }}</h3><br>
        <h3>English Keywords：{{ data.manuscript_EKeyword }}</h3><br>
        <h3>摘要:{{ data.manuscript_Abstract }}</h3><br>
        <h3>English Abstract:{{ data.manuscript_EAbstract }}</h3><br>
        <div v-html="this.content" style="size=+3"></div><br>
      </div>
      <div>
        <a-button class="btn" type="primary" @click="Returnselect">返回选择</a-button>
        <!-- <a-button class="btn" type="primary" @click="CommentMansucript">退回稿件</a-button>
        <a-button type="primary" @click="showConfirm">通过稿件</a-button> -->
        <a-button class="btn" type="primary" >审查稿件</a-button>
      </div>
    </a-card>
  </div>
</template>
<script>
import { GetReviewManuscriptID } from '@/api/ExpertManuscript'
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
    GetReviewManuscriptID(this.$route.params.id).then(res => { console.log(res); this.data = res; this.content = res.manuscript_Content }).catch()
  },
  methods: {
    Returnselect () {
      this.$router.push({ name: 'SelectManuscript' })
    },
    CommentMansucript () {
      var mid = this.$route.params.id
      console.log('id:' + mid)
      this.$router.push({ name: 'CommentChiefManuscript', params: { id: mid } })
    }
    // getfile () {
    //   GetFile(this.$route.params.id).then(res => {
    //     console.log(res)
    //     const blob = new Blob([res], { type: res.type })
    //     const objectUrl = URL.createObjectURL(blob)
    //     window.location.href = objectUrl
    //   }).catch()
    // }
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
