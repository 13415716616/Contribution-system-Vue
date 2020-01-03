<template>
  <div>12312131
    <a-table :columns="columns" :data="data">

    </a-table>
  </div>
</template>
<script>
const columns = [{
  dataIndex: 'ID',
  key: 'ID',
  slots: { title: '论文编号' },
  scopedSlots: { customRender: 'ID' }
},
{
  dataIndex: 'Name',
  key: 'Name',
  slots: { title: '论文名称' },
  scopedSlots: { customRender: 'Name' }
}]
const data = [
  {
    ID: '1',
    Name: 'John Brown'
  }]
export default {
  data () {
    return {
      columns,
      data
    }
  }
}
</script>
