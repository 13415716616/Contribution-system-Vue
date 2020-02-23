
<template>
  <div>
    <a-card style="margin-top: 24px" :bordered="false" >
      {{manuscript.manuscript_Title}}111111
      <a-card type="inner" title="多层信息组">
        <detail-list title="组名称" size="small">
          <detail-list-item term="负责人">林东东</detail-list-item>
          <detail-list-item term="角色码">1234567</detail-list-item>
          <detail-list-item term="所属部门">XX公司-YY部</detail-list-item>
          <detail-list-item term="过期时间">2018-08-08</detail-list-item>
          <detail-list-item term="描述">这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长...</detail-list-item>
        </detail-list>
      </a-card>

    </a-card>
  </div>
</template>

<script>
import DetailList from '@/components/tools/DetailList'
import { GetCompleteManuscript } from '@/api/Personal'

const DetailListItem = DetailList.Item

export default {
  name: 'Advanced',
  components: {
    DetailList,
    DetailListItem
  },
  data () {
    return {
      manuscript: []
    }
  },
  mounted () {
    GetCompleteManuscript().then(res => { console.log(res); this.manuscript = res }).catch()
  }
}
</script>

<style lang="less" scoped>

  .detail-layout {
    margin-left: 44px;
  }
  .text {
    color: rgba(0, 0, 0, .45);
  }

  .heading {
    color: rgba(0, 0, 0, .85);
    font-size: 20px;
  }

  .no-data {
    color: rgba(0, 0, 0, .25);
    text-align: center;
    line-height: 64px;
    font-size: 16px;

    i {
      font-size: 24px;
      margin-right: 16px;
      position: relative;
      top: 3px;
    }
  }

  .mobile {
    .detail-layout {
      margin-left: unset;
    }
    .text {

    }
    .status-list {
      text-align: left;
    }
  }
</style>
