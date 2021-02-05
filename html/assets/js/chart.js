var ctx = document.getElementById('myChart1').getContext('2d');
var gradientFill = ctx.createLinearGradient(0, 50, 0, 0);
gradientFill.addColorStop(1, "rgba(190, 145, 98, 1)");
gradientFill.addColorStop(0, "rgba(190, 145, 98, 0)");

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [{
            backgroundColor: gradientFill,
            borderColor: 'rgba(190, 145, 98, 0.25)',
            data: [0, 10, 5, 2, 20, 30, 0],
            pointRadius:0,
        }]
    },

    // Configuration options go here
    options: {
        animation: {
            duration: 0
        }, 
        legend: {
            display: false
        },
        tooltips: false,
        clip:false,
        elements: {
            point : {
                radius: 0
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                    color:'#2B3035',
                },
                ticks: {
                    display: false,
                    padding: 10
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false,
                    color:'#2B3035',
                },
                ticks: {
                    display:false,
                    padding:10
                }
            }]
        }
    }
});

var ctx2 = document.getElementById('myChart2').getContext('2d');
var gradientFill = ctx2.createLinearGradient(0, 50, 0, 0);
gradientFill.addColorStop(1, "rgba(190, 145, 98, 1)");
gradientFill.addColorStop(0, "rgba(190, 145, 98, 0)");

var chart = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [{
            backgroundColor: gradientFill,
            borderColor: 'rgba(190, 145, 98, 0.25)',
            data: [0, 20, 1, 12, 20, 30, 0],
            pointRadius:0,
        }]
    },

    // Configuration options go here
    options: {
        animation: {
            duration: 0
        }, 
        legend: {
            display: false
        },
        tooltips: false,
        clip:false,
        elements: {
            point : {
                radius: 0
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                    color:'#2B3035',
                },
                ticks: {
                    display: false,
                    padding: 10
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false,
                    color:'#2B3035',
                },
                ticks: {
                    display:false,
                    padding:10
                }
            }]
        }
    }
});

var ctx3 = document.getElementById('myChart3').getContext('2d');
var gradientFill = ctx3.createLinearGradient(0, 50, 0, 0);
gradientFill.addColorStop(1, "rgba(190, 145, 98, 1)");
gradientFill.addColorStop(0, "rgba(190, 145, 98, 0)");

var chart = new Chart(ctx3, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [{
            backgroundColor: gradientFill,
            borderColor: 'rgba(190, 145, 98, 0.25)',
            data: [0, 10, 5, 2, 20, 30, 0],
            pointRadius:0,
        }]
    },

    // Configuration options go here
    options: {
        animation: {
            duration: 0
        }, 
        legend: {
            display: false
        },
        tooltips: false,
        clip:false,
        elements: {
            point : {
                radius: 0
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                    color:'#2B3035',
                },
                ticks: {
                    display: false,
                    padding: 10
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false,
                    color:'#2B3035',
                },
                ticks: {
                    display:false,
                    padding:10
                }
            }]
        }
    }
});
var ctx4 = document.getElementById('myChart4').getContext('2d');
var gradientFill = ctx4.createLinearGradient(0, 50, 0, 0);
gradientFill.addColorStop(1, "rgba(190, 145, 98, 1)");
gradientFill.addColorStop(0, "rgba(190, 145, 98, 0)");

var chart = new Chart(ctx4, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [{
            backgroundColor: gradientFill,
            borderColor: 'rgba(190, 145, 98, 0.25)',
            data: [0, 10, 5, 2, 20, 30, 0],
            pointRadius:0,
        }]
    },

    // Configuration options go here
    options: {
        animation: {
            duration: 0
        }, 
        legend: {
            display: false
        },
        tooltips: false,
        clip:false,
        elements: {
            point : {
                radius: 0
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                    color:'#2B3035',
                },
                ticks: {
                    display: false,
                    padding: 10
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false,
                    color:'#2B3035',
                },
                ticks: {
                    display:false,
                    padding:10
                }
            }]
        }
    }
});
var ctx5 = document.getElementById('myChart5').getContext('2d');
var gradientFill = ctx5.createLinearGradient(0, 50, 0, 0);
gradientFill.addColorStop(1, "rgba(190, 145, 98, 1)");
gradientFill.addColorStop(0, "rgba(190, 145, 98, 0)");

var chart = new Chart(ctx5, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [{
            backgroundColor: gradientFill,
            borderColor: 'rgba(190, 145, 98, 0.25)',
            data: [0, 10, 5, 2, 20, 30, 0],
            pointRadius:0,
        }]
    },

    // Configuration options go here
    options: {
        animation: {
            duration: 0
        }, 
        legend: {
            display: false
        },
        tooltips: false,
        clip:false,
        elements: {
            point : {
                radius: 0
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                    color:'#2B3035',
                },
                ticks: {
                    display: false,
                    padding: 10
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false,
                    color:'#2B3035',
                },
                ticks: {
                    display:false,
                    padding:10
                }
            }]
        }
    }
});