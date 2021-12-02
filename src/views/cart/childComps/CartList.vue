<template>
  <div>
    <cart-list-item
      v-for="(item,index) in cartList"
      :product="item"
      :key="index">
    </cart-list-item>
  </div>
</template>
<script>
import {mapGetters} from "vuex";
import CartListItem from "@/views/cart/childComps/CartListItem";

export default {
  name: "CartList",
  components:{
    CartListItem
  },
  computed:{
    ...mapGetters(["cartList"])
  }
}
</script>
<style scoped>
</style>
