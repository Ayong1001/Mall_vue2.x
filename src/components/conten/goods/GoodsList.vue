<template>
  <div class="goodsList">
    <goods-list-item v-for="item in goods" :goods-item="item"></goods-list-item>
  </div>
</template>
<script>
import GoodsListItem from "@/components/conten/goods/GoodsListItem";

export default {
  name: "GoodsList",
  components:{
    GoodsListItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}

</script>
<style scoped>
.goodsList{
  display: flex;/*默认放在一行均分*/
  flex-wrap: wrap;/*默认为nowrap，更改后就可根据自身大小调整一行最多几个*/
  justify-content:space-around;
}

</style>
