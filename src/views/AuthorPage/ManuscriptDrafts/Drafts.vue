<template>
  <div id="components-table-demo-size">
    <h4>Middle size table</h4>
    <a-table :columns="columns" :dataSource="data" size="middle" />
  </div>
</template>
<script>
import { GetManuscriptToDrafts } from '@/api/Contribute'
const columns = [
  {
    title: '论文标题',
    dataIndex: 'manuscript_Title'
  },
  {
    title: '作者',
    dataIndex: 'author_name'
  },
  {
    title: '操作',
    dataIndex: 'address'
  },
  {
    title: '当前状态',
    dataIndex: 'state'
  }
]

export default {
  created () {
    GetManuscriptToDrafts().then(res => {
      this.data = res
      console.log(res)
    }).catch()
  },
  data () {
    return {
      data: {},
      columns
    }
  }
}
</script>
<style>
  #components-table-demo-size h4 {
    margin-bottom: 16px;
    margin-left: 30px
  }
</style>
