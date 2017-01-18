!function(t){var e=function(e,i){e=t(e);var n=this,s=t.extend({},t.fn.bootstrapWizard.defaults,i),r=null,o=null;this.fixNavigationButtons=function(){if(r.length||(o.find("a:first").tab("show"),r=o.find("li:first")),t(s.previousSelector,e).toggleClass("disabled",n.firstIndex()>=n.currentIndex()),t(s.nextSelector,e).toggleClass("disabled",n.currentIndex()>=n.navigationLength()),t(s.nextSelector,e).unbind("click",n.next),t(s.previousSelector,e).unbind("click",n.previous),t(s.lastSelector,e).unbind("click",n.last),t(s.firstSelector,e).unbind("click",n.first),t(s.nextSelector,e).one("click",n.next),t(s.previousSelector,e).one("click",n.previous),t(s.lastSelector,e).one("click",n.last),t(s.firstSelector,e).one("click",n.first),s.onTabShow&&"function"==typeof s.onTabShow&&!1===s.onTabShow(r,o,n.currentIndex()))return!1},this.next=function(){return!(e.hasClass("last")||s.onNext&&"function"==typeof s.onNext&&!1===s.onNext(r,o,n.nextIndex()))&&($index=n.nextIndex(),void($index>n.navigationLength()||o.find("li:eq("+$index+") a").tab("show")))},this.previous=function(){return!(e.hasClass("first")||s.onPrevious&&"function"==typeof s.onPrevious&&!1===s.onPrevious(r,o,n.previousIndex()))&&($index=n.previousIndex(),void(0>$index||o.find("li:eq("+$index+") a").tab("show")))},this.first=function(){return!(s.onFirst&&"function"==typeof s.onFirst&&!1===s.onFirst(r,o,n.firstIndex())||e.hasClass("disabled"))&&void o.find("li:eq(0) a").tab("show")},this.last=function(){return!(s.onLast&&"function"==typeof s.onLast&&!1===s.onLast(r,o,n.lastIndex())||e.hasClass("disabled"))&&void o.find("li:eq("+n.navigationLength()+") a").tab("show")},this.currentIndex=function(){return o.find("li").index(r)},this.firstIndex=function(){return 0},this.lastIndex=function(){return n.navigationLength()},this.getIndex=function(t){return o.find("li").index(t)},this.nextIndex=function(){return o.find("li").index(r)+1},this.previousIndex=function(){return o.find("li").index(r)-1},this.navigationLength=function(){return o.find("li").length-1},this.activeTab=function(){return r},this.nextTab=function(){return o.find("li:eq("+(n.currentIndex()+1)+")").length?o.find("li:eq("+(n.currentIndex()+1)+")"):null},this.previousTab=function(){return 0>=n.currentIndex()?null:o.find("li:eq("+parseInt(n.currentIndex()-1)+")")},this.show=function(t){return e.find("li:eq("+t+") a").tab("show")},this.disable=function(t){o.find("li:eq("+t+")").addClass("disabled")},this.enable=function(t){o.find("li:eq("+t+")").removeClass("disabled")},this.hide=function(t){o.find("li:eq("+t+")").hide()},this.display=function(t){o.find("li:eq("+t+")").show()},this.remove=function(e){var i="undefined"!=typeof e[1]&&e[1];e=o.find("li:eq("+e[0]+")"),i&&(i=e.find("a").attr("href"),t(i).remove()),e.remove()},o=e.find("ul:first",e),r=o.find("li.active",e),o.hasClass(s.tabClass)||o.addClass(s.tabClass),s.onInit&&"function"==typeof s.onInit&&s.onInit(r,o,0),s.onShow&&"function"==typeof s.onShow&&s.onShow(r,o,n.nextIndex()),n.fixNavigationButtons(),t('a[data-toggle="tab"]',o).on("click",function(e){if(e=o.find("li").index(t(e.currentTarget).parent("li")),s.onTabClick&&"function"==typeof s.onTabClick&&!1===s.onTabClick(r,o,n.currentIndex(),e))return!1}),t('a[data-toggle="tab"]',o).on("shown",function(e){return $element=t(e.target).parent(),e=o.find("li").index($element),!($element.hasClass("disabled")||s.onTabChange&&"function"==typeof s.onTabChange&&!1===s.onTabChange(r,o,n.currentIndex(),e))&&(r=$element,void n.fixNavigationButtons())})};t.fn.bootstrapWizard=function(i){if("string"==typeof i){var n=Array.prototype.slice.call(arguments,1);return 1===n.length&&n.toString(),this.data("bootstrapWizard")[i](n)}return this.each(function(n){if(n=t(this),!n.data("bootstrapWizard")){var s=new e(n,i);n.data("bootstrapWizard",s)}})},t.fn.bootstrapWizard.defaults={tabClass:"nav nav-pills",nextSelector:".wizard li.next",previousSelector:".wizard li.previous",firstSelector:".wizard li.first",lastSelector:".wizard li.last",onShow:null,onInit:null,onNext:null,onPrevious:null,onLast:null,onFirst:null,onTabChange:null,onTabClick:null,onTabShow:null}}(jQuery);