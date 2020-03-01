<template>
  <div>
    <a-card title="稿件留言" :bordered="false">
      <a-list>
        <a-list-item :key="index" v-for="(item, index) in commentdata">
          <a-list-item-meta>
            <a-avatar slot="avatar" :src="item.avatar" class="avtor"/>
            <div slot="title">
              <span>{{ item.name }}</span>&nbsp;&nbsp;&nbsp;<a-tag color="#2db7f5" v-if="item.role=='Editor'">编辑</a-tag>
              <a-tag color="yellow" v-if="item.role=='ChiefEditor'">主编</a-tag>
              <a-tag color="green" v-if="item.role=='Author'">作者</a-tag>&nbsp;
              <br>
              {{ item.comment }}
            </div>
            <div slot="description">{{ item.time }}</div>
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </a-card><br><br>
    <a-card title="留言" :bordered="false">
      <a-form-item>
        <a-textarea
          v-model="commentinfo.comment"
          placeholder="请输入你的留言"
          :autosize="{ minRows: 5, maxRows: 9 }"
        /><br>
        <a-button @click="sentComment" >提交</a-button>
      </a-form-item>
    </a-card>
    <div style="text-align: center;margin-top: 20px">
      <a-button class="btn" type="primary" @click="ReturnSelect">返回选择</a-button>
      <a-button class="btn" type="primary" @click="ReturnMansucript">返回稿件</a-button>
      <a-button class="btn" type="primary" @click="CompleteToManuscript">通过稿件</a-button>
    </div>
  </div>
</template>>
<script>
import { SentComment, GetfirstComments, CompleteManuscript } from '@/api/EditManuscript'

export default {
  data () {
    return {
      commentinfo: {
        name: this.$store.getters.nickname,
        role: '',
        manscriptid: this.$route.params.id,
        avtor: this.$store.getters.avatar,
        comment: '',
        time: ''
      },
      commentdata: []
    }
  },

  created () {
    console.log(this.$route.params.id)
    GetfirstComments(this.$route.params.id).then(res => { console.log(res); this.commentdata = res; this.commentinfo.manscriptid = this.$route.params.id }).catch(a => console.log(a))
    this.user = this.userInfo
    this.avatar = this.userInfo.avatar
  },
  mounted () {
    this.getProjects()
    this.getActivity()
  },
  methods: {
    sentComment () {
      SentComment(this.commentinfo).then(this.commentdata.push(this.commentinfo)).catch(a => console.log(a)).catch()
    },
    ReturnMansucript () {
      this.$router.push({ name: 'ShowEditManuscript', params: { id: this.$route.params.id } })
    },
    ReturnSelect () {
      this.$router.push({ name: 'ManuscriptEnquiry' })
    },
    CompleteToManuscript () {
      console.log('123')
      CompleteManuscript(this.$route.params.id).then(
        this.$router.push({ name: 'FirstComplete', params: { id: this.$route.params.id } })
      ).catch()
    }

  }
}
</script>
<style lang="less" scoped>
  .avt or{
    margin-top: 20px
  }
  .btn{
    margin-right: 30px;
  }
</style>
