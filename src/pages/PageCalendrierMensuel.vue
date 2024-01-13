<script setup>
import {ref} from 'vue'
import CalendrierMensuel from 'src/components/CalendrierMensuel.vue';

</script>

<template>
  <q-page class=" flex flex-center">
    <div class="container">
      <CalendrierMensuel />
    </div>
  </q-page>
</template>


<style scoped>
.container{
  width: 60vw;
  min-width: 300px;
  border: 1px solid grey;
  border-radius: 10px;
}
</style>

