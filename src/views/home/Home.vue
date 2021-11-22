<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <feature-view>
      <a href="https://act.mogujie.com/zzlx67">
        <img src="@/assets/img/home/recommend_bg.jpg" alt="">
      </a>
    </feature-view>
    <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></tab-control>
    <goods-list :goods="goods[goodsType].list" ></goods-list>

  </div>
</template>
<script>
import {getHomeMultidata,getHomeGoods} from "@/network/home";

import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import HomeRecommendView from "@/views/home/childComps/HomeRecommendView";
import FeatureView from "@/components/common/featureView/FeatureView";

import NavBar from "@/components/common/navBar/NavBar";
import TabControl from "@/components/conten/tabControl/TabControl";
import GoodsList from "@/components/conten/goods/GoodsList";
import GoodsListItem from "@/components/conten/goods/GoodsListItem";

export default {
  name: "Home",
  components:{
    HomeSwiper,
    HomeRecommendView,
    FeatureView,

    NavBar,
    TabControl,
    GoodsList,
    GoodsListItem
  },
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      goodsType:'pop'

    }
  },
  created() {
    //请求多个数据
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  methods:{
    //事件监听：
    tabClick(index){
      //this.goodsType=(this.goodsType[index]).toString()
      this.goodsType = ['pop','new','sell'][index]

    },

    //网络请求：
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        this.banners=res.data.banner.list
        this.recommends=res.data.recommend.list
        //console.log(res)
      })
    },
    getHomeGoods(type){
      const page=this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page++
      })
    }

  }
}
</script>
<style scoped>
#home{
  padding-top: 44px;
}

.home-nav{
  background-color: var(--color-tint);
  color: #f6f6f6;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control{
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>
