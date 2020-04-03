<template>
  <div>
    <a-card title="稿件信息">
      <a-row>
        <a-col>
          <h3>稿件名称：{{ info.manuscript_Title }}</h3>
        </a-col>
        <a-col>
          <h3>所属栏目：{{ info.manuscriptColumn_ID }}</h3>
        </a-col>
        <a-col>
          <h3>投稿用户：{{ info.author_ID }}</h3>
        </a-col>
        <a-col>
          <h3>投稿时间：{{ info.time }}</h3>
        </a-col>
        <a-col>
          <h3>稿件操作：<a >在线阅读</a></h3>
        </a-col>
        <a-col>
          <h3>稿件附件：<a>下载</a></h3>
        </a-col>
      </a-row>
    </a-card>
    <br>
    <a-card title="稿件审查">
      <a-form>
        <a-row >
          <a-col :span="24" :pull="3">
            <a-form-item label="选题" :labelCol="{lg: {span: 5}, sm: {span: 5}}" :wrapperCol="{lg: {span: 18}, sm: {span: 18} }">
              <a-radio-group :name="review.selectedTopic" @change="ChangeSelectedTopic">
                <a-radio value="新颖">新颖</a-radio>
                <a-radio value="较好">较好</a-radio>
                <a-radio value="一般">一般</a-radio>
                <a-radio value="不当">不当</a-radio>
              </a-radio-group>
            </a-form-item>
          </a-col>
          <a-col :span="24" :pull="3">
            <a-form-item label="方法" :labelCol="{lg: {span: 5}, sm: {span: 5}}" :wrapperCol="{lg: {span: 18}, sm: {span: 18} }">
              <a-radio-group name="methon" :v-model="review.methon" @change="ChangeMethon">
                <a-radio value="先进">先进</a-radio>
                <a-radio value="一般">一般</a-radio>
                <a-radio value="重复别人">重复别人</a-radio>
                <a-radio value="欠真实">欠真实</a-radio>
              </a-radio-group>
            </a-form-item>
          </a-col>
          <a-col :span="24" :pull="3">
            <a-form-item label="内容" :labelCol="{lg: {span: 5}, sm: {span: 5}}" :wrapperCol="{lg: {span: 18}, sm: {span: 18} }">
              <a-radio-group name="Content" :v-model="review.Content" @change="ChangeContent">
                <a-radio value="优">优</a-radio>
                <a-radio value="良">良</a-radio>
                <a-radio value="中">中</a-radio>
                <a-radio value="差">差</a-radio>
              </a-radio-group>
            </a-form-item>
          </a-col>
          <a-col :span="24" :pull="3">
            <a-form-item label="数据" :labelCol="{lg: {span: 5}, sm: {span: 5}}" :wrapperCol="{lg: {span: 18}, sm: {span: 18} }">
              <a-radio-group name="data" :v-model="review.data" @change="ChangeData">
                <a-radio value="准确">准确</a-radio>
                <a-radio value="计算有误">计算有误</a-radio>
                <a-radio value="前后矛盾">前后矛盾</a-radio>
                <a-radio value="须真实">须真实</a-radio>
              </a-radio-group>
            </a-form-item>
          </a-col>
          <a-col :span="24" :pull="3">
            <a-form-item label="实用价值" :labelCol="{lg: {span: 5}, sm: {span: 5}}" :wrapperCol="{lg: {span: 18}, sm: {span: 18} }">
              <a-radio-group name="Value" :v-model="review.Value" @change="ChangeValue">
                <a-radio value="理论创新">理论创新</a-radio>
                <a-radio value="验证理论">验证理论</a-radio>
                <a-radio value="指导实践">指导实践</a-radio>
                <a-radio value="价值不大">价值不大</a-radio>
              </a-radio-group>
            </a-form-item>
          </a-col>
          <a-col :span="24" :pull="3">
            <a-form-item label="其他" :labelCol="{lg: {span: 5}, sm: {span: 5}}" :wrapperCol="{lg: {span: 18}, sm: {span: 18} }">
              <a-radio-group name="Other" :v-model="review.Other" @change="ChangeOther">
                <a-radio value="已有报道">已有报道</a-radio>
                <a-radio value="文不对题">文不对题</a-radio>
                <a-radio value="结论不当">结论不当</a-radio>
                <a-radio value="资料不全">资料不全</a-radio>
              </a-radio-group>
            </a-form-item>
          </a-col>
          <a-col :span="24" :pull="3">
            <a-form-item label="学术评价" :labelCol="{lg: {span: 5}, sm: {span: 5}}" :wrapperCol="{lg: {span: 18}, sm: {span: 18} }">
              <a-radio-group name="Comment" :v-model="review.Comment" @change="ChangeComment">
                <a-radio value="有创新">有创新</a-radio>
                <a-radio value="很好">很好</a-radio>
                <a-radio value="较好">较好</a-radio>
                <a-radio value="一般">一般</a-radio>
                <a-radio value="差">差</a-radio>
              </a-radio-group>
            </a-form-item>
          </a-col>
          <a-col :span="24" :pull="3">
            <a-form-item label="处理意见" :labelCol="{lg: {span: 5}, sm: {span: 5}}" :wrapperCol="{lg: {span: 18}, sm: {span: 18} }">
              <a-radio-group name="suggest" @change="ChangeSuggest">
                <a-radio value="学报全文发表">学报全文发表</a-radio>
                <a-radio value="修改学报发表形式">修改学报发表形式</a-radio>
                <a-radio value="修改后学报发表形式">修改后学报发表形式</a-radio>
                <a-radio value="修改后学报发表形式">修改后学报发表形式</a-radio>
                <a-radio value="不宜发表">不宜发表</a-radio>
                <a-radio value="转投其他刊物">转投其他刊物</a-radio>
              </a-radio-group>
            </a-form-item>
          </a-col>
          <a-col :span="24" :pull="3">
            <a-form-item label="处理意见" :labelCol="{lg: {span: 5}, sm: {span: 5}}" :wrapperCol="{lg: {span: 18}, sm: {span: 18} }">
              <a-textarea :rows="5" v-model="review.opinion" >
              </a-textarea>
            </a-form-item>
          </a-col>
          <a-col :span="24" style="text-align: center">
            <a-button type="primary" style="margin-right: 30px">返回选择</a-button>
            <!-- <a-button type="primary" style="margin-right: 30px">暂存审核</a-button> -->
            <a-button type="primary" @click="complete">提交审核</a-button>
          </a-col>
        </a-row>
      </a-form>
    </a-card>
  </div>
</template>
<script>
import { GetReviewManuscriptID, ReviewManuscript } from '@/api/ExpertManuscript'

export default {
  name: 'ReviewManuscript',
  data () {
    return {
      info: {},
      review: {
        Manuscript_ID: this.$route.params.id,
        selectedTopic: '',
        methon: '',
        Content: '',
        Value: '',
        Other: '',
        Comment: '',
        suggest: '',
        opinion: ''
      }
    }
  },
  created () {
    GetReviewManuscriptID(this.$route.params.id).then(result => { this.info = result; console.log(result) }).catch()
  },
  methods: {
    complete () {
      this.$confirm({
        title: '你确定通过该稿件吗?',
        content: h => <div style="color:red;">稿件将移交编辑复审</div>,
        onOk: () => {
          console.log(this.review)
          ReviewManuscript(this.review).then(res => { this.$message.success('稿件审稿完成'); this.$router.push({ name: 'ShowExpertComplete' }) }).catch()
          this.$router.push({ name: 'ManuscriptReview' })
        },
        onCancel () {
          console.log('Cancel')
        },
        class: 'test'
      })
    },
    ChangeSelectedTopic (e) {
      console.log(e.target.value)
      this.review.selectedTopic = e.target.value
    },
    ChangeMethon (e) {
      console.log(e.target.value)
      this.review.methon = e.target.value
    },
    ChangeContent (e) {
      console.log(e.target.value)
      this.review.Content = e.target.value
    },
    ChangeData (e) {
      console.log(e.target.value)
      this.review.data = e.target.value
    },
    ChangeValue (e) {
      console.log(e.target.value)
      this.review.Value = e.target.value
    },
    ChangeOther (e) {
      console.log(e.target.value)
      this.review.Other = e.target.value
    },
    ChangeComment (e) {
      console.log(e.target.value)
      this.review.Comment = e.target.value
    },
    ChangeSuggest (e) {
      console.log(e.target.value)
      this.review.suggest = e.target.value
    }
  }
}
</script>

<style scoped>

</style>
