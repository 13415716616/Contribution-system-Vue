<template>
  <div style=" text-align:center">
    <a-card class="card" title="投稿须知">
      <div class="content">
        <h3 style=" text-align:center">用户公告</h3>
        <p> 一、来稿应反映目前国内外计算机科技的先进理论、应用研究、技术成果和发展趋势。<br>
          二、要求电子稿图文清晰，附图、表应为黑白格式，全文字数控制在6000字符以内，其中包括图表和空格所占的版面。<br>
          三、Email投稿：smcaa@sjtu.edu.cn。要求来稿使用Word文档格式，不得携带病毒。<br>
          四、请按照以下格式次序撰写文稿：(1)题目 (2)作者姓名、单位、地区和邮编 (3)中文摘要 (4)关键词 (5)中图分类号 (6)文献标识码 (7)英文题目 (8)英文作者姓名 (9)英文单位，英文地区和邮编 (10)英文摘要 (11)英文关键词 (12)正文 (13)参考文献 (14)作者简介。<br>
          五、摘要200—300字即可，应准确反映论文的关键内容和重点信息。关键词3-5个；题目、摘要和关键词皆应有中英文对照，且含意相符；英文摘要不应超过250个实词；英文的词句力求语法正确流畅通俗。<br>
          六、首页下方注明全部作者的简介，内容包括：1.资助项目；2.作者简介：作者姓名（出生年-）、性别、民族（汉族可省）、籍贯、单位、职称、学位、研究方向、地区、邮编。<br>
          七、参考文献3-6篇，引文符合国际标准要求，近5年的文献量应占50%以上，非正式出版物请勿引用。欢迎引用本刊的参考文献。<br>
          八、文末请给出第一作者联系方法（电话、详细地址和电子邮箱地址、身份证号码），以便联系。
        </p>
        <h3 style=" text-align:center"> 如何写好论文摘要</h3>

        <p>论文摘要是科技论文的重要组成部分。编写摘要时，要求不加评论和补充解释。摘要应是一篇简明确切记述论文重要内容的短文。其基本要素包括研究目的、方法、结果和结论。摘要应该具有与论文同等量的主要信息，使读者通过摘要即能获得论文的必要信息。好的摘要一能使读者快速了解论文内容梗概，以便决定是否要详细研读论文全文；二能为科技情报人员和计算机检索提供方便。所以，摘要质量的高低可直接影响论文的被引用度。
        </p><p> 本刊的摘要要求在200—300字之内，摘要中不应出现“本文”“该文”“作者”“笔者”“我们”等这样的主语。
        </p>
        <h3 style=" text-align:center">请检查，您的稿件中有以下问题吗？</h3>

        <p> 我们在审稿编辑时经常发现一些稿件存在以下不应有的问题，以至于中断稿件处理流程和影响其录用。<br>
          1、稿件中不留姓名、联系地址、电话和Email地址，造成编辑部在处理过程中无法及时联系。<br>
          2、作者简介不规范。本刊全部作者的简介格式为：作者名（出生年-）、性别、民族（汉族可省）、籍贯、单位、职称、学位、研究方向、地区、邮编。所有署名作者，缺一不可。<br>
          3、文章篇头要素缺少英文对照。规范要求刊登科技论文都应具有文章名、作者名、地区和邮码、摘要和关键词几要素的中英文对照。<br>
          4、文章篇末未列参考文献。规范要求刊登科技论文，篇末必须列出参考文献，本刊要求有3-6篇，其中50%为近3年发表的。<br>
          5、文不对图，图不对文。文章中插图应与说明文字一一对应。
          6、自创英文缩写符号未作定义或说明。作者应该想到刊登的科技论文面向广大读者，非常用缩写符号应交代清楚。如果编辑或评审专家看不明白，此文可能中断处理。</p>
      </div>
      <a-checkbox @change="onChange" style="text-align:center;margin-top:30px">我已阅读以上内容</a-checkbox><br>
      <p v-show="showalter" class="alert">请勾选已阅读以上内容</p>
      <a-button type="primary" @click="nextStep">下一步</a-button>
    </a-card>
  </div>
</template>
<script>
export default {
  name: 'Instructions',
  data () {
    return {
      ischeck: false,
      showalter: false
    }
  },
  methods: {
    onChange () {
      if (this.ischeck === false) { this.ischeck = true } else { this.ischeck = false }
      console.log(this.ischeck)
    },
    nextStep () {
      if (this.ischeck) { this.$emit('nextStep') } else { this.showalter = true }
    }
  }
}
</script>

<style lang="less" scoped>
  .card{
    margin-left: 28%;
    margin-right: 28%;
    height: 500px;
    margin-top: 35px
  }
  .step{
    margin-right: 5%;
  }
  .content{
    width: 90%;
    height: 400px;
    margin-left: 38px;
    overflow: auto;
    text-align: left;
  }
  .alert{
    margin-top: 15px;
    color: red;
  }
</style>
