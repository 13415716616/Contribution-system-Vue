<template>
  <div>
    <a-spin :spinning="spinning">
      <div class="divmain">
        <a-card style="margin-top: 24px" :bordered="false" >
          <h1 >{{ data.manuscript_Title }}</h1>
          <h3>{{ data.manuscript_Etitle }}</h3>
          <div class="content">
            <h3><b>关键词： </b>{{ data.manuscript_Keyword }}<br><br></h3>
            <h3><b>英文关键词： </b>{{ data.manuscript_EKeyword }}<br><br></h3>
            <h3> <b>摘要:  </b>{{ data.manuscript_Abstract }}<br><br></h3>
            <h3> <b>英文摘要:  </b>{{ data.manuscript_EAbstract }}<br><br></h3>
            <div v-html="this.content" style="font-size:16px">></div><br>
            <br><br>
            <h3> <b>稿件引用:  </b>
              <p v-for="i in refence" :key="i"> {{ i }}</p>
              <br><br>
            </h3>
          </div>
        </a-card>
      </div><br>
      <div style=" text-align:center">
        <a-button class="btn" type="primary" @click="Returnselect">保存稿件</a-button>
        <a-button class="btn" type="primary" @click="CompleteMansucript">投递稿件</a-button>
      </div>
    </a-spin>
  </div>
</template>
<script>
import { GetFile } from '@/api/ManuscriptReview'
import DetailList from '@/components/tools/DetailList'
import { GetManuscript, CompleteManuscript } from '@/api/AuthorManuscriptApi'
import { GetManuscriptAuthor } from '@/api/EditManuscript'
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
      content: ' ',
      author: [],
      spinning: true,
      refence: []
    }
  },
  created () {
    console.log('123123213123+++++' + this.$store.getters.manuscriptID)
    GetManuscript(this.$store.getters.manuscriptID).then(res => { console.log(res); this.data = res; this.content = res.manuscript_Content; this.spinning = false; this.match() }).catch()
    GetManuscriptAuthor(this.$store.getters.manuscriptID).then(res => { console.log(res); this.author = res }).catch()
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
      this.$router.push({ name: 'Drafts' })
    },
    CompleteMansucript () {
      this.$confirm({
        title: '你确定通过该稿件吗?',
        content: h => <div style="color:red;">提交后不可更改</div>,
        onOk: () => {
          CompleteManuscript(this.data).then(this.$emit('nextStep')).catch()
        },
        onCancel () {
          console.log('Cancel')
        },
        class: 'test'
      })
    },
    match () {
      var s = this.data.manuscript_Reference
      console.log(s.split(/\[[0-9]\]/))
      this.refence = s.split(/\[[0-9]\]/)
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
  }，
  .divother{
    text-align: left;
  }
</style>
