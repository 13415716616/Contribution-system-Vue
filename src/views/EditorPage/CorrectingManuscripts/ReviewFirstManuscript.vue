<template>
  <div>
    <a-card title="稿件信息">
      <a-row>
        <a-col>
          <h4>稿件名称：{{ data.manuscript_Name }}</h4>
        </a-col>
        <a-col>
          <h4>所属栏目：{{ data.manuscriptColumn_ID }}</h4>
        </a-col>
        <a-col>
          <h4>投稿用户：{{ data.author_ID }}</h4>
        </a-col>
        <a-col>
          <h4>投稿时间：{{ data.time }}</h4>
        </a-col>
        <a-col>
          <h4>稿件操作：<a @click="ShowManuscript">在线阅读</a></h4>
        </a-col>
        <a-col>
          <h4>稿件附件：<a @click="GetMainfile(32)">下载</a></h4>
        </a-col>
      </a-row>
    </a-card>
    <br>
    <a-card title="编辑审查">
      请输入初审意见：
      <a-textarea :rows="6" style="margin-top: 10px;" v-model="content"></a-textarea>
      <div class="divmain">
        <a-button class="btn" type="primary" @click="retutntable">返回列表</a-button>
        <a-button class="btn" type="primary" @click="ReturnComplete">退回稿件</a-button>
        <a-button type="primary" @click="shwomodal">提交专家审核</a-button>
      </div>
    </a-card>

    <a-modal :visible="first" title="分配专家审查" :width="500" @ok="showConfirm" @cancel="cancel">
      <a-row>
        <a-col :span="12">
          <a-menu style="width: 200px" mode="vertical" @click="handleClick">
            <a-menu-item v-for="(item) in dataFiled" :key="item.filed_ID" @click="GetExpertFiled(item.filed_ID)">
              {{ item.filed_Name }}
            </a-menu-item>
          </a-menu>
        </a-col>
        <a-col :span="12">
          <a-menu style="width: 200px" mode="vertical" @click="sentexpert">
            <a-menu-item v-for="(item) in expert" :key="item.expert_ID" @click="sentexpert(item.expert_ID)">
              {{ item.expert_Name }}
            </a-menu-item>
          </a-menu>
        </a-col>
      </a-row>
    </a-modal>
  </div>
</template>
<script>
import { ReviewFirstManuscript, CompleteFirstContribution } from '@/api/EditManuscript'
import { ReturnComplete, GetAllExpertFiled, GetExpertFiled, GetFile } from '@/api/ManuscriptReview'
export default {
  data () {
    return {
      data: {},
      info: {},
      first: false,
      dataFiled: {},
      expert: {},
      name: '',
      id: '',
      content: ''
    }
  },
  created () {
    ReviewFirstManuscript(this.$route.params.id).then(res => { console.log(res); this.data = res }).catch()
    GetAllExpertFiled().then(res => { this.dataFiled = res }).catch()
  },
  methods: {
    ShowManuscript () {
      this.$router.push({ name: 'ShowEditManuscript', params: { id: this.data.manuscript_ID } })
    },
    retutntable () {
      this.$router.push({ name: 'ManuscriptReview' })
    },
    showConfirm () {
      this.$confirm({
        title: '你确定通过该稿件吗?',
        content: h => <div style="color:red;">初审通过将移交专家复审</div>,
        onOk: () => {
          this.info.ContentText = this.content
          this.info.Manuscript_ID = Number(this.data.manuscript_ID)
          this.info.Filed_ID = this.id.key
          console.log(this.info)
          CompleteFirstContribution(this.info).then(this.$message.success('稿件初审通过')).catch()
          this.$router.push({ name: 'ManuscriptReview' })
          location.reload()
        },
        onCancel () {
          console.log('Cancel')
        },
        class: 'test'
      })
    },
    shwomodal () {
      this.first = true
    },
    GetExpertFiled (id) {
      GetExpertFiled(id).then(res => { this.expert = res }).catch()
    },
    ReturnComplete () {
      this.$confirm({
        title: '你确定退回该稿件吗?',
        content: h => <div style="color:red;">稿件将被退回</div>,
        onOk: () => {
          this.info.Manuscript_ID = this.data.manuscript_ID
          console.log(this.info)
          ReturnComplete(this.info).then(this.$message.success('稿件已退回')).catch()
          this.$router.push({ name: 'ManuscriptReview' })
          location.reload()
        },
        onCancel () {
          console.log('Cancel')
        },
        class: 'test'
      })
    },
    sentexpert (id, name) {
      this.id = id
    },
    GetMainfile (id) {
      GetFile(1048).then(res => {
        console.log(res)
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
    cancel () {
      this.first = false
    }
  }
}
</script>

<style lang="less">
    .divmain{
        text-align: center;
        margin-top: 25px;
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
