<template>
  <div class="color-box-wrapper">
    <h2>{{title}}</h2>
    <div class="color-wrapper">
      <div class="color" v-bind:style="{backgroundColor: color}"/>
    </div>
    <p>{{color}}</p>
  </div>
</template>

<script>
export default {
  name: 'ColorBox',
  props: {
    title: String,
    color: String,
  }
}
</script>

<style scoped>
.color-box-wrapper {
  display: inline-block;
  width: 200px;
  height: 250px;
  border: 2px solid #666;
  color: #666;
  box-sizing: border-box;
  text-align: center;
}
.color-wrapper {
  display: flex;
  align-content: center;
  justify-content: center;
}
.color {
  width: 130px;
  height: 130px;
  background-color: #666;
  border-radius: 50%;
}

</style>