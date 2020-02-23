<template>
  <div >
    <a-card :bordered="false" class="card">
      <result type="success" :title="title">
        <a-row>
          <div class="info">
            <p>稿件名称：{{ info.manuscriptReview_Title }}</p>
            <p>稿件作者：{{ info.author_name }}</p>
            <p>稿件状态：等待主编审查</p>
          </div>
        </a-row>
        <a-row>
          <a-col :span="23">
            <div style=" text-align:center">
              <a-button type="primary" style="margin-top:30px" >查看稿件</a-button>
              <a-button type="primary" style="margin-top:30px" class="btn" @click="returnpage">返回首页</a-button></div>
          </a-col>
        </a-row>
      </result>
    </a-card></div>
</template>

<script>
import { Result } from '@/components'
import { EditShowManusript } from '@/api/EditManuscript'
export default {
  name: 'ManuscriptComplete',
  components: {
    Result
  },
  data () {
    return {
      manuscriptReview_Title: '',
      info: {},
      title: '稿件审查通过',
      description: '描述'
    }
  },
  created () {
    console.log(this.$route.params.id)
    EditShowManusript(this.$route.params.id).then(res => { console.log(res); this.info = res }).catch()
  },
  methods: {
    returnpage () {
      this.$router.push({ name: 'dashboard/workplace' })
    }
  }

}
</script>
<style lang="less" scoped>
  .card{
    margin-left: 28%;
    margin-right: 28%;
    height: 500px;
    margin-top: 35px
  }
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
