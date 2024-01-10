<script setup>
  defineProps(['modelValue'])
  defineEmits(['update:modelValue'])
</script>

<template>
<q-input
  type="date"
  dense
  standout="bg-accent"
  :model-value="modelValue"
  @update:model-value= "(newValue)=> $emit('update:modelValue',newValue)"
  >
  <template v-slot:prepend>
    <q-icon name="sym_o_calendar_view_day" />
  </template>
</q-input>
</template>
