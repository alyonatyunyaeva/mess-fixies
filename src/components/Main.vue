<template>
  <div>
    Mess Fixies

    <PointSorter :points="points" />
    <ManualData
      @showManualData="handleManualDate"
      @showDefaultData="handlerRawPoints"
    />
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

<style scoped></style>
