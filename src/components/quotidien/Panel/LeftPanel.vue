<script setup>
import { storeToRefs } from 'pinia';
import {useCalendarStore} from 'stores/calendarStore.js'

const { jourSemaine, jourDuMois } = storeToRefs(useCalendarStore())
</script>

<template>
  <q-card-section class="col-4 gt-xs  flex flex-center column text-secondary">
    <p class="text-body2 text-italic my-font" style="font-size: 1.5rem;"> {{ jourSemaine }} </p>
    <p class="my-font " style="font-size: 8em;"> {{ jourDuMois }} </p>
  </q-card-section>
</template>
