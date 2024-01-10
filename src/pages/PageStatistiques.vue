<script setup>
import ColumnChart from 'src/components/statistiques/ColumnChart.vue'
import DonutChart from 'src/components/statistiques/DonutChart.vue'
import HeatmapChart from 'src/components/statistiques/HeatmapChart.vue'
</script>

<template>
  <q-page class="flex column flex-center">

    <div class="container ">

      <div class=" flex justify-evenly items-center">
        <ColumnChart />
        <DonutChart />
      </div>

      <div class=" flex flex-center">
        <HeatmapChart />

      </div>




    </div>



  </q-page>
</template>



<style scoped>

.container{
  width: 80vw;
  min-width: 300px;
  height: 70vh;
  border-radius: 10px;
}


</style>