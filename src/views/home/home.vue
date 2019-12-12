<template>
  <div class="page">
    <v-header :seller="seller" />
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">
          商品
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">
          评价
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">
          商家
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import headers from '../../components/header/header'
import {getSeller} from '../../assets/js/api.js'
const ERR_NO = 0;
export default {
  name: 'Home',
  components: {
    'v-header':headers
  },
  data() {
    return {
      seller:{}
    }
  },
  created(){
    getSeller.then(res=>{
      if(res.data.errno === ERR_NO){
        this.seller = res.data.data
      }
    })
  }
}
</script>

<style lang="stylus">
@import '../../assets/css/mixins.styl'
  .tab
    display:flex
    width:100%
    height:40px
    line-height:40px
    text-align :center
    border-1px(rgba(7,17,27,0.1))
    .tab-item
      flex:1
      font-size:14px
      color:rgb(77,85,93)
      .active
        color:rgb(240,20,20)
</style>
