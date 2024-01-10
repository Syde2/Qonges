<script setup>
import { api } from 'src/boot/axios';
import { ref, watch} from 'vue';
import { storeToRefs } from 'pinia';
import {useCalendarStore} from 'stores/calendarStore.js'
import {useListeActivitesStore} from 'stores/listeActivitesStore.js'
import LeftPanel from './Panel/LeftPanel.vue'
import RightPanel from './Panel/RightPanel.vue'

const listeActivitesStore = useListeActivitesStore()
const { dateFormattee  } = storeToRefs( useCalendarStore())
const {listeActivitesDuJour,listHasChanged } = storeToRefs(listeActivitesStore)
const {updateListe} = listeActivitesStore
const callUpdateList = ()=>{
  console.log('Call')
  api.get(`/quotidiens?date=${dateFormattee.value}&User.id=${1}`)
  .then((res) => (listeActivitesDuJour.value = res.data["hydra:member"]))
    }


watch([dateFormattee, listHasChanged ], callUpdateList,
{ immediate: true }
 )

</script>

<template>
  <q-card flat class="flex row">
    <LeftPanel />
    <RightPanel :listeActivitesDuJour="listeActivitesDuJour"  />
  </q-card>
</template>
