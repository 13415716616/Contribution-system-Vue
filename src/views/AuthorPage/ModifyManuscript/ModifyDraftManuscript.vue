<template>
  <div>
    <a-form>
      <a-card title="修改稿件信息">
        <a-form-item
          label="稿件标题"
          :labelCol="{lg: {span: 2}, sm: {span: 2}}"
          :wrapperCol="{lg: {span: 18}, sm: {span: 17} }">
          <a-input v-model="info.manuscript_Title"></a-input>
        </a-form-item>

        <a-form-item
          label="稿件英文标题"
          :labelCol="{lg: {span: 2}, sm: {span: 2}}"
          :wrapperCol="{lg: {span: 18}, sm: {span: 17} }">
          <a-input v-model="info.manuscript_Etitle"></a-input>
        </a-form-item>

        <a-form-item
          label="关键词"
          :labelCol="{lg: {span: 2}, sm: {span: 2}}"
          :wrapperCol="{lg: {span: 18}, sm: {span: 17} }">
          <a-input v-model="info.manuscript_Keyword"></a-input>
        </a-form-item>

        <a-form-item
          label="英文关键词"
          :labelCol="{lg: {span: 2}, sm: {span: 2}}"
          :wrapperCol="{lg: {span: 18}, sm: {span: 17} }">
          <a-input v-model="info.manuscript_EKeyword"></a-input>
        </a-form-item>

        <a-form-item
          label="摘要"
          :labelCol="{lg: {span: 2}, sm: {span: 2}}"
          :wrapperCol="{lg: {span: 18}, sm: {span: 17} }">
          <a-textarea :autosize="{ minRows: 5, maxRows: 8 }" v-model="info.manuscript_Abstract"></a-textarea>
        </a-form-item>

        <a-form-item
          label="英文摘要"
          :labelCol="{lg: {span: 2}, sm: {span: 2}}"
          :wrapperCol="{lg: {span: 18}, sm: {span: 17} }">
          <a-textarea :autosize="{ minRows: 5, maxRows: 8 }" v-model="info.manuscript_EAbstract"></a-textarea>
        </a-form-item>

        <a-form-item label="正文" :label-col="{ span: 2 }">
          <div id="editor" class="Feditor">
          </div>
        </a-form-item>
      </a-card><br>
      <!--
      <a-card title="修改作者信息">
        <div class="button1">
          <a-button @click="showmodal" >添加作者信息</a-button>
        </div>
        <a-divider />
        <a-table :columns="columns" :dataSource="tabledata">
        </a-table>
        <a-modal :visible="visible" title="添加作者信息" @cancel="handleCancel" width="50%" @ok="submit">
          <a-form :form="form">
            <a-form-item label="作者姓名" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
              <a-input
                v-decorator="['ManuscriptAuthor_Name', { rules: [{ required: true, message: '请输入作者姓名' }] }]"
              />
            </a-form-item>

            <a-form-item label="作者类型" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
              <a-select v-decorator="['ManuscriptAuthor_Class', { rules: [{ required: true, message: '请输入作者姓名' }] }]">
                <a-select-option key="1" value="1">第一作者</a-select-option>
                <a-select-option key="1" value="2">第二作者</a-select-option>
              </a-select>
            </a-form-item>

            <a-form-item label="性别" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
              <a-select v-decorator="['ManuscriptAuthor_Sex', { rules: [{ required: true, message: '请输入作者姓名' }] }]">
                <a-select-option key="boy" value="男">男</a-select-option>
                <a-select-option key="gril" value="女">女</a-select-option>
              </a-select>
            </a-form-item>

            <a-form-item label="作者学历" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
              <a-input
                v-decorator="['ManuscriptAuthor_Education', { rules: [{ required: true, message: '请输入学历' }] }]"
              />
            </a-form-item>
            <a-form-item label="作者邮箱" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
              <a-input
                v-decorator="['ManuscriptAuthor_Email', { rules: [{ required: true, message: '请输入专业方向' }] }]"
              />
            </a-form-item>
            <a-form-item label="作者电话" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
              <a-input
                v-decorator="['ManuscriptAuthor_Phone', { rules: [{ required: true, message: '请输入电话' }] }]"
              />
            </a-form-item>
            <a-form-item label="居住地址" :label-col="{ span: 3 }" :wrapper-col="{ span: 18 }">
              <a-input
                v-decorator="['ManuscriptAuthor_Address', { rules: [{ required: true, message: '请输入地址' }] }]"
              />
            </a-form-item>
          </a-form>
        </a-modal>
      </a-card><br>

      <a-card title="上传稿件">

      </a-card>
      <br> -->
      <div style="text-align: center">
        <a-button class="btn" type="primary" @click="returndraft">返回草稿箱</a-button>
        <a-button class="btn" type="primary" @click="UpdateInfo">提交更改</a-button>
      </div>
    </a-form>
  </div>
</template>

<script>
import Editor from 'wangeditor'
import { GetManuscript, UpdateMansuscriptDrafts, AddAthorinfo } from '@/api/AuthorManuscriptApi'

const columns = [
  {
    title: '姓名',
    dataIndex: 'ManuscriptAuthor_Name'
  },
  {
    title: '作者类型',
    dataIndex: 'ManuscriptAuthor_Class'
  },
  {
    title: '作者性别',
    dataIndex: 'ManuscriptAuthor_Sex'
  },
  {
    title: '学历',
    dataIndex: 'ManuscriptAuthor_Education'
  },
  {
    title: '专业方向',
    dataIndex: 'ManuscriptAuthor_Major'
  },
  {
    title: '职业',
    dataIndex: 'ManuscriptAuthor_Occupation'
  }
]

export default {
  name: 'ModifyDraftManuscript',
  data () {
    return {
      editor: '',
      info: {},
      columns,
      visible: false
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
        this.editor.txt.html(result.manuscript_Content)
      }
    ).catch(console.log('err'))
  },
  methods: {
    UpdateInfo () {
      this.$confirm({
        title: '你确定保存该稿件吗?',
        onOk: () => {
          this.info.manuscript_Content = this.editor.txt.html()
          console.log(this.info)
          // GetManuscriptToDrafts(this.info).then(console.log('ok')).catch(console.log('err'))
          UpdateMansuscriptDrafts(this.info).then().catch()
          this.$router.push({ name: 'ManuscriptDrafts' })
        },
        onCancel () {
          console.log('Cancel')
        },
        class: 'test'
      })
    },
    returndraft () {
      this.$router.push({ name: 'ManuscriptDrafts' })
    },
    showmodal () {
      this.visible = true
    },
    handleCancel () {
      this.visible = false
    },
    submit () {
      this.form.ManuscriptAuthor_Sex = this.sex
      this.form.Manscript_ID = this.Manscript_ID
      this.form.validateFields((err, values) => {
        if (!err) {
          this.tabledata.push(values)
          AddAthorinfo(values).then(this.visible = false).catch()
        }
      })
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
