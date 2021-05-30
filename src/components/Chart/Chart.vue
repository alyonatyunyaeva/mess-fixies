<template>
  <div class="small" v-if="points && datacollection">
    <ChartHeart :chart-data="datacollection" :options="options"></ChartHeart>
  </div>
</template>

<script>
import ChartHeart from '@/components/Chart/ChartHeart';

export default {
  components: {
    ChartHeart,
  },
  props: {
    points: Array,
    labels: Array,
  },
  watch: {
    points: function() {
      this.fillData();
    },
  },
  data() {
    return {
      datacollection: null,
      options: null,
    };
  },
  computed: {
    colors() {
      let colors = [];

      for (let i = 0; i < this.points.length; i++) {
        colors.push('#' + Math.floor(Math.random() * 16777215).toString(16));
      }
      return colors;
    },
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: this.labels,
        datasets: [
          {
            data: this.points,
            borderColor: 'black',
            borderWidth: 1,
            pointBackgroundColor: this.colors,
            pointBorderColor: this.colors,
            pointRadius: 5,
            pointHoverRadius: 5,
            fill: false,
            tension: 0,
            showLine: true,
          },
        ],
      };
      this.options = {
        legend: false,
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              let label = data.labels[tooltipItem.index];
              return (
                label +
                ': (' +
                tooltipItem.xLabel +
                ', ' +
                tooltipItem.yLabel +
                ')'
              );
            },
          },
        },
        scales: {
          xAxes: [
            {
              ticks: {},
              gridLines: {
                color: '#888',
                drawOnChartArea: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                padding: 10,
              },
              gridLines: {
                color: '#888',
                drawOnChartArea: false,
              },
            },
          ],
        },
      };
    },
  },
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
