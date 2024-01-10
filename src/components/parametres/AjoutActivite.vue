<script setup>
import {api} from "src/boot/axios";
import {ref} from "vue"


const payload = ref({
  nomActivite :'',
  description : '',
  typeActivite : ' ',
  categorieActivite : ''
})
console.log("API", api)
const handleSubmit = ()=>{
 api.post('/activites', payload.value)
}

</script>

<template>

<q-card class="q-pa-md" style="width:300px" >
  <q-form class="q-gutter-y-md" @submit="handleSubmit ">
    <q-input  v-model="payload.nomActivite" label="nom Activite" standout="bg-accent" />
    <q-input v-model="payload.description" label="Description" standout="bg-accent" />
    <q-input v-model="payload.typeActivite" label="typeActivite" standout="bg-accent" />
    <q-input v-model="payload.categorieActivite" label="categorieActivite" standout="bg-accent" />
    <q-btn class="align-right" flat type="submit" icon="check" />
  </q-form>
</q-card>


</template>
