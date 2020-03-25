<template>
  <div>
    <a-card>
      <div class="ant-pro-pages-list-projects-cardList">
        <a-list :loading="loading" :data-source="data" :grid="{ gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }">
          <a-list-item slot="renderItem" slot-scope="item">
            <a-card class="ant-pro-pages-list-projects-card" hoverable>
              <img slot="cover" :src="item.cover" :alt="item.title" />
              <a-card-meta :title="item.title">
                <template slot="description">
                  <ellipsis :length="50">{{ item.description }}</ellipsis>
                </template>
              </a-card-meta>
              <div class="cardItemContent">
                <span>{{ item.updatedAt | fromNow }}</span>
                <div class="avatarList">
                  <avatar-list size="mini">
                    <avatar-list-item
                      v-for="(member, i) in item.members"
                      :key="`${item.id}-avatar-${i}`"
                      :src="member.avatar"
                      :tips="member.name"
                    />
                  </avatar-list>
                </div>
              </div>
            </a-card>
          </a-list-item>
        </a-list>
      </div>
    </a-card>
  </div>
</template>
<script>
import { GetChiefReviewManuscript } from '@/api/ManuscriptReview'

const columns = [
  {
    title: '论文标题',
    dataIndex: 'manuscriptReview_Title',
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
    title: '当前状态',
    dataIndex: 'manuscriptReview_Status',
    width: '20%'
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
]

export default {
  data () {
    return {
      columns,
      data: []
    }
  },
  created () {
    GetChiefReviewManuscript().then(res => { this.data = res; console.log(res) }).catch()
  },
  methods: {
    Show (mid) {
      this.$router.push({ name: 'ShowChiefManuscript', params: { id: mid } })
    }
  }
}
</script>
