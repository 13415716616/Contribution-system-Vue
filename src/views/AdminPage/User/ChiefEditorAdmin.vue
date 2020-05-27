<template>
  <div style=" text-align:center">
    <a-card>
      <div class="button1">
        <a-button @click="showmodal" >添加作者信息</a-button>
      </div>
      <a-divider />
      <a-table :columns="columns" :dataSource="tabledata">
        <span slot="action" slot-scope="text, record">
          <a @click="modif(record.editor_ID)">修改</a><a-divider type="vertical" />
          <a-popconfirm
            title="你确定要删除这个用户吗?"
            @confirm="DeleteEditor(record.editor_ID)"
            okText="是"
            cancelText="否"
          >
            <a>删除</a></a-popconfirm>
        </span>
      </a-table>

      <a-modal :visible="visible" title="添加作者信息" @cancel="handleCancel" width="50%" @ok="submit">
        <a-form :form="form">
          <a-form-item label="编辑账号" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-decorator="['Editor_ID', { rules: [{ required: true, message: '请输入编辑账号' }] }]"
            />
          </a-form-item>

          <a-form-item label="编辑姓名" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-decorator="['Editor_Name', { rules: [{ required: true, message: '请输入编辑姓名' }] }]"
            />
          </a-form-item>
          <a-form-item label="密码" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-decorator="['Editor_Password', { rules: [{ required: true, message: '请输入密码' }] }]"
            />
          </a-form-item>
          <a-form-item label="性别" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-select v-decorator="['Author_Sex']">
              <a-select-option key="boy" value="男">男</a-select-option>
              <a-select-option key="gril" value="女">女</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="电话" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-decorator="['Editor_Phone']"
            />
          </a-form-item>
          <a-form-item label="邮箱" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-decorator="['Editor_Email']"
            />
          </a-form-item>
          <a-form-item label="编辑简介" :label-col="{ span: 3 }" :wrapper-col="{ span: 18 }">
            <a-textarea
              :rows="5"
              v-decorator="['Editor_Dec']"
            />
          </a-form-item>
        </a-form>
      </a-modal>

      <a-modal :visible="modifvisible" title="添加作者信息" @cancel="modifvisible=false" width="50%">
        <a-form >
          <a-form-item label="编辑账号" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-model="data.Editor_ID"
            />
          </a-form-item>

          <a-form-item label="Editor_Name" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-model="data.author_Name"
            />
          </a-form-item>
          <a-form-item label="密码" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-model="data.author_Password"
            />
          </a-form-item>
          <a-form-item label="性别" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-select v-model="data.author_Sex">
              <a-select-option key="boy" value="男">男</a-select-option>
              <a-select-option key="gril" value="女">女</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="学历" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-select v-model="data.author_Education">
              <a-select-option key="1" value="本科">本科</a-select-option>
              <a-select-option key="1" value="硕士">硕士</a-select-option>
              <a-select-option key="1" value="博士">博士</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="电话" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-model="data.author_Phone"
            />
          </a-form-item>
          <a-form-item label="邮箱" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-model="data.author_Email"
            />
          </a-form-item>
          <a-form-item label="居住地址" :label-col="{ span: 3 }" :wrapper-col="{ span: 18 }">
            <a-input
              v-model="data.author_Address"
            />
          </a-form-item>
          <a-form-item label="作者简介" :label-col="{ span: 3 }" :wrapper-col="{ span: 18 }">
            <a-textarea
              :rows="5"
              v-model="data.author_Dec"
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
import { GetAllEditors, GetEditorID, AddEditor, DeleteEditor } from '@/api/AdminApi'
const columns = [
  {
    title: '作者账号',
    dataIndex: 'editor_ID'
  },
  {
    title: '作者姓名',
    dataIndex: 'editor_Name'
  },
  {
    title: '作者学历',
    dataIndex: 'editor_Education'
  },
  {
    title: '作者电话',
    dataIndex: 'editor_Phone'
  },
  {
    title: '作者邮箱',
    dataIndex: 'editor_Email'
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' }
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
      modifvisible: false,
      columns,
      tabledata: [],
      data: {}
    }
  },
  created () {
    GetAllEditors().then(res => { this.tabledata = res; console.log(JSON.stringify(res)) }).catch()
  },
  methods: {
    handleChange (value) {
      this.sex = value
    },
    modif (id) {
      GetEditorID(id).then(res => { this.data = res; console.log(res) }).catch()
      this.modifvisible = true
    },
    showmodal () {
      this.visible = true
    },
    DeleteEditor (id) {
      DeleteEditor(id).then().catch()
    },
    submit () {
      this.form.validateFields((err, values) => {
        if (!err) {
          this.tabledata.push(values)
          AddEditor(values).then(this.visible = false).catch()
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
