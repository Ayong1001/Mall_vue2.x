<template>
  <div class="recommend">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "RecommendView"
}
</script>
<style scoped>
.recommend{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 13px;
  padding: 10px 0 10px;
  border-bottom: 8px solid #eee;
}

</style>
