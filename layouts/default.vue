<template>
  <v-app>
    <Header />
      <v-main>
        <v-container>
          <Nuxt />
        </v-container>
      </v-main>
    <Footer />
  </v-app>
</template>

<style>
html, body, .v-application, .v-application--wrap {
    min-height: -webkit-fill-available;
  }
</style>