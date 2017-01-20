!function(t,e){"use strict";t.rails!==e&&t.error("jquery-ujs has already been loaded!");var n,i=t(document);t.rails=n={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",buttonClickSelector:"button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",disableSelector:"input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",requiredInputSelector:"input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",fileInputSelector:"input[name][type=file]:not([disabled])",linkDisableSelector:"a[data-disable-with], a[data-disable]",buttonDisableSelector:"button[data-remote][data-disable-with], button[data-remote][data-disable]",csrfToken:function(){return t("meta[name=csrf-token]").attr("content")},csrfParam:function(){return t("meta[name=csrf-param]").attr("content")},CSRFProtection:function(t){var e=n.csrfToken();e&&t.setRequestHeader("X-CSRF-Token",e)},refreshCSRFTokens:function(){t('form input[name="'+n.csrfParam()+'"]').val(n.csrfToken())},fire:function(e,n,i){var r=t.Event(n);return e.trigger(r,i),r.result!==!1},confirm:function(t){return confirm(t)},ajax:function(e){return t.ajax(e)},href:function(t){return t[0].href},isRemote:function(t){return t.data("remote")!==e&&t.data("remote")!==!1},handleRemote:function(i){var r,o,s,a,l,c;if(n.fire(i,"ajax:before")){if(a=i.data("with-credentials")||null,l=i.data("type")||t.ajaxSettings&&t.ajaxSettings.dataType,i.is("form")){r=i.data("ujs:submit-button-formmethod")||i.attr("method"),o=i.data("ujs:submit-button-formaction")||i.attr("action"),s=t(i[0]).serializeArray();var u=i.data("ujs:submit-button");u&&(s.push(u),i.data("ujs:submit-button",null)),i.data("ujs:submit-button-formmethod",null),i.data("ujs:submit-button-formaction",null)}else i.is(n.inputChangeSelector)?(r=i.data("method"),o=i.data("url"),s=i.serialize(),i.data("params")&&(s=s+"&"+i.data("params"))):i.is(n.buttonClickSelector)?(r=i.data("method")||"get",o=i.data("url"),s=i.serialize(),i.data("params")&&(s=s+"&"+i.data("params"))):(r=i.data("method"),o=n.href(i),s=i.data("params")||null);return c={type:r||"GET",data:s,dataType:l,beforeSend:function(t,r){return r.dataType===e&&t.setRequestHeader("accept","*/*;q=0.5, "+r.accepts.script),!!n.fire(i,"ajax:beforeSend",[t,r])&&void i.trigger("ajax:send",t)},success:function(t,e,n){i.trigger("ajax:success",[t,e,n])},complete:function(t,e){i.trigger("ajax:complete",[t,e])},error:function(t,e,n){i.trigger("ajax:error",[t,e,n])},crossDomain:n.isCrossDomain(o)},a&&(c.xhrFields={withCredentials:a}),o&&(c.url=o),n.ajax(c)}return!1},isCrossDomain:function(t){var e=document.createElement("a");e.href=location.href;var n=document.createElement("a");try{return n.href=t,n.href=n.href,!((!n.protocol||":"===n.protocol)&&!n.host||e.protocol+"//"+e.host==n.protocol+"//"+n.host)}catch(t){return!0}},handleMethod:function(i){var r=n.href(i),o=i.data("method"),s=i.attr("target"),a=n.csrfToken(),l=n.csrfParam(),c=t('<form method="post" action="'+r+'"></form>'),u='<input name="_method" value="'+o+'" type="hidden" />';l===e||a===e||n.isCrossDomain(r)||(u+='<input name="'+l+'" value="'+a+'" type="hidden" />'),s&&c.attr("target",s),c.hide().append(u).appendTo("body"),c.submit()},formElements:function(e,n){return e.is("form")?t(e[0].elements).filter(n):e.find(n)},disableFormElements:function(e){n.formElements(e,n.disableSelector).each(function(){n.disableFormElement(t(this))})},disableFormElement:function(t){var n,i;n=t.is("button")?"html":"val",i=t.data("disable-with"),i!==e&&(t.data("ujs:enable-with",t[n]()),t[n](i)),t.prop("disabled",!0),t.data("ujs:disabled",!0)},enableFormElements:function(e){n.formElements(e,n.enableSelector).each(function(){n.enableFormElement(t(this))})},enableFormElement:function(t){var n=t.is("button")?"html":"val";t.data("ujs:enable-with")!==e&&(t[n](t.data("ujs:enable-with")),t.removeData("ujs:enable-with")),t.prop("disabled",!1),t.removeData("ujs:disabled")},allowAction:function(t){var e,i=t.data("confirm"),r=!1;if(!i)return!0;if(n.fire(t,"confirm")){try{r=n.confirm(i)}catch(t){(console.error||console.log).call(console,t.stack||t)}e=n.fire(t,"confirm:complete",[r])}return r&&e},blankInputs:function(e,n,i){var r,o,s,a,l=t(),c=n||"input,textarea",u=e.find(c),h={};return u.each(function(){r=t(this),r.is("input[type=radio]")?(a=r.attr("name"),h[a]||(0===e.find('input[type=radio]:checked[name="'+a+'"]').length&&(s=e.find('input[type=radio][name="'+a+'"]'),l=l.add(s)),h[a]=a)):(o=r.is("input[type=checkbox],input[type=radio]")?r.is(":checked"):!!r.val(),o===i&&(l=l.add(r)))}),!!l.length&&l},nonBlankInputs:function(t,e){return n.blankInputs(t,e,!0)},stopEverything:function(e){return t(e.target).trigger("ujs:everythingStopped"),e.stopImmediatePropagation(),!1},disableElement:function(t){var i=t.data("disable-with");i!==e&&(t.data("ujs:enable-with",t.html()),t.html(i)),t.bind("click.railsDisable",function(t){return n.stopEverything(t)}),t.data("ujs:disabled",!0)},enableElement:function(t){t.data("ujs:enable-with")!==e&&(t.html(t.data("ujs:enable-with")),t.removeData("ujs:enable-with")),t.unbind("click.railsDisable"),t.removeData("ujs:disabled")}},n.fire(i,"rails:attachBindings")&&(t.ajaxPrefilter(function(t,e,i){t.crossDomain||n.CSRFProtection(i)}),t(window).on("pageshow.rails",function(){t(t.rails.enableSelector).each(function(){var e=t(this);e.data("ujs:disabled")&&t.rails.enableFormElement(e)}),t(t.rails.linkDisableSelector).each(function(){var e=t(this);e.data("ujs:disabled")&&t.rails.enableElement(e)})}),i.on("ajax:complete",n.linkDisableSelector,function(){n.enableElement(t(this))}),i.on("ajax:complete",n.buttonDisableSelector,function(){n.enableFormElement(t(this))}),i.on("click.rails",n.linkClickSelector,function(e){var i=t(this),r=i.data("method"),o=i.data("params"),s=e.metaKey||e.ctrlKey;if(!n.allowAction(i))return n.stopEverything(e);if(!s&&i.is(n.linkDisableSelector)&&n.disableElement(i),n.isRemote(i)){if(s&&(!r||"GET"===r)&&!o)return!0;var a=n.handleRemote(i);return a===!1?n.enableElement(i):a.fail(function(){n.enableElement(i)}),!1}return r?(n.handleMethod(i),!1):void 0}),i.on("click.rails",n.buttonClickSelector,function(e){var i=t(this);if(!n.allowAction(i)||!n.isRemote(i))return n.stopEverything(e);i.is(n.buttonDisableSelector)&&n.disableFormElement(i);var r=n.handleRemote(i);return r===!1?n.enableFormElement(i):r.fail(function(){n.enableFormElement(i)}),!1}),i.on("change.rails",n.inputChangeSelector,function(e){var i=t(this);return n.allowAction(i)&&n.isRemote(i)?(n.handleRemote(i),!1):n.stopEverything(e)}),i.on("submit.rails",n.formSubmitSelector,function(i){var r,o,s=t(this),a=n.isRemote(s);if(!n.allowAction(s))return n.stopEverything(i);if(s.attr("novalidate")===e)if(s.data("ujs:formnovalidate-button")===e){if(r=n.blankInputs(s,n.requiredInputSelector,!1),r&&n.fire(s,"ajax:aborted:required",[r]))return n.stopEverything(i)}else s.data("ujs:formnovalidate-button",e);if(a){if(o=n.nonBlankInputs(s,n.fileInputSelector)){setTimeout(function(){n.disableFormElements(s)},13);var l=n.fire(s,"ajax:aborted:file",[o]);return l||setTimeout(function(){n.enableFormElements(s)},13),l}return n.handleRemote(s),!1}setTimeout(function(){n.disableFormElements(s)},13)}),i.on("click.rails",n.formInputClickSelector,function(e){var i=t(this);if(!n.allowAction(i))return n.stopEverything(e);var r=i.attr("name"),o=r?{name:r,value:i.val()}:null,s=i.closest("form");0===s.length&&(s=t("#"+i.attr("form"))),s.data("ujs:submit-button",o),s.data("ujs:formnovalidate-button",i.attr("formnovalidate")),s.data("ujs:submit-button-formaction",i.attr("formaction")),s.data("ujs:submit-button-formmethod",i.attr("formmethod"))}),i.on("ajax:send.rails",n.formSubmitSelector,function(e){this===e.target&&n.disableFormElements(t(this))}),i.on("ajax:complete.rails",n.formSubmitSelector,function(e){this===e.target&&n.enableFormElements(t(this))}),t(function(){n.refreshCSRFTokens()}))}(jQuery);