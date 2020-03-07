<template>
  <div class="account-settings-info-view">
    <a-row :gutter="16">
      <a-col :md="24" :lg="16">

        <a-form layout="vertical" :form="author" >
          <a-form-item
            label="昵称"
          >
            <a-input placeholder="给自己起个名字" v-model="author.author_Name" />
          </a-form-item>
          <a-form-item
            label="个人简介"
          >
            <a-textarea rows="4" placeholder="请输入你的个人简介" v-model="author.author_Dec"/>
          </a-form-item>

          <a-form-item
            label="电子邮件"
            :required="false"
          >
            <a-input placeholder="exp@admin.com" v-model="author.author_Email"/>
          </a-form-item>
          <a-form-item
            label="电话号码"
            :required="false"
          >
            <a-input placeholder="请输入电话号码" v-model="author.author_Phone"/>
          </a-form-item>

          <a-form-item
            label="个人地址"
            :required="false"
          >
            <a-input placeholder="请输入个人地址" v-model="author.author_Address"/>
          </a-form-item>

          <a-form-item>
            <a-button type="primary" @click="sub()">提交</a-button>
            <a-button style="margin-left: 8px">保存</a-button>
          </a-form-item>
        </a-form>

      </a-col>
      <a-col :md="24" :lg="8" :style="{ minHeight: '180px' }">
        <div class="ant-upload-preview" @click="$refs.modal.edit(1)" >
          <img :src="option.img"/>
        </div><br>
        <div style="position: relative;margin: 0 auto;width: 100%;max-width: 180px;text-align: center">
          <a-upload
            name="file"
            :multiple="true"
            :action="imageURL"
            :headers="headers"
          >
            <a-button> <a-icon type="upload" /> 上传头像 </a-button>
          </a-upload></div>
      </a-col>

    </a-row>

    <!--        <avatar-modal ref="modal" @ok="setavatar"/>-->

  </div>
</template>

<script>
// import AvatarModal from './AvatarModal'
import { GetAuthorPersonalInfo, UpdateAuthorPersonalInfo } from '@/api/AuthorPersonalApi'
import Vue from 'vue'
import { ACCESS_TOKEN } from '@/store/mutation-types'

export default {
  // components: {
  //   AvatarModal
  // },
  data () {
    return {
      author: {},
      // cropper
      preview: {},
      headers: {
        Authorization: 'Bearer ' + Vue.ls.get(ACCESS_TOKEN)
      },
      option: {
        img: '/avatar2.jpg',
        info: true,
        size: 1,
        outputType: 'jpeg',
        canScale: false,
        autoCrop: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 180,
        autoCropHeight: 180,
        fixedBox: true,
        // 开启宽度和高度比例
        fixed: true,
        fixedNumber: [1, 1]
      },
      imageURL: process.env.VUE_APP_API_BASE_URL + '/Personal/UpdateAuthorInfo'
    }
  },
  created () {
    GetAuthorPersonalInfo().then(res => { console.log(res); this.author = res }).catch()
    console.log('111' + process.env.VUE_APP_API_BASE_URL)
  },
  methods: {
    setavatar (url) {
      this.option.img = url
    },
    sub () {
      console.log(this.author)
      UpdateAuthorPersonalInfo(this.author).then().catch()
    }
  }
}
</script>

<style lang="less" scoped>

  .avatar-upload-wrapper {
    height: 200px;
    width: 100%;
  }

  .ant-upload-preview {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 180px;
    border-radius: 50%;
    box-shadow: 0 0 4px #ccc;

    .upload-icon {
      position: absolute;
      top: 0;
      right: 10px;
      font-size: 1.4rem;
      padding: 0.5rem;
      background: rgba(222, 221, 221, 0.7);
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
    .mask {
      opacity: 0;
      position: absolute;
      background: rgba(0,0,0,0.4);
      cursor: pointer;
      transition: opacity 0.4s;

      &:hover {
        opacity: 1;
      }

      i {
        font-size: 2rem;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -1rem;
        margin-top: -1rem;
        color: #d6d6d6;
      }
    }

    img, .mask {
      width: 100%;
      max-width: 180px;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
    }
  }
</style>
