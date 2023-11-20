<template>
     <div>
     
  
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
      >
        <div class="text-subtitle-1 text-medium-emphasis">Usuari</div>
  
        <v-text-field
          density="compact"
          placeholder="Usuari"
          prepend-inner-icon="mdi-user-outline"
          variant="outlined"
          v-model="userData.username"
        ></v-text-field>
  
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Contrassenya
  
          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Te n'has oblidat?</a>
        </div>
  
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Posa la teva contrassenya"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
          v-model="userData.password"
        ></v-text-field>
  
        <v-card
          class="mb-12"
          color="surface-variant"
          variant="tonal"
        >
         
        </v-card>
  
        <v-btn
          block
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          @click="loginUser"
        >
          Accedir
        </v-btn>
  
        <v-card-text class="text-center">
          <a
            class="text-blue text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Dona't d'alta<v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-card>
    </div>
</template>

<script>
  import { useAppStore } from '@/store/app';

    export default {
        name: 'LoginScreen',
        components: {},
        props: {},
        data() {
            return {
                visible: false,
                userData: {
                username: '',
                password: '',
            },
            }
        },
        computed: {},
        mounted() {},
        methods: {
           loginUser: function(){
            if (this.userData.username=="user" && this.userData.password=="123") {
                const store = useAppStore();
                store.setLoginInfo({ loggedIn:true, username:"Alvaro Pérez" ,  image:  "https://www.w3schools.com/howto/img_avatar.png"});
                this.$router.push('/juego');
            } else {
                alert("Usuario o contraseña incorrectos");
            } 
        }
    },
    }
</script>

<style lang="scss" scoped>

</style>