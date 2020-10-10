$((function(){"use strict";QUnit.module("carousel plugin"),QUnit.test("should be defined on jQuery object",(function(e){e.expect(1),e.ok($(document.body).carousel,"carousel method is defined")})),QUnit.module("carousel",{beforeEach:function(){$.fn.bootstrapCarousel=$.fn.carousel.noConflict()},afterEach:function(){$.fn.carousel=$.fn.bootstrapCarousel,delete $.fn.bootstrapCarousel}}),QUnit.test("should provide no conflict",(function(e){e.expect(1),e.strictEqual(typeof $.fn.carousel,"undefined","carousel was set back to undefined (orig value)")})),QUnit.test("should throw explicit error on undefined method",(function(e){e.expect(1);var i=$("<div/>");i.bootstrapCarousel();try{i.bootstrapCarousel("noMethod")}catch(i){e.strictEqual(i.message,'No method named "noMethod"')}})),QUnit.test("should return jquery collection containing the element",(function(e){e.expect(2);var i=$("<div/>"),a=i.bootstrapCarousel();e.ok(a instanceof $,"returns jquery collection"),e.strictEqual(a[0],i[0],"collection contains element")})),QUnit.test("should type check config options",(function(e){var i;e.expect(2);var a='CAROUSEL: Option "interval" provided type "string" but expected type "(number|boolean)".',t={interval:"fat sux"};try{$("<div/>").bootstrapCarousel(t)}catch(e){i=e.message}e.ok(i===a,"correct error message"),t={keyboard:document.createElement("div")},a='CAROUSEL: Option "keyboard" provided type "element" but expected type "boolean".';try{$("<div/>").bootstrapCarousel(t)}catch(e){i=e.message}e.ok(i===a,"correct error message")})),QUnit.test("should not fire slid when slide is prevented",(function(e){e.expect(1);var i=e.async();$('<div class="carousel"/>').on("slide.bs.carousel",(function(a){a.preventDefault(),e.ok(!0,"slide event fired"),i()})).on("slid.bs.carousel",(function(){e.ok(!1,"slid event fired")})).bootstrapCarousel("next")})),QUnit.test("should reset when slide is prevented",(function(e){e.expect(6);var i=$('<div id="carousel-example-generic" class="carousel slide"><ol class="carousel-indicators"><li data-target="#carousel-example-generic" data-slide-to="0" class="active"/><li data-target="#carousel-example-generic" data-slide-to="1"/><li data-target="#carousel-example-generic" data-slide-to="2"/></ol><div class="carousel-inner"><div class="carousel-item active"><div class="carousel-caption"/></div><div class="carousel-item"><div class="carousel-caption"/></div><div class="carousel-item"><div class="carousel-caption"/></div></div><a class="left carousel-control" href="#carousel-example-generic" data-slide="prev"/><a class="right carousel-control" href="#carousel-example-generic" data-slide="next"/></div>'),a=e.async();i.one("slide.bs.carousel",(function(a){a.preventDefault(),setTimeout((function(){e.ok(i.find(".carousel-item:nth-child(1)").is(".active"),"first item still active"),e.ok(i.find(".carousel-indicators li:nth-child(1)").is(".active"),"first indicator still active"),i.bootstrapCarousel("next")}),0)})).one("slid.bs.carousel",(function(){setTimeout((function(){e.ok(!i.find(".carousel-item:nth-child(1)").is(".active"),"first item still active"),e.ok(!i.find(".carousel-indicators li:nth-child(1)").is(".active"),"first indicator still active"),e.ok(i.find(".carousel-item:nth-child(2)").is(".active"),"second item active"),e.ok(i.find(".carousel-indicators li:nth-child(2)").is(".active"),"second indicator active"),a()}),0)})).bootstrapCarousel("next")})),QUnit.test("should fire slide event with direction",(function(e){e.expect(4);var i=$('<div id="myCarousel" class="carousel slide"><div class="carousel-inner"><div class="carousel-item active"><img alt=""><div class="carousel-caption"><h4>First Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div><div class="carousel-item"><img alt=""><div class="carousel-caption"><h4>Second Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div><div class="carousel-item"><img alt=""><div class="carousel-caption"><h4>Third Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div></div><a class="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a><a class="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a></div>'),a=e.async();i.one("slide.bs.carousel",(function(t){e.ok(t.direction,"direction present on next"),e.strictEqual(t.direction,"left","direction is left on next"),i.one("slide.bs.carousel",(function(i){e.ok(i.direction,"direction present on prev"),e.strictEqual(i.direction,"right","direction is right on prev"),a()})).bootstrapCarousel("prev")})).bootstrapCarousel("next")})),QUnit.test("should fire slid event with direction",(function(e){e.expect(4);var i=$('<div id="myCarousel" class="carousel slide"><div class="carousel-inner"><div class="carousel-item active"><img alt=""><div class="carousel-caption"><h4>First Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div><div class="carousel-item"><img alt=""><div class="carousel-caption"><h4>Second Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div><div class="carousel-item"><img alt=""><div class="carousel-caption"><h4>Third Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div></div><a class="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a><a class="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a></div>'),a=e.async();i.one("slid.bs.carousel",(function(t){e.ok(t.direction,"direction present on next"),e.strictEqual(t.direction,"left","direction is left on next"),i.one("slid.bs.carousel",(function(i){e.ok(i.direction,"direction present on prev"),e.strictEqual(i.direction,"right","direction is right on prev"),a()})).bootstrapCarousel("prev")})).bootstrapCarousel("next")})),QUnit.test("should fire slide event with relatedTarget",(function(e){e.expect(2);var i=e.async();$('<div id="myCarousel" class="carousel slide"><div class="carousel-inner"><div class="carousel-item active"><img alt=""><div class="carousel-caption"><h4>First Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div><div class="carousel-item"><img alt=""><div class="carousel-caption"><h4>Second Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div><div class="carousel-item"><img alt=""><div class="carousel-caption"><h4>Third Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div></div><a class="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a><a class="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a></div>').on("slide.bs.carousel",(function(a){e.ok(a.relatedTarget,"relatedTarget present"),e.ok($(a.relatedTarget).hasClass("carousel-item"),'relatedTarget has class "item"'),i()})).bootstrapCarousel("next")})),QUnit.test("should fire slid event with relatedTarget",(function(e){e.expect(2);var i=e.async();$('<div id="myCarousel" class="carousel slide"><div class="carousel-inner"><div class="carousel-item active"><img alt=""><div class="carousel-caption"><h4>First Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div><div class="carousel-item"><img alt=""><div class="carousel-caption"><h4>Second Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div><div class="carousel-item"><img alt=""><div class="carousel-caption"><h4>Third Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div></div><a class="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a><a class="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a></div>').on("slid.bs.carousel",(function(a){e.ok(a.relatedTarget,"relatedTarget present"),e.ok($(a.relatedTarget).hasClass("carousel-item"),'relatedTarget has class "item"'),i()})).bootstrapCarousel("next")})),QUnit.test("should fire slid and slide events with from and to",(function(e){e.expect(4);var i=e.async();$('<div id="myCarousel" class="carousel slide"><div class="carousel-inner"><div class="carousel-item active"><img alt=""><div class="carousel-caption"><h4>First Thumbnail label</h4></div></div><div class="carousel-item"><img alt=""><div class="carousel-caption"><h4>Second Thumbnail label</h4></div></div><div class="carousel-item"><img alt=""><div class="carousel-caption"><h4>Third Thumbnail label</h4></div></div></div><a class="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a><a class="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a></div>').on("slid.bs.carousel",(function(a){e.ok(void 0!==a.from,"from present"),e.ok(void 0!==a.to,"to present"),$(this).off(),i()})).on("slide.bs.carousel",(function(i){e.ok(void 0!==i.from,"from present"),e.ok(void 0!==i.to,"to present"),$(this).off("slide.bs.carousel")})).bootstrapCarousel("next")})),QUnit.test("should set interval from data attribute",(function(e){e.expect(4);var i=$('<div id="myCarousel" class="carousel slide"><div class="carousel-inner"><div class="carousel-item active"><img alt=""><div class="carousel-caption"><h4>First Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div><div class="carousel-item"><img alt=""><div class="carousel-caption"><h4>Second Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div><div class="carousel-item"><img alt=""><div class="carousel-caption"><h4>Third Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div></div><a class="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a><a class="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a></div>');i.attr("data-interval",1814),i.appendTo("body"),$("[data-slide]").first().trigger("click"),e.strictEqual(i.data("bs.carousel")._config.interval,1814),i.remove(),i.appendTo("body").attr("data-modal","foobar"),$("[data-slide]").first().trigger("click"),e.strictEqual(i.data("bs.carousel")._config.interval,1814,"even if there is an data-modal attribute set"),i.remove(),i.appendTo("body"),$("[data-slide]").first().trigger("click"),i.attr("data-interval",1860),$("[data-slide]").first().trigger("click"),e.strictEqual(i.data("bs.carousel")._config.interval,1814,"attributes should be read only on initialization"),i.remove(),i.attr("data-interval",!1),i.appendTo("body"),i.bootstrapCarousel(1),e.strictEqual(i.data("bs.carousel")._config.interval,!1,"data attribute has higher priority than default options"),i.remove()})),QUnit.test("should skip over non-items when using item indices",(function(e){e.expect(2);var i=$('<div id="myCarousel" class="carousel" data-interval="1814"><div class="carousel-inner"><div class="carousel-item active"><img alt=""></div><script type="text/x-metamorph" id="thingy"/><div class="carousel-item"><img alt=""></div><div class="carousel-item"></div></div></div>');i.bootstrapCarousel(),e.strictEqual(i.find(".carousel-item")[0],i.find(".active")[0],"first item active"),i.bootstrapCarousel(1),e.strictEqual(i.find(".carousel-item")[1],i.find(".active")[0],"second item active")})),QUnit.test("should skip over non-items when using next/prev methods",(function(e){e.expect(2);var i=$('<div id="myCarousel" class="carousel" data-interval="1814"><div class="carousel-inner"><div class="carousel-item active"><img alt=""></div><script type="text/x-metamorph" id="thingy"/><div class="carousel-item"><img alt=""></div><div class="carousel-item"></div></div></div>');i.bootstrapCarousel(),e.strictEqual(i.find(".carousel-item")[0],i.find(".active")[0],"first item active"),i.bootstrapCarousel("next"),e.strictEqual(i.find(".carousel-item")[1],i.find(".active")[0],"second item active")})),QUnit.test("should go to previous item if left arrow key is pressed",(function(e){e.expect(2);var i=$('<div id="myCarousel" class="carousel" data-interval="false"><div class="carousel-inner"><div id="first" class="carousel-item"><img alt=""></div><div id="second" class="carousel-item active"><img alt=""></div><div id="third" class="carousel-item"><img alt=""></div></div></div>');i.bootstrapCarousel(),e.strictEqual(i.find(".carousel-item")[1],i.find(".active")[0],"second item active"),i.trigger($.Event("keydown",{which:37})),e.strictEqual(i.find(".carousel-item")[0],i.find(".active")[0],"first item active")})),QUnit.test("should go to next item if right arrow key is pressed",(function(e){e.expect(2);var i=$('<div id="myCarousel" class="carousel" data-interval="false"><div class="carousel-inner"><div id="first" class="carousel-item active"><img alt=""></div><div id="second" class="carousel-item"><img alt=""></div><div id="third" class="carousel-item"><img alt=""></div></div></div>');i.bootstrapCarousel(),e.strictEqual(i.find(".carousel-item")[0],i.find(".active")[0],"first item active"),i.trigger($.Event("keydown",{which:39})),e.strictEqual(i.find(".carousel-item")[1],i.find(".active")[0],"second item active")})),QUnit.test("should not prevent keydown if key is not ARROW_LEFT or ARROW_RIGHT",(function(e){e.expect(2);var i=$('<div id="myCarousel" class="carousel" data-interval="false"><div class="carousel-inner"><div id="first" class="carousel-item active"><img alt=""></div></div></div>');i.bootstrapCarousel();var a=e.async(),t=$.Event("keydown",{which:40}),s=$.Event("keydown",{which:38});i.one("keydown",(function(i){e.strictEqual(i.isDefaultPrevented(),!1)})),i.trigger(t),i.one("keydown",(function(i){e.strictEqual(i.isDefaultPrevented(),!1),a()})),i.trigger(s)})),QUnit.test("should support disabling the keyboard navigation",(function(e){e.expect(3);var i=$('<div id="myCarousel" class="carousel" data-interval="false" data-keyboard="false"><div class="carousel-inner"><div id="first" class="carousel-item active"><img alt=""></div><div id="second" class="carousel-item"><img alt=""></div><div id="third" class="carousel-item"><img alt=""></div></div></div>');i.bootstrapCarousel(),e.strictEqual(i.find(".carousel-item")[0],i.find(".active")[0],"first item active"),i.trigger($.Event("keydown",{which:39})),e.strictEqual(i.find(".carousel-item")[0],i.find(".active")[0],"first item still active after right arrow press"),i.trigger($.Event("keydown",{which:37})),e.strictEqual(i.find(".carousel-item")[0],i.find(".active")[0],"first item still active after left arrow press")})),QUnit.test("should ignore keyboard events within <input>s and <textarea>s",(function(e){e.expect(7);var i=$('<div id="myCarousel" class="carousel" data-interval="false"><div class="carousel-inner"><div id="first" class="carousel-item active"><img alt=""><input type="text" id="in-put"><textarea id="text-area"></textarea></div><div id="second" class="carousel-item"><img alt=""></div><div id="third" class="carousel-item"><img alt=""></div></div></div>'),a=i.find("#in-put"),t=i.find("#text-area");e.strictEqual(a.length,1,"found <input>"),e.strictEqual(t.length,1,"found <textarea>"),i.bootstrapCarousel(),e.strictEqual(i.find(".carousel-item")[0],i.find(".active")[0],"first item active"),a.trigger($.Event("keydown",{which:39})),e.strictEqual(i.find(".carousel-item")[0],i.find(".active")[0],"first item still active after right arrow press in <input>"),a.trigger($.Event("keydown",{which:37})),e.strictEqual(i.find(".carousel-item")[0],i.find(".active")[0],"first item still active after left arrow press in <input>"),t.trigger($.Event("keydown",{which:39})),e.strictEqual(i.find(".carousel-item")[0],i.find(".active")[0],"first item still active after right arrow press in <textarea>"),t.trigger($.Event("keydown",{which:37})),e.strictEqual(i.find(".carousel-item")[0],i.find(".active")[0],"first item still active after left arrow press in <textarea>")})),QUnit.test("should wrap around from end to start when wrap option is true",(function(e){e.expect(3);var i=$('<div id="carousel-example-generic" class="carousel slide" data-wrap="true"><ol class="carousel-indicators"><li data-target="#carousel-example-generic" data-slide-to="0" class="active"/><li data-target="#carousel-example-generic" data-slide-to="1"/><li data-target="#carousel-example-generic" data-slide-to="2"/></ol><div class="carousel-inner"><div class="carousel-item active" id="one"><div class="carousel-caption"/></div><div class="carousel-item" id="two"><div class="carousel-caption"/></div><div class="carousel-item" id="three"><div class="carousel-caption"/></div></div><a class="left carousel-control" href="#carousel-example-generic" data-slide="prev"/><a class="right carousel-control" href="#carousel-example-generic" data-slide="next"/></div>'),a=function(){return i.find(".carousel-item.active").attr("id")},t=e.async();i.one("slid.bs.carousel",(function(){e.strictEqual(a(),"two","carousel slid from 1st to 2nd slide"),i.one("slid.bs.carousel",(function(){e.strictEqual(a(),"three","carousel slid from 2nd to 3rd slide"),i.one("slid.bs.carousel",(function(){e.strictEqual(a(),"one","carousel wrapped around and slid from 3rd to 1st slide"),t()})).bootstrapCarousel("next")})).bootstrapCarousel("next")})).bootstrapCarousel("next")})),QUnit.test("should wrap around from start to end when wrap option is true",(function(e){e.expect(1);var i=$('<div id="carousel-example-generic" class="carousel slide" data-wrap="true"><ol class="carousel-indicators"><li data-target="#carousel-example-generic" data-slide-to="0" class="active"/><li data-target="#carousel-example-generic" data-slide-to="1"/><li data-target="#carousel-example-generic" data-slide-to="2"/></ol><div class="carousel-inner"><div class="carousel-item active" id="one"><div class="carousel-caption"/></div><div class="carousel-item" id="two"><div class="carousel-caption"/></div><div class="carousel-item" id="three"><div class="carousel-caption"/></div></div><a class="left carousel-control" href="#carousel-example-generic" data-slide="prev"/><a class="right carousel-control" href="#carousel-example-generic" data-slide="next"/></div>'),a=e.async();i.on("slid.bs.carousel",(function(){e.strictEqual(i.find(".carousel-item.active").attr("id"),"three","carousel wrapped around and slid from 1st to 3rd slide"),a()})).bootstrapCarousel("prev")})),QUnit.test("should stay at the end when the next method is called and wrap is false",(function(e){e.expect(3);var i=$('<div id="carousel-example-generic" class="carousel slide" data-wrap="false"><ol class="carousel-indicators"><li data-target="#carousel-example-generic" data-slide-to="0" class="active"/><li data-target="#carousel-example-generic" data-slide-to="1"/><li data-target="#carousel-example-generic" data-slide-to="2"/></ol><div class="carousel-inner"><div class="carousel-item active" id="one"><div class="carousel-caption"/></div><div class="carousel-item" id="two"><div class="carousel-caption"/></div><div class="carousel-item" id="three"><div class="carousel-caption"/></div></div><a class="left carousel-control" href="#carousel-example-generic" data-slide="prev"/><a class="right carousel-control" href="#carousel-example-generic" data-slide="next"/></div>'),a=function(){return i.find(".carousel-item.active").attr("id")},t=e.async();i.one("slid.bs.carousel",(function(){e.strictEqual(a(),"two","carousel slid from 1st to 2nd slide"),i.one("slid.bs.carousel",(function(){e.strictEqual(a(),"three","carousel slid from 2nd to 3rd slide"),i.one("slid.bs.carousel",(function(){e.ok(!1,"carousel slid when it should not have slid")})).bootstrapCarousel("next"),e.strictEqual(a(),"three","carousel did not wrap around and stayed on 3rd slide"),t()})).bootstrapCarousel("next")})).bootstrapCarousel("next")})),QUnit.test("should stay at the start when the prev method is called and wrap is false",(function(e){e.expect(1);var i=$('<div id="carousel-example-generic" class="carousel slide" data-wrap="false"><ol class="carousel-indicators"><li data-target="#carousel-example-generic" data-slide-to="0" class="active"/><li data-target="#carousel-example-generic" data-slide-to="1"/><li data-target="#carousel-example-generic" data-slide-to="2"/></ol><div class="carousel-inner"><div class="carousel-item active" id="one"><div class="carousel-caption"/></div><div class="carousel-item" id="two"><div class="carousel-caption"/></div><div class="carousel-item" id="three"><div class="carousel-caption"/></div></div><a class="left carousel-control" href="#carousel-example-generic" data-slide="prev"/><a class="right carousel-control" href="#carousel-example-generic" data-slide="next"/></div>');i.on("slid.bs.carousel",(function(){e.ok(!1,"carousel slid when it should not have slid")})).bootstrapCarousel("prev"),e.strictEqual(i.find(".carousel-item.active").attr("id"),"one","carousel did not wrap around and stayed on 1st slide")})),QUnit.test("should not prevent keydown for inputs and textareas",(function(e){e.expect(2);var i=$('<div id="myCarousel" class="carousel" data-interval="false"><div class="carousel-inner"><div id="first" class="carousel-item"><input type="text" id="inputText" /></div><div id="second" class="carousel-item active"><textarea id="txtArea"></textarea></div></div></div>'),a=e.async();i.appendTo("#qunit-fixture");var t=i.find("#inputText"),s=i.find("#txtArea");i.bootstrapCarousel();var l=$.Event("keydown",{which:65});t.on("keydown",(function(i){e.strictEqual(i.isDefaultPrevented(),!1)})),t.trigger(l),s.on("keydown",(function(i){e.strictEqual(i.isDefaultPrevented(),!1),a()})),s.trigger(l)})),QUnit.test("Should not go to the next item when the carousel is not visible",(function(e){e.expect(2);var i=e.async(),a=$('<div id="myCarousel" class="carousel slide" data-interval="50" style="display: none;">  <div class="carousel-inner">    <div id="firstItem" class="carousel-item active">      <img alt="">    </div>    <div class="carousel-item">      <img alt="">    </div>    <div class="carousel-item">      <img alt="">    </div>  <a class="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a>  <a class="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a></div>');a.appendTo("#qunit-fixture").bootstrapCarousel();var t=$("#firstItem");setTimeout((function(){e.ok(t.hasClass("active")),a.bootstrapCarousel("dispose").attr("style","visibility: hidden;").bootstrapCarousel(),setTimeout((function(){e.ok(t.hasClass("active")),i()}),80)}),80)})),QUnit.test("Should not go to the next item when the parent of the carousel is not visible",(function(e){e.expect(2);var i=e.async(),a=$('<div id="parent" style="display: none;">  <div id="myCarousel" class="carousel slide" data-interval="50" style="display: none;">    <div class="carousel-inner">      <div id="firstItem" class="carousel-item active">        <img alt="">      </div>      <div class="carousel-item">        <img alt="">      </div>      <div class="carousel-item">        <img alt="">      </div>    <a class="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a>    <a class="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a>  </div></div>');a.appendTo("#qunit-fixture");var t=a.find("#parent"),s=a.find("#myCarousel");s.bootstrapCarousel();var l=$("#firstItem");setTimeout((function(){e.ok(l.hasClass("active")),s.bootstrapCarousel("dispose"),t.attr("style","visibility: hidden;"),s.bootstrapCarousel(),setTimeout((function(){e.ok(l.hasClass("active")),i()}),80)}),80)}))}));