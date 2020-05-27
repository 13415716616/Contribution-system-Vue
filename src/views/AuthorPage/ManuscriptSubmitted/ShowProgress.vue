<template><div><br><br><br>
  <a-card :bordered="false" style="margin: -24px -24px 0px;">
    <result type="success" :description="description" :title="info.manuscript_Status">
      <template slot="action">
        <a-button type="primary" @click="returntable">返回列表</a-button>
        <a-button style="margin-left: 8px" @click="Read">查看项目</a-button>
      </template>
      <div>
        <div style="font-size: 16px; color: rgba(0, 0, 0, 0.85); font-weight: 500; margin-bottom: 20px;">项目名称：{{ data.manuscript_Title }}</div>
        <div style="font-size: 16px; color: rgba(0, 0, 0, 0.85); font-weight: 500; margin-bottom: 20px;">当前状态：{{ info.manuscript_State }}</div>
        <a-row style="margin-bottom: 16px">
          <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
            <span style="color: rgba(0, 0, 0, 0.85)">稿件 ID：</span>
            {{ info.manuscript_ID }}
          </a-col>
          <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
            <span style="color: rgba(0, 0, 0, 0.85)">投稿人：</span>
            {{ info.author_ID }}
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
            <span style="color: rgba(0, 0, 0, 0.85)">投稿时间：</span>
            {{ info.manuscript_Time }}
          </a-col>
        </a-row>
        <a-steps :current="tab" :direction="isMobile() && directionType.vertical || directionType.horizontal" progressDot>
          <a-step >
            <span style="font-size: 14px" slot="title">编辑初审</span>
            <template slot="description">
              <div style="fontSize: 12px; color: rgba(0, 0, 0, 0.45); position: relative; left: 42px;text-align: left;" slot="description" >
                <div style="margin: 8px 0 4px">
                  <a-icon style="margin-left: 8px" type="dingding-o" />
                </div>
                <div></div>
              </div>
            </template>
          </a-step>
          <a-step title="专家评审">
            <span style="font-size: 14px" slot="title">专家评审</span>
          </a-step>
          <a-step title="主编综审" >
            <span style="font-size: 14px" slot="title">主编终审</span>
          </a-step>
        </a-steps>
      </div>
    </result>
  </a-card></div>
</template>

<script>
import { Result } from '@/components'
import { mixinDevice } from '@/utils/mixin.js'
import { GetManuscript, GetManuscriptStateID } from '@/api/AuthorManuscriptApi'

const directionType = {
  horizontal: 'horizontal',
  vertical: 'vertical'
}

export default {
  name: 'Success',
  components: {
    Result
  },
  mixins: [mixinDevice],
  created () {
    GetManuscript(this.$route.params.id).then(res => { this.data = res }).catch()
    GetManuscriptStateID(this.$route.params.id).then(res => { console.log(res); this.info = res; this.gettable() }).catch()
  },
  data () {
    return {
      directionType,
      info: {},
      data: {},
      tab: 0
    }
  },
  methods: {
    gettable () {
      if (this.info.manuscript_State === '等待编辑审查') { this.tab = 0 }
      if (this.info.manuscript_State === '等待专家审查') { this.tab = 1 }
      if (this.info.manuscript_State === '等待主编审查') { this.tab = 2 }
    },
    returntable () {
      this.$router.push({ name: 'ManuscriptSubmitted' })
    },
    Read () {
      this.$router.push({ name: 'ShowManscript', params: { id: this.$route.params.id } })
    } }
}
</script>

<style scoped>

</style>
