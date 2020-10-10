$((function(){"use strict";QUnit.module("popover plugin"),QUnit.test("should be defined on jquery object",(function(o){o.expect(1),o.ok($(document.body).popover,"popover method is defined")})),QUnit.module("popover",{beforeEach:function(){$.fn.bootstrapPopover=$.fn.popover.noConflict()},afterEach:function(){$.fn.popover=$.fn.bootstrapPopover,delete $.fn.bootstrapPopover,$(".popover").remove()}}),QUnit.test("should provide no conflict",(function(o){o.expect(1),o.strictEqual(typeof $.fn.popover,"undefined","popover was set back to undefined (org value)")})),QUnit.test("should throw explicit error on undefined method",(function(o){o.expect(1);var t=$("<div/>");t.bootstrapPopover();try{t.bootstrapPopover("noMethod")}catch(t){o.strictEqual(t.message,'No method named "noMethod"')}})),QUnit.test("should return jquery collection containing the element",(function(o){o.expect(2);var t=$("<div/>"),e=t.bootstrapPopover();o.ok(e instanceof $,"returns jquery collection"),o.strictEqual(e[0],t[0],"collection contains element")})),QUnit.test("should render popover element",(function(o){o.expect(2);var t=o.async();$('<a href="#" title="mdo" data-content="https://twitter.com/mdo">@mdo</a>').appendTo("#qunit-fixture").on("shown.bs.popover",(function(){o.notEqual($(".popover").length,0,"popover was inserted"),$(this).bootstrapPopover("hide")})).on("hidden.bs.popover",(function(){o.strictEqual($(".popover").length,0,"popover removed"),t()})).bootstrapPopover("show")})),QUnit.test("should store popover instance in popover data object",(function(o){o.expect(1);var t=$('<a href="#" title="mdo" data-content="https://twitter.com/mdo">@mdo</a>').bootstrapPopover();o.ok(t.data("bs.popover"),"popover instance exists")})),QUnit.test("should store popover trigger in popover instance data object",(function(o){o.expect(1),$('<a href="#" title="ResentedHook">@ResentedHook</a>').appendTo("#qunit-fixture").bootstrapPopover().bootstrapPopover("show"),o.ok($(".popover").data("bs.popover"),"popover trigger stored in instance data")})),QUnit.test("should get title and content from options",(function(o){o.expect(4);var t=$('<a href="#">@fat</a>').appendTo("#qunit-fixture").bootstrapPopover({title:function(){return"@fat"},content:function(){return"loves writing tests （╯°□°）╯︵ ┻━┻"}});t.bootstrapPopover("show"),o.notEqual($(".popover").length,0,"popover was inserted"),o.strictEqual($(".popover .popover-header").text(),"@fat","title correctly inserted"),o.strictEqual($(".popover .popover-body").text(),"loves writing tests （╯°□°）╯︵ ┻━┻","content correctly inserted"),t.bootstrapPopover("hide"),o.strictEqual($(".popover").length,0,"popover was removed")})),QUnit.test("should allow DOMElement title and content (html: true)",(function(o){o.expect(5);var t=document.createTextNode("@glebm <3 writing tests"),e=$("<i>¯\\_(ツ)_/¯</i>").get(0);$('<a href="#" rel="tooltip"/>').appendTo("#qunit-fixture").bootstrapPopover({html:!0,title:t,content:e}).bootstrapPopover("show"),o.notEqual($(".popover").length,0,"popover inserted"),o.strictEqual($(".popover .popover-header").text(),"@glebm <3 writing tests","title inserted"),o.ok($.contains($(".popover").get(0),t),"title node moved, not copied"),o.strictEqual($(".popover .popover-body").html().toLowerCase(),"<i>¯\\_(ツ)_/¯</i>","content inserted"),o.ok($.contains($(".popover").get(0),e),"content node moved, not copied")})),QUnit.test("should allow DOMElement title and content (html: false)",(function(o){o.expect(5);var t=document.createTextNode("@glebm <3 writing tests"),e=$("<i>¯\\_(ツ)_/¯</i>").get(0);$('<a href="#" rel="tooltip"/>').appendTo("#qunit-fixture").bootstrapPopover({title:t,content:e}).bootstrapPopover("show"),o.notEqual($(".popover").length,0,"popover inserted"),o.strictEqual($(".popover .popover-header").text(),"@glebm <3 writing tests","title inserted"),o.ok(!$.contains($(".popover").get(0),t),"title node copied, not moved"),o.strictEqual($(".popover .popover-body").html(),"¯\\_(ツ)_/¯","content inserted"),o.ok(!$.contains($(".popover").get(0),e),"content node copied, not moved")})),QUnit.test("should not duplicate HTML object",(function(o){o.expect(6);var t=$("<div/>").html("loves writing tests （╯°□°）╯︵ ┻━┻"),e=$('<a href="#">@fat</a>').appendTo("#qunit-fixture").bootstrapPopover({html:!0,content:function(){return t}});e.bootstrapPopover("show"),o.notEqual($(".popover").length,0,"popover was inserted"),o.equal($(".popover .popover-body").html(),t[0].outerHTML,"content correctly inserted"),e.bootstrapPopover("hide"),o.strictEqual($(".popover").length,0,"popover was removed"),e.bootstrapPopover("show"),o.notEqual($(".popover").length,0,"popover was inserted"),o.equal($(".popover .popover-body").html(),t[0].outerHTML,"content correctly inserted"),e.bootstrapPopover("hide"),o.strictEqual($(".popover").length,0,"popover was removed")})),QUnit.test("should get title and content from attributes",(function(o){o.expect(4);var t=$('<a href="#" title="@mdo" data-content="loves data attributes (づ｡◕‿‿◕｡)づ ︵ ┻━┻" >@mdo</a>').appendTo("#qunit-fixture").bootstrapPopover().bootstrapPopover("show");o.notEqual($(".popover").length,0,"popover was inserted"),o.strictEqual($(".popover .popover-header").text(),"@mdo","title correctly inserted"),o.strictEqual($(".popover .popover-body").text(),"loves data attributes (づ｡◕‿‿◕｡)づ ︵ ┻━┻","content correctly inserted"),t.bootstrapPopover("hide"),o.strictEqual($(".popover").length,0,"popover was removed")})),QUnit.test("should get title and content from attributes ignoring options passed via js",(function(o){o.expect(4);var t=$('<a href="#" title="@mdo" data-content="loves data attributes (づ｡◕‿‿◕｡)づ ︵ ┻━┻" >@mdo</a>').appendTo("#qunit-fixture").bootstrapPopover({title:"ignored title option",content:"ignored content option"}).bootstrapPopover("show");o.notEqual($(".popover").length,0,"popover was inserted"),o.strictEqual($(".popover .popover-header").text(),"@mdo","title correctly inserted"),o.strictEqual($(".popover .popover-body").text(),"loves data attributes (づ｡◕‿‿◕｡)づ ︵ ┻━┻","content correctly inserted"),t.bootstrapPopover("hide"),o.strictEqual($(".popover").length,0,"popover was removed")})),QUnit.test("should respect custom template",(function(o){o.expect(3);var t=$('<a href="#">@fat</a>').appendTo("#qunit-fixture").bootstrapPopover({title:"Test",content:"Test",template:'<div class="popover foobar"><div class="arrow"></div><div class="inner"><h3 class="title"/><div class="content"><p/></div></div></div>'});t.bootstrapPopover("show"),o.notEqual($(".popover").length,0,"popover was inserted"),o.ok($(".popover").hasClass("foobar"),"custom class is present"),t.bootstrapPopover("hide"),o.strictEqual($(".popover").length,0,"popover was removed")})),QUnit.test("should destroy popover",(function(o){o.expect(7);var t=$("<div/>").bootstrapPopover({trigger:"hover"}).on("click.foo",$.noop);o.ok(t.data("bs.popover"),"popover has data"),o.ok($._data(t[0],"events").mouseover&&$._data(t[0],"events").mouseout,"popover has hover event"),o.strictEqual($._data(t[0],"events").click[0].namespace,"foo","popover has extra click.foo event"),t.bootstrapPopover("show"),t.bootstrapPopover("dispose"),o.ok(!t.hasClass("show"),"popover is hidden"),o.ok(!t.data("popover"),"popover does not have data"),o.strictEqual($._data(t[0],"events").click[0].namespace,"foo","popover still has click.foo"),o.ok(!$._data(t[0],"events").mouseover&&!$._data(t[0],"events").mouseout,"popover does not have any events")})),QUnit.test("should render popover element using delegated selector",(function(o){o.expect(2);var t=$('<div><a href="#" title="mdo" data-content="https://twitter.com/mdo">@mdo</a></div>').appendTo("#qunit-fixture").bootstrapPopover({selector:"a",trigger:"click"});t.find("a").trigger("click"),o.notEqual($(".popover").length,0,"popover was inserted"),t.find("a").trigger("click"),o.strictEqual($(".popover").length,0,"popover was removed")})),QUnit.test("should detach popover content rather than removing it so that event handlers are left intact",(function(o){o.expect(1);var t=$('<div class="content-with-handler"><a class="btn btn-warning">Button with event handler</a></div>').appendTo("#qunit-fixture"),e=!1;$(".content-with-handler .btn").on("click",(function(){e=!0}));var n=$('<div><a href="#">Show popover</a></div>').appendTo("#qunit-fixture").bootstrapPopover({html:!0,trigger:"manual",container:"body",content:function(){return t}}),r=o.async();n.one("shown.bs.popover",(function(){n.one("hidden.bs.popover",(function(){n.one("shown.bs.popover",(function(){$(".content-with-handler .btn").trigger("click"),n.bootstrapPopover("dispose"),o.ok(e,"content's event handler still present"),r()})).bootstrapPopover("show")})).bootstrapPopover("hide")})).bootstrapPopover("show")})),QUnit.test("should do nothing when an attempt is made to hide an uninitialized popover",(function(o){o.expect(1);var t=$('<span data-toggle="popover" data-title="some title" data-content="some content">some text</span>').appendTo("#qunit-fixture").on("hidden.bs.popover shown.bs.popover",(function(){o.ok(!1,"should not fire any popover events")})).bootstrapPopover("hide");o.strictEqual(typeof t.data("bs.popover"),"undefined","should not initialize the popover")})),QUnit.test("should fire inserted event",(function(o){o.expect(2);var t=o.async();$('<a href="#">@Johann-S</a>').appendTo("#qunit-fixture").on("inserted.bs.popover",(function(){o.notEqual($(".popover").length,0,"popover was inserted"),o.ok(!0,"inserted event fired"),t()})).bootstrapPopover({title:"Test",content:"Test"}).bootstrapPopover("show")})),QUnit.test("should throw an error when show is called on hidden elements",(function(o){o.expect(1);var t=o.async();try{$('<div data-toggle="popover" data-title="some title" data-content="@Johann-S" style="display: none"/>').bootstrapPopover("show")}catch(e){o.strictEqual(e.message,"Please use show on visible elements"),t()}})),QUnit.test("should hide popovers when their containing modal is closed",(function(o){o.expect(1);var t=o.async();$('<div id="modal-test" class="modal"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-body"><button id="popover-test" type="button" class="btn btn-secondary" data-toggle="popover" data-placement="top" data-content="Popover">Popover on top</button></div></div></div></div>').appendTo("#qunit-fixture"),$("#popover-test").on("shown.bs.popover",(function(){$("#modal-test").modal("hide")})).on("hide.bs.popover",(function(){o.ok(!0,"popover hide"),t()})),$("#modal-test").on("shown.bs.modal",(function(){$("#popover-test").bootstrapPopover("show")})).modal("show")})),QUnit.test("should convert number to string without error for content and title",(function(o){o.expect(2);var t=o.async();$('<a href="#">@mdo</a>').appendTo("#qunit-fixture").bootstrapPopover({title:5,content:7}).on("shown.bs.popover",(function(){o.strictEqual($(".popover .popover-header").text(),"5"),o.strictEqual($(".popover .popover-body").text(),"7"),t()})).bootstrapPopover("show")})),QUnit.test("popover should be shown right away after the call of disable/enable",(function(o){o.expect(2);var t=o.async(),e=$('<a href="#">@mdo</a>').appendTo("#qunit-fixture").bootstrapPopover({title:"Test popover",content:"with disable/enable"}).on("shown.bs.popover",(function(){o.strictEqual($(".popover").hasClass("show"),!0),t()}));e.bootstrapPopover("disable"),e.trigger($.Event("click")),setTimeout((function(){o.strictEqual(0===$(".popover").length,!0),e.bootstrapPopover("enable"),e.trigger($.Event("click"))}),200)})),QUnit.test("popover should call content function only once",(function(o){o.expect(1);var t=o.async(),e=0;$('<div id="popover" style="display:none">content</div>').appendTo("#qunit-fixture"),$('<a href="#">@Johann-S</a>').appendTo("#qunit-fixture").bootstrapPopover({content:function(){return e++,$("#popover").clone().show().get(0)}}).on("shown.bs.popover",(function(){o.strictEqual(e,1),t()})).trigger($.Event("click"))}))}));