<script setup>

</script>


<template>
    <div class="text-h4 text-primary my-font q-mb-md">Trophées</div>

    <div class="q-pa-md">
        <q-scroll-area
        style="height:33vh; width: auto"
        :bar-style="{ background: 'transparent',  }"
        :thumb-style="{ width: '3px' }"
        >
        <q-list>
            <q-item  v-for="i in 10"  :key="i" style="max-width: 300px">
                <q-item-section avatar>
                    <q-skeleton type="QAvatar" />
                </q-item-section>

                <q-item-section>
                    <q-item-label>
                        <q-skeleton type="text" />
                    </q-item-label>
                    <q-item-label caption>
                        <q-skeleton type="text" width="65%" />
                    </q-item-label>
                </q-item-section>
            </q-item>
        </q-list>

        </q-scroll-area>


    </div>
</template>
