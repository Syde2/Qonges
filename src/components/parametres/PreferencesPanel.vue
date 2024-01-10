<script setup>
import { ref } from 'vue';

const options = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]
const toggleOption = ref(true)
const preferences = {
  options: ''
}
</script>


<template>
  <div class="text-h4 text-primary my-font q-pb-lg q-mb-md">Preferences</div>
  <q-scroll-area style="height: 300px; width: auto;" :bar-style="{ background: 'transparent', }"
    :thumb-style="{ width: '3px' }">
      <q-form class="q-gutter-y-xl">

        <q-select outlined v-model="model" :options="options">
          <template v-slot:prepend>
            <q-icon name="settings" />
          </template>
        </q-select>

        <q-select outlined v-model="model" :options="options">
          <template v-slot:prepend>
            <q-icon name="settings" />
          </template>
        </q-select>

        <q-select outlined v-model="model" :options="options">
          <template v-slot:prepend>
            <q-icon name="settings" />
          </template>
        </q-select>

        <q-toggle v-model="toggleOption" color="accent" left-label label="Lorem Ipsum ? " />
        <q-toggle v-model="toggleOption" color="accent" left-label label="Lorem Ipsum ? " />
        <q-toggle v-model="toggleOption" color="accent" left-label label="Lorem Ipsum ? " />

      </q-form>
  </q-scroll-area>
</template>
