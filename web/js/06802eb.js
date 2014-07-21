/*!
 * Bootstrap v3.0.3 (http://getbootstrap.com)
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 */
;if("undefined"==typeof jQuery){throw new Error("Bootstrap requires jQuery")}+function(d){function c(){var f=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var g in e){if(void 0!==f.style[g]){return{end:e[g]}}}}d.fn.emulateTransitionEnd=function(a){var h=!1,g=this;d(this).one(d.support.transition.end,function(){h=!0});var f=function(){h||d(g).trigger(d.support.transition.end)};return setTimeout(f,a),this},d(function(){d.support.transition=c()})}(jQuery),+function(f){var e='[data-dismiss="alert"]',h=function(a){f(a).on("click",e,this.close)};h.prototype.close=function(a){function l(){i.trigger("closed.bs.alert").remove()}var k=f(this),j=k.attr("data-target");j||(j=k.attr("href"),j=j&&j.replace(/.*(?=#[^\s]*$)/,""));var i=f(j);a&&a.preventDefault(),i.length||(i=k.hasClass("alert")?k:k.parent()),i.trigger(a=f.Event("close.bs.alert")),a.isDefaultPrevented()||(i.removeClass("in"),f.support.transition&&i.hasClass("fade")?i.one(f.support.transition.end,l).emulateTransitionEnd(150):l())};var g=f.fn.alert;f.fn.alert=function(a){return this.each(function(){var c=f(this),b=c.data("bs.alert");b||c.data("bs.alert",b=new h(this)),"string"==typeof a&&b[a].call(c)})},f.fn.alert.Constructor=h,f.fn.alert.noConflict=function(){return f.fn.alert=g,this},f(document).on("click.bs.alert.data-api",e,h.prototype.close)}(jQuery),+function(e){var d=function(b,a){this.$element=e(b),this.options=e.extend({},d.DEFAULTS,a)};d.DEFAULTS={loadingText:"loading..."},d.prototype.setState=function(h){var g="disabled",k=this.$element,j=k.is("input")?"val":"html",i=k.data();h+="Text",i.resetText||k.data("resetText",k[j]()),k[j](i[h]||this.options[h]),setTimeout(function(){"loadingText"==h?k.addClass(g).attr(g,g):k.removeClass(g).removeAttr(g)},0)},d.prototype.toggle=function(){var h=this.$element.closest('[data-toggle="buttons"]'),g=!0;if(h.length){var i=this.$element.find("input");"radio"===i.prop("type")&&(i.prop("checked")&&this.$element.hasClass("active")?g=!1:h.find(".active").removeClass("active")),g&&i.prop("checked",!this.$element.hasClass("active")).trigger("change")}g&&this.$element.toggleClass("active")};var f=e.fn.button;e.fn.button=function(a){return this.each(function(){var g=e(this),c=g.data("bs.button"),b="object"==typeof a&&a;c||g.data("bs.button",c=new d(this,b)),"toggle"==a?c.toggle():a&&c.setState(a)})},e.fn.button.Constructor=d,e.fn.button.noConflict=function(){return e.fn.button=f,this},e(document).on("click.bs.button.data-api","[data-toggle^=button]",function(a){var g=e(a.target);g.hasClass("btn")||(g=g.closest(".btn")),g.button("toggle"),a.preventDefault()})}(jQuery),+function(e){var d=function(a,g){this.$element=e(a),this.$indicators=this.$element.find(".carousel-indicators"),this.options=g,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",e.proxy(this.pause,this)).on("mouseleave",e.proxy(this.cycle,this))};d.DEFAULTS={interval:5000,pause:"hover",wrap:!0},d.prototype.cycle=function(a){return a||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},d.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},d.prototype.to=function(a){var h=this,g=this.getActiveIndex();return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){h.to(a)}):g==a?this.pause().cycle():this.slide(a>g?"next":"prev",e(this.$items[a]))},d.prototype.pause=function(a){return a||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition.end&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},d.prototype.next=function(){return this.sliding?void 0:this.slide("next")},d.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},d.prototype.slide=function(r,q){var p=this.$element.find(".item.active"),o=q||p[r](),n=this.interval,m="next"==r?"left":"right",l="next"==r?"first":"last",k=this;if(!o.length){if(!this.options.wrap){return}o=this.$element.find(".item")[l]()}this.sliding=!0,n&&this.pause();var a=e.Event("slide.bs.carousel",{relatedTarget:o[0],direction:m});if(!o.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var c=e(k.$indicators.children()[k.getActiveIndex()]);c&&c.addClass("active")})),e.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(a),a.isDefaultPrevented()){return}o.addClass(r),o[0].offsetWidth,p.addClass(m),o.addClass(m),p.one(e.support.transition.end,function(){o.removeClass([r,m].join(" ")).addClass("active"),p.removeClass(["active",m].join(" ")),k.sliding=!1,setTimeout(function(){k.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(a),a.isDefaultPrevented()){return}p.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")}return n&&this.cycle(),this}};var f=e.fn.carousel;e.fn.carousel=function(a){return this.each(function(){var i=e(this),h=i.data("bs.carousel"),c=e.extend({},d.DEFAULTS,i.data(),"object"==typeof a&&a),b="string"==typeof a?a:c.slide;h||i.data("bs.carousel",h=new d(this,c)),"number"==typeof a?h.to(a):b?h[b]():c.interval&&h.pause().cycle()})},e.fn.carousel.Constructor=d,e.fn.carousel.noConflict=function(){return e.fn.carousel=f,this},e(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(a){var l,k=e(this),j=e(k.attr("data-target")||(l=k.attr("href"))&&l.replace(/.*(?=#[^\s]+$)/,"")),i=e.extend({},j.data(),k.data()),h=k.attr("data-slide-to");h&&(i.interval=!1),j.carousel(i),(h=k.attr("data-slide-to"))&&j.data("bs.carousel").to(h),a.preventDefault()}),e(window).on("load",function(){e('[data-ride="carousel"]').each(function(){var a=e(this);a.carousel(a.data())})})}(jQuery),+function(e){var d=function(b,a){this.$element=e(b),this.options=e.extend({},d.DEFAULTS,a),this.transitioning=null,this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var b=this.$element.hasClass("width");return b?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var a=e.Event("show.bs.collapse");if(this.$element.trigger(a),!a.isDefaultPrevented()){var l=this.$parent&&this.$parent.find("> .panel > .in");if(l&&l.length){var k=l.data("bs.collapse");if(k&&k.transitioning){return}l.collapse("hide"),k||l.data("bs.collapse",null)}var j=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[j](0),this.transitioning=1;var i=function(){this.$element.removeClass("collapsing").addClass("in")[j]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!e.support.transition){return i.call(this)}var h=e.camelCase(["scroll",j].join("-"));this.$element.one(e.support.transition.end,e.proxy(i,this)).emulateTransitionEnd(350)[j](this.$element[0][h])}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var a=e.Event("hide.bs.collapse");if(this.$element.trigger(a),!a.isDefaultPrevented()){var h=this.dimension();this.$element[h](this.$element[h]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var g=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return e.support.transition?(this.$element[h](0).one(e.support.transition.end,e.proxy(g,this)).emulateTransitionEnd(350),void 0):g.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var f=e.fn.collapse;e.fn.collapse=function(a){return this.each(function(){var g=e(this),c=g.data("bs.collapse"),b=e.extend({},d.DEFAULTS,g.data(),"object"==typeof a&&a);c||g.data("bs.collapse",c=new d(this,b)),"string"==typeof a&&c[a]()})},e.fn.collapse.Constructor=d,e.fn.collapse.noConflict=function(){return e.fn.collapse=f,this},e(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(r){var q,p=e(this),o=p.attr("data-target")||r.preventDefault()||(q=p.attr("href"))&&q.replace(/.*(?=#[^\s]+$)/,""),n=e(o),m=n.data("bs.collapse"),l=m?"toggle":p.data(),k=p.attr("data-parent"),a=k&&e(k);m&&m.transitioning||(a&&a.find('[data-toggle=collapse][data-parent="'+k+'"]').not(p).addClass("collapsed"),p[n.hasClass("in")?"addClass":"removeClass"]("collapsed")),n.collapse(l)})}(jQuery),+function(i){function h(){i(m).remove(),i(l).each(function(a){var c=n(i(this));c.hasClass("open")&&(c.trigger(a=i.Event("hide.bs.dropdown")),a.isDefaultPrevented()||c.removeClass("open").trigger("hidden.bs.dropdown"))})}function n(a){var f=a.attr("data-target");f||(f=a.attr("href"),f=f&&/#/.test(f)&&f.replace(/.*(?=#[^\s]*$)/,""));var e=f&&i(f);return e&&e.length?e:a.parent()}var m=".dropdown-backdrop",l="[data-toggle=dropdown]",k=function(a){i(a).on("click.bs.dropdown",this.toggle)};k.prototype.toggle=function(o){var c=i(this);if(!c.is(".disabled, :disabled")){var b=n(c),a=b.hasClass("open");if(h(),!a){if("ontouchstart" in document.documentElement&&!b.closest(".navbar-nav").length&&i('<div class="dropdown-backdrop"/>').insertAfter(i(this)).on("click",h),b.trigger(o=i.Event("show.bs.dropdown")),o.isDefaultPrevented()){return}b.toggleClass("open").trigger("shown.bs.dropdown"),c.focus()}return !1}},k.prototype.keydown=function(a){if(/(38|40|27)/.test(a.keyCode)){var q=i(this);if(a.preventDefault(),a.stopPropagation(),!q.is(".disabled, :disabled")){var p=n(q),o=p.hasClass("open");if(!o||o&&27==a.keyCode){return 27==a.which&&p.find(l).focus(),q.click()}var e=i("[role=menu] li:not(.divider):visible a",p);if(e.length){var c=e.index(e.filter(":focus"));38==a.keyCode&&c>0&&c--,40==a.keyCode&&c<e.length-1&&c++,~c||(c=0),e.eq(c).focus()}}}};var j=i.fn.dropdown;i.fn.dropdown=function(a){return this.each(function(){var e=i(this),b=e.data("bs.dropdown");b||e.data("bs.dropdown",b=new k(this)),"string"==typeof a&&b[a].call(e)})},i.fn.dropdown.Constructor=k,i.fn.dropdown.noConflict=function(){return i.fn.dropdown=j,this},i(document).on("click.bs.dropdown.data-api",h).on("click.bs.dropdown.data-api",".dropdown form",function(b){b.stopPropagation()}).on("click.bs.dropdown.data-api",l,k.prototype.toggle).on("keydown.bs.dropdown.data-api",l+", [role=menu]",k.prototype.keydown)}(jQuery),+function(e){var d=function(a,g){this.options=g,this.$element=e(a),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};d.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},d.prototype.toggle=function(b){return this[this.isShown?"hide":"show"](b)},d.prototype.show=function(a){var h=this,g=e.Event("show.bs.modal",{relatedTarget:a});this.$element.trigger(g),this.isShown||g.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',e.proxy(this.hide,this)),this.backdrop(function(){var c=e.support.transition&&h.$element.hasClass("fade");h.$element.parent().length||h.$element.appendTo(document.body),h.$element.show(),c&&h.$element[0].offsetWidth,h.$element.addClass("in").attr("aria-hidden",!1),h.enforceFocus();var b=e.Event("shown.bs.modal",{relatedTarget:a});c?h.$element.find(".modal-dialog").one(e.support.transition.end,function(){h.$element.focus().trigger(b)}).emulateTransitionEnd(300):h.$element.focus().trigger(b)}))},d.prototype.hide=function(a){a&&a.preventDefault(),a=e.Event("hide.bs.modal"),this.$element.trigger(a),this.isShown&&!a.isDefaultPrevented()&&(this.isShown=!1,this.escape(),e(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),e.support.transition&&this.$element.hasClass("fade")?this.$element.one(e.support.transition.end,e.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},d.prototype.enforceFocus=function(){e(document).off("focusin.bs.modal").on("focusin.bs.modal",e.proxy(function(b){this.$element[0]===b.target||this.$element.has(b.target).length||this.$element.focus()},this))},d.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",e.proxy(function(b){27==b.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},d.prototype.hideModal=function(){var b=this;this.$element.hide(),this.backdrop(function(){b.removeBackdrop(),b.$element.trigger("hidden.bs.modal")})},d.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},d.prototype.backdrop=function(a){var h=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var g=e.support.transition&&h;if(this.$backdrop=e('<div class="modal-backdrop '+h+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",e.proxy(function(b){b.target===b.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),g&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!a){return}g?this.$backdrop.one(e.support.transition.end,a).emulateTransitionEnd(150):a()}else{!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,a).emulateTransitionEnd(150):a()):a&&a()}};var f=e.fn.modal;e.fn.modal=function(b,a){return this.each(function(){var i=e(this),h=i.data("bs.modal"),c=e.extend({},d.DEFAULTS,i.data(),"object"==typeof b&&b);h||i.data("bs.modal",h=new d(this,c)),"string"==typeof b?h[b](a):c.show&&h.show(a)})},e.fn.modal.Constructor=d,e.fn.modal.noConflict=function(){return e.fn.modal=f,this},e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(a){var j=e(this),i=j.attr("href"),h=e(j.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),g=h.data("modal")?"toggle":e.extend({remote:!/#/.test(i)&&i},h.data(),j.data());a.preventDefault(),h.modal(g,this).one("hide",function(){j.is(":visible")&&j.focus()})}),e(document).on("show.bs.modal",".modal",function(){e(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){e(document.body).removeClass("modal-open")})}(jQuery),+function(e){var d=function(g,c){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",g,c)};d.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},d.prototype.init=function(a,p,o){this.enabled=!0,this.type=a,this.$element=e(p),this.options=this.getOptions(o);for(var n=this.options.trigger.split(" "),m=n.length;m--;){var l=n[m];if("click"==l){this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this))}else{if("manual"!=l){var k="hover"==l?"mouseenter":"focus",j="hover"==l?"mouseleave":"blur";this.$element.on(k+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(j+"."+this.type,this.options.selector,e.proxy(this.leave,this))}}}this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},d.prototype.getDefaults=function(){return d.DEFAULTS},d.prototype.getOptions=function(a){return a=e.extend({},this.getDefaults(),this.$element.data(),a),a.delay&&"number"==typeof a.delay&&(a.delay={show:a.delay,hide:a.delay}),a},d.prototype.getDelegateOptions=function(){var a={},g=this.getDefaults();return this._options&&e.each(this._options,function(b,c){g[b]!=c&&(a[b]=c)}),a},d.prototype.enter=function(a){var g=a instanceof this.constructor?a:e(a.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(g.timeout),g.hoverState="in",g.options.delay&&g.options.delay.show?(g.timeout=setTimeout(function(){"in"==g.hoverState&&g.show()},g.options.delay.show),void 0):g.show()},d.prototype.leave=function(a){var g=a instanceof this.constructor?a:e(a.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(g.timeout),g.hoverState="out",g.options.delay&&g.options.delay.hide?(g.timeout=setTimeout(function(){"out"==g.hoverState&&g.hide()},g.options.delay.hide),void 0):g.hide()},d.prototype.show=function(){var D=e.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(D),D.isDefaultPrevented()){return}var C=this.tip();this.setContent(),this.options.animation&&C.addClass("fade");var B="function"==typeof this.options.placement?this.options.placement.call(this,C[0],this.$element[0]):this.options.placement,A=/\s?auto?\s?/i,z=A.test(B);z&&(B=B.replace(A,"")||"top"),C.detach().css({top:0,left:0,display:"block"}).addClass(B),this.options.container?C.appendTo(this.options.container):C.insertAfter(this.$element);var y=this.getPosition(),x=C[0].offsetWidth,w=C[0].offsetHeight;if(z){var v=this.$element.parent(),u=B,t=document.documentElement.scrollTop||document.body.scrollTop,s="body"==this.options.container?window.innerWidth:v.outerWidth(),r="body"==this.options.container?window.innerHeight:v.outerHeight(),q="body"==this.options.container?0:v.offset().left;B="bottom"==B&&y.top+y.height+w-t>r?"top":"top"==B&&y.top-t-w<0?"bottom":"right"==B&&y.right+x>s?"left":"left"==B&&y.left-x<q?"right":B,C.removeClass(u).addClass(B)}var a=this.getCalculatedOffset(B,y,x,w);this.applyPlacement(a,B),this.$element.trigger("shown.bs."+this.type)}},d.prototype.applyPlacement=function(v,u){var t,s=this.tip(),r=s[0].offsetWidth,q=s[0].offsetHeight,p=parseInt(s.css("margin-top"),10),o=parseInt(s.css("margin-left"),10);isNaN(p)&&(p=0),isNaN(o)&&(o=0),v.top=v.top+p,v.left=v.left+o,s.offset(v).addClass("in");var n=s[0].offsetWidth,m=s[0].offsetHeight;if("top"==u&&m!=q&&(t=!0,v.top=v.top+q-m),/bottom|top/.test(u)){var l=0;v.left<0&&(l=-2*v.left,v.left=0,s.offset(v),n=s[0].offsetWidth,m=s[0].offsetHeight),this.replaceArrow(l-r+n,n,"left")}else{this.replaceArrow(m-q,m,"top")}t&&s.offset(v)},d.prototype.replaceArrow=function(h,g,i){this.arrow().css(i,h?50*(1-h/g)+"%":"")},d.prototype.setContent=function(){var g=this.tip(),c=this.getTitle();g.find(".tooltip-inner")[this.options.html?"html":"text"](c),g.removeClass("fade in top bottom left right")},d.prototype.hide=function(){function a(){"in"!=i.hoverState&&h.detach()}var i=this,h=this.tip(),g=e.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(h.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?h.one(e.support.transition.end,a).emulateTransitionEnd(150):a(),this.$element.trigger("hidden.bs."+this.type),this)},d.prototype.fixTitle=function(){var b=this.$element;(b.attr("title")||"string"!=typeof b.attr("data-original-title"))&&b.attr("data-original-title",b.attr("title")||"").attr("title","")},d.prototype.hasContent=function(){return this.getTitle()},d.prototype.getPosition=function(){var a=this.$element[0];return e.extend({},"function"==typeof a.getBoundingClientRect?a.getBoundingClientRect():{width:a.offsetWidth,height:a.offsetHeight},this.$element.offset())},d.prototype.getCalculatedOffset=function(h,g,j,i){return"bottom"==h?{top:g.top+g.height,left:g.left+g.width/2-j/2}:"top"==h?{top:g.top-i,left:g.left+g.width/2-j/2}:"left"==h?{top:g.top+g.height/2-i/2,left:g.left-j}:{top:g.top+g.height/2-i/2,left:g.left+g.width}},d.prototype.getTitle=function(){var h,g=this.$element,i=this.options;return h=g.attr("data-original-title")||("function"==typeof i.title?i.title.call(g[0]):i.title)},d.prototype.tip=function(){return this.$tip=this.$tip||e(this.options.template)},d.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},d.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},d.prototype.enable=function(){this.enabled=!0},d.prototype.disable=function(){this.enabled=!1},d.prototype.toggleEnabled=function(){this.enabled=!this.enabled},d.prototype.toggle=function(a){var g=a?e(a.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;g.tip().hasClass("in")?g.leave(g):g.enter(g)},d.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var f=e.fn.tooltip;e.fn.tooltip=function(a){return this.each(function(){var g=e(this),c=g.data("bs.tooltip"),b="object"==typeof a&&a;c||g.data("bs.tooltip",c=new d(this,b)),"string"==typeof a&&c[a]()})},e.fn.tooltip.Constructor=d,e.fn.tooltip.noConflict=function(){return e.fn.tooltip=f,this}}(jQuery),+function(e){var d=function(g,c){this.init("popover",g,c)};if(!e.fn.tooltip){throw new Error("Popover requires tooltip.js")}d.DEFAULTS=e.extend({},e.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),d.prototype=e.extend({},e.fn.tooltip.Constructor.prototype),d.prototype.constructor=d,d.prototype.getDefaults=function(){return d.DEFAULTS},d.prototype.setContent=function(){var h=this.tip(),g=this.getTitle(),i=this.getContent();h.find(".popover-title")[this.options.html?"html":"text"](g),h.find(".popover-content")[this.options.html?"html":"text"](i),h.removeClass("fade top bottom left right in"),h.find(".popover-title").html()||h.find(".popover-title").hide()},d.prototype.hasContent=function(){return this.getTitle()||this.getContent()},d.prototype.getContent=function(){var g=this.$element,c=this.options;return g.attr("data-content")||("function"==typeof c.content?c.content.call(g[0]):c.content)},d.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},d.prototype.tip=function(){return this.$tip||(this.$tip=e(this.options.template)),this.$tip};var f=e.fn.popover;e.fn.popover=function(a){return this.each(function(){var g=e(this),c=g.data("bs.popover"),b="object"==typeof a&&a;c||g.data("bs.popover",c=new d(this,b)),"string"==typeof a&&c[a]()})},e.fn.popover.Constructor=d,e.fn.popover.noConflict=function(){return e.fn.popover=f,this}}(jQuery),+function(e){function d(h,g){var b,a=e.proxy(this.process,this);this.$element=e(h).is("body")?e(window):e(h),this.$body=e("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",a),this.options=e.extend({},d.DEFAULTS,g),this.selector=(this.options.target||(b=e(h).attr("href"))&&b.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=e([]),this.targets=e([]),this.activeTarget=null,this.refresh(),this.process()}d.DEFAULTS={offset:10},d.prototype.refresh=function(){var a=this.$element[0]==window?"offset":"position";this.offsets=e([]),this.targets=e([]);var g=this;this.$body.find(this.selector).map(function(){var h=e(this),c=h.data("target")||h.attr("href"),b=/^#\w/.test(c)&&e(c);return b&&b.length&&[[b[a]().top+(!e.isWindow(g.$scrollElement.get(0))&&g.$scrollElement.scrollTop()),c]]||null}).sort(function(h,c){return h[0]-c[0]}).each(function(){g.offsets.push(this[0]),g.targets.push(this[1])})},d.prototype.process=function(){var i,h=this.$scrollElement.scrollTop()+this.options.offset,n=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,m=n-this.$scrollElement.height(),l=this.offsets,k=this.targets,j=this.activeTarget;if(h>=m){return j!=(i=k.last()[0])&&this.activate(i)}for(i=l.length;i--;){j!=k[i]&&h>=l[i]&&(!l[i+1]||h<=l[i+1])&&this.activate(k[i])}},d.prototype.activate=function(a){this.activeTarget=a,e(this.selector).parents(".active").removeClass("active");var h=this.selector+'[data-target="'+a+'"],'+this.selector+'[href="'+a+'"]',g=e(h).parents("li").addClass("active");g.parent(".dropdown-menu").length&&(g=g.closest("li.dropdown").addClass("active")),g.trigger("activate.bs.scrollspy")};var f=e.fn.scrollspy;e.fn.scrollspy=function(a){return this.each(function(){var g=e(this),c=g.data("bs.scrollspy"),b="object"==typeof a&&a;c||g.data("bs.scrollspy",c=new d(this,b)),"string"==typeof a&&c[a]()})},e.fn.scrollspy.Constructor=d,e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=f,this},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var a=e(this);a.scrollspy(a.data())})})}(jQuery),+function(e){var d=function(a){this.element=e(a)};d.prototype.show=function(){var a=this.element,l=a.closest("ul:not(.dropdown-menu)"),k=a.data("target");if(k||(k=a.attr("href"),k=k&&k.replace(/.*(?=#[^\s]*$)/,"")),!a.parent("li").hasClass("active")){var j=l.find(".active:last a")[0],i=e.Event("show.bs.tab",{relatedTarget:j});if(a.trigger(i),!i.isDefaultPrevented()){var h=e(k);this.activate(a.parent("li"),l),this.activate(h,h.parent(),function(){a.trigger({type:"shown.bs.tab",relatedTarget:j})})}}},d.prototype.activate=function(a,l,k){function j(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),a.addClass("active"),h?(a[0].offsetWidth,a.addClass("in")):a.removeClass("fade"),a.parent(".dropdown-menu")&&a.closest("li.dropdown").addClass("active"),k&&k()}var i=l.find("> .active"),h=k&&e.support.transition&&i.hasClass("fade");h?i.one(e.support.transition.end,j).emulateTransitionEnd(150):j(),i.removeClass("in")};var f=e.fn.tab;e.fn.tab=function(a){return this.each(function(){var c=e(this),b=c.data("bs.tab");b||c.data("bs.tab",b=new d(this)),"string"==typeof a&&b[a]()})},e.fn.tab.Constructor=d,e.fn.tab.noConflict=function(){return e.fn.tab=f,this},e(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(a){a.preventDefault(),e(this).tab("show")})}(jQuery),+function(e){var d=function(b,a){this.options=e.extend({},d.DEFAULTS,a),this.$window=e(window).on("scroll.bs.affix.data-api",e.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",e.proxy(this.checkPositionWithEventLoop,this)),this.$element=e(b),this.affixed=this.unpin=null,this.checkPosition()};d.RESET="affix affix-top affix-bottom",d.DEFAULTS={offset:0},d.prototype.checkPositionWithEventLoop=function(){setTimeout(e.proxy(this.checkPosition,this),1)},d.prototype.checkPosition=function(){if(this.$element.is(":visible")){var n=e(document).height(),m=this.$window.scrollTop(),l=this.$element.offset(),k=this.options.offset,j=k.top,b=k.bottom;"object"!=typeof k&&(b=j=k),"function"==typeof j&&(j=k.top()),"function"==typeof b&&(b=k.bottom());var a=null!=this.unpin&&m+this.unpin<=l.top?!1:null!=b&&l.top+this.$element.height()>=n-b?"bottom":null!=j&&j>=m?"top":!1;this.affixed!==a&&(this.unpin&&this.$element.css("top",""),this.affixed=a,this.unpin="bottom"==a?l.top-m:null,this.$element.removeClass(d.RESET).addClass("affix"+(a?"-"+a:"")),"bottom"==a&&this.$element.offset({top:document.body.offsetHeight-b-this.$element.height()}))}};var f=e.fn.affix;e.fn.affix=function(a){return this.each(function(){var g=e(this),c=g.data("bs.affix"),b="object"==typeof a&&a;c||g.data("bs.affix",c=new d(this,b)),"string"==typeof a&&c[a]()})},e.fn.affix.Constructor=d,e.fn.affix.noConflict=function(){return e.fn.affix=f,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var a=e(this),g=a.data();g.offset=g.offset||{},g.offsetBottom&&(g.offset.bottom=g.offsetBottom),g.offsetTop&&(g.offset.top=g.offsetTop),a.affix(g)})})}(jQuery);