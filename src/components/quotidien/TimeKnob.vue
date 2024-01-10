<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])



</script>

<template>
  <q-knob
  :model-value= modelValue
  @update:model-value= "(newValue)=> $emit('update:modelValue',newValue)"
  size="50px"
  color="primary"
  center-color="grey-1"
  show-value
  :max=480
  :min=0
  :inner-min=30
  :step=30
  >
  <template v-slot:default>
    <q-input
    :model-value= modelValue
    @update:model-value= "(newValue)=> $emit('update:modelValue',newValue)"
    style="font-size: smaller;"
    borderless
    item-aligned
    />
  </template>
  </q-knob>
</template>
