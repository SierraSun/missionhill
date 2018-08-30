var dom = document.getElementById("chart3");
var myChart = echarts.init(dom);
var app = {};

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    title: {
        left: 'center',
        text: 'Change of Race/ Ethnicity in Mission Hill',
       subtext:"1950-2010",
       textStyle:{
         fontSize:15
       }
    },
    legend: {
      y:52,
        data: ['White', 'Black/ African American','Hispanic','Asian/PI','Other']
    },
    grid: {
        y:100,
        y2:20,
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['1950', '1960','1970','1980','1990','2000','2010']
    },
    series: [
        {
            name: 'White',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideLeft'
                }
            },
            data: [21889, 17598, 12547, 7539, 6645,6732,7992]
        },
        {
            name: 'Black/ African American',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideLeft'
                }
            },
            data: [296, 1272, 2660,3362, 4072,2867,2680]
        },
        {
            name: 'Hispanic',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show:true,
                    position: 'insideLeft'
                }
            },
            data: [0, 0, 902, 2302, 3640,2474,3216]
        },
        {
            name: 'Asian/PI',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideLeft'
                }
            },
            data: [0, 0, 362, 570, 1477,2161,2523]
        },
        {
            name: 'Other',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [34, 222, 121, 361, 154,630,463]
        }
    ]
};

;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
