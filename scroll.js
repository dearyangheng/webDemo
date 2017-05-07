/*鼠标滚轮滚动方向判断，1秒内多次滚动只执行一次事件*/
var scrollIndex = 1;
var tur = 1;
function handle(delta) {
    if(scrollIndex === 1){
        if (delta <0){
            if(tur === 1){

                scrollDown(/*向下滚动执行方法*/);
                tur = 0;
            }else{
                setTimeout(reTur,1000);
            }
        }else{
            if(tur === 1){
                scrollUp(/*向上滚动执行方法*/);
                tur = 0;
            }else{
                setTimeout(reTur,1000);
            }
        } 
            scrollIndex = 0;
    }else{
        scrollIndex = 1;
    }
}
function reTur(){
    tur = 1;
}

/*********************************************************************/


function wheel(event){
    var delta = 0;
    if (!event) event = window.event;
    if (event.wheelDelta) {
        delta = event.wheelDelta/120; 
        if (window.opera) delta = -delta;
    } else if (event.detail) {
        delta = -event.detail/3;
    }
    if (delta)
    handle(delta);
}
if (window.addEventListener)
window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

