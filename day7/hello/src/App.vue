<template>

  <div>
    <h1>
      {{msg}}
    </h1>
    <button @click="changeMsg('hello')">change1</button> 
    <button @click="changeMsg('world')">change2</button> 
    <button @click="changeMsg('vue')">change3</button> 
  </div>

  <div>
    <h2>reactive Counter</h2>
    <p>{{counter}}</p>
    <button @click="increaseCount">count + </button>
    <button @click="decreaseCount">count -</button>
    <button @click="zeroCount">reset</button>
  </div>

  <div>
    <h2>none reactive</h2>
    <h5>{{myCounter}}</h5>
    <button @click="zeroCount2">reset</button>
  </div>

</template>

<script>


export default {
  name: 'App',
  components: {},
  data() {
    return{
      msg : '어서와 뷰는 처음이지?',
      counter : 0
    }
  },
  methods : {
    changeMsg(msg){
      this.msg = msg
    },
    increaseCount(){
      this.counter++
    },
    decreaseCount(){
      this.counter--
    },
    zeroCount(){
      this.counter=0
    },
    zeroCount2(){
      this.myCounter=0
    }
  },
  created() { // 100에서 부터 시작함
    this.counter = 100
    this.myCounter = 200 // nonde reactive
  }
}
</script>

<style scoped>
div{
  border: 1px solid black;
  margin-top: 2px;
  padding: 5px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
