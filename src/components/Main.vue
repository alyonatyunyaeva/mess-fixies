<template>
  <div>
    Привет
    <div>{{ points }}</div>
    <PointSorter :points="points" />
  </div>
</template>

<script>
import PointSorter from '@/components/PointSorter';
import { fetchPoints, convert } from '@/data';

export default {
  components: {
    PointSorter,
  },
  data() {
    return {
      points: [],
      rawPoints: [],
    };
  },
  methods: {
    async init() {
      this.rawPoints = await fetchPoints();
      this.handlerRawPoints();
    },
    handlerRawPoints() {
      this.points = convert(this.rawPoints);
    },
  },

  mounted() {
    this.init();
  },
};
</script>

<style scoped></style>
