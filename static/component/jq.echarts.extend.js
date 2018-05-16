$.fn.extend({
    initChart : function(selection) {
        var myChart = echarts.init(document.getElementById(selection));
        myChart.showLoading();
        return myChart;
    },
    setChartOption : function(myChart,conf) {
        var _conf = $.extend({
            url : '',
            param : {},
            title : '',
            subtext : '区域统计',
            yAxisName : "许可排放量"
        }, conf);

        _conf = $.extend({
            option : {
                title : {
                    text: _conf.title
                },
                tooltip : {trigger: 'axis'},
                legend: {data:[]},
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    show: true,
                    feature: {
                        magicType: {show: false},
                        saveAsImage: {},
                        dataZoom: {show: false}
                    }
                },
                dataZoom: {
                    show: true,
                    type: 'slider',
                    start: 30,
                    end: 100
                },
                xAxis : [{type : 'category',data : []}],
                yAxis : [{type : 'value',name : _conf.yAxisName}],
                series : []
            }
        }, _conf);

        $.ajax({
            url : _conf.url,
            data : _conf.param,
            type : "post",
            success : function(response) {
                if(!response || response.status != 200) return;

                var xAxisData = response.body.xAxisData;
                var legendData = response.body.legendData;
                var data = response.body.data;

                if(!xAxisData || !xAxisData.length) return;
                if(!legendData || !legendData.length) return;
                if(!data) return;

                for(var i = 0; i < xAxisData.length; i++) {
                    _conf.option.xAxis[0].data.push(xAxisData[i]);
                }
                for(var i = 0; i < legendData.length; i++) {
                    _conf.option.legend.data.push(legendData[i]);
                }
                for(attr in data) {
                    _conf.option.series.push({
                        name : attr,
                        type : "bar",
                        data : data[attr]
                    });
                }
                myChart.setOption(_conf.option);
                myChart.hideLoading();
            }
        });
    },
    setChartDataOption : function(myChart,conf) {
        var _conf = $.extend({
            title : '',
            subtext : '区域统计',
            yAxisName : "许可排放量",
            xAxisData : null,
            legendData : null,
            data : null
        }, conf);

        var settings = {
            option : {
                title : {
                    text: _conf.title
                },
                tooltip : {trigger: 'axis'},
                legend: {data:[]},
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    show: true,
                    feature: {
                        magicType: {show: false},
                        saveAsImage: {},
                        dataZoom: {show: false}
                    }
                },
                dataZoom: {
                    show: true,
                    type: 'slider',
                    start: 30,
                    end: 100
                },
                xAxis : [{type : 'category',data : []}],
                yAxis : [{type : 'value',name : _conf.yAxisName}],
                series : []
            }
        };

        if(!_conf.xAxisData || !_conf.xAxisData.length) return;
        if(!_conf.legendData || !_conf.legendData.length) return;
        if(!_conf.data) return;

        for(var i = 0; i < _conf.xAxisData.length; i++) {
            settings.option.xAxis[0].data.push(_conf.xAxisData[i]);
        }
        for(var i = 0; i < _conf.legendData.length; i++) {
            settings.option.legend.data.push(_conf.legendData[i]);
        }
        for(attr in _conf.data) {
            settings.option.series.push({
                name : attr,
                type : "bar",
                data : _conf.data[attr]
            });
        }
        myChart.setOption(settings.option);
        myChart.hideLoading();
    },
    setChartDataOption2 : function(myChart,conf) {
        var _conf = $.extend({
            title : '',
            subtext : '区域统计',
            yAxisName : "许可排放量",
            xAxisData : null,
            legendData : null,
            data : null,
            seriesShow:true
        }, conf);

        var settings = {
            option : {
                title : {
                    text: _conf.title
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {data:[]},
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                // toolbox: {
                //     show: true,
                //     feature: {
                //         magicType: {show: false},
                //         saveAsImage: {},
                //         dataZoom: {show: false}
                //     }
                // },
                // dataZoom: {
                //     show: true,
                //     type: 'slider',
                //     start: 30,
                //     end: 100
                // },
                xAxis : [{type : 'category',data : []}],
                yAxis : [{type : 'value',name : _conf.yAxisName}],
                series : []
            }
        };

        if (_conf.legendWidth) {
            settings.option.legend.width = _conf.legendWidth;
        }
        if(!_conf.xAxisData || !_conf.xAxisData.length) return;
        if(!_conf.legendData || !_conf.legendData.length) return;
        if(!_conf.data) return;

        for(var i = 0; i < _conf.xAxisData.length; i++) {
            settings.option.xAxis[0].data.push(_conf.xAxisData[i]);
        }
        for(var i = 0; i < _conf.legendData.length; i++) {
            settings.option.legend.data.push(_conf.legendData[i]);
        }
        for(attr in _conf.data) {
            settings.option.series.push({
                name : attr,
                type : "bar",
                stack: '总量',
                label: {
                    normal: {
                        show: _conf.seriesShow,
                        position: 'insideRight'
                    }
                },
                data : _conf.data[attr]
            });
        }
        myChart.setOption(settings.option);
        myChart.hideLoading();
    }
});