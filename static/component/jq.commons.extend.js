$.fn.extend({
    /** 时间格式化 */
    dateFormat : function(fmt, date) {
        var o = {
            "M+" : date.getMonth()+1,
            "d+" : date.getDate(),
            "h+" : date.getHours(),
            "m+" : date.getMinutes(),
            "s+" : date.getSeconds(),
            "q+" : Math.floor((date.getMonth()+3)/3),
            "S"  : date.getMilliseconds()
        };
        if(/(y+)/.test(fmt))
            fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
        for(var k in o)
            if(new RegExp("("+ k +")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        return fmt;
    },
    /** 请求执行报表api */
    requestRtApi : function(conf) {
        var _conf = $.extend({
            url : "",
            data : {},
            userSessionId : "",
            handler : function(r) {return r;},
            tplId : "tpl",
            containerId : "container"
        }, conf);

        $.ajax({
            url : _conf.url,
            data : JSON.stringify(_conf.data),
            type : "post",
            contentType : "application/json;charset=UTF-8",
            processData : false,
            dataType : "json",
            beforeSend : function(request) {
                request.setRequestHeader("User-SessionID", _conf.userSessionId);
            },
            success : function(response) {
                $("#" + _conf.containerId).append(juicer(document.getElementById(_conf.tplId).innerHTML, _conf.handler(response)));
            }
        });
    },
    textChange : function(conf) {
        this.keyup(function(){
            var _conf = $.extend({
                url:"",
                type:"post",
                dataKey:"name",
                dataType:"json",
                changeInput:"",
                changeSlide:"",
                code:"",
                name:"",
                onclick:""
            }, conf);
            var text = $(this).val();
            $(_conf.changeInput).val("");
            var dataJson = "{\"" + _conf.dataKey + "\":\"" + text + "\"}";
            $.ajax({
                url:_conf.url,
                type: _conf.type,
                data: $.parseJSON(dataJson),
                dataType: _conf.dataType,
                success: function (data) {
                    var body = data.body;
                    $(_conf.changeSlide).html(""); //删除原有数据
                    if (body != "null") {
                        for (var i = 0; i < body.length; i++) {
                            $(_conf.changeSlide).append('<div class="item" data-value="' + body[i][_conf.code] + '" onclick="'+_conf.onclick+'">' + body[i][_conf.code] + '-' + body[i][_conf.name] + '</div>');
                        }
                        $(_conf.changeSlide).slideDown();
                    }
                }
            });
        });

    },
    /** <select>改变时，下拉菜单更新 */
    selectChange: function (selectors, confJson) {
        var appendSelector = null;
        var initStr = "<option value=''>请选择</option>";
        if (Array.isArray(selectors)) {
            for (var i = 0; i < selectors.length; i++) {
                $(selectors[i]).html(initStr);
            }
            appendSelector = selectors[0];
        } else {
            $(selectors).html(initStr);
            appendSelector = selectors;
        }
        var selectCode = $(this).val();
        if (selectCode) {
            var mergeJson = $.extend({
                url: "",
                dataKey: "",
                type: "post",
                async: false,
                itemCode: "",
                itemName: ""
            }, confJson);
            var dataJson = "{\"" + mergeJson.dataKey + "\":\"" + selectCode + "\"}";
            $.ajax({
                url: mergeJson.url,
                data: $.parseJSON(dataJson),
                type: mergeJson.type,
                async: mergeJson.async,
                success: function (response) {
                    if (response && response.status === 200) {
                        var items = response.body;
                        var itemsStr = "";
                        for (var i = 0; i < items.length; i++) {
                            itemsStr = itemsStr + "<option value='" + items[i][mergeJson.itemCode] + "'>" + items[i][mergeJson.itemName] + "</option>";
                        }
                        $(appendSelector).append(itemsStr);
                    }
                }
            });
        }
    }
});