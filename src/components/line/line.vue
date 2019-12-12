<template>
  <div>
    <span class="line" />
    <span class="text">
      {{ content }}
    </span>
    <span class="line" />
  </div>
</template>

<script>
export default {
  name: 'define-Line',
  props:{
    content:{
      type:String,
      value:""
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="stylus">
  div
    display flex
    align-items center
    text-align center
    height 24px
    line-height 24px
    .line
      flex 1
      border-top 1px solid rgba(255,255,255,0.2)
    .text
      padding 0 12px
</style>
