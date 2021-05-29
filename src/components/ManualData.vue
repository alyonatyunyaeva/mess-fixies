<template>
  <div class="form">
    <h2>Задать входные данные</h2>

    <form @submit="handleSubmit">
      <div class="form-group" v-for="(point, index) in manualData" :key="index">
        <span>{{ index }}</span>
        <label class="label">x :</label>
        <input type="tel" v-model="manualData[index].x" />
        <label class="label">y :</label>
        <input type="tel" v-model="manualData[index].y" />
      </div>
      <button class="button" @click="addPoint">+ Добавить точку</button>
      <button class="button" type="submit">Обработать</button>
      <button class="button" @click="onClose" v-if="manualData.length">
        Сбросить
      </button>
    </form>
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
    addPoint(e) {
      e.stopPropagation();
      e.preventDefault();
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

<style scoped>
.form {
  margin: 0 40px;
}
.button {
  margin: 24px 8px;
  border: solid 1px;
  border-radius: 5px;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}
.button:hover {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
.form-group {
  margin: 16px;
}
.label {
  margin: 0 8px 0 20px;
}
</style>
