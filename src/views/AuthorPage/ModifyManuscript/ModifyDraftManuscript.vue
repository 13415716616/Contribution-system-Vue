<template>
  <div>
    <a-form>
      <a-card title="修改稿件信息">
        <a-form-item
          label="稿件标题"
          :labelCol="{lg: {span: 2}, sm: {span: 2}}"
          :wrapperCol="{lg: {span: 18}, sm: {span: 17} }">
          <a-input v-model="info.draftManuscript_Title"></a-input>
        </a-form-item>

        <a-form-item
          label="稿件英文标题"
          :labelCol="{lg: {span: 2}, sm: {span: 2}}"
          :wrapperCol="{lg: {span: 18}, sm: {span: 17} }">
          <a-input v-model="info.draftManuscript_Etitle"></a-input>
        </a-form-item>

        <a-form-item
          label="关键词"
          :labelCol="{lg: {span: 2}, sm: {span: 2}}"
          :wrapperCol="{lg: {span: 18}, sm: {span: 17} }">
          <a-input v-model="info.draftManuscript_Keyword"></a-input>
        </a-form-item>

        <a-form-item
          label="摘要"
          :labelCol="{lg: {span: 2}, sm: {span: 2}}"
          :wrapperCol="{lg: {span: 18}, sm: {span: 17} }">
          <a-textarea :autosize="{ minRows: 5, maxRows: 8 }" v-model="info.draftManuscript_Abstract"></a-textarea>
        </a-form-item>

        <a-form-item label="正文" :label-col="{ span: 2 }">
          <div id="editor" class="Feditor">
          </div>
        </a-form-item>
      </a-card><br>

      <a-card title="修改作者信息">
        <a-row>
          <a-col :span="8">
            <a-form-item
              label="姓名"
              :labelCol="{lg: {span: 6}, sm: {span: 5}}"
              :wrapperCol="{lg: {span: 10}, sm: {span: 10} }">
              <a-input v-model="info.author_name"></a-input>
            </a-form-item>
          </a-col>

          <a-col :span="8">
            <a-form-item
              label="性别"
              :labelCol="{lg: {span: 5}, sm: {span: 5}}"
              :wrapperCol="{lg: {span: 10}, sm: {span: 10} }">
              <a-select v-model="info.author_sex">
                <a-select-option key="boy" value="男">男</a-select-option>
                <a-select-option key="gril" value="女">女</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :span="8">
            <a-form-item
              label="电话号码"
              :labelCol="{lg: {span: 5}, sm: {span: 5}}"
              :wrapperCol="{lg: {span: 10}, sm: {span: 10} }">
              <a-input v-model="info.author_Phone"></a-input>
            </a-form-item>
          </a-col>
        </a-row>

        <a-form-item
          label="居住地址"
          :labelCol="{lg: {span: 2}, sm: {span: 2}}"
          :wrapperCol="{lg: {span: 18}, sm: {span: 17} }">
          <a-input v-model="info.author_Address"></a-input>
        </a-form-item>

        <a-form-item
          label="摘要"
          :labelCol="{lg: {span: 2}, sm: {span: 2}}"
          :wrapperCol="{lg: {span: 18}, sm: {span: 17} }">
          <a-textarea :autosize="{ minRows: 2, maxRows: 3 }" v-model="info.author_dec"></a-textarea>
        </a-form-item>
      </a-card><br>

      <a-card title="上传稿件">

      </a-card>
      <br>
      <div style="text-align: center">
        <a-button class="btn" type="primary" @click="returndraft">返回草稿箱</a-button>
        <a-button class="btn" type="primary" @click="UpdateInfo">提交更改</a-button>
      </div>
    </a-form>
  </div>
</template>

<script>
import Editor from 'wangeditor'
import { GetManuscript, UpdateMansuscriptDrafts } from '@/api/AuthorManuscriptApi'

export default {
  name: 'ModifyDraftManuscript',
  data () {
    return {
      editor: '',
      info: {}
    }
  },
  mounted () {
    this.editor = new Editor('#editor')
    this.editor.create()
  },
  created () {
    GetManuscript(this.$route.params.id).then(
      result => {
        console.log(result)
        this.info = result
        this.editor.txt.html(result.draftManuscript_Text)
      }
    ).catch(console.log('err'))
  },
  methods: {
    UpdateInfo () {
      this.info.draftManuscript_Text = this.editor.txt.html()
      console.log(this.info)
      // GetManuscriptToDrafts(this.info).then(console.log('ok')).catch(console.log('err'))
      UpdateMansuscriptDrafts(this.info).then().catch()
    },
    returndraft () {
      this.$router.push({ name: 'ManuscriptDrafts' })
    }
  }

}
</script>

<style scoped>
  .Feditor{
    margin-left: 8.5%;
    margin-right: 8%;
  }
  .btn{
    margin-right: 30px
  }
</style>
