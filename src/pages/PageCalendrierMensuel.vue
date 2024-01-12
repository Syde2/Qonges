<script setup>
import {ref} from 'vue'
import { storeToRefs } from 'pinia';
import { useCalendarStore } from 'src/stores/calendarStore';
import CalendrierMensuel from 'src/components/CalendrierMensuel.vue';

const {rangeTotalJours} = storeToRefs(useCalendarStore())
const step = ref(1)

</script>

<template>
  <q-page class=" flex flex-center">
    <div class=" gt-md illustration"></div>
    <div class="container">
      <CalendrierMensuel />
    </div>
  </q-page>
</template>


<style scoped>
.container{
  width: 60vw;
  min-width: 300px;
  height: 70vh;
  /* border: 1px solid grey;
  border-radius: 10px; */
}
.illustration{
  width: 30vw;
  height: 100vh;
  opacity: 0.3;
  position: absolute;
  left: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("../../public/background.jpg");


}


</style>

