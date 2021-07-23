<!--
 * @Description:
 * @Autor: clb
 * @Date: 2021-07-23 15:09:40
 * @LastEditors: clb
 * @LastEditTime: 2021-07-23 16:21:22
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <select v-model="lang" class="ml-18">
        <option v-for="(item,index) in langList" :key='index' :value="item.value">{{item.label}}</option>
      </select>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    this.langList = [
      { label: '中文', value: 'zh' },
      { label: '英文', value: 'en' }
    ]
    return {
      lang: 'zh'
    }
  },
  watch: {
    lang (lang) {
      this.$i18n.locale = lang
      console.log(this.$i18n.locale)
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
