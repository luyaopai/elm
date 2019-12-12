<template>
  <span
    v-if="selltype>=0"
    :class="[supportItem[selltype],'size'+size]"
    class="icon"
  />
</template>

<script>
export default {
  name: 'Selltype',
  props:{
    selltype:{
      type:Number,
      default:0
    },
    size:{
      type:String,
      default:"1"
    }
  },
  data() {
    return {
      supportItem:[]
    }
  },
  created(){
    this.supportItem = ['decrease','discount','guarantee','invoice','special']
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/mixins.styl'
.icon
  display inline-block
  padding-right 2px
  width 12px
  height 12px
  background-size 12px 12px
  background-repeat no-repeat
  &.size1
    &.decrease
      backgroundimg(decrease_1)
    &.discount
      backgroundimg(discount_1)
    &.guarantee
      backgroundimg(guarantee_1)
    &.invoice
      backgroundimg(invoice_1)
    &.special
      backgroundimg(special_1)
  &.size2
    padding-right 4px
    width 16px
    height 16px
    background-size 16px 16px
    &.decrease
      backgroundimg(decrease_2)
    &.discount
      backgroundimg(discount_2)
    &.guarantee
      backgroundimg(guarantee_2)
    &.invoice
      backgroundimg(invoice_2)
    &.special
      backgroundimg(special_2)
  &.size3
    &.decrease
      backgroundimg(decrease_3)
    &.discount
      backgroundimg(discount_3)
    &.guarantee
      backgroundimg(guarantee_3)
    &.invoice
      backgroundimg(invoice_3)
    &.special
      backgroundimg(special_3)
  &.size4
    padding-right 4px
    width 16px
    height 16px
    background-size 16px 16px
    &.decrease
      backgroundimg(decrease_4)
    &.discount
      backgroundimg(discount_4)
    &.guarantee
      backgroundimg(guarantee_4)
    &.invoice
      backgroundimg(invoice_4)
    &.special
      backgroundimg(special_4)
</style>
