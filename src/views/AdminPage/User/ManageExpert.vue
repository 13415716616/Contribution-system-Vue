<template>
  <div style=" text-align:center">
    <a-card>
      <div class="button1">
        <a-button @click="showmodal" >添加专家信息</a-button>
      </div>
      <a-divider />
      <a-table :columns="columns" :dataSource="tabledata">
        <span slot="action" slot-scope="text, record">
          <a @click="modif(record.expert_ID)">修改</a><a-divider type="vertical" />
          <a-popconfirm
            title="你确定要删除这个用户吗?"
            @confirm="DeleteAuthor(record.expert_ID)"
            okText="是"
            cancelText="否"
          >
            <a>删除</a></a-popconfirm>
        </span>
      </a-table>

      <a-modal :visible="visible" title="添加专家信息" @cancel="handleCancel" width="50%" @ok="submit">
        <a-form :form="form">
          <a-form-item label="专家账号" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-decorator="['Expert_ID', { rules: [{ required: true, message: '请输入专家账号' }] }]"
            />
          </a-form-item>

          <a-form-item label="专家姓名" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-decorator="['Expert_Name', { rules: [{ required: true, message: '请输入专家姓名' }] }]"
            />
          </a-form-item>
          <a-form-item label="专家密码" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-decorator="['Expert_Password', { rules: [{ required: true, message: '请输入专家密码' }] }]"
            />
          </a-form-item>
          <a-form-item label="性别" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-select v-decorator="['Expert_Sex']">
              <a-select-option key="boy" value="男">男</a-select-option>
              <a-select-option key="gril" value="女">女</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="专家学历" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-select v-decorator="['Expert_Education']">
              <a-select-option key="1" value="本科">本科</a-select-option>
              <a-select-option key="1" value="硕士">硕士</a-select-option>
              <a-select-option key="1" value="博士">博士</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="专家领域" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-select v-decorator="['expert_Filed', { rules: [{ required: true, message: '请选择研究领域' }] }]">
              <a-select-option v-for="item in select" :key="item.filed_ID" :value="item.filed_ID">{{ item.filed_Name }}</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="研究方向" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-decorator="['Research_Direction', { rules: [{ required: true, message: '请输入研究方向' }] }]"
            />
          </a-form-item>
          <a-form-item label="专家电话" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-decorator="['Expert_Phone']"
            />
          </a-form-item>
          <a-form-item label="专家邮箱" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-decorator="['Expert_Email']"
            />
          </a-form-item>
          <a-form-item label="专家地址" :label-col="{ span: 3 }" :wrapper-col="{ span: 18 }">
            <a-input
              v-decorator="['Expert_Address']"
            />
          </a-form-item>
          <a-form-item label="专家简介" :label-col="{ span: 3 }" :wrapper-col="{ span: 18 }">
            <a-textarea
              :rows="5"
              v-decorator="['Expert_Dec']"
            />
          </a-form-item>
        </a-form>
      </a-modal>

      <a-modal :visible="modifvisible" title="修改专家信息" @cancel="modifvisible=false" width="50%" @ok="modif(expert_ID)">
        <a-form >
          <a-form-item label="专家账号" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-model="data.expert_ID"
            />
          </a-form-item>

          <a-form-item label="专家姓名" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-model="data.expert_Name"
            />
          </a-form-item>

          <a-form-item label="专家密码" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-model="data.expert_Password"
            />
          </a-form-item>

          <a-form-item label="专家领域" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-select v-model="data.expert_Filed">
              <a-select-option v-for="item in select" :key="item.filed_ID" :value="item.filed_ID">{{ item.filed_Name }}</a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item label="专家性别" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-select v-model="data.expert_Sex">
              <a-select-option key="boy" value="男">男</a-select-option>
              <a-select-option key="gril" value="女">女</a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item label="专家学历" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-select v-model="data.expert_Education">
              <a-select-option key="1" value="本科">本科</a-select-option>
              <a-select-option key="1" value="硕士">硕士</a-select-option>
              <a-select-option key="1" value="博士">博士</a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item label="专家电话" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-model="data.expert_Phone"
            />
          </a-form-item>
          <a-form-item label="专家邮箱" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
            <a-input
              v-model="data.expert_Email"
            />
          </a-form-item>
          <a-form-item label="专家地址" :label-col="{ span: 3 }" :wrapper-col="{ span: 18 }">
            <a-input
              v-model="data.expert_Address"
            />
          </a-form-item>
          <a-form-item label="专家简介" :label-col="{ span: 3 }" :wrapper-col="{ span: 18 }">
            <a-textarea
              :rows="5"
              v-model="data.expert_Dec"
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
import { GetAllExperts, GetExpertID, DeleteExpert, AddExpert } from '@/api/AdminApi'
import { GetAllExpertFiled } from '@/api/ManuscriptReview'
const columns = [
  {
    title: '专家账号',
    dataIndex: 'expert_ID'
  },
  {
    title: '专家姓名',
    dataIndex: 'expert_Name'
  },
  {
    title: '专家学历',
    dataIndex: 'expert_Education'
  },
  {
    title: '专家邮箱',
    dataIndex: 'expert_Email'
  },
  {
    title: '研究领域',
    dataIndex: 'academic_Field'
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
      data: {},
      select: {}
    }
  },
  created () {
    GetAllExperts().then(res => { this.tabledata = res; console.log(res) }).catch()
    GetAllExpertFiled().then(res => { this.select = res }).catch()
  },
  methods: {
    handleChange (value) {
      this.sex = value
    },
    modif (id) {
      GetExpertID(id).then(res => { this.data = res; console.log(res) }).catch()
      this.modifvisible = true
    },
    showmodal () {
      this.visible = true
    },
    DeleteAuthor (id) {
      DeleteExpert(id).then().catch()
    },
    submit () {
      this.form.validateFields((err, values) => {
        if (!err) {
          this.tabledata.push(values)
          AddExpert(values).then(this.visible = false).catch()
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
