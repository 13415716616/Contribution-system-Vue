<template>
  <div class="divmain">
    <a-card>
      <h1 >{{ data.manuscript_Title }}</h1>
      <h3>{{ data.manuscript_Etitle }}</h3>
      <div class="content">
        <h4>关键词：{{ data.manuscript_Keyword }}</h4><br>
        <h4>English Keywords：{{ data.manuscript_EKeyword }}</h4><br>
        <h4>摘要：{{ data.manuscript_Abstract }}</h4><br>
        <h4>English Abstract：{{ data.manuscript_EAbstract }}</h4><br>
        <div v-html="this.content" style="size=+3"></div><br>
        <h4> <b>稿件引用:  </b>
          <p v-for="i in refence" :key="i"> {{ i }}</p>
          <br><br>
        </h4>
      </div>
      <div>
        <a-button class="btn" type="primary" @click="Returnselect">返回选择</a-button>
        <!-- <a-button class="btn" type="primary" @click="CommentMansucript">退回稿件</a-button> -->
        <a-button type="primary" @click="CommentMansucript">审查稿件</a-button>
      </div>
    </a-card>
  </div>
</template>
<script>
import { GetManuscript } from '@/api/EditManuscript'

export default {
  data () {
    return {
      data: [],
      content: '',
      ok: false,
      refence: []
    }
  },
  created () {
    console.log('123123213123+++++' + this.$route.params.id)
    GetManuscript(this.$route.params.id).then(res => { console.log(res); this.data = res; this.content = res.manuscript_Content; this.match() }).catch()
  },
  methods: {
    Returnselect () {
      this.$router.push({ name: 'ManuscriptReview' })
    },
    CommentMansucript () {
      var mid = this.$route.params.id
      console.log('id:' + mid)
      this.$router.push({ name: 'ReviewFirstManuscript', params: { id: mid } })
    },
    match () {
      var s = this.data.manuscript_Reference
      console.log(s.split(/\[[0-9]\]/))
      this.refence = s.split(/\[[1-9]\d?|100\]/)
    }
    // showConfirm () {
    //   this.$confirm({
    //     title: '你确定通过该稿件吗?',
    //     content: h => <div style="color:red;">初审通过将移交专家复审</div>,
    //     onOk: () => {
    //       console.log('OK')
    //       CompleteFirstContribution(this.data).then().catch()
    //       this.$message.success('稿件初审通过')
    //     },
    //     onCancel () {
    //       console.log('Cancel')
    //     },
    //     class: 'test'
    //   })
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
