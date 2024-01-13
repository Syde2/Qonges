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

  function ajusterDateDebut(dateDebut){
    // Faire débuter le 1er jour des vacances au lundi
    // 0 a 6 , Dimanche au Samedi
    let numeroJour =  date.getDayOfWeek(dateDebut)
    if(numeroJour === 6  ){
      dateDebut = date.addToDate(dateDebut, {days:2})
      console.log('AJOUT 2 JOURS',dateDebut)
    }
    else if( numeroJour === 7 ){
      dateDebut = date.addToDate(dateDebut, {days:1})
      console.log('AJOUT 1 JOUR',dateDebut)
    }
    return dateDebut
  }
  function ajusterDateFin(dateFin){
    // Terminer les vacances le dimanche soir (pb time)
    let numeroJour =  date.getDayOfWeek(dateFin)
    if(numeroJour === 1 ){
      console.log("je passe ici")
      dateFin = date.subtractFromDate(dateFin, {hours :1})
    }

    return  dateFin
  }


  vacancesScolaires.forEach( periode =>{
    attributes.value.push({
      dates: {
        start:  ajusterDateDebut(periode.start_date),
        end:  ajusterDateFin( periode.end_date)
      },
      popover : {
        label:  `${periode.description}, du ${ date.formatDate(ajusterDateDebut(periode.start_date), "DD/MM")}  au ${ date.formatDate(ajusterDateFin( periode.end_date), "DD/MM/YYYY")}, `
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
