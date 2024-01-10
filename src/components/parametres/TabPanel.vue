<script setup>
import { ref } from 'vue'
import PreferencesPanel from './PreferencesPanel.vue'
import ActivitesPanel from './ActivitesPanel.vue'
import TropheesPanel from './TropheesPanel.vue'


const tab= ref('preferences')
const splitterModel=  ref(20)

</script>

<template>
    <div>
      <q-splitter
        v-model="splitterModel"
      >
  
        <template v-slot:before>
          <q-tabs
            v-model="tab"
            vertical
            class="text-primary"
          >
            <q-tab name="preferences" icon="tune" label="Preferences" />
            <q-tab name="activites" icon="construction" label="Activites" />
            <q-tab name="trophees" icon="sym_o_trophy" label="Trophées" />
          </q-tabs>
        </template>
  
        <template v-slot:after>
          <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel name="preferences">
              <PreferencesPanel />
            </q-tab-panel>
  
            <q-tab-panel name="activites">
              <ActivitesPanel />
            </q-tab-panel>
  
            <q-tab-panel name="trophees">
              <TropheesPanel />
            </q-tab-panel>
          </q-tab-panels>
        </template>
  
      </q-splitter>
    </div>
</template>
  

  