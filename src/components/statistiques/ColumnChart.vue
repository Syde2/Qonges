<script setup>
import { getCssVar } from 'quasar';



const options = {
  title: {
    text: 'Evolution',
    align: 'left'
  },
  chart: {
    id: 'apex-column'
  },
  colors: [getCssVar('primary'), getCssVar('secondary'), getCssVar('negative')],
  xaxis: {
    categories: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout']
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    }
  }
}
const series = [{
  name: 'series-1',
  data: [30, 40, 45, 50, 49, 60, 70, 91]
}]

</script>


<template>
  <apexchart height="400" type="bar" :options="options" :series="series"></apexchart>
</template>


