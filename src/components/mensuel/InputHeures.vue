<script setup>
import { ref, computed, onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia';
import { useActiviteStore} from 'stores/activiteStore.js'

const {duree, dureeEnHeures} = storeToRefs(useActiviteStore())

duree.value = 90

const store = useActiviteStore()

</script>

<template>
    <q-input
      dense
      standout="bg-accent"
       :model-value="dureeEnHeures"
      @update:model-value = "newValue=>  store.dureeEnMinutes(newValue)"

      >
    </q-input>
</template>
