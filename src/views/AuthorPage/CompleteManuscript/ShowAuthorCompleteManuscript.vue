<template>
  <div>

    <a-card style="margin-top: 24px" :bordered="false" >
      <div style="text-align: center">
        <h1>{{ data.manuscript_Title }}</h1>
        <h4>{{ data.manuscript_Etitle }}</h4>
      </div>
      <div style="margin-left: 3%">
        <h3>关键词：{{ data.manuscript_Keyword }}</h3><br>
        <h3>摘要：{{ data.manuscript_Abstract }}</h3><br>
      </div>
      <div v-html="this.content" style="font-size:15px"></div><br>
    </a-card>

    <a-card type="inner" title="作者信息">
      <detail-list size="small">
        <detail-list-item term="作者姓名">{{ data.author_name }}</detail-list-item>
        <detail-list-item term="作者性别">{{ data.author_sex }}</detail-list-item>
        <detail-list-item term="电话">{{ data.author_Phone }}</detail-list-item>
        <detail-list-item term="地址">2{{ data.author_Address }}</detail-list-item>
        <detail-list-item term="简介">{{ data.author_dec }}</detail-list-item>
      </detail-list>
    </a-card><br>

    <a-card type="inner" title="稿件下载">
      <detail-list size="small">
        <detail-list-item term="主要稿件下载：">下载</detail-list-item>
        <detail-list-item term="次要稿件下载：">下载</detail-list-item>
      </detail-list>
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
      data: [],
      content: ''
    }
  },
  mounted () {
    GetCompleteManuscript().then(res => { this.data = res[0]; this.content = res[0].manuscript_Text; console.log(this.data) }).catch()
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
