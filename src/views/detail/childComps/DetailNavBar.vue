<template>
  <div>
    <nav-bar>
      <div slot="left" class="detailBackImg" @click="imgClick">
        <img src="@/assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="navBar">
        <div v-for="(item,index) in detailNavBarMessage" class="navBarMessage"
             :class="{activeMessage:index===currentIndex}" @click="itemClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components:{
    NavBar
  },
  data(){
    return{
      detailNavBarMessage:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex=index
      //发出点击事件
      this.$emit('itemClick',index)
    },
    imgClick(){
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.navBar{
  display: flex;
  font-size: 15px;
}
.navBarMessage{
  flex: 1;
}
.activeMessage{
  color: var(--color-high-text)
 }
.detailBackImg{
  margin-top: 5px;
}
</style>
