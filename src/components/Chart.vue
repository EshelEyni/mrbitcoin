<template>
    <h1 class="chart-header">Bitcoin rate last year</h1>
    <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
        :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar },
    props: {
        chartId: {
            type: String,
            default: 'bar-chart'
        },
        datasetIdKey: {
            type: String,
            default: 'label'
        },
        width: {
            type: Number,
            default: 400
        },
        height: {
            type: Number,
            default: 400
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object,
            default: () => { }
        },
        plugins: {
            type: Object,
            default: () => { }
        },
        data: {
            type: Array
        },
        labels: {
            type: Array
        }
    },
    data() {
        return {
            chartData: {
                labels: this.labels,
                datasets: [{
                    data: this.data, backgroundColor: [
                        '#FF9500'
                    ], label: '1 Bit coin in USD',
                }]
            },
            chartOptions: {
                responsive: true
            }
        }
    }
}
</script>

<style lang="scss">
.chart-header {
    text-align: center;
}
</style>