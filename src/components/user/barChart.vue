<template>
    <div class="box p-2 rounded-16">
        <canvas id="myChart" width="180" height="180"></canvas>
        <h2>barchart</h2>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
export default {
    mounted() {
        const ctx = document.getElementById('myChart');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                labels: ['2005-2010', '2011-2015', '2016-2020', '2021-'],
                datasets: [{
                    //label: '# of Votes',
                    label: '% of Crossings',
                    //data: [12, 19, 3, 5, 2, 3],
                    data: [12, 19, 3, 5],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        //'rgba(153, 102, 255, 0.2)',
                        //'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        //'rgba(153, 102, 255, 1)',
                        //'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
       myChart
    }
}
</script>

<style scoped>

.box {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 16px;
}

</style>