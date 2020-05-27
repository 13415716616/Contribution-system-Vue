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
          <h4>投稿时间：{{ data.time }}</h4>
        </a-col>
        <a-col>
          <h4>稿件操作：<a @click="ShowManuscript">在线阅读</a></h4>
        </a-col>
        <a-col>
          <h4>稿件附件：<a>下载</a></h4>
        </a-col>
      </a-row><br>
    </a-card><br>
    <a-card title="专家意见">
      <a-row>
        <a-col :span="8"><h4>审核编号：{{ rev.expertReview_ID }}</h4></a-col>
        <a-col :span="8"><h4>专家编号:{{ rev.expert_ID }}</h4></a-col>
        <a-col :span="8"></a-col>
        <a-col :span="8"><h4>选题:{{ rev.selectedTopic }}</h4></a-col>
        <a-col :span="8"><h4>方法:{{ rev.methon }}</h4></a-col>
        <a-col :span="8"><h4>内容:{{ rev.content }}</h4></a-col>
        <a-col :span="8"><h4>数据:{{ rev.data }}</h4></a-col>
        <a-col :span="8"><h4>其他:{{ rev.other }}</h4></a-col>
        <a-col :span="8"><h4>学术评价:{{ rev.comment }}</h4></a-col>
        <a-col :span="8"><h4>处理意见:{{ rev.suggest }}</h4></a-col>
        <a-col :span="24"><h4>专家意见：{{ rev.opinion }}</h4></a-col>
      </a-row>
    </a-card>

    <br>
    <a-card title="编辑复审">
      请输入复审意见：
      <a-textarea :rows="6" style="margin-top: 10px;" v-model="info.Editor_Opinion"></a-textarea>
      <div class="divmain">
        <a-button class="btn" type="primary" @click="retutntable">返回列表</a-button>
        <a-button class="btn" type="primary">退回稿件</a-button>
        <a-button type="primary" @click="showConfirm">通过稿件</a-button>
      </div>
    </a-card>
  </div>
</template>
<script>
import { ReviewFirstManuscript, CompleteSecondEdiotrManuscript } from '@/api/EditManuscript'
import { GetExpertReviewInfo } from '@/api/ChiefEditorManuscriptApi'
import { ReturnComplete } from '@/api/ManuscriptReview'
export default {
  data () {
    return {
      data: {},
      info: {},
      rev: {}
    }
  },
  created () {
    ReviewFirstManuscript(this.$route.params.id).then(res => { console.log(res); this.data = res }).catch()
    GetExpertReviewInfo(this.$route.params.id).then(res => { console.log(res); this.rev = res }).catch()
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
        content: h => <div style="color:red;">复审通过将移交主编复审</div>,
        onOk: () => {
          this.info.Manuscript_ID = this.data.manuscript_ID
          console.log(this.info)
          CompleteSecondEdiotrManuscript(this.info).then(this.$message.success('稿件复审通过')).catch()
        },
        onCancel () {
          console.log('Cancel')
        },
        class: 'test'
      })
    },
    ReturnManuscipr () {
      this.$confirm({
        title: '你确定退回该稿件吗?',
        content: h => <div style="color:red;">稿件将被退回</div>,
        onOk: () => {
          this.info.Manuscript_ID = this.data.manuscript_ID
          console.log(this.info)
          ReturnComplete(this.info).then(this.$message.success('稿件已退回')).catch()
          this.$router.push({ name: 'ManuscriptReview' })
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
