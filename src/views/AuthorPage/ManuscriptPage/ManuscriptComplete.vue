<template>
  <div >
    <a-row>
      <a-col :span="15" :offset="10">
        <font size="6" class="col1">你的稿件已投稿完成</font>
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="14" :offset="10">
        <div class="info">
          <p>稿件名称：{{ info.manuscript_Title }}</p>
          <p>稿件作者：{{ info.author_name }}</p>
          <p>稿件状态：等待审查</p>
        </div></a-col>
    </a-row>
    <a-row>
      <a-col :span="23">
        <div style=" text-align:center">
          <a-button type="primary" style="margin-top:30px" >查看稿件</a-button>
          <a-button type="primary" style="margin-top:30px" class="btn">返回首页</a-button></div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { GetManuscript } from '@/api/Contribute'
export default {
  name: 'ManuscriptComplete',
  data () {
    return {
      id: this.$store.getters.manuscriptID,
      info: {}
    }
  },
  created () {
    GetManuscript(this.id).then(res => { this.info = res }).catch()
  }
}
</script>
<style lang="less" scoped>
    .col1{
        margin-top: 50px
    }
    .info{
        text-align:left;
        margin-left: 30px;
        margin-top: 30px;
    }
    .btn{
        margin-left: 5%
    }
</style>
