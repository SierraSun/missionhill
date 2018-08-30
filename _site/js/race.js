var dom = document.getElementById("chart2");
var myChart = echarts.init(dom);
var app = {};


setTimeout(function () {
    option = {
        legend: {
          y:52
        },
        title: {
            left: 'center',
            text: 'Change of Race/ Ethnicity in Mission Hill',
           subtext:"1950-2010",
           textStyle:{
             fontSize:15
           }
        },
        tooltip: {
            trigger: 'axis',
            showContent: true,
            confine:true
        },
        dataset: {
            source: [
                ['year', '1950', '1960', '1970', '1980', '1990', '2000','2010'],
                ['White', 21889, 17598, 12547, 7539, 6645, 6732, 7992],
                ['Black/AA.', 296, 1272, 2660, 3362, 4072, 2867, 2680],
                ['Hispanic', 0, 0, 902, 2302, 3640, 2474, 3216],
                ['Asian/PI', 0, 0, 362, 570, 1477, 2161, 2523],
                ['Other', 34, 222, 121, 361, 154, 630, 463]
            ]
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            interval:0
          },
          splitLine: {show: true}
        },
        yAxis: {
          gridIndex: 0,
          splitLine: {show: false}
        },
        grid: {
          top:'50%',
          width:'66%',
          x:'20%'
        },
        series: [
            {type: 'bar', smooth: true, seriesLayoutBy: 'row',itemStyle:{normal:{color:"#a7a09a94"}}},
            {type: 'bar', smooth: true, seriesLayoutBy: 'row',itemStyle:{normal:{color:"#e41b24"}}},
            {type: 'bar', smooth: true, seriesLayoutBy: 'row',itemStyle:{normal:{color:"#e85a24"}}},
            {type: 'bar', smooth: true, seriesLayoutBy: 'row',itemStyle:{normal:{color:"#f2a73b"}}},
            {type: 'bar', smooth: true, seriesLayoutBy: 'row',itemStyle:{normal:{color:"#701f1e"}}},
            {
                type: 'pie',
                id: 'pie',
                radius: '20%',
                center: ['50%', '35%'],
                label: {
                    formatter: '{b}:{@2012}({d}%)'
                },
                encode: {
                    itemName: 'year',
                    value: '2012',
                    tooltip: '2012'
                },
                itemStyle:{
                  normal: {
                  },
                  emphasis: {
                      barBorderWidth: 1,
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowOffsetY: 0,
                      shadowColor: 'rgba(0,0,0,0.5)'
                  }
                }
            }
        ],
        color:["#a7a09a94","#e41b24","#e85a24","#f2a73b","#701f1e"]
    };

    myChart.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            myChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}:\n{@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });

    myChart.setOption(option);

});
