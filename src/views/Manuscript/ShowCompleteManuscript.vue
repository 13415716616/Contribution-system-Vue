<template>
  <div>
    <a-card title="通过的稿件">
      <div class="ant-pro-pages-list-projects-cardList">
        <a-list :loading="loading" :data-source="data" :grid="{ gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }">
          <a-list-item slot="renderItem" slot-scope="item">
            <a-card class="ant-pro-pages-list-projects-card" hoverable style="width:300px">
              <img slot="cover" :src="'https://localhost:5001'+item.avtor" :height="300" :alt="item.manuscript_Title" />
              <a-card-meta :title="item.manuscript_Title">
                <template slot="description">
                  <ellipsis :length="50">{{ item.manuscript_Keyword }}</ellipsis>
                </template>
              </a-card-meta>
              <div class="cardItemContent">
                <span>{{ item.time | fromNow }}</span>
              </div>
            </a-card>
          </a-list-item>
        </a-list>
      </div>
    </a-card>
  </div>
</template>
<script>
import { GetAllCompleteInfo } from '@/api/ChiefEditorManuscriptApi'
import { TagSelect, StandardFormRow, Ellipsis, AvatarList } from '@/components'
const TagSelectOption = TagSelect.Option
const AvatarListItem = AvatarList.AvatarItem
const columns = [
  {
    title: '论文标题',
    dataIndex: 'manuscript_Title',
    width: '38%'
  },
  {
    title: '投稿用户',
    dataIndex: 'author_ID',
    width: '15%'
  },
  {
    title: '论文作者',
    dataIndex: 'author_name',
    width: '15%'
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
]

export default {
  components: {
    AvatarList,
    AvatarListItem,
    Ellipsis,
    TagSelect,
    TagSelectOption,
    StandardFormRow
  },
  data () {
    return {
      columns,
      data: []
    }
  },
  created () {
    GetAllCompleteInfo().then(res => { this.data = res; console.log(res) }).catch()
  },
  methods: {
    Show (mid) {
      this.$router.push({ name: 'ShowChiefManuscript', params: { id: mid } })
    },
    getList () {
      this.$http.get('/list/article', { params: { count: 8 } }).then(res => {
        console.log('res', res)
        this.data = res.result
        this.loading = false
      })
    }
  }
}
</script>
