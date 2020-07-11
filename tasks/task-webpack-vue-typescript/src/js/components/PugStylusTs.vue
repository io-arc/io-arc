<template lang="pug">
  .temp
    p.tmp-context {{pst}}
    p.tmp-result {{plus(1)}}
    p.tmp-title {{title}}
    p: img(:src="url", :alt="alt")
</template>

<script lang="ts">
export default {
  data(): { pst: string; title: string; url: string; alt: string } {
    return {
      pst: 'pug-stylus-typescript',
      title: SITE_TITLE,
      url: '/cccc/p.png',
      alt: 'aaaa'
    }
  },
  methods: {
    plus(num: number): number {
      return num + 1
    }
  }
}
</script>

<style lang="stylus" scoped>
.tmp-context
  color: #000000
  @media screen and (max-width: 1080px)
    color: #cc0000
  @media screen and (max-width: 734px)
    color: #00cc00

.tmp-result
  display: flex
  @media screen and (max-width: 734px)
    color: #00cc00
</style>
