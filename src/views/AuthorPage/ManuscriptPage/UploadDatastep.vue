<template>
  <div>
    <a-card title="上传文件" class="card">
      <a-card-grid style="width:50%;textAlign:'center';margin-left: 10%">
        上传稿件原件  <a-upload
          name="file"
          :multiple="true"
          action="https://localhost:5001/api/Manuscript/uploadmain"
          :headers="headers"
          @change="handleChange"
        ><a-button style="margin-left: 50%"> <a-icon type="upload" /> 上传文件</a-button>
        </a-upload></a-card-grid>
    </a-card>
  </div>
</template>
<script>
export default {
  name: 'UploadDatastep'
}
</script>

<style lang="less" scoped>
    .card{
        align-items: center;
    }
</style>
