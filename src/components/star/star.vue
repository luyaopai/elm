<template>
  <div>
    <span
      v-for="item in on"
      :key="item+on"
      class="single_on"
      :class="size"
    />
    <span
      v-if="half"
      class="single_half"
      :class="size"
    />
    <span
      v-for="item in off"
      :key="item+off"
      class="single_off"
      :class="size"
    />
  </div>
</template>

<script>
const STAR_NUM = 5
export default {
  name: 'Star',
  components: {},
  props:{
    score:{
      type:Number,
      value:0
    },
    size:{
      type:String,
      value:''
    }
  },
  data() {
    return {
      on:0,
      half:false,
      off:0
    }
  },
  created(){
    let newScore = Math.floor(this.score * 2)/2
    this.on = Math.floor(newScore)
    this.half = newScore % 1 === 0 ? false : true
    if(this.on<STAR_NUM){
      this.off = this.half===false ? STAR_NUM-this.on : STAR_NUM-this.on-1
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/mixins.styl'
  span
    display inline-block
    &:last-child
      padding-right 0
    &.big
      width 24px
      height 24px
      padding-right 10px
    &.mid
      width 18px
      height 18px
      padding-right 6px
    &.small
      width 12px
      height 12px
      padding-right 4px
  .single_on
    background-repeat no-repeat
    &.big
      backgroundimg(star48_on)
      background-size 24px 24px
    &.mid
      backgroundimg(star36_on)
      background-size 18px 18px
    &.small
      backgroundimg(star24_on)
      background-size 12px 12px
  .single_half
    background-repeat no-repeat
    &.big
      backgroundimg(star48_half)
      background-size 24px 24px
    &.mid
      backgroundimg(star36_half)
      background-size 18px 18px
    &.small
      backgroundimg(star24_half)
      background-size 12px 12px
  .single_off
    background-repeat no-repeat
    &.big
      backgroundimg(star48_off)
      background-size 24px 24px
    &.mid
      backgroundimg(star36_off)
      background-size 18px 18px
    &.small
      backgroundimg(star24_off)
      background-size 12px 12px
</style>
