<script setup>
import {ref} from 'vue'
import { api } from 'src/boot/axios';
import DialogAjout from '../DialogAjoutActivite.vue';

const optionsActivite = ref([])
const toggleDialog = ref(false)


const fetchListeActivites = ()=>{
  api.get('/activites.json')
  .then( res =>  optionsActivite.value = res.data  )
}
fetchListeActivites()

</script>

<template>

<q-page-sticky position="bottom-right" class="lt-sm"  :offset="[150, 100]">
  <q-btn fab icon="add" class="lt-sm"  color="secondary" @click="toggleDialog=true" />
  <q-btn fab icon="add" class="gt-xs"  label="Ajouter" color="secondary" @click="toggleDialog=true" />
</q-page-sticky>

<q-page-sticky position="bottom-right" class="gt-xs"  :offset="[320, 100]">
  <q-btn fab icon="add" class="lt-sm"  color="secondary" @click="toggleDialog=true" />
  <q-btn fab icon="add" class="gt-xs"  label="Ajouter" color="secondary" @click="toggleDialog=true" />
</q-page-sticky>

<DialogAjout v-model="toggleDialog" />

</template>
