AOS.init();

const ctx = document.querySelector('.activity-chart')
const ctx2 = document.querySelector('.prog-chart')

new Chart(ctx, { //create new chart
    type: 'bar', //type of the chart
    data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'], //label on x-axis
        //define the data set
        datasets: [{
            label: 'Time',
            data: [8, 6, 7, 4, 10, 8, 4], //data of the bar
            backgroundColor: '#1e293b',
            borderWidth: 3,
            borderRadius: 6,
            hoverBackground: '#60a5fa'
        }]
    },
    
    options: {
        responsive: true,
        maintainAspectRatio: false, //aspect ratio of the chart is not fixed so it allows to stretch based on the container

        //define the chart axis configuration
        scales: {
            x: {
                border: {
                    display: false,
                },
                grid: {
                    display: true,
                    color: '#1e293b'
                }
            },
            y: {
                ticks: {
                    display: false
                }
            }
        },
        //Plugins and animation for the chart
        plugins: {
            legend: {
                display: false
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutQuad'
        }
    }
})

new Chart(ctx2, {
    type: 'line', //type of the chart
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], //label on x-axis
        //define the data set
        datasets: [{
            label: 'Class GPA',
            data: [6, 10, 8, 14, 6, 7, 4], //data of the bar
            borderColor: '#0891b2',
            tension: 0.4 //adding curve to the line
        }, {
            label: 'Avg GPA',
            data: [8, 7, 12, 6, 8, 5, 2], //data of the bar
            borderColor: '#ca8a04',
            tension: 0.4 //adding curve to the line
        }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true, //aspect ratio of the chart is fixed.

        //define the chart axis configuration
        scales: {
            x: {
                grid: {
                    display: false, //hide the grid
                    color: '#1e293b'
                }
            },
            y: {
                ticks: {
                    display: false //hide the tick mark
                },
                border: {
                    display: false,
                    dash: [5, 5] // for dash line 
                }
            }
        },
        //Plugins and animation for the chart
        plugins: {
            legend: {
                display: false
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutQuad'
        }
    }
})