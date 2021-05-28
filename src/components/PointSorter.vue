<template>
  <div>
    {{ sortedPoints }}
    <Chart :points="sortedPoints" />

    Ча ча ча
  </div>
</template>

<script>
import { orderBy } from 'lodash';
import Chart from '@/components/Chart';

export default {
  components: { Chart },
  props: {
    points: {
      type: Array,
    },
  },
  computed: {
    sortedPoints() {
      return orderBy(this.points, ['x', 'y'], ['asc', 'desc']);
    },
  },
};
</script>

<style></style>
