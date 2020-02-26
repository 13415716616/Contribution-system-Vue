<template>
  <div style=" text-align:center">
    <a-card title="上传文件" class="card" style=" text-align:left">
      <a-card-grid style="width:90%;margin-left: 5%">
        上传稿件原件  <a-upload
          action="https://localhost:5001/api/Manuscript/uploadmain"
          name="file"
          :multiple="true"
          :headers="headers"
        ><a-button style="margin-left: 50%"> <a-icon type="upload" /> 上传文件</a-button>
        </a-upload></a-card-grid>
      <a-card-grid style="width:90%;margin-left: 5%">
        上传其他资料  <a-upload
          action="https://localhost:5001/api/Manuscript/uploadother"
          name="file"
          :multiple="true"
          :headers="headers"
        ><a-button style="margin-left: 50%"> <a-icon type="upload" /> 上传文件</a-button>
        </a-upload></a-card-grid>
    </a-card>
    <a-button type="primary" style="margin-top:30px" @click="nextStep">下一步</a-button>
  </div>
</template>
<script>
import Vue from 'vue'
import { Uploaddata } from '@/api/Contribute'
import { ACCESS_TOKEN } from '@/store/mutation-types'
// import VueBus from 'vue-bus'
export default {
  name: 'UploadDatastep',
  created () {
    console.log(this.$store.getters)
  },
  data () {
    return {
      ManuscriptHead: 24,
      headers: {
        ManuscriptID: this.$store.getters.manuscriptID,
        Authorization: 'Bearer ' + Vue.ls.get(ACCESS_TOKEN)
      }
    }
  },
  methods: {
    uploaddata (fileobj) {
      var filedata = fileobj.file
      console.log(filedata)
      Uploaddata(fileobj.file).then().catch()
    },
    nextStep () {
      console.log('12313123123')
      this.$emit('nextStep')
    }
  }
}
</script>

<style lang="less" scoped>
    .card {
        align-items: center;
    }
</style>
