<template>
  <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
    <a-card title="发送消息">
      <a-form @submit="handleSubmit" :form="form">

        <a-form-item label="发送人" :label-col="{ span: 2 }" :wrapper-col="{ span: 15 }" >
          <span>({{ name }}){{ id }}</span>
        </a-form-item>
        <a-form-item label="发送人" :label-col="{ span: 2 }" :wrapper-col="{ span: 15 }" >
          <a-input v-decorator="[ 'Message_Recipient', {rules: [{ required: true, message: '请输入收件人' }]} ]" name="name" placeholder="请输入收件人" />
        </a-form-item>

        <a-form-item
          label="标题"
          :label-col="{ span: 2 }"
          :wrapper-col="{ span: 15 }">
          <a-input
            placeholder="请输入标题"
            v-decorator="[
              'Message_Title',
              {rules: [{ required: true, message: '请描述你服务的客户' }]}
            ]" />
        </a-form-item>
        <a-form-item label="正文" :label-col="{ span: 1 }">
          <div id="editor" class="Feditor">
          </div>
        </a-form-item>
        <a-form-item
          :wrapperCol="{ span: 24 }"
          style="text-align: center"
        >
          <a-button htmlType="submit" type="primary">提交</a-button>
          <a-button style="margin-left: 8px">保存</a-button>
        </a-form-item>
      </a-form></a-card>
  </a-card>
</template>

<script>
import Editor from 'wangeditor'
import { SentMessage } from '@/api/AuthorPersonalApi'

export default {
  name: 'BaseForm',
  mounted () {
    this.editor = new Editor('#editor')
    this.editor.create()
    console.log(this.$store.getters)
  },
  data () {
    return {
      description: '给其他用户发送消息管理',
      value: 1,
      editor: '',
      id: this.$store.getters.userInfo.id,
      name: this.$store.getters.nickname,

      // form
      form: this.$form.createForm(this)

    }
  },
  methods: {

    // handler
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          values.Message_Content = this.editor.txt.html()
          // eslint-disable-next-line no-console
          this.$confirm({
            title: '你确定通过该稿件吗?',
            content: h => <div style="color:red;">稿件将移交编辑复审</div>,
            onOk: () => {
              console.log(this.review)
              SentMessage(values).then().catch()
              // this.$router.push({ name: 'ManuscriptReview' })
            },
            onCancel () {
              console.log('Cancel')
            },
            class: 'test'
          })
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .Feditor{
    margin-left: 4.3%;
    margin-right: 6%;
  }
  .ParButton{
    margin-left: 48%;
    margin-top: 15px;
  }
  .card{
    margin-top: 35px
  }
</style>
