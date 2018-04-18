<template>
  <div id="my-footer">
    <div id="footer_main">

      <div class="links">
        <a class="dark" href="javascript:;">RSS</a>
        <a class="dark" href="javascript:;">源码地址</a>
      </div>

      <div class="col_fade">
        <p>
          服务器搭建在
          <a href="javascript:;">
            <img src="~assets/images/ucloud.png" border="0" alt="UCloud云计算">
          </a>
          ，
          存储赞助商为
          <a href="javascript:;" class="sponsor_outlink" data-label="qiniu_bottom">
            <img src="~assets/images/qiniu.png" title="七牛云存储" alt="七牛云存储" width="115px">
          </a>
        </p>
        <p>
          声明：内容均来自于网络，如有侵权行为请发送邮件至vueclub@126.com,我们将在第一时间删除
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "my-footer"
  }
</script>

<style scoped lang="less">
  #my-footer{
    clear: both;
    position: relative;
    background: #fff;
    #footer_main{
      width: 90%;
      max-width: 1400px;
      min-width: 960px;
      margin: 0 auto;
      color: #e2e2e2;
      padding: 20px 0;
      font-size: 14px;
      line-height: 2em;
    }
    .col_fade{
      color: #ababab;
      p{
        line-height: 20px;
        vertical-align: bottom;
        margin: 0 0 10px;
      }
      a{
        vertical-align: bottom;
      }
    }
    img{
      width: auto\9;
      height: auto;
      max-width: 100%;
      vertical-align: middle;
      border: 0;
      -ms-interpolation-mode: bicubic;
    }
  }
</style>
