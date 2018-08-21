<template>
  <div class="about">
    <h1>Hello {{ their_name }}, this is an about page </h1>
    <p>Lorem ipsum dolor blah blah</p>
  </div>
</template>

<script>
export default {
    name: 'Character',
    data() {
      return {
        their_name: this.$route.params.name
      }
    },
  }
</script>
