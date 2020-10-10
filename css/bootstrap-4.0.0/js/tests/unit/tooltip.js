$((function(){"use strict";QUnit.module("tooltip plugin"),QUnit.test("should be defined on jquery object",(function(t){t.expect(1),t.ok($(document.body).tooltip,"tooltip method is defined")})),QUnit.module("tooltip",{beforeEach:function(){$.fn.bootstrapTooltip=$.fn.tooltip.noConflict()},afterEach:function(){$.fn.tooltip=$.fn.bootstrapTooltip,delete $.fn.bootstrapTooltip,$(".tooltip").remove()}}),QUnit.test("should provide no conflict",(function(t){t.expect(1),t.strictEqual(typeof $.fn.tooltip,"undefined","tooltip was set back to undefined (org value)")})),QUnit.test("should throw explicit error on undefined method",(function(t){t.expect(1);var o=$("<div/>");o.bootstrapTooltip();try{o.bootstrapTooltip("noMethod")}catch(o){t.strictEqual(o.message,'No method named "noMethod"')}})),QUnit.test("should return jquery collection containing the element",(function(t){t.expect(2);var o=$("<div/>"),e=o.bootstrapTooltip();t.ok(e instanceof $,"returns jquery collection"),t.strictEqual(e[0],o[0],"collection contains element")})),QUnit.test("should expose default settings",(function(t){t.expect(1),t.ok($.fn.bootstrapTooltip.Constructor.Default,"defaults is defined")})),QUnit.test("should empty title attribute",(function(t){t.expect(1);var o=$('<a href="#" rel="tooltip" title="Another tooltip"/>').bootstrapTooltip();t.strictEqual(o.attr("title"),"","title attribute was emptied")})),QUnit.test("should add data attribute for referencing original title",(function(t){t.expect(1);var o=$('<a href="#" rel="tooltip" title="Another tooltip"/>').bootstrapTooltip();t.strictEqual(o.attr("data-original-title"),"Another tooltip","original title preserved in data attribute")})),QUnit.test("should add aria-describedby to the trigger on show",(function(t){t.expect(3);var o=$('<a href="#" rel="tooltip" title="Another tooltip"/>').bootstrapTooltip().appendTo("#qunit-fixture").bootstrapTooltip("show"),e=$(".tooltip").attr("id");t.strictEqual($("#"+e).length,1,"has a unique id"),t.strictEqual($(".tooltip").attr("aria-describedby"),o.attr("id"),"tooltip id and aria-describedby on trigger match"),t.ok(o[0].hasAttribute("aria-describedby"),"trigger has aria-describedby")})),QUnit.test("should remove aria-describedby from trigger on hide",(function(t){t.expect(2);var o=$('<a href="#" rel="tooltip" title="Another tooltip"/>').bootstrapTooltip().appendTo("#qunit-fixture");o.bootstrapTooltip("show"),t.ok(o[0].hasAttribute("aria-describedby"),"trigger has aria-describedby"),o.bootstrapTooltip("hide"),t.ok(!o[0].hasAttribute("aria-describedby"),"trigger does not have aria-describedby")})),QUnit.test("should assign a unique id tooltip element",(function(t){t.expect(2),$('<a href="#" rel="tooltip" title="Another tooltip"/>').appendTo("#qunit-fixture").bootstrapTooltip("show");var o=$(".tooltip").attr("id");t.strictEqual($("#"+o).length,1,"tooltip has unique id"),t.strictEqual(o.indexOf("tooltip"),0,"tooltip id has prefix")})),QUnit.test("should place tooltips relative to placement option",(function(t){t.expect(2);var o=$('<a href="#" rel="tooltip" title="Another tooltip"/>').appendTo("#qunit-fixture").bootstrapTooltip({placement:"bottom"});o.bootstrapTooltip("show"),t.ok($(".tooltip").is(".fade.bs-tooltip-bottom.show"),"has correct classes applied"),o.bootstrapTooltip("hide"),t.strictEqual(o.data("bs.tooltip").tip.parentNode,null,"tooltip removed")})),QUnit.test("should allow html entities",(function(t){t.expect(2);var o=$('<a href="#" rel="tooltip" title="&lt;b&gt;@fat&lt;/b&gt;"/>').appendTo("#qunit-fixture").bootstrapTooltip({html:!0});o.bootstrapTooltip("show"),t.notEqual($(".tooltip b").length,0,"b tag was inserted"),o.bootstrapTooltip("hide"),t.strictEqual(o.data("bs.tooltip").tip.parentNode,null,"tooltip removed")})),QUnit.test("should allow DOMElement title (html: false)",(function(t){t.expect(3);var o=document.createTextNode("<3 writing tests");$('<a href="#" rel="tooltip"/>').appendTo("#qunit-fixture").bootstrapTooltip({title:o}).bootstrapTooltip("show"),t.notEqual($(".tooltip").length,0,"tooltip inserted"),t.strictEqual($(".tooltip").text(),"<3 writing tests","title inserted"),t.ok(!$.contains($(".tooltip").get(0),o),"title node copied, not moved")})),QUnit.test("should allow DOMElement title (html: true)",(function(t){t.expect(3);var o=document.createTextNode("<3 writing tests");$('<a href="#" rel="tooltip"/>').appendTo("#qunit-fixture").bootstrapTooltip({html:!0,title:o}).bootstrapTooltip("show"),t.notEqual($(".tooltip").length,0,"tooltip inserted"),t.strictEqual($(".tooltip").text(),"<3 writing tests","title inserted"),t.ok($.contains($(".tooltip").get(0),o),"title node moved, not copied")})),QUnit.test("should respect custom classes",(function(t){t.expect(2);var o=$('<a href="#" rel="tooltip" title="Another tooltip"/>').appendTo("#qunit-fixture").bootstrapTooltip({template:'<div class="tooltip some-class"><div class="tooltip-arrow"/><div class="tooltip-inner"/></div>'});o.bootstrapTooltip("show"),t.ok($(".tooltip").hasClass("some-class"),"custom class is present"),o.bootstrapTooltip("hide"),t.strictEqual(o.data("bs.tooltip").tip.parentNode,null,"tooltip removed")})),QUnit.test("should fire show event",(function(t){t.expect(1);var o=t.async();$('<div title="tooltip title"/>').on("show.bs.tooltip",(function(){t.ok(!0,"show event fired"),o()})).bootstrapTooltip("show")})),QUnit.test("should throw an error when show is called on hidden elements",(function(t){t.expect(1);var o=t.async();try{$('<div title="tooltip title" style="display: none"/>').bootstrapTooltip("show")}catch(e){t.strictEqual(e.message,"Please use show on visible elements"),o()}})),QUnit.test("should fire inserted event",(function(t){t.expect(2);var o=t.async();$('<div title="tooltip title"/>').appendTo("#qunit-fixture").on("inserted.bs.tooltip",(function(){t.notEqual($(".tooltip").length,0,"tooltip was inserted"),t.ok(!0,"inserted event fired"),o()})).bootstrapTooltip("show")})),QUnit.test("should fire shown event",(function(t){t.expect(1);var o=t.async();$('<div title="tooltip title"></div>').appendTo("#qunit-fixture").on("shown.bs.tooltip",(function(){t.ok(!0,"shown was called"),o()})).bootstrapTooltip("show")})),QUnit.test("should not fire shown event when show was prevented",(function(t){t.expect(1);var o=t.async();$('<div title="tooltip title"/>').on("show.bs.tooltip",(function(e){e.preventDefault(),t.ok(!0,"show event fired"),o()})).on("shown.bs.tooltip",(function(){t.ok(!1,"shown event fired")})).bootstrapTooltip("show")})),QUnit.test("should fire hide event",(function(t){t.expect(1);var o=t.async();$('<div title="tooltip title"/>').appendTo("#qunit-fixture").on("shown.bs.tooltip",(function(){$(this).bootstrapTooltip("hide")})).on("hide.bs.tooltip",(function(){t.ok(!0,"hide event fired"),o()})).bootstrapTooltip("show")})),QUnit.test("should fire hidden event",(function(t){t.expect(1);var o=t.async();$('<div title="tooltip title"/>').appendTo("#qunit-fixture").on("shown.bs.tooltip",(function(){$(this).bootstrapTooltip("hide")})).on("hidden.bs.tooltip",(function(){t.ok(!0,"hidden event fired"),o()})).bootstrapTooltip("show")})),QUnit.test("should not fire hidden event when hide was prevented",(function(t){t.expect(1);var o=t.async();$('<div title="tooltip title"/>').appendTo("#qunit-fixture").on("shown.bs.tooltip",(function(){$(this).bootstrapTooltip("hide")})).on("hide.bs.tooltip",(function(e){e.preventDefault(),t.ok(!0,"hide event fired"),o()})).on("hidden.bs.tooltip",(function(){t.ok(!1,"hidden event fired")})).bootstrapTooltip("show")})),QUnit.test("should destroy tooltip",(function(t){t.expect(7);var o=$("<div/>").bootstrapTooltip().on("click.foo",(function(){}));t.ok(o.data("bs.tooltip"),"tooltip has data"),t.ok($._data(o[0],"events").mouseover&&$._data(o[0],"events").mouseout,"tooltip has hover events"),t.strictEqual($._data(o[0],"events").click[0].namespace,"foo","tooltip has extra click.foo event"),o.bootstrapTooltip("show"),o.bootstrapTooltip("dispose"),t.ok(!o.hasClass("show"),"tooltip is hidden"),t.ok(!$._data(o[0],"bs.tooltip"),"tooltip does not have data"),t.strictEqual($._data(o[0],"events").click[0].namespace,"foo","tooltip still has click.foo"),t.ok(!$._data(o[0],"events").mouseover&&!$._data(o[0],"events").mouseout,"tooltip does not have hover events")})),QUnit.test("should show tooltip when toggle is called",(function(t){t.expect(1),$('<a href="#" rel="tooltip" title="tooltip on toggle"/>').appendTo("#qunit-fixture").bootstrapTooltip({trigger:"manual"}).bootstrapTooltip("toggle"),t.ok($(".tooltip").is(".fade.show"),"tooltip is faded active")})),QUnit.test("should hide previously shown tooltip when toggle is called on tooltip",(function(t){t.expect(1),$('<a href="#" rel="tooltip" title="tooltip on toggle">@ResentedHook</a>').appendTo("#qunit-fixture").bootstrapTooltip({trigger:"manual"}).bootstrapTooltip("show"),$(".tooltip").bootstrapTooltip("toggle"),t.ok($(".tooltip").not(".fade.show"),"tooltip was faded out")})),QUnit.test("should place tooltips inside body when container is body",(function(t){t.expect(3);var o=$('<a href="#" rel="tooltip" title="Another tooltip"/>').appendTo("#qunit-fixture").bootstrapTooltip({container:"body"}).bootstrapTooltip("show");t.notEqual($("body > .tooltip").length,0,"tooltip is direct descendant of body"),t.strictEqual($("#qunit-fixture > .tooltip").length,0,"tooltip is not in parent"),o.bootstrapTooltip("hide"),t.strictEqual($("body > .tooltip").length,0,"tooltip was removed from dom")})),QUnit.test("should add position class before positioning so that position-specific styles are taken into account",(function(t){t.expect(2);var o=t.async(),e=$("<style>.bs-tooltip-right { white-space: nowrap; }.bs-tooltip-right .tooltip-inner { max-width: none; }</style>").appendTo("head"),i=$("<div/>").appendTo("#qunit-fixture");$('<a href="#" rel="tooltip" title="very very very very very very very very long tooltip in one line"/>').appendTo(i).bootstrapTooltip({placement:"right",trigger:"manual"}).on("inserted.bs.tooltip",(function(){var i=$($(this).data("bs.tooltip").tip);t.ok(i.hasClass("bs-tooltip-right")),t.ok(void 0===i.attr("style")),e.remove(),o()})).bootstrapTooltip("show")})),QUnit.test("should use title attribute for tooltip text",(function(t){t.expect(2);var o=$('<a href="#" rel="tooltip" title="Simple tooltip"/>').appendTo("#qunit-fixture").bootstrapTooltip();o.bootstrapTooltip("show"),t.strictEqual($(".tooltip").children(".tooltip-inner").text(),"Simple tooltip","title from title attribute is set"),o.bootstrapTooltip("hide"),t.strictEqual($(".tooltip").length,0,"tooltip removed from dom")})),QUnit.test("should prefer title attribute over title option",(function(t){t.expect(2);var o=$('<a href="#" rel="tooltip" title="Simple tooltip"/>').appendTo("#qunit-fixture").bootstrapTooltip({title:"This is a tooltip with some content"});o.bootstrapTooltip("show"),t.strictEqual($(".tooltip").children(".tooltip-inner").text(),"Simple tooltip","title is set from title attribute while preferred over title option"),o.bootstrapTooltip("hide"),t.strictEqual($(".tooltip").length,0,"tooltip removed from dom")})),QUnit.test("should use title option",(function(t){t.expect(2);var o=$('<a href="#" rel="tooltip"/>').appendTo("#qunit-fixture").bootstrapTooltip({title:"This is a tooltip with some content"});o.bootstrapTooltip("show"),t.strictEqual($(".tooltip").children(".tooltip-inner").text(),"This is a tooltip with some content","title from title option is set"),o.bootstrapTooltip("hide"),t.strictEqual($(".tooltip").length,0,"tooltip removed from dom")})),QUnit.test("should not error when trying to show an top-placed tooltip that has been removed from the dom",(function(t){t.expect(1);var o=!0,e=$('<a href="#" rel="tooltip" title="Another tooltip"/>').appendTo("#qunit-fixture").one("show.bs.tooltip",(function(){$(this).remove()})).bootstrapTooltip({placement:"top"});try{e.bootstrapTooltip("show")}catch(t){o=!1,console.log(t)}t.ok(o,".tooltip('show') should not throw an error if element no longer is in dom")})),QUnit.test("should place tooltip on top of element",(function(t){t.expect(1);var o=t.async();$('<div id="test"><p style="margin-top: 200px"><a href="#" title="very very very very very very very long tooltip">Hover me</a></p></div>').css({position:"absolute",bottom:0,left:0,textAlign:"right",width:300,height:300}).appendTo("#qunit-fixture").find("a").css("margin-top",200).bootstrapTooltip({placement:"top",animate:!1}).on("shown.bs.tooltip",(function(){var e=$($(this).data("bs.tooltip").tip);/iPhone|iPad|iPod/.test(navigator.userAgent)?t.ok(Math.round(e.offset().top+e.outerHeight())<=Math.round($(this).offset().top)):t.ok(Math.round(e.offset().top+e.outerHeight())>=Math.round($(this).offset().top)),o()})).bootstrapTooltip("show")})),QUnit.test("should show tooltip if leave event hasn't occurred before delay expires",(function(t){t.expect(2);var o=t.async(),e=$('<a href="#" rel="tooltip" title="Another tooltip"/>').appendTo("#qunit-fixture").bootstrapTooltip({delay:150});setTimeout((function(){t.ok(!$(".tooltip").is(".fade.show"),"100ms: tooltip is not faded active")}),100),setTimeout((function(){t.ok($(".tooltip").is(".fade.show"),"200ms: tooltip is faded active"),o()}),200),e.trigger("mouseenter")})),QUnit.test("should not show tooltip if leave event occurs before delay expires",(function(t){t.expect(2);var o=t.async(),e=$('<a href="#" rel="tooltip" title="Another tooltip"/>').appendTo("#qunit-fixture").bootstrapTooltip({delay:150});setTimeout((function(){t.ok(!$(".tooltip").is(".fade.show"),"100ms: tooltip not faded active"),e.trigger("mouseout")}),100),setTimeout((function(){t.ok(!$(".tooltip").is(".fade.show"),"200ms: tooltip not faded active"),o()}),200),e.trigger("mouseenter")})),QUnit.test("should not hide tooltip if leave event occurs and enter event occurs within the hide delay",(function(t){t.expect(3);var o=t.async(),e=$('<a href="#" rel="tooltip" title="Another tooltip"/>').appendTo("#qunit-fixture").bootstrapTooltip({delay:{show:0,hide:150}});setTimeout((function(){t.ok($(".tooltip").is(".fade.show"),"1ms: tooltip faded active"),e.trigger("mouseout"),setTimeout((function(){t.ok($(".tooltip").is(".fade.show"),"100ms: tooltip still faded active"),e.trigger("mouseenter")}),100),setTimeout((function(){t.ok($(".tooltip").is(".fade.show"),"200ms: tooltip still faded active"),o()}),200)}),0),e.trigger("mouseenter")})),QUnit.test("should not show tooltip if leave event occurs before delay expires",(function(t){t.expect(2);var o=t.async(),e=$('<a href="#" rel="tooltip" title="Another tooltip"/>').appendTo("#qunit-fixture").bootstrapTooltip({delay:150});setTimeout((function(){t.ok(!$(".tooltip").is(".fade.show"),"100ms: tooltip not faded active"),e.trigger("mouseout")}),100),setTimeout((function(){t.ok(!$(".tooltip").is(".fade.show"),"200ms: tooltip not faded active"),o()}),200),e.trigger("mouseenter")})),QUnit.test("should not show tooltip if leave event occurs before delay expires, even if hide delay is 0",(function(t){t.expect(2);var o=t.async(),e=$('<a href="#" rel="tooltip" title="Another tooltip"/>').appendTo("#qunit-fixture").bootstrapTooltip({delay:{show:150,hide:0}});setTimeout((function(){t.ok(!$(".tooltip").is(".fade.show"),"100ms: tooltip not faded active"),e.trigger("mouseout")}),100),setTimeout((function(){t.ok(!$(".tooltip").is(".fade.show"),"250ms: tooltip not faded active"),o()}),250),e.trigger("mouseenter")})),QUnit.test("should wait 200ms before hiding the tooltip",(function(t){t.expect(3);var o=t.async(),e=$('<a href="#" rel="tooltip" title="Another tooltip"/>').appendTo("#qunit-fixture").bootstrapTooltip({delay:{show:0,hide:150}});setTimeout((function(){t.ok($(e.data("bs.tooltip").tip).is(".fade.show"),"1ms: tooltip faded active"),e.trigger("mouseout"),setTimeout((function(){t.ok($(e.data("bs.tooltip").tip).is(".fade.show"),"100ms: tooltip still faded active")}),100),setTimeout((function(){t.ok(!$(e.data("bs.tooltip").tip).is(".show"),"200ms: tooltip removed"),o()}),200)}),0),e.trigger("mouseenter")})),QUnit.test("should not reload the tooltip on subsequent mouseenter events",(function(t){t.expect(1);var o=$('<span id="tt-outer" rel="tooltip" data-trigger="hover" data-placement="top">some text</span>').appendTo("#qunit-fixture");o.bootstrapTooltip({html:!0,animation:!1,trigger:"hover",delay:{show:0,hide:500},container:o,title:function(){var t=Util.getUID("tooltip");return'<p id="tt-content">'+t+"</p><p>"+t+"</p><p>"+t+"</p>"}}),$("#tt-outer").trigger("mouseenter");var e=$("#tt-content").text();$("#tt-content").trigger("mouseenter"),t.strictEqual(e,$("#tt-content").text())})),QUnit.test("should not reload the tooltip if the mouse leaves and re-enters before hiding",(function(t){t.expect(4);var o=$('<span id="tt-outer" rel="tooltip" data-trigger="hover" data-placement="top">some text</span>').appendTo("#qunit-fixture");o.bootstrapTooltip({html:!0,animation:!1,trigger:"hover",delay:{show:0,hide:500},title:function(){var t=Util.getUID("tooltip");return'<p id="tt-content">'+t+"</p><p>"+t+"</p><p>"+t+"</p>"}});var e=o.data("bs.tooltip");$("#tt-outer").trigger("mouseenter");var i=$("#tt-content").text();$("#tt-outer").trigger("mouseleave"),t.strictEqual(i,$("#tt-content").text()),t.ok("out"===e._hoverState,'the tooltip hoverState should be set to "out"'),$("#tt-outer").trigger("mouseenter"),t.ok("show"===e._hoverState,'the tooltip hoverState should be set to "show"'),t.strictEqual(i,$("#tt-content").text())})),QUnit.test("should do nothing when an attempt is made to hide an uninitialized tooltip",(function(t){t.expect(1);var o=$('<span data-toggle="tooltip" title="some tip">some text</span>').appendTo("#qunit-fixture").on("hidden.bs.tooltip shown.bs.tooltip",(function(){t.ok(!1,"should not fire any tooltip events")})).bootstrapTooltip("hide");t.strictEqual(typeof o.data("bs.tooltip"),"undefined","should not initialize the tooltip")})),QUnit.test("should not remove tooltip if multiple triggers are set and one is still active",(function(t){t.expect(41);var o=$("<button>Trigger</button>").appendTo("#qunit-fixture").bootstrapTooltip({trigger:"click hover focus",animation:!1}),e=o.data("bs.tooltip"),i=$(e.getTipElement());function n(){return i.hasClass("show")||"show"===e._hoverState}t.ok(!n()),$.each([["mouseenter","mouseleave"],["focusin","focusout"],["click","click"],["mouseenter","focusin","focusout","mouseleave"],["mouseenter","focusin","mouseleave","focusout"],["focusin","mouseenter","mouseleave","focusout"],["focusin","mouseenter","focusout","mouseleave"],["click","focusin","mouseenter","focusout","mouseleave","click"],["mouseenter","click","focusin","focusout","mouseleave","click"],["mouseenter","focusin","click","click","mouseleave","focusout"]],(function(e,i){for(var l=0,s=i.length;l<s;l++)o.trigger(i[l]),t.equal(l<s-1,n())}))})),QUnit.test("should show on first trigger after hide",(function(t){t.expect(3);var o=$('<a href="#" rel="tooltip" title="Test tooltip"/>').appendTo("#qunit-fixture").bootstrapTooltip({trigger:"click hover focus",animation:!1}),e=o.data("bs.tooltip"),i=$(e.getTipElement());function n(){return i.hasClass("show")||"show"===e._hoverState}o.trigger("click"),t.ok(n(),"tooltip is faded in"),o.bootstrapTooltip("hide"),t.ok(!n(),"tooltip was faded out"),o.trigger("click"),t.ok(n(),"tooltip is faded in again")})),QUnit.test("should hide tooltip when their containing modal is closed",(function(t){t.expect(1);var o=t.async();$('<div id="modal-test" class="modal"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-body"><a id="tooltipTest" href="#" data-toggle="tooltip" title="Some tooltip text!">Tooltip</a></div></div></div></div>').appendTo("#qunit-fixture"),$("#tooltipTest").bootstrapTooltip({trigger:"manuel"}).on("shown.bs.tooltip",(function(){$("#modal-test").modal("hide")})).on("hide.bs.tooltip",(function(){t.ok(!0,"tooltip hide"),o()})),$("#modal-test").on("shown.bs.modal",(function(){$("#tooltipTest").bootstrapTooltip("show")})).modal("show")})),QUnit.test("should reset tip classes when hidden event triggered",(function(t){t.expect(2);var o=t.async(),e=$('<a href="#" rel="tooltip" title="Test tooltip"/>').appendTo("#qunit-fixture").bootstrapTooltip("show").on("hidden.bs.tooltip",(function(){var i=e.data("bs.tooltip"),n=$(i.getTipElement());t.ok(n.hasClass("tooltip")),t.ok(n.hasClass("fade")),o()}));e.bootstrapTooltip("hide")})),QUnit.test("should convert number in title to string",(function(t){t.expect(1);var o=t.async(),e=$('<a href="#" rel="tooltip" title="7"/>').appendTo("#qunit-fixture").bootstrapTooltip("show").on("shown.bs.tooltip",(function(){var i=e.data("bs.tooltip"),n=$(i.getTipElement());t.strictEqual(n.children().text(),"7"),o()}));e.bootstrapTooltip("show")})),QUnit.test("tooltip should be shown right away after the call of disable/enable",(function(t){t.expect(2);var o=t.async(),e=$('<a href="#" rel="tooltip" data-trigger="click" title="Another tooltip"/>').appendTo("#qunit-fixture").bootstrapTooltip().on("shown.bs.tooltip",(function(){t.strictEqual($(".tooltip").hasClass("show"),!0),o()}));e.bootstrapTooltip("disable"),e.trigger($.Event("click")),setTimeout((function(){t.strictEqual(0===$(".tooltip").length,!0),e.bootstrapTooltip("enable"),e.trigger($.Event("click"))}),200)}))}));