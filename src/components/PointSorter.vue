<template>
  <div class="chart">
    <div><Chart :points="pointsForDraw" :labels="labels" /></div>
    <div class="chart__info"><PontsPreview :points="points" /></div>
  </div>
</template>

<script>
import { orderBy } from 'lodash';
import Chart from '@/components/Chart';
import PontsPreview from '@/components/PontsPreview';

export default {
  components: {
    Chart,
    PontsPreview,
  },
  data() {
    return {};
  },
  props: {
    points: {
      type: Array,
    },
  },
  computed: {
    sortedPoints() {
      return orderBy(this.points, ['x', 'y'], ['asc', 'desc']);
    },
    pointsForDraw() {
      return this.sortedPoints.map((el) => {
        return {
          x: el.x,
          y: el.y,
        };
      });
    },
    labels() {
      return this.sortedPoints.map((el) => {
        return el.i;
      });
    },
  },
};
</script>

<style scoped>
.chart {
  display: flex;
  margin: 0 40px;
  flex-wrap: wrap;
}
.chart__info {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 32px;
  color: rgb(118, 118, 129);
}
</style>
