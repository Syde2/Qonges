<template>
  <q-layout view="hhh lpR fFf">

    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat no-caps no-wrap to="/index">

          <q-toolbar-title>
            <q-avatar>
              <img src="icon.png" alt="Q">
            </q-avatar>
            alendar

          </q-toolbar-title>

        </q-btn>

      </q-toolbar>
      <q-tabs dense class="lt-sm" narrow-indicator>
        <q-route-tab to="/quotidien"  icon="sym_o_event_available">
          <q-tooltip  :offset="[10, 10]"> Quotidien </q-tooltip>
        </q-route-tab>
        <q-route-tab to="/mensuel"  icon="sym_o_date_range">
          <q-tooltip  :offset="[10, 10]"> Mensuel </q-tooltip>
        </q-route-tab>
        <q-route-tab to="/statistiques" icon="sym_o_monitoring">
          <q-tooltip  :offset="[10, 10]"> Statistiques </q-tooltip>
        </q-route-tab>
        <q-route-tab to="/parametres" icon="sym_o_settings">
          <q-tooltip  :offset="[10, 10]"> Parametres </q-tooltip>
        </q-route-tab>
      </q-tabs>

      <q-tabs dense class="gt-xs">
        <q-route-tab   to="/quotidien" label="Quotidien" icon="sym_o_event_available" />
        <q-route-tab to="/mensuel" label=" Mensuel" icon="sym_o_date_range" />
        <q-route-tab  to="/statistiques" label="Statistiques" icon="sym_o_monitoring" />
        <q-route-tab  to="/parametres" label="Parametres" icon="sym_o_settings" />
      </q-tabs>

    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
