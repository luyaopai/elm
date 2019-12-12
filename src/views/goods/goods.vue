<template>
  <div class="goods_wrapper">
    <div class="goods_name">
      <ul>
        <li
          v-for="(item,index) in goods"
          :key="index"
          class="name_single"
          :class="{'check_bg':ischeck===index}"
          @click="clickName(index)"
        >
          <span class="text">
            <v-selltype
              :selltype="item.type"
              size="3"
            />
            {{ item.name }}
          </span>
        </li>
      </ul>
    </div>
    <div class="goods_food">
      <div
        v-for="(item,index) in goods"
        :key="index"
        class="food_list"
      >
        <div class="food_type">
          {{ item.name }}
        </div>
        <ul>
          <li
            v-for="(foods,idx) in item.foods"
            :key="idx"

            class="detail_wrapper"
          >
            <div
              class="food_detail"
            >
              <div class="food_img">
                <img :src="foods.image">
              </div>
              <div class="food_content">
                <p class="food_name">
                  {{ foods.name }}
                </p>
                <p
                  v-if="foods.description"
                  class="food_description"
                >
                  {{ foods.description }}
                </p>
                <span class="food_sellCount">
                  月售{{ foods.sellCount }}份
                  <span>好评率{{ foods.rating }}%</span>
                </span>
                <div>
                  <span class="food_price">
                    ￥{{ foods.price }}
                  </span>
                  <span
                    v-if="foods.oldPrice"
                    class="food_oldPrice"
                  >
                    ￥{{ foods.oldPrice }}
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {getGoods} from '../../assets/js/api'
import selltype from '../../components/type/type'
const ERR_NO=0
export default {
  name: '',
  components: {
    'v-selltype':selltype
  },
  data() {
    return {
      goods:{},
      ischeck:0
    }
  },
  created(){
    getGoods.then((res)=>{
      if(res.data.errno===ERR_NO){
        this.goods = res.data.data
      }
    })
    this.supportItem = ['decrease','discount','guarantee','invoice','special']
  },
  methods: {
    clickName(index){
      this.ischeck = index
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/mixins.styl'
.goods_wrapper
  display flex
  position absolute
  top 181px
  bottom 58px
  // overflow hidden
  .goods_name
    width 80px
    // overflow auto
    // &::-webkit-scrollbar
    //   display none
    .name_single
      display table
      width 56px
      padding 0 12px
      height 54px
      background-color #f3f5f7
      .text
        display table-cell
        vertical-align middle
        line-height 14px
        font-size 12px
        color #000
        font-weight 200
        border-1px(rgba(7,17,27,0.1))
    .check_bg
      background-color #fff
  .goods_food
    flex 1
    // overflow-y scroll
    .food_type
      height 26px
      border-left 2px solid #d9dde1
      color rgb(147,153,159)
      background #f3f5f7
      padding-left 14px
      line-height 26px
      font-size 12px
    .detail_wrapper
      padding 18px
      padding-bottom 0
      .food_detail
        padding-bottom 18px
        display flex
        border-1px(rgba(7,17,21,0.1))
        .food_img
          img
            width 56px
            height 56px
        .food_content
          padding-left 10px
          font-size 10px
          color rgb(147,153,159)
          line-height 10px
          .food_name
            margin-top 2px
            font-size 14px
            color rgb(7,17,27)
            line-height 14px
          .food_description
            overflow hidden
            text-overflow ellipsis
            white-space  nowrap
            padding-top 8px
          .food_sellCount
            display: inline-block
            margin-top: 8px
            padding-right 12px
          .food_price
            color red
            font-weight 700
            line-height 24px
          .food_oldPrice
            text-decoration line-through
            font-weight 700
            color #ccc





</style>
