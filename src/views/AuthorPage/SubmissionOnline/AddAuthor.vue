<template>
  <div style=" text-align:center">
    <a-form :form="form">
      <a-card title="填写作者信息" class="card">
        <a-form-item label="作者姓名" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
          <a-input
            v-decorator="['Author_name', { rules: [{ required: true, message: '请输入作者姓名' }] }]"
          />
        </a-form-item>
        <a-form-item label="性别" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
          <a-select @change="handleChange">
            <a-select-option key="boy" value="男">男</a-select-option>
            <a-select-option key="gril" value="女">女</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="作者电话" :label-col="{ span: 3 }" :wrapper-col="{ span: 8 }">
          <a-input
            v-decorator="['Author_Phone', { rules: [{ required: true, message: '请输入电话' }] }]"
          />
        </a-form-item>
        <a-form-item label="居住地址" :label-col="{ span: 3 }" :wrapper-col="{ span: 18 }">
          <a-input
            v-decorator="['Author_Address', { rules: [{ required: true, message: '请输入地址' }] }]"
          />
        </a-form-item>
        <a-form-item label="作者简介" :label-col="{ span: 3 }" :wrapper-col="{ span: 18 }">
          <a-textarea
            :rows="5"
            v-decorator="['Author_dec', { rules: [{ required: true, message: '请输入地址' }] }]"
          />
        </a-form-item>
      </a-card>
    </a-form>
    <a-button type="primary" style="margin-top:30px" @click="submit">下一步</a-button>
  </div>
</template>
<script>
import { AddAthorinfo } from '@/api/AuthorManuscriptApi'

export default {
  name: 'AddAuthor',
  data () {
    return {
      form: this.$form.createForm(this),
      sex: '',
      Manscript_ID: this.$store.getters.manuscriptID
    }
  },
  methods: {
    handleChange (value) {
      this.sex = value
    },
    submit () {
      this.form.Author_sex = this.sex
      this.form.Manscript_ID = this.Manscript_ID
      this.form.validateFields((err, values) => {
        console.log(this.sex)
        console.log('12312312' + JSON.stringify(values))
        values.Author_sex = this.sex
        values.Manscript_ID = this.Manscript_ID
        if (!err) {
          AddAthorinfo(values).then(this.$emit('nextStep')).catch()
        }
      })
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
</style>
