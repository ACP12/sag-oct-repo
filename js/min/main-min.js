jQuery(document).ready(function($){var e=$("#cd-menu-trigger"),n=$(".cd-main-content"),s=$("header");e.on("click",function(i){i.preventDefault(),e.toggleClass("is-clicked"),s.toggleClass("lateral-menu-is-open"),n.toggleClass("lateral-menu-is-open").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){$("body").toggleClass("overflow-hidden")}),$("#cd-lateral-nav").toggleClass("lateral-menu-is-open"),$("html").hasClass("no-csstransitions")&&$("body").toggleClass("overflow-hidden")}),n.on("click",function(i){$(i.target).is("#cd-menu-trigger, #cd-menu-trigger span")||(e.removeClass("is-clicked"),s.removeClass("lateral-menu-is-open"),n.removeClass("lateral-menu-is-open").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){$("body").removeClass("overflow-hidden")}),$("#cd-lateral-nav").removeClass("lateral-menu-is-open"),$("html").hasClass("no-csstransitions")&&$("body").removeClass("overflow-hidden"))}),$(".item-has-children").children("a").on("click",function(e){e.preventDefault(),$(this).toggleClass("submenu-open").next(".sub-menu").slideToggle(106).end().parent(".item-has-children").siblings(".item-has-children").children("a").removeClass("submenu-open").next(".sub-menu").slideUp(106)})});