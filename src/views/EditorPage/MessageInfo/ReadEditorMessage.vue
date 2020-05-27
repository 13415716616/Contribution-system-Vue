<template>
  <div>
    <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
      <a-card >
        <h3 class="d">标题：{{ data.message_Title }}</h3>
        <a-divider />
        <h4 class="d">发送者：{{ data.message_Sender }}</h4>
        <h4 class="d">发送时间：{{ data.message_Time }}</h4>
        <a-divider />
        <div v-html="data.message_Content" style="size=+3" class="d1"></div><br>
        <a-divider />
      </a-card>
    </a-card>
    <div class="btn">
      <a-button type="primary" @click="ret">返回列表</a-button>
    </div>
  </div>
</template>

<script>
import Editor from 'wangeditor'
import { SentMessage } from '@/api/AuthorPersonalApi'
import { ReadMessage } from '@/api/Message'

export default {
  name: 'BaseForm',
  mounted () {
    this.editor = new Editor('#editor')
    this.editor.create()
    console.log(this.$store.getters)
  },
  created () {
    ReadMessage(this.$route.params.id).then(res => { console.log(res); this.data = res }).catch()
  },
  data () {
    return {
      description: '给其他用户发送消息管理',
      value: 1,
      editor: '',
      id: this.$store.getters.userInfo.id,
      name: this.$store.getters.nickname,
      data: {},
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
          SentMessage(values).then().catch()
        }
      })
    },
    ret () {
      this.$router.push({ name: 'ShowMessage' })
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
  .d1{
    margin-left: 60px;
  }
  .d{
    margin-left: 30px;
  }
  .btn{
    text-align: center;
    margin-top: 30px;
  }
</style>
