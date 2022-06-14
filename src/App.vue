<template>
  <v-app>
    <v-app-bar
        app
        fixed
        height="8"
        dark
        color="#4b296b"
        >
        <template v-slot:img="{ props }">
            <v-img
              v-bind="props"
            ></v-img>
        </template>
        <template v-slot:extension>
          <v-tabs
            >
            <v-app-bar-nav-icon
            @click="$vuetify.goTo('#main_id')"
              >
            </v-app-bar-nav-icon>
            <v-tab
            @click="$vuetify.goTo('#abstract_id')"
              >
              Abstract</v-tab>
            <v-tab
            @click="$vuetify.goTo('#motivation_id')"
              >
              Motivation</v-tab>
            <v-tab
            @click="$vuetify.goTo('#detailed_description_id')"
              >
              Detailed Description</v-tab>
            <v-tab
              @click="$vuetify.goTo('#speakers_id')"
              >
              Speakers</v-tab>
            <v-tab
            @click="$vuetify.goTo('#tutorial_program_id')"
              >
              Tutorial Program</v-tab>
            <v-tab
            @click="$vuetify.goTo('#references_id')"
              >
              References</v-tab>
          </v-tabs>
        </template>
    </v-app-bar>
    <v-main>
      <LandingPage/>
    </v-main>
  </v-app>
</template>

<script>
import LandingPage from './components/LandingPage';

export default {
  name: 'App',

  components: {
    LandingPage,
  },

  data: () => ({
    //
  }),
};
</script>
