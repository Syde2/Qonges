<script setup>
import {ref} from 'vue'
import { storeToRefs } from 'pinia';
import { useDatePickerStore } from 'stores/datePickerStore.js'
import {getJoursFeries, getVacancesScolaires} from 'src/composables/ApiCalls.js'
import {date} from 'quasar'

const datePickerStore = useDatePickerStore()
const { range, disabledDates, attributes } = storeToRefs(datePickerStore)

const jourFeries = await getJoursFeries()
const vacancesScolaires = await getVacancesScolaires()

function afficherJoursFeries(){
  const datesFeriees = Object.keys(jourFeries)

  datesFeriees.forEach(date => {
    attributes.value.push(
    {
      dates: date,
      popover : {
        label: jourFeries[date]
      },
      highlight : {
        color: 'purple',
        fillMode: 'solid',
        contentClass: 'italic',
      }
    }
    )
  });

}

function formatDateConges(rawDate){
  let formattedDate =  date.formatDate(rawDate, 'DD/MM/YYYY')
  return formattedDate
}

function afficherVacancesScolaires(){
  vacancesScolaires.forEach( periode =>{
    attributes.value.push({
      dates: {
        start:  periode.start_date,
        end:   periode.end_date,
      },
      popover : {
        label: periode.description+' Du '+formatDateConges( periode.start_date)+ ' Au ' + formatDateConges(periode.end_date)
      },
      bar:{
        color:'green'
      }

      // highlight : {
      //   color: 'green',
      //   fillMode: 'solid',
      //   contentClass: 'italic',
      // }



    })

  } )

}


afficherJoursFeries()
afficherVacancesScolaires()

const masks = ref({
  modelValue: 'DD/MM/YYYY',
});



</script>

<template>
  <VDatePicker
  v-model.range= range
  mode="date"
  borderless
  expanded
  transparent
  is-required
  :disabled-dates= disabledDates
  :attributes= attributes
  :masks="masks"
  >

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
