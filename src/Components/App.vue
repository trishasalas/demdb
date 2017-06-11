<template>
    <div id="app">
        <perceivable></perceivable>
        <operable></operable>
        <understandable></understandable>
        <robust></robust>
    </div>
</template>

<script>
  import Perceivable from './Perceivable.vue'
  import Operable from './Operable.vue'
  import Understandable from './Understandable.vue'
  import Robust from './Robust.vue'

  export default {
    name: 'App',
    components: {
      'perceivable': Perceivable,
      'operable': Operable,
      'understandable': Understandable,
      'robust': Robust,
    },
    data() {
      return {}
    },
  }
</script>

<style scoped>
    :root {
        --color-main: #2c3e50;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: var(--color-main);
        margin: 60px 30px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
