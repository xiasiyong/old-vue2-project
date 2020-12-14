<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue2.js App"/>
    <Content />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Content from '@emp/vue2Project/Content.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Content
  }
}
</script>
