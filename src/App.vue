<template>
  <div id="app">
    <img data-intro="这是一张普通的图片" data-step="1" src="./assets/logo.png">
    <HelloWorld/>
    <h2>v-intro-if测试</h2>
    <ol>
      <li v-for="item in fruits" :key="item">
        <span v-intro-if="item === 'banana'" data-intro="这是香蕉">
          {{ item }}
        </span>
      </li>
    </ol>
    <button @click="viewIntro()" data-intro="点击这里可以重新查看向导内容">
      查看向导
    </button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',

  data () {
    return {
      fruits: ['banana', 'Strawberry', 'Apple']
    }
  },

  mounted () {
    this.$nextTick(() => {
      if (localStorage.getItem('isFirst') === null || localStorage.getItem('isFirst') !== '1') {
        this.$intro().start()
        localStorage.setItem('isFirst', 1)
      }
    })
  },

  components: {
    HelloWorld
  },

  methods: {
    viewIntro () {
      this.$intro().start()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
