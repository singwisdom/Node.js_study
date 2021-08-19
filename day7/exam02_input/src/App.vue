<template>

  <div>
    <h1>v-model</h1>
    <h5>{{textVal}}</h5>
    <input type="text" :value="textVal" @change="onChange"><br>
    <input type="text" value="textVal" @input="onInput"><br>
    <input type="text" value="textVal"><br>
    <button @click="onOK">ok</button>
  </div>

  <div>
    <h1>with v-model</h1>
    <h5>{{textVal_vm}}</h5>
    <input type="text" v-model="textVal_vm">
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      textVal : 'hello',
      textVal_vm : 'hi vue'
    }
  },
  methods:{
    onOK() {
      // console.log(this.textVal)
      this.textVal = this.tempText
    },
    onChange(evt) {
      console.log(evt.target.value)
      this.tempText = evt.target.value
    },
    onInput(evt) {
      console.log(evt.target.value)
      this.textVal = evt.target.value
    }
  },
  created() {
    this.tempText = ''
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
