/**
 * skylark-langx-klass - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-ns/ns","skylark-langx-types","skylark-langx-objects","skylark-langx-arrays"],function(t,r,n,i){var e=i.uniq,o=n.has,s=n.mixin,a=r.isArray,c=r.isDefined;var u=function(){function t(){return this._construct?this._construct.apply(this,arguments):this.init?this.init.apply(this,arguments):void 0}return function n(i,u,p,f){a(u)&&(f=p,p=u,u=null),u=u||Object,c(p)&&!a(p)&&(f=p,p=!1);var l=u;p&&(p=function(t,r){var n=[];return r.forEach(function(t){if(o(t,"__mixins__"))throw new Error("nested mixins");for(var r=[];t;)r.unshift(t),t=t.superclass;n=n.concat(r)}),(n=(n=e(n)).filter(function(r){for(var n=t;n;){if(r===n)return!1;if(o(n,"__mixins__"))for(var i=n.__mixins__,e=0;e<i.length;e++)if(i[e]===r)return!1;n=n.superclass}return!0})).length>0&&n}(l,p)),p&&(l=function(t,r){for(var n=t,i=0;i<r.length;i++){var e=new Function;e.prototype=Object.create(n.prototype),e.__proto__=n,e.superclass=null,s(e.prototype,r[i].prototype),e.prototype.__mixin__=r[i],n=e}return n}(l,p));var _=i.klassName||"",y=new Function("return function "+_+"() {var inst = this, ctor = arguments.callee;if (!(inst instanceof ctor)) {inst = Object.create(ctor.prototype);}return ctor._constructor.apply(inst, arguments) || inst;}")();return y.prototype=Object.create(l.prototype),y.prototype.constructor=y,y.superclass=u,y.__proto__=l,y._constructor||(y._constructor=t),p&&(y.__mixins__=p),y.partial||(y.partial=function(t,n){return function(t,n,i){var e=t.prototype,o=t.superclass.prototype,s=i&&i.noOverrided;for(var a in i&&i.overrides,n)if("constructor"!==a){var c=n[a];"function"==typeof n[a]?e[a]=c._constructor||s||"function"!=typeof o[a]?c:function(t,r,n){return function(){var t=this.overrided;this.overrided=n;var i=r.apply(this,arguments);return this.overrided=t,i}}(0,c,o[a]):r.isPlainObject(c)&&null!==c&&c.get?Object.defineProperty(e,a,c):e[a]=c}return t}(this,t,n)}),y.inherit||(y.inherit=function(t,r,i){return n(t,this,r,i)}),y.partial(i,f),y}}();return t.attach("langx.klass",u)});
//# sourceMappingURL=sourcemaps/klass.js.map