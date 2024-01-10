<script setup>
import {ref, computed} from 'vue'
import { storeToRefs } from 'pinia';
import {useCalendarStore} from 'stores/calendarStore.js'
import DateInput from 'components/mensuel/DateInput.vue'
import SelectActivite from '../quotidien/SelectActivite.vue';
import InputHeures from 'components/mensuel/InputHeures.vue'

const {rangeFormattee} = storeToRefs(useCalendarStore())
const illustration = '/rope.jpg'
const isMouseOver = ref(false)
const mouseOverColor = computed( ()=>
  isMouseOver.value ? 'grey-6' : 'grey-3'
)
</script>

<template>
<q-dialog>
  <q-card class="customCard shadow-10 q-pa-sm flex column justify-between" >

    <q-bar class="bg-transparent">
      <q-space />
      <q-btn dense flat round icon="lens" :ripple="false"  size="8.5px" :color="mouseOverColor" @mouseleave="isMouseOver=false"  @mouseover=" isMouseOver=true" v-close-popup />
    </q-bar>

    <q-card-section>
      <q-img :src=illustration width="100%"  height="100px" >
      </q-img>
      <div class=" text-primary text-center q-py-md my-font" style="font-size: 1.5rem; font-weight: 800;"> Planifier </div>
    </q-card-section>

    <q-card-section class="q-gutter-y-lg flex  items-baseline ">
      <DateInput class="col-5"  :model-value=rangeFormattee.start />
      <p class="col-1  text-overline q-px-xs ">au</p>
      <DateInput class="col-5" :model-value=rangeFormattee.end />

    </q-card-section>

    <q-card-section class="bg-grey-3 flex row justify-between ">
      <SelectActivite class="col-8"  />
      <InputHeures class="col-2" />
      <q-btn icon="add"  color='grey-7' size="xs" fab-mini />
    </q-card-section>

    <q-separator inset color="grey" />

    <q-card-section class="flex justify-between">
        <q-btn unelevated label="Annuler" v-close-popup />
        <q-btn unelevated label="Ajouter" color="secondary" @click="handleSubmit" v-close-popup  />
    </q-card-section>
  </q-card>
</q-dialog>

</template>



<style scoped>
.customCard {
    width: 30vw;
    min-width: 250px;
    min-height: 45vh;
    border-radius: 15px;
}
</style>
