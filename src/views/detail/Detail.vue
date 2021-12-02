<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @itemClick="navBarClick" ref="Nav"></detail-nav-bar>
    <scroll class="detailScroll" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info ref="param" :param-info="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <goods-list ref="goods" :goods="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>
<script>
import Scroll from "@/components/common/scroll/Scroll";
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo";
import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";
import GoodsList from "@/components/content/goods/GoodsList";
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";
import {getDetailMessage,Goods,Shop,GoodsParam,getRecommend} from "@/network/detail";
import {itemListenerMixin,backTopMixin} from "@/common/mixin";
import {mapActions} from 'vuex'

export default {
  name: "Detail",
  components:{
    Scroll,
    DetailSwiper,
    DetailNavBar,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList
  },
  mixins:[itemListenerMixin,backTopMixin],
  data(){
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommend:[],
      themeTopYs:[],
      currentIndex:0,
    }
  },
  methods:{
    ...mapActions(['addCart']),

    //backTop的点击事件
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    //获取detail页面各板块的offsetTop
    getDetailThemeTop(){
      this.themeTopYs=[]
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.goods.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
    },
    imageLoad(){
      this.$refs.scroll.refresh()
      this.getDetailThemeTop()
    },
    navBarClick(index){
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
    },
    contentScroll(position){
      let positionY=-position.y
      let length=this.themeTopYs.length
      for (let i = 0; i < length-1; i++) {
        if(this.currentIndex!==i && (positionY>=this.themeTopYs[i]&&positionY<this.themeTopYs[i+1])){
          this.currentIndex=i
          this.$refs.Nav.currentIndex=this.currentIndex
        }
      }
      this.listenShowBackTop(position)
    },
    addToCart(){
      const product={}
      product.iid=this.iid
      product.image=this.topImages[0]
      product.title=this.goods.title
      product.desc=this.goods.desc
      product.price=this.goods.lowNowPrice

      // this.$store.commit('addCart',this.product)
      // this.$store.dispatch('addCart',product)
      this.addCart(product).then(()=>{
        this.$toast({message:'添加购物车成功!'})
      })
    },

  },
  created() {
    this.iid=this.$route.params.iid
    getDetailMessage(this.iid).then(res=>{
      const data=res.result
      //获取detail页面相关信息
      this.topImages=data.itemInfo.topImages
      this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      this.shop =new Shop(data.shopInfo)
      this.detailInfo=data.detailInfo
      this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
      if(data.rate.cRate!==0){
        this.commentInfo=data.rate.list[0]
      }
    })

    getRecommend().then(res=>{
      this.recommend=res.data.list
    })

  },
  updated() {
  },
  mounted() {

  },
  destroyed() {
    this.$bus.$off('itemImageLoad',this.itemImgListener)
  }
}
</script>
<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.detailScroll{
  overflow: hidden;
  height: calc(100% - 44px);
  background-color: #fff;
}
</style>
