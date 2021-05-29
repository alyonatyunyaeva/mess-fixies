<template>
  <div>
    <Chart :points="pointsForDraw" :labels="labels" />
    <PontsPreview :points="points" />
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

<style></style>
