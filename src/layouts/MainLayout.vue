<template>
  <q-layout view="hhh lpR fFf">

    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat no-caps no-wrap to="/index">

          <q-toolbar-title>
            <q-avatar>
              <img src="icon.png" alt="Q">
            </q-avatar>
            ongès

          </q-toolbar-title>

        </q-btn>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
