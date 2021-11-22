<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
  </div>
</template>
<script>
import NavBar from "@/components/common/navBar/NavBar";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import {getHome} from "@/network/home";
import {Swiper,SwiperItem} from "components/common/swiper/index";
import HomeRecommendView from "@/views/home/childComps/HomeRecommendView";

export default {
  name: "Home",
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommendView
  },
  data(){
    return{
      banners:[],
      recommends:[],

    }
  },
  created() {
    //请求多个数据
    getHome().then(res=>{
      this.banners=res.data.banner.list
      this.recommends=res.data.recommend.list

      //console.log(res)
    })
  }
}
</script>
<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: #f6f6f6;
}
</style>
