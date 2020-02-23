<template>
  <div>
    <a-card class="card" title="稿件信息填写">
      <a-form @submit="handleSubmit" :form="form" >
        <a-form-item label="稿件标题" :label-col="{ span: 2 }" :wrapper-col="{ span: 15 }">
          <a-input
            v-decorator="['Manuscript_Title', { rules: [{ required: true, message: '请输入稿件标题' }] }]"
            placeholder="在这里输入稿件标题"
          />
        </a-form-item>

        <a-form-item label="英文标题" :label-col="{ span: 2 }" :wrapper-col="{ span: 15 }">
          <a-input
            v-decorator="['Manuscript_Etitle', { rules: [{ required: true, message: '请输入稿件英文标题' }] }]"
            placeholder="在这里输入稿件英文标题"
          />
        </a-form-item>

        <a-form-item label="关键词" :label-col="{ span: 2 }" :wrapper-col="{ span: 15 }">
          <a-input
            v-decorator="['Manuscript_Keyword', { rules: [{ required: true, message: '请输入稿件关键词' }] }]"
            placeholder="在这里输入稿件关键词"
          />
        </a-form-item>

        <a-form-item label="稿件摘要摘要" :label-col="{ span: 2 }" :wrapper-col="{ span: 15 }">
          <a-textarea
            v-decorator="['Manuscript_Abstract', { rules: [{ required: true, message: '请输入稿件摘要' }] }]"
            placeholder="在这里输入稿件摘要"
            :autosize="{ minRows: 5, maxRows: 8 }"
          />
        </a-form-item>

        <a-form-item label="参考文献" :label-col="{ span: 2 }" :wrapper-col="{ span: 15 }">
          <a-textarea
            v-decorator="['Manuscript_Reference', { rules: [{ required: true, message: '请输入参考文献' }] }]"
            placeholder="在这里输入参考文献"
            :autosize="{ minRows: 5, maxRows: 8 }"
          />
        </a-form-item>

        <a-form-item label="正文" :label-col="{ span: 1 }">
          <div id="editor" class="Feditor">
          </div>
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 15, offset: 10 }">
          <a-button type="primary" html-type="submit" >
            下一步
          </a-button>
        </a-form-item>

      </a-form>
    </a-card>
  </div>
</template>

<script>
import Editor from 'wangeditor'
import { CreateManuscript } from '@/api/Contribute'

export default {
  name: 'AddContributepage',
  data () {
    return {
      editor: '',
      Manuscript: {
        Manuscript_Title: '',
        Manuscript_Etitle: '',
        Manuscript_Keyword: '',
        Manuscript_Abstract: '',
        Manuscript_Reference: '',
        Manuscript_Text: ''
      },
      id: 0,
      form: this.$form.createForm(this)
    }
  },
  mounted () {
    this.editor = new Editor('#editor')
    this.editor.create()
  },
  methods: {
    handleSubmit (e) {
      this.Manuscript = this.form
      e.preventDefault()
      this.Manuscript.validateFields((err, values) => {
        if (!err) {
          values.Manuscript_Text = this.editor.txt.html()
          CreateManuscript(values).then(
            res => {
              console.log(res)
              this.id = res
              this.$store.commit('SET_MANUSCRIPT_ID', res)
              this.$emit('nextStep')
            }
          ).catch()
        }
      })
    }
  },
  destroyed () {
    this.$bus.emit('Manuscript_ID', this.id)
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
