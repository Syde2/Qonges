<script setup>
import { api } from 'src/boot/axios';
import {ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import ActiviteUnitaire from '../ActiviteUnitaire.vue'
import { useListeActivitesStore } from 'src/stores/listeActivitesStore';

const store = useListeActivitesStore()
const { listeActivitesDuJour } = storeToRefs(store)

const dense = computed(
  listeActivitesDuJour.value.length > 3 ? true : false
)

function onRight(e, id){
  api.delete('/quotidiens/'+id)
  .then(()=>store.updateListe() )
  e.reset()
}
</script>

<template>
  <q-card class="col">
    <q-scroll-area style="height: 100%; width: auto" :bar-style="{ background: 'transparent', }"
      :thumb-style="{ width: '3px' }">
      <q-list class="q-px-md">
        <q-slide-item
          v-for="activite in listeActivitesDuJour"
          :key="activite.id"
          :id="activite.id"
          @right= "e=> onRight(e, activite.id)"
          right-color="negative"
          class="q-my-sm shadow-4"
          style="border: 1px solid rgb(173, 170, 170); border-radius: 5px;"
          >

          <ActiviteUnitaire :activite=activite :dense="dense" />

          <template v-slot:right>
             <q-icon name="delete" />
             <span class="text-overline"> Supprimer l'activité </span>
          </template>
        </q-slide-item>
      </q-list>
    </q-scroll-area>
  </q-card>
</template>
