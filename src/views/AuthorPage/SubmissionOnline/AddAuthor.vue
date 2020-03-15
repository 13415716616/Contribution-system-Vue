<template>
  <div style=" text-align:center">
    <a-card>
      <div class="button1">
        <a-button @click="showmodal" >添加作者信息</a-button>
      </div>
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
          <a-form-item label="专业方向" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-decorator="['ManuscriptAuthor_Major', { rules: [{ required: true, message: '请输入专业方向' }] }]"
            />
          </a-form-item>
          <a-form-item label="职业" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-decorator="['ManuscriptAuthor_Occupation', { rules: [{ required: true, message: '请输入职业' }] }]"
            />
          </a-form-item>
          <a-form-item label="工作单位" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-decorator="['ManuscriptAuthor_Work', { rules: [{ required: true, message: '请输入工作单位' }] }]"
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
          <a-form-item label="作者简介" :label-col="{ span: 3 }" :wrapper-col="{ span: 18 }">
            <a-textarea
              :rows="5"
              v-decorator="['ManuscriptAuthor_Dec', { rules: [{ required: true, message: '请输入地址' }] }]"
            />
          </a-form-item>
        </a-form>
      </a-modal>
    </a-card><br>
    <a-button type="primary" @click="nexttag" >
      下一步
    </a-button>
  </div>
</template>
<script>
import { AddAthorinfo } from '@/api/AuthorManuscriptApi'
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
  name: 'AddAuthor',
  data () {
    return {
      form: this.$form.createForm(this),
      sex: '',
      Manscript_ID: this.$store.getters.manuscriptID,
      visible: false,
      columns,
      tabledata: []
    }
  },
  methods: {
    handleChange (value) {
      this.sex = value
    },
    showmodal () {
      this.visible = true
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
    },
    handleCancel () {
      this.visible = false
    },
    nexttag () {
      this.$emit('nextStep')
    }

  }
}
</script>
<style lang="less" scoped>
  .card{
    margin-left: 25%;
    margin-right: 25%;
    height: 500px;
  }
  .button1{
    text-align: left;
    margin-bottom: 5px;
  }
</style>
