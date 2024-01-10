<script setup>
import { ref, computed, onBeforeMount } from 'vue'
import { api } from 'src/boot/axios';
import { storeToRefs } from 'pinia';
import { useActiviteStore} from 'stores/activiteStore.js'

const {Activite} = storeToRefs(useActiviteStore())
let optionsActivite =ref([])


const fetchListeActivites = () => {
    api.get('/activites.json')
        .then(res => {
          optionsActivite.value = res.data
        } )

}
 fetchListeActivites()


</script>


<template>
  <q-select
    dense
    standout="bg-accent"
    v-model="Activite"
    :options="optionsActivite"
    option-label="nomActivite"
    option-value="id"
    options-cover

  >
    <template v-slot:prepend>
      <q-icon name="sort" />
    </template>
    <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              Aucune activité disponible
            </q-item-section>
          </q-item>
        </template>
  </q-select>

</template>
