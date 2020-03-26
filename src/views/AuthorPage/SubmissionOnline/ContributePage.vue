<template>
  <div>
    <a-steps :current="currentTab" size="small" class="step" style="margin-bottom: 20px;">
      <a-step title="查看协议" />
      <a-step title="填写信息" />
      <a-step title="上传资料" />
      <a-step title="作者信息" />
      <a-step title="检查信息" />
      <a-step title="完成" />
    </a-steps>
    <Instructions v-if="currentTab === 0" @nextStep="nextStep"></Instructions>
    <AddContributepage v-if="currentTab === 1" @nextStep="nextStep"></AddContributepage>
    <UploadDatastep v-if="currentTab === 2" @nextStep="nextStep"></UploadDatastep>
    <AddAuthor v-if="currentTab === 3" @nextStep="nextStep"></AddAuthor>
    <CheckManuscript v-if="currentTab===4" @nextStep="nextStep"></CheckManuscript>
    <ManuscriptComplete v-if="currentTab === 5"></ManuscriptComplete>
  </div>
</template>

<script>
import Instructions from './Instructions'
import AddContributepage from './AddContributepage'
import UploadDatastep from './UploadDatastep'
import AddAuthor from './AddAuthor'
import ManuscriptComplete from './ManuscriptComplete'
import CheckManuscript from './CheckManuscript'

export default {
  components: {
    Instructions,
    AddContributepage,
    UploadDatastep,
    AddAuthor,
    ManuscriptComplete,
    CheckManuscript
  },
  data () {
    return {
      currentTab: 0,
      description: '在这里进行稿件的在线投递'
    }
  },
  created () {
    var num = this.$route.params.num
    if (num != null) { this.currentTab = num }
  },
  methods: {
    nextStep () {
      if (this.currentTab <= 4) {
        this.currentTab += 1
      }
    }
  }

}
</script>
<style lang="less" scoped>
  .card{
    margin-left: 20px;
    height: 600px;
  }
  .step{
    width: 90%;
    margin-right: 100px;
    margin-left: 5%
  }
  .content{
    width: 100px;
    height: 500px;
  }
</style>
