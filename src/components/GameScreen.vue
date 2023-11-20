<template>
   <div>
    <v-row>
        <v-col cols="6">
                    <v-row>
                    <v-col cols="6"><OpcionJuego :id="0">{{votos[0]}}</OpcionJuego></v-col>
                    <v-col cols="6"><OpcionJuego :id="1" >{{ votos[1] }}</OpcionJuego></v-col>
                </v-row>
                <v-row>
                    <v-col cols="6"><OpcionJuego :id="2" >{{ votos[2] }}</OpcionJuego></v-col>
                    <v-col cols="6"><OpcionJuego :id="3" >{{ votos[3] }}</OpcionJuego></v-col>
                </v-row>
        </v-col>
        <v-col cols="6">
            <graficosStats :key="key" v-if="loaded"  :chartData="chartData"  :chartOptions="chartOptions"/>
        </v-col>
    </v-row>    
</div>
</template>

<script>
import { useAppStore } from '@/store/app';
import graficosStats from './GraficosStats.vue';


//import {  state } from "@/socket";
//consulto los datos de pinia en lugar del objeto estado
import OpcionJuego from './OpcionJuego.vue';
    export default {
        name: 'GameScreen',
        components: {
        OpcionJuego, graficosStats
        },
        props: {},
        data() {
            return {     
                key: 0,      
                loaded:false,
                chartData: {
                    labels: ['Opció 1', 'Opció 2', 'Opció 3','Opció 4'],	
                    datasets: [ { label: 'Data One',backgroundColor: '#f87979',  data: [1, 1, 1,1] }]
                },
                chartOptions: {
                    responsive: true
                }
            }
        },
        computed: {
            votos() {
                const store=useAppStore();
                return store.getVotos();
            },
         
        },
      
        mounted() {},
        methods: {
          
        },  
        created() {
           const store = useAppStore();
           //Ens suscribim a la Store per detectar els canvis
           //cada vegada que hi hagi un canvi a la store, actualitzem les dades del grafic
           //mutation es al canvi que s'ha produit, i state es el nou estat de la store
          store.$subscribe((mutation, state) => {
                console.log(mutation);
                console.log(state.infoVotos.votos);
                this.loaded=true;
                this.key++;
                this.chartData.datasets= [{ label: 'Votaciones', 
                                            data: [...state.infoVotos.votos]}]; // Actualiza 'data' con el nuevo estado de la tienda
            });

            if (store.isLoggedIn()==false){
                alert("No estás logueado")
               this.$router.push('/');
              
               console.log(store.getLoginInfo())
            }
          
  },
  
    }
</script>

<style lang="scss" scoped>

</style>