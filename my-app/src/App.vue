<template>
  <div id="app">
    <message>Hello There!</message>
    <message>Hello Here!</message>
    <message>Hello Alla!</message>

    <counter></counter>

  </div>
</template>

<script>
import Message from './components/Message.vue';
import Counter from './components/Counter.vue';
export default {
  name: 'app',
  components:{Message,Counter},
  data () {
    return {
     
    }
  }
}
</script>

<style>

</style>
