<script setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import {useCalendarStore} from 'stores/calendarStore.js'


const store = useCalendarStore()
const {dateSelectionnee, today, numeroSemaine } = storeToRefs(store)
const disabledDates = ref([
  {
    repeat: {
      weekdays: [7, 1],
    },
  },
  ])
</script>

<template>
  <VDatePicker
    v-model="dateSelectionnee"
    color="blue"
    nav-visibility="click"
    ref="datePicker"
    view="weekly"
    borderless
    expanded
    :max-date=today
    is-required
    :disabled-dates="disabledDates"
    style="border-radius: 10px;"
  >

  <template #header-title	>
    <p class="text-h5 my-font text-primary"> Semaine {{ numeroSemaine }} </p>
  </template>

  <template #header-prev-button	>
  </template>

  <template #nav-prev-button	>
  </template>

  <template #header-next-button	>
  </template>

  <template #nav-next-button	>
  </template>

  </VDatePicker>


</template>

<style>
.vc-blue {
  --vc-accent-600: #4C566A;
}
</style>
