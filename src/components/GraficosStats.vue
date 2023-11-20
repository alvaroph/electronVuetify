<template>
    <div>
        <v-row>
            <v-col cols="6">
                <Bar  :data="chartData"  :options="chartOptions"/>
            </v-col>
            <v-col cols="6">
                <Pie  :data="chartData"  :options="chartOptions"/>
            </v-col>

        </v-row>
    </div>
</template>

<script>
    import {
    Chart as ChartJS,
    Colors,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement
    } from 'chart.js'

    import { Bar, Pie } from 'vue-chartjs'

    ChartJS.register(Colors,ArcElement,CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

    export default {
        name: 'GraficosStats',
        components: {Bar,Pie},
        props: {
            chartData: {
                type: Object,
                required: true
                },
            chartOptions: {
                type: Object,
                required: true
            }},
        data() {
            return {

            }
        },
        computed: {

        },
        mounted() {

        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>

</style>