var dom = document.getElementById("chart1");
var myChart = echarts.init(dom);
var app = {};

data = [["85"	,48000],["86"	,74200],["87"	,93500],
["88"	,118500],["89"	,187450],["90"	,181300],
["91"	,183150],["92"	,170000],["93"	,146100],
["94"	,138200],["95"	,136500],["96"	,140300],
["97"	,134150],["98"	,131600],["99"	,136800],
["00"	,145000],["01"	,207200],["02"	,236000],
["03"	,271300],["04"	,380400],["05"	,392300],
["06"	,420150],["07",	526500],["08",	510100],
["09",	500000],["10",	487000],["11",	483500],
["12",	517100],["13",	550500],["14",	606250],
["15",	691441],["16",	793050],["17",	885500],
["18",938700]];



var dateList = data.map(function (item) {
    return item[0];
});

var valueList = data.map(function (item) {
    return item[1];
});

option = {

    title: {
        left: 'center',
        text: 'Median Housing Price in Mission Hill',
        subtext:'1985-2018',
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
          var result = '';
          params.forEach(function (item) {
              result +=item.name + ":" +" $"+item.value
          });
          return result;
				},
},
    xAxis: {
        data: dateList,
        axisLabel: {
            rotate:40,
            textStyle: {
               fontFamily:'sans-serif'
                  }
          }
        },

    yAxis: {
        splitLine: {show: true},
        axisLabel: {
            textStyle: {
               fontFamily:'sans-serif'
                  }
          }

    },
    series: {
        type: 'line',
        showAllSymbol: true,
        data: valueList,
        itemStyle:{
          normal:{
            lineStyle:{
              width:8
            }
          }
        }
          }
    };

;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
