<template>
  <div>
    <h2>Задать входные данные</h2>
    <button @click="addPoint">Добавить точку</button>
    <form @submit="handleSubmit">
      <div v-for="(point, index) in manualData" :key="index">
        <label>x</label>
        <input type="tel" v-model="manualData[index].x" />
        <label>y</label>
        <input type="tel" v-model="manualData[index].y" />
      </div>
      <button type="submit">Обработать</button>
    </form>
    <button @click="onClose">Сбросить</button>
  </div>
</template>

<script>
function makePoint() {
  return { x: 0, y: 0 };
}
export default {
  data() {
    return {
      manualData: [],
    };
  },
  methods: {
    addPoint() {
      this.manualData.push(makePoint());
    },
    handleSubmit(e) {
      e.preventDefault();
      if (!this.manualData.length) {
        return;
      }
      let convertedManualData = this.manualData.map((element, i) => {
        return { x: parseInt(element.x), y: parseInt(element.y), i };
      });
      this.$emit('showManualData', convertedManualData);
    },
    onClose() {
      this.manualData = [];
      this.$emit('showDefaultData');
    },
  },
};
</script>

<style></style>
