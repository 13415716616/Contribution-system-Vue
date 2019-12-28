<template>
  <div>
    <a-card class="card">
      <div>
        距离 ant-design-vue 发布差不多一年的时间了，具体什么时间我已经不记得了，也懒得去翻阅日志了，当然什么周年庆的事情就不存在了，继18年11月24日在 Vue Conf 亮相后，便很少在外界发声，一来是组件库很是稳定完善，没有大的改动，二来是团队成员包括我个人在运营这块的确不擅长，精力也很有限，我们把更多的时间用在研发组件上。

        不过这次我想有必要嘚瑟一下，不管是对我们，还是对我们的用户，都是一件值得庆祝的事情：ant-design-vue 正式成为蚂蚁金服 Ant Design 官方唯一推荐的 Vue 版 UI 组件库，为 ant-design-vue 的持续健康发展提供了强有力的平台基础和技术支持。
      </div>
    </a-card>
    <a-steps :current="1" size="small" class="step">
      <a-step title="查看协议" />
      <a-step title="填写信息" />
      <a-step title="上传资料" />
      <a-step title="作者信息" />
      <a-step title="完成" />
    </a-steps>
  </div>
</template>

<style lang="less" scoped>
  .card{
    margin-left: 20px;
    height: 600px;
  }
  .step{
    margin-right: 5%
  }
  .content{
    width: 100px;
    height: 500px;
  }
</style>
