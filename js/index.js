/**
 * @author yiczhao
 */
function hideBtn(_li,_btn){
    if(_li.length<5){
        _btn.hide();
    }
}
function scroll(height){
    $('body').stop().animate({'scrollTop':height-20},200)
}
function floor(_ul,_width){
    _ul.stop().animate({'left':_width},200)
}
function GetQueryString(n) {
    var url = window.location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            //就是这句的问题
            theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);
            //之前用了unescape()
            //才会出现乱码
        }
    }
    return theRequest[n];
}
$(document).on('click','.header-nav li',function(){
    var _class=$(this).data('class');
    if(!!_class){
        var _div=$('.'+_class);
        scroll(_div.offset().top);
    }
})
$(document).on('click','.floor-main .btn',function(){
    var _this=$(this),
        _type=_this.hasClass('btn-left')?0:1,
        _width=320,
        _ul=_this.siblings('.floor-lists'),
        _length=_ul.children('li').length,
        _nowleft=_ul.css('left').replace('px','')>>0;
    if(!_type){
        //左
        floor(_ul,_nowleft-_width);
        _this.siblings('.btn-right').show();
        var _index=-(_nowleft/_width);
        if(_length-_index-5 <=0){
            _this.hide();
        }
    }else{
        //右
        floor(_ul,_nowleft+_width);
        _this.siblings('.btn-left').show();
        var _index=_nowleft+_width;
        if(_index ==0){
            _this.hide();
        }
    }
})
$('.floor-lists').each(function(){
    hideBtn($(this).children('li'),$(this).siblings('.btn'));
})