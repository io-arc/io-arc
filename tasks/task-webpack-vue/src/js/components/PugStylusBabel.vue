<template lang="pug">
  .paa
    .paa-context {{paa}}
    img(src="../../img/arc-one-logo.png", :alt="paa")
</template>

<script>
export default {
  data() {
    return {
      paa: 'io-arc'
    }
  }
}
</script>

<style lang="stylus" scoped>
.paa
  color: #ffffff
</style>
