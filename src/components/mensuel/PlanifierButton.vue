<script setup>
import {ref} from 'vue'
const toggleDialog = ref(false)
import PlanDialog from './PlanDialog.vue';

const props =  defineProps(
{  disabled :{
    type: Boolean,
    default :true
  }}
)
</script>

<template>
  <div class="full-width q-pa-md flex flex-center">
    <q-btn :disable=props.disabled color="primary" glossy label="Planifier" @click="toggleDialog= true" />
  </div>

  <PlanDialog v-model="toggleDialog" />

</template>
