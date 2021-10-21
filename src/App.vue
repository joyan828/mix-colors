<template>
  <h2>RGB 코드를 입력하세요.</h2>
  <div class="box-wrapper">
     <div class="code-box">
      <input id="R" class="rgb-code" type="text" placeholder="R" v-model="a.r" maxlength="3" />
      <input id="G" class="rgb-code" type="text" placeholder="G" v-model="a.g" maxlength="3"/>
      <input id="B" class="rgb-code" type="text" placeholder="B" v-model="a.b" maxlength="3"/>
    </div>
    <div class="code-box">
      <input id="R" class="rgb-code" type="text" placeholder="R" v-model="b.r" maxlength="3"/>
      <input id="G" class="rgb-code" type="text" placeholder="G" v-model="b.g" maxlength="3"/>
      <input id="B" class="rgb-code" type="text" placeholder="B" v-model="b.b" maxlength="3"/>
    </div>
  </div>
  <hr />
  <div class="content">
    <ColorBox :color="color_a" title="A" />
    <ColorBox :color="color_b"  title="B" />
    <ColorBox :color="color"  title="RESULT" />
  </div>
</template>

<script>
import ColorBox from './components/ColorBox.vue'
import {
  paint,
  // convertColor
} from '../utils'

export default {
  name: 'App',
  components: {
    ColorBox
  },
  data() {
    return {
      a: {r:0, g:0, b:0},
      b: {r:0, g:0, b:0},
    }
  },
  computed: {
    color_a() {
      return `rgb(${this.a.r}, ${this.a.g}, ${this.a.b})`
    },
    color_b() {
      return `rgb(${this.b.r}, ${this.b.g}, ${this.b.b})`
    },
    color() {
      // return convertColor(this.a, this.b)
      console.log(this.a, this.b)
      return paint(this.a, this.b)
    }
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
h2 {
  text-align: center;
  margin: 50px;
}
input {
  width: 100px;
  height: 20px;
}
input + input {
  margin-left: 5px;
}
.box-wrapper{
  display: flex;
  justify-content: center;
  align-content: space-between;
}
.code-box {
  margin-right: 30px;
}
.button-wrapper {
  display: inline-block;
}
hr {
  margin: 50px;
}
.content {
  display: flex;
  justify-content: center;
  align-content: space-between;
}
</style>
