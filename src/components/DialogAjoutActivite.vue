<script setup>
import { ref, computed } from 'vue'
import { api } from 'src/boot/axios';
import { storeToRefs } from 'pinia';
import { useActiviteStore} from 'stores/activiteStore.js'
import { useCalendarStore} from 'stores/calendarStore.js'
import {useListeActivitesStore} from 'stores/listeActivitesStore.js'
import SelectActivite from 'components/quotidien/SelectActivite.vue'
import InputHeures from "components/quotidien/InputHeures.vue"

const activiteStore = useActiviteStore()
const calendarStore = useCalendarStore()
const {User, Activite, duree } = storeToRefs(activiteStore)
const {dateFormattee} = storeToRefs(calendarStore)
const {listHasChanged} = storeToRefs( useListeActivitesStore())
const illustration = '/stairs.jpg'
const isMouseOver = ref(false)
const mouseOverColor = computed( ()=>
  isMouseOver.value ? 'grey-6' : 'grey-3'
)

const handleSubmit = () => {
  const payload = {
    quotidien : {
      date : dateFormattee.value,
      User : User.value,
    },
    Activite : Activite.value,
    duree : duree.value
  }
  api.post('/detail_quotidiens', payload)
  .then( ()=>activiteStore.$reset() )
  .then( ()=> listHasChanged.value= !listHasChanged.value )

}

</script>


<template>
<q-dialog>
  <q-card class="customCard  shadow-10 q-pa-sm flex column justify-between">

    <q-bar class="bg-transparent">
      <q-space />
      <q-btn dense flat round icon="lens" :ripple="false"  size="8.5px" :color="mouseOverColor" @mouseleave="isMouseOver=false"  @mouseover=" isMouseOver=true" v-close-popup />
    </q-bar>

    <q-card-section>
                <q-img :src=illustration width="100%"  height="100px" >
                </q-img>
                <div class=" text-primary text-center q-py-md my-font" style="font-size: 1.5rem; font-weight: 800;">  Nouvelle Activite </div>
    </q-card-section>

    <q-card-section class="q-gutter-y-lg">
      <SelectActivite />
      <InputHeures />
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
