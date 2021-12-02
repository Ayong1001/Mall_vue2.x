 <template>
  <div id="cart">
    <nav-bar class="cartNavBar"><div slot="center">购物车({{length}})</div></nav-bar>
    <scroll class="cartScroll" ref="cartScroll">
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import {mapGetters} from 'vuex'
  import Scroll from "@/components/common/scroll/Scroll";
  import CartList from "@/views/cart/childComps/CartList";
  import CartBottomBar from "@/views/cart/childComps/CartBottomBar";

  export default {
    name: "Cart",
    components:{
      NavBar,
      Scroll,
      CartList,
      CartBottomBar
    },
    computed:{
      ...mapGetters({
        length:'cartLength',
      })
    },
    activated() {
      this.$refs.cartScroll.refresh()
    }
  }
</script>

<style scoped>
#cart{
  position: relative;
  /*z-index: 9;*/
  background-color: #fff;
  height: 100vh;
}
.cartNavBar{
  background-color: var(--color-tint);
  color: white;
}
.cartScroll{
  overflow: hidden;
  height: calc(100% - 44px - 49px - 34px);
  background-color: #fff;
}
</style>
