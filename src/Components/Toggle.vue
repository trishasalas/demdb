<template>
    <button @click='toggle()'>Open/Close</button>
    <span v-show="isOpen">Toggle info</span>
</template>

<script>
  export default {
    name: 'toggle-component',
  }
</script>