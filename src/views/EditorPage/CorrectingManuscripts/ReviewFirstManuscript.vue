<template>
  <div>
    <a-card title="稿件信息">
      <a-row>
        <a-col>
          <h3>稿件名称：{{ data.manuscript_Name }}</h3>
        </a-col>
        <a-col>
          <h3>所属栏目：{{ data.manuscriptColumn_ID }}</h3>
        </a-col>
        <a-col>
          <h3>投稿时间：{{ data.time }}</h3>
        </a-col>
        <a-col>
          <h3>稿件操作：<a @click="ShowManuscript">在线阅读</a></h3>
        </a-col>
        <a-col>
          <h3>稿件附件：<a>下载</a></h3>
        </a-col>
      </a-row>
    </a-card>
    <br>
    <a-card title="编辑审查">
      请输入审稿意见：
      <a-textarea :rows="6" style="margin-top: 10px;" v-model="info.ContentText"></a-textarea>
      <div class="divmain">
        <a-button class="btn" type="primary" @click="retutntable">返回列表</a-button>
        <a-button class="btn" type="primary">退回稿件</a-button>
        <a-button type="primary" @click="showConfirm">提交专家审核</a-button>
      </div>
    </a-card>
  </div>
</template>
<script>
import { ReviewFirstManuscript, CompleteFirstContribution } from '@/api/EditManuscript'
export default {
  data () {
    return {
      data: {},
      info: {}
    }
  },
  created () {
    ReviewFirstManuscript(this.$route.params.id).then(res => { console.log(res); this.data = res }).catch()
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
          this.info.Manuscript_ID = this.data.manuscript_ID
          console.log(this.info)
          CompleteFirstContribution(this.info).then(this.$message.success('稿件初审通过')).catch()
        },
        onCancel () {
          console.log('Cancel')
        },
        class: 'test'
      })
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
