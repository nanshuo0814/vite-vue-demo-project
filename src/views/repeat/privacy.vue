<script setup>
const goBack = () => window.history.back();
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header-box">
        <button @click="goBack">◀ GoBack</button>
        小鱼儿🏠の隐私政策💻
        <span style="font-size: 18px; position: fixed; right: 10px; top: 10px"
          >更新人名：xiaoyuer</span
        >
        <span style="font-size: 18px; position: fixed; right: 10px; top: 35px"
          >更新时间：2023年8月14日</span
        >
      </el-header>
      <el-main class="main-box">
        <div style="margin-bottom: 15px; margin-top: 20px; font-size: larger">
          🐟引言:
        </div>
        欢迎使用我们的服务！在使用我们的服务之前，请仔细阅读以下内容并同意本隐私协议。<br />

        <h1>🚲隐私保护原则</h1>
        我们十分重视用户的个人隐私，将按照法律法规的要求，采取合理措施保护您的个人信息安全。
        本隐私协议描述了我们如何收集、使用、存储及分享您的个人信息，
        以及我们为保护您的个人信息而采取的措施。
        <h1>🚗收集的信息类型</h1>
        在您使用我们的服务过程中，我们可能会收集您的以下信息：<br />
        1.个人身份识别信息：例如您的姓名、电话号码、电子邮件地址等，用于帮助我们确认您的身份并向您提供更好的服务。<br />
        2.设备信息：例如您的设备型号、操作系统版本、唯一设备标识符等，用于帮助我们优化产品设计和提供更好的服务。<br />
        3.日志信息：在您使用我们的服务时，我们会记录您的操作日志、设备日志等信息，以便为您提供更好的技术支持和服务。<br />
        4.对于某些特定的应用场景，我们可能会收集您的更多信息。在这种情况下，我们将会单独告知并征得您的明确同意。<br />

        <h1>🚆个人信息的使用和存储</h1>
        1.我们将严格按照法律法规和本协议约定的范围和目的使用您提供的个人信息，并保存在国内控制的服务器上。<br />
        2.我们不会将您的个人信息出售或转让给任何第三方，但以下情形除外：<br />
        ①在您明确同意或指示的情况下；<br />
        ②根据法律法规及司法、行政等有权机关的要求；<br />
        ③在涉及合并、收购、资产转让等交易时，需要向接收方披露；<br />
        3.我们将采取一切合理的技术手段和管理措施，保障您的个人信息安全。
        同时，我们会尽最大努力防止您的个人信息遭受未经授权的访问、披露或滥用。

        <h1>🚢个人信息的保留期限</h1>
        除非法律法规另有规定，或者为了实现信息处理目的所必需，我们将只在必要的时间内保留您的个人信息，
        超出保留期限后，我们将采取相应措施删除您的个人信息。

        <h1>🚝用户权利</h1>
        1.您有权要求查看、更正、删除、限制处理、撤回同意等您的个人信息的管理权限。<br />
        2.如果您发现我们处理您的个人信息的方式存在问题，您可以向我们投诉，并要求我们改正。<br />
        3.在处理您的请求前，我们可能需要验证您的身份。如果您无法提供有效身份验证信息，我们可能会拒绝您的请求。<br />

        <h1>🚈其他</h1>
        1.我们不适用于儿童。未满18岁的儿童不应使用我们的服务。<br />
        2.我们保留随时修改本隐私协议的权利。如果我们修改了隐私协议，我们将在网站上发布更新版本，
        并通知您最近更新日期。<br />

        <h1>✈法律适用和争议解决</h1>
        本隐私协议适用中华人民共和国法律。如本协议中的任何条款与适用法律相抵触，
        应以法律规定为准。在协议履行过程中发生的争议，双方应先通过友好协商解决；协商不成的，
        任何一方可向协议签订地有管辖权的人民法院提起诉讼。

        <h1>🐱最后，感谢您的信任和支持！</h1>
        <h5>ps:若您有更好的意见,请放送您的意见至我的邮箱,如下所示👇</h5>
      </el-main>
      <div class="footer-box">
        <span>Copyright © 2023-2024 xiaoyuer🐟🐱</span>
        <span style="top: 50px">
          🐱(o=^•ェ•)o🐟...上班摸鱼中 &nbsp;&nbsp;📫:ydg_0814@qq.com
        </span>
      </div>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.header-box {
  text-align: center;
  font-size: 35px;
  box-shadow: 0 2px 20px rgba(202, 208, 217, 0.6);
  button {
    position: absolute;
    left: 0;
    margin: 10px;
    border-radius: 4px;
    font-size: 2rem;
    color: #fff;
    background-color: #42b983;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  button:hover {
    background-color: #34a672;
  }
}
.main-box {
  position: absolute;
  left: 15%;
  right: 15%;
  top: 10%;
  bottom: 15%;
  font-size: 20px;
}
.footer-box {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  box-shadow: 0 2px 20px rgba(202, 208, 217, 0.6);
  span {
    position: absolute;
    text-align: center;
    top: 15px;
    left: 10%;
    right: 10%;
  }
}
h1 {
  margin: 20px;
  margin-left: 0;
}
</style>
