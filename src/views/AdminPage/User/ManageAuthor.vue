<template>
  <div style=" text-align:center">
    <a-card>
      <div class="button1">
        <a-button @click="showmodal" >添加作者信息</a-button>
      </div>
      <a-divider />
      <a-table :columns="columns" :dataSource="tabledata">
        <span slot="action" slot-scope="text, record">
          <a @click="modif(record.author_ID)">修改</a><a-divider type="vertical" />
          <a-popconfirm
            title="你确定要删除这个用户吗?"
            @confirm="DeleteAuthor(record.author_ID)"
            okText="是"
            cancelText="否"
          >
            <a>删除</a></a-popconfirm>
        </span>
      </a-table>

      <a-modal :visible="visible" title="添加作者信息" @cancel="handleCancel" width="50%" @ok="submit">
        <a-form :form="form">
          <a-form-item label="作者账号" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-decorator="['Author_ID', { rules: [{ required: true, message: '请输入作者账号' }] }]"
            />
          </a-form-item>

          <a-form-item label="作者姓名" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-decorator="['Author_Name', { rules: [{ required: true, message: '请输入姓名' }] }]"
            />
          </a-form-item>
          <a-form-item label="密码" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-decorator="['Author_Password', { rules: [{ required: true, message: '请输入密码' }] }]"
            />
          </a-form-item>
          <a-form-item label="性别" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-select v-decorator="['Author_Sex']">
              <a-select-option key="boy" value="男">男</a-select-option>
              <a-select-option key="gril" value="女">女</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="学历" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-select v-decorator="['Author_Education']">
              <a-select-option key="1" value="本科">本科</a-select-option>
              <a-select-option key="1" value="硕士">硕士</a-select-option>
              <a-select-option key="1" value="博士">博士</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="电话" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-decorator="['Author_Phone']"
            />
          </a-form-item>
          <a-form-item label="邮箱" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-decorator="['Author_Email']"
            />
          </a-form-item>
          <a-form-item label="居住地址" :label-col="{ span: 3 }" :wrapper-col="{ span: 18 }">
            <a-input
              v-decorator="['Author_Address']"
            />
          </a-form-item>
          <a-form-item label="作者简介" :label-col="{ span: 3 }" :wrapper-col="{ span: 18 }">
            <a-textarea
              :rows="5"
              v-decorator="['Author_Dec']"
            />
          </a-form-item>
        </a-form>
      </a-modal>

      <a-modal :visible="modifvisible" title="修改作者信息" @cancel="modifvisible=false" width="50%" @ok="modifauthor">
        <a-form >
          <a-form-item label="作者账号" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-model="data.author_ID"
            />
          </a-form-item>

          <a-form-item label="作者姓名" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
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
  </div>
</template>
<script>
import { GetAllAuthors, GetAllAuthorID, DeleteAuthor, AddAuthor, ModifAuthor } from '@/api/AdminApi'
const columns = [
  {
    title: '作者账号',
    dataIndex: 'author_ID'
  },
  {
    title: '作者姓名',
    dataIndex: 'author_Name'
  },
  {
    title: '作者学历',
    dataIndex: 'author_Education'
  },
  {
    title: '作者电话',
    dataIndex: 'author_Phone'
  },
  {
    title: '作者邮箱',
    dataIndex: 'author_Email'
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
    GetAllAuthors().then(res => { this.tabledata = res; console.log(res) }).catch()
  },
  methods: {
    handleChange (value) {
      this.sex = value
    },
    modif (id) {
      GetAllAuthorID(id).then(res => { this.data = res; console.log(res) }).catch()
      this.modifvisible = true
    },
    showmodal () {
      this.visible = true
    },
    DeleteAuthor (id) {
      DeleteAuthor(id).then(location.reload()).catch()
    },
    submit () {
      this.form.validateFields((err, values) => {
        if (!err) {
          this.tabledata.push(values)
          AddAuthor(values).then(
            res => {
              this.visible = false
              this.$message.success('用户信息添加成功')
            }
          ).catch()
        }
      })
    },
    handleCancel () {
      this.visible = false
    },
    nexttag () {
      this.$emit('nextStep')
    },
    modifauthor () {
      ModifAuthor(this.data).then(res => {
        this.modifvisible = false
        location.reload()
        this.$message.success('用户信息修改成功')
      }).catch()
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
