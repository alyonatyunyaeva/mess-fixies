<template>
  <div>
    <div class="info__row" v-for="point in points" :key="point.i">
      <div class="info__index">{{ point.i }}:</div>
      <span>({{ point.x }}; {{ point.y }})</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    points: Array,
  },
};
</script>

<style scoped>
.info__row {
  display: flex;
}
.info__index {
  margin: 0 8px;
}
</style>
