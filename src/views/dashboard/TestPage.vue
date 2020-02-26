<template>
  <a-modal
    title="新建订单"
    :width="840"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleSubmit"
    @cancel="handleCancel"
  >
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
        <a-row type="flex" justify="start" align="middle ">

          <a-col :span="12">
            <a-form-item label="订单编号" :labelCol="labelCol" :wrapperCol="wrapperCol" >
              <a-input v-decorator="['Order_ID', {rules: [{required: true, min: 1, message: '请输入至少五个字符的规则描述！'}]}]" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="买家会员名" :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['Customer_ID', {rules: [{required: true, min: 1, message: '请输入至少五个字符的规则描述！'}]}]" />
            </a-form-item>
          </a-col>

          <a-col :span="12">
            <a-form-item label="所属店铺" :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['Store_ID', {rules: [{required: true, min: 1, message: '请输入至少五个字符的规则描述！'}]}]" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="所购商品" :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['Commodity_ID', {rules: [{required: true, min: 1, message: '请输入至少五个字符的规则描述！'}]}]" />
            </a-form-item></a-col>

          <a-col :span="12">
            <a-form-item label="订单创建时间" :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['Order_CreateTime', {rules: [{required: true, min: 1, message: '请输入至少五个字符的规则描述！'}]}]" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="订单付款时间" :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['Order_PayTime', {rules: [{required: true, min: 1, message: '请输入至少五个字符的规则描述！'}]}]" />
            </a-form-item></a-col>

          <a-col :span="12">
            <a-form-item label="顾客姓名" :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['Customer_Name', {rules: [{required: true, min: 1, message: '请输入至少五个字符的规则描述！'}]}]" />
            </a-form-item></a-col>

          <a-col :span="12">
            <a-form-item label="顾客电话" :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['Customer_Phone', {rules: [{required: true, min: 1, message: '请输入至少五个字符的规则描述！'}]}]" />
            </a-form-item></a-col>

          <a-col :span="12">
            <a-form-item label="顾客地址" :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['Customer_Address', {rules: [{required: true, min: 1, message: '请输入至少五个字符的规则描述！'}]}]" />
            </a-form-item>
          </a-col>

          <a-col :span="12">
            <a-form-item label="买家留言" :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['Customer_Message', {rules: [{required: true, min: 1, message: '请输入至少五个字符的规则描述！'}]}]" />
            </a-form-item>
          </a-col>

          <a-col :span="12">
            <a-form-item label="订单备注" :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['Order_Message', {rules: [{required: true, min: 1, message: '请输入至少五个字符的规则描述！'}]}]" />
            </a-form-item>
          </a-col></a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="订单价格" :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['Order_Price', {rules: [{required: true, min: 1, message: '请输入至少五个字符的规则描述！'}]}]" />
            </a-form-item>
          </a-col></a-row>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
import { CreatOrder } from '@/api/login'
export default {
  data () {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 }
      },
      visible: false,
      confirmLoading: false,
      form: this.$form.createForm(this)
    }
  },
  methods: {
    add () {
      this.visible = true
    },
    handleSubmit () {
      const { form: { validateFields } } = this
      this.confirmLoading = true
      validateFields((errors, values) => {
        if (!errors) {
          // const Order = { ...values }
          console.log('values', values)
          CreatOrder(values).then().catch()
          setTimeout(() => {
            this.visible = false
            this.confirmLoading = false
            this.$emit('ok', values)
          }, 1500)
        } else {
          this.confirmLoading = false
        }
      })
    },
    handleCancel () {
      this.visible = false
    }
  }
}
</script>
