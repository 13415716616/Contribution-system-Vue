<template>
  <div>
    <a-form @submit="handleSubmit" :form="form">
      <a-form-item label="标题" :label-col="{ span: 1 }" :wrapper-col="{ span: 15 }">
        <a-input
          v-decorator="['Manuscript_Title', { rules: [{ required: true, message: '请输入稿件标题' }] }]"
          placeholder="在这里输入稿件标题"
        />
      </a-form-item>

      <a-form-item label="英文标题" :label-col="{ span: 1 }" :wrapper-col="{ span: 15 }">
        <a-input
          v-decorator="['Manuscript_Etitle', { rules: [{ required: true, message: '请输入稿件英文标题' }] }]"
          placeholder="在这里输入稿件英文标题"
        />
      </a-form-item>

      <a-form-item label="关键词" :label-col="{ span: 1 }" :wrapper-col="{ span: 15 }">
        <a-input
          v-decorator="['Manuscript_Keyword', { rules: [{ required: true, message: '请输入稿件关键词' }] }]"
          placeholder="在这里输入稿件关键词"
        />
      </a-form-item>

      <a-form-item label="摘要" :label-col="{ span: 1 }" :wrapper-col="{ span: 15 }">
        <a-textarea
          v-decorator="['Manuscript_Abstract', { rules: [{ required: true, message: '请输入稿件摘要' }] }]"
          placeholder="在这里输入稿件摘要"
          :autosize="{ minRows: 5, maxRows: 8 }"
        />
      </a-form-item>

      <a-form-item label="参考文献" :label-col="{ span: 1 }" :wrapper-col="{ span: 15 }">
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

      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">
          Submit
        </a-button>
      </a-form-item>

    </a-form>
  </div>
</template>

<script>
import Editor from 'wangeditor'
import { CreateManuscript } from '@/api/Contribute'

export default {
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
          console.log('Received values of form: ', values)
          CreateManuscript(values).then().catch()
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
</style>
