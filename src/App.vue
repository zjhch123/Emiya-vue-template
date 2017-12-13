<template>
  <div class="app">
    <h3>Emiya - Vue</h3>
    <HelloWorld></HelloWorld>
  </div>
</template>
<script>
  import HelloWorld from '@components/HelloWorld'
  export default {
    name: 'App',
    created: () => {
      console.log('Hello, World!')
    },
    components: {
      HelloWorld
    },
    data() {
      return {
        message: 'Hello World!'
      }
    }
  }
</script>
<style lang="scss">
html, body {
  margin: 0;
}
.app {
  width: 750px;
  margin: auto;
  text-align: center;
  font-family: '微软雅黑';
  color: #1e1e1e;
}
</style>