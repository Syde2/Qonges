<script setup>
import { getCssVar } from 'quasar';

const donutOptions = {
    title: {
        text: 'Repartition',
        align: 'left'
    },
    chart: {
        id: 'apex-donut'
    },
    colors: [getCssVar('primary'), getCssVar('secondary'), getCssVar('negative'), getCssVar('accent')],
    markers: {
        size: 4,
        hover: {
            sizeOffset: 6
        }
    },
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    }
}
const donutSeries = [30, 40, 45, 50]

</script>

<template>
    <apexchart height="400" type="donut" :options="donutOptions" :series="donutSeries"></apexchart>
</template>


