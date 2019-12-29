<template>
  <div>
    <a-steps :current="1" size="small" class="step" style="margin-bottom: 20px;">
      <a-step title="查看协议" />
      <a-step title="填写信息" />
      <a-step title="上传资料" />
      <a-step title="作者信息" />
      <a-step title="完成" />
    </a-steps>
    <Instructions v-if="currentTab === 2" @nextStep="nextStep"></Instructions>
    <AddContributepage v-if="currentTab === 1" @nextStep="nextStep"></AddContributepage>
    <UploadDatastep v-if="currentTab === 0"></UploadDatastep>
  </div>
</template>

<script>
import Instructions from './Instructions'
import AddContributepage from './AddContributepage'
import UploadDatastep from './UploadDatastep'

export default {
  components: {
    Instructions,
    AddContributepage,
    UploadDatastep
  },
  data () {
    return {
      currentTab: 0
    }
  },
  methods: {
    nextStep () {
      if (this.currentTab < 2) {
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
    margin-right: 5%
  }
  .content{
    width: 100px;
    height: 500px;
  }
</style>
