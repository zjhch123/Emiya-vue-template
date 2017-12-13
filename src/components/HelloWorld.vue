<template>
  <div>
    <img src="https://raw.githubusercontent.com/zjhch123/Emiya/master/assets/emiya.png"/>
    <h3>Emiya</h3>
    <h5>Create JS App with no build configuration. <br/>{{ msg }}</h5>
    <p>
      <a href="https://github.com/zjhch123/emiya" target="_blank">首页</a>
    </p>
    <p>
      <a href="https://github.com/zjhch123/emiya-node-template" target="_blank">emiya-node</a>
      <a href="https://github.com/zjhch123/emiya-spa-template" target="_blank">emiya-web</a>
      <a href="https://github.com/zjhch123/emiya-vue-template" target="_blank">emiya-vue</a>
    </p>
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: '精简, 小巧的JS项目脚手架。 '
      }
    }
  }
</script>