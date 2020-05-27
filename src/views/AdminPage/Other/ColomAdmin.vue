<template>
  <div style=" text-align:center">
    <a-card>
      <div class="button1">
        <a-button @click="showmodal" >添加稿件栏目</a-button>
      </div>
      <a-divider />
      <a-table :columns="columns" :dataSource="tabledata">
        <span slot="action" slot-scope="text, record">
          <a @click="modif(record.manuscriptColumn_ID)">修改</a><a-divider type="vertical" />
          <a-popconfirm
            title="你确定要删除这个用户吗?"
            @confirm="DeleteAuthor(record.manuscriptColumn_ID)"
            okText="是"
            cancelText="否"
          >
            <a>删除</a></a-popconfirm>
        </span>
      </a-table>

      <a-modal :visible="visible" title="添加稿件栏目信息" @cancel="handleCancel" width="40%" @ok="submit">
        <a-form :form="form">
          <a-form-item label="稿件栏目名称" :label-col="{ span: 5 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-decorator="['manuscriptColumn_Name', { rules: [{ required: true, message: '请输入栏目名称' }] }]"
            />
          </a-form-item>
          <a-form-item label="栏目信息描述" :label-col="{ span: 5 }" :wrapper-col="{ span: 18 }">
            <a-textarea
              :rows="5"
              v-decorator="['manuscriptColumn_Dec']"
            />
          </a-form-item>
        </a-form>
      </a-modal>

      <a-modal :visible="modifvisible" title="修改栏目信息" @cancel="modifvisible=false" width="50%" @ok="Update()">
        <a-form >

          <a-form-item label="稿件栏目名称" :label-col="{ span: 5 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-model="data.manuscriptColumn_Name"
            />
          </a-form-item>
          <a-form-item label="栏目信息描述" :label-col="{ span: 5 }" :wrapper-col="{ span: 18 }">
            <a-textarea
              :rows="5"
              v-model="data.manuscriptColumn_Dec"
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
import { AddColumn, GetColumn, GetColumnID, UpdateColumn, DeleteColumn } from '@/api/Admin/OtherAdmin'
const columns = [
  {
    title: '领域编号',
    dataIndex: 'manuscriptColumn_ID',
    width: '15%'
  },
  {
    title: '领域名称',
    dataIndex: 'manuscriptColumn_Name',
    width: '25%'
  },
  {
    title: '领域描述',
    dataIndex: 'manuscriptColumn_Dec',
    width: '43%'
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
    GetColumn().then(res => { this.tabledata = res; console.log(res) }).catch()
  },
  methods: {
    handleChange (value) {
      this.sex = value
    },
    modif (id) {
      GetColumnID(id).then(res => { this.data = res; console.log(res) }).catch()
      this.modifvisible = true
    },
    Update () {
      UpdateColumn(this.data).then(
        res => {
          location.reload()
          this.$message.success('领域信息修改成功')
        }
      ).catch()
    },
    showmodal () {
      this.visible = true
    },
    DeleteAuthor (id) {
      DeleteColumn(id).then(location.reload()).catch()
    },
    submit () {
      this.form.validateFields((err, values) => {
        if (!err) {
          this.tabledata.push(values)
          AddColumn(values).then(res => {
            this.visible = false
            location.reload()
            this.$message.success('领域信息添加成功')
          }).catch()
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
