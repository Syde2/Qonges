<script setup>
import { storeToRefs } from 'pinia';
import { ref, computed } from 'vue';
import {useCalendarStore} from 'stores/calendarStore.js'
import PlanifierButton from './PlanifierButton.vue';

const calendarStore = useCalendarStore()
const { rangeTotalJours} = storeToRefs(calendarStore)

</script>

<template>
  <PlanifierButton :disabled= !rangeTotalJours />
</template>

