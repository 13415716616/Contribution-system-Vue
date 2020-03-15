<template>
  <div>
    <a-card title="稿件信息">
      <a-row>
        <a-col>
          <h3>稿件名称</h3>
        </a-col>
        <a-col>
          <h3>稿件操作：<a>在线阅读</a></h3>
        </a-col>
        <a-col>
          <h3>稿件下载：<a>下载</a></h3>
        </a-col>
      </a-row>
    </a-card>
    <a-card title="专家审核意见">
    </a-card>
    <a-row>
      <a-col :span="24" style="text-align: center">
        <a-button type="primary" :size="size" style="margin-right: 30px">返回选择</a-button>
        <a-button type="primary" :size="size" style="margin-right: 30px">退回稿件</a-button>
        <a-button type="primary" :size="size" @click="complete">通过稿件</a-button>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { CompleteSecondEdiotrManuscript } from '@/api/EditManuscript'
export default {
  methods: {
    complete () {
      CompleteSecondEdiotrManuscript(2).then().catch()
    }
  }
}
</script>
