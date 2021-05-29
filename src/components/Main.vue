<template>
  <div>
    <h1>Mess Fixies</h1>
    <main class="main">
      <PointSorter :points="points" />
      <ManualData
        @showManualData="handleManualDate"
        @showDefaultData="handlerRawPoints"
      />
    </main>
  </div>
</template>

<script>
import PointSorter from '@/components/PointSorter';
import ManualData from '@/components/ManualData';
import { fetchPoints, convert } from '@/data';

export default {
  components: {
    PointSorter,
    ManualData,
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
    handleManualDate(manualData) {
      this.points = manualData;
    },
  },

  mounted() {
    this.init();
  },
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
}
</style>
