<script>
import Vue from 'vue'
import { ACCESS_TOKEN } from '@/store/mutation-types'
export default {
  name: 'TaskForm',
  data () {
    return {

      visible: false,
      form: this.$form.createForm(this),
      headers: {
        ManuscriptID: this.$store.getters.manuscriptID,
        Authorization: 'Bearer ' + Vue.ls.get(ACCESS_TOKEN)
      }
    }
  },
  methods: {
    add () {
      this.visible = true
    },
    edit (record) {
      const { form: { setFieldsValue } } = this
      this.visible = true
      this.$nextTick(() => {
        setFieldsValue({ taskName: 'test' })
      })
    },
    handleSubmit () {
      const { form: { validateFields } } = this
      this.visible = true
      validateFields((errors, values) => {
        if (!errors) {
          console.log('values', values)
        }
      })
    }
  }
}
</script>
