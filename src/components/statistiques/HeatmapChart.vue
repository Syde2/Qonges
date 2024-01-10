<script setup>
import { getCssVar } from 'quasar';


function generateData(count, yrange) {
    let i = 0
    const series = []
    while (i < count) {
        const x = (i + 1).toString()
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        series.push({
            x: x,
            y: y
        })
        i++
    }
    return series
}


const heatmapOptions = {
    chart: {
        height: 450,
        width: 900,
        type: 'heatmap'
    },
    dataLabels: {
        enabled: false
    },
    colors: [getCssVar('primary'), getCssVar('secondary')],
    title: {
        text: 'Visualisation'
    }
}

const heatmapSeries = [
    {
        name: 'Metric1',
        data: generateData(18, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric2',
        data: generateData(18, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric3',
        data: generateData(18, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric4',
        data: generateData(18, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric5',
        data: generateData(18, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric6',
        data: generateData(18, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric7',
        data: generateData(18, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric8',
        data: generateData(18, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric9',
        data: generateData(18, {
            min: 0,
            max: 90
        })
    }
]

</script>


<template>
    <apexchart height='300' width="900" type='heatmap' :options='heatmapOptions' :series='heatmapSeries'></apexchart>
</template>


