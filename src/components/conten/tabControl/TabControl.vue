<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
         class="tab-control-item"
         :class="{active:index===currentIndex}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  name: "TabControl",
  components: {TabBarItem},
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex=index
      this.$emit('tabClick',index)
    }
  }
}
</script>
<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control-item{
  flex: 1;

}
.active{
  color: var(--color-high-text);
}
.tab-control-item span{
  padding:5px;
}
.active span{
  border-bottom: 3px solid var(--color-tint);
}
</style>
