<template>
  <recommend-view>
    <recommend-view-item v-for="item in recommends" >
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </recommend-view-item>
  </recommend-view>
</template>
<script>
import {RecommendView,RecommendViewItem} from "@/components/common/recommendView/index"

export default {
  name: "HomeRecommendView",
  components: {RecommendView,RecommendViewItem},
  props:{
    recommends:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>
<style scoped>

</style>
