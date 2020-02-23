<template>
  <div>
    <a-card style="margin-top: 24px" :bordered="false" title="通过稿件">

      <div slot="extra">
        <a-input-search style="margin-left: 16px; width: 272px;" />
      </div>

      <a-list size="large" :pagination="{showSizeChanger: true, showQuickJumper: true, pageSize: 5, total: 50}">
        <a-list-item :key="index" v-for="(item, index) in data" style="height: 80px">
          <diV class="line-limit-length">
            <a-list-item-meta :description="item.manuscript_Abstract">
              <a-avatar slot="avatar" size="large" shape="square" src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"/>
              <a slot="title">{{ item.manuscript_Title }}</a>
            </a-list-item-meta></diV>
          <div slot="actions">
            <a>查看稿件</a>
          </div>
          <div class="list-content">
            <div class="list-content-item">
              <span>作者</span>
              <p>{{ item.author_name }}</p>
            </div>
            <div class="list-content-item">
              <span>通过时间</span>
              <p>{{ item.complete_Time }}</p>
            </div>
            <div class="list-content-item">
              <!--              <a-progress :percent="item.progress.value" :status="!item.progress.status ? null : item.progress.status" style="width: 180px" />-->
            </div>
          </div>
        </a-list-item>
      </a-list>

      <task-form ref="taskForm" />
    </a-card>
  </div>
</template>
<script>
import { GetCompleteManuscript } from '@/api/Personal'

const columns = [
  {
    title: '论文标题',
    dataIndex: 'manuscript_Title',
    width: '38%'
  },
  {
    title: '作者',
    dataIndex: 'author_name',
    width: '15%'
  },
  {
    title: '通过时间',
    dataIndex: 'complete_Time',
    width: '20%'
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
]

export default {
  created () {
    GetCompleteManuscript().then(res => { console.log(res); this.data = res }).catch()
  },
  data () {
    return {
      columns,
      data: []
    }
  },
  methods: {
    Show (mid) {
      this.$router.push({ name: 'ShowManscript', params: { id: mid } })
    },
    ShowComment (id) {
      this.$router.push({ name: 'ShowEditorInfo', params: { id: id } })
    }

  }
}
</script>

<style lang="less" scoped>
  .ant-avatar-lg {
    width: 48px;
    height: 48px;
    line-height: 48px;
  }

  .list-content-item {
    color: rgba(0, 0, 0, .45);
    display: inline-block;
    vertical-align: center;
    font-size: 14px;
    margin-left: 100px;
    span {
      line-height: 20px;
    }
    p {
      margin-top: 4px;
      margin-bottom: 0;
      line-height: 22px;
    }
  }

  .line-limit-length {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
</style>
