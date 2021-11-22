<template>
  <div class="recommend-item">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "RecommendViewItem"
}
</script>
<style scoped>
.recommend-item{
  flex: 1;
}
.recommend-item img{
  width: 65px;
  height: 65px;
  margin-bottom: 1px;
}
</style>
