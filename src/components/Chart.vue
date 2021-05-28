<template>
  <div class="small">
    <line-chart :chart-data="datacollection" :options="options"></line-chart>
  </div>
</template>

<script>
import LineChart from '@/components/LineChart.js';

export default {
  components: {
    LineChart,
  },
  props: {
    points: Array,
  },
  data() {
    return {
      datacollection: null,
      options: null,
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        // datasets: [
        //   {
        //     label: 'Data One',
        //     backgroundColor: '#f87979',
        //     data: [
        //       { x: 10, y: 20 },
        //       { x: 13, y: 25 },
        //     ],
        //   },
        //   {
        //     label: 'Data One',
        //     backgroundColor: '#f87979',
        //     data: [
        //       { x: 14, y: 28 },
        //       { x: 16, y: 23 },
        //     ],
        //   },
        // ],
        datasets: [
          {
            data: this.points.map((el) => {
              return { x: el.x, y: el.y };
            }),
            borderColor: 'black',
            borderWidth: 1,
            pointBackgroundColor: [
              '#000',
              '#00bcd6',
              '#d300d6',
              '#000',
              '#00bcd6',
              '#d300d6',
              '#000',
              '#00bcd6',
              '#d300d6',
            ],
            pointBorderColor: ['#000', '#00bcd6', '#d300d6'],
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
        tooltips: false,
        scales: {
          xAxes: [
            {
              ticks: {
                min: -10,
                max: 30,
              },
              gridLines: {
                color: '#888',
                drawOnChartArea: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 20,
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
