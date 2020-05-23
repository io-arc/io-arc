<template>
  <div>
    <!--    <div><img src="../../img/arc-one-logo.png" alt="" /></div>-->
    <div class="vaa">{{ vaa }}</div>
    <p>io arc</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vaa: 'io-arc'
    }
  }
}
</script>

<style scoped lang="scss">
.vaa {
  background: url(../../img/arc-one-logo.png) no-repeat;
  color: #ccc;
}

@media screen and (max-width: 1068px) {
  .vaa {
    color: #ccddcc;
  }
}

@media screen and (max-width: 1068px) {
  p {
    color: #ccddcc;
  }
}

@media screen and (max-width: 734px) {
  .vaa {
    color: #ccc;
  }
}
</style>
