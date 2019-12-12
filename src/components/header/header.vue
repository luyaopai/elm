<template>
  <div class="seller">
    <div class="seller-wrapper">
      <div class="bg-img">
        <img
          :src="seller.avatar"
        >
      </div>
      <div class="seller-info">
        <div class="avatar">
          <img
            :src="seller.avatar"
            alt=""
          >
        </div>
        <div class="content">
          <div>
            <span class="brand" />
            <span class="sellername">
              {{ seller.name }}
            </span>
          </div>
          <div class="delivery">
            <span>{{ seller.description }}</span> / <span>{{ seller.deliveryTime }}分钟送达</span>
          </div>
          <div
            v-if="seller.supports"
            class="support"
          >
            <v-selltype
              :selltype="seller.supports[0].type"
              size="1"
            />
            <span class="support-text">
              {{ seller.supports[0].description }}
            </span>
          </div>
        </div>
        <div
          v-if="seller.supports"
          class="more-wrapper"
        >
          <div
            class="more-content"
            @click="showDetail"
          >
            <span class="more-num">
              {{ seller.supports.length }}个
            </span>
            <span class="icon-keyboard_arrow_right" />
          </div>
        </div>
      </div>
      <div class="bulletin-info">
        <span class="bulletin-img" />
        <span class="bulletin-text">
          {{ seller.bulletin }}
        </span>
        <span
          class="icon-keyboard_arrow_right"
          @click="showDetail"
        />
      </div>
    </div>
    <div
      v-if="showdetail"
      class="detail-wrapper"
    >
      <div
        class="detail-content-wrapper clearfix"
      >
        <div class="detail-content">
          <div class="detail-title">
            {{ seller.name }}
          </div>
          <v-star
            class="detail-score"
            :score="seller.score"
            size="big"
          />
          <div
            v-if="seller.supports"
            class="detail-discount"
          >
            <v-line
              content="优惠信息"
              class="detail-line"
            />
            <div
              v-for="(item,index) in seller.supports"
              :key="index"
            >
              <v-selltype
                :selltype="item.type"
                size="2"
              />
              <span>{{ item.description }}</span>
            </div>
          </div>
          <div class="detail-sellerinfo">
            <v-line
              content="商家公告"
              class="detail-line"
            />
            <span>
              {{ seller.bulletin }}
            </span>
          </div>
        </div>
      </div>
      <div class="detail-close">
        <span
          class="icon-close"
          @click="closeDetail"
        />
      </div>
    </div>
  </div>
</template>

<script>
import star from '../star/star'
import line from '../line/line'
import selltype from '../type/type'
export default {
  name: 'Headers',
  components: {
    "v-star":star,
    "v-line":line,
    "v-selltype":selltype
  },
  props: {
    seller:{
      type:Object,
      default:function(){
        return {}
      }
    }
  },
  data() {
    return {
      showdetail:false
    }
  },
  methods:{
    showDetail() {
      this.showdetail=true
    },
    closeDetail(){
      this.showdetail=false
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/mixins.styl'
// .seller
//   position relative
  .seller-wrapper
    position relative
    background-color rgba(7,17,27,0.5)
    overflow hidden
    .bg-img
      z-index -100
      position absolute
      top 10%
      left 10%
      width 80%
      filter blur(10px)
      img
        width 100%
    .seller-info
      width :100%
      position relative
      .avatar
        display :inline-block
        padding :24px 16px 18px 24px
        width :64px
        height :64px
        border-radius :2px
        img
          width:100%
          height:100%
      .content
        display :inline-block
        padding :26px 0 20px 0
        .brand
          display :inline-block
          width :30px
          height :18px
          backgroundimg(brand)
          background-size:30px 18px
          background-repeat:no-repeat
        .sellername
          margin-left :6px
          line-height :18px
          vertical-align :top
          color:rgb(255,255,255)
          font-size :16px
          font-weight :bold
        .delivery
          margin :8px 0 10px 0
          font-size :12px
          color :rgb(255,255,255)
          font-weight:200
          line-height :12px
        .support
          .support-text
            vertical-align top
            margin-left 4px
            font-size 12px
            color rgb(255,255,255)
            font-weight 200
            line-height 14px
      .more-wrapper
        position absolute
        right 12px
        bottom 13px
        border-radius 14px
        background-color rgba(0,0,0,0.2)
        .more-content
          padding 7px 8px
          font-size 10px
          color #fff
          line-height 12px
          font-weight 200
          .more-num
            padding-left 2px
          .icon-keyboard_arrow_right
            vertical-align middle
    .bulletin-info
      display flex
      align-items center
      width 100%
      height 28px
      background-color rgba(7,17,27,0.2)
      .bulletin-img
        margin-left 12px
        margin-right 4px
        width 22px
        height 12px
        backgroundimg(bulletin)
        background-size 22px 12px
        background-repeat no-repeat
      .bulletin-text
        flex 1
        overflow hidden
        text-overflow ellipsis
        white-space  nowrap
        font-size 10px
        color #fff
        font-weight 200
        line-height 28px
      .icon-keyboard_arrow_right
        margin 0 12px 0 4px
        color #fff
  .detail-wrapper
      text-align center
      position fixed
      top 0
      left 0
      width 100%
      height 100%
      z-index 100
      // filter blur(10px)
      .detail-content-wrapper
        min-height 100%
        background-color rgba(7,17,27,0.8)
        .detail-content
          padding-bottom 96px
          .detail-title
            padding-top 64px
            font-size 16px
            font-weight 700
            color #fff
            line-height 16px
          .detail-score
            padding-top 16px
          .detail-discount
          .detail-sellerinfo
            padding 28px 36px 0 36px
            .detail-line
              padding-bottom 24px
          .detail-discount
            text-align left
            div
              padding 0 12px 6px 12px
              font-size 12px
              color #fff
              font-weight 200
              &:last
                padding-bottom 6px
              span
                line-height 16px
          .detail-sellerinfo
            span
              display inline-block
              padding 0 12px
              font-size 12px
              line-height 24px
              text-align left
              color #fff
              font-weight 200
      .detail-close
        position relative
        margin-top -96px
        height 96px
        clear both
        font-size 32px
        color rgba(255,255,255,0.5)

</style>
