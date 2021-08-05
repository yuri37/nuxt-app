<template>
  <v-form>
    <v-container>
      <v-text-field label="MailAddress" v-model="mail"></v-text-field>
      <v-text-field label="Password" v-model="pass"></v-text-field>
      <v-btn color="primary" @click="login">ログイン</v-btn>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  layout: 'default',
  components: {
  }
})
export default class LoginPage extends Vue {
  mail: string = ''
  pass: string = ''

  login() {
    alert('Login !!')
  }
}
</script>