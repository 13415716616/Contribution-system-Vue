<template>
  <div class="ant-pro-pages-account-projects-cardList">
    <a-list :loading="loading" :data-source="data" :grid="{ gutter: 24, xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-card class="ant-pro-pages-account-projects-card" hoverable>
          <img slot="cover" src="data:image/jpeg;base64,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" style="height: 150px;overflow: hidden" :alt="item.title" />
          <a-card-meta :title="item.manuscript_Title">
            <template slot="description">
              <ellipsis :length="50">{{ item.manuscript_Abstract }}</ellipsis>
            </template>
          </a-card-meta>
          <div class="cardItemContent">
            <span>{{ item.complete_Time | fromNow }}</span>
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
</template>

<script>
import moment from 'moment'
import { TagSelect, StandardFormRow, Ellipsis, AvatarList } from '@/components'
import { GetCompleteManuscript } from '@/api/Personal'
const TagSelectOption = TagSelect.Option
const AvatarListItem = AvatarList.AvatarItem

export default {
  name: 'Project',
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
      data: [],
      form: this.$form.createForm(this),
      loading: true
    }
  },
  filters: {
    fromNow (date) {
      return moment(date).fromNow()
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    handleChange (value) {
      console.log(`selected ${value}`)
    },
    getList () {
      GetCompleteManuscript().then(res => {
        console.log('res', res)
        this.data = res
        this.loading = false
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .ant-pro-pages-account-projects-cardList {
    margin-top: 24px;

    /deep/ .ant-card-meta-title {
      margin-bottom: 4px;
    }

    /deep/ .ant-card-meta-description {
      height: 44px;
      overflow: hidden;
      line-height: 22px;
    }

    .cardItemContent {
      display: flex;
      height: 20px;
      margin-top: 16px;
      margin-bottom: -4px;
      line-height: 20px;

      > span {
        flex: 1 1;
        color: rgba(0,0,0,.45);
        font-size: 12px;
      }

      /deep/ .ant-pro-avatar-list {
        flex: 0 1 auto;
      }
    }
  }
</style>
