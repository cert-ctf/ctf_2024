class _{constructor(e){this.properties=e??[]}get(e){const r=this.properties.filter(n=>n.name===e).map(n=>n.value);if(r.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(r.length!==0)return r[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,r){const n=this.get(e);if(n!==void 0){if(r!=="json"&&typeof n!==r)throw new Error('Expected property "'+e+'" to have type "'+r+'"');return n}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,r){const n=this.get(e);if(n===void 0)throw new Error('Property "'+e+'" is missing');if(r!=="json"&&typeof n!==r)throw new Error('Expected property "'+e+'" to have type "'+r+'"');return n}getType(e){const r=this.properties.filter(n=>n.name===e).map(n=>n.type);if(r.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(r.length!==0)return r[0]}}const $="https://unpkg.com/@workadventure/scripting-api-extra@1.9.1/dist";class ne{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new _(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function N(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite($+"/configuration.html"+e,!0)}async function oe(t,e){const r=await WA.room.getTiledMap(),n=new Map;return X(r.layers,n,t,e),n}function X(t,e,r,n){for(const o of t)if(o.type==="objectgroup"){for(const a of o.objects)if(a.type==="variable"||a.class==="variable"){if(r&&o.name!==r||n&&!n.includes(a.name))continue;e.set(a.name,new ne(a))}}else o.type==="group"&&X(o.layers,e,r,n)}let R;async function x(){return R===void 0&&(R=ae()),R}async function ae(){return ie(await WA.room.getTiledMap())}function ie(t){const e=new Map;return Y(t.layers,"",e),e}function Y(t,e,r){for(const n of t)n.type==="group"?Y(n.layers,e+n.name+"/",r):(n.name=e+n.name,r.set(n.name,n))}async function J(){const t=await x(),e=[];for(const r of t.values())if(r.type==="objectgroup")for(const n of r.objects)(n.type==="area"||n.class==="area")&&e.push(n);return e}function se(t){let e=1/0,r=1/0,n=0,o=0;const a=t.data;if(typeof a=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let i=0;i<t.height;i++)for(let s=0;s<t.width;s++)a[s+i*t.width]!==0&&(e=Math.min(e,s),o=Math.max(o,s),r=Math.min(r,i),n=Math.max(n,i));return{top:r,left:e,right:o+1,bottom:n+1}}function Q(t){let e=1/0,r=1/0,n=0,o=0;for(const a of t){const i=se(a);i.left<e&&(e=i.left),i.top<r&&(r=i.top),i.right>o&&(o=i.right),i.bottom>n&&(n=i.bottom)}return{top:r,left:e,right:o,bottom:n}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var ue=Object.prototype.toString,S=Array.isArray||function(e){return ue.call(e)==="[object Array]"};function G(t){return typeof t=="function"}function le(t){return S(t)?"array":typeof t}function B(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function D(t,e){return t!=null&&typeof t=="object"&&e in t}function ce(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var fe=RegExp.prototype.test;function pe(t,e){return fe.call(t,e)}var he=/\S/;function ye(t){return!pe(he,t)}var ge={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function de(t){return String(t).replace(/[&<>"'`=\/]/g,function(r){return ge[r]})}var me=/\s*/,be=/\s+/,O=/\s*=/,Ae=/\s*\}/,ve=/#|\^|\/|>|\{|&|=|!/;function We(t,e){if(!t)return[];var r=!1,n=[],o=[],a=[],i=!1,s=!1,u="",c=0;function p(){if(i&&!s)for(;a.length;)delete o[a.pop()];else a=[];i=!1,s=!1}var d,b,T;function P(v){if(typeof v=="string"&&(v=v.split(be,2)),!S(v)||v.length!==2)throw new Error("Invalid tags: "+v);d=new RegExp(B(v[0])+"\\s*"),b=new RegExp("\\s*"+B(v[1])),T=new RegExp("\\s*"+B("}"+v[1]))}P(e||g.tags);for(var f=new C(t),A,l,m,L,k,W;!f.eos();){if(A=f.pos,m=f.scanUntil(d),m)for(var M=0,re=m.length;M<re;++M)L=m.charAt(M),ye(L)?(a.push(o.length),u+=L):(s=!0,r=!0,u+=" "),o.push(["text",L,A,A+1]),A+=1,L===`
`&&(p(),u="",c=0,r=!1);if(!f.scan(d))break;if(i=!0,l=f.scan(ve)||"name",f.scan(me),l==="="?(m=f.scanUntil(O),f.scan(O),f.scanUntil(b)):l==="{"?(m=f.scanUntil(T),f.scan(Ae),f.scanUntil(b),l="&"):m=f.scanUntil(b),!f.scan(b))throw new Error("Unclosed tag at "+f.pos);if(l==">"?k=[l,m,A,f.pos,u,c,r]:k=[l,m,A,f.pos],c++,o.push(k),l==="#"||l==="^")n.push(k);else if(l==="/"){if(W=n.pop(),!W)throw new Error('Unopened section "'+m+'" at '+A);if(W[1]!==m)throw new Error('Unclosed section "'+W[1]+'" at '+A)}else l==="name"||l==="{"||l==="&"?s=!0:l==="="&&P(m)}if(p(),W=n.pop(),W)throw new Error('Unclosed section "'+W[1]+'" at '+f.pos);return we(_e(o))}function _e(t){for(var e=[],r,n,o=0,a=t.length;o<a;++o)r=t[o],r&&(r[0]==="text"&&n&&n[0]==="text"?(n[1]+=r[1],n[3]=r[3]):(e.push(r),n=r));return e}function we(t){for(var e=[],r=e,n=[],o,a,i=0,s=t.length;i<s;++i)switch(o=t[i],o[0]){case"#":case"^":r.push(o),n.push(o),r=o[4]=[];break;case"/":a=n.pop(),a[5]=o[2],r=n.length>0?n[n.length-1][4]:e;break;default:r.push(o)}return e}function C(t){this.string=t,this.tail=t,this.pos=0}C.prototype.eos=function(){return this.tail===""};C.prototype.scan=function(e){var r=this.tail.match(e);if(!r||r.index!==0)return"";var n=r[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n};C.prototype.scanUntil=function(e){var r=this.tail.search(e),n;switch(r){case-1:n=this.tail,this.tail="";break;case 0:n="";break;default:n=this.tail.substring(0,r),this.tail=this.tail.substring(r)}return this.pos+=n.length,n};function w(t,e){this.view=t,this.cache={".":this.view},this.parent=e}w.prototype.push=function(e){return new w(e,this)};w.prototype.lookup=function(e){var r=this.cache,n;if(r.hasOwnProperty(e))n=r[e];else{for(var o=this,a,i,s,u=!1;o;){if(e.indexOf(".")>0)for(a=o.view,i=e.split("."),s=0;a!=null&&s<i.length;)s===i.length-1&&(u=D(a,i[s])||ce(a,i[s])),a=a[i[s++]];else a=o.view[e],u=D(o.view,e);if(u){n=a;break}o=o.parent}r[e]=n}return G(n)&&(n=n.call(this.view)),n};function y(){this.templateCache={_cache:{},set:function(e,r){this._cache[e]=r},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}y.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};y.prototype.parse=function(e,r){var n=this.templateCache,o=e+":"+(r||g.tags).join(":"),a=typeof n<"u",i=a?n.get(o):void 0;return i==null&&(i=We(e,r),a&&n.set(o,i)),i};y.prototype.render=function(e,r,n,o){var a=this.getConfigTags(o),i=this.parse(e,a),s=r instanceof w?r:new w(r,void 0);return this.renderTokens(i,s,n,e,o)};y.prototype.renderTokens=function(e,r,n,o,a){for(var i="",s,u,c,p=0,d=e.length;p<d;++p)c=void 0,s=e[p],u=s[0],u==="#"?c=this.renderSection(s,r,n,o,a):u==="^"?c=this.renderInverted(s,r,n,o,a):u===">"?c=this.renderPartial(s,r,n,a):u==="&"?c=this.unescapedValue(s,r):u==="name"?c=this.escapedValue(s,r,a):u==="text"&&(c=this.rawValue(s)),c!==void 0&&(i+=c);return i};y.prototype.renderSection=function(e,r,n,o,a){var i=this,s="",u=r.lookup(e[1]);function c(b){return i.render(b,r,n,a)}if(u){if(S(u))for(var p=0,d=u.length;p<d;++p)s+=this.renderTokens(e[4],r.push(u[p]),n,o,a);else if(typeof u=="object"||typeof u=="string"||typeof u=="number")s+=this.renderTokens(e[4],r.push(u),n,o,a);else if(G(u)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");u=u.call(r.view,o.slice(e[3],e[5]),c),u!=null&&(s+=u)}else s+=this.renderTokens(e[4],r,n,o,a);return s}};y.prototype.renderInverted=function(e,r,n,o,a){var i=r.lookup(e[1]);if(!i||S(i)&&i.length===0)return this.renderTokens(e[4],r,n,o,a)};y.prototype.indentPartial=function(e,r,n){for(var o=r.replace(/[^ \t]/g,""),a=e.split(`
`),i=0;i<a.length;i++)a[i].length&&(i>0||!n)&&(a[i]=o+a[i]);return a.join(`
`)};y.prototype.renderPartial=function(e,r,n,o){if(n){var a=this.getConfigTags(o),i=G(n)?n(e[1]):n[e[1]];if(i!=null){var s=e[6],u=e[5],c=e[4],p=i;u==0&&c&&(p=this.indentPartial(i,c,s));var d=this.parse(p,a);return this.renderTokens(d,r,n,p,o)}}};y.prototype.unescapedValue=function(e,r){var n=r.lookup(e[1]);if(n!=null)return n};y.prototype.escapedValue=function(e,r,n){var o=this.getConfigEscape(n)||g.escape,a=r.lookup(e[1]);if(a!=null)return typeof a=="number"&&o===g.escape?String(a):o(a)};y.prototype.rawValue=function(e){return e[1]};y.prototype.getConfigTags=function(e){return S(e)?e:e&&typeof e=="object"?e.tags:void 0};y.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!S(e))return e.escape};var g={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){E.templateCache=t},get templateCache(){return E.templateCache}},E=new y;g.clearCache=function(){return E.clearCache()};g.parse=function(e,r){return E.parse(e,r)};g.render=function(e,r,n,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+le(e)+'" was given as the first argument for mustache#render(template, view, partials)');return E.render(e,r,n,o)};g.escape=de;g.Scanner=C;g.Context=w;g.Writer=y;class Z{constructor(e,r){this.template=e,this.state=r,this.ast=g.parse(e)}getValue(){return this.value===void 0&&(this.value=g.render(this.template,this.state)),this.value}onChange(e){const r=[];for(const n of this.getUsedVariables().values())r.push(this.state.onVariableChange(n).subscribe(()=>{const o=g.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const n of r)n.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,r){for(const n of e){const o=n[0],a=n[1],i=n[4];["name","&","#","^"].includes(o)&&r.add(a),i!==void 0&&typeof i!="string"&&this.recursiveGetUsedVariables(i,r)}}}async function Se(){var t;const e=await J();for(const r of e){const n=(t=r.properties)!==null&&t!==void 0?t:[];for(const o of n){if(o.type==="int"||o.type==="bool"||o.type==="object"||typeof o.value!="string")continue;const a=new Z(o.value,WA.state);if(a.isPureString())continue;const i=a.getValue();await U(r.name,o.name,i),a.onChange(async s=>{await U(r.name,o.name,s)})}}}async function Pe(){var t;const e=await x();for(const[r,n]of e.entries())if(n.type!=="objectgroup"){const o=(t=n.properties)!==null&&t!==void 0?t:[];for(const a of o){if(a.type==="int"||a.type==="bool"||a.type==="object"||typeof a.value!="string")continue;const i=new Z(a.value,WA.state);if(i.isPureString())continue;const s=i.getValue();z(r,a.name,s),i.onChange(u=>{z(r,a.name,u)})}}}async function U(t,e,r){console.log(t),(await WA.room.area.get(t)).setProperty(e,r)}function z(t,e,r){WA.room.setProperty(t,e,r),e==="visible"&&(r?WA.room.showLayer(t):WA.room.hideLayer(t))}const Le="https://admin.workadventu.re/html";let V,j=0,I=0;function F(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const r of e.split(`
`))WA.room.showLayer(r);e=t.properties.mustGetString("closeLayer");for(const r of e.split(`
`))WA.room.hideLayer(r)}else{let e=t.properties.mustGetString("openLayer");for(const r of e.split(`
`))WA.room.hideLayer(r);e=t.properties.mustGetString("closeLayer");for(const r of e.split(`
`))WA.room.showLayer(r)}}function Ee(t){const e=t.properties.getString("openSound"),r=t.properties.getNumber("soundRadius");let n=1;if(r){const o=te(t.properties.mustGetString("openLayer").split(`
`));if(o>r)return;n=1-o/r}e&&WA.sound.loadSound(e).play({volume:n})}function xe(t){const e=t.properties.getString("closeSound"),r=t.properties.getNumber("soundRadius");let n=1;if(r){const o=te(t.properties.mustGetString("closeLayer").split(`
`));if(o>r)return;n=1-o/r}e&&WA.sound.loadSound(e).play({volume:n})}function ee(t){return t.map(e=>V.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function te(t){const e=ee(t),r=Q(e),n=((r.right-r.left)/2+r.left)*32,o=((r.bottom-r.top)/2+r.top)*32;return Math.sqrt(Math.pow(j-n,2)+Math.pow(I-o,2))}function Ce(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?Ee(t):xe(t),F(t)}),F(t)}function H(t,e,r,n){const o=t.name;let a,i,s=!1;const u=r.getString("tag");let c=!0;u&&!WA.player.tags.includes(u)&&(c=!1);const p=!!u;function d(){var l;a&&a.remove(),a=WA.ui.displayActionMessage({message:(l=r.getString("closeTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,b()}})}function b(){var l;a&&a.remove(),a=WA.ui.displayActionMessage({message:(l=r.getString("openTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,d()}})}function T(){let l;if(t.type==="tilelayer")l=Q(ee(e.properties.mustGetString("closeLayer").split(`
`)));else{if(t.x===void 0||t.y===void 0||t.width===void 0||t.height===void 0)throw new Error(`Doorstep zone "${t.name}" is missing x, y, width or height`);l={top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}i=WA.room.website.create({name:"doorKeypad"+o,url:n+"/keypad.html#"+encodeURIComponent(o),position:{x:l.right*32,y:l.top*32,width:32*3,height:32*4},allowApi:!0})}function P(){i&&(WA.room.website.delete(i.name),i=void 0)}function f(){if(s=!0,r.getBoolean("autoOpen")&&c){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(p&&!c||!p)&&(r.getString("code")||r.getString("codeVariable"))){T();return}c&&(WA.state[e.name]?d():b())}function A(){s=!1,r.getBoolean("autoClose")&&(WA.state[e.name]=!1),a&&a.remove(),P()}t.type==="tilelayer"?(WA.room.onEnterLayer(o).subscribe(f),WA.room.onLeaveLayer(o).subscribe(A)):(WA.room.area.onEnter(o).subscribe(f),WA.room.area.onLeave(o).subscribe(A)),WA.state.onVariableChange(e.name).subscribe(()=>{s&&(!r.getBoolean("autoClose")&&WA.state[e.name]===!0&&d(),i&&WA.state[e.name]===!0&&P(),!r.getBoolean("autoOpen")&&WA.state[e.name]===!1&&b())})}function Te(t){const e=t.properties.mustGetString("bellSound"),r=t.properties.getNumber("soundRadius");let n=1;if(r){const o=Math.sqrt(Math.pow(t.x-j,2)+Math.pow(t.y-I,2));if(o>r)return;n=1-o/r}WA.sound.loadSound(e).play({volume:n})}function ke(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&Te(t)})}function K(t,e,r){let n;const o=e.getString("bellPopup");if(r.type==="tilelayer"){const a=r.name;WA.room.onEnterLayer(a).subscribe(()=>{var i;o?n=WA.ui.openPopup(o,"",[{label:(i=e.getString("bellButtonText"))!==null&&i!==void 0?i:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(a).subscribe(()=>{n&&(n.close(),n=void 0)})}else{const a=r.name;WA.room.area.onEnter(a).subscribe(()=>{var i;o?n=WA.ui.openPopup(o,"",[{label:(i=e.getString("bellButtonText"))!==null&&i!==void 0?i:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.area.onLeave(a).subscribe(()=>{n&&(n.close(),n=void 0)})}}async function Me(t){t=t??Le;const e=await oe();V=await x();for(const r of e.values())r.properties.get("door")&&Ce(r),r.properties.get("bell")&&ke(r);for(const r of V.values()){const n=new _(r.properties),o=n.getString("doorVariable");if(o&&r.type==="tilelayer"){const i=e.get(o);if(i===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+r.name+'"');H(r,i,n,t)}const a=n.getString("bellVariable");a&&r.type==="tilelayer"&&K(a,n,r)}for(const r of await J()){const n=new _(r.properties),o=n.getString("doorVariable");if(o){const i=e.get(o);if(i===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of object "'+r.name+'"');H(r,i,n,t)}const a=n.getString("bellVariable");a&&K(a,n,r)}WA.player.onPlayerMove(r=>{j=r.x,I=r.y})}function Re(t,e){const r=t.getString("bindVariable");if(r){const n=t.get("enterValue"),o=t.get("leaveValue"),a=t.getString("triggerMessage"),i=t.getString("tag");Be(r,e,n,o,a,i)}}function Be(t,e,r,n,o,a){a&&!WA.player.tags.includes(a)||(r!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[t]=r)}),n!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=n}))}async function Ve(){const t=await x();for(const e of t.values()){const r=new _(e.properties);Re(r,e.name)}}let q;async function Ge(t){const e=await WA.room.getTiledMap();t=t??$,q=await x();const r=e.layers.find(n=>n.name==="configuration");if(r){const o=new _(r.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const a of q.values()){const i=new _(a.properties),s=i.getString("openConfig");s&&a.type==="tilelayer"&&je(s.split(","),a.name,i)}}}function je(t,e,r){let n;const o=r.getString("openConfigAdminTag");let a=!0;o&&!WA.player.tags.includes(o)&&(a=!1);function i(){var u;n&&n.remove(),n=WA.ui.displayActionMessage({message:(u=r.getString("openConfigTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE or touch here to configure",callback:()=>N(t)})}function s(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const u=r.getString("openConfigTrigger");a&&(u&&u==="onaction"?i():N(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{n&&n.remove(),s()})}function Ie(){return WA.onInit().then(()=>{Me().catch(t=>console.error(t)),Ve().catch(t=>console.error(t)),Ge().catch(t=>console.error(t)),Pe().catch(t=>console.error(t)),Se().catch(t=>console.error(t))}).catch(t=>console.error(t))}console.log("Script started successfully");let h;WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.area.onEnter("Mirror_Duke").subscribe(()=>{WA.room.showLayer("decoration/mirror_duke")}),WA.room.area.onLeave("Mirror_Duke").subscribe(()=>{WA.room.hideLayer("decoration/mirror_duke")}),WA.room.area.onEnter("HiFi_Room").subscribe(()=>{WA.room.hideLayer("HiFi_roof")}),WA.room.area.onLeave("HiFi_Room").subscribe(()=>{WA.room.showLayer("HiFi_roof")}),WA.room.area.onEnter("Praxis_1_Room").subscribe(()=>{WA.room.hideLayer("Praxis_1_roof")}),WA.room.area.onLeave("Praxis_1_Room").subscribe(()=>{WA.room.showLayer("Praxis_1_roof")}),WA.room.area.onEnter("Praxis_2_Room").subscribe(()=>{WA.room.hideLayer("Praxis_2_roof")}),WA.room.area.onLeave("Praxis_2_Room").subscribe(()=>{WA.room.showLayer("Praxis_2_roof")}),WA.room.area.onEnter("Fax_Room").subscribe(()=>{WA.room.hideLayer("Fax_roof")}),WA.room.area.onLeave("Fax_Room").subscribe(()=>{WA.room.showLayer("Fax_roof")}),WA.room.area.onEnter("Bus_Room").subscribe(()=>{WA.room.hideLayer("Bus_Station_Roof")}),WA.room.area.onLeave("Bus_Room").subscribe(()=>{WA.room.showLayer("Bus_Station_Roof")}),WA.room.area.onEnter("tim_01").subscribe(()=>{WA.room.setTiles([{x:76,y:12,tile:"tim",layer:"Stuff_6"},{x:76,y:11,tile:"tim_info_01a",layer:"Above_1"},{x:76,y:12,tile:"tim_info_01b",layer:"Above_1"}])}),WA.room.area.onLeave("tim_01").subscribe(()=>{WA.room.setTiles([{x:76,y:12,tile:null,layer:"Stuff_6"},{x:76,y:11,tile:null,layer:"Above_1"},{x:76,y:12,tile:null,layer:"Above_1"}])}),WA.room.area.onEnter("tim_02").subscribe(()=>{WA.room.setTiles([{x:70,y:60,tile:"tim",layer:"Stuff_6"},{x:70,y:59,tile:"tim_info_01a",layer:"Above_1"},{x:70,y:60,tile:"tim_info_01b",layer:"Above_1"}])}),WA.room.area.onLeave("tim_02").subscribe(()=>{WA.room.setTiles([{x:70,y:60,tile:null,layer:"Stuff_6"},{x:70,y:60,tile:null,layer:"Above_1"},{x:70,y:59,tile:null,layer:"Above_1"}])}),WA.room.area.onEnter("tim_bus_station").subscribe(()=>{WA.room.setTiles([{x:18,y:71,tile:"tim_2",layer:"Stuff_6"},{x:18,y:70,tile:"tim_info_01a",layer:"Above_1"},{x:18,y:71,tile:"tim_info_01b",layer:"Above_1"}])}),WA.room.area.onLeave("tim_bus_station").subscribe(()=>{WA.room.setTiles([{x:18,y:71,tile:null,layer:"Stuff_6"},{x:18,y:71,tile:null,layer:"Above_1"},{x:18,y:70,tile:null,layer:"Above_1"}])}),WA.room.area.onEnter("flat_tv").subscribe(()=>{h=WA.ui.openPopup("Popup_flat_tv","Rezepte auf allen Kanälen?!",[{label:"Next",className:"primary",callback:()=>{t(),h=WA.ui.openPopup("Popup_flat_tv","Ich sollte mal prüfen was hier vor sich geht...",[{label:"Next",className:"primary",callback:()=>{t(),h=WA.ui.openPopup("Popup_flat_tv","Eventuell finde ich Online weitere Info's",[{label:"Close",className:"primary",callback:()=>{t()}}])}}])}}])}),WA.room.area.onLeave("flat_tv").subscribe(t),WA.room.area.onEnter("people_info_01").subscribe(()=>{h=WA.ui.openPopup("Popup_people_info_01","Der neue Film beim Autokino gefällt mir absolut nicht!",[])}),WA.room.area.onLeave("people_info_01").subscribe(t),WA.room.area.onEnter("people_info_02").subscribe(()=>{h=WA.ui.openPopup("Popup_people_info_02","Es wurde mein Rezept von letzter Woche angezeigt",[])}),WA.room.area.onLeave("people_info_02").subscribe(t),WA.room.area.onEnter("people_info_03").subscribe(()=>{h=WA.ui.openPopup("Popup_people_info_03","Auf allen Kanälen laufen unsere Rezepte von der Altstadt Praxis",[])}),WA.room.area.onLeave("people_info_03").subscribe(t),WA.room.area.onEnter("people_info_04").subscribe(()=>{h=WA.ui.openPopup("Popup_people_info_04","Es wurde ein Rezept von meinem Nachbarn gezeigt",[])}),WA.room.area.onLeave("people_info_04").subscribe(t),WA.room.area.onEnter("tim_cinema").subscribe(()=>{h=WA.ui.openPopup("Popup_tim_cinema","⚠️📠🐶🖥️⚠️",[{label:"Next",className:"primary",callback:()=>{t(),h=WA.ui.openPopup("Popup_tim_cinema","Der Hund möchte mir irgendetwas mitteilen, aber seine Sprache scheint chiffriert zu sein...",[{label:"Close",className:"primary",callback:()=>{t()}}])}}])}),WA.room.area.onLeave("tim_cinema").subscribe(t),WA.room.area.onEnter("tim_hifi").subscribe(()=>{h=WA.ui.openPopup("Popup_tim_hifi","🐶💬📲",[{label:"Next",className:"primary",callback:()=>{t(),h=WA.ui.openPopup("Popup_tim_hifi","Ich verstehe ihn einfach nicht, aber ich habe das Gefühl, als ob er mir den TI-Messenger zeigen möchte...",[{label:"Close",className:"primary",callback:()=>{t()}}])}}])}),WA.room.area.onLeave("tim_hifi").subscribe(t),WA.room.area.onEnter("tim_bus").subscribe(()=>{h=WA.ui.openPopup("Popup_tim_bus","Wir sollten schnellstmöglich zur Kommunikationsanlage fahren...",[])}),WA.room.area.onLeave("tim_bus").subscribe(t);function t(){h!==void 0&&(h.close(),h=void 0)}Ie().then(()=>{console.log("Scripting API Extra ready")}).catch(e=>console.error(e))}).catch(t=>console.error(t));
//# sourceMappingURL=main-ad52c04b.js.map
