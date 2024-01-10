<script setup>
import DatePicker from 'components/quotidien/DatePicker.vue'
import PanelQuotidien from 'src/components/quotidien/PanelQuotidien.vue';
import AddActivityBtn from 'src/components/quotidien/AddActivityBtn.vue';
</script>

<template>
  <q-page class="flex column flex-center ">
    <q-img class="bg" src="depth.jpg" fit="cover"  />

    <div class="container shadow-2 flex column bg-transparent" >
      <DatePicker class="col-3" />
      <q-separator inset  />
      <PanelQuotidien class="col-grow" />
      <AddActivityBtn />

    </div>

  </q-page>
</template>


<style scoped>
.container{
  width: 60vw;
  min-width: 300px;
  height: 70vh;
}
</style>
