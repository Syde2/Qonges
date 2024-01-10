<script setup>
import { ref } from 'vue';
import TimeKnob from './TimeKnob.vue';

const props = defineProps({
  activite: Object,
  dense: Boolean
})
const { nomActivite, description, typeActivite } = props.activite.detailQuotidien[0].Activite
const itemHasChanged = ref(false)

</script>

<template>
  <q-card class="flex row ">

    <q-card-section horizontal class="col-8" >
      <q-item :dense=props.dense>
        <q-item-section avatar>
          <TimeKnob v-model=props.activite.detailQuotidien[0].duree @update:model-value="() => itemHasChanged = true" />
        </q-item-section>

        <q-item-section>

          <q-item-label class="text-overline">
            <q-chip square dense size="sm" color="accent" class="text-white">
              {{ typeActivite }}
            </q-chip>
          </q-item-label>
          <q-item-label class="text-overline q-pl-xs">
            {{ nomActivite }}
          </q-item-label>
          <q-item-label  class="q-pl-xs" caption lines="2">
            {{ description }}
          </q-item-label>

        </q-item-section>

      </q-item>
    </q-card-section>

    <q-card-actions class="col-3">
        <div class="q-gutter-xs " v-if=itemHasChanged >
          <q-btn icon="check" color="accent" size="xs"/>
          <q-btn icon="cancel" color="negative" size="xs"/>
          <q-tooltip :delay="1000" :model-value="true"> Confirmez ? </q-tooltip>
        </div>
    </q-card-actions>


    <q-separator vertical inset spaced="1px" size="1.3px"  color="grey-6" style="border-radius: 5px; cursor: move;"  />
    <q-separator vertical inset spaced="1px"  size="1.5px" color="grey-6" style="border-radius: 5px;cursor: move;" />
    <q-separator vertical inset spaced="1px" size="1.5px"  color="grey-6" style="border-radius: 5px;cursor: move;" />

  </q-card>
</template>

