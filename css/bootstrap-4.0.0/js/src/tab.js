import $ from"jquery";import Util from"./util";const Tab=(t=>{const e="bs.tab",a=t.fn.tab,n={HIDE:"hide.bs.tab",HIDDEN:"hidden.bs.tab",SHOW:"show.bs.tab",SHOWN:"shown.bs.tab",CLICK_DATA_API:"click.bs.tab.data-api"},s="dropdown-menu",r="active",i="disabled",o="fade",l="show",d=".dropdown",c=".nav, .list-group",h=".active",m="> li > .active",f='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',u=".dropdown-toggle",_="> .dropdown-menu .active";class b{constructor(t){this._element=t}static get VERSION(){return"4.0.0"}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass(r)||t(this._element).hasClass(i))return;let e,a;const s=t(this._element).closest(c)[0],o=Util.getSelectorFromElement(this._element);if(s){const e="UL"===s.nodeName?m:h;a=t.makeArray(t(s).find(e)),a=a[a.length-1]}const l=t.Event(n.HIDE,{relatedTarget:this._element}),d=t.Event(n.SHOW,{relatedTarget:a});if(a&&t(a).trigger(l),t(this._element).trigger(d),d.isDefaultPrevented()||l.isDefaultPrevented())return;o&&(e=t(o)[0]),this._activate(this._element,s);const f=()=>{const e=t.Event(n.HIDDEN,{relatedTarget:this._element}),s=t.Event(n.SHOWN,{relatedTarget:a});t(a).trigger(e),t(this._element).trigger(s)};e?this._activate(e,e.parentNode,f):f()}dispose(){t.removeData(this._element,e),this._element=null}_activate(e,a,n){let s;s="UL"===a.nodeName?t(a).find(m):t(a).children(h);const r=s[0],i=n&&Util.supportsTransitionEnd()&&r&&t(r).hasClass(o),l=()=>this._transitionComplete(e,r,n);r&&i?t(r).one(Util.TRANSITION_END,l).emulateTransitionEnd(150):l()}_transitionComplete(e,a,n){if(a){t(a).removeClass(`${l} ${r}`);const e=t(a.parentNode).find(_)[0];e&&t(e).removeClass(r),"tab"===a.getAttribute("role")&&a.setAttribute("aria-selected",!1)}if(t(e).addClass(r),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),Util.reflow(e),t(e).addClass(l),e.parentNode&&t(e.parentNode).hasClass(s)){const a=t(e).closest(d)[0];a&&t(a).find(u).addClass(r),e.setAttribute("aria-expanded",!0)}n&&n()}static _jQueryInterface(a){return this.each((function(){const n=t(this);let s=n.data(e);if(s||(s=new b(this),n.data(e,s)),"string"==typeof a){if(void 0===s[a])throw new TypeError(`No method named "${a}"`);s[a]()}}))}}return t(document).on(n.CLICK_DATA_API,f,(function(e){e.preventDefault(),b._jQueryInterface.call(t(this),"show")})),t.fn.tab=b._jQueryInterface,t.fn.tab.Constructor=b,t.fn.tab.noConflict=function(){return t.fn.tab=a,b._jQueryInterface},b})($);export default Tab;