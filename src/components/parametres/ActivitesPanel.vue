<script setup>
const activites = {
    options :  ""
}
</script>


<template>
        <div class="text-h4 text-primary my-font q-mb-md">Activités</div>

        <q-scroll-area  style="height: 200px; max-width: 600px;" :bar-style="{ background: 'transparent', }"
        :thumb-style="{ width: '3px' }">


        <q-form class="q-gutter-y-xl">
            <q-input v-model="activites.options" label="label" standout="bg-accent"  />
            <q-input v-model="activites.options" label="label" standout="bg-accent" />
            <q-input v-model="activites.options" label="label" standout="bg-accent" />
            <q-input v-model="activites.options" label="label" standout="bg-accent" />
        </q-form>

        </q-scroll-area>


</template>
