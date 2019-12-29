<template>
  <div>
    <a-card class="card" title="用户须知">
      <div class="content">
        <h3>1. 用户协议使用场景</h3>
        每个应用开发者在将应用提交审核时，都需要提供一份该APP的用户服务协议。
        开发者可以自行开发用户协议，也可以在腾讯提供给的模板上进行定制。

        <h3>用户服务协议的目的：</h3>
        1. 建立开发者与用户之间的法律关系；
        2. 明确开发者承担本应用的客户服务；
        3. 明确开发者负责与用户之间的纠纷处理。

        在应用中，至少在2个位置需要放置用户服务协议超链接：
        1. 用户安装应用时，需确认同意该用户协议后，方可安装；
        2. 必须在应用中合适且明显的位置显示用户协议的超链接。如下图所示：
      </div>
      <a-checkbox @change="onChange">我已阅读以上内容</a-checkbox><br>
      <a-button type="primary" style="margin-top:30px" @click="nextStep">下一步</a-button>
    </a-card>
  </div>
</template>
<script>
export default {
  name: 'Instructions',
  data () {
    return {
      ischeck: false
    }
  },
  methods: {
    onChange () {
      if (this.ischeck === false) { this.ischeck = true } else { this.ischeck = false }
      console.log(this.ischeck)
    },
    nextStep () {
      if (this.ischeck) { this.$emit('nextStep') } else {}
    }
  }
}
</script>

<style lang="less" scoped>
  .card{
    margin-left: 30%;
    height: 500px;
  }
  .step{
    margin-right: 5%;

  }
  .content{
    width: 500px;
    height: 500px;
  }
</style>
