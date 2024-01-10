<script setup>
import { ref, computed, onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia';
import { useActiviteStore} from 'stores/activiteStore.js'

const {duree, dureeEnHeures} = storeToRefs(useActiviteStore())

duree.value = 90

const store = useActiviteStore()

function ajouter30Minutes(){
  if(duree.value <= 570){
    duree.value +=30
  }
}

function soustraire30Minutes(){
  if(duree.value >= 60){
    duree.value -=30
  }
}

function handleInput(newValue){
  store.dureeEnMinutes(newValue)

}

</script>

<template>
    <q-input
      dense
      standout="bg-accent"
       :model-value="dureeEnHeures"
      @update:model-value = "newValue=>  store.dureeEnMinutes(newValue)"

      >


      <template v-slot:append>
        <q-icon name="add" size="xs" style="cursor: pointer" @click="ajouter30Minutes" />
        <q-icon name="remove" size="xs"  style="cursor: pointer"  @click="soustraire30Minutes"  />
     </template>

      <template v-slot:prepend>
        <q-icon name="sym_o_pace" />
     </template>
    </q-input>
</template>
