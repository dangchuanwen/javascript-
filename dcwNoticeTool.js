function _NoticeTool(id, duration = 2000) {
            var el = $('#' + id),
                height = el.children().css('height'),
                childNum = el.children().length;

            el.height = parseInt(height);
            el.order = 0;
            el.duration = 2000;
            el.noticeTool = _NoticeTool;
            el.mouseover(function(){
                clearInterval(el.moveTimer);
                clearInterval(el.moveTimer1);
            });
            el.mouseout(function(){
                el.moveTimer = setInterval(el.moveFun, duration);
            });
            el.moveFun = function(){
                if (el.order === childNum - 1) {
                    el.order = 0;
                    childNum = 2;
                    var removeElement = $(el.children()[0]).remove();
                    el.animate({
                        top: (parseInt(el.css('top')) + el.height) + 'px'
                    }, 0);
                    el.append(removeElement[0]);
                    removeElement = null;
                }
                el.moveTimer1 = setTimeout(() => {
                    el.animate({
                        top: (parseInt(el.css('top')) - el.height) + 'px'
                    });
                    el.order++;
                }, 10);
            }
            el.moveTimer = setInterval(el.moveFun, duration);
 }