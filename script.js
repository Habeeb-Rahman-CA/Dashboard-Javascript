const ctx = document.querySelector('.activity-chart')

new Chart(ctx, { //create new chart
    type: 'bar', //type of the chart
    data: {
        labels: ['M','T','W','T','F','S','S'], //label on x-axis
        //define the data set
        datasets: [{
            label: 'Time',
            data: [8, 6, 7, 4, 10, 8, 4], //data of the bar
            backgrooundColor: '#1e293b',
            borderWidth: 3,
            borderRadius: 6,
            hoverBackground: '#60a5fa'
        }] 
    },
    option: {
        responsive: true,
        maintainAspectRatio: false, //aspect ratio of the chart is not fixed so it allows to stretch based on the container

        //define the chart axis configuration
        scales: {
            x:{
                border: {
                    display: false,
                },
                grid: {
                    display: true,
                    color: '#1e293b'
                }
            },
            y:{
                ticks:{
                    display: false
                }
            }
        },
        //Plugins and animation for the chart
        plugins:{
            legend:{
                display: false
            }
        },
        animation:{
            duration: 1000,
            easing:'easeInOutQua'
        }
    }
})