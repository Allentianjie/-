/**
 * Created by TJie on 2017/11/27.
 */

(function () {
    function jq(selector){
        var newJQ = {
            get: function (selector) {
                var myselector = selector.toString();
                var start = selector.slice(0, 1);
                if (start == "#") {
                    myselector = selector.slice(1, selector.length);
                    return document.getElementById(myselector);
                }
                if (start == ".") {
                    myselector = selector.slice(1, selector.length);
                    return document.getElementsByClassName(myselector);
                } else {
                    return document.getElementsByTagName(myselector);
                }
            },
            html: function (content) {
                var objArr=newJQ.get(selector);
                for(var i=0;i<objArr.length;i++){
                    objArr[i].innerHTML=content;
                }
            },
            css:function(obj){
                var objArr=newJQ.get(selector);
                if(typeof obj=="object"){
                    for(var i=0;i<objArr.length;i++){
                        for(var key in obj){
                            if(key=="color"){
                                objArr[i].style.color=obj[key];
                            }
                            if(key=="backgroudColor"){
                                objArr[i].style.backgroundColor=obj[key];
                            }
                            if(key=="height"){
                                objArr[i].style.height=obj[key];
                            }
                            if(key=="width"){
                                objArr[i].style.width=obj[key];
                            }
                        }
                    }
                }else{
                    for(var i=0;i<objArr.length;i++){
                        if(obj=="color"){
                            return objArr[i].style.color;
                            }
                            if(obj=="backgroudColor"){
                                return objArr[i].style.backgroundColor;
                            }
                            if(obj=="height"){
                                return objArr[i].style.height;
                            }
                            if(obj=="width"){
                                return  objArr[i].style.width;
                            }
                    }
                }

            }
        };
        return newJQ;
    }
    window.$ = jq;
    //return $=jq ;
})();