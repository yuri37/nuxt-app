<template>
  <v-app>
    <!-- ナビゲーションドロワー -->
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, index) in isLoginList"
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
      <span v-if="isLogin === true">こんにちは、{{ isLogin }}さん</span>
      <v-tabs>
        <v-spacer/>
        <v-tab
          v-for="(item, index) in isLoginList"
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
import { Vue, Component } from 'vue-property-decorator'
import { auth } from '../plugins/firebase'
import * as menu from '../common/menu'

@Component({
  // layout: 'default',
  components: {
  }
})

export default class IndexPage extends Vue {

  menuItems: any = menu.menuItems
  drawer: boolean = false
  isLogin: boolean = false

  get isLoginList(){
    if (this.isLogin === true) {
    return this.menuItems.filter((item:any) => item.atLogin === true)
    } else {
    return this.menuItems.filter((item:any) => item.atLogout === true)
    }
  }

  async mounted() {
    await auth.onAuthStateChanged((user) => this.isLogin = user ? true : false)
  }

  async triggerClick(action:string) {
    if (action === 'logout') {
      await auth.signOut()
      this.$router.push('/')
    }
  }
}

// export default {
//   data() {
//     return {
//       drawer: false,
//       menuItems: menu.menuItems,
//       // siteTitle: 'ECサイト',
//     }
//   },
//   methods: {
//     logout(){
//       console.log('ログアウト')
//     },
//     triggerClick(action:string) {
//       if (action === 'logout') {
//         console.log('logout')
//       } 
//     }
//     // async logout() {
//     //   await this.$store.dispatch('auth/logout');
//     //   this.$router.push('/login');
//     // }
//   },
//   computed: {
//     //  
//   }
// }
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
