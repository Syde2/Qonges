<script setup>
import { ref } from 'vue';
import { api } from 'src/boot/axios';
import { storeToRefs } from 'pinia';
import { useCalendarStore } from 'stores/calendarStore.js'

const { range, today, annee } = storeToRefs(useCalendarStore())

const disabledDates = ref([
  {
    repeat: {
      weekdays: [7, 1],
    },
  },
])

const attributes = ref([])

async function getJoursFeries() {
  // const url = `https://calendrier.api.gouv.fr/jours-feries/metropole/${annee.value}.json`
  const url = `https://calendrier.api.gouv.fr/jours-feries/metropole.json`
  const data = await fetch(url)
  const response = await data.json()
  const jourFeries = Object.keys(response)
  jourFeries.forEach(jour => {

   attributes.value.push({
    dates : jour,
    highlight: {
        color: 'indigo',
        fillMode: 'light',
        contentClass: 'italic',
      },
    popover: {
      label: 'Jour férié',
    },

    });
    }
      )
}

async function getQuotidien() {
  const data = api.get('/quotidiens.json')
  const response = await data
  response.data.forEach(value => {
    attributes.value.push({
      dates: value.date,
      dot: 'teal',
      popover: {
        label: value.detailQuotidien[0].Activite.nomActivite
      },



    })
  })
}

getJoursFeries()
getQuotidien()

</script>

<template>
  <VDatePicker v-model.range="range" mode="date" borderless expanded transparent  is-required
    :disabled-dates="disabledDates" :attributes='attributes' @drag="(e)=>console.log('drag',e)">
    <template #header-title="{ title }">
      <p class="text-h4 my-font text-primary"> {{ title }} </p>
    </template>
  </VDatePicker>
</template>


<style>
.vc-blue {
  --vc-accent-600: #4C566A;
}
.italic{
 font-style: italic;
}
</style>
