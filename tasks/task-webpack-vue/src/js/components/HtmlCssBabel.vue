<template>
  <div>
    <!--    <div><img src="../../img/arc-one-logo.png" alt="" /></div>-->
    <div class="author">{{ author }}</div>
    <p>io arc</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: 'io-arc'
    }
  }
}
</script>

<style scoped>
.author {
  background: url(../../img/arc-one-logo.png) no-repeat;
  color: #000000;
}

@media screen and (max-width: 1068px) {
  .author {
    color: #00cc00;
  }
}

@media screen and (max-width: 1068px) {
  p {
    color: #00cc00;
  }
}

@media screen and (max-width: 734px) {
  .author {
    color: #000000;
  }
}
</style>
