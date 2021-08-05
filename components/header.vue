<template>
  <v-app>
    <!-- ナビゲーションドロワー -->
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.to"
          @click="triggerClick(item.action)"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- メニューバー -->
    <v-app-bar
      app
    >
      <v-app-bar-nav-icon 
        @click.stop="drawer = !drawer"
      />

      <v-toolbar-title>
        <NuxtLink to="/" class="toolbar-title">
          <img 
            src="~/assets/images/accessories_logo.png"
            height="36"
            align="center"
          >
        </NuxtLink>
      </v-toolbar-title>

      <v-tabs>
        <v-spacer/>
        <v-tab
          v-for="(item, index) in menuItems"
          :key="index"
          align="center"
          class="text-none"
          :to="item.to"
          @click="triggerClick(item.action)"
        >
          {{ item.title }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
  </v-app>
</template>

<script lang="ts">
import * as menu from '../common/menu'

export default {
  data() {
    return {
      drawer: false,
      login: true,
      menuItems: menu.menuItems,
      // siteTitle: 'ECサイト',
    }
  },
  methods: {
    logout(){
      console.log('ログアウト')
    },
    triggerClick(action:string) {
      if (action === 'logout') {
        console.log('logout')
      } 
    }
    // async logout() {
    //   await this.$store.dispatch('auth/logout');
    //   this.$router.push('/login');
    // }
  },
  computed: {
    //  
  }
}
</script>

<style scoped lang="scss">
.v-toolbar__content {
    display: flex;
}

.v-toolbar__title {
  overflow: visible !important;
  margin-right: 30px
}

.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}
 
.v-tabs {
  display: none;

 
  @include display_pc {
    display: block !important;
    margin-left:auto;

  }
}

.v-slide-group__wrapper {
  display: flex;
}

.v-slide-group__content {

  display: flex;
} 

.v-tabs-bar__content {

  display: flex;
}

</style>
