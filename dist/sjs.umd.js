!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(r.slowJsonStringify={})}(this,function(r){var e=function(r,n){for(var t in r){if(t===n)return[t];if(r[t]&&"object"==typeof r[t]){var i=e(r[t],n);if(i)return i.unshift(t),i}}};r.sjs=function(r){var n=function(r){var n={},t=new Map,i="",u=JSON.stringify(r,function(u,o){var a=Array.isArray(o);return("object"!=typeof o||a)&&(a&&t.set(u,o[0]),function(r){var e=new Set(["number","string","boolean","undefined","array-simple","function"]);if(Array.isArray(r)){if(e.has(r[0])||e.has(typeof r[0]))return;throw new Error('Expected either "array-simple" or a function. received '+r)}if("function"!=typeof r&&!e.has(r))throw new Error('Expected one of: "number", "string", "boolean", "undefined". received '+r)}(o),n[u]=e(r,u),i+='"'+u+'"|'),o});return{map:n,arrais:t,props:i,str:u}}(r),t=n.map,i=n.arrais,u=function(r,e){var n=[],t=r.replace(e,function(r){switch(r){case'"string"':case'"undefined"':return'"__par__"';case'"number"':case'"boolean"':case'["array-simple"]':case"[null]":return"__par__";default:var e=r.match(/(?<=\").+?(?=\")/)[0];return n.push(e),r}}).split("__par__");return{queue:n,chunks:t}}(n.str,new RegExp(n.props+'"(string|number|boolean|undef)"|\\[(.*?)\\]',"gm")),o=u.queue,a=u.chunks,f=a[a.length-1];return function(r){var e="";return o.forEach(function(n,u){var o=function(r,e){return t[n].reduce(function(r,e){return r&&r[e]},r)}(r),f=i.has(n)?function(r,e){if("array-simple"===e)return JSON.stringify(r);for(var n="",t=0,i=r;t<i.length;t+=1)n+=e(i[t])+",";return"["+n.substr(0,n.length-1)+"]"}(o,i.get(n)):o;e+=a[u]+function(){if(void 0!==f)return f;var r=a[u];return 34===r.charCodeAt(r.length-1)?f:'"'+f+'"'}()}),e+f}},r.escape=function(r){var e=r||new RegExp('\\n|\\r|\\t|\\"|\\\\',"gm");return function(r){return r.replace(e,function(r){return"\\"+r})}}});
//# sourceMappingURL=sjs.umd.js.map