var _typeof2=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */(function(global,factory){"use strict";if((typeof module==="undefined"?"undefined":_typeof2(module))==="object"&&_typeof2(module.exports)==="object"){// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}return factory(w);};}else{factory(global);}// Pass this if window is not defined yet
})(typeof window!=="undefined"?window:this,function(window,noGlobal){// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";var arr=[];var document=window.document;var getProto=Object.getPrototypeOf;var _slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var fnToString=hasOwn.toString;var ObjectFunctionString=fnToString.call(Object);var support={};var isFunction=function isFunction(obj){// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
return typeof obj==="function"&&typeof obj.nodeType!=="number";};var isWindow=function isWindow(obj){return obj!=null&&obj===obj.window;};var preservedScriptAttributes={type:true,src:true,noModule:true};function DOMEval(code,doc,node){doc=doc||document;var i,script=doc.createElement("script");script.text=code;if(node){for(i in preservedScriptAttributes){if(node[i]){script[i]=node[i];}}}doc.head.appendChild(script).parentNode.removeChild(script);}function toType(obj){if(obj==null){return obj+"";}// Support: Android <=2.3 only (functionish RegExp)
return(typeof obj==="undefined"?"undefined":_typeof2(obj))==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj==="undefined"?"undefined":_typeof2(obj);}/* global Symbol */// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var version="3.3.1",// Define a local copy of jQuery
jQuery=function jQuery(selector,context){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new jQuery.fn.init(selector,context);},// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;jQuery.fn=jQuery.prototype={// The current version of jQuery being used
jquery:version,constructor:jQuery,// The default length of a jQuery object is 0
length:0,toArray:function toArray(){return _slice.call(this);},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function get(num){// Return all the elements in a clean array
if(num==null){return _slice.call(this);}// Return just the one element from the set
return num<0?this[num+this.length]:this[num];},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function pushStack(elems){// Build a new jQuery matched element set
var ret=jQuery.merge(this.constructor(),elems);// Add the old object onto the stack (as a reference)
ret.prevObject=this;// Return the newly-formed element set
return ret;},// Execute a callback for every element in the matched set.
each:function each(callback){return jQuery.each(this,callback);},map:function map(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function slice(){return this.pushStack(_slice.apply(this,arguments));},first:function first(){return this.eq(0);},last:function last(){return this.eq(-1);},eq:function eq(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function end(){return this.prevObject||this.constructor();},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;// Handle a deep copy situation
if(typeof target==="boolean"){deep=target;// Skip the boolean and the target
target=arguments[i]||{};i++;}// Handle case when target is a string or something (possible in deep copy)
if((typeof target==="undefined"?"undefined":_typeof2(target))!=="object"&&!isFunction(target)){target={};}// Extend jQuery itself if only one argument is passed
if(i===length){target=this;i--;}for(;i<length;i++){// Only deal with non-null/undefined values
if((options=arguments[i])!=null){// Extend the base object
for(name in options){src=target[name];copy=options[name];// Prevent never-ending loop
if(target===copy){continue;}// Recurse if we're merging plain objects or arrays
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=Array.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&Array.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}// Never move original objects, clone them
target[name]=jQuery.extend(deep,clone,copy);// Don't bring in undefined values
}else if(copy!==undefined){target[name]=copy;}}}}// Return the modified object
return target;};jQuery.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:true,error:function error(msg){throw new Error(msg);},noop:function noop(){},isPlainObject:function isPlainObject(obj){var proto,Ctor;// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
if(!obj||toString.call(obj)!=="[object Object]"){return false;}proto=getProto(obj);// Objects with no prototype (e.g., `Object.create( null )`) are plain
if(!proto){return true;}// Objects with prototype are plain iff they were constructed by a global Object function
Ctor=hasOwn.call(proto,"constructor")&&proto.constructor;return typeof Ctor==="function"&&fnToString.call(Ctor)===ObjectFunctionString;},isEmptyObject:function isEmptyObject(obj){/* eslint-disable no-unused-vars */// See https://github.com/eslint/eslint/issues/6125
var name;for(name in obj){return false;}return true;},// Evaluates a script in a global context
globalEval:function globalEval(code){DOMEval(code);},each:function each(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else{for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}return obj;},// Support: Android <=4.0 only
trim:function trim(text){return text==null?"":(text+"").replace(rtrim,"");},// results is for internal usage only
makeArray:function makeArray(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}return ret;},inArray:function inArray(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function merge(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}first.length=i;return first;},grep:function grep(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;// Go through the array, only saving the items
// that pass the validator function
for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}return matches;},// arg is for internal usage only
map:function map(elems,callback,arg){var length,value,i=0,ret=[];// Go through the array, translating each of the items to their new values
if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}// Go through every key on the object,
}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}// Flatten any nested arrays
return concat.apply([],ret);},// A global GUID counter for objects
guid:1,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:support});if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];}// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var length=!!obj&&"length"in obj&&obj.length,type=toType(obj);if(isFunction(obj)||isWindow(obj)){return false;}return type==="array"||length===0||typeof length==="number"&&length>0&&length-1 in obj;}var Sizzle=/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,// Local document vars
setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,// Instance-specific data
expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function sortOrder(a,b){if(a===b){hasDuplicate=true;}return 0;},// Instance methods
hasOwn={}.hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
indexOf=function indexOf(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
whitespace="[\\x20\\t\\r\\n\\f]",// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
identifier="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+// Operator (capture 2)
"*([*^$|!~]?=)"+whitespace+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
// 1. quoted (capture 3; capture 4 or capture 5)
"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+// 2. simple (capture 6)
"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+// 3. anything else (capture 2)
".*"+")\\)|)",// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),// For use in libraries implementing .is()
// We use this for POS matching in `select`
"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,// Easily-parseable/retrievable ID or TAG or CLASS selectors
rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function funescape(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
return high!==high||escapedWhitespace?escaped:high<0?// BMP codepoint
String.fromCharCode(high+0x10000):// Supplemental Plane codepoint (surrogate pair)
String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,fcssescape=function fcssescape(ch,asCodePoint){if(asCodePoint){// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
if(ch==="\0"){return"\uFFFD";}// Control characters and (dependent upon position) numbers get escaped as code points
return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" ";}// Other potentially-special ASCII characters get backslash-escaped
return"\\"+ch;},// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
unloadHandler=function unloadHandler(){setDocument();},disabledAncestor=addCombinator(function(elem){return elem.disabled===true&&("form"in elem||"label"in elem);},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{push.apply(arr=slice.call(preferredDoc.childNodes),preferredDoc.childNodes);// Support: Android<4.0
// Detect silently failing push.apply
arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?// Leverage slice if possible
function(target,els){push_native.apply(target,slice.call(els));}:// Support: IE<9
// Otherwise append directly
function(target,els){var j=target.length,i=0;// Can't trust NodeList.length
while(target[j++]=els[i++]){}target.length=j-1;}};}function Sizzle(selector,context,results,seed){var m,i,elem,nid,match,groups,newSelector,newContext=context&&context.ownerDocument,// nodeType defaults to 9, since context defaults to document
nodeType=context?context.nodeType:9;results=results||[];// Return early from calls with invalid selector or context
if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!seed){if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}context=context||document;if(documentIsHTML){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(nodeType!==11&&(match=rquickExpr.exec(selector))){// ID selector
if(m=match[1]){// Document context
if(nodeType===9){if(elem=context.getElementById(m)){// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(elem.id===m){results.push(elem);return results;}}else{return results;}// Element context
}else{// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}// Type selector
}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;// Class selector
}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}// Take advantage of querySelectorAll
if(support.qsa&&!compilerCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))){if(nodeType!==1){newContext=context;newSelector=selector;// qSA looks outside Element context, which is not what we want
// Thanks to Andrew Dupont for this workaround technique
// Support: IE <=8
// Exclude object elements
}else if(context.nodeName.toLowerCase()!=="object"){// Capture the context ID, setting it first if necessary
if(nid=context.getAttribute("id")){nid=nid.replace(rcssescape,fcssescape);}else{context.setAttribute("id",nid=expando);}// Prefix every selector in the list
groups=tokenize(selector);i=groups.length;while(i--){groups[i]="#"+nid+" "+toSelector(groups[i]);}newSelector=groups.join(",");// Expand context for sibling selectors
newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;}if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally{if(nid===expando){context.removeAttribute("id");}}}}}}// All others
return select(selector.replace(rtrim,"$1"),context,results,seed);}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function createCache(){var keys=[];function cache(key,value){// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
if(keys.push(key+" ")>Expr.cacheLength){// Only keep the most recent entries
delete cache[keys.shift()];}return cache[key+" "]=value;}return cache;}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */function markFunction(fn){fn[expando]=true;return fn;}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function assert(fn){var el=document.createElement("fieldset");try{return!!fn(el);}catch(e){return false;}finally{// Remove from its parent by default
if(el.parentNode){el.parentNode.removeChild(el);}// release memory in IE
el=null;}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&a.sourceIndex-b.sourceIndex;// Use IE sourceIndex if available on both nodes
if(diff){return diff;}// Check if b follows a
if(cur){while(cur=cur.nextSibling){if(cur===b){return-1;}}}return a?1:-1;}/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function createDisabledPseudo(disabled){// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(elem){// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
if("form"in elem){// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
if(elem.parentNode&&elem.disabled===false){// Option elements defer to a parent optgroup if present
if("label"in elem){if("label"in elem.parentNode){return elem.parentNode.disabled===disabled;}else{return elem.disabled===disabled;}}// Support: IE 6 - 11
// Use the isDisabled shortcut property to check for disabled fieldset ancestors
return elem.isDisabled===disabled||// Where there is no isDisabled, check manually
/* jshint -W018 */elem.isDisabled!==!disabled&&disabledAncestor(elem)===disabled;}return elem.disabled===disabled;// Try to winnow out elements that can't be disabled before trusting the disabled property.
// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
// even exist on them, let alone have a boolean value.
}else if("label"in elem){return elem.disabled===disabled;}// Remaining elements are neither :enabled nor :disabled
return false;};}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;// Match elements found at the specified indexes
while(i--){if(seed[j=matchIndexes[i]]){seed[j]=!(matches[j]=seed[j]);}}});});}/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}// Expose support vars for convenience
support=Sizzle.support={};/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */isXML=Sizzle.isXML=function(elem){// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */setDocument=Sizzle.setDocument=function(node){var hasCompare,subWindow,doc=node?node.ownerDocument||node:preferredDoc;// Return early if doc is invalid or already selected
if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}// Update global variables
document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document);// Support: IE 9-11, Edge
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
if(preferredDoc!==document&&(subWindow=document.defaultView)&&subWindow.top!==subWindow){// Support: IE 11, Edge
if(subWindow.addEventListener){subWindow.addEventListener("unload",unloadHandler,false);// Support: IE 9 - 10 only
}else if(subWindow.attachEvent){subWindow.attachEvent("onunload",unloadHandler);}}/* Attributes
	---------------------------------------------------------------------- */// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
support.attributes=assert(function(el){el.className="i";return!el.getAttribute("className");});/* getElement(s)By*
	---------------------------------------------------------------------- */// Check if getElementsByTagName("*") returns only elements
support.getElementsByTagName=assert(function(el){el.appendChild(document.createComment(""));return!el.getElementsByTagName("*").length;});// Support: IE<9
support.getElementsByClassName=rnative.test(document.getElementsByClassName);// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
support.getById=assert(function(el){docElem.appendChild(el).id=expando;return!document.getElementsByName||!document.getElementsByName(expando).length;});// ID filter and find
if(support.getById){Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var elem=context.getElementById(id);return elem?[elem]:[];}};}else{Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var node,i,elems,elem=context.getElementById(id);if(elem){// Verify the id attribute
node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}// Fall back on getElementsByName
elems=context.getElementsByName(id);i=0;while(elem=elems[i++]){node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}}}return[];}};}// Tag
Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);// DocumentFragment nodes don't have gEBTN
}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0,// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
results=context.getElementsByTagName(tag);// Filter out possible comments
if(tag==="*"){while(elem=results[i++]){if(elem.nodeType===1){tmp.push(elem);}}return tmp;}return results;};// Class
Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}};/* QSA/matchesSelector
	---------------------------------------------------------------------- */// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
rbuggyMatches=[];// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See https://bugs.jquery.com/ticket/13378
rbuggyQSA=[];if(support.qsa=rnative.test(document.querySelectorAll)){// Build QSA regex
// Regex strategy adopted from Diego Perini
assert(function(el){// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
docElem.appendChild(el).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>";// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
if(el.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}// Support: IE8
// Boolean attributes and "value" are not treated correctly
if(!el.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
if(!el.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
if(!el.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
if(!el.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(el){el.innerHTML="<a href='' disabled='disabled'></a>"+"<select disabled='disabled'><option/></select>";// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var input=document.createElement("input");input.setAttribute("type","hidden");el.appendChild(input).setAttribute("name","D");// Support: IE8
// Enforce case-sensitivity of name attribute
if(el.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");}// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
if(el.querySelectorAll(":enabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
docElem.appendChild(el).disabled=true;if(el.querySelectorAll(":disabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}// Opera 10-11 does not throw on post-comma invalid pseudos
el.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}if(support.matchesSelector=rnative.test(matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)){assert(function(el){// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
support.disconnectedMatch=matches.call(el,"*");// This should fail with an exception
// Gecko does not error, returns false instead
matches.call(el,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));/* Contains
	---------------------------------------------------------------------- */hasCompare=rnative.test(docElem.compareDocumentPosition);// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return true;}}}return false;};/* Sorting
	---------------------------------------------------------------------- */// Document order sorting
sortOrder=hasCompare?function(a,b){// Flag for duplicate removal
if(a===b){hasDuplicate=true;return 0;}// Sort on method existence if only one input has compareDocumentPosition
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}// Calculate position if both inputs belong to the same document
compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):// Otherwise we know they are disconnected
1;// Disconnected nodes
if(compare&1||!support.sortDetached&&b.compareDocumentPosition(a)===compare){// Choose the first element that is related to our preferred document
if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1;}if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;}// Maintain original order
return sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;}return compare&4?-1:1;}:function(a,b){// Exit early if the nodes are identical
if(a===b){hasDuplicate=true;return 0;}var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];// Parentless nodes are either documents or disconnected
if(!aup||!bup){return a===document?-1:b===document?1:aup?-1:bup?1:sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;// If the nodes are siblings, we can do a quick check
}else if(aup===bup){return siblingCheck(a,b);}// Otherwise we need full lists of their ancestors for comparison
cur=a;while(cur=cur.parentNode){ap.unshift(cur);}cur=b;while(cur=cur.parentNode){bp.unshift(cur);}// Walk down the tree looking for a discrepancy
while(ap[i]===bp[i]){i++;}return i?// Do a sibling check if the nodes have a common ancestor
siblingCheck(ap[i],bp[i]):// Otherwise nodes in our document sort first
ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){// Set document vars if needed
if((elem.ownerDocument||elem)!==document){setDocument(elem);}// Make sure that attribute selectors are quoted
expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&!compilerCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);// IE 9's matchesSelector returns false on disconnected nodes
if(ret||support.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){// Set document vars if needed
if((context.ownerDocument||context)!==document){setDocument(context);}return contains(context,elem);};Sizzle.attr=function(elem,name){// Set document vars if needed
if((elem.ownerDocument||elem)!==document){setDocument(elem);}var fn=Expr.attrHandle[name.toLowerCase()],// Don't get fooled by Object.prototype properties (jQuery #13807)
val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.escape=function(sel){return(sel+"").replace(rcssescape,fcssescape);};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;// Unless we *know* we can detect duplicates, assume their presence
hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while(elem=results[i++]){if(elem===results[i]){j=duplicates.push(i);}}while(j--){results.splice(duplicates[j],1);}}// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
sortInput=null;return results;};/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){// If no nodeType, this is expected to be an array
while(node=elem[i++]){// Do not traverse comment nodes
ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if(typeof elem.textContent==="string"){return elem.textContent;}else{// Traverse its children
for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}// Do not include comment or processing instruction nodes
return ret;};Expr=Sizzle.selectors={// Can be adjusted by the user
cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function ATTR(match){match[1]=match[1].replace(runescape,funescape);// Move the given value to match[3] whether quoted or unquoted
match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}return match.slice(0,4);},"CHILD":function CHILD(match){/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){// nth-* requires argument
if(!match[3]){Sizzle.error(match[0]);}// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+(match[7]+match[8]||match[3]==="odd");// other types prohibit arguments
}else if(match[3]){Sizzle.error(match[0]);}return match;},"PSEUDO":function PSEUDO(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}// Accept quoted arguments as-is
if(match[3]){match[2]=match[4]||match[5]||"";// Strip excess characters from unquoted arguments
}else if(unquoted&&rpseudo.test(unquoted)&&(// Get excess from tokenize (recursively)
excess=tokenize(unquoted,true))&&(// advance to the next closing parenthesis
excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){// excess is a negative index
match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}// Return only captures needed by the pseudo filter method (type and argument)
return match.slice(0,3);}},filter:{"TAG":function TAG(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function CLASS(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function ATTR(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}if(!operator){return true;}result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function CHILD(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?// Shortcut for :nth-*(n)
function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){// :(first|last|only)-(child|of-type)
if(simple){while(dir){node=elem;while(node=node[dir]){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}// Reverse direction for :only-* (if we haven't yet done so)
start=dir=type==="only"&&!start&&"nextSibling";}return true;}start=[forward?parent.firstChild:parent.lastChild];// non-xml :nth-child(...) stores cache data on `parent`
if(forward&&useCache){// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
node=parent;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while(node=++nodeIndex&&node&&node[dir]||(// Fallback to seeking `elem` from the start
diff=nodeIndex=0)||start.pop()){// When found, cache indexes on `parent` and break
if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break;}}}else{// Use previously-cached element index if available
if(useCache){// ...in a gzip-friendly way
node=elem;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;}// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(diff===false){// Use the same loop as above to seek `elem` from the start
while(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop()){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){// Cache the index of each encountered element
if(useCache){outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];}if(node===elem){break;}}}}}// Incorporate the offset, then check against cycle size
diff-=last;return diff===first||diff%first===0&&diff/first>=0;}};},"PSEUDO":function PSEUDO(pseudo,argument){// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
if(fn[expando]){return fn(argument);}// But maintain support for old signatures
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}return fn;}},pseudos:{// Potentially complex pseudos
"not":markFunction(function(selector){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;// Match elements unmatched by `matcher`
while(i--){if(elem=unmatched[i]){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);// Don't keep the element (issue #299)
input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
"lang":markFunction(function(lang){// lang value must be a valid identifier
if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if(elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang")){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),// Miscellaneous
"target":function target(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function root(elem){return elem===docElem;},"focus":function focus(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},// Boolean properties
"enabled":createDisabledPseudo(false),"disabled":createDisabledPseudo(true),"checked":function checked(elem){// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var nodeName=elem.nodeName.toLowerCase();return nodeName==="input"&&!!elem.checked||nodeName==="option"&&!!elem.selected;},"selected":function selected(elem){// Accessing this property makes selected-by-default
// options in Safari work properly
if(elem.parentNode){elem.parentNode.selectedIndex;}return elem.selected===true;},// Contents
"empty":function empty(elem){// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}return true;},"parent":function parent(elem){return!Expr.pseudos["empty"](elem);},// Element/input types
"header":function header(elem){return rheader.test(elem.nodeName);},"input":function input(elem){return rinputs.test(elem.nodeName);},"button":function button(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function text(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&(// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
(attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},// Position-in-collection
"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];// Add button/input type pseudos
for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}// Easy API for creating new setFilters
function setFilters(){}setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){// Comma and first run
if(!matched||(match=rcomma.exec(soFar))){if(match){// Don't consume trailing commas as valid
soFar=soFar.slice(match[0].length)||soFar;}groups.push(tokens=[]);}matched=false;// Combinators
if(match=rcombinators.exec(soFar)){matched=match.shift();tokens.push({value:matched,// Cast descendant combinators to space
type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}// Filters
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}if(!matched){break;}}// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
return parseOnly?soFar.length:soFar?Sizzle.error(selector):// Cache the tokens
tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}return selector;}function addCombinator(matcher,combinator,base){var dir=combinator.dir,skip=combinator.next,key=skip||dir,checkNonElements=base&&key==="parentNode",doneName=done++;return combinator.first?// Check against closest ancestor/preceding element
function(elem,context,xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}return false;}:// Check against all ancestor/preceding elements
function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if(skip&&skip===elem.nodeName.toLowerCase()){elem=elem[dir]||elem;}else if((oldCache=uniqueCache[key])&&oldCache[0]===dirruns&&oldCache[1]===doneName){// Assign to newCache so results back-propagate to previous elements
return newCache[2]=oldCache[2];}else{// Reuse newcache so results back-propagate to previous elements
uniqueCache[key]=newCache;// A match means we're done; a fail means we have to keep checking
if(newCache[2]=matcher(elem,context,xml)){return true;}}}}}return false;};}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}return true;}:matchers[0];}function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}return results;}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if(elem=unmatched[i]){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}return newUnmatched;}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,// Get initial elements from seed or context
elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),// Prefilter to get matcher input, preserving a map for seed-results synchronization
matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
postFinder||(seed?preFilter:preexisting||postFilter)?// ...intermediate processing is necessary
[]:// ...otherwise use results directly
results:matcherIn;// Find primary matches
if(matcher){matcher(matcherIn,matcherOut,context,xml);}// Apply postFilter
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);// Un-match failing elements by moving them back to matcherIn
i=temp.length;while(i--){if(elem=temp[i]){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}if(seed){if(postFinder||preFilter){if(postFinder){// Get the final matcherOut by condensing this intermediate into postFinder contexts
temp=[];i=matcherOut.length;while(i--){if(elem=matcherOut[i]){// Restore matcherIn since elem is not yet a final match
temp.push(matcherIn[i]=elem);}}postFinder(null,matcherOut=[],temp,xml);}// Move matched elements from seed to results to keep them synchronized
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}// Add elements to results, through postFinder if defined
}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,// The foundational matcher ensures that elements are reachable from top-level context(s)
matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=!leadingRelative&&(xml||context!==outermostContext)||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));// Avoid hanging onto element (issue #299)
checkContext=null;return ret;}];for(;i<len;i++){if(matcher=Expr.relative[tokens[i].type]){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);// Return special upon seeing a positional matcher
if(matcher[expando]){// Find the next relative operator (if any) for proper handling
j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens(tokens=tokens.slice(j)),j<len&&toSelector(tokens));}matchers.push(matcher);}}return elementMatcher(matchers);}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function superMatcher(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,// We must always have either seed elements or outermost context
elems=seed||byElement&&Expr.find["TAG"]("*",outermost),// Use integer dirruns iff this is the outermost matcher
dirrunsUnique=dirruns+=contextBackup==null?1:Math.random()||0.1,len=elems.length;if(outermost){outermostContext=context===document||context||outermost;}// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!==document){setDocument(elem);xml=!documentIsHTML;}while(matcher=elementMatchers[j++]){if(matcher(elem,context||document,xml)){results.push(elem);break;}}if(outermost){dirruns=dirrunsUnique;}}// Track unmatched elements for set filters
if(bySet){// They will have gone through all possible matchers
if(elem=!matcher&&elem){matchedCount--;}// Lengthen the array for every element, matched or not
if(seed){unmatched.push(elem);}}}// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
matchedCount+=i;// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(bySet&&i!==matchedCount){j=0;while(matcher=setMatchers[j++]){matcher(unmatched,setMatched,context,xml);}if(seed){// Reintegrate element matches to eliminate the need for sorting
if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}// Discard index placeholder values to get only actual matches
setMatched=condense(setMatched);}// Add matches to results
push.apply(results,setMatched);// Seedless set matches succeeding multiple successful matchers stipulate sorting
if(outermost&&!seed&&setMatched.length>0&&matchedCount+setMatchers.length>1){Sizzle.uniqueSort(results);}}// Override manipulation of globals by nested matchers
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}compile=Sizzle.compile=function(selector,match/* Internal Use Only */){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){// Generate a function of recursive functions that can be used to check each element
if(!match){match=tokenize(selector);}i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}// Cache the compiled function
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));// Save selector and tokenization
cached.selector=selector;}return cached;};/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize(selector=compiled.selector||selector);results=results||[];// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(match.length===1){// Reduce context if the leading compound selector is an ID
tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;// Precompiled matchers will still verify ancestry, so step up a level
}else if(compiled){context=context.parentNode;}selector=selector.slice(tokens.shift().value.length);}// Fetch a seed set for right-to-left matching
i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];// Abort if we hit a combinator
if(Expr.relative[type=token.type]){break;}if(find=Expr.find[type]){// Search, expanding context for leading sibling combinators
if(seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context)){// If seed is empty or no tokens remain, we can return early
tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}break;}}}}// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};// One-time assignments
// Sort stability
support.sortStable=expando.split("").sort(sortOrder).join("")===expando;// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates=!!hasDuplicate;// Initialize against the default document
setDocument();// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached=assert(function(el){// Should return 1, but returns 4 (following)
return el.compareDocumentPosition(document.createElement("fieldset"))&1;});// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if(!assert(function(el){el.innerHTML="<a href='#'></a>";return el.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if(!support.attributes||!assert(function(el){el.innerHTML="<input/>";el.firstChild.setAttribute("value","");return el.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if(!assert(function(el){return el.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}return Sizzle;}(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;// Deprecated
jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;jQuery.escapeSelector=Sizzle.escape;var dir=function dir(elem,_dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[_dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}matched.push(elem);}}return matched;};var _siblings=function _siblings(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}return matched;};var rneedsContext=jQuery.expr.match.needsContext;function nodeName(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();};var rsingleTag=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;// Implement the identical functionality for filter and not
function winnow(elements,qualifier,not){if(isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}// Single element
if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return elem===qualifier!==not;});}// Arraylike of elements (jQuery, arguments, Array)
if(typeof qualifier!=="string"){return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>-1!==not;});}// Filtered directly for both simple and complex selectors
return jQuery.filter(qualifier,elements,not);}jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}if(elems.length===1&&elem.nodeType===1){return jQuery.find.matchesSelector(elem,expr)?[elem]:[];}return jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function find(selector){var i,ret,len=this.length,self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}ret=this.pushStack([]);for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}return len>1?jQuery.uniqueSort(ret):ret;},filter:function filter(selector){return this.pushStack(winnow(this,selector||[],false));},not:function not(selector){return this.pushStack(winnow(this,selector||[],true));},is:function is(selector){return!!winnow(this,// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var rootjQuery,// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!selector){return this;}// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
root=root||rootjQuery;// Handle HTML strings
if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){// Assume that strings that start and end with <> are HTML and skip the regex check
match=[null,selector,null];}else{match=rquickExpr.exec(selector);}// Match html or make sure no context is specified for #id
if(match&&(match[1]||!context)){// HANDLE: $(html) -> $(array)
if(match[1]){context=context instanceof jQuery?context[0]:context;// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));// HANDLE: $(html, props)
if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){// Properties of context are called as methods if possible
if(isFunction(this[match])){this[match](context[match]);// ...and otherwise set as attributes
}else{this.attr(match,context[match]);}}}return this;// HANDLE: $(#id)
}else{elem=document.getElementById(match[2]);if(elem){// Inject the element directly into the jQuery object
this[0]=elem;this.length=1;}return this;}// HANDLE: $(expr, $(...))
}else if(!context||context.jquery){return(context||root).find(selector);// HANDLE: $(expr, context)
// (which is just equivalent to: $(context).find(expr)
}else{return this.constructor(context).find(selector);}// HANDLE: $(DOMElement)
}else if(selector.nodeType){this[0]=selector;this.length=1;return this;// HANDLE: $(function)
// Shortcut for document ready
}else if(isFunction(selector)){return root.ready!==undefined?root.ready(selector):// Execute immediately if ready is not present
selector(jQuery);}return jQuery.makeArray(selector,this);};// Give the init function the jQuery prototype for later instantiation
init.prototype=jQuery.fn;// Initialize central reference
rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,// Methods guaranteed to produce a unique set when starting from a unique set
guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function has(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function closest(selectors,context){var cur,i=0,l=this.length,matched=[],targets=typeof selectors!=="string"&&jQuery(selectors);// Positional selectors never match, since there's no _selection_ context
if(!rneedsContext.test(selectors)){for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){// Always skip document fragments
if(cur.nodeType<11&&(targets?targets.index(cur)>-1:// Don't pass non-elements to Sizzle
cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}}return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);},// Determine the position of an element within the set
index:function index(elem){// No argument, return index in parent
if(!elem){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1;}// Index in selector
if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);}// Locate the position of the desired element
return indexOf.call(this,// If it receives a jQuery object, the first element is used
elem.jquery?elem[0]:elem);},add:function add(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function addBack(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}return cur;}jQuery.each({parent:function parent(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function parents(elem){return dir(elem,"parentNode");},parentsUntil:function parentsUntil(elem,i,until){return dir(elem,"parentNode",until);},next:function next(elem){return sibling(elem,"nextSibling");},prev:function prev(elem){return sibling(elem,"previousSibling");},nextAll:function nextAll(elem){return dir(elem,"nextSibling");},prevAll:function prevAll(elem){return dir(elem,"previousSibling");},nextUntil:function nextUntil(elem,i,until){return dir(elem,"nextSibling",until);},prevUntil:function prevUntil(elem,i,until){return dir(elem,"previousSibling",until);},siblings:function siblings(elem){return _siblings((elem.parentNode||{}).firstChild,elem);},children:function children(elem){return _siblings(elem.firstChild);},contents:function contents(elem){if(nodeName(elem,"iframe")){return elem.contentDocument;}// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
// Treat the template element as a regular one in browsers that
// don't support it.
if(nodeName(elem,"template")){elem=elem.content||elem;}return jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}if(this.length>1){// Remove duplicates
if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);}// Reverse order for parents* and prev-derivatives
if(rparentsprev.test(name)){matched.reverse();}}return this.pushStack(matched);};});var rnothtmlwhite=/[^\x20\t\r\n\f]+/g;// Convert String-formatted options into Object-formatted ones
function createOptions(options){var object={};jQuery.each(options.match(rnothtmlwhite)||[],function(_,flag){object[flag]=true;});return object;}/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */jQuery.Callbacks=function(options){// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var// Flag to know if list is currently firing
firing,// Last fire value for non-forgettable lists
memory,// Flag to know if list was already fired
_fired,// Flag to prevent firing
_locked,// Actual callback list
list=[],// Queue of execution data for repeatable lists
queue=[],// Index of currently firing callback (modified by add/remove as needed)
firingIndex=-1,// Fire callbacks
fire=function fire(){// Enforce single-firing
_locked=_locked||options.once;// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
_fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){// Run callback and check for early termination
if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){// Jump to end and forget the data so .add doesn't re-fire
firingIndex=list.length;memory=false;}}}// Forget the data if we're done with it
if(!options.memory){memory=false;}firing=false;// Clean up if we're done firing for good
if(_locked){// Keep an empty list if we have data for future add calls
if(memory){list=[];// Otherwise, this object is spent
}else{list="";}}},// Actual Callbacks object
self={// Add a callback or a collection of callbacks to the list
add:function add(){if(list){// If we have memory from a past run, we should fire after adding
if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}(function add(args){jQuery.each(args,function(_,arg){if(isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&toType(arg)!=="string"){// Inspect recursively
add(arg);}});})(arguments);if(memory&&!firing){fire();}}return this;},// Remove a callback from the list
remove:function remove(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);// Handle firing indexes
if(index<=firingIndex){firingIndex--;}}});return this;},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function has(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;},// Remove all callbacks from the list
empty:function empty(){if(list){list=[];}return this;},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function disable(){_locked=queue=[];list=memory="";return this;},disabled:function disabled(){return!list;},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function lock(){_locked=queue=[];if(!memory&&!firing){list=memory="";}return this;},locked:function locked(){return!!_locked;},// Call all callbacks with the given context and arguments
fireWith:function fireWith(context,args){if(!_locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}return this;},// Call all the callbacks with the given arguments
fire:function fire(){self.fireWith(this,arguments);return this;},// To know if the callbacks have already been called at least once
fired:function fired(){return!!_fired;}};return self;};function Identity(v){return v;}function Thrower(ex){throw ex;}function adoptValue(value,resolve,reject,noValue){var method;try{// Check for promise aspect first to privilege synchronous behavior
if(value&&isFunction(method=value.promise)){method.call(value).done(resolve).fail(reject);// Other thenables
}else if(value&&isFunction(method=value.then)){method.call(value,resolve,reject);// Other non-thenables
}else{// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
resolve.apply(undefined,[value].slice(noValue));}// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(value){// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
reject.apply(undefined,[value]);}}jQuery.extend({Deferred:function Deferred(func){var tuples=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",jQuery.Callbacks("memory"),jQuery.Callbacks("memory"),2],["resolve","done",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),0,"resolved"],["reject","fail",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),1,"rejected"]],_state="pending",_promise={state:function state(){return _state;},always:function always(){deferred.done(arguments).fail(arguments);return this;},"catch":function _catch(fn){return _promise.then(null,fn);},// Keep pipe for back-compat
pipe:function pipe()/* fnDone, fnFail, fnProgress */{var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var fn=isFunction(fns[tuple[4]])&&fns[tuple[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else{newDefer[tuple[0]+"With"](this,fn?[returned]:arguments);}});});fns=null;}).promise();},then:function then(onFulfilled,onRejected,onProgress){var maxDepth=0;function resolve(depth,deferred,handler,special){return function(){var that=this,args=arguments,mightThrow=function mightThrow(){var returned,then;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(depth<maxDepth){return;}returned=handler.apply(that,args);// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if(returned===deferred.promise()){throw new TypeError("Thenable self-resolution");}// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
then=returned&&(// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
(typeof returned==="undefined"?"undefined":_typeof2(returned))==="object"||typeof returned==="function")&&returned.then;// Handle a returned thenable
if(isFunction(then)){// Special processors (notify) just wait for resolution
if(special){then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special));// Normal processors (resolve) also hook into progress
}else{// ...and disregard older resolution values
maxDepth++;then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special),resolve(maxDepth,deferred,Identity,deferred.notifyWith));}// Handle all other returned values
}else{// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
if(handler!==Identity){that=undefined;args=[returned];}// Process the value(s)
// Default process is resolve
(special||deferred.resolveWith)(that,args);}},// Only normal processors (resolve) catch and reject exceptions
process=special?mightThrow:function(){try{mightThrow();}catch(e){if(jQuery.Deferred.exceptionHook){jQuery.Deferred.exceptionHook(e,process.stackTrace);}// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
if(depth+1>=maxDepth){// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
if(handler!==Thrower){that=undefined;args=[e];}deferred.rejectWith(that,args);}}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
if(depth){process();}else{// Call an optional hook to record the stack, in case of exception
// since it's otherwise lost when execution goes async
if(jQuery.Deferred.getStackHook){process.stackTrace=jQuery.Deferred.getStackHook();}window.setTimeout(process);}};}return jQuery.Deferred(function(newDefer){// progress_handlers.add( ... )
tuples[0][3].add(resolve(0,newDefer,isFunction(onProgress)?onProgress:Identity,newDefer.notifyWith));// fulfilled_handlers.add( ... )
tuples[1][3].add(resolve(0,newDefer,isFunction(onFulfilled)?onFulfilled:Identity));// rejected_handlers.add( ... )
tuples[2][3].add(resolve(0,newDefer,isFunction(onRejected)?onRejected:Thrower));}).promise();},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function promise(obj){return obj!=null?jQuery.extend(obj,_promise):_promise;}},deferred={};// Add list-specific methods
jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[5];// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
_promise[tuple[1]]=list.add;// Handle state
if(stateString){list.add(function(){// state = "resolved" (i.e., fulfilled)
// state = "rejected"
_state=stateString;},// rejected_callbacks.disable
// fulfilled_callbacks.disable
tuples[3-i][2].disable,// rejected_handlers.disable
// fulfilled_handlers.disable
tuples[3-i][3].disable,// progress_callbacks.lock
tuples[0][2].lock,// progress_handlers.lock
tuples[0][3].lock);}// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
list.add(tuple[3].fire);// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?undefined:this,arguments);return this;};// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
deferred[tuple[0]+"With"]=list.fireWith;});// Make the deferred a promise
_promise.promise(deferred);// Call given func if any
if(func){func.call(deferred,deferred);}// All done!
return deferred;},// Deferred helper
when:function when(singleValue){var// count of uncompleted subordinates
remaining=arguments.length,// count of unprocessed arguments
i=remaining,// subordinate fulfillment data
resolveContexts=Array(i),resolveValues=_slice.call(arguments),// the master Deferred
master=jQuery.Deferred(),// subordinate callback factory
updateFunc=function updateFunc(i){return function(value){resolveContexts[i]=this;resolveValues[i]=arguments.length>1?_slice.call(arguments):value;if(! --remaining){master.resolveWith(resolveContexts,resolveValues);}};};// Single- and empty arguments are adopted like Promise.resolve
if(remaining<=1){adoptValue(singleValue,master.done(updateFunc(i)).resolve,master.reject,!remaining);// Use .then() to unwrap secondary thenables (cf. gh-3000)
if(master.state()==="pending"||isFunction(resolveValues[i]&&resolveValues[i].then)){return master.then();}}// Multiple arguments are aggregated like Promise.all array elements
while(i--){adoptValue(resolveValues[i],updateFunc(i),master.reject);}return master.promise();}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;jQuery.Deferred.exceptionHook=function(error,stack){// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
if(window.console&&window.console.warn&&error&&rerrorNames.test(error.name)){window.console.warn("jQuery.Deferred exception: "+error.message,error.stack,stack);}};jQuery.readyException=function(error){window.setTimeout(function(){throw error;});};// The deferred used on DOM ready
var readyList=jQuery.Deferred();jQuery.fn.ready=function(fn){readyList.then(fn)// Wrap jQuery.readyException in a function so that the lookup
// happens at the time of error handling instead of callback
// registration.
.catch(function(error){jQuery.readyException(error);});return this;};jQuery.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:false,// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,// Handle when the DOM is ready
ready:function ready(wait){// Abort if there are pending holds or we're already ready
if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}// Remember that the DOM is ready
jQuery.isReady=true;// If a normal DOM Ready event fired, decrement, and wait if need be
if(wait!==true&&--jQuery.readyWait>0){return;}// If there are functions bound, to execute
readyList.resolveWith(document,[jQuery]);}});jQuery.ready.then=readyList.then;// The ready event handler and self cleanup method
function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if(document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll){// Handle it asynchronously to allow scripts the opportunity to delay ready
window.setTimeout(jQuery.ready);}else{// Use the handy event callback
document.addEventListener("DOMContentLoaded",completed);// A fallback to window.onload, that will always work
window.addEventListener("load",completed);}// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access=function access(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;// Sets many values
if(toType(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);}// Sets one value
}else if(value!==undefined){chainable=true;if(!isFunction(value)){raw=true;}if(bulk){// Bulk operations run against the entire set
if(raw){fn.call(elems,value);fn=null;// ...except when executing function values
}else{bulk=fn;fn=function fn(elem,key,value){return bulk.call(jQuery(elem),value);};}}if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}if(chainable){return elems;}// Gets
if(bulk){return fn.call(elems);}return len?fn(elems[0],key):emptyGet;};// Matches dashed string for camelizing
var rmsPrefix=/^-ms-/,rdashAlpha=/-([a-z])/g;// Used by camelCase as callback to replace()
function fcamelCase(all,letter){return letter.toUpperCase();}// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);}var acceptData=function acceptData(owner){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return owner.nodeType===1||owner.nodeType===9||!+owner.nodeType;};function Data(){this.expando=jQuery.expando+Data.uid++;}Data.uid=1;Data.prototype={cache:function cache(owner){// Check if the owner object already has a cache
var value=owner[this.expando];// If not, create one
if(!value){value={};// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
if(acceptData(owner)){// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
if(owner.nodeType){owner[this.expando]=value;// Otherwise secure it in a non-enumerable property
// configurable must be true to allow the property to be
// deleted when data is removed
}else{Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}return value;},set:function set(owner,data,value){var prop,cache=this.cache(owner);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if(typeof data==="string"){cache[camelCase(data)]=value;// Handle: [ owner, { properties } ] args
}else{// Copy the properties one-by-one to the cache object
for(prop in data){cache[camelCase(prop)]=data[prop];}}return cache;},get:function get(owner,key){return key===undefined?this.cache(owner):// Always use camelCase key (gh-2257)
owner[this.expando]&&owner[this.expando][camelCase(key)];},access:function access(owner,key,value){// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
if(key===undefined||key&&typeof key==="string"&&value===undefined){return this.get(owner,key);}// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(owner,key,value);// Since the "set" path can have two possible entry points
// return the expected data based on which path was taken[*]
return value!==undefined?value:key;},remove:function remove(owner,key){var i,cache=owner[this.expando];if(cache===undefined){return;}if(key!==undefined){// Support array or space separated string of keys
if(Array.isArray(key)){// If key is an array of keys...
// We always set camelCase keys, so remove that.
key=key.map(camelCase);}else{key=camelCase(key);// If a key with the spaces exists, use it.
// Otherwise, create an array by matching non-whitespace
key=key in cache?[key]:key.match(rnothtmlwhite)||[];}i=key.length;while(i--){delete cache[key[i]];}}// Remove the expando if there's no more data
if(key===undefined||jQuery.isEmptyObject(cache)){// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
if(owner.nodeType){owner[this.expando]=undefined;}else{delete owner[this.expando];}}},hasData:function hasData(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data();//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function getData(data){if(data==="true"){return true;}if(data==="false"){return false;}if(data==="null"){return null;}// Only convert to a number if it doesn't change the string
if(data===+data+""){return+data;}if(rbrace.test(data)){return JSON.parse(data);}return data;}function dataAttr(elem,key,data){var name;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=getData(data);}catch(e){}// Make sure we set the data so it isn't changed later
dataUser.set(elem,key,data);}else{data=undefined;}}return data;}jQuery.extend({hasData:function hasData(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function data(elem,name,_data){return dataUser.access(elem,name,_data);},removeData:function removeData(elem,name){dataUser.remove(elem,name);},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function _data(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function _removeData(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function data(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;// Gets all values
if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){// Support: IE 11 only
// The attrs elements can be null (#14894)
if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}dataPriv.set(elem,"hasDataAttrs",true);}}return data;}// Sets multiple values
if((typeof key==="undefined"?"undefined":_typeof2(key))==="object"){return this.each(function(){dataUser.set(this,key);});}return access(this,function(value){var data;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(elem&&value===undefined){// Attempt to get data from the cache
// The key will always be camelCased in Data
data=dataUser.get(elem,key);if(data!==undefined){return data;}// Attempt to "discover" the data in
// HTML5 custom data-* attrs
data=dataAttr(elem,key);if(data!==undefined){return data;}// We tried really hard, but the data doesn't exist.
return;}// Set the data...
this.each(function(){// We always store the camelCased key
dataUser.set(this,key,value);});},null,value,arguments.length>1,null,true);},removeData:function removeData(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function queue(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type);// Speed up dequeue by getting out quickly if this is just a lookup
if(data){if(!queue||Array.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}return queue||[];}},dequeue:function dequeue(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function next(){jQuery.dequeue(elem,type);};// If the fx queue is dequeued, always remove the progress sentinel
if(fn==="inprogress"){fn=queue.shift();startLength--;}if(fn){// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
if(type==="fx"){queue.unshift("inprogress");}// Clear up the last queue stop function
delete hooks.stop;fn.call(elem,next,hooks);}if(!startLength&&hooks){hooks.empty.fire();}},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function _queueHooks(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function queue(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}if(arguments.length<setter){return jQuery.queue(this[0],type);}return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);// Ensure a hooks for this queue
jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function dequeue(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function clearQueue(type){return this.queue(type||"fx",[]);},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function promise(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function resolve(){if(! --count){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}resolve();return defer.promise(obj);}});var pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var isHiddenWithinTree=function isHiddenWithinTree(elem,el){// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
elem=el||elem;// Inline style trumps all
return elem.style.display==="none"||elem.style.display===""&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
jQuery.contains(elem.ownerDocument,elem)&&jQuery.css(elem,"display")==="none";};var swap=function swap(elem,options,callback,args){var ret,name,old={};// Remember the old values, and insert the new ones
for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}ret=callback.apply(elem,args||[]);// Revert the old values
for(name in options){elem.style[name]=old[name];}return ret;};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),// Starting value computation is required for potential unit mismatches
initialInUnit=(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
initial=initial/2;// Trust units reported by jQuery.css
unit=unit||initialInUnit[3];// Iteratively approximate from a nonzero starting point
initialInUnit=+initial||1;while(maxIterations--){// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
jQuery.style(elem,prop,initialInUnit+unit);if((1-scale)*(1-(scale=currentValue()/initial||0.5))<=0){maxIterations=0;}initialInUnit=initialInUnit/scale;}initialInUnit=initialInUnit*2;jQuery.style(elem,prop,initialInUnit+unit);// Make sure we update the tween properties later on
valueParts=valueParts||[];}if(valueParts){initialInUnit=+initialInUnit||+initial||0;// Apply relative offset (+=/-=) if specified
adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}return adjusted;}var defaultDisplayMap={};function getDefaultDisplay(elem){var temp,doc=elem.ownerDocument,nodeName=elem.nodeName,display=defaultDisplayMap[nodeName];if(display){return display;}temp=doc.body.appendChild(doc.createElement(nodeName));display=jQuery.css(temp,"display");temp.parentNode.removeChild(temp);if(display==="none"){display="block";}defaultDisplayMap[nodeName]=display;return display;}function showHide(elements,show){var display,elem,values=[],index=0,length=elements.length;// Determine new display value for elements that need to change
for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}display=elem.style.display;if(show){// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
if(display==="none"){values[index]=dataPriv.get(elem,"display")||null;if(!values[index]){elem.style.display="";}}if(elem.style.display===""&&isHiddenWithinTree(elem)){values[index]=getDefaultDisplay(elem);}}else{if(display!=="none"){values[index]="none";// Remember what we're overwriting
dataPriv.set(elem,"display",display);}}}// Set the display of the elements in a second loop to avoid constant reflow
for(index=0;index<length;index++){if(values[index]!=null){elements[index].style.display=values[index];}}return elements;}jQuery.fn.extend({show:function show(){return showHide(this,true);},hide:function hide(){return showHide(this);},toggle:function toggle(state){if(typeof state==="boolean"){return state?this.show():this.hide();}return this.each(function(){if(isHiddenWithinTree(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});var rcheckableType=/^(?:checkbox|radio)$/i;var rtagName=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i;var rscriptType=/^$|^module$|\/(?:java|ecma)script/i;// We have to close these tags to support XHTML (#13200)
var wrapMap={// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};// Support: IE <=9 only
wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var ret;if(typeof context.getElementsByTagName!=="undefined"){ret=context.getElementsByTagName(tag||"*");}else if(typeof context.querySelectorAll!=="undefined"){ret=context.querySelectorAll(tag||"*");}else{ret=[];}if(tag===undefined||tag&&nodeName(context,tag)){return jQuery.merge([context],ret);}return ret;}// Mark scripts as having already been evaluated
function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){// Add nodes directly
if(toType(elem)==="object"){// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(nodes,elem.nodeType?[elem]:elem);// Convert non-html into a text node
}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));// Convert html into DOM nodes
}else{tmp=tmp||fragment.appendChild(context.createElement("div"));// Deserialize a standard representation
tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];// Descend through wrappers to the right content
j=wrap[0];while(j--){tmp=tmp.lastChild;}// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(nodes,tmp.childNodes);// Remember the top-level container
tmp=fragment.firstChild;// Ensure the created nodes are orphaned (#12392)
tmp.textContent="";}}}// Remove wrapper from fragment
fragment.textContent="";i=0;while(elem=nodes[i++]){// Skip elements already in the context collection (trac-4087)
if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}continue;}contains=jQuery.contains(elem.ownerDocument,elem);// Append to fragment
tmp=getAll(fragment.appendChild(elem),"script");// Preserve script evaluation history
if(contains){setGlobalEval(tmp);}// Capture executables
if(scripts){j=0;while(elem=tmp[j++]){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}return fragment;}(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;})();var documentElement=document.documentElement;var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}function returnFalse(){return false;}// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement(){try{return document.activeElement;}catch(err){}}function _on(elem,types,selector,data,fn,one){var origFn,type;// Types can be a map of types/handlers
if((typeof types==="undefined"?"undefined":_typeof2(types))==="object"){// ( types-Object, selector, data )
if(typeof selector!=="string"){// ( types-Object, data )
data=data||selector;selector=undefined;}for(type in types){_on(elem,type,selector,data,types[type],one);}return elem;}if(data==null&&fn==null){// ( types, fn )
fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){// ( types, selector, fn )
fn=data;data=undefined;}else{// ( types, data, fn )
fn=data;data=selector;selector=undefined;}}if(fn===false){fn=returnFalse;}else if(!fn){return elem;}if(one===1){origFn=fn;fn=function fn(event){// Can use an empty set, since event contains the info
jQuery().off(event);return origFn.apply(this,arguments);};// Use same guid so caller can remove using origFn
fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});}/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */jQuery.event={global:{},add:function add(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(!elemData){return;}// Caller can pass in an object of custom data in lieu of the handler
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
if(selector){jQuery.find.matchesSelector(documentElement,selector);}// Make sure that the handler has a unique ID, used to find/remove it later
if(!handler.guid){handler.guid=jQuery.guid++;}// Init the element's event structure and main handler, if this is the first
if(!(events=elemData.events)){events=elemData.events={};}if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};}// Handle multiple events separated by a space
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// There *must* be a type, no attaching namespace-only handlers
if(!type){continue;}// If event changes its type, use the special event handlers for the changed type
special=jQuery.event.special[type]||{};// If selector defined, determine special event api type, otherwise given type
type=(selector?special.delegateType:special.bindType)||type;// Update special based on newly reset type
special=jQuery.event.special[type]||{};// handleObj is passed to all event handlers
handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);// Init the event handler queue if we're the first
if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;// Only use addEventListener if the special events handler returns false
if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}// Add to the element's handler list, delegates in front
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}// Keep track of which events have ever been used, for event optimization
jQuery.event.global[type]=true;}},// Detach an event or set of events from an element
remove:function remove(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;}// Once for each type.namespace in types; type may be omitted
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// Unbind all events (on this namespace, if provided) for the element
if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}continue;}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");// Remove matching events
origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}if(special.remove){special.remove.call(elem,handleObj);}}}// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}delete events[type];}}// Remove data and the expando if it's no longer used
if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function dispatch(nativeEvent){// Make a writable jQuery.Event from the native event object
var event=jQuery.event.fix(nativeEvent);var i,j,ret,matched,handleObj,handlerQueue,args=new Array(arguments.length),handlers=(dataPriv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};// Use the fix-ed jQuery.Event rather than the (read-only) native event
args[0]=event;for(i=1;i<arguments.length;i++){args[i]=arguments[i];}event.delegateTarget=this;// Call the preDispatch hook for the mapped type, and let it bail if desired
if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}// Determine handlers
handlerQueue=jQuery.event.handlers.call(this,event,handlers);// Run delegates first; they may want to stop propagation beneath us
i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}// Call the postDispatch hook for the mapped type
if(special.postDispatch){special.postDispatch.call(this,event);}return event.result;},handlers:function handlers(event,_handlers){var i,handleObj,sel,matchedHandlers,matchedSelectors,handlerQueue=[],delegateCount=_handlers.delegateCount,cur=event.target;// Find delegate handlers
if(delegateCount&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
cur.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!(event.type==="click"&&event.button>=1)){for(;cur!==this;cur=cur.parentNode||this){// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(cur.nodeType===1&&!(event.type==="click"&&cur.disabled===true)){matchedHandlers=[];matchedSelectors={};for(i=0;i<delegateCount;i++){handleObj=_handlers[i];// Don't conflict with Object.prototype properties (#13203)
sel=handleObj.selector+" ";if(matchedSelectors[sel]===undefined){matchedSelectors[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}if(matchedSelectors[sel]){matchedHandlers.push(handleObj);}}if(matchedHandlers.length){handlerQueue.push({elem:cur,handlers:matchedHandlers});}}}}// Add the remaining (directly-bound) handlers
cur=this;if(delegateCount<_handlers.length){handlerQueue.push({elem:cur,handlers:_handlers.slice(delegateCount)});}return handlerQueue;},addProp:function addProp(name,hook){Object.defineProperty(jQuery.Event.prototype,name,{enumerable:true,configurable:true,get:isFunction(hook)?function(){if(this.originalEvent){return hook(this.originalEvent);}}:function(){if(this.originalEvent){return this.originalEvent[name];}},set:function set(value){Object.defineProperty(this,name,{enumerable:true,configurable:true,writable:true,value:value});}});},fix:function fix(originalEvent){return originalEvent[jQuery.expando]?originalEvent:new jQuery.Event(originalEvent);},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:true},focus:{// Fire native event if possible so blur/focus sequence is correct
trigger:function trigger(){if(this!==safeActiveElement()&&this.focus){this.focus();return false;}},delegateType:"focusin"},blur:{trigger:function trigger(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{// For checkbox, fire native event so checked state will be right
trigger:function trigger(){if(this.type==="checkbox"&&this.click&&nodeName(this,"input")){this.click();return false;}},// For cross-browser consistency, don't fire native .click() on links
_default:function _default(event){return nodeName(event.target,"a");}},beforeunload:{postDispatch:function postDispatch(event){// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};jQuery.removeEvent=function(elem,type,handle){// This "if" is needed for plain objects
if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){// Allow instantiation without the 'new' keyword
if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}// Event object
if(src&&src.type){this.originalEvent=src;this.type=src.type;// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&// Support: Android <=2.3 only
src.returnValue===false?returnTrue:returnFalse;// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
this.target=src.target&&src.target.nodeType===3?src.target.parentNode:src.target;this.currentTarget=src.currentTarget;this.relatedTarget=src.relatedTarget;// Event type
}else{this.type=src;}// Put explicitly provided properties onto the event object
if(props){jQuery.extend(this,props);}// Create a timestamp if incoming event doesn't have one
this.timeStamp=src&&src.timeStamp||Date.now();// Mark it as fixed
this[jQuery.expando]=true;};// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,isSimulated:false,preventDefault:function preventDefault(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&!this.isSimulated){e.preventDefault();}},stopPropagation:function stopPropagation(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopPropagation();}},stopImmediatePropagation:function stopImmediatePropagation(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopImmediatePropagation();}this.stopPropagation();}};// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each({altKey:true,bubbles:true,cancelable:true,changedTouches:true,ctrlKey:true,detail:true,eventPhase:true,metaKey:true,pageX:true,pageY:true,shiftKey:true,view:true,"char":true,charCode:true,key:true,keyCode:true,button:true,buttons:true,clientX:true,clientY:true,offsetX:true,offsetY:true,pointerId:true,pointerType:true,screenX:true,screenY:true,targetTouches:true,toElement:true,touches:true,which:function which(event){var button=event.button;// Add which for key events
if(event.which==null&&rkeyEvent.test(event.type)){return event.charCode!=null?event.charCode:event.keyCode;}// Add which for click: 1 === left; 2 === middle; 3 === right
if(!event.which&&button!==undefined&&rmouseEvent.test(event.type)){if(button&1){return 1;}if(button&2){return 3;}if(button&4){return 2;}return 0;}return event.which;}},jQuery.event.addProp);// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function handle(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
if(!related||related!==target&&!jQuery.contains(target,related)){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}return ret;}};});jQuery.fn.extend({on:function on(types,selector,data,fn){return _on(this,types,selector,data,fn);},one:function one(types,selector,data,fn){return _on(this,types,selector,data,fn,1);},off:function off(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){// ( event )  dispatched jQuery.Event
handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}if((typeof types==="undefined"?"undefined":_typeof2(types))==="object"){// ( types-object [, selector] )
for(type in types){this.off(type,selector,types[type]);}return this;}if(selector===false||typeof selector==="function"){// ( types [, fn] )
fn=selector;selector=undefined;}if(fn===false){fn=returnFalse;}return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var/* eslint-disable max-len */// See https://github.com/eslint/eslint/issues/3229
rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,/* eslint-enable */// Support: IE <=10 - 11, Edge 12 - 13 only
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
rnoInnerhtml=/<script|<style|<link/i,// checked="checked" or checked
rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;// Prefer a tbody over its parent table for containing new rows
function manipulationTarget(elem,content){if(nodeName(elem,"table")&&nodeName(content.nodeType!==11?content:content.firstChild,"tr")){return jQuery(elem).children("tbody")[0]||elem;}return elem;}// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}function restoreScript(elem){if((elem.type||"").slice(0,5)==="true/"){elem.type=elem.type.slice(5);}else{elem.removeAttribute("type");}return elem;}function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==1){return;}// 1. Copy private data: events, handlers, etc.
if(dataPriv.hasData(src)){pdataOld=dataPriv.access(src);pdataCur=dataPriv.set(dest,pdataOld);events=pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}}// 2. Copy user data
if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}}// Fix IE bugs, see support tests
function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked;// Fails to return the selected option to the default selected state when cloning options
}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}function domManip(collection,args,callback,ignored){// Flatten any nested arrays
args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],valueIsFunction=isFunction(value);// We can't cloneNode fragments that contain checked, in WebKit
if(valueIsFunction||l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value)){return collection.each(function(index){var self=collection.eq(index);if(valueIsFunction){args[0]=value.call(this,index,self.html());}domManip(self,args,callback,ignored);});}if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}// Require either new content or an interest in ignored elements to invoke the callback
if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);// Keep references to cloned scripts for later restoration
if(hasScripts){// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(scripts,getAll(node,"script"));}}callback.call(collection[i],node,i);}if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;// Reenable scripts
jQuery.map(scripts,restoreScript);// Evaluate executable scripts on first document insertion
for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src&&(node.type||"").toLowerCase()!=="module"){// Optional AJAX dependency, but won't run scripts if not present
if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else{DOMEval(node.textContent.replace(rcleanScript,""),doc,node);}}}}}}return collection;}function _remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}if(node.parentNode){if(keepData&&jQuery.contains(node.ownerDocument,node)){setGlobalEval(getAll(node,"script"));}node.parentNode.removeChild(node);}}return elem;}jQuery.extend({htmlPrefilter:function htmlPrefilter(html){return html.replace(rxhtmlTag,"<$1></$2>");},clone:function clone(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem);// Fix IE cloning issues
if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}}// Copy the events from the original to the clone
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else{cloneCopyEvent(elem,clone);}}// Preserve script evaluation history
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}// Return the cloned set
return clone;},cleanData:function cleanData(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if(data=elem[dataPriv.expando]){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);// This is a shortcut to avoid jQuery.event.remove's overhead
}else{jQuery.removeEvent(elem,type,data.handle);}}}// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
elem[dataPriv.expando]=undefined;}if(elem[dataUser.expando]){// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({detach:function detach(selector){return _remove(this,selector,true);},remove:function remove(selector){return _remove(this,selector);},text:function text(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function append(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function prepend(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function before(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function after(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function empty(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){// Prevent memory leaks
jQuery.cleanData(getAll(elem,false));// Remove any remaining nodes
elem.textContent="";}}return this;},clone:function clone(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function html(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;}// See if we can take a shortcut and just use innerHTML
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{};// Remove element nodes and prevent memory leaks
if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}elem=0;// If using innerHTML throws an exception, use the fallback method
}catch(e){}}if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function replaceWith(){var ignored=[];// Make the changes, replacing each non-ignored context element with the new content
return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}}// Force callback invocation
},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
push.apply(ret,elems.get());}return this.pushStack(ret);};});var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function getStyles(elem){// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}return view.getComputedStyle(elem);};var rboxStyle=new RegExp(cssExpand.join("|"),"i");(function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function computeStyleTests(){// This is a singleton, we need to execute it only once
if(!div){return;}container.style.cssText="position:absolute;left:-11111px;width:60px;"+"margin-top:1px;padding:0;border:0";div.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;"+"margin:auto;border:1px;padding:1px;"+"width:60%;top:1%";documentElement.appendChild(container).appendChild(div);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
reliableMarginLeftVal=roundPixelMeasures(divStyle.marginLeft)===12;// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
div.style.right="60%";pixelBoxStylesVal=roundPixelMeasures(divStyle.right)===36;// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
boxSizingReliableVal=roundPixelMeasures(divStyle.width)===36;// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
div.style.position="absolute";scrollboxSizeVal=div.offsetWidth===36||"absolute";documentElement.removeChild(container);// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
div=null;}function roundPixelMeasures(measure){return Math.round(parseFloat(measure));}var pixelPositionVal,boxSizingReliableVal,scrollboxSizeVal,pixelBoxStylesVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");// Finish early in limited (non-browser) environments
if(!div.style){return;}// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";jQuery.extend(support,{boxSizingReliable:function boxSizingReliable(){computeStyleTests();return boxSizingReliableVal;},pixelBoxStyles:function pixelBoxStyles(){computeStyleTests();return pixelBoxStylesVal;},pixelPosition:function pixelPosition(){computeStyleTests();return pixelPositionVal;},reliableMarginLeft:function reliableMarginLeft(){computeStyleTests();return reliableMarginLeftVal;},scrollboxSize:function scrollboxSize(){computeStyleTests();return scrollboxSizeVal;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,// Support: Firefox 51+
// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
style=elem.style;computed=computed||getStyles(elem);// getPropertyValue is needed for:
//   .css('filter') (IE 9 only, #12537)
//   .css('--customProperty) (#3144)
if(computed){ret=computed.getPropertyValue(name)||computed[name];if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
if(!support.pixelBoxStyles()&&rnumnonpx.test(ret)&&rboxStyle.test(name)){// Remember the original values
width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;// Put in the new values to get a computed value out
style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;// Revert the changed values
style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}return ret!==undefined?// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
ret+"":ret;}function addGetHookIf(conditionFn,hookFn){// Define the hook, we'll check on the first run if it's really needed.
return{get:function get(){if(conditionFn()){// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get;return;}// Hook needed; redefine it so that the support test is not executed again.
return(this.get=hookFn).apply(this,arguments);}};}var// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
rdisplayswap=/^(none|table(?!-c[ea]).+)/,rcustomProp=/^--/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","Moz","ms"],emptyStyle=document.createElement("div").style;// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName(name){// Shortcut for names that are not vendor prefixed
if(name in emptyStyle){return name;}// Check for vendor prefixed names
var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName(name){var ret=jQuery.cssProps[name];if(!ret){ret=jQuery.cssProps[name]=vendorPropName(name)||name;}return ret;}function setPositiveNumber(elem,value,subtract){// Any relative (+/-) values have already been
// normalized at this point
var matches=rcssNum.exec(value);return matches?// Guard against undefined "subtract", e.g., when used as in cssHooks
Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}function boxModelAdjustment(elem,dimension,box,isBorderBox,styles,computedVal){var i=dimension==="width"?1:0,extra=0,delta=0;// Adjustment may not be necessary
if(box===(isBorderBox?"border":"content")){return 0;}for(;i<4;i+=2){// Both box models exclude margin
if(box==="margin"){delta+=jQuery.css(elem,box+cssExpand[i],true,styles);}// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
if(!isBorderBox){// Add padding
delta+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);// For "border" or "margin", add border
if(box!=="padding"){delta+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);// But still keep track of it otherwise
}else{extra+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}// If we get here with a border-box (content + padding + border), we're seeking "content" or
// "padding" or "margin"
}else{// For "content", subtract padding
if(box==="content"){delta-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}// For "content" or "padding", subtract border
if(box!=="margin"){delta-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}// Account for positive content-box scroll gutter when requested by providing computedVal
if(!isBorderBox&&computedVal>=0){// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
// Assuming integer scroll gutter, subtract the rest and round down
delta+=Math.max(0,Math.ceil(elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)]-computedVal-delta-extra-0.5));}return delta;}function getWidthOrHeight(elem,dimension,extra){// Start with computed style
var styles=getStyles(elem),val=curCSS(elem,dimension,styles),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box",valueIsBorderBox=isBorderBox;// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(rnumnonpx.test(val)){if(!extra){return val;}val="auto";}// Check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
valueIsBorderBox=valueIsBorderBox&&(support.boxSizingReliable()||val===elem.style[dimension]);// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
if(val==="auto"||!parseFloat(val)&&jQuery.css(elem,"display",false,styles)==="inline"){val=elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)];// offsetWidth/offsetHeight provide border-box values
valueIsBorderBox=true;}// Normalize "" and auto
val=parseFloat(val)||0;// Adjust for the element's box model
return val+boxModelAdjustment(elem,dimension,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles,// Provide the current computed size to request scroll gutter calculation (gh-3589)
val)+"px";}jQuery.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function get(elem,computed){if(computed){// We should always get a number back from opacity
var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},// Get and set the style property on a DOM Node
style:function style(elem,name,value,extra){// Don't set styles on text and comment nodes
if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}// Make sure that we're working with the right name
var ret,type,hooks,origName=camelCase(name),isCustomProp=rcustomProp.test(name),style=elem.style;// Make sure that we're working with the right name. We don't
// want to query the value if it is a CSS custom property
// since they are user-defined.
if(!isCustomProp){name=finalPropName(origName);}// Gets hook for the prefixed version, then unprefixed version
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// Check if we're setting a value
if(value!==undefined){type=typeof value==="undefined"?"undefined":_typeof2(value);// Convert "+=" or "-=" to relative numbers (#7345)
if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret);// Fixes bug #9237
type="number";}// Make sure that null and NaN values aren't set (#7116)
if(value==null||value!==value){return;}// If a number was passed in, add the unit (except for certain CSS properties)
if(type==="number"){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");}// background-* props affect original clone's values
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}// If a hook was provided, use that value, otherwise just set the specified value
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){if(isCustomProp){style.setProperty(name,value);}else{style[name]=value;}}}else{// If a hook was provided get the non-computed value from there
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}// Otherwise just get the value from the style object
return style[name];}},css:function css(elem,name,extra,styles){var val,num,hooks,origName=camelCase(name),isCustomProp=rcustomProp.test(name);// Make sure that we're working with the right name. We don't
// want to modify the value if it is a CSS custom property
// since they are user-defined.
if(!isCustomProp){name=finalPropName(origName);}// Try prefixed name followed by the unprefixed name
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// If a hook was provided get the computed value from there
if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}// Otherwise, if a way to get the computed value exists, use that
if(val===undefined){val=curCSS(elem,name,styles);}// Convert "normal" to computed value
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}// Make numeric if forced or a qualifier was provided and val looks numeric
if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}return val;}});jQuery.each(["height","width"],function(i,dimension){jQuery.cssHooks[dimension]={get:function get(elem,computed,extra){if(computed){// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
return rdisplayswap.test(jQuery.css(elem,"display"))&&(// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
!elem.getClientRects().length||!elem.getBoundingClientRect().width)?swap(elem,cssShow,function(){return getWidthOrHeight(elem,dimension,extra);}):getWidthOrHeight(elem,dimension,extra);}},set:function set(elem,value,extra){var matches,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box",subtract=extra&&boxModelAdjustment(elem,dimension,extra,isBorderBox,styles);// Account for unreliable border-box dimensions by comparing offset* to computed and
// faking a content-box to get border and padding (gh-3699)
if(isBorderBox&&support.scrollboxSize()===styles.position){subtract-=Math.ceil(elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)]-parseFloat(styles[dimension])-boxModelAdjustment(elem,dimension,"border",false,styles)-0.5);}// Convert to pixels if value adjustment is needed
if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[dimension]=value;value=jQuery.css(elem,dimension);}return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}});// These hooks are used by animate to expand properties
jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function expand(value){var i=0,expanded={},// Assumes a single number if not a string
parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}return expanded;}};if(prefix!=="margin"){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function css(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(Array.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}return map;}return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function init(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function cur(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function run(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function get(tween){var result;// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];}// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
result=jQuery.css(tween.elem,tween.prop,"");// Empty strings, null, undefined and "auto" are converted to 0.
return!result||result==="auto"?0:result;},set:function set(tween){// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function set(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function linear(p){return p;},swing:function swing(p){return 0.5-Math.cos(p*Math.PI)/2;},_default:"swing"};jQuery.fx=Tween.prototype.init;// Back compat <1.8 extension point
jQuery.fx.step={};var fxNow,inProgress,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;function schedule(){if(inProgress){if(document.hidden===false&&window.requestAnimationFrame){window.requestAnimationFrame(schedule);}else{window.setTimeout(schedule,jQuery.fx.interval);}jQuery.fx.tick();}}// Animations created synchronously will run synchronously
function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return fxNow=Date.now();}// Generate parameters to create a standard animation
function genFx(type,includeWidth){var which,i=0,attrs={height:type};// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}if(includeWidth){attrs.opacity=attrs.width=type;}return attrs;}function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if(tween=collection[index].call(animation,prop,value)){// We're done with this property
return tween;}}}function defaultPrefilter(elem,props,opts){var prop,value,toggle,hooks,oldfire,propTween,restoreDisplay,display,isBox="width"in props||"height"in props,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHiddenWithinTree(elem),dataShow=dataPriv.get(elem,"fxshow");// Queue-skipping animations hijack the fx hooks
if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}hooks.unqueued++;anim.always(function(){// Ensure the complete handler is called before this completes
anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}// Detect show/hide animations
for(prop in props){value=props[prop];if(rfxtypes.test(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;// Ignore all other no-op show/hide data
}else{continue;}}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}}// Bail out if this is a no-op like .hide().hide()
propTween=!jQuery.isEmptyObject(props);if(!propTween&&jQuery.isEmptyObject(orig)){return;}// Restrict "overflow" and "display" styles during box animations
if(isBox&&elem.nodeType===1){// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
opts.overflow=[style.overflow,style.overflowX,style.overflowY];// Identify a display type, preferring old show/hide data over the CSS cascade
restoreDisplay=dataShow&&dataShow.display;if(restoreDisplay==null){restoreDisplay=dataPriv.get(elem,"display");}display=jQuery.css(elem,"display");if(display==="none"){if(restoreDisplay){display=restoreDisplay;}else{// Get nonempty value(s) by temporarily forcing visibility
showHide([elem],true);restoreDisplay=elem.style.display||restoreDisplay;display=jQuery.css(elem,"display");showHide([elem]);}}// Animate inline elements as inline-block
if(display==="inline"||display==="inline-block"&&restoreDisplay!=null){if(jQuery.css(elem,"float")==="none"){// Restore the original display value at the end of pure show/hide animations
if(!propTween){anim.done(function(){style.display=restoreDisplay;});if(restoreDisplay==null){display=style.display;restoreDisplay=display==="none"?"":display;}}style.display="inline-block";}}}if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}// Implement show/hide animations
propTween=false;for(prop in orig){// General show/hide setup for this element animation
if(!propTween){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=dataPriv.access(elem,"fxshow",{display:restoreDisplay});}// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
if(toggle){dataShow.hidden=!hidden;}// Show elements before animating them
if(hidden){showHide([elem],true);}/* eslint-disable no-loop-func */anim.done(function(){/* eslint-enable no-loop-func */// The final step of a "hide" animation is actually hiding the element
if(!hidden){showHide([elem]);}dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});}// Per-property setup
propTween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=propTween.start;if(hidden){propTween.end=propTween.start;propTween.start=0;}}}}function propFilter(props,specialEasing){var index,name,easing,value,hooks;// camelCase, specialEasing and expand cssHook pass
for(index in props){name=camelCase(index);easing=specialEasing[name];value=props[index];if(Array.isArray(value)){easing=value[1];value=props[index]=value[0];}if(index!==name){props[name]=value;delete props[index];}hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){// Don't match elem in the :animated selector
delete tick.elem;}),tick=function tick(){if(stopped){return false;}var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),// Support: Android 2.3 only
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}deferred.notifyWith(elem,[animation,percent,remaining]);// If there's more to do, yield
if(percent<1&&length){return remaining;}// If this was an empty animation, synthesize a final progress notification
if(!length){deferred.notifyWith(elem,[animation,1,0]);}// Resolve the animation and report its conclusion
deferred.resolveWith(elem,[animation]);return false;},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function createTween(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function stop(gotoEnd){var index=0,// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}// Resolve when we played the last frame; otherwise, reject
if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=result.stop.bind(result);}return result;}}jQuery.map(props,createTween,animation);if(isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}// Attach callbacks from options
animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation;}jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function tweener(props,callback){if(isFunction(props)){callback=props;props=["*"];}else{props=props.match(rnothtmlwhite);}var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function prefilter(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else{Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&(typeof speed==="undefined"?"undefined":_typeof2(speed))==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!isFunction(easing)&&easing};// Go to the end state if fx are off
if(jQuery.fx.off){opt.duration=0;}else{if(typeof opt.duration!=="number"){if(opt.duration in jQuery.fx.speeds){opt.duration=jQuery.fx.speeds[opt.duration];}else{opt.duration=jQuery.fx.speeds._default;}}}// Normalize opt.queue - true/undefined/null -> "fx"
if(opt.queue==null||opt.queue===true){opt.queue="fx";}// Queueing
opt.old=opt.complete;opt.complete=function(){if(isFunction(opt.old)){opt.old.call(this);}if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function fadeTo(speed,to,easing,callback){// Show any hidden elements after setting opacity to 0
return this.filter(isHiddenWithinTree).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:to},speed,easing,callback);},animate:function animate(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function doAnimation(){// Operate on a copy of prop so per-property easing won't be lost
var anim=Animation(this,jQuery.extend({},prop),optall);// Empty animations, or finishing resolves immediately
if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function stop(type,clearQueue,gotoEnd){var stopQueue=function stopQueue(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}if(clearQueue&&type!==false){this.queue(type||"fx",[]);}return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function finish(type){if(type!==false){type=type||"fx";}return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;// Enable finishing flag on private data
data.finish=true;// Empty the queue first
jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}// Look for any active animations, and finish them
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}// Look for any animations in the old queue and finish them
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}// Turn off finishing flag
delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});// Generate shortcuts for custom animations
jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=Date.now();for(;i<timers.length;i++){timer=timers[i];// Run the timer and safely remove it when done (allowing for external removal)
if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}if(!timers.length){jQuery.fx.stop();}fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);jQuery.fx.start();};jQuery.fx.interval=13;jQuery.fx.start=function(){if(inProgress){return;}inProgress=true;schedule();};jQuery.fx.stop=function(){inProgress=null;};jQuery.fx.speeds={slow:600,fast:200,// Default speed
_default:400};// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
support.checkOn=input.value!=="";// Support: IE <=11 only
// Must access selectedIndex to make default options select
support.optSelected=opt.selected;// Support: IE <=11 only
// An input loses its value after becoming a radio
input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function attr(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function removeAttr(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function attr(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(nType===3||nType===8||nType===2){return;}// Fallback to prop when attributes are not supported
if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
if(nType!==1||!jQuery.isXMLDoc(elem)){hooks=jQuery.attrHooks[name.toLowerCase()]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}elem.setAttribute(name,value+"");return value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}ret=jQuery.find.attr(elem,name);// Non-existent attributes return null, we normalize to undefined
return ret==null?undefined:ret;},attrHooks:{type:{set:function set(elem,value){if(!support.radioValue&&value==="radio"&&nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}return value;}}}},removeAttr:function removeAttr(elem,value){var name,i=0,// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
attrNames=value&&value.match(rnothtmlwhite);if(attrNames&&elem.nodeType===1){while(name=attrNames[i++]){elem.removeAttribute(name);}}}});// Hooks for boolean attributes
boolHook={set:function set(elem,value,name){if(value===false){// Remove boolean attributes when set to false
jQuery.removeAttr(elem,name);}else{elem.setAttribute(name,name);}return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle,lowercaseName=name.toLowerCase();if(!isXML){// Avoid an infinite loop by temporarily removing this function from the getter
handle=attrHandle[lowercaseName];attrHandle[lowercaseName]=ret;ret=getter(elem,name,isXML)!=null?lowercaseName:null;attrHandle[lowercaseName]=handle;}return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function prop(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function removeProp(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function prop(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(nType===3||nType===8||nType===2){return;}if(nType!==1||!jQuery.isXMLDoc(elem)){// Fix name and attach hooks
name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}return elem[name]=value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}return elem[name];},propHooks:{tabIndex:{get:function get(elem){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var tabindex=jQuery.find.attr(elem,"tabindex");if(tabindex){return parseInt(tabindex,10);}if(rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href){return 0;}return-1;}}},propFix:{"for":"htmlFor","class":"className"}});// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if(!support.optSelected){jQuery.propHooks.selected={get:function get(elem){/* eslint no-unused-expressions: "off" */var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}return null;},set:function set(elem){/* eslint no-unused-expressions: "off" */var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function stripAndCollapse(value){var tokens=value.match(rnothtmlwhite)||[];return tokens.join(" ");}function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}function classesToArray(value){if(Array.isArray(value)){return value;}if(typeof value==="string"){return value.match(rnothtmlwhite)||[];}return[];}jQuery.fn.extend({addClass:function addClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}classes=classesToArray(value);if(classes.length){while(elem=this[i++]){curValue=getClass(elem);cur=elem.nodeType===1&&" "+stripAndCollapse(curValue)+" ";if(cur){j=0;while(clazz=classes[j++]){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}// Only assign if different to avoid unneeded rendering.
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},removeClass:function removeClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}if(!arguments.length){return this.attr("class","");}classes=classesToArray(value);if(classes.length){while(elem=this[i++]){curValue=getClass(elem);// This expression is here for better compressibility (see addClass)
cur=elem.nodeType===1&&" "+stripAndCollapse(curValue)+" ";if(cur){j=0;while(clazz=classes[j++]){// Remove *all* instances
while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ");}}// Only assign if different to avoid unneeded rendering.
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},toggleClass:function toggleClass(value,stateVal){var type=typeof value==="undefined"?"undefined":_typeof2(value),isValidValue=type==="string"||Array.isArray(value);if(typeof stateVal==="boolean"&&isValidValue){return stateVal?this.addClass(value):this.removeClass(value);}if(isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}return this.each(function(){var className,i,self,classNames;if(isValidValue){// Toggle individual class names
i=0;self=jQuery(this);classNames=classesToArray(value);while(className=classNames[i++]){// Check each className given, space separated list
if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}// Toggle whole class name
}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){// Store className if set
dataPriv.set(this,"__className__",className);}// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function hasClass(selector){var className,elem,i=0;className=" "+selector+" ";while(elem=this[i++]){if(elem.nodeType===1&&(" "+stripAndCollapse(getClass(elem))+" ").indexOf(className)>-1){return true;}}return false;}});var rreturn=/\r/g;jQuery.fn.extend({val:function val(value){var hooks,ret,valueIsFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}ret=elem.value;// Handle most common string cases
if(typeof ret==="string"){return ret.replace(rreturn,"");}// Handle cases where value is null/undef or number
return ret==null?"":ret;}return;}valueIsFunction=isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}if(valueIsFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}// Treat null/undefined as ""; convert numbers to string
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(Array.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];// If set returns undefined, fall back to normal setting
if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function get(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
stripAndCollapse(jQuery.text(elem));}},select:{get:function get(elem){var value,option,i,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one",values=one?null:[],max=one?index+1:options.length;if(index<0){i=max;}else{i=one?index:0;}// Loop through all the selected options
for(;i<max;i++){option=options[i];// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if((option.selected||i===index)&&// Don't return options that are disabled or in a disabled optgroup
!option.disabled&&(!option.parentNode.disabled||!nodeName(option.parentNode,"optgroup"))){// Get the specific value for the option
value=jQuery(option).val();// We don't need an array for one selects
if(one){return value;}// Multi-Selects return an array
values.push(value);}}return values;},set:function set(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];/* eslint-disable no-cond-assign */if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}/* eslint-enable no-cond-assign */}// Force browsers to behave consistently when non-matching value is set
if(!optionSet){elem.selectedIndex=-1;}return values;}}}});// Radios and checkboxes getter/setter
jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function set(elem,value){if(Array.isArray(value)){return elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1;}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});// Return jQuery for attributes-only inclusion
support.focusin="onfocusin"in window;var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,stopPropagationCallback=function stopPropagationCallback(e){e.stopPropagation();};jQuery.extend(jQuery.event,{trigger:function trigger(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,lastElement,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=lastElement=tmp=elem=elem||document;// Don't do events on text and comment nodes
if(elem.nodeType===3||elem.nodeType===8){return;}// focus/blur morphs to focusin/out; ensure we're not firing them right now
if(rfocusMorph.test(type+jQuery.event.triggered)){return;}if(type.indexOf(".")>-1){// Namespaced trigger; create a regexp to match event type in handle()
namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}ontype=type.indexOf(":")<0&&"on"+type;// Caller can pass in a jQuery.Event object, Object, or just an event type string
event=event[jQuery.expando]?event:new jQuery.Event(type,(typeof event==="undefined"?"undefined":_typeof2(event))==="object"&&event);// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;// Clean up the event in case it is being reused
event.result=undefined;if(!event.target){event.target=elem;}// Clone any incoming data and prepend the event, creating the handler arg list
data=data==null?[event]:jQuery.makeArray(data,[event]);// Allow special events to draw outside the lines
special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!onlyHandlers&&!special.noBubble&&!isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}// Only add window if we got to document (e.g., not plain obj or detached DOM)
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}// Fire handlers on the event path
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){lastElement=cur;event.type=i>1?bubbleType:special.bindType||type;// jQuery handler
handle=(dataPriv.get(cur,"events")||{})[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);}// Native handler
handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}event.type=type;// If nobody prevented the default action, do it now
if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
if(ontype&&isFunction(elem[type])&&!isWindow(elem)){// Don't re-trigger an onFOO event when we call its FOO() method
tmp=elem[ontype];if(tmp){elem[ontype]=null;}// Prevent re-triggering of the same event, since we already bubbled it above
jQuery.event.triggered=type;if(event.isPropagationStopped()){lastElement.addEventListener(type,stopPropagationCallback);}elem[type]();if(event.isPropagationStopped()){lastElement.removeEventListener(type,stopPropagationCallback);}jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}return event.result;},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function simulate(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true});jQuery.event.trigger(e,null,elem);}});jQuery.fn.extend({trigger:function trigger(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function triggerHandler(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){// Attach a single capturing handler on the document while someone wants focusin/focusout
var handler=function handler(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix]={setup:function setup(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}dataPriv.access(doc,fix,(attaches||0)+1);},teardown:function teardown(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);}else{dataPriv.access(doc,fix,attaches);}}};});}var location=window.location;var nonce=Date.now();var rquery=/\?/;// Cross-browser xml parsing
jQuery.parseXML=function(data){var xml;if(!data||typeof data!=="string"){return null;}// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{xml=new window.DOMParser().parseFromString(data,"text/xml");}catch(e){xml=undefined;}if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}return xml;};var rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(Array.isArray(obj)){// Serialize array item.
jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){// Treat each array item as a scalar.
add(prefix,v);}else{// Item is non-scalar (array or object), encode its numeric index.
buildParams(prefix+"["+((typeof v==="undefined"?"undefined":_typeof2(v))==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&toType(obj)==="object"){// Serialize object item.
for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{// Serialize scalar item.
add(prefix,obj);}}// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param=function(a,traditional){var prefix,s=[],add=function add(key,valueOrFunction){// If value is a function, invoke it and use its return value
var value=isFunction(valueOrFunction)?valueOrFunction():valueOrFunction;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value==null?"":value);};// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(a)||a.jquery&&!jQuery.isPlainObject(a)){// Serialize the form elements
jQuery.each(a,function(){add(this.name,this.value);});}else{// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}// Return the resulting serialization
return s.join("&");};jQuery.fn.extend({serialize:function serialize(){return jQuery.param(this.serializeArray());},serializeArray:function serializeArray(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();if(val==null){return null;}if(Array.isArray(val)){return jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};});}return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});var r20=/%20/g,rhash=/#.*$/,rantiCache=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,// #7653, #8125, #8152: local protocol detection
rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */prefilters={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */transports={},// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
allTypes="*/".concat("*"),// Anchor tag for parsing the document origin
originAnchor=document.createElement("a");originAnchor.href=location.href;// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports(structure){// dataTypeExpression is optional and defaults to "*"
return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnothtmlwhite)||[];if(isFunction(func)){// For each dataType in the dataTypeExpression
while(dataType=dataTypes[i++]){// Prepend if requested
if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);// Otherwise append
}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=structure===transports;function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:deep||(deep={}))[key]=src[key];}}if(deep){jQuery.extend(true,target,deep);}return target;}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;// Remove auto dataType and get content-type in the process
while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}// Check if we're dealing with a known content-type
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}// Check to see if we have a response for the expected dataType
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{// Try convertible dataTypes
for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}if(!firstDataType){firstDataType=type;}}// Or just use first one
finalDataType=finalDataType||firstDataType;}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}return responses[finalDataType];}}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},// Work with a copy of dataTypes in case we need to modify it for conversion
dataTypes=s.dataTypes.slice();// Create converters map with lowercased keys
if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}current=dataTypes.shift();// Convert to each sequential dataType
while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}// Apply the dataFilter if provided
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}prev=current;current=dataTypes.shift();if(current){// There's only work to do if current dataType is non-auto
if(current==="*"){current=prev;// Convert response if prev dataType is non-auto and differs from current
}else if(prev!=="*"&&prev!==current){// Seek a direct converter
conv=converters[prev+" "+current]||converters["* "+current];// If none found, seek a pair
if(!conv){for(conv2 in converters){// If conv2 outputs current
tmp=conv2.split(" ");if(tmp[1]===current){// If prev can be converted to accepted input
conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){// Condense equivalence converters
if(conv===true){conv=converters[conv2];// Otherwise, insert the intermediate dataType
}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}break;}}}}// Apply converter (if not an equivalence)
if(conv!==true){// Unless errors are allowed to bubble, catch and return them
if(conv&&s.throws){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}return{state:"success",data:response};}jQuery.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":true,// Evaluate text as a json expression
"text json":JSON.parse,// Parse text as xml
"text xml":jQuery.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:true,context:true}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function ajaxSetup(target,settings){return settings?// Building a settings object
ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):// Extending ajaxSettings
ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),// Main method
ajax:function ajax(url,options){// If url is an object, simulate pre-1.5 signature
if((typeof url==="undefined"?"undefined":_typeof2(url))==="object"){options=url;url=undefined;}// Force options to be an object
options=options||{};var transport,// URL without anti-cache param
cacheURL,// Response headers
responseHeadersString,responseHeaders,// timeout handle
timeoutTimer,// Url cleanup var
urlAnchor,// Request state (becomes false upon send and true upon completion)
completed,// To know if global events are to be dispatched
fireGlobals,// Loop variable
i,// uncached part of the url
uncached,// Create the final options object
s=jQuery.ajaxSetup({},options),// Callbacks context
callbackContext=s.context||s,// Context for global events is callbackContext if it is a DOM node or jQuery collection
globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,// Deferreds
deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),// Status-dependent callbacks
_statusCode=s.statusCode||{},// Headers (they are sent all at once)
requestHeaders={},requestHeadersNames={},// Default abort message
strAbort="canceled",// Fake xhr
jqXHR={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function getResponseHeader(key){var match;if(completed){if(!responseHeaders){responseHeaders={};while(match=rheaders.exec(responseHeadersString)){responseHeaders[match[1].toLowerCase()]=match[2];}}match=responseHeaders[key.toLowerCase()];}return match==null?null:match;},// Raw string
getAllResponseHeaders:function getAllResponseHeaders(){return completed?responseHeadersString:null;},// Caches the header
setRequestHeader:function setRequestHeader(name,value){if(completed==null){name=requestHeadersNames[name.toLowerCase()]=requestHeadersNames[name.toLowerCase()]||name;requestHeaders[name]=value;}return this;},// Overrides response content-type header
overrideMimeType:function overrideMimeType(type){if(completed==null){s.mimeType=type;}return this;},// Status-dependent callbacks
statusCode:function statusCode(map){var code;if(map){if(completed){// Execute the appropriate callbacks
jqXHR.always(map[jqXHR.status]);}else{// Lazy-add the new callbacks in a way that preserves old ones
for(code in map){_statusCode[code]=[_statusCode[code],map[code]];}}}return this;},// Cancel the request
abort:function abort(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}done(0,finalText);return this;}};// Attach deferreds
deferred.promise(jqXHR);// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
s.url=((url||s.url||location.href)+"").replace(rprotocol,location.protocol+"//");// Alias method option to type as per ticket #12004
s.type=options.method||options.type||s.method||s.type;// Extract dataTypes list
s.dataTypes=(s.dataType||"*").toLowerCase().match(rnothtmlwhite)||[""];// A cross-domain request is in order when the origin doesn't match the current origin.
if(s.crossDomain==null){urlAnchor=document.createElement("a");// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{urlAnchor.href=s.url;// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
s.crossDomain=true;}}// Convert data if not already a string
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}// Apply prefilters
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);// If request was aborted inside a prefilter, stop there
if(completed){return jqXHR;}// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
fireGlobals=jQuery.event&&s.global;// Watch for a new set of requests
if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}// Uppercase the type
s.type=s.type.toUpperCase();// Determine if request has content
s.hasContent=!rnoContent.test(s.type);// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
cacheURL=s.url.replace(rhash,"");// More options handling for requests with no content
if(!s.hasContent){// Remember the hash so we can put it back
uncached=s.url.slice(cacheURL.length);// If data is available and should be processed, append data to url
if(s.data&&(s.processData||typeof s.data==="string")){cacheURL+=(rquery.test(cacheURL)?"&":"?")+s.data;// #9682: remove data so that it's not used in an eventual retry
delete s.data;}// Add or update anti-cache param if needed
if(s.cache===false){cacheURL=cacheURL.replace(rantiCache,"$1");uncached=(rquery.test(cacheURL)?"&":"?")+"_="+nonce++ +uncached;}// Put hash and anti-cache on the URL that will be requested (gh-1732)
s.url=cacheURL+uncached;// Change '%20' to '+' if this is encoded form body content (gh-2658)
}else if(s.data&&s.processData&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0){s.data=s.data.replace(r20,"+");}// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}// Set the correct header, if data is being sent
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}// Set the Accepts header for the server, depending on the dataType
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);// Check for headers option
for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}// Allow custom headers/mimetypes and early abort
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||completed)){// Abort if not done already and return
return jqXHR.abort();}// Aborting is no longer a cancellation
strAbort="abort";// Install callbacks on deferreds
completeDeferred.add(s.complete);jqXHR.done(s.success);jqXHR.fail(s.error);// Get transport
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);// If no transport, we auto-abort
if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;// Send global event
if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}// If request was aborted inside ajaxSend, stop there
if(completed){return jqXHR;}// Timeout
if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}try{completed=false;transport.send(requestHeaders,done);}catch(e){// Rethrow post-completion exceptions
if(completed){throw e;}// Propagate others as results
done(-1,e);}}// Callback for when everything is done
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;// Ignore repeat invocations
if(completed){return;}completed=true;// Clear timeout if it exists
if(timeoutTimer){window.clearTimeout(timeoutTimer);}// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
transport=undefined;// Cache response headers
responseHeadersString=headers||"";// Set readyState
jqXHR.readyState=status>0?4:0;// Determine if successful
isSuccess=status>=200&&status<300||status===304;// Get response data
if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}// Convert no matter what (that way responseXXX fields are always set)
response=ajaxConvert(s,response,jqXHR,isSuccess);// If successful, handle type chaining
if(isSuccess){// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}// if no content
if(status===204||s.type==="HEAD"){statusText="nocontent";// if not modified
}else if(status===304){statusText="notmodified";// If we have data, let's convert it
}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{// Extract error from statusText and normalize for non-aborts
error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}// Set data for the fake xhr object
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";// Success/Error
if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}// Status-dependent callbacks
jqXHR.statusCode(_statusCode);_statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}// Complete
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);// Handle the global AJAX counter
if(! --jQuery.active){jQuery.event.trigger("ajaxStop");}}}return jqXHR;},getJSON:function getJSON(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function getScript(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){// Shift arguments if data argument was omitted
if(isFunction(data)){type=type||callback;callback=data;data=undefined;}// The url can be an options object (which then must have .url)
return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery._evalUrl=function(url){return jQuery.ajax({url:url,// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:true,async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function wrapAll(html){var wrap;if(this[0]){if(isFunction(html)){html=html.call(this[0]);}// The elements to wrap the target around
wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}return elem;}).append(this);}return this;},wrapInner:function wrapInner(html){if(isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function wrap(html){var htmlIsFunction=isFunction(html);return this.each(function(i){jQuery(this).wrapAll(htmlIsFunction?html.call(this,i):html);});},unwrap:function unwrap(selector){this.parent(selector).not("body").each(function(){jQuery(this).replaceWith(this.childNodes);});return this;}});jQuery.expr.pseudos.hidden=function(elem){return!jQuery.expr.pseudos.visible(elem);};jQuery.expr.pseudos.visible=function(elem){return!!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);};jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&"withCredentials"in xhrSupported;support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var _callback,errorCallback;// Cross domain only allowed if supported through XMLHttpRequest
if(support.cors||xhrSupported&&!options.crossDomain){return{send:function send(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password);// Apply custom fields if provided
if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}// Override mime type if needed
if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}// Set headers
for(i in headers){xhr.setRequestHeader(i,headers[i]);}// Callback
_callback=function callback(type){return function(){if(_callback){_callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.ontimeout=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){// Support: IE <=9 only
// On a manual native abort, IE9 throws
// errors on any property access that is not readyState
if(typeof xhr.status!=="number"){complete(0,"error");}else{complete(// File: protocol always yields status 0; see #8605, #14207
xhr.status,xhr.statusText);}}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};};// Listen to events
xhr.onload=_callback();errorCallback=xhr.onerror=xhr.ontimeout=_callback("error");// Support: IE 9 only
// Use onreadystatechange to replace onabort
// to handle uncaught aborts
if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else{xhr.onreadystatechange=function(){// Check readyState before timeout as it changes
if(xhr.readyState===4){// Allow onerror to be called first,
// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
window.setTimeout(function(){if(_callback){errorCallback();}});}};}// Create the abort callback
_callback=_callback("abort");try{// Do send the request (this may raise an exception)
xhr.send(options.hasContent&&options.data||null);}catch(e){// #14683: Only rethrow if this hasn't been notified as an error yet
if(_callback){throw e;}}},abort:function abort(){if(_callback){_callback();}}};}});// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter(function(s){if(s.crossDomain){s.contents.script=false;}});// Install script dataType
jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function textScript(text){jQuery.globalEval(text);return text;}}});// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}if(s.crossDomain){s.type="GET";}});// Bind script tag hack transport
jQuery.ajaxTransport("script",function(s){// This transport only deals with cross domain requests
if(s.crossDomain){var script,_callback2;return{send:function send(_,complete){script=jQuery("<script>").prop({charset:s.scriptCharset,src:s.url}).on("load error",_callback2=function callback(evt){script.remove();_callback2=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}});// Use native DOM manipulation to avoid our domManip AJAX trickery
document.head.appendChild(script[0]);},abort:function abort(){if(_callback2){_callback2();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){var callback=oldCallbacks.pop()||jQuery.expando+"_"+nonce++;this[callback]=true;return callback;}});// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(jsonProp||s.dataTypes[0]==="jsonp"){// Get callback name, remembering preexisting value associated with it
callbackName=s.jsonpCallback=isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;// Insert callback into url or form data
if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}// Use data converter to retrieve json after script execution
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}return responseContainer[0];};// Force json dataType
s.dataTypes[0]="json";// Install callback
overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};// Clean-up function (fires after converters)
jqXHR.always(function(){// If previous value didn't exist - remove it
if(overwritten===undefined){jQuery(window).removeProp(callbackName);// Otherwise restore preexisting value
}else{window[callbackName]=overwritten;}// Save back as free
if(s[callbackName]){// Make sure that re-using the options doesn't screw things around
s.jsonpCallback=originalSettings.jsonpCallback;// Save the callback name for future use
oldCallbacks.push(callbackName);}// Call if it was a function and we have a response
if(responseContainer&&isFunction(overwritten)){overwritten(responseContainer[0]);}responseContainer=overwritten=undefined;});// Delegate to script
return"script";}});// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument=function(){var body=document.implementation.createHTMLDocument("").body;body.innerHTML="<form></form><form></form>";return body.childNodes.length===2;}();// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML=function(data,context,keepScripts){if(typeof data!=="string"){return[];}if(typeof context==="boolean"){keepScripts=context;context=false;}var base,parsed,scripts;if(!context){// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
if(support.createHTMLDocument){context=document.implementation.createHTMLDocument("");// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
base=context.createElement("base");base.href=document.location.href;context.head.appendChild(base);}else{context=document;}}parsed=rsingleTag.exec(data);scripts=!keepScripts&&[];// Single tag
if(parsed){return[context.createElement(parsed[1])];}parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}return jQuery.merge([],parsed.childNodes);};/**
 * Load a url into a page
 */jQuery.fn.load=function(url,params,callback){var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=stripAndCollapse(url.slice(off));url=url.slice(0,off);}// If it's a function
if(isFunction(params)){// We assume that it's the callback
callback=params;params=undefined;// Otherwise, build a param string
}else if(params&&(typeof params==="undefined"?"undefined":_typeof2(params))==="object"){type="POST";}// If we have elements to modify, make the request
if(self.length>0){jQuery.ajax({url:url,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:type||"GET",dataType:"html",data:params}).done(function(responseText){// Save response for use in complete callback
response=arguments;self.html(selector?// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):// Otherwise use the full result
responseText);// If the request succeeds, this function gets "data", "status", "jqXHR"
// but they are ignored because response was set above.
// If it fails, this function gets "jqXHR", "status", "error"
}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);});});}return this;};// Attach a bunch of functions for handling common AJAX events
jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.pseudos.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};jQuery.offset={setOffset:function setOffset(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};// Set position first, in-case top/left are set even on static elem
if(position==="static"){elem.style.position="relative";}curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}if(isFunction(options)){// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
options=options.call(elem,i,jQuery.extend({},curOffset));}if(options.top!=null){props.top=options.top-curOffset.top+curTop;}if(options.left!=null){props.left=options.left-curOffset.left+curLeft;}if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({// offset() relates an element's border box to the document origin
offset:function offset(options){// Preserve chaining for setter
if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}var rect,win,elem=this[0];if(!elem){return;}// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
if(!elem.getClientRects().length){return{top:0,left:0};}// Get document-relative position by adding viewport scroll to viewport-relative gBCR
rect=elem.getBoundingClientRect();win=elem.ownerDocument.defaultView;return{top:rect.top+win.pageYOffset,left:rect.left+win.pageXOffset};},// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function position(){if(!this[0]){return;}var offsetParent,offset,doc,elem=this[0],parentOffset={top:0,left:0};// position:fixed elements are offset from the viewport, which itself always has zero offset
if(jQuery.css(elem,"position")==="fixed"){// Assume position:fixed implies availability of getBoundingClientRect
offset=elem.getBoundingClientRect();}else{offset=this.offset();// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
doc=elem.ownerDocument;offsetParent=elem.offsetParent||doc.documentElement;while(offsetParent&&(offsetParent===doc.body||offsetParent===doc.documentElement)&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.parentNode;}if(offsetParent&&offsetParent!==elem&&offsetParent.nodeType===1){// Incorporate borders into its offset, since they are outside its content origin
parentOffset=jQuery(offsetParent).offset();parentOffset.top+=jQuery.css(offsetParent,"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent,"borderLeftWidth",true);}}// Subtract parent offsets and element margins
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function offsetParent(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}return offsetParent||documentElement;});}});// Create scrollLeft and scrollTop methods
jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){// Coalesce documents and windows
var win;if(isWindow(elem)){win=elem;}else if(elem.nodeType===9){win=elem.defaultView;}if(val===undefined){return win?win[prop]:elem[method];}if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else{elem[method]=val;}},method,val,arguments.length);};});// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);// If curCSS returns percentage, fallback to offset
return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){// Margin is only for outerHeight, outerWidth
jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(isWindow(elem)){// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
return funcName.indexOf("outer")===0?elem["inner"+name]:elem.document.documentElement["client"+name];}// Get document width or height
if(elem.nodeType===9){doc=elem.documentElement;// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
// whichever is greatest
return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}return value===undefined?// Get width or height on the element, requesting but not forcing parseFloat
jQuery.css(elem,type,extra):// Set width or height on the element
jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable);};});});jQuery.each(("blur focus focusin focusout resize scroll click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup contextmenu").split(" "),function(i,name){// Handle event binding
jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function hover(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});jQuery.fn.extend({bind:function bind(types,data,fn){return this.on(types,null,data,fn);},unbind:function unbind(types,fn){return this.off(types,null,fn);},delegate:function delegate(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function undelegate(selector,types,fn){// ( namespace ) or ( selector, types [, fn] )
return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);}});// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy=function(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if(!isFunction(fn)){return undefined;}// Simulated bind
args=_slice.call(arguments,2);proxy=function proxy(){return fn.apply(context||this,args.concat(_slice.call(arguments)));};// Set the guid of unique handler to the same of original handler, so it can be removed
proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;};jQuery.holdReady=function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}};jQuery.isArray=Array.isArray;jQuery.parseJSON=JSON.parse;jQuery.nodeName=nodeName;jQuery.isFunction=isFunction;jQuery.isWindow=isWindow;jQuery.camelCase=camelCase;jQuery.type=toType;jQuery.now=Date.now;jQuery.isNumeric=function(obj){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var type=jQuery.type(obj);return(type==="number"||type==="string")&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(obj-parseFloat(obj));};// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery;});}var// Map over jQuery in case of overwrite
_jQuery=window.jQuery,// Map over the $ in case of overwrite
_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}return jQuery;};// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if(!noGlobal){window.jQuery=window.$=jQuery;}return jQuery;});/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.4
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */(function(global,factory){(typeof exports==="undefined"?"undefined":_typeof2(exports))==='object'&&typeof module!=='undefined'?module.exports=factory():typeof define==='function'&&define.amd?define(factory):global.Popper=factory();})(this,function(){'use strict';var isBrowser=typeof window!=='undefined'&&typeof document!=='undefined';var longerTimeoutBrowsers=['Edge','Trident','Firefox'];var timeoutDuration=0;for(var i=0;i<longerTimeoutBrowsers.length;i+=1){if(isBrowser&&navigator.userAgent.indexOf(longerTimeoutBrowsers[i])>=0){timeoutDuration=1;break;}}function microtaskDebounce(fn){var called=false;return function(){if(called){return;}called=true;window.Promise.resolve().then(function(){called=false;fn();});};}function taskDebounce(fn){var scheduled=false;return function(){if(!scheduled){scheduled=true;setTimeout(function(){scheduled=false;fn();},timeoutDuration);}};}var supportsMicroTasks=isBrowser&&window.Promise;/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/var debounce=supportsMicroTasks?microtaskDebounce:taskDebounce;/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */function isFunction(functionToCheck){var getType={};return functionToCheck&&getType.toString.call(functionToCheck)==='[object Function]';}/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */function getStyleComputedProperty(element,property){if(element.nodeType!==1){return[];}// NOTE: 1 DOM access here
var css=getComputedStyle(element,null);return property?css[property]:css;}/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */function getParentNode(element){if(element.nodeName==='HTML'){return element;}return element.parentNode||element.host;}/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */function getScrollParent(element){// Return body, `getScroll` will take care to get the correct `scrollTop` from it
if(!element){return document.body;}switch(element.nodeName){case'HTML':case'BODY':return element.ownerDocument.body;case'#document':return element.body;}// Firefox want us to check `-x` and `-y` variations as well
var _getStyleComputedProp=getStyleComputedProperty(element),overflow=_getStyleComputedProp.overflow,overflowX=_getStyleComputedProp.overflowX,overflowY=_getStyleComputedProp.overflowY;if(/(auto|scroll|overlay)/.test(overflow+overflowY+overflowX)){return element;}return getScrollParent(getParentNode(element));}var isIE11=isBrowser&&!!(window.MSInputMethodContext&&document.documentMode);var isIE10=isBrowser&&/MSIE 10/.test(navigator.userAgent);/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */function isIE(version){if(version===11){return isIE11;}if(version===10){return isIE10;}return isIE11||isIE10;}/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */function getOffsetParent(element){if(!element){return document.documentElement;}var noOffsetParent=isIE(10)?document.body:null;// NOTE: 1 DOM access here
var offsetParent=element.offsetParent;// Skip hidden elements which don't have an offsetParent
while(offsetParent===noOffsetParent&&element.nextElementSibling){offsetParent=(element=element.nextElementSibling).offsetParent;}var nodeName=offsetParent&&offsetParent.nodeName;if(!nodeName||nodeName==='BODY'||nodeName==='HTML'){return element?element.ownerDocument.documentElement:document.documentElement;}// .offsetParent will return the closest TD or TABLE in case
// no offsetParent is present, I hate this job...
if(['TD','TABLE'].indexOf(offsetParent.nodeName)!==-1&&getStyleComputedProperty(offsetParent,'position')==='static'){return getOffsetParent(offsetParent);}return offsetParent;}function isOffsetContainer(element){var nodeName=element.nodeName;if(nodeName==='BODY'){return false;}return nodeName==='HTML'||getOffsetParent(element.firstElementChild)===element;}/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */function getRoot(node){if(node.parentNode!==null){return getRoot(node.parentNode);}return node;}/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */function findCommonOffsetParent(element1,element2){// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!element1||!element1.nodeType||!element2||!element2.nodeType){return document.documentElement;}// Here we make sure to give as "start" the element that comes first in the DOM
var order=element1.compareDocumentPosition(element2)&Node.DOCUMENT_POSITION_FOLLOWING;var start=order?element1:element2;var end=order?element2:element1;// Get common ancestor container
var range=document.createRange();range.setStart(start,0);range.setEnd(end,0);var commonAncestorContainer=range.commonAncestorContainer;// Both nodes are inside #document
if(element1!==commonAncestorContainer&&element2!==commonAncestorContainer||start.contains(end)){if(isOffsetContainer(commonAncestorContainer)){return commonAncestorContainer;}return getOffsetParent(commonAncestorContainer);}// one of the nodes is inside shadowDOM, find which one
var element1root=getRoot(element1);if(element1root.host){return findCommonOffsetParent(element1root.host,element2);}else{return findCommonOffsetParent(element1,getRoot(element2).host);}}/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */function getScroll(element){var side=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'top';var upperSide=side==='top'?'scrollTop':'scrollLeft';var nodeName=element.nodeName;if(nodeName==='BODY'||nodeName==='HTML'){var html=element.ownerDocument.documentElement;var scrollingElement=element.ownerDocument.scrollingElement||html;return scrollingElement[upperSide];}return element[upperSide];}/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */function includeScroll(rect,element){var subtract=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var scrollTop=getScroll(element,'top');var scrollLeft=getScroll(element,'left');var modifier=subtract?-1:1;rect.top+=scrollTop*modifier;rect.bottom+=scrollTop*modifier;rect.left+=scrollLeft*modifier;rect.right+=scrollLeft*modifier;return rect;}/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */function getBordersSize(styles,axis){var sideA=axis==='x'?'Left':'Top';var sideB=sideA==='Left'?'Right':'Bottom';return parseFloat(styles['border'+sideA+'Width'],10)+parseFloat(styles['border'+sideB+'Width'],10);}function getSize(axis,body,html,computedStyle){return Math.max(body['offset'+axis],body['scroll'+axis],html['client'+axis],html['offset'+axis],html['scroll'+axis],isIE(10)?parseInt(html['offset'+axis])+parseInt(computedStyle['margin'+(axis==='Height'?'Top':'Left')])+parseInt(computedStyle['margin'+(axis==='Height'?'Bottom':'Right')]):0);}function getWindowSizes(document){var body=document.body;var html=document.documentElement;var computedStyle=isIE(10)&&getComputedStyle(html);return{height:getSize('Height',body,html,computedStyle),width:getSize('Width',body,html,computedStyle)};}var classCallCheck=function classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}};var createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var defineProperty=function defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;};var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */function getClientRect(offsets){return _extends({},offsets,{right:offsets.left+offsets.width,bottom:offsets.top+offsets.height});}/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */function getBoundingClientRect(element){var rect={};// IE10 10 FIX: Please, don't ask, the element isn't
// considered in DOM in some circumstances...
// This isn't reproducible in IE10 compatibility mode of IE11
try{if(isIE(10)){rect=element.getBoundingClientRect();var scrollTop=getScroll(element,'top');var scrollLeft=getScroll(element,'left');rect.top+=scrollTop;rect.left+=scrollLeft;rect.bottom+=scrollTop;rect.right+=scrollLeft;}else{rect=element.getBoundingClientRect();}}catch(e){}var result={left:rect.left,top:rect.top,width:rect.right-rect.left,height:rect.bottom-rect.top};// subtract scrollbar size from sizes
var sizes=element.nodeName==='HTML'?getWindowSizes(element.ownerDocument):{};var width=sizes.width||element.clientWidth||result.right-result.left;var height=sizes.height||element.clientHeight||result.bottom-result.top;var horizScrollbar=element.offsetWidth-width;var vertScrollbar=element.offsetHeight-height;// if an hypothetical scrollbar is detected, we must be sure it's not a `border`
// we make this check conditional for performance reasons
if(horizScrollbar||vertScrollbar){var styles=getStyleComputedProperty(element);horizScrollbar-=getBordersSize(styles,'x');vertScrollbar-=getBordersSize(styles,'y');result.width-=horizScrollbar;result.height-=vertScrollbar;}return getClientRect(result);}function getOffsetRectRelativeToArbitraryNode(children,parent){var fixedPosition=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var isIE10=isIE(10);var isHTML=parent.nodeName==='HTML';var childrenRect=getBoundingClientRect(children);var parentRect=getBoundingClientRect(parent);var scrollParent=getScrollParent(children);var styles=getStyleComputedProperty(parent);var borderTopWidth=parseFloat(styles.borderTopWidth,10);var borderLeftWidth=parseFloat(styles.borderLeftWidth,10);// In cases where the parent is fixed, we must ignore negative scroll in offset calc
if(fixedPosition&&isHTML){parentRect.top=Math.max(parentRect.top,0);parentRect.left=Math.max(parentRect.left,0);}var offsets=getClientRect({top:childrenRect.top-parentRect.top-borderTopWidth,left:childrenRect.left-parentRect.left-borderLeftWidth,width:childrenRect.width,height:childrenRect.height});offsets.marginTop=0;offsets.marginLeft=0;// Subtract margins of documentElement in case it's being used as parent
// we do this only on HTML because it's the only element that behaves
// differently when margins are applied to it. The margins are included in
// the box of the documentElement, in the other cases not.
if(!isIE10&&isHTML){var marginTop=parseFloat(styles.marginTop,10);var marginLeft=parseFloat(styles.marginLeft,10);offsets.top-=borderTopWidth-marginTop;offsets.bottom-=borderTopWidth-marginTop;offsets.left-=borderLeftWidth-marginLeft;offsets.right-=borderLeftWidth-marginLeft;// Attach marginTop and marginLeft because in some circumstances we may need them
offsets.marginTop=marginTop;offsets.marginLeft=marginLeft;}if(isIE10&&!fixedPosition?parent.contains(scrollParent):parent===scrollParent&&scrollParent.nodeName!=='BODY'){offsets=includeScroll(offsets,parent);}return offsets;}function getViewportOffsetRectRelativeToArtbitraryNode(element){var excludeScroll=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var html=element.ownerDocument.documentElement;var relativeOffset=getOffsetRectRelativeToArbitraryNode(element,html);var width=Math.max(html.clientWidth,window.innerWidth||0);var height=Math.max(html.clientHeight,window.innerHeight||0);var scrollTop=!excludeScroll?getScroll(html):0;var scrollLeft=!excludeScroll?getScroll(html,'left'):0;var offset={top:scrollTop-relativeOffset.top+relativeOffset.marginTop,left:scrollLeft-relativeOffset.left+relativeOffset.marginLeft,width:width,height:height};return getClientRect(offset);}/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */function isFixed(element){var nodeName=element.nodeName;if(nodeName==='BODY'||nodeName==='HTML'){return false;}if(getStyleComputedProperty(element,'position')==='fixed'){return true;}return isFixed(getParentNode(element));}/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */function getFixedPositionOffsetParent(element){// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!element||!element.parentElement||isIE()){return document.documentElement;}var el=element.parentElement;while(el&&getStyleComputedProperty(el,'transform')==='none'){el=el.parentElement;}return el||document.documentElement;}/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */function getBoundaries(popper,reference,padding,boundariesElement){var fixedPosition=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;// NOTE: 1 DOM access here
var boundaries={top:0,left:0};var offsetParent=fixedPosition?getFixedPositionOffsetParent(popper):findCommonOffsetParent(popper,reference);// Handle viewport case
if(boundariesElement==='viewport'){boundaries=getViewportOffsetRectRelativeToArtbitraryNode(offsetParent,fixedPosition);}else{// Handle other cases based on DOM element used as boundaries
var boundariesNode=void 0;if(boundariesElement==='scrollParent'){boundariesNode=getScrollParent(getParentNode(reference));if(boundariesNode.nodeName==='BODY'){boundariesNode=popper.ownerDocument.documentElement;}}else if(boundariesElement==='window'){boundariesNode=popper.ownerDocument.documentElement;}else{boundariesNode=boundariesElement;}var offsets=getOffsetRectRelativeToArbitraryNode(boundariesNode,offsetParent,fixedPosition);// In case of HTML, we need a different computation
if(boundariesNode.nodeName==='HTML'&&!isFixed(offsetParent)){var _getWindowSizes=getWindowSizes(popper.ownerDocument),height=_getWindowSizes.height,width=_getWindowSizes.width;boundaries.top+=offsets.top-offsets.marginTop;boundaries.bottom=height+offsets.top;boundaries.left+=offsets.left-offsets.marginLeft;boundaries.right=width+offsets.left;}else{// for all the other DOM elements, this one is good
boundaries=offsets;}}// Add paddings
padding=padding||0;var isPaddingNumber=typeof padding==='number';boundaries.left+=isPaddingNumber?padding:padding.left||0;boundaries.top+=isPaddingNumber?padding:padding.top||0;boundaries.right-=isPaddingNumber?padding:padding.right||0;boundaries.bottom-=isPaddingNumber?padding:padding.bottom||0;return boundaries;}function getArea(_ref){var width=_ref.width,height=_ref.height;return width*height;}/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function computeAutoPlacement(placement,refRect,popper,reference,boundariesElement){var padding=arguments.length>5&&arguments[5]!==undefined?arguments[5]:0;if(placement.indexOf('auto')===-1){return placement;}var boundaries=getBoundaries(popper,reference,padding,boundariesElement);var rects={top:{width:boundaries.width,height:refRect.top-boundaries.top},right:{width:boundaries.right-refRect.right,height:boundaries.height},bottom:{width:boundaries.width,height:boundaries.bottom-refRect.bottom},left:{width:refRect.left-boundaries.left,height:boundaries.height}};var sortedAreas=Object.keys(rects).map(function(key){return _extends({key:key},rects[key],{area:getArea(rects[key])});}).sort(function(a,b){return b.area-a.area;});var filteredAreas=sortedAreas.filter(function(_ref2){var width=_ref2.width,height=_ref2.height;return width>=popper.clientWidth&&height>=popper.clientHeight;});var computedPlacement=filteredAreas.length>0?filteredAreas[0].key:sortedAreas[0].key;var variation=placement.split('-')[1];return computedPlacement+(variation?'-'+variation:'');}/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */function getReferenceOffsets(state,popper,reference){var fixedPosition=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var commonOffsetParent=fixedPosition?getFixedPositionOffsetParent(popper):findCommonOffsetParent(popper,reference);return getOffsetRectRelativeToArbitraryNode(reference,commonOffsetParent,fixedPosition);}/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */function getOuterSizes(element){var styles=getComputedStyle(element);var x=parseFloat(styles.marginTop)+parseFloat(styles.marginBottom);var y=parseFloat(styles.marginLeft)+parseFloat(styles.marginRight);var result={width:element.offsetWidth+y,height:element.offsetHeight+x};return result;}/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */function getOppositePlacement(placement){var hash={left:'right',right:'left',bottom:'top',top:'bottom'};return placement.replace(/left|right|bottom|top/g,function(matched){return hash[matched];});}/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */function getPopperOffsets(popper,referenceOffsets,placement){placement=placement.split('-')[0];// Get popper node sizes
var popperRect=getOuterSizes(popper);// Add position, width and height to our offsets object
var popperOffsets={width:popperRect.width,height:popperRect.height};// depending by the popper placement we have to compute its offsets slightly differently
var isHoriz=['right','left'].indexOf(placement)!==-1;var mainSide=isHoriz?'top':'left';var secondarySide=isHoriz?'left':'top';var measurement=isHoriz?'height':'width';var secondaryMeasurement=!isHoriz?'height':'width';popperOffsets[mainSide]=referenceOffsets[mainSide]+referenceOffsets[measurement]/2-popperRect[measurement]/2;if(placement===secondarySide){popperOffsets[secondarySide]=referenceOffsets[secondarySide]-popperRect[secondaryMeasurement];}else{popperOffsets[secondarySide]=referenceOffsets[getOppositePlacement(secondarySide)];}return popperOffsets;}/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */function find(arr,check){// use native find if supported
if(Array.prototype.find){return arr.find(check);}// use `filter` to obtain the same behavior of `find`
return arr.filter(check)[0];}/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */function findIndex(arr,prop,value){// use native findIndex if supported
if(Array.prototype.findIndex){return arr.findIndex(function(cur){return cur[prop]===value;});}// use `find` + `indexOf` if `findIndex` isn't supported
var match=find(arr,function(obj){return obj[prop]===value;});return arr.indexOf(match);}/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */function runModifiers(modifiers,data,ends){var modifiersToRun=ends===undefined?modifiers:modifiers.slice(0,findIndex(modifiers,'name',ends));modifiersToRun.forEach(function(modifier){if(modifier['function']){// eslint-disable-line dot-notation
console.warn('`modifier.function` is deprecated, use `modifier.fn`!');}var fn=modifier['function']||modifier.fn;// eslint-disable-line dot-notation
if(modifier.enabled&&isFunction(fn)){// Add properties to offsets to make them a complete clientRect object
// we do this before each modifier to make sure the previous one doesn't
// mess with these values
data.offsets.popper=getClientRect(data.offsets.popper);data.offsets.reference=getClientRect(data.offsets.reference);data=fn(data,modifier);}});return data;}/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */function update(){// if popper is destroyed, don't perform any further update
if(this.state.isDestroyed){return;}var data={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:false,offsets:{}};// compute reference element offsets
data.offsets.reference=getReferenceOffsets(this.state,this.popper,this.reference,this.options.positionFixed);// compute auto placement, store placement inside the data object,
// modifiers will be able to edit `placement` if needed
// and refer to originalPlacement to know the original value
data.placement=computeAutoPlacement(this.options.placement,data.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding);// store the computed placement inside `originalPlacement`
data.originalPlacement=data.placement;data.positionFixed=this.options.positionFixed;// compute the popper offsets
data.offsets.popper=getPopperOffsets(this.popper,data.offsets.reference,data.placement);data.offsets.popper.position=this.options.positionFixed?'fixed':'absolute';// run the modifiers
data=runModifiers(this.modifiers,data);// the first `update` will call `onCreate` callback
// the other ones will call `onUpdate` callback
if(!this.state.isCreated){this.state.isCreated=true;this.options.onCreate(data);}else{this.options.onUpdate(data);}}/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */function isModifierEnabled(modifiers,modifierName){return modifiers.some(function(_ref){var name=_ref.name,enabled=_ref.enabled;return enabled&&name===modifierName;});}/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */function getSupportedPropertyName(property){var prefixes=[false,'ms','Webkit','Moz','O'];var upperProp=property.charAt(0).toUpperCase()+property.slice(1);for(var i=0;i<prefixes.length;i++){var prefix=prefixes[i];var toCheck=prefix?''+prefix+upperProp:property;if(typeof document.body.style[toCheck]!=='undefined'){return toCheck;}}return null;}/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */function destroy(){this.state.isDestroyed=true;// touch DOM only if `applyStyle` modifier is enabled
if(isModifierEnabled(this.modifiers,'applyStyle')){this.popper.removeAttribute('x-placement');this.popper.style.position='';this.popper.style.top='';this.popper.style.left='';this.popper.style.right='';this.popper.style.bottom='';this.popper.style.willChange='';this.popper.style[getSupportedPropertyName('transform')]='';}this.disableEventListeners();// remove the popper if user explicity asked for the deletion on destroy
// do not use `remove` because IE11 doesn't support it
if(this.options.removeOnDestroy){this.popper.parentNode.removeChild(this.popper);}return this;}/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */function getWindow(element){var ownerDocument=element.ownerDocument;return ownerDocument?ownerDocument.defaultView:window;}function attachToScrollParents(scrollParent,event,callback,scrollParents){var isBody=scrollParent.nodeName==='BODY';var target=isBody?scrollParent.ownerDocument.defaultView:scrollParent;target.addEventListener(event,callback,{passive:true});if(!isBody){attachToScrollParents(getScrollParent(target.parentNode),event,callback,scrollParents);}scrollParents.push(target);}/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */function setupEventListeners(reference,options,state,updateBound){// Resize event listener on window
state.updateBound=updateBound;getWindow(reference).addEventListener('resize',state.updateBound,{passive:true});// Scroll event listener on scroll parents
var scrollElement=getScrollParent(reference);attachToScrollParents(scrollElement,'scroll',state.updateBound,state.scrollParents);state.scrollElement=scrollElement;state.eventsEnabled=true;return state;}/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */function enableEventListeners(){if(!this.state.eventsEnabled){this.state=setupEventListeners(this.reference,this.options,this.state,this.scheduleUpdate);}}/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */function removeEventListeners(reference,state){// Remove resize event listener on window
getWindow(reference).removeEventListener('resize',state.updateBound);// Remove scroll event listener on scroll parents
state.scrollParents.forEach(function(target){target.removeEventListener('scroll',state.updateBound);});// Reset state
state.updateBound=null;state.scrollParents=[];state.scrollElement=null;state.eventsEnabled=false;return state;}/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */function disableEventListeners(){if(this.state.eventsEnabled){cancelAnimationFrame(this.scheduleUpdate);this.state=removeEventListeners(this.reference,this.state);}}/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */function isNumeric(n){return n!==''&&!isNaN(parseFloat(n))&&isFinite(n);}/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */function setStyles(element,styles){Object.keys(styles).forEach(function(prop){var unit='';// add unit if the value is numeric and is one of the following
if(['width','height','top','right','bottom','left'].indexOf(prop)!==-1&&isNumeric(styles[prop])){unit='px';}element.style[prop]=styles[prop]+unit;});}/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */function setAttributes(element,attributes){Object.keys(attributes).forEach(function(prop){var value=attributes[prop];if(value!==false){element.setAttribute(prop,attributes[prop]);}else{element.removeAttribute(prop);}});}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */function applyStyle(data){// any property present in `data.styles` will be applied to the popper,
// in this way we can make the 3rd party modifiers add custom styles to it
// Be aware, modifiers could override the properties defined in the previous
// lines of this modifier!
setStyles(data.instance.popper,data.styles);// any property present in `data.attributes` will be applied to the popper,
// they will be set as HTML attributes of the element
setAttributes(data.instance.popper,data.attributes);// if arrowElement is defined and arrowStyles has some properties
if(data.arrowElement&&Object.keys(data.arrowStyles).length){setStyles(data.arrowElement,data.arrowStyles);}return data;}/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */function applyStyleOnLoad(reference,popper,options,modifierOptions,state){// compute reference element offsets
var referenceOffsets=getReferenceOffsets(state,popper,reference,options.positionFixed);// compute auto placement, store placement inside the data object,
// modifiers will be able to edit `placement` if needed
// and refer to originalPlacement to know the original value
var placement=computeAutoPlacement(options.placement,referenceOffsets,popper,reference,options.modifiers.flip.boundariesElement,options.modifiers.flip.padding);popper.setAttribute('x-placement',placement);// Apply `position` to popper before anything else because
// without the position applied we can't guarantee correct computations
setStyles(popper,{position:options.positionFixed?'fixed':'absolute'});return options;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function computeStyle(data,options){var x=options.x,y=options.y;var popper=data.offsets.popper;// Remove this legacy support in Popper.js v2
var legacyGpuAccelerationOption=find(data.instance.modifiers,function(modifier){return modifier.name==='applyStyle';}).gpuAcceleration;if(legacyGpuAccelerationOption!==undefined){console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');}var gpuAcceleration=legacyGpuAccelerationOption!==undefined?legacyGpuAccelerationOption:options.gpuAcceleration;var offsetParent=getOffsetParent(data.instance.popper);var offsetParentRect=getBoundingClientRect(offsetParent);// Styles
var styles={position:popper.position};// Avoid blurry text by using full pixel integers.
// For pixel-perfect positioning, top/bottom prefers rounded
// values, while left/right prefers floored values.
var offsets={left:Math.floor(popper.left),top:Math.round(popper.top),bottom:Math.round(popper.bottom),right:Math.floor(popper.right)};var sideA=x==='bottom'?'top':'bottom';var sideB=y==='right'?'left':'right';// if gpuAcceleration is set to `true` and transform is supported,
//  we use `translate3d` to apply the position to the popper we
// automatically use the supported prefixed version if needed
var prefixedProperty=getSupportedPropertyName('transform');// now, let's make a step back and look at this code closely (wtf?)
// If the content of the popper grows once it's been positioned, it
// may happen that the popper gets misplaced because of the new content
// overflowing its reference element
// To avoid this problem, we provide two options (x and y), which allow
// the consumer to define the offset origin.
// If we position a popper on top of a reference element, we can set
// `x` to `top` to make the popper grow towards its top instead of
// its bottom.
var left=void 0,top=void 0;if(sideA==='bottom'){// when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
// and not the bottom of the html element
if(offsetParent.nodeName==='HTML'){top=-offsetParent.clientHeight+offsets.bottom;}else{top=-offsetParentRect.height+offsets.bottom;}}else{top=offsets.top;}if(sideB==='right'){if(offsetParent.nodeName==='HTML'){left=-offsetParent.clientWidth+offsets.right;}else{left=-offsetParentRect.width+offsets.right;}}else{left=offsets.left;}if(gpuAcceleration&&prefixedProperty){styles[prefixedProperty]='translate3d('+left+'px, '+top+'px, 0)';styles[sideA]=0;styles[sideB]=0;styles.willChange='transform';}else{// othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
var invertTop=sideA==='bottom'?-1:1;var invertLeft=sideB==='right'?-1:1;styles[sideA]=top*invertTop;styles[sideB]=left*invertLeft;styles.willChange=sideA+', '+sideB;}// Attributes
var attributes={'x-placement':data.placement};// Update `data` attributes, styles and arrowStyles
data.attributes=_extends({},attributes,data.attributes);data.styles=_extends({},styles,data.styles);data.arrowStyles=_extends({},data.offsets.arrow,data.arrowStyles);return data;}/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */function isModifierRequired(modifiers,requestingName,requestedName){var requesting=find(modifiers,function(_ref){var name=_ref.name;return name===requestingName;});var isRequired=!!requesting&&modifiers.some(function(modifier){return modifier.name===requestedName&&modifier.enabled&&modifier.order<requesting.order;});if(!isRequired){var _requesting='`'+requestingName+'`';var requested='`'+requestedName+'`';console.warn(requested+' modifier is required by '+_requesting+' modifier in order to work, be sure to include it before '+_requesting+'!');}return isRequired;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function arrow(data,options){var _data$offsets$arrow;// arrow depends on keepTogether in order to work
if(!isModifierRequired(data.instance.modifiers,'arrow','keepTogether')){return data;}var arrowElement=options.element;// if arrowElement is a string, suppose it's a CSS selector
if(typeof arrowElement==='string'){arrowElement=data.instance.popper.querySelector(arrowElement);// if arrowElement is not found, don't run the modifier
if(!arrowElement){return data;}}else{// if the arrowElement isn't a query selector we must check that the
// provided DOM node is child of its popper node
if(!data.instance.popper.contains(arrowElement)){console.warn('WARNING: `arrow.element` must be child of its popper element!');return data;}}var placement=data.placement.split('-')[0];var _data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var isVertical=['left','right'].indexOf(placement)!==-1;var len=isVertical?'height':'width';var sideCapitalized=isVertical?'Top':'Left';var side=sideCapitalized.toLowerCase();var altSide=isVertical?'left':'top';var opSide=isVertical?'bottom':'right';var arrowElementSize=getOuterSizes(arrowElement)[len];//
// extends keepTogether behavior making sure the popper and its
// reference have enough pixels in conjunction
//
// top/left side
if(reference[opSide]-arrowElementSize<popper[side]){data.offsets.popper[side]-=popper[side]-(reference[opSide]-arrowElementSize);}// bottom/right side
if(reference[side]+arrowElementSize>popper[opSide]){data.offsets.popper[side]+=reference[side]+arrowElementSize-popper[opSide];}data.offsets.popper=getClientRect(data.offsets.popper);// compute center of the popper
var center=reference[side]+reference[len]/2-arrowElementSize/2;// Compute the sideValue using the updated popper offsets
// take popper margin in account because we don't have this info available
var css=getStyleComputedProperty(data.instance.popper);var popperMarginSide=parseFloat(css['margin'+sideCapitalized],10);var popperBorderSide=parseFloat(css['border'+sideCapitalized+'Width'],10);var sideValue=center-data.offsets.popper[side]-popperMarginSide-popperBorderSide;// prevent arrowElement from being placed not contiguously to its popper
sideValue=Math.max(Math.min(popper[len]-arrowElementSize,sideValue),0);data.arrowElement=arrowElement;data.offsets.arrow=(_data$offsets$arrow={},defineProperty(_data$offsets$arrow,side,Math.round(sideValue)),defineProperty(_data$offsets$arrow,altSide,''),_data$offsets$arrow);return data;}/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */function getOppositeVariation(variation){if(variation==='end'){return'start';}else if(variation==='start'){return'end';}return variation;}/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */var placements=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'];// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements=placements.slice(3);/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */function clockwise(placement){var counter=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var index=validPlacements.indexOf(placement);var arr=validPlacements.slice(index+1).concat(validPlacements.slice(0,index));return counter?arr.reverse():arr;}var BEHAVIORS={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'};/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function flip(data,options){// if `inner` modifier is enabled, we can't use the `flip` modifier
if(isModifierEnabled(data.instance.modifiers,'inner')){return data;}if(data.flipped&&data.placement===data.originalPlacement){// seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
return data;}var boundaries=getBoundaries(data.instance.popper,data.instance.reference,options.padding,options.boundariesElement,data.positionFixed);var placement=data.placement.split('-')[0];var placementOpposite=getOppositePlacement(placement);var variation=data.placement.split('-')[1]||'';var flipOrder=[];switch(options.behavior){case BEHAVIORS.FLIP:flipOrder=[placement,placementOpposite];break;case BEHAVIORS.CLOCKWISE:flipOrder=clockwise(placement);break;case BEHAVIORS.COUNTERCLOCKWISE:flipOrder=clockwise(placement,true);break;default:flipOrder=options.behavior;}flipOrder.forEach(function(step,index){if(placement!==step||flipOrder.length===index+1){return data;}placement=data.placement.split('-')[0];placementOpposite=getOppositePlacement(placement);var popperOffsets=data.offsets.popper;var refOffsets=data.offsets.reference;// using floor because the reference offsets may contain decimals we are not going to consider here
var floor=Math.floor;var overlapsRef=placement==='left'&&floor(popperOffsets.right)>floor(refOffsets.left)||placement==='right'&&floor(popperOffsets.left)<floor(refOffsets.right)||placement==='top'&&floor(popperOffsets.bottom)>floor(refOffsets.top)||placement==='bottom'&&floor(popperOffsets.top)<floor(refOffsets.bottom);var overflowsLeft=floor(popperOffsets.left)<floor(boundaries.left);var overflowsRight=floor(popperOffsets.right)>floor(boundaries.right);var overflowsTop=floor(popperOffsets.top)<floor(boundaries.top);var overflowsBottom=floor(popperOffsets.bottom)>floor(boundaries.bottom);var overflowsBoundaries=placement==='left'&&overflowsLeft||placement==='right'&&overflowsRight||placement==='top'&&overflowsTop||placement==='bottom'&&overflowsBottom;// flip the variation if required
var isVertical=['top','bottom'].indexOf(placement)!==-1;var flippedVariation=!!options.flipVariations&&(isVertical&&variation==='start'&&overflowsLeft||isVertical&&variation==='end'&&overflowsRight||!isVertical&&variation==='start'&&overflowsTop||!isVertical&&variation==='end'&&overflowsBottom);if(overlapsRef||overflowsBoundaries||flippedVariation){// this boolean to detect any flip loop
data.flipped=true;if(overlapsRef||overflowsBoundaries){placement=flipOrder[index+1];}if(flippedVariation){variation=getOppositeVariation(variation);}data.placement=placement+(variation?'-'+variation:'');// this object contains `position`, we want to preserve it along with
// any additional property we may add in the future
data.offsets.popper=_extends({},data.offsets.popper,getPopperOffsets(data.instance.popper,data.offsets.reference,data.placement));data=runModifiers(data.instance.modifiers,data,'flip');}});return data;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function keepTogether(data){var _data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var placement=data.placement.split('-')[0];var floor=Math.floor;var isVertical=['top','bottom'].indexOf(placement)!==-1;var side=isVertical?'right':'bottom';var opSide=isVertical?'left':'top';var measurement=isVertical?'width':'height';if(popper[side]<floor(reference[opSide])){data.offsets.popper[opSide]=floor(reference[opSide])-popper[measurement];}if(popper[opSide]>floor(reference[side])){data.offsets.popper[opSide]=floor(reference[side]);}return data;}/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */function toValue(str,measurement,popperOffsets,referenceOffsets){// separate value from unit
var split=str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);var value=+split[1];var unit=split[2];// If it's not a number it's an operator, I guess
if(!value){return str;}if(unit.indexOf('%')===0){var element=void 0;switch(unit){case'%p':element=popperOffsets;break;case'%':case'%r':default:element=referenceOffsets;}var rect=getClientRect(element);return rect[measurement]/100*value;}else if(unit==='vh'||unit==='vw'){// if is a vh or vw, we calculate the size based on the viewport
var size=void 0;if(unit==='vh'){size=Math.max(document.documentElement.clientHeight,window.innerHeight||0);}else{size=Math.max(document.documentElement.clientWidth,window.innerWidth||0);}return size/100*value;}else{// if is an explicit pixel unit, we get rid of the unit and keep the value
// if is an implicit unit, it's px, and we return just the value
return value;}}/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */function parseOffset(offset,popperOffsets,referenceOffsets,basePlacement){var offsets=[0,0];// Use height if placement is left or right and index is 0 otherwise use width
// in this way the first offset will use an axis and the second one
// will use the other one
var useHeight=['right','left'].indexOf(basePlacement)!==-1;// Split the offset string to obtain a list of values and operands
// The regex addresses values with the plus or minus sign in front (+10, -20, etc)
var fragments=offset.split(/(\+|\-)/).map(function(frag){return frag.trim();});// Detect if the offset string contains a pair of values or a single one
// they could be separated by comma or space
var divider=fragments.indexOf(find(fragments,function(frag){return frag.search(/,|\s/)!==-1;}));if(fragments[divider]&&fragments[divider].indexOf(',')===-1){console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');}// If divider is found, we divide the list of values and operands to divide
// them by ofset X and Y.
var splitRegex=/\s*,\s*|\s+/;var ops=divider!==-1?[fragments.slice(0,divider).concat([fragments[divider].split(splitRegex)[0]]),[fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider+1))]:[fragments];// Convert the values with units to absolute pixels to allow our computations
ops=ops.map(function(op,index){// Most of the units rely on the orientation of the popper
var measurement=(index===1?!useHeight:useHeight)?'height':'width';var mergeWithPrevious=false;return op// This aggregates any `+` or `-` sign that aren't considered operators
// e.g.: 10 + +5 => [10, +, +5]
.reduce(function(a,b){if(a[a.length-1]===''&&['+','-'].indexOf(b)!==-1){a[a.length-1]=b;mergeWithPrevious=true;return a;}else if(mergeWithPrevious){a[a.length-1]+=b;mergeWithPrevious=false;return a;}else{return a.concat(b);}},[])// Here we convert the string values into number values (in px)
.map(function(str){return toValue(str,measurement,popperOffsets,referenceOffsets);});});// Loop trough the offsets arrays and execute the operations
ops.forEach(function(op,index){op.forEach(function(frag,index2){if(isNumeric(frag)){offsets[index]+=frag*(op[index2-1]==='-'?-1:1);}});});return offsets;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */function offset(data,_ref){var offset=_ref.offset;var placement=data.placement,_data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var basePlacement=placement.split('-')[0];var offsets=void 0;if(isNumeric(+offset)){offsets=[+offset,0];}else{offsets=parseOffset(offset,popper,reference,basePlacement);}if(basePlacement==='left'){popper.top+=offsets[0];popper.left-=offsets[1];}else if(basePlacement==='right'){popper.top+=offsets[0];popper.left+=offsets[1];}else if(basePlacement==='top'){popper.left+=offsets[0];popper.top-=offsets[1];}else if(basePlacement==='bottom'){popper.left+=offsets[0];popper.top+=offsets[1];}data.popper=popper;return data;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function preventOverflow(data,options){var boundariesElement=options.boundariesElement||getOffsetParent(data.instance.popper);// If offsetParent is the reference element, we really want to
// go one step up and use the next offsetParent as reference to
// avoid to make this modifier completely useless and look like broken
if(data.instance.reference===boundariesElement){boundariesElement=getOffsetParent(boundariesElement);}// NOTE: DOM access here
// resets the popper's position so that the document size can be calculated excluding
// the size of the popper element itself
var transformProp=getSupportedPropertyName('transform');var popperStyles=data.instance.popper.style;// assignment to help minification
var top=popperStyles.top,left=popperStyles.left,transform=popperStyles[transformProp];popperStyles.top='';popperStyles.left='';popperStyles[transformProp]='';var boundaries=getBoundaries(data.instance.popper,data.instance.reference,options.padding,boundariesElement,data.positionFixed);// NOTE: DOM access here
// restores the original style properties after the offsets have been computed
popperStyles.top=top;popperStyles.left=left;popperStyles[transformProp]=transform;options.boundaries=boundaries;var order=options.priority;var popper=data.offsets.popper;var check={primary:function primary(placement){var value=popper[placement];if(popper[placement]<boundaries[placement]&&!options.escapeWithReference){value=Math.max(popper[placement],boundaries[placement]);}return defineProperty({},placement,value);},secondary:function secondary(placement){var mainSide=placement==='right'?'left':'top';var value=popper[mainSide];if(popper[placement]>boundaries[placement]&&!options.escapeWithReference){value=Math.min(popper[mainSide],boundaries[placement]-(placement==='right'?popper.width:popper.height));}return defineProperty({},mainSide,value);}};order.forEach(function(placement){var side=['left','top'].indexOf(placement)!==-1?'primary':'secondary';popper=_extends({},popper,check[side](placement));});data.offsets.popper=popper;return data;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function shift(data){var placement=data.placement;var basePlacement=placement.split('-')[0];var shiftvariation=placement.split('-')[1];// if shift shiftvariation is specified, run the modifier
if(shiftvariation){var _data$offsets=data.offsets,reference=_data$offsets.reference,popper=_data$offsets.popper;var isVertical=['bottom','top'].indexOf(basePlacement)!==-1;var side=isVertical?'left':'top';var measurement=isVertical?'width':'height';var shiftOffsets={start:defineProperty({},side,reference[side]),end:defineProperty({},side,reference[side]+reference[measurement]-popper[measurement])};data.offsets.popper=_extends({},popper,shiftOffsets[shiftvariation]);}return data;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function hide(data){if(!isModifierRequired(data.instance.modifiers,'hide','preventOverflow')){return data;}var refRect=data.offsets.reference;var bound=find(data.instance.modifiers,function(modifier){return modifier.name==='preventOverflow';}).boundaries;if(refRect.bottom<bound.top||refRect.left>bound.right||refRect.top>bound.bottom||refRect.right<bound.left){// Avoid unnecessary DOM access if visibility hasn't changed
if(data.hide===true){return data;}data.hide=true;data.attributes['x-out-of-boundaries']='';}else{// Avoid unnecessary DOM access if visibility hasn't changed
if(data.hide===false){return data;}data.hide=false;data.attributes['x-out-of-boundaries']=false;}return data;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function inner(data){var placement=data.placement;var basePlacement=placement.split('-')[0];var _data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var isHoriz=['left','right'].indexOf(basePlacement)!==-1;var subtractLength=['top','left'].indexOf(basePlacement)===-1;popper[isHoriz?'left':'top']=reference[basePlacement]-(subtractLength?popper[isHoriz?'width':'height']:0);data.placement=getOppositePlacement(placement);data.offsets.popper=getClientRect(popper);return data;}/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 *//**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */var modifiers={/**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */shift:{/** @prop {number} order=100 - Index used to define the order of execution */order:100,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:shift},/**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */offset:{/** @prop {number} order=200 - Index used to define the order of execution */order:200,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:offset,/** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */offset:0},/**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */preventOverflow:{/** @prop {number} order=300 - Index used to define the order of execution */order:300,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:preventOverflow,/**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */priority:['left','right','top','bottom'],/**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */padding:5,/**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */boundariesElement:'scrollParent'},/**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */keepTogether:{/** @prop {number} order=400 - Index used to define the order of execution */order:400,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:keepTogether},/**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */arrow:{/** @prop {number} order=500 - Index used to define the order of execution */order:500,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:arrow,/** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */element:'[x-arrow]'},/**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */flip:{/** @prop {number} order=600 - Index used to define the order of execution */order:600,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:flip,/**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */behavior:'flip',/**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */padding:5,/**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */boundariesElement:'viewport'},/**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */inner:{/** @prop {number} order=700 - Index used to define the order of execution */order:700,/** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */enabled:false,/** @prop {ModifierFn} */fn:inner},/**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */hide:{/** @prop {number} order=800 - Index used to define the order of execution */order:800,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:hide},/**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */computeStyle:{/** @prop {number} order=850 - Index used to define the order of execution */order:850,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:computeStyle,/**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */gpuAcceleration:true,/**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */x:'bottom',/**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */y:'right'},/**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */applyStyle:{/** @prop {number} order=900 - Index used to define the order of execution */order:900,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:applyStyle,/** @prop {Function} */onLoad:applyStyleOnLoad,/**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */gpuAcceleration:undefined}};/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 *//**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */var Defaults={/**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */placement:'bottom',/**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */positionFixed:false,/**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */eventsEnabled:true,/**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */removeOnDestroy:false,/**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */onCreate:function onCreate(){},/**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */onUpdate:function onUpdate(){},/**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */modifiers:modifiers};/**
 * @callback onCreate
 * @param {dataObject} data
 *//**
 * @callback onUpdate
 * @param {dataObject} data
 */// Utils
// Methods
var Popper=function(){/**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */function Popper(reference,popper){var _this=this;var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};classCallCheck(this,Popper);this.scheduleUpdate=function(){return requestAnimationFrame(_this.update);};// make update() debounced, so that it only runs at most once-per-tick
this.update=debounce(this.update.bind(this));// with {} we create a new object with the options inside it
this.options=_extends({},Popper.Defaults,options);// init state
this.state={isDestroyed:false,isCreated:false,scrollParents:[]};// get reference and popper elements (allow jQuery wrappers)
this.reference=reference&&reference.jquery?reference[0]:reference;this.popper=popper&&popper.jquery?popper[0]:popper;// Deep merge modifiers options
this.options.modifiers={};Object.keys(_extends({},Popper.Defaults.modifiers,options.modifiers)).forEach(function(name){_this.options.modifiers[name]=_extends({},Popper.Defaults.modifiers[name]||{},options.modifiers?options.modifiers[name]:{});});// Refactoring modifiers' list (Object => Array)
this.modifiers=Object.keys(this.options.modifiers).map(function(name){return _extends({name:name},_this.options.modifiers[name]);})// sort the modifiers by order
.sort(function(a,b){return a.order-b.order;});// modifiers have the ability to execute arbitrary code when Popper.js get inited
// such code is executed in the same order of its modifier
// they could add new properties to their options configuration
// BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
this.modifiers.forEach(function(modifierOptions){if(modifierOptions.enabled&&isFunction(modifierOptions.onLoad)){modifierOptions.onLoad(_this.reference,_this.popper,_this.options,modifierOptions,_this.state);}});// fire the first update to position the popper in the right place
this.update();var eventsEnabled=this.options.eventsEnabled;if(eventsEnabled){// setup event listeners, they will take care of update the position in specific situations
this.enableEventListeners();}this.state.eventsEnabled=eventsEnabled;}// We can't use class properties because they don't get listed in the
// class prototype and break stuff like Sinon stubs
createClass(Popper,[{key:'update',value:function update$$1(){return update.call(this);}},{key:'destroy',value:function destroy$$1(){return destroy.call(this);}},{key:'enableEventListeners',value:function enableEventListeners$$1(){return enableEventListeners.call(this);}},{key:'disableEventListeners',value:function disableEventListeners$$1(){return disableEventListeners.call(this);}/**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     *//**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */}]);return Popper;}();/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */Popper.Utils=(typeof window!=='undefined'?window:global).PopperUtils;Popper.placements=placements;Popper.Defaults=Defaults;return Popper;});//# sourceMappingURL=popper.js.map
/*!
  * Bootstrap v4.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */(function(global,factory){(typeof exports==="undefined"?"undefined":_typeof2(exports))==='object'&&typeof module!=='undefined'?factory(exports,require('jquery'),require('popper.js')):typeof define==='function'&&define.amd?define(['exports','jquery','popper.js'],factory):factory(global.bootstrap={},global.jQuery,global.Popper);})(this,function(exports,$,Popper){'use strict';$=$&&$.hasOwnProperty('default')?$['default']:$;Popper=Popper&&Popper.hasOwnProperty('default')?Popper['default']:Popper;function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */var Util=function($$$1){/**
     * ------------------------------------------------------------------------
     * Private TransitionEnd Helpers
     * ------------------------------------------------------------------------
     */var TRANSITION_END='transitionend';var MAX_UID=1000000;var MILLISECONDS_MULTIPLIER=1000;// Shoutout AngusCroll (https://goo.gl/pxwQGp)
function toType(obj){return{}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();}function getSpecialTransitionEndEvent(){return{bindType:TRANSITION_END,delegateType:TRANSITION_END,handle:function handle(event){if($$$1(event.target).is(this)){return event.handleObj.handler.apply(this,arguments);// eslint-disable-line prefer-rest-params
}return undefined;// eslint-disable-line no-undefined
}};}function transitionEndEmulator(duration){var _this=this;var called=false;$$$1(this).one(Util.TRANSITION_END,function(){called=true;});setTimeout(function(){if(!called){Util.triggerTransitionEnd(_this);}},duration);return this;}function setTransitionEndSupport(){$$$1.fn.emulateTransitionEnd=transitionEndEmulator;$$$1.event.special[Util.TRANSITION_END]=getSpecialTransitionEndEvent();}/**
     * --------------------------------------------------------------------------
     * Public Util Api
     * --------------------------------------------------------------------------
     */var Util={TRANSITION_END:'bsTransitionEnd',getUID:function getUID(prefix){do{// eslint-disable-next-line no-bitwise
prefix+=~~(Math.random()*MAX_UID);// "~~" acts like a faster Math.floor() here
}while(document.getElementById(prefix));return prefix;},getSelectorFromElement:function getSelectorFromElement(element){var selector=element.getAttribute('data-target');if(!selector||selector==='#'){selector=element.getAttribute('href')||'';}try{return document.querySelector(selector)?selector:null;}catch(err){return null;}},getTransitionDurationFromElement:function getTransitionDurationFromElement(element){if(!element){return 0;}// Get transition-duration of the element
var transitionDuration=$$$1(element).css('transition-duration');var floatTransitionDuration=parseFloat(transitionDuration);// Return 0 if element or transition duration is not found
if(!floatTransitionDuration){return 0;}// If multiple durations are defined, take the first
transitionDuration=transitionDuration.split(',')[0];return parseFloat(transitionDuration)*MILLISECONDS_MULTIPLIER;},reflow:function reflow(element){return element.offsetHeight;},triggerTransitionEnd:function triggerTransitionEnd(element){$$$1(element).trigger(TRANSITION_END);},// TODO: Remove in v5
supportsTransitionEnd:function supportsTransitionEnd(){return Boolean(TRANSITION_END);},isElement:function isElement(obj){return(obj[0]||obj).nodeType;},typeCheckConfig:function typeCheckConfig(componentName,config,configTypes){for(var property in configTypes){if(Object.prototype.hasOwnProperty.call(configTypes,property)){var expectedTypes=configTypes[property];var value=config[property];var valueType=value&&Util.isElement(value)?'element':toType(value);if(!new RegExp(expectedTypes).test(valueType)){throw new Error(componentName.toUpperCase()+": "+("Option \""+property+"\" provided type \""+valueType+"\" ")+("but expected type \""+expectedTypes+"\"."));}}}}};setTransitionEndSupport();return Util;}($);/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */var Alert=function($$$1){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */var NAME='alert';var VERSION='4.1.3';var DATA_KEY='bs.alert';var EVENT_KEY="."+DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$$$1.fn[NAME];var Selector={DISMISS:'[data-dismiss="alert"]'};var Event={CLOSE:"close"+EVENT_KEY,CLOSED:"closed"+EVENT_KEY,CLICK_DATA_API:"click"+EVENT_KEY+DATA_API_KEY};var ClassName={ALERT:'alert',FADE:'fade',SHOW:'show'/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */};var Alert=/*#__PURE__*/function(){function Alert(element){this._element=element;}// Getters
var _proto=Alert.prototype;// Public
_proto.close=function close(element){var rootElement=this._element;if(element){rootElement=this._getRootElement(element);}var customEvent=this._triggerCloseEvent(rootElement);if(customEvent.isDefaultPrevented()){return;}this._removeElement(rootElement);};_proto.dispose=function dispose(){$$$1.removeData(this._element,DATA_KEY);this._element=null;};// Private
_proto._getRootElement=function _getRootElement(element){var selector=Util.getSelectorFromElement(element);var parent=false;if(selector){parent=document.querySelector(selector);}if(!parent){parent=$$$1(element).closest("."+ClassName.ALERT)[0];}return parent;};_proto._triggerCloseEvent=function _triggerCloseEvent(element){var closeEvent=$$$1.Event(Event.CLOSE);$$$1(element).trigger(closeEvent);return closeEvent;};_proto._removeElement=function _removeElement(element){var _this=this;$$$1(element).removeClass(ClassName.SHOW);if(!$$$1(element).hasClass(ClassName.FADE)){this._destroyElement(element);return;}var transitionDuration=Util.getTransitionDurationFromElement(element);$$$1(element).one(Util.TRANSITION_END,function(event){return _this._destroyElement(element,event);}).emulateTransitionEnd(transitionDuration);};_proto._destroyElement=function _destroyElement(element){$$$1(element).detach().trigger(Event.CLOSED).remove();};// Static
Alert._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var $element=$$$1(this);var data=$element.data(DATA_KEY);if(!data){data=new Alert(this);$element.data(DATA_KEY,data);}if(config==='close'){data[config](this);}});};Alert._handleDismiss=function _handleDismiss(alertInstance){return function(event){if(event){event.preventDefault();}alertInstance.close(this);};};_createClass(Alert,null,[{key:"VERSION",get:function get(){return VERSION;}}]);return Alert;}();/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */$$$1(document).on(Event.CLICK_DATA_API,Selector.DISMISS,Alert._handleDismiss(new Alert()));/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */$$$1.fn[NAME]=Alert._jQueryInterface;$$$1.fn[NAME].Constructor=Alert;$$$1.fn[NAME].noConflict=function(){$$$1.fn[NAME]=JQUERY_NO_CONFLICT;return Alert._jQueryInterface;};return Alert;}($);/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */var Button=function($$$1){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */var NAME='button';var VERSION='4.1.3';var DATA_KEY='bs.button';var EVENT_KEY="."+DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$$$1.fn[NAME];var ClassName={ACTIVE:'active',BUTTON:'btn',FOCUS:'focus'};var Selector={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:'input',ACTIVE:'.active',BUTTON:'.btn'};var Event={CLICK_DATA_API:"click"+EVENT_KEY+DATA_API_KEY,FOCUS_BLUR_DATA_API:"focus"+EVENT_KEY+DATA_API_KEY+" "+("blur"+EVENT_KEY+DATA_API_KEY)/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */};var Button=/*#__PURE__*/function(){function Button(element){this._element=element;}// Getters
var _proto=Button.prototype;// Public
_proto.toggle=function toggle(){var triggerChangeEvent=true;var addAriaPressed=true;var rootElement=$$$1(this._element).closest(Selector.DATA_TOGGLE)[0];if(rootElement){var input=this._element.querySelector(Selector.INPUT);if(input){if(input.type==='radio'){if(input.checked&&this._element.classList.contains(ClassName.ACTIVE)){triggerChangeEvent=false;}else{var activeElement=rootElement.querySelector(Selector.ACTIVE);if(activeElement){$$$1(activeElement).removeClass(ClassName.ACTIVE);}}}if(triggerChangeEvent){if(input.hasAttribute('disabled')||rootElement.hasAttribute('disabled')||input.classList.contains('disabled')||rootElement.classList.contains('disabled')){return;}input.checked=!this._element.classList.contains(ClassName.ACTIVE);$$$1(input).trigger('change');}input.focus();addAriaPressed=false;}}if(addAriaPressed){this._element.setAttribute('aria-pressed',!this._element.classList.contains(ClassName.ACTIVE));}if(triggerChangeEvent){$$$1(this._element).toggleClass(ClassName.ACTIVE);}};_proto.dispose=function dispose(){$$$1.removeData(this._element,DATA_KEY);this._element=null;};// Static
Button._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$$$1(this).data(DATA_KEY);if(!data){data=new Button(this);$$$1(this).data(DATA_KEY,data);}if(config==='toggle'){data[config]();}});};_createClass(Button,null,[{key:"VERSION",get:function get(){return VERSION;}}]);return Button;}();/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */$$$1(document).on(Event.CLICK_DATA_API,Selector.DATA_TOGGLE_CARROT,function(event){event.preventDefault();var button=event.target;if(!$$$1(button).hasClass(ClassName.BUTTON)){button=$$$1(button).closest(Selector.BUTTON);}Button._jQueryInterface.call($$$1(button),'toggle');}).on(Event.FOCUS_BLUR_DATA_API,Selector.DATA_TOGGLE_CARROT,function(event){var button=$$$1(event.target).closest(Selector.BUTTON)[0];$$$1(button).toggleClass(ClassName.FOCUS,/^focus(in)?$/.test(event.type));});/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */$$$1.fn[NAME]=Button._jQueryInterface;$$$1.fn[NAME].Constructor=Button;$$$1.fn[NAME].noConflict=function(){$$$1.fn[NAME]=JQUERY_NO_CONFLICT;return Button._jQueryInterface;};return Button;}($);/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */var Carousel=function($$$1){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */var NAME='carousel';var VERSION='4.1.3';var DATA_KEY='bs.carousel';var EVENT_KEY="."+DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$$$1.fn[NAME];var ARROW_LEFT_KEYCODE=37;// KeyboardEvent.which value for left arrow key
var ARROW_RIGHT_KEYCODE=39;// KeyboardEvent.which value for right arrow key
var TOUCHEVENT_COMPAT_WAIT=500;// Time for mouse compat events to fire after touch
var Default={interval:5000,keyboard:true,slide:false,pause:'hover',wrap:true};var DefaultType={interval:'(number|boolean)',keyboard:'boolean',slide:'(boolean|string)',pause:'(string|boolean)',wrap:'boolean'};var Direction={NEXT:'next',PREV:'prev',LEFT:'left',RIGHT:'right'};var Event={SLIDE:"slide"+EVENT_KEY,SLID:"slid"+EVENT_KEY,KEYDOWN:"keydown"+EVENT_KEY,MOUSEENTER:"mouseenter"+EVENT_KEY,MOUSELEAVE:"mouseleave"+EVENT_KEY,TOUCHEND:"touchend"+EVENT_KEY,LOAD_DATA_API:"load"+EVENT_KEY+DATA_API_KEY,CLICK_DATA_API:"click"+EVENT_KEY+DATA_API_KEY};var ClassName={CAROUSEL:'carousel',ACTIVE:'active',SLIDE:'slide',RIGHT:'carousel-item-right',LEFT:'carousel-item-left',NEXT:'carousel-item-next',PREV:'carousel-item-prev',ITEM:'carousel-item'};var Selector={ACTIVE:'.active',ACTIVE_ITEM:'.active.carousel-item',ITEM:'.carousel-item',NEXT_PREV:'.carousel-item-next, .carousel-item-prev',INDICATORS:'.carousel-indicators',DATA_SLIDE:'[data-slide], [data-slide-to]',DATA_RIDE:'[data-ride="carousel"]'/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */};var Carousel=/*#__PURE__*/function(){function Carousel(element,config){this._items=null;this._interval=null;this._activeElement=null;this._isPaused=false;this._isSliding=false;this.touchTimeout=null;this._config=this._getConfig(config);this._element=$$$1(element)[0];this._indicatorsElement=this._element.querySelector(Selector.INDICATORS);this._addEventListeners();}// Getters
var _proto=Carousel.prototype;// Public
_proto.next=function next(){if(!this._isSliding){this._slide(Direction.NEXT);}};_proto.nextWhenVisible=function nextWhenVisible(){// Don't call next when the page isn't visible
// or the carousel or its parent isn't visible
if(!document.hidden&&$$$1(this._element).is(':visible')&&$$$1(this._element).css('visibility')!=='hidden'){this.next();}};_proto.prev=function prev(){if(!this._isSliding){this._slide(Direction.PREV);}};_proto.pause=function pause(event){if(!event){this._isPaused=true;}if(this._element.querySelector(Selector.NEXT_PREV)){Util.triggerTransitionEnd(this._element);this.cycle(true);}clearInterval(this._interval);this._interval=null;};_proto.cycle=function cycle(event){if(!event){this._isPaused=false;}if(this._interval){clearInterval(this._interval);this._interval=null;}if(this._config.interval&&!this._isPaused){this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval);}};_proto.to=function to(index){var _this=this;this._activeElement=this._element.querySelector(Selector.ACTIVE_ITEM);var activeIndex=this._getItemIndex(this._activeElement);if(index>this._items.length-1||index<0){return;}if(this._isSliding){$$$1(this._element).one(Event.SLID,function(){return _this.to(index);});return;}if(activeIndex===index){this.pause();this.cycle();return;}var direction=index>activeIndex?Direction.NEXT:Direction.PREV;this._slide(direction,this._items[index]);};_proto.dispose=function dispose(){$$$1(this._element).off(EVENT_KEY);$$$1.removeData(this._element,DATA_KEY);this._items=null;this._config=null;this._element=null;this._interval=null;this._isPaused=null;this._isSliding=null;this._activeElement=null;this._indicatorsElement=null;};// Private
_proto._getConfig=function _getConfig(config){config=_objectSpread({},Default,config);Util.typeCheckConfig(NAME,config,DefaultType);return config;};_proto._addEventListeners=function _addEventListeners(){var _this2=this;if(this._config.keyboard){$$$1(this._element).on(Event.KEYDOWN,function(event){return _this2._keydown(event);});}if(this._config.pause==='hover'){$$$1(this._element).on(Event.MOUSEENTER,function(event){return _this2.pause(event);}).on(Event.MOUSELEAVE,function(event){return _this2.cycle(event);});if('ontouchstart'in document.documentElement){// If it's a touch-enabled device, mouseenter/leave are fired as
// part of the mouse compatibility events on first tap - the carousel
// would stop cycling until user tapped out of it;
// here, we listen for touchend, explicitly pause the carousel
// (as if it's the second time we tap on it, mouseenter compat event
// is NOT fired) and after a timeout (to allow for mouse compatibility
// events to fire) we explicitly restart cycling
$$$1(this._element).on(Event.TOUCHEND,function(){_this2.pause();if(_this2.touchTimeout){clearTimeout(_this2.touchTimeout);}_this2.touchTimeout=setTimeout(function(event){return _this2.cycle(event);},TOUCHEVENT_COMPAT_WAIT+_this2._config.interval);});}}};_proto._keydown=function _keydown(event){if(/input|textarea/i.test(event.target.tagName)){return;}switch(event.which){case ARROW_LEFT_KEYCODE:event.preventDefault();this.prev();break;case ARROW_RIGHT_KEYCODE:event.preventDefault();this.next();break;default:}};_proto._getItemIndex=function _getItemIndex(element){this._items=element&&element.parentNode?[].slice.call(element.parentNode.querySelectorAll(Selector.ITEM)):[];return this._items.indexOf(element);};_proto._getItemByDirection=function _getItemByDirection(direction,activeElement){var isNextDirection=direction===Direction.NEXT;var isPrevDirection=direction===Direction.PREV;var activeIndex=this._getItemIndex(activeElement);var lastItemIndex=this._items.length-1;var isGoingToWrap=isPrevDirection&&activeIndex===0||isNextDirection&&activeIndex===lastItemIndex;if(isGoingToWrap&&!this._config.wrap){return activeElement;}var delta=direction===Direction.PREV?-1:1;var itemIndex=(activeIndex+delta)%this._items.length;return itemIndex===-1?this._items[this._items.length-1]:this._items[itemIndex];};_proto._triggerSlideEvent=function _triggerSlideEvent(relatedTarget,eventDirectionName){var targetIndex=this._getItemIndex(relatedTarget);var fromIndex=this._getItemIndex(this._element.querySelector(Selector.ACTIVE_ITEM));var slideEvent=$$$1.Event(Event.SLIDE,{relatedTarget:relatedTarget,direction:eventDirectionName,from:fromIndex,to:targetIndex});$$$1(this._element).trigger(slideEvent);return slideEvent;};_proto._setActiveIndicatorElement=function _setActiveIndicatorElement(element){if(this._indicatorsElement){var indicators=[].slice.call(this._indicatorsElement.querySelectorAll(Selector.ACTIVE));$$$1(indicators).removeClass(ClassName.ACTIVE);var nextIndicator=this._indicatorsElement.children[this._getItemIndex(element)];if(nextIndicator){$$$1(nextIndicator).addClass(ClassName.ACTIVE);}}};_proto._slide=function _slide(direction,element){var _this3=this;var activeElement=this._element.querySelector(Selector.ACTIVE_ITEM);var activeElementIndex=this._getItemIndex(activeElement);var nextElement=element||activeElement&&this._getItemByDirection(direction,activeElement);var nextElementIndex=this._getItemIndex(nextElement);var isCycling=Boolean(this._interval);var directionalClassName;var orderClassName;var eventDirectionName;if(direction===Direction.NEXT){directionalClassName=ClassName.LEFT;orderClassName=ClassName.NEXT;eventDirectionName=Direction.LEFT;}else{directionalClassName=ClassName.RIGHT;orderClassName=ClassName.PREV;eventDirectionName=Direction.RIGHT;}if(nextElement&&$$$1(nextElement).hasClass(ClassName.ACTIVE)){this._isSliding=false;return;}var slideEvent=this._triggerSlideEvent(nextElement,eventDirectionName);if(slideEvent.isDefaultPrevented()){return;}if(!activeElement||!nextElement){// Some weirdness is happening, so we bail
return;}this._isSliding=true;if(isCycling){this.pause();}this._setActiveIndicatorElement(nextElement);var slidEvent=$$$1.Event(Event.SLID,{relatedTarget:nextElement,direction:eventDirectionName,from:activeElementIndex,to:nextElementIndex});if($$$1(this._element).hasClass(ClassName.SLIDE)){$$$1(nextElement).addClass(orderClassName);Util.reflow(nextElement);$$$1(activeElement).addClass(directionalClassName);$$$1(nextElement).addClass(directionalClassName);var transitionDuration=Util.getTransitionDurationFromElement(activeElement);$$$1(activeElement).one(Util.TRANSITION_END,function(){$$$1(nextElement).removeClass(directionalClassName+" "+orderClassName).addClass(ClassName.ACTIVE);$$$1(activeElement).removeClass(ClassName.ACTIVE+" "+orderClassName+" "+directionalClassName);_this3._isSliding=false;setTimeout(function(){return $$$1(_this3._element).trigger(slidEvent);},0);}).emulateTransitionEnd(transitionDuration);}else{$$$1(activeElement).removeClass(ClassName.ACTIVE);$$$1(nextElement).addClass(ClassName.ACTIVE);this._isSliding=false;$$$1(this._element).trigger(slidEvent);}if(isCycling){this.cycle();}};// Static
Carousel._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$$$1(this).data(DATA_KEY);var _config=_objectSpread({},Default,$$$1(this).data());if((typeof config==="undefined"?"undefined":_typeof2(config))==='object'){_config=_objectSpread({},_config,config);}var action=typeof config==='string'?config:_config.slide;if(!data){data=new Carousel(this,_config);$$$1(this).data(DATA_KEY,data);}if(typeof config==='number'){data.to(config);}else if(typeof action==='string'){if(typeof data[action]==='undefined'){throw new TypeError("No method named \""+action+"\"");}data[action]();}else if(_config.interval){data.pause();data.cycle();}});};Carousel._dataApiClickHandler=function _dataApiClickHandler(event){var selector=Util.getSelectorFromElement(this);if(!selector){return;}var target=$$$1(selector)[0];if(!target||!$$$1(target).hasClass(ClassName.CAROUSEL)){return;}var config=_objectSpread({},$$$1(target).data(),$$$1(this).data());var slideIndex=this.getAttribute('data-slide-to');if(slideIndex){config.interval=false;}Carousel._jQueryInterface.call($$$1(target),config);if(slideIndex){$$$1(target).data(DATA_KEY).to(slideIndex);}event.preventDefault();};_createClass(Carousel,null,[{key:"VERSION",get:function get(){return VERSION;}},{key:"Default",get:function get(){return Default;}}]);return Carousel;}();/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */$$$1(document).on(Event.CLICK_DATA_API,Selector.DATA_SLIDE,Carousel._dataApiClickHandler);$$$1(window).on(Event.LOAD_DATA_API,function(){var carousels=[].slice.call(document.querySelectorAll(Selector.DATA_RIDE));for(var i=0,len=carousels.length;i<len;i++){var $carousel=$$$1(carousels[i]);Carousel._jQueryInterface.call($carousel,$carousel.data());}});/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */$$$1.fn[NAME]=Carousel._jQueryInterface;$$$1.fn[NAME].Constructor=Carousel;$$$1.fn[NAME].noConflict=function(){$$$1.fn[NAME]=JQUERY_NO_CONFLICT;return Carousel._jQueryInterface;};return Carousel;}($);/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */var Collapse=function($$$1){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */var NAME='collapse';var VERSION='4.1.3';var DATA_KEY='bs.collapse';var EVENT_KEY="."+DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$$$1.fn[NAME];var Default={toggle:true,parent:''};var DefaultType={toggle:'boolean',parent:'(string|element)'};var Event={SHOW:"show"+EVENT_KEY,SHOWN:"shown"+EVENT_KEY,HIDE:"hide"+EVENT_KEY,HIDDEN:"hidden"+EVENT_KEY,CLICK_DATA_API:"click"+EVENT_KEY+DATA_API_KEY};var ClassName={SHOW:'show',COLLAPSE:'collapse',COLLAPSING:'collapsing',COLLAPSED:'collapsed'};var Dimension={WIDTH:'width',HEIGHT:'height'};var Selector={ACTIVES:'.show, .collapsing',DATA_TOGGLE:'[data-toggle="collapse"]'/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */};var Collapse=/*#__PURE__*/function(){function Collapse(element,config){this._isTransitioning=false;this._element=element;this._config=this._getConfig(config);this._triggerArray=$$$1.makeArray(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#"+element.id+"\"],"+("[data-toggle=\"collapse\"][data-target=\"#"+element.id+"\"]")));var toggleList=[].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE));for(var i=0,len=toggleList.length;i<len;i++){var elem=toggleList[i];var selector=Util.getSelectorFromElement(elem);var filterElement=[].slice.call(document.querySelectorAll(selector)).filter(function(foundElem){return foundElem===element;});if(selector!==null&&filterElement.length>0){this._selector=selector;this._triggerArray.push(elem);}}this._parent=this._config.parent?this._getParent():null;if(!this._config.parent){this._addAriaAndCollapsedClass(this._element,this._triggerArray);}if(this._config.toggle){this.toggle();}}// Getters
var _proto=Collapse.prototype;// Public
_proto.toggle=function toggle(){if($$$1(this._element).hasClass(ClassName.SHOW)){this.hide();}else{this.show();}};_proto.show=function show(){var _this=this;if(this._isTransitioning||$$$1(this._element).hasClass(ClassName.SHOW)){return;}var actives;var activesData;if(this._parent){actives=[].slice.call(this._parent.querySelectorAll(Selector.ACTIVES)).filter(function(elem){return elem.getAttribute('data-parent')===_this._config.parent;});if(actives.length===0){actives=null;}}if(actives){activesData=$$$1(actives).not(this._selector).data(DATA_KEY);if(activesData&&activesData._isTransitioning){return;}}var startEvent=$$$1.Event(Event.SHOW);$$$1(this._element).trigger(startEvent);if(startEvent.isDefaultPrevented()){return;}if(actives){Collapse._jQueryInterface.call($$$1(actives).not(this._selector),'hide');if(!activesData){$$$1(actives).data(DATA_KEY,null);}}var dimension=this._getDimension();$$$1(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);this._element.style[dimension]=0;if(this._triggerArray.length){$$$1(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded',true);}this.setTransitioning(true);var complete=function complete(){$$$1(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);_this._element.style[dimension]='';_this.setTransitioning(false);$$$1(_this._element).trigger(Event.SHOWN);};var capitalizedDimension=dimension[0].toUpperCase()+dimension.slice(1);var scrollSize="scroll"+capitalizedDimension;var transitionDuration=Util.getTransitionDurationFromElement(this._element);$$$1(this._element).one(Util.TRANSITION_END,complete).emulateTransitionEnd(transitionDuration);this._element.style[dimension]=this._element[scrollSize]+"px";};_proto.hide=function hide(){var _this2=this;if(this._isTransitioning||!$$$1(this._element).hasClass(ClassName.SHOW)){return;}var startEvent=$$$1.Event(Event.HIDE);$$$1(this._element).trigger(startEvent);if(startEvent.isDefaultPrevented()){return;}var dimension=this._getDimension();this._element.style[dimension]=this._element.getBoundingClientRect()[dimension]+"px";Util.reflow(this._element);$$$1(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);var triggerArrayLength=this._triggerArray.length;if(triggerArrayLength>0){for(var i=0;i<triggerArrayLength;i++){var trigger=this._triggerArray[i];var selector=Util.getSelectorFromElement(trigger);if(selector!==null){var $elem=$$$1([].slice.call(document.querySelectorAll(selector)));if(!$elem.hasClass(ClassName.SHOW)){$$$1(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded',false);}}}}this.setTransitioning(true);var complete=function complete(){_this2.setTransitioning(false);$$$1(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);};this._element.style[dimension]='';var transitionDuration=Util.getTransitionDurationFromElement(this._element);$$$1(this._element).one(Util.TRANSITION_END,complete).emulateTransitionEnd(transitionDuration);};_proto.setTransitioning=function setTransitioning(isTransitioning){this._isTransitioning=isTransitioning;};_proto.dispose=function dispose(){$$$1.removeData(this._element,DATA_KEY);this._config=null;this._parent=null;this._element=null;this._triggerArray=null;this._isTransitioning=null;};// Private
_proto._getConfig=function _getConfig(config){config=_objectSpread({},Default,config);config.toggle=Boolean(config.toggle);// Coerce string values
Util.typeCheckConfig(NAME,config,DefaultType);return config;};_proto._getDimension=function _getDimension(){var hasWidth=$$$1(this._element).hasClass(Dimension.WIDTH);return hasWidth?Dimension.WIDTH:Dimension.HEIGHT;};_proto._getParent=function _getParent(){var _this3=this;var parent=null;if(Util.isElement(this._config.parent)){parent=this._config.parent;// It's a jQuery object
if(typeof this._config.parent.jquery!=='undefined'){parent=this._config.parent[0];}}else{parent=document.querySelector(this._config.parent);}var selector="[data-toggle=\"collapse\"][data-parent=\""+this._config.parent+"\"]";var children=[].slice.call(parent.querySelectorAll(selector));$$$1(children).each(function(i,element){_this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element),[element]);});return parent;};_proto._addAriaAndCollapsedClass=function _addAriaAndCollapsedClass(element,triggerArray){if(element){var isOpen=$$$1(element).hasClass(ClassName.SHOW);if(triggerArray.length){$$$1(triggerArray).toggleClass(ClassName.COLLAPSED,!isOpen).attr('aria-expanded',isOpen);}}};// Static
Collapse._getTargetFromElement=function _getTargetFromElement(element){var selector=Util.getSelectorFromElement(element);return selector?document.querySelector(selector):null;};Collapse._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var $this=$$$1(this);var data=$this.data(DATA_KEY);var _config=_objectSpread({},Default,$this.data(),(typeof config==="undefined"?"undefined":_typeof2(config))==='object'&&config?config:{});if(!data&&_config.toggle&&/show|hide/.test(config)){_config.toggle=false;}if(!data){data=new Collapse(this,_config);$this.data(DATA_KEY,data);}if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"");}data[config]();}});};_createClass(Collapse,null,[{key:"VERSION",get:function get(){return VERSION;}},{key:"Default",get:function get(){return Default;}}]);return Collapse;}();/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */$$$1(document).on(Event.CLICK_DATA_API,Selector.DATA_TOGGLE,function(event){// preventDefault only for <a> elements (which change the URL) not inside the collapsible element
if(event.currentTarget.tagName==='A'){event.preventDefault();}var $trigger=$$$1(this);var selector=Util.getSelectorFromElement(this);var selectors=[].slice.call(document.querySelectorAll(selector));$$$1(selectors).each(function(){var $target=$$$1(this);var data=$target.data(DATA_KEY);var config=data?'toggle':$trigger.data();Collapse._jQueryInterface.call($target,config);});});/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */$$$1.fn[NAME]=Collapse._jQueryInterface;$$$1.fn[NAME].Constructor=Collapse;$$$1.fn[NAME].noConflict=function(){$$$1.fn[NAME]=JQUERY_NO_CONFLICT;return Collapse._jQueryInterface;};return Collapse;}($);/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */var Dropdown=function($$$1){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */var NAME='dropdown';var VERSION='4.1.3';var DATA_KEY='bs.dropdown';var EVENT_KEY="."+DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$$$1.fn[NAME];var ESCAPE_KEYCODE=27;// KeyboardEvent.which value for Escape (Esc) key
var SPACE_KEYCODE=32;// KeyboardEvent.which value for space key
var TAB_KEYCODE=9;// KeyboardEvent.which value for tab key
var ARROW_UP_KEYCODE=38;// KeyboardEvent.which value for up arrow key
var ARROW_DOWN_KEYCODE=40;// KeyboardEvent.which value for down arrow key
var RIGHT_MOUSE_BUTTON_WHICH=3;// MouseEvent.which value for the right button (assuming a right-handed mouse)
var REGEXP_KEYDOWN=new RegExp(ARROW_UP_KEYCODE+"|"+ARROW_DOWN_KEYCODE+"|"+ESCAPE_KEYCODE);var Event={HIDE:"hide"+EVENT_KEY,HIDDEN:"hidden"+EVENT_KEY,SHOW:"show"+EVENT_KEY,SHOWN:"shown"+EVENT_KEY,CLICK:"click"+EVENT_KEY,CLICK_DATA_API:"click"+EVENT_KEY+DATA_API_KEY,KEYDOWN_DATA_API:"keydown"+EVENT_KEY+DATA_API_KEY,KEYUP_DATA_API:"keyup"+EVENT_KEY+DATA_API_KEY};var ClassName={DISABLED:'disabled',SHOW:'show',DROPUP:'dropup',DROPRIGHT:'dropright',DROPLEFT:'dropleft',MENURIGHT:'dropdown-menu-right',MENULEFT:'dropdown-menu-left',POSITION_STATIC:'position-static'};var Selector={DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:'.dropdown form',MENU:'.dropdown-menu',NAVBAR_NAV:'.navbar-nav',VISIBLE_ITEMS:'.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'};var AttachmentMap={TOP:'top-start',TOPEND:'top-end',BOTTOM:'bottom-start',BOTTOMEND:'bottom-end',RIGHT:'right-start',RIGHTEND:'right-end',LEFT:'left-start',LEFTEND:'left-end'};var Default={offset:0,flip:true,boundary:'scrollParent',reference:'toggle',display:'dynamic'};var DefaultType={offset:'(number|string|function)',flip:'boolean',boundary:'(string|element)',reference:'(string|element)',display:'string'/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */};var Dropdown=/*#__PURE__*/function(){function Dropdown(element,config){this._element=element;this._popper=null;this._config=this._getConfig(config);this._menu=this._getMenuElement();this._inNavbar=this._detectNavbar();this._addEventListeners();}// Getters
var _proto=Dropdown.prototype;// Public
_proto.toggle=function toggle(){if(this._element.disabled||$$$1(this._element).hasClass(ClassName.DISABLED)){return;}var parent=Dropdown._getParentFromElement(this._element);var isActive=$$$1(this._menu).hasClass(ClassName.SHOW);Dropdown._clearMenus();if(isActive){return;}var relatedTarget={relatedTarget:this._element};var showEvent=$$$1.Event(Event.SHOW,relatedTarget);$$$1(parent).trigger(showEvent);if(showEvent.isDefaultPrevented()){return;}// Disable totally Popper.js for Dropdown in Navbar
if(!this._inNavbar){/**
           * Check for Popper dependency
           * Popper - https://popper.js.org
           */if(typeof Popper==='undefined'){throw new TypeError('Bootstrap dropdown require Popper.js (https://popper.js.org)');}var referenceElement=this._element;if(this._config.reference==='parent'){referenceElement=parent;}else if(Util.isElement(this._config.reference)){referenceElement=this._config.reference;// Check if it's jQuery element
if(typeof this._config.reference.jquery!=='undefined'){referenceElement=this._config.reference[0];}}// If boundary is not `scrollParent`, then set position to `static`
// to allow the menu to "escape" the scroll parent's boundaries
// https://github.com/twbs/bootstrap/issues/24251
if(this._config.boundary!=='scrollParent'){$$$1(parent).addClass(ClassName.POSITION_STATIC);}this._popper=new Popper(referenceElement,this._menu,this._getPopperConfig());}// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
if('ontouchstart'in document.documentElement&&$$$1(parent).closest(Selector.NAVBAR_NAV).length===0){$$$1(document.body).children().on('mouseover',null,$$$1.noop);}this._element.focus();this._element.setAttribute('aria-expanded',true);$$$1(this._menu).toggleClass(ClassName.SHOW);$$$1(parent).toggleClass(ClassName.SHOW).trigger($$$1.Event(Event.SHOWN,relatedTarget));};_proto.dispose=function dispose(){$$$1.removeData(this._element,DATA_KEY);$$$1(this._element).off(EVENT_KEY);this._element=null;this._menu=null;if(this._popper!==null){this._popper.destroy();this._popper=null;}};_proto.update=function update(){this._inNavbar=this._detectNavbar();if(this._popper!==null){this._popper.scheduleUpdate();}};// Private
_proto._addEventListeners=function _addEventListeners(){var _this=this;$$$1(this._element).on(Event.CLICK,function(event){event.preventDefault();event.stopPropagation();_this.toggle();});};_proto._getConfig=function _getConfig(config){config=_objectSpread({},this.constructor.Default,$$$1(this._element).data(),config);Util.typeCheckConfig(NAME,config,this.constructor.DefaultType);return config;};_proto._getMenuElement=function _getMenuElement(){if(!this._menu){var parent=Dropdown._getParentFromElement(this._element);if(parent){this._menu=parent.querySelector(Selector.MENU);}}return this._menu;};_proto._getPlacement=function _getPlacement(){var $parentDropdown=$$$1(this._element.parentNode);var placement=AttachmentMap.BOTTOM;// Handle dropup
if($parentDropdown.hasClass(ClassName.DROPUP)){placement=AttachmentMap.TOP;if($$$1(this._menu).hasClass(ClassName.MENURIGHT)){placement=AttachmentMap.TOPEND;}}else if($parentDropdown.hasClass(ClassName.DROPRIGHT)){placement=AttachmentMap.RIGHT;}else if($parentDropdown.hasClass(ClassName.DROPLEFT)){placement=AttachmentMap.LEFT;}else if($$$1(this._menu).hasClass(ClassName.MENURIGHT)){placement=AttachmentMap.BOTTOMEND;}return placement;};_proto._detectNavbar=function _detectNavbar(){return $$$1(this._element).closest('.navbar').length>0;};_proto._getPopperConfig=function _getPopperConfig(){var _this2=this;var offsetConf={};if(typeof this._config.offset==='function'){offsetConf.fn=function(data){data.offsets=_objectSpread({},data.offsets,_this2._config.offset(data.offsets)||{});return data;};}else{offsetConf.offset=this._config.offset;}var popperConfig={placement:this._getPlacement(),modifiers:{offset:offsetConf,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}// Disable Popper.js if we have a static display
}};if(this._config.display==='static'){popperConfig.modifiers.applyStyle={enabled:false};}return popperConfig;};// Static
Dropdown._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$$$1(this).data(DATA_KEY);var _config=(typeof config==="undefined"?"undefined":_typeof2(config))==='object'?config:null;if(!data){data=new Dropdown(this,_config);$$$1(this).data(DATA_KEY,data);}if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"");}data[config]();}});};Dropdown._clearMenus=function _clearMenus(event){if(event&&(event.which===RIGHT_MOUSE_BUTTON_WHICH||event.type==='keyup'&&event.which!==TAB_KEYCODE)){return;}var toggles=[].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE));for(var i=0,len=toggles.length;i<len;i++){var parent=Dropdown._getParentFromElement(toggles[i]);var context=$$$1(toggles[i]).data(DATA_KEY);var relatedTarget={relatedTarget:toggles[i]};if(event&&event.type==='click'){relatedTarget.clickEvent=event;}if(!context){continue;}var dropdownMenu=context._menu;if(!$$$1(parent).hasClass(ClassName.SHOW)){continue;}if(event&&(event.type==='click'&&/input|textarea/i.test(event.target.tagName)||event.type==='keyup'&&event.which===TAB_KEYCODE)&&$$$1.contains(parent,event.target)){continue;}var hideEvent=$$$1.Event(Event.HIDE,relatedTarget);$$$1(parent).trigger(hideEvent);if(hideEvent.isDefaultPrevented()){continue;}// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
if('ontouchstart'in document.documentElement){$$$1(document.body).children().off('mouseover',null,$$$1.noop);}toggles[i].setAttribute('aria-expanded','false');$$$1(dropdownMenu).removeClass(ClassName.SHOW);$$$1(parent).removeClass(ClassName.SHOW).trigger($$$1.Event(Event.HIDDEN,relatedTarget));}};Dropdown._getParentFromElement=function _getParentFromElement(element){var parent;var selector=Util.getSelectorFromElement(element);if(selector){parent=document.querySelector(selector);}return parent||element.parentNode;};// eslint-disable-next-line complexity
Dropdown._dataApiKeydownHandler=function _dataApiKeydownHandler(event){// If not input/textarea:
//  - And not a key in REGEXP_KEYDOWN => not a dropdown command
// If input/textarea:
//  - If space key => not a dropdown command
//  - If key is other than escape
//    - If key is not up or down => not a dropdown command
//    - If trigger inside the menu => not a dropdown command
if(/input|textarea/i.test(event.target.tagName)?event.which===SPACE_KEYCODE||event.which!==ESCAPE_KEYCODE&&(event.which!==ARROW_DOWN_KEYCODE&&event.which!==ARROW_UP_KEYCODE||$$$1(event.target).closest(Selector.MENU).length):!REGEXP_KEYDOWN.test(event.which)){return;}event.preventDefault();event.stopPropagation();if(this.disabled||$$$1(this).hasClass(ClassName.DISABLED)){return;}var parent=Dropdown._getParentFromElement(this);var isActive=$$$1(parent).hasClass(ClassName.SHOW);if(!isActive&&(event.which!==ESCAPE_KEYCODE||event.which!==SPACE_KEYCODE)||isActive&&(event.which===ESCAPE_KEYCODE||event.which===SPACE_KEYCODE)){if(event.which===ESCAPE_KEYCODE){var toggle=parent.querySelector(Selector.DATA_TOGGLE);$$$1(toggle).trigger('focus');}$$$1(this).trigger('click');return;}var items=[].slice.call(parent.querySelectorAll(Selector.VISIBLE_ITEMS));if(items.length===0){return;}var index=items.indexOf(event.target);if(event.which===ARROW_UP_KEYCODE&&index>0){// Up
index--;}if(event.which===ARROW_DOWN_KEYCODE&&index<items.length-1){// Down
index++;}if(index<0){index=0;}items[index].focus();};_createClass(Dropdown,null,[{key:"VERSION",get:function get(){return VERSION;}},{key:"Default",get:function get(){return Default;}},{key:"DefaultType",get:function get(){return DefaultType;}}]);return Dropdown;}();/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */$$$1(document).on(Event.KEYDOWN_DATA_API,Selector.DATA_TOGGLE,Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API,Selector.MENU,Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API+" "+Event.KEYUP_DATA_API,Dropdown._clearMenus).on(Event.CLICK_DATA_API,Selector.DATA_TOGGLE,function(event){event.preventDefault();event.stopPropagation();Dropdown._jQueryInterface.call($$$1(this),'toggle');}).on(Event.CLICK_DATA_API,Selector.FORM_CHILD,function(e){e.stopPropagation();});/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */$$$1.fn[NAME]=Dropdown._jQueryInterface;$$$1.fn[NAME].Constructor=Dropdown;$$$1.fn[NAME].noConflict=function(){$$$1.fn[NAME]=JQUERY_NO_CONFLICT;return Dropdown._jQueryInterface;};return Dropdown;}($,Popper);/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */var Modal=function($$$1){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */var NAME='modal';var VERSION='4.1.3';var DATA_KEY='bs.modal';var EVENT_KEY="."+DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$$$1.fn[NAME];var ESCAPE_KEYCODE=27;// KeyboardEvent.which value for Escape (Esc) key
var Default={backdrop:true,keyboard:true,focus:true,show:true};var DefaultType={backdrop:'(boolean|string)',keyboard:'boolean',focus:'boolean',show:'boolean'};var Event={HIDE:"hide"+EVENT_KEY,HIDDEN:"hidden"+EVENT_KEY,SHOW:"show"+EVENT_KEY,SHOWN:"shown"+EVENT_KEY,FOCUSIN:"focusin"+EVENT_KEY,RESIZE:"resize"+EVENT_KEY,CLICK_DISMISS:"click.dismiss"+EVENT_KEY,KEYDOWN_DISMISS:"keydown.dismiss"+EVENT_KEY,MOUSEUP_DISMISS:"mouseup.dismiss"+EVENT_KEY,MOUSEDOWN_DISMISS:"mousedown.dismiss"+EVENT_KEY,CLICK_DATA_API:"click"+EVENT_KEY+DATA_API_KEY};var ClassName={SCROLLBAR_MEASURER:'modal-scrollbar-measure',BACKDROP:'modal-backdrop',OPEN:'modal-open',FADE:'fade',SHOW:'show'};var Selector={DIALOG:'.modal-dialog',DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:'.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',STICKY_CONTENT:'.sticky-top'/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */};var Modal=/*#__PURE__*/function(){function Modal(element,config){this._config=this._getConfig(config);this._element=element;this._dialog=element.querySelector(Selector.DIALOG);this._backdrop=null;this._isShown=false;this._isBodyOverflowing=false;this._ignoreBackdropClick=false;this._scrollbarWidth=0;}// Getters
var _proto=Modal.prototype;// Public
_proto.toggle=function toggle(relatedTarget){return this._isShown?this.hide():this.show(relatedTarget);};_proto.show=function show(relatedTarget){var _this=this;if(this._isTransitioning||this._isShown){return;}if($$$1(this._element).hasClass(ClassName.FADE)){this._isTransitioning=true;}var showEvent=$$$1.Event(Event.SHOW,{relatedTarget:relatedTarget});$$$1(this._element).trigger(showEvent);if(this._isShown||showEvent.isDefaultPrevented()){return;}this._isShown=true;this._checkScrollbar();this._setScrollbar();this._adjustDialog();$$$1(document.body).addClass(ClassName.OPEN);this._setEscapeEvent();this._setResizeEvent();$$$1(this._element).on(Event.CLICK_DISMISS,Selector.DATA_DISMISS,function(event){return _this.hide(event);});$$$1(this._dialog).on(Event.MOUSEDOWN_DISMISS,function(){$$$1(_this._element).one(Event.MOUSEUP_DISMISS,function(event){if($$$1(event.target).is(_this._element)){_this._ignoreBackdropClick=true;}});});this._showBackdrop(function(){return _this._showElement(relatedTarget);});};_proto.hide=function hide(event){var _this2=this;if(event){event.preventDefault();}if(this._isTransitioning||!this._isShown){return;}var hideEvent=$$$1.Event(Event.HIDE);$$$1(this._element).trigger(hideEvent);if(!this._isShown||hideEvent.isDefaultPrevented()){return;}this._isShown=false;var transition=$$$1(this._element).hasClass(ClassName.FADE);if(transition){this._isTransitioning=true;}this._setEscapeEvent();this._setResizeEvent();$$$1(document).off(Event.FOCUSIN);$$$1(this._element).removeClass(ClassName.SHOW);$$$1(this._element).off(Event.CLICK_DISMISS);$$$1(this._dialog).off(Event.MOUSEDOWN_DISMISS);if(transition){var transitionDuration=Util.getTransitionDurationFromElement(this._element);$$$1(this._element).one(Util.TRANSITION_END,function(event){return _this2._hideModal(event);}).emulateTransitionEnd(transitionDuration);}else{this._hideModal();}};_proto.dispose=function dispose(){$$$1.removeData(this._element,DATA_KEY);$$$1(window,document,this._element,this._backdrop).off(EVENT_KEY);this._config=null;this._element=null;this._dialog=null;this._backdrop=null;this._isShown=null;this._isBodyOverflowing=null;this._ignoreBackdropClick=null;this._scrollbarWidth=null;};_proto.handleUpdate=function handleUpdate(){this._adjustDialog();};// Private
_proto._getConfig=function _getConfig(config){config=_objectSpread({},Default,config);Util.typeCheckConfig(NAME,config,DefaultType);return config;};_proto._showElement=function _showElement(relatedTarget){var _this3=this;var transition=$$$1(this._element).hasClass(ClassName.FADE);if(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE){// Don't move modal's DOM position
document.body.appendChild(this._element);}this._element.style.display='block';this._element.removeAttribute('aria-hidden');this._element.scrollTop=0;if(transition){Util.reflow(this._element);}$$$1(this._element).addClass(ClassName.SHOW);if(this._config.focus){this._enforceFocus();}var shownEvent=$$$1.Event(Event.SHOWN,{relatedTarget:relatedTarget});var transitionComplete=function transitionComplete(){if(_this3._config.focus){_this3._element.focus();}_this3._isTransitioning=false;$$$1(_this3._element).trigger(shownEvent);};if(transition){var transitionDuration=Util.getTransitionDurationFromElement(this._element);$$$1(this._dialog).one(Util.TRANSITION_END,transitionComplete).emulateTransitionEnd(transitionDuration);}else{transitionComplete();}};_proto._enforceFocus=function _enforceFocus(){var _this4=this;$$$1(document).off(Event.FOCUSIN)// Guard against infinite focus loop
.on(Event.FOCUSIN,function(event){if(document!==event.target&&_this4._element!==event.target&&$$$1(_this4._element).has(event.target).length===0){_this4._element.focus();}});};_proto._setEscapeEvent=function _setEscapeEvent(){var _this5=this;if(this._isShown&&this._config.keyboard){$$$1(this._element).on(Event.KEYDOWN_DISMISS,function(event){if(event.which===ESCAPE_KEYCODE){event.preventDefault();_this5.hide();}});}else if(!this._isShown){$$$1(this._element).off(Event.KEYDOWN_DISMISS);}};_proto._setResizeEvent=function _setResizeEvent(){var _this6=this;if(this._isShown){$$$1(window).on(Event.RESIZE,function(event){return _this6.handleUpdate(event);});}else{$$$1(window).off(Event.RESIZE);}};_proto._hideModal=function _hideModal(){var _this7=this;this._element.style.display='none';this._element.setAttribute('aria-hidden',true);this._isTransitioning=false;this._showBackdrop(function(){$$$1(document.body).removeClass(ClassName.OPEN);_this7._resetAdjustments();_this7._resetScrollbar();$$$1(_this7._element).trigger(Event.HIDDEN);});};_proto._removeBackdrop=function _removeBackdrop(){if(this._backdrop){$$$1(this._backdrop).remove();this._backdrop=null;}};_proto._showBackdrop=function _showBackdrop(callback){var _this8=this;var animate=$$$1(this._element).hasClass(ClassName.FADE)?ClassName.FADE:'';if(this._isShown&&this._config.backdrop){this._backdrop=document.createElement('div');this._backdrop.className=ClassName.BACKDROP;if(animate){this._backdrop.classList.add(animate);}$$$1(this._backdrop).appendTo(document.body);$$$1(this._element).on(Event.CLICK_DISMISS,function(event){if(_this8._ignoreBackdropClick){_this8._ignoreBackdropClick=false;return;}if(event.target!==event.currentTarget){return;}if(_this8._config.backdrop==='static'){_this8._element.focus();}else{_this8.hide();}});if(animate){Util.reflow(this._backdrop);}$$$1(this._backdrop).addClass(ClassName.SHOW);if(!callback){return;}if(!animate){callback();return;}var backdropTransitionDuration=Util.getTransitionDurationFromElement(this._backdrop);$$$1(this._backdrop).one(Util.TRANSITION_END,callback).emulateTransitionEnd(backdropTransitionDuration);}else if(!this._isShown&&this._backdrop){$$$1(this._backdrop).removeClass(ClassName.SHOW);var callbackRemove=function callbackRemove(){_this8._removeBackdrop();if(callback){callback();}};if($$$1(this._element).hasClass(ClassName.FADE)){var _backdropTransitionDuration=Util.getTransitionDurationFromElement(this._backdrop);$$$1(this._backdrop).one(Util.TRANSITION_END,callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);}else{callbackRemove();}}else if(callback){callback();}};// ----------------------------------------------------------------------
// the following methods are used to handle overflowing modals
// todo (fat): these should probably be refactored out of modal.js
// ----------------------------------------------------------------------
_proto._adjustDialog=function _adjustDialog(){var isModalOverflowing=this._element.scrollHeight>document.documentElement.clientHeight;if(!this._isBodyOverflowing&&isModalOverflowing){this._element.style.paddingLeft=this._scrollbarWidth+"px";}if(this._isBodyOverflowing&&!isModalOverflowing){this._element.style.paddingRight=this._scrollbarWidth+"px";}};_proto._resetAdjustments=function _resetAdjustments(){this._element.style.paddingLeft='';this._element.style.paddingRight='';};_proto._checkScrollbar=function _checkScrollbar(){var rect=document.body.getBoundingClientRect();this._isBodyOverflowing=rect.left+rect.right<window.innerWidth;this._scrollbarWidth=this._getScrollbarWidth();};_proto._setScrollbar=function _setScrollbar(){var _this9=this;if(this._isBodyOverflowing){// Note: DOMNode.style.paddingRight returns the actual value or '' if not set
//   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
var fixedContent=[].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT));var stickyContent=[].slice.call(document.querySelectorAll(Selector.STICKY_CONTENT));// Adjust fixed content padding
$$$1(fixedContent).each(function(index,element){var actualPadding=element.style.paddingRight;var calculatedPadding=$$$1(element).css('padding-right');$$$1(element).data('padding-right',actualPadding).css('padding-right',parseFloat(calculatedPadding)+_this9._scrollbarWidth+"px");});// Adjust sticky content margin
$$$1(stickyContent).each(function(index,element){var actualMargin=element.style.marginRight;var calculatedMargin=$$$1(element).css('margin-right');$$$1(element).data('margin-right',actualMargin).css('margin-right',parseFloat(calculatedMargin)-_this9._scrollbarWidth+"px");});// Adjust body padding
var actualPadding=document.body.style.paddingRight;var calculatedPadding=$$$1(document.body).css('padding-right');$$$1(document.body).data('padding-right',actualPadding).css('padding-right',parseFloat(calculatedPadding)+this._scrollbarWidth+"px");}};_proto._resetScrollbar=function _resetScrollbar(){// Restore fixed content padding
var fixedContent=[].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT));$$$1(fixedContent).each(function(index,element){var padding=$$$1(element).data('padding-right');$$$1(element).removeData('padding-right');element.style.paddingRight=padding?padding:'';});// Restore sticky content
var elements=[].slice.call(document.querySelectorAll(""+Selector.STICKY_CONTENT));$$$1(elements).each(function(index,element){var margin=$$$1(element).data('margin-right');if(typeof margin!=='undefined'){$$$1(element).css('margin-right',margin).removeData('margin-right');}});// Restore body padding
var padding=$$$1(document.body).data('padding-right');$$$1(document.body).removeData('padding-right');document.body.style.paddingRight=padding?padding:'';};_proto._getScrollbarWidth=function _getScrollbarWidth(){// thx d.walsh
var scrollDiv=document.createElement('div');scrollDiv.className=ClassName.SCROLLBAR_MEASURER;document.body.appendChild(scrollDiv);var scrollbarWidth=scrollDiv.getBoundingClientRect().width-scrollDiv.clientWidth;document.body.removeChild(scrollDiv);return scrollbarWidth;};// Static
Modal._jQueryInterface=function _jQueryInterface(config,relatedTarget){return this.each(function(){var data=$$$1(this).data(DATA_KEY);var _config=_objectSpread({},Default,$$$1(this).data(),(typeof config==="undefined"?"undefined":_typeof2(config))==='object'&&config?config:{});if(!data){data=new Modal(this,_config);$$$1(this).data(DATA_KEY,data);}if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"");}data[config](relatedTarget);}else if(_config.show){data.show(relatedTarget);}});};_createClass(Modal,null,[{key:"VERSION",get:function get(){return VERSION;}},{key:"Default",get:function get(){return Default;}}]);return Modal;}();/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */$$$1(document).on(Event.CLICK_DATA_API,Selector.DATA_TOGGLE,function(event){var _this10=this;var target;var selector=Util.getSelectorFromElement(this);if(selector){target=document.querySelector(selector);}var config=$$$1(target).data(DATA_KEY)?'toggle':_objectSpread({},$$$1(target).data(),$$$1(this).data());if(this.tagName==='A'||this.tagName==='AREA'){event.preventDefault();}var $target=$$$1(target).one(Event.SHOW,function(showEvent){if(showEvent.isDefaultPrevented()){// Only register focus restorer if modal will actually get shown
return;}$target.one(Event.HIDDEN,function(){if($$$1(_this10).is(':visible')){_this10.focus();}});});Modal._jQueryInterface.call($$$1(target),config,this);});/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */$$$1.fn[NAME]=Modal._jQueryInterface;$$$1.fn[NAME].Constructor=Modal;$$$1.fn[NAME].noConflict=function(){$$$1.fn[NAME]=JQUERY_NO_CONFLICT;return Modal._jQueryInterface;};return Modal;}($);/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */var Tooltip=function($$$1){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */var NAME='tooltip';var VERSION='4.1.3';var DATA_KEY='bs.tooltip';var EVENT_KEY="."+DATA_KEY;var JQUERY_NO_CONFLICT=$$$1.fn[NAME];var CLASS_PREFIX='bs-tooltip';var BSCLS_PREFIX_REGEX=new RegExp("(^|\\s)"+CLASS_PREFIX+"\\S+",'g');var DefaultType={animation:'boolean',template:'string',title:'(string|element|function)',trigger:'string',delay:'(number|object)',html:'boolean',selector:'(string|boolean)',placement:'(string|function)',offset:'(number|string)',container:'(string|element|boolean)',fallbackPlacement:'(string|array)',boundary:'(string|element)'};var AttachmentMap={AUTO:'auto',TOP:'top',RIGHT:'right',BOTTOM:'bottom',LEFT:'left'};var Default={animation:true,template:'<div class="tooltip" role="tooltip">'+'<div class="arrow"></div>'+'<div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,selector:false,placement:'top',offset:0,container:false,fallbackPlacement:'flip',boundary:'scrollParent'};var HoverState={SHOW:'show',OUT:'out'};var Event={HIDE:"hide"+EVENT_KEY,HIDDEN:"hidden"+EVENT_KEY,SHOW:"show"+EVENT_KEY,SHOWN:"shown"+EVENT_KEY,INSERTED:"inserted"+EVENT_KEY,CLICK:"click"+EVENT_KEY,FOCUSIN:"focusin"+EVENT_KEY,FOCUSOUT:"focusout"+EVENT_KEY,MOUSEENTER:"mouseenter"+EVENT_KEY,MOUSELEAVE:"mouseleave"+EVENT_KEY};var ClassName={FADE:'fade',SHOW:'show'};var Selector={TOOLTIP:'.tooltip',TOOLTIP_INNER:'.tooltip-inner',ARROW:'.arrow'};var Trigger={HOVER:'hover',FOCUS:'focus',CLICK:'click',MANUAL:'manual'/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */};var Tooltip=/*#__PURE__*/function(){function Tooltip(element,config){/**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */if(typeof Popper==='undefined'){throw new TypeError('Bootstrap tooltips require Popper.js (https://popper.js.org)');}// private
this._isEnabled=true;this._timeout=0;this._hoverState='';this._activeTrigger={};this._popper=null;// Protected
this.element=element;this.config=this._getConfig(config);this.tip=null;this._setListeners();}// Getters
var _proto=Tooltip.prototype;// Public
_proto.enable=function enable(){this._isEnabled=true;};_proto.disable=function disable(){this._isEnabled=false;};_proto.toggleEnabled=function toggleEnabled(){this._isEnabled=!this._isEnabled;};_proto.toggle=function toggle(event){if(!this._isEnabled){return;}if(event){var dataKey=this.constructor.DATA_KEY;var context=$$$1(event.currentTarget).data(dataKey);if(!context){context=new this.constructor(event.currentTarget,this._getDelegateConfig());$$$1(event.currentTarget).data(dataKey,context);}context._activeTrigger.click=!context._activeTrigger.click;if(context._isWithActiveTrigger()){context._enter(null,context);}else{context._leave(null,context);}}else{if($$$1(this.getTipElement()).hasClass(ClassName.SHOW)){this._leave(null,this);return;}this._enter(null,this);}};_proto.dispose=function dispose(){clearTimeout(this._timeout);$$$1.removeData(this.element,this.constructor.DATA_KEY);$$$1(this.element).off(this.constructor.EVENT_KEY);$$$1(this.element).closest('.modal').off('hide.bs.modal');if(this.tip){$$$1(this.tip).remove();}this._isEnabled=null;this._timeout=null;this._hoverState=null;this._activeTrigger=null;if(this._popper!==null){this._popper.destroy();}this._popper=null;this.element=null;this.config=null;this.tip=null;};_proto.show=function show(){var _this=this;if($$$1(this.element).css('display')==='none'){throw new Error('Please use show on visible elements');}var showEvent=$$$1.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){$$$1(this.element).trigger(showEvent);var isInTheDom=$$$1.contains(this.element.ownerDocument.documentElement,this.element);if(showEvent.isDefaultPrevented()||!isInTheDom){return;}var tip=this.getTipElement();var tipId=Util.getUID(this.constructor.NAME);tip.setAttribute('id',tipId);this.element.setAttribute('aria-describedby',tipId);this.setContent();if(this.config.animation){$$$1(tip).addClass(ClassName.FADE);}var placement=typeof this.config.placement==='function'?this.config.placement.call(this,tip,this.element):this.config.placement;var attachment=this._getAttachment(placement);this.addAttachmentClass(attachment);var container=this.config.container===false?document.body:$$$1(document).find(this.config.container);$$$1(tip).data(this.constructor.DATA_KEY,this);if(!$$$1.contains(this.element.ownerDocument.documentElement,this.tip)){$$$1(tip).appendTo(container);}$$$1(this.element).trigger(this.constructor.Event.INSERTED);this._popper=new Popper(this.element,tip,{placement:attachment,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:Selector.ARROW},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function onCreate(data){if(data.originalPlacement!==data.placement){_this._handlePopperPlacementChange(data);}},onUpdate:function onUpdate(data){_this._handlePopperPlacementChange(data);}});$$$1(tip).addClass(ClassName.SHOW);// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
if('ontouchstart'in document.documentElement){$$$1(document.body).children().on('mouseover',null,$$$1.noop);}var complete=function complete(){if(_this.config.animation){_this._fixTransition();}var prevHoverState=_this._hoverState;_this._hoverState=null;$$$1(_this.element).trigger(_this.constructor.Event.SHOWN);if(prevHoverState===HoverState.OUT){_this._leave(null,_this);}};if($$$1(this.tip).hasClass(ClassName.FADE)){var transitionDuration=Util.getTransitionDurationFromElement(this.tip);$$$1(this.tip).one(Util.TRANSITION_END,complete).emulateTransitionEnd(transitionDuration);}else{complete();}}};_proto.hide=function hide(callback){var _this2=this;var tip=this.getTipElement();var hideEvent=$$$1.Event(this.constructor.Event.HIDE);var complete=function complete(){if(_this2._hoverState!==HoverState.SHOW&&tip.parentNode){tip.parentNode.removeChild(tip);}_this2._cleanTipClass();_this2.element.removeAttribute('aria-describedby');$$$1(_this2.element).trigger(_this2.constructor.Event.HIDDEN);if(_this2._popper!==null){_this2._popper.destroy();}if(callback){callback();}};$$$1(this.element).trigger(hideEvent);if(hideEvent.isDefaultPrevented()){return;}$$$1(tip).removeClass(ClassName.SHOW);// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
if('ontouchstart'in document.documentElement){$$$1(document.body).children().off('mouseover',null,$$$1.noop);}this._activeTrigger[Trigger.CLICK]=false;this._activeTrigger[Trigger.FOCUS]=false;this._activeTrigger[Trigger.HOVER]=false;if($$$1(this.tip).hasClass(ClassName.FADE)){var transitionDuration=Util.getTransitionDurationFromElement(tip);$$$1(tip).one(Util.TRANSITION_END,complete).emulateTransitionEnd(transitionDuration);}else{complete();}this._hoverState='';};_proto.update=function update(){if(this._popper!==null){this._popper.scheduleUpdate();}};// Protected
_proto.isWithContent=function isWithContent(){return Boolean(this.getTitle());};_proto.addAttachmentClass=function addAttachmentClass(attachment){$$$1(this.getTipElement()).addClass(CLASS_PREFIX+"-"+attachment);};_proto.getTipElement=function getTipElement(){this.tip=this.tip||$$$1(this.config.template)[0];return this.tip;};_proto.setContent=function setContent(){var tip=this.getTipElement();this.setElementContent($$$1(tip.querySelectorAll(Selector.TOOLTIP_INNER)),this.getTitle());$$$1(tip).removeClass(ClassName.FADE+" "+ClassName.SHOW);};_proto.setElementContent=function setElementContent($element,content){var html=this.config.html;if((typeof content==="undefined"?"undefined":_typeof2(content))==='object'&&(content.nodeType||content.jquery)){// Content is a DOM node or a jQuery
if(html){if(!$$$1(content).parent().is($element)){$element.empty().append(content);}}else{$element.text($$$1(content).text());}}else{$element[html?'html':'text'](content);}};_proto.getTitle=function getTitle(){var title=this.element.getAttribute('data-original-title');if(!title){title=typeof this.config.title==='function'?this.config.title.call(this.element):this.config.title;}return title;};// Private
_proto._getAttachment=function _getAttachment(placement){return AttachmentMap[placement.toUpperCase()];};_proto._setListeners=function _setListeners(){var _this3=this;var triggers=this.config.trigger.split(' ');triggers.forEach(function(trigger){if(trigger==='click'){$$$1(_this3.element).on(_this3.constructor.Event.CLICK,_this3.config.selector,function(event){return _this3.toggle(event);});}else if(trigger!==Trigger.MANUAL){var eventIn=trigger===Trigger.HOVER?_this3.constructor.Event.MOUSEENTER:_this3.constructor.Event.FOCUSIN;var eventOut=trigger===Trigger.HOVER?_this3.constructor.Event.MOUSELEAVE:_this3.constructor.Event.FOCUSOUT;$$$1(_this3.element).on(eventIn,_this3.config.selector,function(event){return _this3._enter(event);}).on(eventOut,_this3.config.selector,function(event){return _this3._leave(event);});}$$$1(_this3.element).closest('.modal').on('hide.bs.modal',function(){return _this3.hide();});});if(this.config.selector){this.config=_objectSpread({},this.config,{trigger:'manual',selector:''});}else{this._fixTitle();}};_proto._fixTitle=function _fixTitle(){var titleType=_typeof2(this.element.getAttribute('data-original-title'));if(this.element.getAttribute('title')||titleType!=='string'){this.element.setAttribute('data-original-title',this.element.getAttribute('title')||'');this.element.setAttribute('title','');}};_proto._enter=function _enter(event,context){var dataKey=this.constructor.DATA_KEY;context=context||$$$1(event.currentTarget).data(dataKey);if(!context){context=new this.constructor(event.currentTarget,this._getDelegateConfig());$$$1(event.currentTarget).data(dataKey,context);}if(event){context._activeTrigger[event.type==='focusin'?Trigger.FOCUS:Trigger.HOVER]=true;}if($$$1(context.getTipElement()).hasClass(ClassName.SHOW)||context._hoverState===HoverState.SHOW){context._hoverState=HoverState.SHOW;return;}clearTimeout(context._timeout);context._hoverState=HoverState.SHOW;if(!context.config.delay||!context.config.delay.show){context.show();return;}context._timeout=setTimeout(function(){if(context._hoverState===HoverState.SHOW){context.show();}},context.config.delay.show);};_proto._leave=function _leave(event,context){var dataKey=this.constructor.DATA_KEY;context=context||$$$1(event.currentTarget).data(dataKey);if(!context){context=new this.constructor(event.currentTarget,this._getDelegateConfig());$$$1(event.currentTarget).data(dataKey,context);}if(event){context._activeTrigger[event.type==='focusout'?Trigger.FOCUS:Trigger.HOVER]=false;}if(context._isWithActiveTrigger()){return;}clearTimeout(context._timeout);context._hoverState=HoverState.OUT;if(!context.config.delay||!context.config.delay.hide){context.hide();return;}context._timeout=setTimeout(function(){if(context._hoverState===HoverState.OUT){context.hide();}},context.config.delay.hide);};_proto._isWithActiveTrigger=function _isWithActiveTrigger(){for(var trigger in this._activeTrigger){if(this._activeTrigger[trigger]){return true;}}return false;};_proto._getConfig=function _getConfig(config){config=_objectSpread({},this.constructor.Default,$$$1(this.element).data(),(typeof config==="undefined"?"undefined":_typeof2(config))==='object'&&config?config:{});if(typeof config.delay==='number'){config.delay={show:config.delay,hide:config.delay};}if(typeof config.title==='number'){config.title=config.title.toString();}if(typeof config.content==='number'){config.content=config.content.toString();}Util.typeCheckConfig(NAME,config,this.constructor.DefaultType);return config;};_proto._getDelegateConfig=function _getDelegateConfig(){var config={};if(this.config){for(var key in this.config){if(this.constructor.Default[key]!==this.config[key]){config[key]=this.config[key];}}}return config;};_proto._cleanTipClass=function _cleanTipClass(){var $tip=$$$1(this.getTipElement());var tabClass=$tip.attr('class').match(BSCLS_PREFIX_REGEX);if(tabClass!==null&&tabClass.length){$tip.removeClass(tabClass.join(''));}};_proto._handlePopperPlacementChange=function _handlePopperPlacementChange(popperData){var popperInstance=popperData.instance;this.tip=popperInstance.popper;this._cleanTipClass();this.addAttachmentClass(this._getAttachment(popperData.placement));};_proto._fixTransition=function _fixTransition(){var tip=this.getTipElement();var initConfigAnimation=this.config.animation;if(tip.getAttribute('x-placement')!==null){return;}$$$1(tip).removeClass(ClassName.FADE);this.config.animation=false;this.hide();this.show();this.config.animation=initConfigAnimation;};// Static
Tooltip._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$$$1(this).data(DATA_KEY);var _config=(typeof config==="undefined"?"undefined":_typeof2(config))==='object'&&config;if(!data&&/dispose|hide/.test(config)){return;}if(!data){data=new Tooltip(this,_config);$$$1(this).data(DATA_KEY,data);}if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"");}data[config]();}});};_createClass(Tooltip,null,[{key:"VERSION",get:function get(){return VERSION;}},{key:"Default",get:function get(){return Default;}},{key:"NAME",get:function get(){return NAME;}},{key:"DATA_KEY",get:function get(){return DATA_KEY;}},{key:"Event",get:function get(){return Event;}},{key:"EVENT_KEY",get:function get(){return EVENT_KEY;}},{key:"DefaultType",get:function get(){return DefaultType;}}]);return Tooltip;}();/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */$$$1.fn[NAME]=Tooltip._jQueryInterface;$$$1.fn[NAME].Constructor=Tooltip;$$$1.fn[NAME].noConflict=function(){$$$1.fn[NAME]=JQUERY_NO_CONFLICT;return Tooltip._jQueryInterface;};return Tooltip;}($,Popper);/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */var Popover=function($$$1){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */var NAME='popover';var VERSION='4.1.3';var DATA_KEY='bs.popover';var EVENT_KEY="."+DATA_KEY;var JQUERY_NO_CONFLICT=$$$1.fn[NAME];var CLASS_PREFIX='bs-popover';var BSCLS_PREFIX_REGEX=new RegExp("(^|\\s)"+CLASS_PREFIX+"\\S+",'g');var Default=_objectSpread({},Tooltip.Default,{placement:'right',trigger:'click',content:'',template:'<div class="popover" role="tooltip">'+'<div class="arrow"></div>'+'<h3 class="popover-header"></h3>'+'<div class="popover-body"></div></div>'});var DefaultType=_objectSpread({},Tooltip.DefaultType,{content:'(string|element|function)'});var ClassName={FADE:'fade',SHOW:'show'};var Selector={TITLE:'.popover-header',CONTENT:'.popover-body'};var Event={HIDE:"hide"+EVENT_KEY,HIDDEN:"hidden"+EVENT_KEY,SHOW:"show"+EVENT_KEY,SHOWN:"shown"+EVENT_KEY,INSERTED:"inserted"+EVENT_KEY,CLICK:"click"+EVENT_KEY,FOCUSIN:"focusin"+EVENT_KEY,FOCUSOUT:"focusout"+EVENT_KEY,MOUSEENTER:"mouseenter"+EVENT_KEY,MOUSELEAVE:"mouseleave"+EVENT_KEY/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */};var Popover=/*#__PURE__*/function(_Tooltip){_inheritsLoose(Popover,_Tooltip);function Popover(){return _Tooltip.apply(this,arguments)||this;}var _proto=Popover.prototype;// Overrides
_proto.isWithContent=function isWithContent(){return this.getTitle()||this._getContent();};_proto.addAttachmentClass=function addAttachmentClass(attachment){$$$1(this.getTipElement()).addClass(CLASS_PREFIX+"-"+attachment);};_proto.getTipElement=function getTipElement(){this.tip=this.tip||$$$1(this.config.template)[0];return this.tip;};_proto.setContent=function setContent(){var $tip=$$$1(this.getTipElement());// We use append for html objects to maintain js events
this.setElementContent($tip.find(Selector.TITLE),this.getTitle());var content=this._getContent();if(typeof content==='function'){content=content.call(this.element);}this.setElementContent($tip.find(Selector.CONTENT),content);$tip.removeClass(ClassName.FADE+" "+ClassName.SHOW);};// Private
_proto._getContent=function _getContent(){return this.element.getAttribute('data-content')||this.config.content;};_proto._cleanTipClass=function _cleanTipClass(){var $tip=$$$1(this.getTipElement());var tabClass=$tip.attr('class').match(BSCLS_PREFIX_REGEX);if(tabClass!==null&&tabClass.length>0){$tip.removeClass(tabClass.join(''));}};// Static
Popover._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$$$1(this).data(DATA_KEY);var _config=(typeof config==="undefined"?"undefined":_typeof2(config))==='object'?config:null;if(!data&&/destroy|hide/.test(config)){return;}if(!data){data=new Popover(this,_config);$$$1(this).data(DATA_KEY,data);}if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"");}data[config]();}});};_createClass(Popover,null,[{key:"VERSION",// Getters
get:function get(){return VERSION;}},{key:"Default",get:function get(){return Default;}},{key:"NAME",get:function get(){return NAME;}},{key:"DATA_KEY",get:function get(){return DATA_KEY;}},{key:"Event",get:function get(){return Event;}},{key:"EVENT_KEY",get:function get(){return EVENT_KEY;}},{key:"DefaultType",get:function get(){return DefaultType;}}]);return Popover;}(Tooltip);/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */$$$1.fn[NAME]=Popover._jQueryInterface;$$$1.fn[NAME].Constructor=Popover;$$$1.fn[NAME].noConflict=function(){$$$1.fn[NAME]=JQUERY_NO_CONFLICT;return Popover._jQueryInterface;};return Popover;}($);/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */var ScrollSpy=function($$$1){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */var NAME='scrollspy';var VERSION='4.1.3';var DATA_KEY='bs.scrollspy';var EVENT_KEY="."+DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$$$1.fn[NAME];var Default={offset:10,method:'auto',target:''};var DefaultType={offset:'number',method:'string',target:'(string|element)'};var Event={ACTIVATE:"activate"+EVENT_KEY,SCROLL:"scroll"+EVENT_KEY,LOAD_DATA_API:"load"+EVENT_KEY+DATA_API_KEY};var ClassName={DROPDOWN_ITEM:'dropdown-item',DROPDOWN_MENU:'dropdown-menu',ACTIVE:'active'};var Selector={DATA_SPY:'[data-spy="scroll"]',ACTIVE:'.active',NAV_LIST_GROUP:'.nav, .list-group',NAV_LINKS:'.nav-link',NAV_ITEMS:'.nav-item',LIST_ITEMS:'.list-group-item',DROPDOWN:'.dropdown',DROPDOWN_ITEMS:'.dropdown-item',DROPDOWN_TOGGLE:'.dropdown-toggle'};var OffsetMethod={OFFSET:'offset',POSITION:'position'/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */};var ScrollSpy=/*#__PURE__*/function(){function ScrollSpy(element,config){var _this=this;this._element=element;this._scrollElement=element.tagName==='BODY'?window:element;this._config=this._getConfig(config);this._selector=this._config.target+" "+Selector.NAV_LINKS+","+(this._config.target+" "+Selector.LIST_ITEMS+",")+(this._config.target+" "+Selector.DROPDOWN_ITEMS);this._offsets=[];this._targets=[];this._activeTarget=null;this._scrollHeight=0;$$$1(this._scrollElement).on(Event.SCROLL,function(event){return _this._process(event);});this.refresh();this._process();}// Getters
var _proto=ScrollSpy.prototype;// Public
_proto.refresh=function refresh(){var _this2=this;var autoMethod=this._scrollElement===this._scrollElement.window?OffsetMethod.OFFSET:OffsetMethod.POSITION;var offsetMethod=this._config.method==='auto'?autoMethod:this._config.method;var offsetBase=offsetMethod===OffsetMethod.POSITION?this._getScrollTop():0;this._offsets=[];this._targets=[];this._scrollHeight=this._getScrollHeight();var targets=[].slice.call(document.querySelectorAll(this._selector));targets.map(function(element){var target;var targetSelector=Util.getSelectorFromElement(element);if(targetSelector){target=document.querySelector(targetSelector);}if(target){var targetBCR=target.getBoundingClientRect();if(targetBCR.width||targetBCR.height){// TODO (fat): remove sketch reliance on jQuery position/offset
return[$$$1(target)[offsetMethod]().top+offsetBase,targetSelector];}}return null;}).filter(function(item){return item;}).sort(function(a,b){return a[0]-b[0];}).forEach(function(item){_this2._offsets.push(item[0]);_this2._targets.push(item[1]);});};_proto.dispose=function dispose(){$$$1.removeData(this._element,DATA_KEY);$$$1(this._scrollElement).off(EVENT_KEY);this._element=null;this._scrollElement=null;this._config=null;this._selector=null;this._offsets=null;this._targets=null;this._activeTarget=null;this._scrollHeight=null;};// Private
_proto._getConfig=function _getConfig(config){config=_objectSpread({},Default,(typeof config==="undefined"?"undefined":_typeof2(config))==='object'&&config?config:{});if(typeof config.target!=='string'){var id=$$$1(config.target).attr('id');if(!id){id=Util.getUID(NAME);$$$1(config.target).attr('id',id);}config.target="#"+id;}Util.typeCheckConfig(NAME,config,DefaultType);return config;};_proto._getScrollTop=function _getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop;};_proto._getScrollHeight=function _getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);};_proto._getOffsetHeight=function _getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height;};_proto._process=function _process(){var scrollTop=this._getScrollTop()+this._config.offset;var scrollHeight=this._getScrollHeight();var maxScroll=this._config.offset+scrollHeight-this._getOffsetHeight();if(this._scrollHeight!==scrollHeight){this.refresh();}if(scrollTop>=maxScroll){var target=this._targets[this._targets.length-1];if(this._activeTarget!==target){this._activate(target);}return;}if(this._activeTarget&&scrollTop<this._offsets[0]&&this._offsets[0]>0){this._activeTarget=null;this._clear();return;}var offsetLength=this._offsets.length;for(var i=offsetLength;i--;){var isActiveTarget=this._activeTarget!==this._targets[i]&&scrollTop>=this._offsets[i]&&(typeof this._offsets[i+1]==='undefined'||scrollTop<this._offsets[i+1]);if(isActiveTarget){this._activate(this._targets[i]);}}};_proto._activate=function _activate(target){this._activeTarget=target;this._clear();var queries=this._selector.split(',');// eslint-disable-next-line arrow-body-style
queries=queries.map(function(selector){return selector+"[data-target=\""+target+"\"],"+(selector+"[href=\""+target+"\"]");});var $link=$$$1([].slice.call(document.querySelectorAll(queries.join(','))));if($link.hasClass(ClassName.DROPDOWN_ITEM)){$link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);$link.addClass(ClassName.ACTIVE);}else{// Set triggered link as active
$link.addClass(ClassName.ACTIVE);// Set triggered links parents as active
// With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
$link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_LINKS+", "+Selector.LIST_ITEMS).addClass(ClassName.ACTIVE);// Handle special case when .nav-link is inside .nav-item
$link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_ITEMS).children(Selector.NAV_LINKS).addClass(ClassName.ACTIVE);}$$$1(this._scrollElement).trigger(Event.ACTIVATE,{relatedTarget:target});};_proto._clear=function _clear(){var nodes=[].slice.call(document.querySelectorAll(this._selector));$$$1(nodes).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);};// Static
ScrollSpy._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$$$1(this).data(DATA_KEY);var _config=(typeof config==="undefined"?"undefined":_typeof2(config))==='object'&&config;if(!data){data=new ScrollSpy(this,_config);$$$1(this).data(DATA_KEY,data);}if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"");}data[config]();}});};_createClass(ScrollSpy,null,[{key:"VERSION",get:function get(){return VERSION;}},{key:"Default",get:function get(){return Default;}}]);return ScrollSpy;}();/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */$$$1(window).on(Event.LOAD_DATA_API,function(){var scrollSpys=[].slice.call(document.querySelectorAll(Selector.DATA_SPY));var scrollSpysLength=scrollSpys.length;for(var i=scrollSpysLength;i--;){var $spy=$$$1(scrollSpys[i]);ScrollSpy._jQueryInterface.call($spy,$spy.data());}});/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */$$$1.fn[NAME]=ScrollSpy._jQueryInterface;$$$1.fn[NAME].Constructor=ScrollSpy;$$$1.fn[NAME].noConflict=function(){$$$1.fn[NAME]=JQUERY_NO_CONFLICT;return ScrollSpy._jQueryInterface;};return ScrollSpy;}($);/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */var Tab=function($$$1){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */var NAME='tab';var VERSION='4.1.3';var DATA_KEY='bs.tab';var EVENT_KEY="."+DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$$$1.fn[NAME];var Event={HIDE:"hide"+EVENT_KEY,HIDDEN:"hidden"+EVENT_KEY,SHOW:"show"+EVENT_KEY,SHOWN:"shown"+EVENT_KEY,CLICK_DATA_API:"click"+EVENT_KEY+DATA_API_KEY};var ClassName={DROPDOWN_MENU:'dropdown-menu',ACTIVE:'active',DISABLED:'disabled',FADE:'fade',SHOW:'show'};var Selector={DROPDOWN:'.dropdown',NAV_LIST_GROUP:'.nav, .list-group',ACTIVE:'.active',ACTIVE_UL:'> li > .active',DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',DROPDOWN_TOGGLE:'.dropdown-toggle',DROPDOWN_ACTIVE_CHILD:'> .dropdown-menu .active'/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */};var Tab=/*#__PURE__*/function(){function Tab(element){this._element=element;}// Getters
var _proto=Tab.prototype;// Public
_proto.show=function show(){var _this=this;if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&$$$1(this._element).hasClass(ClassName.ACTIVE)||$$$1(this._element).hasClass(ClassName.DISABLED)){return;}var target;var previous;var listElement=$$$1(this._element).closest(Selector.NAV_LIST_GROUP)[0];var selector=Util.getSelectorFromElement(this._element);if(listElement){var itemSelector=listElement.nodeName==='UL'?Selector.ACTIVE_UL:Selector.ACTIVE;previous=$$$1.makeArray($$$1(listElement).find(itemSelector));previous=previous[previous.length-1];}var hideEvent=$$$1.Event(Event.HIDE,{relatedTarget:this._element});var showEvent=$$$1.Event(Event.SHOW,{relatedTarget:previous});if(previous){$$$1(previous).trigger(hideEvent);}$$$1(this._element).trigger(showEvent);if(showEvent.isDefaultPrevented()||hideEvent.isDefaultPrevented()){return;}if(selector){target=document.querySelector(selector);}this._activate(this._element,listElement);var complete=function complete(){var hiddenEvent=$$$1.Event(Event.HIDDEN,{relatedTarget:_this._element});var shownEvent=$$$1.Event(Event.SHOWN,{relatedTarget:previous});$$$1(previous).trigger(hiddenEvent);$$$1(_this._element).trigger(shownEvent);};if(target){this._activate(target,target.parentNode,complete);}else{complete();}};_proto.dispose=function dispose(){$$$1.removeData(this._element,DATA_KEY);this._element=null;};// Private
_proto._activate=function _activate(element,container,callback){var _this2=this;var activeElements;if(container.nodeName==='UL'){activeElements=$$$1(container).find(Selector.ACTIVE_UL);}else{activeElements=$$$1(container).children(Selector.ACTIVE);}var active=activeElements[0];var isTransitioning=callback&&active&&$$$1(active).hasClass(ClassName.FADE);var complete=function complete(){return _this2._transitionComplete(element,active,callback);};if(active&&isTransitioning){var transitionDuration=Util.getTransitionDurationFromElement(active);$$$1(active).one(Util.TRANSITION_END,complete).emulateTransitionEnd(transitionDuration);}else{complete();}};_proto._transitionComplete=function _transitionComplete(element,active,callback){if(active){$$$1(active).removeClass(ClassName.SHOW+" "+ClassName.ACTIVE);var dropdownChild=$$$1(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];if(dropdownChild){$$$1(dropdownChild).removeClass(ClassName.ACTIVE);}if(active.getAttribute('role')==='tab'){active.setAttribute('aria-selected',false);}}$$$1(element).addClass(ClassName.ACTIVE);if(element.getAttribute('role')==='tab'){element.setAttribute('aria-selected',true);}Util.reflow(element);$$$1(element).addClass(ClassName.SHOW);if(element.parentNode&&$$$1(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)){var dropdownElement=$$$1(element).closest(Selector.DROPDOWN)[0];if(dropdownElement){var dropdownToggleList=[].slice.call(dropdownElement.querySelectorAll(Selector.DROPDOWN_TOGGLE));$$$1(dropdownToggleList).addClass(ClassName.ACTIVE);}element.setAttribute('aria-expanded',true);}if(callback){callback();}};// Static
Tab._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var $this=$$$1(this);var data=$this.data(DATA_KEY);if(!data){data=new Tab(this);$this.data(DATA_KEY,data);}if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"");}data[config]();}});};_createClass(Tab,null,[{key:"VERSION",get:function get(){return VERSION;}}]);return Tab;}();/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */$$$1(document).on(Event.CLICK_DATA_API,Selector.DATA_TOGGLE,function(event){event.preventDefault();Tab._jQueryInterface.call($$$1(this),'show');});/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */$$$1.fn[NAME]=Tab._jQueryInterface;$$$1.fn[NAME].Constructor=Tab;$$$1.fn[NAME].noConflict=function(){$$$1.fn[NAME]=JQUERY_NO_CONFLICT;return Tab._jQueryInterface;};return Tab;}($);/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */(function($$$1){if(typeof $$$1==='undefined'){throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');}var version=$$$1.fn.jquery.split(' ')[0].split('.');var minMajor=1;var ltMajor=2;var minMinor=9;var minPatch=1;var maxMajor=4;if(version[0]<ltMajor&&version[1]<minMinor||version[0]===minMajor&&version[1]===minMinor&&version[2]<minPatch||version[0]>=maxMajor){throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');}})($);exports.Util=Util;exports.Alert=Alert;exports.Button=Button;exports.Carousel=Carousel;exports.Collapse=Collapse;exports.Dropdown=Dropdown;exports.Modal=Modal;exports.Popover=Popover;exports.Scrollspy=ScrollSpy;exports.Tab=Tab;exports.Tooltip=Tooltip;Object.defineProperty(exports,'__esModule',{value:true});});//# sourceMappingURL=bootstrap.js.map
(function(){var AjaxMonitor,Bar,DocumentMonitor,ElementMonitor,ElementTracker,EventLagMonitor,Evented,Events,NoTargetError,Pace,RequestIntercept,SOURCE_KEYS,Scaler,SocketRequestTracker,XHRRequestTracker,animation,avgAmplitude,bar,cancelAnimation,cancelAnimationFrame,defaultOptions,_extend,extendNative,getFromDOM,getIntercept,handlePushState,ignoreStack,init,now,options,requestAnimationFrame,result,runAnimation,scalers,shouldIgnoreURL,shouldTrack,source,sources,uniScaler,_WebSocket,_XDomainRequest,_XMLHttpRequest,_i,_intercept,_len,_pushState,_ref,_ref1,_replaceState,__slice=[].slice,__hasProp={}.hasOwnProperty,__extends=function __extends(child,parent){for(var key in parent){if(__hasProp.call(parent,key))child[key]=parent[key];}function ctor(){this.constructor=child;}ctor.prototype=parent.prototype;child.prototype=new ctor();child.__super__=parent.prototype;return child;},__indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i;}return-1;};defaultOptions={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:true,restartOnPushState:true,restartOnRequestAfter:500,target:'body',elements:{checkInterval:100,selectors:['body']},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:['GET'],trackWebSockets:true,ignoreURLs:[]}};now=function now(){var _ref;return(_ref=typeof performance!=="undefined"&&performance!==null?typeof performance.now==="function"?performance.now():void 0:void 0)!=null?_ref:+new Date();};requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame;if(requestAnimationFrame==null){requestAnimationFrame=function requestAnimationFrame(fn){return setTimeout(fn,50);};cancelAnimationFrame=function cancelAnimationFrame(id){return clearTimeout(id);};}runAnimation=function runAnimation(fn){var last,_tick;last=now();_tick=function tick(){var diff;diff=now()-last;if(diff>=33){last=now();return fn(diff,function(){return requestAnimationFrame(_tick);});}else{return setTimeout(_tick,33-diff);}};return _tick();};result=function result(){var args,key,obj;obj=arguments[0],key=arguments[1],args=3<=arguments.length?__slice.call(arguments,2):[];if(typeof obj[key]==='function'){return obj[key].apply(obj,args);}else{return obj[key];}};_extend=function extend(){var key,out,source,sources,val,_i,_len;out=arguments[0],sources=2<=arguments.length?__slice.call(arguments,1):[];for(_i=0,_len=sources.length;_i<_len;_i++){source=sources[_i];if(source){for(key in source){if(!__hasProp.call(source,key))continue;val=source[key];if(out[key]!=null&&_typeof2(out[key])==='object'&&val!=null&&(typeof val==="undefined"?"undefined":_typeof2(val))==='object'){_extend(out[key],val);}else{out[key]=val;}}}}return out;};avgAmplitude=function avgAmplitude(arr){var count,sum,v,_i,_len;sum=count=0;for(_i=0,_len=arr.length;_i<_len;_i++){v=arr[_i];sum+=Math.abs(v);count++;}return sum/count;};getFromDOM=function getFromDOM(key,json){var data,e,el;if(key==null){key='options';}if(json==null){json=true;}el=document.querySelector("[data-pace-"+key+"]");if(!el){return;}data=el.getAttribute("data-pace-"+key);if(!json){return data;}try{return JSON.parse(data);}catch(_error){e=_error;return typeof console!=="undefined"&&console!==null?console.error("Error parsing inline pace options",e):void 0;}};Evented=function(){function Evented(){}Evented.prototype.on=function(event,handler,ctx,once){var _base;if(once==null){once=false;}if(this.bindings==null){this.bindings={};}if((_base=this.bindings)[event]==null){_base[event]=[];}return this.bindings[event].push({handler:handler,ctx:ctx,once:once});};Evented.prototype.once=function(event,handler,ctx){return this.on(event,handler,ctx,true);};Evented.prototype.off=function(event,handler){var i,_ref,_results;if(((_ref=this.bindings)!=null?_ref[event]:void 0)==null){return;}if(handler==null){return delete this.bindings[event];}else{i=0;_results=[];while(i<this.bindings[event].length){if(this.bindings[event][i].handler===handler){_results.push(this.bindings[event].splice(i,1));}else{_results.push(i++);}}return _results;}};Evented.prototype.trigger=function(){var args,ctx,event,handler,i,once,_ref,_ref1,_results;event=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];if((_ref=this.bindings)!=null?_ref[event]:void 0){i=0;_results=[];while(i<this.bindings[event].length){_ref1=this.bindings[event][i],handler=_ref1.handler,ctx=_ref1.ctx,once=_ref1.once;handler.apply(ctx!=null?ctx:this,args);if(once){_results.push(this.bindings[event].splice(i,1));}else{_results.push(i++);}}return _results;}};return Evented;}();Pace=window.Pace||{};window.Pace=Pace;_extend(Pace,Evented.prototype);options=Pace.options=_extend({},defaultOptions,window.paceOptions,getFromDOM());_ref=['ajax','document','eventLag','elements'];for(_i=0,_len=_ref.length;_i<_len;_i++){source=_ref[_i];if(options[source]===true){options[source]=defaultOptions[source];}}NoTargetError=function(_super){__extends(NoTargetError,_super);function NoTargetError(){_ref1=NoTargetError.__super__.constructor.apply(this,arguments);return _ref1;}return NoTargetError;}(Error);Bar=function(){function Bar(){this.progress=0;}Bar.prototype.getElement=function(){var targetElement;if(this.el==null){targetElement=document.querySelector(options.target);if(!targetElement){throw new NoTargetError();}this.el=document.createElement('div');this.el.className="pace pace-active";document.body.className=document.body.className.replace(/pace-done/g,'');document.body.className+=' pace-running';this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>';if(targetElement.firstChild!=null){targetElement.insertBefore(this.el,targetElement.firstChild);}else{targetElement.appendChild(this.el);}}return this.el;};Bar.prototype.finish=function(){var el;el=this.getElement();el.className=el.className.replace('pace-active','');el.className+=' pace-inactive';document.body.className=document.body.className.replace('pace-running','');return document.body.className+=' pace-done';};Bar.prototype.update=function(prog){this.progress=prog;return this.render();};Bar.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement());}catch(_error){NoTargetError=_error;}return this.el=void 0;};Bar.prototype.render=function(){var el,key,progressStr,transform,_j,_len1,_ref2;if(document.querySelector(options.target)==null){return false;}el=this.getElement();transform="translate3d("+this.progress+"%, 0, 0)";_ref2=['webkitTransform','msTransform','transform'];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){key=_ref2[_j];el.children[0].style[key]=transform;}if(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0){el.children[0].setAttribute('data-progress-text',""+(this.progress|0)+"%");if(this.progress>=100){progressStr='99';}else{progressStr=this.progress<10?"0":"";progressStr+=this.progress|0;}el.children[0].setAttribute('data-progress',""+progressStr);}return this.lastRenderedProgress=this.progress;};Bar.prototype.done=function(){return this.progress>=100;};return Bar;}();Events=function(){function Events(){this.bindings={};}Events.prototype.trigger=function(name,val){var binding,_j,_len1,_ref2,_results;if(this.bindings[name]!=null){_ref2=this.bindings[name];_results=[];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){binding=_ref2[_j];_results.push(binding.call(this,val));}return _results;}};Events.prototype.on=function(name,fn){var _base;if((_base=this.bindings)[name]==null){_base[name]=[];}return this.bindings[name].push(fn);};return Events;}();_XMLHttpRequest=window.XMLHttpRequest;_XDomainRequest=window.XDomainRequest;_WebSocket=window.WebSocket;extendNative=function extendNative(to,from){var e,key,_results;_results=[];for(key in from.prototype){try{if(to[key]==null&&typeof from[key]!=='function'){if(typeof Object.defineProperty==='function'){_results.push(Object.defineProperty(to,key,{get:function get(){return from.prototype[key];},configurable:true,enumerable:true}));}else{_results.push(to[key]=from.prototype[key]);}}else{_results.push(void 0);}}catch(_error){e=_error;}}return _results;};ignoreStack=[];Pace.ignore=function(){var args,fn,ret;fn=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];ignoreStack.unshift('ignore');ret=fn.apply(null,args);ignoreStack.shift();return ret;};Pace.track=function(){var args,fn,ret;fn=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];ignoreStack.unshift('track');ret=fn.apply(null,args);ignoreStack.shift();return ret;};shouldTrack=function shouldTrack(method){var _ref2;if(method==null){method='GET';}if(ignoreStack[0]==='track'){return'force';}if(!ignoreStack.length&&options.ajax){if(method==='socket'&&options.ajax.trackWebSockets){return true;}else if(_ref2=method.toUpperCase(),__indexOf.call(options.ajax.trackMethods,_ref2)>=0){return true;}}return false;};RequestIntercept=function(_super){__extends(RequestIntercept,_super);function RequestIntercept(){var monitorXHR,_this=this;RequestIntercept.__super__.constructor.apply(this,arguments);monitorXHR=function monitorXHR(req){var _open;_open=req.open;return req.open=function(type,url,async){if(shouldTrack(type)){_this.trigger('request',{type:type,url:url,request:req});}return _open.apply(req,arguments);};};window.XMLHttpRequest=function(flags){var req;req=new _XMLHttpRequest(flags);monitorXHR(req);return req;};try{extendNative(window.XMLHttpRequest,_XMLHttpRequest);}catch(_error){}if(_XDomainRequest!=null){window.XDomainRequest=function(){var req;req=new _XDomainRequest();monitorXHR(req);return req;};try{extendNative(window.XDomainRequest,_XDomainRequest);}catch(_error){}}if(_WebSocket!=null&&options.ajax.trackWebSockets){window.WebSocket=function(url,protocols){var req;if(protocols!=null){req=new _WebSocket(url,protocols);}else{req=new _WebSocket(url);}if(shouldTrack('socket')){_this.trigger('request',{type:'socket',url:url,protocols:protocols,request:req});}return req;};try{extendNative(window.WebSocket,_WebSocket);}catch(_error){}}}return RequestIntercept;}(Events);_intercept=null;getIntercept=function getIntercept(){if(_intercept==null){_intercept=new RequestIntercept();}return _intercept;};shouldIgnoreURL=function shouldIgnoreURL(url){var pattern,_j,_len1,_ref2;_ref2=options.ajax.ignoreURLs;for(_j=0,_len1=_ref2.length;_j<_len1;_j++){pattern=_ref2[_j];if(typeof pattern==='string'){if(url.indexOf(pattern)!==-1){return true;}}else{if(pattern.test(url)){return true;}}}return false;};getIntercept().on('request',function(_arg){var after,args,request,type,url;type=_arg.type,request=_arg.request,url=_arg.url;if(shouldIgnoreURL(url)){return;}if(!Pace.running&&(options.restartOnRequestAfter!==false||shouldTrack(type)==='force')){args=arguments;after=options.restartOnRequestAfter||0;if(typeof after==='boolean'){after=0;}return setTimeout(function(){var stillActive,_j,_len1,_ref2,_ref3,_results;if(type==='socket'){stillActive=request.readyState<2;}else{stillActive=0<(_ref2=request.readyState)&&_ref2<4;}if(stillActive){Pace.restart();_ref3=Pace.sources;_results=[];for(_j=0,_len1=_ref3.length;_j<_len1;_j++){source=_ref3[_j];if(source instanceof AjaxMonitor){source.watch.apply(source,args);break;}else{_results.push(void 0);}}return _results;}},after);}});AjaxMonitor=function(){function AjaxMonitor(){var _this=this;this.elements=[];getIntercept().on('request',function(){return _this.watch.apply(_this,arguments);});}AjaxMonitor.prototype.watch=function(_arg){var request,tracker,type,url;type=_arg.type,request=_arg.request,url=_arg.url;if(shouldIgnoreURL(url)){return;}if(type==='socket'){tracker=new SocketRequestTracker(request);}else{tracker=new XHRRequestTracker(request);}return this.elements.push(tracker);};return AjaxMonitor;}();XHRRequestTracker=function(){function XHRRequestTracker(request){var event,size,_j,_len1,_onreadystatechange,_ref2,_this=this;this.progress=0;if(window.ProgressEvent!=null){size=null;request.addEventListener('progress',function(evt){if(evt.lengthComputable){return _this.progress=100*evt.loaded/evt.total;}else{return _this.progress=_this.progress+(100-_this.progress)/2;}},false);_ref2=['load','abort','timeout','error'];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){event=_ref2[_j];request.addEventListener(event,function(){return _this.progress=100;},false);}}else{_onreadystatechange=request.onreadystatechange;request.onreadystatechange=function(){var _ref3;if((_ref3=request.readyState)===0||_ref3===4){_this.progress=100;}else if(request.readyState===3){_this.progress=50;}return typeof _onreadystatechange==="function"?_onreadystatechange.apply(null,arguments):void 0;};}}return XHRRequestTracker;}();SocketRequestTracker=function(){function SocketRequestTracker(request){var event,_j,_len1,_ref2,_this=this;this.progress=0;_ref2=['error','open'];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){event=_ref2[_j];request.addEventListener(event,function(){return _this.progress=100;},false);}}return SocketRequestTracker;}();ElementMonitor=function(){function ElementMonitor(options){var selector,_j,_len1,_ref2;if(options==null){options={};}this.elements=[];if(options.selectors==null){options.selectors=[];}_ref2=options.selectors;for(_j=0,_len1=_ref2.length;_j<_len1;_j++){selector=_ref2[_j];this.elements.push(new ElementTracker(selector));}}return ElementMonitor;}();ElementTracker=function(){function ElementTracker(selector){this.selector=selector;this.progress=0;this.check();}ElementTracker.prototype.check=function(){var _this=this;if(document.querySelector(this.selector)){return this.done();}else{return setTimeout(function(){return _this.check();},options.elements.checkInterval);}};ElementTracker.prototype.done=function(){return this.progress=100;};return ElementTracker;}();DocumentMonitor=function(){DocumentMonitor.prototype.states={loading:0,interactive:50,complete:100};function DocumentMonitor(){var _onreadystatechange,_ref2,_this=this;this.progress=(_ref2=this.states[document.readyState])!=null?_ref2:100;_onreadystatechange=document.onreadystatechange;document.onreadystatechange=function(){if(_this.states[document.readyState]!=null){_this.progress=_this.states[document.readyState];}return typeof _onreadystatechange==="function"?_onreadystatechange.apply(null,arguments):void 0;};}return DocumentMonitor;}();EventLagMonitor=function(){function EventLagMonitor(){var avg,interval,last,points,samples,_this=this;this.progress=0;avg=0;samples=[];points=0;last=now();interval=setInterval(function(){var diff;diff=now()-last-50;last=now();samples.push(diff);if(samples.length>options.eventLag.sampleCount){samples.shift();}avg=avgAmplitude(samples);if(++points>=options.eventLag.minSamples&&avg<options.eventLag.lagThreshold){_this.progress=100;return clearInterval(interval);}else{return _this.progress=100*(3/(avg+3));}},50);}return EventLagMonitor;}();Scaler=function(){function Scaler(source){this.source=source;this.last=this.sinceLastUpdate=0;this.rate=options.initialRate;this.catchup=0;this.progress=this.lastProgress=0;if(this.source!=null){this.progress=result(this.source,'progress');}}Scaler.prototype.tick=function(frameTime,val){var scaling;if(val==null){val=result(this.source,'progress');}if(val>=100){this.done=true;}if(val===this.last){this.sinceLastUpdate+=frameTime;}else{if(this.sinceLastUpdate){this.rate=(val-this.last)/this.sinceLastUpdate;}this.catchup=(val-this.progress)/options.catchupTime;this.sinceLastUpdate=0;this.last=val;}if(val>this.progress){this.progress+=this.catchup*frameTime;}scaling=1-Math.pow(this.progress/100,options.easeFactor);this.progress+=scaling*this.rate*frameTime;this.progress=Math.min(this.lastProgress+options.maxProgressPerFrame,this.progress);this.progress=Math.max(0,this.progress);this.progress=Math.min(100,this.progress);this.lastProgress=this.progress;return this.progress;};return Scaler;}();sources=null;scalers=null;bar=null;uniScaler=null;animation=null;cancelAnimation=null;Pace.running=false;handlePushState=function handlePushState(){if(options.restartOnPushState){return Pace.restart();}};if(window.history.pushState!=null){_pushState=window.history.pushState;window.history.pushState=function(){handlePushState();return _pushState.apply(window.history,arguments);};}if(window.history.replaceState!=null){_replaceState=window.history.replaceState;window.history.replaceState=function(){handlePushState();return _replaceState.apply(window.history,arguments);};}SOURCE_KEYS={ajax:AjaxMonitor,elements:ElementMonitor,document:DocumentMonitor,eventLag:EventLagMonitor};(init=function init(){var type,_j,_k,_len1,_len2,_ref2,_ref3,_ref4;Pace.sources=sources=[];_ref2=['ajax','elements','document','eventLag'];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){type=_ref2[_j];if(options[type]!==false){sources.push(new SOURCE_KEYS[type](options[type]));}}_ref4=(_ref3=options.extraSources)!=null?_ref3:[];for(_k=0,_len2=_ref4.length;_k<_len2;_k++){source=_ref4[_k];sources.push(new source(options));}Pace.bar=bar=new Bar();scalers=[];return uniScaler=new Scaler();})();Pace.stop=function(){Pace.trigger('stop');Pace.running=false;bar.destroy();cancelAnimation=true;if(animation!=null){if(typeof cancelAnimationFrame==="function"){cancelAnimationFrame(animation);}animation=null;}return init();};Pace.restart=function(){Pace.trigger('restart');Pace.stop();return Pace.start();};Pace.go=function(){var start;Pace.running=true;bar.render();start=now();cancelAnimation=false;return animation=runAnimation(function(frameTime,enqueueNextFrame){var avg,count,done,element,elements,i,j,remaining,scaler,scalerList,sum,_j,_k,_len1,_len2,_ref2;remaining=100-bar.progress;count=sum=0;done=true;for(i=_j=0,_len1=sources.length;_j<_len1;i=++_j){source=sources[i];scalerList=scalers[i]!=null?scalers[i]:scalers[i]=[];elements=(_ref2=source.elements)!=null?_ref2:[source];for(j=_k=0,_len2=elements.length;_k<_len2;j=++_k){element=elements[j];scaler=scalerList[j]!=null?scalerList[j]:scalerList[j]=new Scaler(element);done&=scaler.done;if(scaler.done){continue;}count++;sum+=scaler.tick(frameTime);}}avg=sum/count;bar.update(uniScaler.tick(frameTime,avg));if(bar.done()||done||cancelAnimation){bar.update(100);Pace.trigger('done');return setTimeout(function(){bar.finish();Pace.running=false;return Pace.trigger('hide');},Math.max(options.ghostTime,Math.max(options.minTime-(now()-start),0)));}else{return enqueueNextFrame();}});};Pace.start=function(_options){_extend(options,_options);Pace.running=true;try{bar.render();}catch(_error){NoTargetError=_error;}if(!document.querySelector('.pace')){return setTimeout(Pace.start,50);}else{Pace.trigger('start');return Pace.go();}};if(typeof define==='function'&&define.amd){define(function(){return Pace;});}else if((typeof exports==="undefined"?"undefined":_typeof2(exports))==='object'){module.exports=Pace;}else{if(options.startOnPageLoad){Pace.start();}}}).call(this);/*!
 * perfect-scrollbar v1.3.0
 * (c) 2017 Hyunje Jun
 * @license MIT
 */(function(global,factory){(typeof exports==="undefined"?"undefined":_typeof2(exports))==='object'&&typeof module!=='undefined'?module.exports=factory():typeof define==='function'&&define.amd?define(factory):global.PerfectScrollbar=factory();})(this,function(){'use strict';function get(element){return getComputedStyle(element);}function set(element,obj){for(var key in obj){var val=obj[key];if(typeof val==='number'){val=val+"px";}element.style[key]=val;}return element;}function div(className){var div=document.createElement('div');div.className=className;return div;}var elMatches=typeof Element!=='undefined'&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.msMatchesSelector);function matches(element,query){if(!elMatches){throw new Error('No element matching method supported');}return elMatches.call(element,query);}function remove(element){if(element.remove){element.remove();}else{if(element.parentNode){element.parentNode.removeChild(element);}}}function queryChildren(element,selector){return Array.prototype.filter.call(element.children,function(child){return matches(child,selector);});}var cls={main:'ps',element:{thumb:function thumb(x){return"ps__thumb-"+x;},rail:function rail(x){return"ps__rail-"+x;},consuming:'ps__child--consume'},state:{focus:'ps--focus',active:function active(x){return"ps--active-"+x;},scrolling:function scrolling(x){return"ps--scrolling-"+x;}}};/*
 * Helper methods
 */var scrollingClassTimeout={x:null,y:null};function addScrollingClass(i,x){var classList=i.element.classList;var className=cls.state.scrolling(x);if(classList.contains(className)){clearTimeout(scrollingClassTimeout[x]);}else{classList.add(className);}}function removeScrollingClass(i,x){scrollingClassTimeout[x]=setTimeout(function(){return i.isAlive&&i.element.classList.remove(cls.state.scrolling(x));},i.settings.scrollingThreshold);}function setScrollingClassInstantly(i,x){addScrollingClass(i,x);removeScrollingClass(i,x);}var EventElement=function EventElement(element){this.element=element;this.handlers={};};var prototypeAccessors={isEmpty:{configurable:true}};EventElement.prototype.bind=function bind(eventName,handler){if(typeof this.handlers[eventName]==='undefined'){this.handlers[eventName]=[];}this.handlers[eventName].push(handler);this.element.addEventListener(eventName,handler,false);};EventElement.prototype.unbind=function unbind(eventName,target){var this$1=this;this.handlers[eventName]=this.handlers[eventName].filter(function(handler){if(target&&handler!==target){return true;}this$1.element.removeEventListener(eventName,handler,false);return false;});};EventElement.prototype.unbindAll=function unbindAll(){var this$1=this;for(var name in this$1.handlers){this$1.unbind(name);}};prototypeAccessors.isEmpty.get=function(){var this$1=this;return Object.keys(this.handlers).every(function(key){return this$1.handlers[key].length===0;});};Object.defineProperties(EventElement.prototype,prototypeAccessors);var EventManager=function EventManager(){this.eventElements=[];};EventManager.prototype.eventElement=function eventElement(element){var ee=this.eventElements.filter(function(ee){return ee.element===element;})[0];if(!ee){ee=new EventElement(element);this.eventElements.push(ee);}return ee;};EventManager.prototype.bind=function bind(element,eventName,handler){this.eventElement(element).bind(eventName,handler);};EventManager.prototype.unbind=function unbind(element,eventName,handler){var ee=this.eventElement(element);ee.unbind(eventName,handler);if(ee.isEmpty){// remove
this.eventElements.splice(this.eventElements.indexOf(ee),1);}};EventManager.prototype.unbindAll=function unbindAll(){this.eventElements.forEach(function(e){return e.unbindAll();});this.eventElements=[];};EventManager.prototype.once=function once(element,eventName,handler){var ee=this.eventElement(element);var onceHandler=function onceHandler(evt){ee.unbind(eventName,onceHandler);handler(evt);};ee.bind(eventName,onceHandler);};function createEvent(name){if(typeof window.CustomEvent==='function'){return new CustomEvent(name);}else{var evt=document.createEvent('CustomEvent');evt.initCustomEvent(name,false,false,undefined);return evt;}}var processScrollDiff=function processScrollDiff(i,axis,diff,useScrollingClass,forceFireReachEvent){if(useScrollingClass===void 0)useScrollingClass=true;if(forceFireReachEvent===void 0)forceFireReachEvent=false;var fields;if(axis==='top'){fields=['contentHeight','containerHeight','scrollTop','y','up','down'];}else if(axis==='left'){fields=['contentWidth','containerWidth','scrollLeft','x','left','right'];}else{throw new Error('A proper axis should be provided');}processScrollDiff$1(i,diff,fields,useScrollingClass,forceFireReachEvent);};function processScrollDiff$1(i,diff,ref,useScrollingClass,forceFireReachEvent){var contentHeight=ref[0];var containerHeight=ref[1];var scrollTop=ref[2];var y=ref[3];var up=ref[4];var down=ref[5];if(useScrollingClass===void 0)useScrollingClass=true;if(forceFireReachEvent===void 0)forceFireReachEvent=false;var element=i.element;// reset reach
i.reach[y]=null;// 1 for subpixel rounding
if(element[scrollTop]<1){i.reach[y]='start';}// 1 for subpixel rounding
if(element[scrollTop]>i[contentHeight]-i[containerHeight]-1){i.reach[y]='end';}if(diff){element.dispatchEvent(createEvent("ps-scroll-"+y));if(diff<0){element.dispatchEvent(createEvent("ps-scroll-"+up));}else if(diff>0){element.dispatchEvent(createEvent("ps-scroll-"+down));}if(useScrollingClass){setScrollingClassInstantly(i,y);}}if(i.reach[y]&&(diff||forceFireReachEvent)){element.dispatchEvent(createEvent("ps-"+y+"-reach-"+i.reach[y]));}}function toInt(x){return parseInt(x,10)||0;}function isEditable(el){return matches(el,'input,[contenteditable]')||matches(el,'select,[contenteditable]')||matches(el,'textarea,[contenteditable]')||matches(el,'button,[contenteditable]');}function outerWidth(element){var styles=get(element);return toInt(styles.width)+toInt(styles.paddingLeft)+toInt(styles.paddingRight)+toInt(styles.borderLeftWidth)+toInt(styles.borderRightWidth);}var env={isWebKit:typeof document!=='undefined'&&'WebkitAppearance'in document.documentElement.style,supportsTouch:typeof window!=='undefined'&&('ontouchstart'in window||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:typeof navigator!=='undefined'&&navigator.msMaxTouchPoints,isChrome:typeof navigator!=='undefined'&&/Chrome/i.test(navigator&&navigator.userAgent)};var updateGeometry=function updateGeometry(i){var element=i.element;i.containerWidth=element.clientWidth;i.containerHeight=element.clientHeight;i.contentWidth=element.scrollWidth;i.contentHeight=element.scrollHeight;if(!element.contains(i.scrollbarXRail)){// clean up and append
queryChildren(element,cls.element.rail('x')).forEach(function(el){return remove(el);});element.appendChild(i.scrollbarXRail);}if(!element.contains(i.scrollbarYRail)){// clean up and append
queryChildren(element,cls.element.rail('y')).forEach(function(el){return remove(el);});element.appendChild(i.scrollbarYRail);}if(!i.settings.suppressScrollX&&i.containerWidth+i.settings.scrollXMarginOffset<i.contentWidth){i.scrollbarXActive=true;i.railXWidth=i.containerWidth-i.railXMarginWidth;i.railXRatio=i.containerWidth/i.railXWidth;i.scrollbarXWidth=getThumbSize(i,toInt(i.railXWidth*i.containerWidth/i.contentWidth));i.scrollbarXLeft=toInt((i.negativeScrollAdjustment+element.scrollLeft)*(i.railXWidth-i.scrollbarXWidth)/(i.contentWidth-i.containerWidth));}else{i.scrollbarXActive=false;}if(!i.settings.suppressScrollY&&i.containerHeight+i.settings.scrollYMarginOffset<i.contentHeight){i.scrollbarYActive=true;i.railYHeight=i.containerHeight-i.railYMarginHeight;i.railYRatio=i.containerHeight/i.railYHeight;i.scrollbarYHeight=getThumbSize(i,toInt(i.railYHeight*i.containerHeight/i.contentHeight));i.scrollbarYTop=toInt(element.scrollTop*(i.railYHeight-i.scrollbarYHeight)/(i.contentHeight-i.containerHeight));}else{i.scrollbarYActive=false;}if(i.scrollbarXLeft>=i.railXWidth-i.scrollbarXWidth){i.scrollbarXLeft=i.railXWidth-i.scrollbarXWidth;}if(i.scrollbarYTop>=i.railYHeight-i.scrollbarYHeight){i.scrollbarYTop=i.railYHeight-i.scrollbarYHeight;}updateCss(element,i);if(i.scrollbarXActive){element.classList.add(cls.state.active('x'));}else{element.classList.remove(cls.state.active('x'));i.scrollbarXWidth=0;i.scrollbarXLeft=0;element.scrollLeft=0;}if(i.scrollbarYActive){element.classList.add(cls.state.active('y'));}else{element.classList.remove(cls.state.active('y'));i.scrollbarYHeight=0;i.scrollbarYTop=0;element.scrollTop=0;}};function getThumbSize(i,thumbSize){if(i.settings.minScrollbarLength){thumbSize=Math.max(thumbSize,i.settings.minScrollbarLength);}if(i.settings.maxScrollbarLength){thumbSize=Math.min(thumbSize,i.settings.maxScrollbarLength);}return thumbSize;}function updateCss(element,i){var xRailOffset={width:i.railXWidth};if(i.isRtl){xRailOffset.left=i.negativeScrollAdjustment+element.scrollLeft+i.containerWidth-i.contentWidth;}else{xRailOffset.left=element.scrollLeft;}if(i.isScrollbarXUsingBottom){xRailOffset.bottom=i.scrollbarXBottom-element.scrollTop;}else{xRailOffset.top=i.scrollbarXTop+element.scrollTop;}set(i.scrollbarXRail,xRailOffset);var yRailOffset={top:element.scrollTop,height:i.railYHeight};if(i.isScrollbarYUsingRight){if(i.isRtl){yRailOffset.right=i.contentWidth-(i.negativeScrollAdjustment+element.scrollLeft)-i.scrollbarYRight-i.scrollbarYOuterWidth;}else{yRailOffset.right=i.scrollbarYRight-element.scrollLeft;}}else{if(i.isRtl){yRailOffset.left=i.negativeScrollAdjustment+element.scrollLeft+i.containerWidth*2-i.contentWidth-i.scrollbarYLeft-i.scrollbarYOuterWidth;}else{yRailOffset.left=i.scrollbarYLeft+element.scrollLeft;}}set(i.scrollbarYRail,yRailOffset);set(i.scrollbarX,{left:i.scrollbarXLeft,width:i.scrollbarXWidth-i.railBorderXWidth});set(i.scrollbarY,{top:i.scrollbarYTop,height:i.scrollbarYHeight-i.railBorderYWidth});}var clickRail=function clickRail(i){i.event.bind(i.scrollbarY,'mousedown',function(e){return e.stopPropagation();});i.event.bind(i.scrollbarYRail,'mousedown',function(e){var positionTop=e.pageY-window.pageYOffset-i.scrollbarYRail.getBoundingClientRect().top;var direction=positionTop>i.scrollbarYTop?1:-1;i.element.scrollTop+=direction*i.containerHeight;updateGeometry(i);e.stopPropagation();});i.event.bind(i.scrollbarX,'mousedown',function(e){return e.stopPropagation();});i.event.bind(i.scrollbarXRail,'mousedown',function(e){var positionLeft=e.pageX-window.pageXOffset-i.scrollbarXRail.getBoundingClientRect().left;var direction=positionLeft>i.scrollbarXLeft?1:-1;i.element.scrollLeft+=direction*i.containerWidth;updateGeometry(i);e.stopPropagation();});};var dragThumb=function dragThumb(i){bindMouseScrollHandler(i,['containerWidth','contentWidth','pageX','railXWidth','scrollbarX','scrollbarXWidth','scrollLeft','x']);bindMouseScrollHandler(i,['containerHeight','contentHeight','pageY','railYHeight','scrollbarY','scrollbarYHeight','scrollTop','y']);};function bindMouseScrollHandler(i,ref){var containerHeight=ref[0];var contentHeight=ref[1];var pageY=ref[2];var railYHeight=ref[3];var scrollbarY=ref[4];var scrollbarYHeight=ref[5];var scrollTop=ref[6];var y=ref[7];var element=i.element;var startingScrollTop=null;var startingMousePageY=null;var scrollBy=null;function mouseMoveHandler(e){element[scrollTop]=startingScrollTop+scrollBy*(e[pageY]-startingMousePageY);addScrollingClass(i,y);updateGeometry(i);e.stopPropagation();e.preventDefault();}function mouseUpHandler(){removeScrollingClass(i,y);i.event.unbind(i.ownerDocument,'mousemove',mouseMoveHandler);}i.event.bind(i[scrollbarY],'mousedown',function(e){startingScrollTop=element[scrollTop];startingMousePageY=e[pageY];scrollBy=(i[contentHeight]-i[containerHeight])/(i[railYHeight]-i[scrollbarYHeight]);i.event.bind(i.ownerDocument,'mousemove',mouseMoveHandler);i.event.once(i.ownerDocument,'mouseup',mouseUpHandler);e.stopPropagation();e.preventDefault();});}var keyboard=function keyboard(i){var element=i.element;var elementHovered=function elementHovered(){return matches(element,':hover');};var scrollbarFocused=function scrollbarFocused(){return matches(i.scrollbarX,':focus')||matches(i.scrollbarY,':focus');};function shouldPreventDefault(deltaX,deltaY){var scrollTop=element.scrollTop;if(deltaX===0){if(!i.scrollbarYActive){return false;}if(scrollTop===0&&deltaY>0||scrollTop>=i.contentHeight-i.containerHeight&&deltaY<0){return!i.settings.wheelPropagation;}}var scrollLeft=element.scrollLeft;if(deltaY===0){if(!i.scrollbarXActive){return false;}if(scrollLeft===0&&deltaX<0||scrollLeft>=i.contentWidth-i.containerWidth&&deltaX>0){return!i.settings.wheelPropagation;}}return true;}i.event.bind(i.ownerDocument,'keydown',function(e){if(e.isDefaultPrevented&&e.isDefaultPrevented()||e.defaultPrevented){return;}if(!elementHovered()&&!scrollbarFocused()){return;}var activeElement=document.activeElement?document.activeElement:i.ownerDocument.activeElement;if(activeElement){if(activeElement.tagName==='IFRAME'){activeElement=activeElement.contentDocument.activeElement;}else{// go deeper if element is a webcomponent
while(activeElement.shadowRoot){activeElement=activeElement.shadowRoot.activeElement;}}if(isEditable(activeElement)){return;}}var deltaX=0;var deltaY=0;switch(e.which){case 37:// left
if(e.metaKey){deltaX=-i.contentWidth;}else if(e.altKey){deltaX=-i.containerWidth;}else{deltaX=-30;}break;case 38:// up
if(e.metaKey){deltaY=i.contentHeight;}else if(e.altKey){deltaY=i.containerHeight;}else{deltaY=30;}break;case 39:// right
if(e.metaKey){deltaX=i.contentWidth;}else if(e.altKey){deltaX=i.containerWidth;}else{deltaX=30;}break;case 40:// down
if(e.metaKey){deltaY=-i.contentHeight;}else if(e.altKey){deltaY=-i.containerHeight;}else{deltaY=-30;}break;case 32:// space bar
if(e.shiftKey){deltaY=i.containerHeight;}else{deltaY=-i.containerHeight;}break;case 33:// page up
deltaY=i.containerHeight;break;case 34:// page down
deltaY=-i.containerHeight;break;case 36:// home
deltaY=i.contentHeight;break;case 35:// end
deltaY=-i.contentHeight;break;default:return;}if(i.settings.suppressScrollX&&deltaX!==0){return;}if(i.settings.suppressScrollY&&deltaY!==0){return;}element.scrollTop-=deltaY;element.scrollLeft+=deltaX;updateGeometry(i);if(shouldPreventDefault(deltaX,deltaY)){e.preventDefault();}});};var wheel=function wheel(i){var element=i.element;function shouldPreventDefault(deltaX,deltaY){var isTop=element.scrollTop===0;var isBottom=element.scrollTop+element.offsetHeight===element.scrollHeight;var isLeft=element.scrollLeft===0;var isRight=element.scrollLeft+element.offsetWidth===element.offsetWidth;var hitsBound;// pick axis with primary direction
if(Math.abs(deltaY)>Math.abs(deltaX)){hitsBound=isTop||isBottom;}else{hitsBound=isLeft||isRight;}return hitsBound?!i.settings.wheelPropagation:true;}function getDeltaFromEvent(e){var deltaX=e.deltaX;var deltaY=-1*e.deltaY;if(typeof deltaX==='undefined'||typeof deltaY==='undefined'){// OS X Safari
deltaX=-1*e.wheelDeltaX/6;deltaY=e.wheelDeltaY/6;}if(e.deltaMode&&e.deltaMode===1){// Firefox in deltaMode 1: Line scrolling
deltaX*=10;deltaY*=10;}if(deltaX!==deltaX&&deltaY!==deltaY/* NaN checks */){// IE in some mouse drivers
deltaX=0;deltaY=e.wheelDelta;}if(e.shiftKey){// reverse axis with shift key
return[-deltaY,-deltaX];}return[deltaX,deltaY];}function shouldBeConsumedByChild(target,deltaX,deltaY){// FIXME: this is a workaround for <select> issue in FF and IE #571
if(!env.isWebKit&&element.querySelector('select:focus')){return true;}if(!element.contains(target)){return false;}var cursor=target;while(cursor&&cursor!==element){if(cursor.classList.contains(cls.element.consuming)){return true;}var style=get(cursor);var overflow=[style.overflow,style.overflowX,style.overflowY].join('');// if scrollable
if(overflow.match(/(scroll|auto)/)){var maxScrollTop=cursor.scrollHeight-cursor.clientHeight;if(maxScrollTop>0){if(!(cursor.scrollTop===0&&deltaY>0)&&!(cursor.scrollTop===maxScrollTop&&deltaY<0)){return true;}}var maxScrollLeft=cursor.scrollLeft-cursor.clientWidth;if(maxScrollLeft>0){if(!(cursor.scrollLeft===0&&deltaX<0)&&!(cursor.scrollLeft===maxScrollLeft&&deltaX>0)){return true;}}}cursor=cursor.parentNode;}return false;}function mousewheelHandler(e){var ref=getDeltaFromEvent(e);var deltaX=ref[0];var deltaY=ref[1];if(shouldBeConsumedByChild(e.target,deltaX,deltaY)){return;}var shouldPrevent=false;if(!i.settings.useBothWheelAxes){// deltaX will only be used for horizontal scrolling and deltaY will
// only be used for vertical scrolling - this is the default
element.scrollTop-=deltaY*i.settings.wheelSpeed;element.scrollLeft+=deltaX*i.settings.wheelSpeed;}else if(i.scrollbarYActive&&!i.scrollbarXActive){// only vertical scrollbar is active and useBothWheelAxes option is
// active, so let's scroll vertical bar using both mouse wheel axes
if(deltaY){element.scrollTop-=deltaY*i.settings.wheelSpeed;}else{element.scrollTop+=deltaX*i.settings.wheelSpeed;}shouldPrevent=true;}else if(i.scrollbarXActive&&!i.scrollbarYActive){// useBothWheelAxes and only horizontal bar is active, so use both
// wheel axes for horizontal bar
if(deltaX){element.scrollLeft+=deltaX*i.settings.wheelSpeed;}else{element.scrollLeft-=deltaY*i.settings.wheelSpeed;}shouldPrevent=true;}updateGeometry(i);shouldPrevent=shouldPrevent||shouldPreventDefault(deltaX,deltaY);if(shouldPrevent&&!e.ctrlKey){e.stopPropagation();e.preventDefault();}}if(typeof window.onwheel!=='undefined'){i.event.bind(element,'wheel',mousewheelHandler);}else if(typeof window.onmousewheel!=='undefined'){i.event.bind(element,'mousewheel',mousewheelHandler);}};var touch=function touch(i){if(!env.supportsTouch&&!env.supportsIePointer){return;}var element=i.element;function shouldPrevent(deltaX,deltaY){var scrollTop=element.scrollTop;var scrollLeft=element.scrollLeft;var magnitudeX=Math.abs(deltaX);var magnitudeY=Math.abs(deltaY);if(magnitudeY>magnitudeX){// user is perhaps trying to swipe up/down the page
if(deltaY<0&&scrollTop===i.contentHeight-i.containerHeight||deltaY>0&&scrollTop===0){// set prevent for mobile Chrome refresh
return window.scrollY===0&&deltaY>0&&env.isChrome;}}else if(magnitudeX>magnitudeY){// user is perhaps trying to swipe left/right across the page
if(deltaX<0&&scrollLeft===i.contentWidth-i.containerWidth||deltaX>0&&scrollLeft===0){return true;}}return true;}function applyTouchMove(differenceX,differenceY){element.scrollTop-=differenceY;element.scrollLeft-=differenceX;updateGeometry(i);}var startOffset={};var startTime=0;var speed={};var easingLoop=null;function getTouch(e){if(e.targetTouches){return e.targetTouches[0];}else{// Maybe IE pointer
return e;}}function shouldHandle(e){if(e.pointerType&&e.pointerType==='pen'&&e.buttons===0){return false;}if(e.targetTouches&&e.targetTouches.length===1){return true;}if(e.pointerType&&e.pointerType!=='mouse'&&e.pointerType!==e.MSPOINTER_TYPE_MOUSE){return true;}return false;}function touchStart(e){if(!shouldHandle(e)){return;}var touch=getTouch(e);startOffset.pageX=touch.pageX;startOffset.pageY=touch.pageY;startTime=new Date().getTime();if(easingLoop!==null){clearInterval(easingLoop);}}function shouldBeConsumedByChild(target,deltaX,deltaY){if(!element.contains(target)){return false;}var cursor=target;while(cursor&&cursor!==element){if(cursor.classList.contains(cls.element.consuming)){return true;}var style=get(cursor);var overflow=[style.overflow,style.overflowX,style.overflowY].join('');// if scrollable
if(overflow.match(/(scroll|auto)/)){var maxScrollTop=cursor.scrollHeight-cursor.clientHeight;if(maxScrollTop>0){if(!(cursor.scrollTop===0&&deltaY>0)&&!(cursor.scrollTop===maxScrollTop&&deltaY<0)){return true;}}var maxScrollLeft=cursor.scrollLeft-cursor.clientWidth;if(maxScrollLeft>0){if(!(cursor.scrollLeft===0&&deltaX<0)&&!(cursor.scrollLeft===maxScrollLeft&&deltaX>0)){return true;}}}cursor=cursor.parentNode;}return false;}function touchMove(e){if(shouldHandle(e)){var touch=getTouch(e);var currentOffset={pageX:touch.pageX,pageY:touch.pageY};var differenceX=currentOffset.pageX-startOffset.pageX;var differenceY=currentOffset.pageY-startOffset.pageY;if(shouldBeConsumedByChild(e.target,differenceX,differenceY)){return;}applyTouchMove(differenceX,differenceY);startOffset=currentOffset;var currentTime=new Date().getTime();var timeGap=currentTime-startTime;if(timeGap>0){speed.x=differenceX/timeGap;speed.y=differenceY/timeGap;startTime=currentTime;}if(shouldPrevent(differenceX,differenceY)){e.preventDefault();}}}function touchEnd(){if(i.settings.swipeEasing){clearInterval(easingLoop);easingLoop=setInterval(function(){if(i.isInitialized){clearInterval(easingLoop);return;}if(!speed.x&&!speed.y){clearInterval(easingLoop);return;}if(Math.abs(speed.x)<0.01&&Math.abs(speed.y)<0.01){clearInterval(easingLoop);return;}applyTouchMove(speed.x*30,speed.y*30);speed.x*=0.8;speed.y*=0.8;},10);}}if(env.supportsTouch){i.event.bind(element,'touchstart',touchStart);i.event.bind(element,'touchmove',touchMove);i.event.bind(element,'touchend',touchEnd);}else if(env.supportsIePointer){if(window.PointerEvent){i.event.bind(element,'pointerdown',touchStart);i.event.bind(element,'pointermove',touchMove);i.event.bind(element,'pointerup',touchEnd);}else if(window.MSPointerEvent){i.event.bind(element,'MSPointerDown',touchStart);i.event.bind(element,'MSPointerMove',touchMove);i.event.bind(element,'MSPointerUp',touchEnd);}}};var defaultSettings=function defaultSettings(){return{handlers:['click-rail','drag-thumb','keyboard','wheel','touch'],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1000,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:false,suppressScrollY:false,swipeEasing:true,useBothWheelAxes:false,wheelPropagation:false,wheelSpeed:1};};var handlers={'click-rail':clickRail,'drag-thumb':dragThumb,keyboard:keyboard,wheel:wheel,touch:touch};var PerfectScrollbar=function PerfectScrollbar(element,userSettings){var this$1=this;if(userSettings===void 0)userSettings={};if(typeof element==='string'){element=document.querySelector(element);}if(!element||!element.nodeName){throw new Error('no element is specified to initialize PerfectScrollbar');}this.element=element;element.classList.add(cls.main);this.settings=defaultSettings();for(var key in userSettings){this$1.settings[key]=userSettings[key];}this.containerWidth=null;this.containerHeight=null;this.contentWidth=null;this.contentHeight=null;var focus=function focus(){return element.classList.add(cls.state.focus);};var blur=function blur(){return element.classList.remove(cls.state.focus);};this.isRtl=get(element).direction==='rtl';this.isNegativeScroll=function(){var originalScrollLeft=element.scrollLeft;var result=null;element.scrollLeft=-1;result=element.scrollLeft<0;element.scrollLeft=originalScrollLeft;return result;}();this.negativeScrollAdjustment=this.isNegativeScroll?element.scrollWidth-element.clientWidth:0;this.event=new EventManager();this.ownerDocument=element.ownerDocument||document;this.scrollbarXRail=div(cls.element.rail('x'));element.appendChild(this.scrollbarXRail);this.scrollbarX=div(cls.element.thumb('x'));this.scrollbarXRail.appendChild(this.scrollbarX);this.scrollbarX.setAttribute('tabindex',0);this.event.bind(this.scrollbarX,'focus',focus);this.event.bind(this.scrollbarX,'blur',blur);this.scrollbarXActive=null;this.scrollbarXWidth=null;this.scrollbarXLeft=null;var railXStyle=get(this.scrollbarXRail);this.scrollbarXBottom=parseInt(railXStyle.bottom,10);if(isNaN(this.scrollbarXBottom)){this.isScrollbarXUsingBottom=false;this.scrollbarXTop=toInt(railXStyle.top);}else{this.isScrollbarXUsingBottom=true;}this.railBorderXWidth=toInt(railXStyle.borderLeftWidth)+toInt(railXStyle.borderRightWidth);// Set rail to display:block to calculate margins
set(this.scrollbarXRail,{display:'block'});this.railXMarginWidth=toInt(railXStyle.marginLeft)+toInt(railXStyle.marginRight);set(this.scrollbarXRail,{display:''});this.railXWidth=null;this.railXRatio=null;this.scrollbarYRail=div(cls.element.rail('y'));element.appendChild(this.scrollbarYRail);this.scrollbarY=div(cls.element.thumb('y'));this.scrollbarYRail.appendChild(this.scrollbarY);this.scrollbarY.setAttribute('tabindex',0);this.event.bind(this.scrollbarY,'focus',focus);this.event.bind(this.scrollbarY,'blur',blur);this.scrollbarYActive=null;this.scrollbarYHeight=null;this.scrollbarYTop=null;var railYStyle=get(this.scrollbarYRail);this.scrollbarYRight=parseInt(railYStyle.right,10);if(isNaN(this.scrollbarYRight)){this.isScrollbarYUsingRight=false;this.scrollbarYLeft=toInt(railYStyle.left);}else{this.isScrollbarYUsingRight=true;}this.scrollbarYOuterWidth=this.isRtl?outerWidth(this.scrollbarY):null;this.railBorderYWidth=toInt(railYStyle.borderTopWidth)+toInt(railYStyle.borderBottomWidth);set(this.scrollbarYRail,{display:'block'});this.railYMarginHeight=toInt(railYStyle.marginTop)+toInt(railYStyle.marginBottom);set(this.scrollbarYRail,{display:''});this.railYHeight=null;this.railYRatio=null;this.reach={x:element.scrollLeft<=0?'start':element.scrollLeft>=this.contentWidth-this.containerWidth?'end':null,y:element.scrollTop<=0?'start':element.scrollTop>=this.contentHeight-this.containerHeight?'end':null};this.isAlive=true;this.settings.handlers.forEach(function(handlerName){return handlers[handlerName](this$1);});this.lastScrollTop=element.scrollTop;// for onScroll only
this.lastScrollLeft=element.scrollLeft;// for onScroll only
this.event.bind(this.element,'scroll',function(e){return this$1.onScroll(e);});updateGeometry(this);};PerfectScrollbar.prototype.update=function update(){if(!this.isAlive){return;}// Recalcuate negative scrollLeft adjustment
this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0;// Recalculate rail margins
set(this.scrollbarXRail,{display:'block'});set(this.scrollbarYRail,{display:'block'});this.railXMarginWidth=toInt(get(this.scrollbarXRail).marginLeft)+toInt(get(this.scrollbarXRail).marginRight);this.railYMarginHeight=toInt(get(this.scrollbarYRail).marginTop)+toInt(get(this.scrollbarYRail).marginBottom);// Hide scrollbars not to affect scrollWidth and scrollHeight
set(this.scrollbarXRail,{display:'none'});set(this.scrollbarYRail,{display:'none'});updateGeometry(this);processScrollDiff(this,'top',0,false,true);processScrollDiff(this,'left',0,false,true);set(this.scrollbarXRail,{display:''});set(this.scrollbarYRail,{display:''});};PerfectScrollbar.prototype.onScroll=function onScroll(e){if(!this.isAlive){return;}updateGeometry(this);processScrollDiff(this,'top',this.element.scrollTop-this.lastScrollTop);processScrollDiff(this,'left',this.element.scrollLeft-this.lastScrollLeft);this.lastScrollTop=this.element.scrollTop;this.lastScrollLeft=this.element.scrollLeft;};PerfectScrollbar.prototype.destroy=function destroy(){if(!this.isAlive){return;}this.event.unbindAll();remove(this.scrollbarX);remove(this.scrollbarY);remove(this.scrollbarXRail);remove(this.scrollbarYRail);this.removePsClasses();// unset elements
this.element=null;this.scrollbarX=null;this.scrollbarY=null;this.scrollbarXRail=null;this.scrollbarYRail=null;this.isAlive=false;};PerfectScrollbar.prototype.removePsClasses=function removePsClasses(){this.element.className=this.element.className.split(' ').filter(function(name){return!name.match(/^ps([-_].+|)$/);}).join(' ');};return PerfectScrollbar;});/*!
  * CoreUI v2.0.4 (https://coreui.io)
  * Copyright 2018 Łukasz Holeczek
  * Licensed under MIT (https://coreui.io)
  */(function(global,factory){(typeof exports==="undefined"?"undefined":_typeof2(exports))==='object'&&typeof module!=='undefined'?factory(exports,require('jquery'),require('perfect-scrollbar')):typeof define==='function'&&define.amd?define(['exports','jquery','perfect-scrollbar'],factory):factory(global.coreui={},global.jQuery,global.PerfectScrollbar);})(this,function(exports,$,PerfectScrollbar){'use strict';$=$&&$.hasOwnProperty('default')?$['default']:$;PerfectScrollbar=PerfectScrollbar&&PerfectScrollbar.hasOwnProperty('default')?PerfectScrollbar['default']:PerfectScrollbar;function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
   * --------------------------------------------------------------------------
   * CoreUI (v2.0.4): ajax-load.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */var AjaxLoad=function($$$1){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */var NAME='ajaxLoad';var VERSION='2.0.4';var DATA_KEY='coreui.ajaxLoad';var JQUERY_NO_CONFLICT=$$$1.fn[NAME];var ClassName={ACTIVE:'active',NAV_PILLS:'nav-pills',NAV_TABS:'nav-tabs',OPEN:'open',VIEW_SCRIPT:'view-script'};var Event={CLICK:'click'};var Selector={HEAD:'head',NAV_DROPDOWN:'.navbar-nav .nav-dropdown',NAV_LINK:'.navbar-nav .nav-link',NAV_ITEM:'.navbar-nav .nav-item',VIEW_SCRIPT:'.view-script'};var Default={defaultPage:'main.html',errorPage:'404.html',subpagesDirectory:'/'};var AjaxLoad=/*#__PURE__*/function(){function AjaxLoad(element,config){this._config=this._getConfig(config);this._element=element;var url=location.hash.replace(/^#/,'');if(url!==''){this.setUpUrl(url);}else{this.setUpUrl(this._config.defaultPage);}this._addEventListeners();}// Getters
var _proto=AjaxLoad.prototype;// Public
_proto.loadPage=function loadPage(url){var element=this._element;var config=this._config;var loadScripts=function loadScripts(src,element){if(element===void 0){element=0;}var script=document.createElement('script');script.type='text/javascript';script.src=src[element];script.className=ClassName.VIEW_SCRIPT;// eslint-disable-next-line no-multi-assign
script.onload=script.onreadystatechange=function(){if(!this.readyState||this.readyState==='complete'){if(src.length>element+1){loadScripts(src,element+1);}}};var body=document.getElementsByTagName('body')[0];body.appendChild(script);};$$$1.ajax({type:'GET',url:config.subpagesDirectory+url,dataType:'html',beforeSend:function beforeSend(){$$$1(Selector.VIEW_SCRIPT).remove();},success:function success(result){var wrapper=document.createElement('div');wrapper.innerHTML=result;var scripts=Array.from(wrapper.querySelectorAll('script')).map(function(script){return script.attributes.getNamedItem('src').nodeValue;});wrapper.querySelectorAll('script').forEach(function(script){return script.parentNode.removeChild(script);});$$$1('body').animate({scrollTop:0},0);$$$1(element).html(wrapper);if(scripts.length){loadScripts(scripts);}window.location.hash=url;},error:function error(){window.location.href=config.errorPage;}});};_proto.setUpUrl=function setUpUrl(url){$$$1(Selector.NAV_LINK).removeClass(ClassName.ACTIVE);$$$1(Selector.NAV_DROPDOWN).removeClass(ClassName.OPEN);$$$1(Selector.NAV_DROPDOWN+":has(a[href=\""+url.replace(/^\//,'').split('?')[0]+"\"])").addClass(ClassName.OPEN);$$$1(Selector.NAV_ITEM+" a[href=\""+url.replace(/^\//,'').split('?')[0]+"\"]").addClass(ClassName.ACTIVE);this.loadPage(url);};_proto.loadBlank=function loadBlank(url){window.open(url);};_proto.loadTop=function loadTop(url){window.location=url;};// Private
_proto._getConfig=function _getConfig(config){config=Object.assign({},Default,config);return config;};_proto._addEventListeners=function _addEventListeners(){var _this=this;$$$1(document).on(Event.CLICK,Selector.NAV_LINK+"[href!=\"#\"]",function(event){event.preventDefault();event.stopPropagation();if(event.currentTarget.target==='_top'){_this.loadTop(event.currentTarget.href);}else if(event.currentTarget.target==='_blank'){_this.loadBlank(event.currentTarget.href);}else{_this.setUpUrl(event.currentTarget.getAttribute('href'));}});};// Static
AjaxLoad._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$$$1(this).data(DATA_KEY);var _config=(typeof config==="undefined"?"undefined":_typeof2(config))==='object'&&config;if(!data){data=new AjaxLoad(this,_config);$$$1(this).data(DATA_KEY,data);}});};_createClass(AjaxLoad,null,[{key:"VERSION",get:function get(){return VERSION;}},{key:"Default",get:function get(){return Default;}}]);return AjaxLoad;}();/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */$$$1.fn[NAME]=AjaxLoad._jQueryInterface;$$$1.fn[NAME].Constructor=AjaxLoad;$$$1.fn[NAME].noConflict=function(){$$$1.fn[NAME]=JQUERY_NO_CONFLICT;return AjaxLoad._jQueryInterface;};return AjaxLoad;}($);/**
   * --------------------------------------------------------------------------
   * CoreUI (v2.0.4): toggle-classes.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */var removeClasses=function removeClasses(classNames){return classNames.map(function(className){return document.body.classList.contains(className);}).indexOf(true)!==-1;};var toggleClasses=function toggleClasses(toggleClass,classNames){var breakpoint=classNames.indexOf(toggleClass);var newClassNames=classNames.slice(0,breakpoint+1);if(removeClasses(newClassNames)){newClassNames.map(function(className){return document.body.classList.remove(className);});}else{document.body.classList.add(toggleClass);}};/**
   * --------------------------------------------------------------------------
   * CoreUI (v2.0.4): aside-menu.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */var AsideMenu=function($$$1){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */var NAME='aside-menu';var VERSION='2.0.4';var DATA_KEY='coreui.aside-menu';var EVENT_KEY="."+DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$$$1.fn[NAME];var Event={CLICK:'click',LOAD_DATA_API:"load"+EVENT_KEY+DATA_API_KEY,TOGGLE:'toggle'};var Selector={BODY:'body',ASIDE_MENU:'.aside-menu',ASIDE_MENU_TOGGLER:'.aside-menu-toggler'};var ShowClassNames=['aside-menu-show','aside-menu-sm-show','aside-menu-md-show','aside-menu-lg-show','aside-menu-xl-show'];/**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */var AsideMenu=/*#__PURE__*/function(){function AsideMenu(element){this._element=element;this._addEventListeners();}// Getters
var _proto=AsideMenu.prototype;// Private
_proto._addEventListeners=function _addEventListeners(){$$$1(Selector.ASIDE_MENU_TOGGLER).on(Event.CLICK,function(event){event.preventDefault();event.stopPropagation();var toggle=event.currentTarget.dataset.toggle;toggleClasses(toggle,ShowClassNames);});};// Static
AsideMenu._jQueryInterface=function _jQueryInterface(){return this.each(function(){var $element=$$$1(this);var data=$element.data(DATA_KEY);if(!data){data=new AsideMenu(this);$element.data(DATA_KEY,data);}});};_createClass(AsideMenu,null,[{key:"VERSION",get:function get(){return VERSION;}}]);return AsideMenu;}();/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */$$$1(window).on(Event.LOAD_DATA_API,function(){var asideMenu=$$$1(Selector.ASIDE_MENU);AsideMenu._jQueryInterface.call(asideMenu);});/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */$$$1.fn[NAME]=AsideMenu._jQueryInterface;$$$1.fn[NAME].Constructor=AsideMenu;$$$1.fn[NAME].noConflict=function(){$$$1.fn[NAME]=JQUERY_NO_CONFLICT;return AsideMenu._jQueryInterface;};return AsideMenu;}($);/**
   * --------------------------------------------------------------------------
   * CoreUI (v2.0.4): sidebar.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */var Sidebar=function($$$1){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */var NAME='sidebar';var VERSION='2.0.4';var DATA_KEY='coreui.sidebar';var EVENT_KEY="."+DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$$$1.fn[NAME];var ClassName={ACTIVE:'active',BRAND_MINIMIZED:'brand-minimized',NAV_DROPDOWN_TOGGLE:'nav-dropdown-toggle',OPEN:'open',SIDEBAR_FIXED:'sidebar-fixed',SIDEBAR_MINIMIZED:'sidebar-minimized',SIDEBAR_OFF_CANVAS:'sidebar-off-canvas'};var Event={CLICK:'click',DESTROY:'destroy',INIT:'init',LOAD_DATA_API:"load"+EVENT_KEY+DATA_API_KEY,TOGGLE:'toggle'};var Selector={BODY:'body',BRAND_MINIMIZER:'.brand-minimizer',NAV_DROPDOWN_TOGGLE:'.nav-dropdown-toggle',NAV_DROPDOWN_ITEMS:'.nav-dropdown-items',NAV_LINK:'.nav-link',NAVIGATION_CONTAINER:'.navbar-nav',NAVIGATION:'.navbar-nav > .nav',SIDEBAR:'.sidebar',SIDEBAR_MINIMIZER:'.sidebar-minimizer',SIDEBAR_TOGGLER:'.sidebar-toggler'};var ShowClassNames=['sidebar-show','sidebar-sm-show','sidebar-md-show','sidebar-lg-show','sidebar-xl-show'];/**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */var Sidebar=/*#__PURE__*/function(){function Sidebar(element){this._element=element;this.perfectScrollbar(Event.INIT);this.setActiveLink();this._addEventListeners();}// Getters
var _proto=Sidebar.prototype;// Public
_proto.perfectScrollbar=function perfectScrollbar(event){if(typeof PerfectScrollbar!=='undefined'){var ps;if(event===Event.INIT&&!document.body.classList.contains(ClassName.SIDEBAR_MINIMIZED)){ps=new PerfectScrollbar(document.querySelector(Selector.NAVIGATION_CONTAINER),{suppressScrollX:true});}if(event===Event.DESTROY){ps=new PerfectScrollbar(document.querySelector(Selector.NAVIGATION_CONTAINER),{suppressScrollX:true});ps.destroy();ps=null;}if(event===Event.TOGGLE){if(document.body.classList.contains(ClassName.SIDEBAR_MINIMIZED)){ps=new PerfectScrollbar(document.querySelector(Selector.NAVIGATION_CONTAINER),{suppressScrollX:true});ps.destroy();ps=null;}else{ps=new PerfectScrollbar(document.querySelector(Selector.NAVIGATION_CONTAINER),{suppressScrollX:true});}}}};_proto.setActiveLink=function setActiveLink(){$$$1(Selector.NAVIGATION).find(Selector.NAV_LINK).each(function(key,value){var link=value;var cUrl=String(window.location).split('?')[0];if(cUrl.substr(cUrl.length-1)==='#'){cUrl=cUrl.slice(0,-1);}if($$$1($$$1(link))[0].href===cUrl){$$$1(link).addClass(ClassName.ACTIVE).parents(Selector.NAV_DROPDOWN_ITEMS).add(link).each(function(key,value){link=value;$$$1(link).parent().addClass(ClassName.OPEN);});}});};// Private
_proto._addEventListeners=function _addEventListeners(){var _this=this;$$$1(Selector.BRAND_MINIMIZER).on(Event.CLICK,function(event){event.preventDefault();event.stopPropagation();$$$1(Selector.BODY).toggleClass(ClassName.BRAND_MINIMIZED);});$$$1(Selector.NAV_DROPDOWN_TOGGLE).on(Event.CLICK,function(event){event.preventDefault();event.stopPropagation();var dropdown=event.target;$$$1(dropdown).parent().toggleClass(ClassName.OPEN);});$$$1(Selector.SIDEBAR_MINIMIZER).on(Event.CLICK,function(event){event.preventDefault();event.stopPropagation();$$$1(Selector.BODY).toggleClass(ClassName.SIDEBAR_MINIMIZED);_this.perfectScrollbar(Event.TOGGLE);});$$$1(Selector.SIDEBAR_TOGGLER).on(Event.CLICK,function(event){event.preventDefault();event.stopPropagation();var toggle=event.currentTarget.dataset.toggle;toggleClasses(toggle,ShowClassNames);});};// Static
Sidebar._jQueryInterface=function _jQueryInterface(){return this.each(function(){var $element=$$$1(this);var data=$element.data(DATA_KEY);if(!data){data=new Sidebar(this);$element.data(DATA_KEY,data);}});};_createClass(Sidebar,null,[{key:"VERSION",get:function get(){return VERSION;}}]);return Sidebar;}();/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */$$$1(window).on(Event.LOAD_DATA_API,function(){var sidebar=$$$1(Selector.SIDEBAR);Sidebar._jQueryInterface.call(sidebar);});/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */$$$1.fn[NAME]=Sidebar._jQueryInterface;$$$1.fn[NAME].Constructor=Sidebar;$$$1.fn[NAME].noConflict=function(){$$$1.fn[NAME]=JQUERY_NO_CONFLICT;return Sidebar._jQueryInterface;};return Sidebar;}($);/**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.0.4): get-style.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */var getCssCustomProperties=function getCssCustomProperties(){var cssCustomProperties={};var sheets=document.styleSheets;var cssText='';for(var i=sheets.length-1;i>-1;i--){var rules=sheets[i].cssRules;for(var j=rules.length-1;j>-1;j--){if(rules[j].selectorText==='.ie-custom-properties'){cssText=rules[j].cssText;break;}}if(cssText){break;}}cssText=cssText.substring(cssText.lastIndexOf('{')+1,cssText.lastIndexOf('}'));cssText.split(';').forEach(function(property){if(property){var name=property.split(': ')[0];var value=property.split(': ')[1];if(name&&value){cssCustomProperties["--"+name.trim()]=value.trim();}}});return cssCustomProperties;};var minIEVersion=10;var isIE1x=function isIE1x(){return Boolean(document.documentMode)&&document.documentMode>=minIEVersion;};var isCustomProperty=function isCustomProperty(property){return property.match(/^--.*/i);};var getStyle=function getStyle(property,element){if(element===void 0){element=document.body;}var style;if(isCustomProperty(property)&&isIE1x()){var cssCustomProperties=getCssCustomProperties();style=cssCustomProperties[property];}else{style=window.getComputedStyle(element,null).getPropertyValue(property).replace(/^\s/,'');}return style;};/**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.0.4): hex-to-rgb.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   *//* eslint-disable no-magic-numbers */var hexToRgb=function hexToRgb(color){if(typeof color==='undefined'){throw new Error('Hex color is not defined');}var hex=color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!hex){throw new Error(color+" is not a valid hex color");}var r;var g;var b;if(color.length===7){r=parseInt(color.substring(1,3),16);g=parseInt(color.substring(3,5),16);b=parseInt(color.substring(5,7),16);}else{r=parseInt(color.substring(1,2),16);g=parseInt(color.substring(2,3),16);b=parseInt(color.substring(3,5),16);}return"rgba("+r+", "+g+", "+b+")";};/**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.0.4): hex-to-rgba.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   *//* eslint-disable no-magic-numbers */var hexToRgba=function hexToRgba(color,opacity){if(opacity===void 0){opacity=100;}if(typeof color==='undefined'){throw new Error('Hex color is not defined');}var hex=color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!hex){throw new Error(color+" is not a valid hex color");}var r;var g;var b;if(color.length===7){r=parseInt(color.substring(1,3),16);g=parseInt(color.substring(3,5),16);b=parseInt(color.substring(5,7),16);}else{r=parseInt(color.substring(1,2),16);g=parseInt(color.substring(2,3),16);b=parseInt(color.substring(3,5),16);}return"rgba("+r+", "+g+", "+b+", "+opacity/100+")";};/**
   * --------------------------------------------------------------------------
   * CoreUI (v2.0.4): rgb-to-hex.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   *//* eslint-disable no-magic-numbers */var rgbToHex=function rgbToHex(color){if(typeof color==='undefined'){throw new Error('Hex color is not defined');}var rgb=color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!rgb){throw new Error(color+" is not a valid rgb color");}var r="0"+parseInt(rgb[1],10).toString(16);var g="0"+parseInt(rgb[2],10).toString(16);var b="0"+parseInt(rgb[3],10).toString(16);return"#"+r.slice(-2)+g.slice(-2)+b.slice(-2);};/**
   * --------------------------------------------------------------------------
   * CoreUI (v2.0.4): index.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */(function($$$1){if(typeof $$$1==='undefined'){throw new TypeError('CoreUI\'s JavaScript requires jQuery. jQuery must be included before CoreUI\'s JavaScript.');}var version=$$$1.fn.jquery.split(' ')[0].split('.');var minMajor=1;var ltMajor=2;var minMinor=9;var minPatch=1;var maxMajor=4;if(version[0]<ltMajor&&version[1]<minMinor||version[0]===minMajor&&version[1]===minMinor&&version[2]<minPatch||version[0]>=maxMajor){throw new Error('CoreUI\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');}})($);window.getStyle=getStyle;window.hexToRgb=hexToRgb;window.hexToRgba=hexToRgba;window.rgbToHex=rgbToHex;exports.AjaxLoad=AjaxLoad;exports.AsideMenu=AsideMenu;exports.Sidebar=Sidebar;Object.defineProperty(exports,'__esModule',{value:true});});//# sourceMappingURL=coreui.js.map
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.7.2
 *
 * Copyright 2018 Chart.js Contributors
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */(function(f){if((typeof exports==="undefined"?"undefined":_typeof2(exports))==="object"&&typeof module!=="undefined"){module.exports=f();}else if(typeof define==="function"&&define.amd){define([],f);}else{var g;if(typeof window!=="undefined"){g=window;}else if(typeof global!=="undefined"){g=global;}else if(typeof self!=="undefined"){g=self;}else{g=this;}g.Chart=f();}})(function(){var define,module,exports;return function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f;}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);},l,l.exports,e,t,n,r);}return n[o].exports;}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++){s(r[o]);}return s;}return e;}()({1:[function(require,module,exports){},{}],2:[function(require,module,exports){/* MIT license */var colorNames=require(6);module.exports={getRgba:getRgba,getHsla:getHsla,getRgb:getRgb,getHsl:getHsl,getHwb:getHwb,getAlpha:getAlpha,hexString:hexString,rgbString:rgbString,rgbaString:rgbaString,percentString:percentString,percentaString:percentaString,hslString:hslString,hslaString:hslaString,hwbString:hwbString,keyword:keyword};function getRgba(string){if(!string){return;}var abbr=/^#([a-fA-F0-9]{3})$/i,hex=/^#([a-fA-F0-9]{6})$/i,rgba=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,per=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,keyword=/(\w+)/;var rgb=[0,0,0],a=1,match=string.match(abbr);if(match){match=match[1];for(var i=0;i<rgb.length;i++){rgb[i]=parseInt(match[i]+match[i],16);}}else if(match=string.match(hex)){match=match[1];for(var i=0;i<rgb.length;i++){rgb[i]=parseInt(match.slice(i*2,i*2+2),16);}}else if(match=string.match(rgba)){for(var i=0;i<rgb.length;i++){rgb[i]=parseInt(match[i+1]);}a=parseFloat(match[4]);}else if(match=string.match(per)){for(var i=0;i<rgb.length;i++){rgb[i]=Math.round(parseFloat(match[i+1])*2.55);}a=parseFloat(match[4]);}else if(match=string.match(keyword)){if(match[1]=="transparent"){return[0,0,0,0];}rgb=colorNames[match[1]];if(!rgb){return;}}for(var i=0;i<rgb.length;i++){rgb[i]=scale(rgb[i],0,255);}if(!a&&a!=0){a=1;}else{a=scale(a,0,1);}rgb[3]=a;return rgb;}function getHsla(string){if(!string){return;}var hsl=/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;var match=string.match(hsl);if(match){var alpha=parseFloat(match[4]);var h=scale(parseInt(match[1]),0,360),s=scale(parseFloat(match[2]),0,100),l=scale(parseFloat(match[3]),0,100),a=scale(isNaN(alpha)?1:alpha,0,1);return[h,s,l,a];}}function getHwb(string){if(!string){return;}var hwb=/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;var match=string.match(hwb);if(match){var alpha=parseFloat(match[4]);var h=scale(parseInt(match[1]),0,360),w=scale(parseFloat(match[2]),0,100),b=scale(parseFloat(match[3]),0,100),a=scale(isNaN(alpha)?1:alpha,0,1);return[h,w,b,a];}}function getRgb(string){var rgba=getRgba(string);return rgba&&rgba.slice(0,3);}function getHsl(string){var hsla=getHsla(string);return hsla&&hsla.slice(0,3);}function getAlpha(string){var vals=getRgba(string);if(vals){return vals[3];}else if(vals=getHsla(string)){return vals[3];}else if(vals=getHwb(string)){return vals[3];}}// generators
function hexString(rgb){return"#"+hexDouble(rgb[0])+hexDouble(rgb[1])+hexDouble(rgb[2]);}function rgbString(rgba,alpha){if(alpha<1||rgba[3]&&rgba[3]<1){return rgbaString(rgba,alpha);}return"rgb("+rgba[0]+", "+rgba[1]+", "+rgba[2]+")";}function rgbaString(rgba,alpha){if(alpha===undefined){alpha=rgba[3]!==undefined?rgba[3]:1;}return"rgba("+rgba[0]+", "+rgba[1]+", "+rgba[2]+", "+alpha+")";}function percentString(rgba,alpha){if(alpha<1||rgba[3]&&rgba[3]<1){return percentaString(rgba,alpha);}var r=Math.round(rgba[0]/255*100),g=Math.round(rgba[1]/255*100),b=Math.round(rgba[2]/255*100);return"rgb("+r+"%, "+g+"%, "+b+"%)";}function percentaString(rgba,alpha){var r=Math.round(rgba[0]/255*100),g=Math.round(rgba[1]/255*100),b=Math.round(rgba[2]/255*100);return"rgba("+r+"%, "+g+"%, "+b+"%, "+(alpha||rgba[3]||1)+")";}function hslString(hsla,alpha){if(alpha<1||hsla[3]&&hsla[3]<1){return hslaString(hsla,alpha);}return"hsl("+hsla[0]+", "+hsla[1]+"%, "+hsla[2]+"%)";}function hslaString(hsla,alpha){if(alpha===undefined){alpha=hsla[3]!==undefined?hsla[3]:1;}return"hsla("+hsla[0]+", "+hsla[1]+"%, "+hsla[2]+"%, "+alpha+")";}// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
function hwbString(hwb,alpha){if(alpha===undefined){alpha=hwb[3]!==undefined?hwb[3]:1;}return"hwb("+hwb[0]+", "+hwb[1]+"%, "+hwb[2]+"%"+(alpha!==undefined&&alpha!==1?", "+alpha:"")+")";}function keyword(rgb){return reverseNames[rgb.slice(0,3)];}// helpers
function scale(num,min,max){return Math.min(Math.max(min,num),max);}function hexDouble(num){var str=num.toString(16).toUpperCase();return str.length<2?"0"+str:str;}//create a list of reverse color names
var reverseNames={};for(var name in colorNames){reverseNames[colorNames[name]]=name;}},{"6":6}],3:[function(require,module,exports){/* MIT license */var convert=require(5);var string=require(2);var Color=function Color(obj){if(obj instanceof Color){return obj;}if(!(this instanceof Color)){return new Color(obj);}this.valid=false;this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1};// parse Color() argument
var vals;if(typeof obj==='string'){vals=string.getRgba(obj);if(vals){this.setValues('rgb',vals);}else if(vals=string.getHsla(obj)){this.setValues('hsl',vals);}else if(vals=string.getHwb(obj)){this.setValues('hwb',vals);}}else if((typeof obj==="undefined"?"undefined":_typeof2(obj))==='object'){vals=obj;if(vals.r!==undefined||vals.red!==undefined){this.setValues('rgb',vals);}else if(vals.l!==undefined||vals.lightness!==undefined){this.setValues('hsl',vals);}else if(vals.v!==undefined||vals.value!==undefined){this.setValues('hsv',vals);}else if(vals.w!==undefined||vals.whiteness!==undefined){this.setValues('hwb',vals);}else if(vals.c!==undefined||vals.cyan!==undefined){this.setValues('cmyk',vals);}}};Color.prototype={isValid:function isValid(){return this.valid;},rgb:function rgb(){return this.setSpace('rgb',arguments);},hsl:function hsl(){return this.setSpace('hsl',arguments);},hsv:function hsv(){return this.setSpace('hsv',arguments);},hwb:function hwb(){return this.setSpace('hwb',arguments);},cmyk:function cmyk(){return this.setSpace('cmyk',arguments);},rgbArray:function rgbArray(){return this.values.rgb;},hslArray:function hslArray(){return this.values.hsl;},hsvArray:function hsvArray(){return this.values.hsv;},hwbArray:function hwbArray(){var values=this.values;if(values.alpha!==1){return values.hwb.concat([values.alpha]);}return values.hwb;},cmykArray:function cmykArray(){return this.values.cmyk;},rgbaArray:function rgbaArray(){var values=this.values;return values.rgb.concat([values.alpha]);},hslaArray:function hslaArray(){var values=this.values;return values.hsl.concat([values.alpha]);},alpha:function alpha(val){if(val===undefined){return this.values.alpha;}this.setValues('alpha',val);return this;},red:function red(val){return this.setChannel('rgb',0,val);},green:function green(val){return this.setChannel('rgb',1,val);},blue:function blue(val){return this.setChannel('rgb',2,val);},hue:function hue(val){if(val){val%=360;val=val<0?360+val:val;}return this.setChannel('hsl',0,val);},saturation:function saturation(val){return this.setChannel('hsl',1,val);},lightness:function lightness(val){return this.setChannel('hsl',2,val);},saturationv:function saturationv(val){return this.setChannel('hsv',1,val);},whiteness:function whiteness(val){return this.setChannel('hwb',1,val);},blackness:function blackness(val){return this.setChannel('hwb',2,val);},value:function value(val){return this.setChannel('hsv',2,val);},cyan:function cyan(val){return this.setChannel('cmyk',0,val);},magenta:function magenta(val){return this.setChannel('cmyk',1,val);},yellow:function yellow(val){return this.setChannel('cmyk',2,val);},black:function black(val){return this.setChannel('cmyk',3,val);},hexString:function hexString(){return string.hexString(this.values.rgb);},rgbString:function rgbString(){return string.rgbString(this.values.rgb,this.values.alpha);},rgbaString:function rgbaString(){return string.rgbaString(this.values.rgb,this.values.alpha);},percentString:function percentString(){return string.percentString(this.values.rgb,this.values.alpha);},hslString:function hslString(){return string.hslString(this.values.hsl,this.values.alpha);},hslaString:function hslaString(){return string.hslaString(this.values.hsl,this.values.alpha);},hwbString:function hwbString(){return string.hwbString(this.values.hwb,this.values.alpha);},keyword:function keyword(){return string.keyword(this.values.rgb,this.values.alpha);},rgbNumber:function rgbNumber(){var rgb=this.values.rgb;return rgb[0]<<16|rgb[1]<<8|rgb[2];},luminosity:function luminosity(){// http://www.w3.org/TR/WCAG20/#relativeluminancedef
var rgb=this.values.rgb;var lum=[];for(var i=0;i<rgb.length;i++){var chan=rgb[i]/255;lum[i]=chan<=0.03928?chan/12.92:Math.pow((chan+0.055)/1.055,2.4);}return 0.2126*lum[0]+0.7152*lum[1]+0.0722*lum[2];},contrast:function contrast(color2){// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
var lum1=this.luminosity();var lum2=color2.luminosity();if(lum1>lum2){return(lum1+0.05)/(lum2+0.05);}return(lum2+0.05)/(lum1+0.05);},level:function level(color2){var contrastRatio=this.contrast(color2);if(contrastRatio>=7.1){return'AAA';}return contrastRatio>=4.5?'AA':'';},dark:function dark(){// YIQ equation from http://24ways.org/2010/calculating-color-contrast
var rgb=this.values.rgb;var yiq=(rgb[0]*299+rgb[1]*587+rgb[2]*114)/1000;return yiq<128;},light:function light(){return!this.dark();},negate:function negate(){var rgb=[];for(var i=0;i<3;i++){rgb[i]=255-this.values.rgb[i];}this.setValues('rgb',rgb);return this;},lighten:function lighten(ratio){var hsl=this.values.hsl;hsl[2]+=hsl[2]*ratio;this.setValues('hsl',hsl);return this;},darken:function darken(ratio){var hsl=this.values.hsl;hsl[2]-=hsl[2]*ratio;this.setValues('hsl',hsl);return this;},saturate:function saturate(ratio){var hsl=this.values.hsl;hsl[1]+=hsl[1]*ratio;this.setValues('hsl',hsl);return this;},desaturate:function desaturate(ratio){var hsl=this.values.hsl;hsl[1]-=hsl[1]*ratio;this.setValues('hsl',hsl);return this;},whiten:function whiten(ratio){var hwb=this.values.hwb;hwb[1]+=hwb[1]*ratio;this.setValues('hwb',hwb);return this;},blacken:function blacken(ratio){var hwb=this.values.hwb;hwb[2]+=hwb[2]*ratio;this.setValues('hwb',hwb);return this;},greyscale:function greyscale(){var rgb=this.values.rgb;// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
var val=rgb[0]*0.3+rgb[1]*0.59+rgb[2]*0.11;this.setValues('rgb',[val,val,val]);return this;},clearer:function clearer(ratio){var alpha=this.values.alpha;this.setValues('alpha',alpha-alpha*ratio);return this;},opaquer:function opaquer(ratio){var alpha=this.values.alpha;this.setValues('alpha',alpha+alpha*ratio);return this;},rotate:function rotate(degrees){var hsl=this.values.hsl;var hue=(hsl[0]+degrees)%360;hsl[0]=hue<0?360+hue:hue;this.setValues('hsl',hsl);return this;},/**
	 * Ported from sass implementation in C
	 * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
	 */mix:function mix(mixinColor,weight){var color1=this;var color2=mixinColor;var p=weight===undefined?0.5:weight;var w=2*p-1;var a=color1.alpha()-color2.alpha();var w1=((w*a===-1?w:(w+a)/(1+w*a))+1)/2.0;var w2=1-w1;return this.rgb(w1*color1.red()+w2*color2.red(),w1*color1.green()+w2*color2.green(),w1*color1.blue()+w2*color2.blue()).alpha(color1.alpha()*p+color2.alpha()*(1-p));},toJSON:function toJSON(){return this.rgb();},clone:function clone(){// NOTE(SB): using node-clone creates a dependency to Buffer when using browserify,
// making the final build way to big to embed in Chart.js. So let's do it manually,
// assuming that values to clone are 1 dimension arrays containing only numbers,
// except 'alpha' which is a number.
var result=new Color();var source=this.values;var target=result.values;var value,type;for(var prop in source){if(source.hasOwnProperty(prop)){value=source[prop];type={}.toString.call(value);if(type==='[object Array]'){target[prop]=value.slice(0);}else if(type==='[object Number]'){target[prop]=value;}else{console.error('unexpected color value:',value);}}}return result;}};Color.prototype.spaces={rgb:['red','green','blue'],hsl:['hue','saturation','lightness'],hsv:['hue','saturation','value'],hwb:['hue','whiteness','blackness'],cmyk:['cyan','magenta','yellow','black']};Color.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]};Color.prototype.getValues=function(space){var values=this.values;var vals={};for(var i=0;i<space.length;i++){vals[space.charAt(i)]=values[space][i];}if(values.alpha!==1){vals.a=values.alpha;}// {r: 255, g: 255, b: 255, a: 0.4}
return vals;};Color.prototype.setValues=function(space,vals){var values=this.values;var spaces=this.spaces;var maxes=this.maxes;var alpha=1;var i;this.valid=true;if(space==='alpha'){alpha=vals;}else if(vals.length){// [10, 10, 10]
values[space]=vals.slice(0,space.length);alpha=vals[space.length];}else if(vals[space.charAt(0)]!==undefined){// {r: 10, g: 10, b: 10}
for(i=0;i<space.length;i++){values[space][i]=vals[space.charAt(i)];}alpha=vals.a;}else if(vals[spaces[space][0]]!==undefined){// {red: 10, green: 10, blue: 10}
var chans=spaces[space];for(i=0;i<space.length;i++){values[space][i]=vals[chans[i]];}alpha=vals.alpha;}values.alpha=Math.max(0,Math.min(1,alpha===undefined?values.alpha:alpha));if(space==='alpha'){return false;}var capped;// cap values of the space prior converting all values
for(i=0;i<space.length;i++){capped=Math.max(0,Math.min(maxes[space][i],values[space][i]));values[space][i]=Math.round(capped);}// convert to all the other color spaces
for(var sname in spaces){if(sname!==space){values[sname]=convert[space][sname](values[space]);}}return true;};Color.prototype.setSpace=function(space,args){var vals=args[0];if(vals===undefined){// color.rgb()
return this.getValues(space);}// color.rgb(10, 10, 10)
if(typeof vals==='number'){vals=Array.prototype.slice.call(args);}this.setValues(space,vals);return this;};Color.prototype.setChannel=function(space,index,val){var svalues=this.values[space];if(val===undefined){// color.red()
return svalues[index];}else if(val===svalues[index]){// color.red(color.red())
return this;}// color.red(100)
svalues[index]=val;this.setValues(space,svalues);return this;};if(typeof window!=='undefined'){window.Color=Color;}module.exports=Color;},{"2":2,"5":5}],4:[function(require,module,exports){/* MIT license */module.exports={rgb2hsl:rgb2hsl,rgb2hsv:rgb2hsv,rgb2hwb:rgb2hwb,rgb2cmyk:rgb2cmyk,rgb2keyword:rgb2keyword,rgb2xyz:rgb2xyz,rgb2lab:rgb2lab,rgb2lch:rgb2lch,hsl2rgb:hsl2rgb,hsl2hsv:hsl2hsv,hsl2hwb:hsl2hwb,hsl2cmyk:hsl2cmyk,hsl2keyword:hsl2keyword,hsv2rgb:hsv2rgb,hsv2hsl:hsv2hsl,hsv2hwb:hsv2hwb,hsv2cmyk:hsv2cmyk,hsv2keyword:hsv2keyword,hwb2rgb:hwb2rgb,hwb2hsl:hwb2hsl,hwb2hsv:hwb2hsv,hwb2cmyk:hwb2cmyk,hwb2keyword:hwb2keyword,cmyk2rgb:cmyk2rgb,cmyk2hsl:cmyk2hsl,cmyk2hsv:cmyk2hsv,cmyk2hwb:cmyk2hwb,cmyk2keyword:cmyk2keyword,keyword2rgb:keyword2rgb,keyword2hsl:keyword2hsl,keyword2hsv:keyword2hsv,keyword2hwb:keyword2hwb,keyword2cmyk:keyword2cmyk,keyword2lab:keyword2lab,keyword2xyz:keyword2xyz,xyz2rgb:xyz2rgb,xyz2lab:xyz2lab,xyz2lch:xyz2lch,lab2xyz:lab2xyz,lab2rgb:lab2rgb,lab2lch:lab2lch,lch2lab:lch2lab,lch2xyz:lch2xyz,lch2rgb:lch2rgb};function rgb2hsl(rgb){var r=rgb[0]/255,g=rgb[1]/255,b=rgb[2]/255,min=Math.min(r,g,b),max=Math.max(r,g,b),delta=max-min,h,s,l;if(max==min)h=0;else if(r==max)h=(g-b)/delta;else if(g==max)h=2+(b-r)/delta;else if(b==max)h=4+(r-g)/delta;h=Math.min(h*60,360);if(h<0)h+=360;l=(min+max)/2;if(max==min)s=0;else if(l<=0.5)s=delta/(max+min);else s=delta/(2-max-min);return[h,s*100,l*100];}function rgb2hsv(rgb){var r=rgb[0],g=rgb[1],b=rgb[2],min=Math.min(r,g,b),max=Math.max(r,g,b),delta=max-min,h,s,v;if(max==0)s=0;else s=delta/max*1000/10;if(max==min)h=0;else if(r==max)h=(g-b)/delta;else if(g==max)h=2+(b-r)/delta;else if(b==max)h=4+(r-g)/delta;h=Math.min(h*60,360);if(h<0)h+=360;v=max/255*1000/10;return[h,s,v];}function rgb2hwb(rgb){var r=rgb[0],g=rgb[1],b=rgb[2],h=rgb2hsl(rgb)[0],w=1/255*Math.min(r,Math.min(g,b)),b=1-1/255*Math.max(r,Math.max(g,b));return[h,w*100,b*100];}function rgb2cmyk(rgb){var r=rgb[0]/255,g=rgb[1]/255,b=rgb[2]/255,c,m,y,k;k=Math.min(1-r,1-g,1-b);c=(1-r-k)/(1-k)||0;m=(1-g-k)/(1-k)||0;y=(1-b-k)/(1-k)||0;return[c*100,m*100,y*100,k*100];}function rgb2keyword(rgb){return reverseKeywords[JSON.stringify(rgb)];}function rgb2xyz(rgb){var r=rgb[0]/255,g=rgb[1]/255,b=rgb[2]/255;// assume sRGB
r=r>0.04045?Math.pow((r+0.055)/1.055,2.4):r/12.92;g=g>0.04045?Math.pow((g+0.055)/1.055,2.4):g/12.92;b=b>0.04045?Math.pow((b+0.055)/1.055,2.4):b/12.92;var x=r*0.4124+g*0.3576+b*0.1805;var y=r*0.2126+g*0.7152+b*0.0722;var z=r*0.0193+g*0.1192+b*0.9505;return[x*100,y*100,z*100];}function rgb2lab(rgb){var xyz=rgb2xyz(rgb),x=xyz[0],y=xyz[1],z=xyz[2],l,a,b;x/=95.047;y/=100;z/=108.883;x=x>0.008856?Math.pow(x,1/3):7.787*x+16/116;y=y>0.008856?Math.pow(y,1/3):7.787*y+16/116;z=z>0.008856?Math.pow(z,1/3):7.787*z+16/116;l=116*y-16;a=500*(x-y);b=200*(y-z);return[l,a,b];}function rgb2lch(args){return lab2lch(rgb2lab(args));}function hsl2rgb(hsl){var h=hsl[0]/360,s=hsl[1]/100,l=hsl[2]/100,t1,t2,t3,rgb,val;if(s==0){val=l*255;return[val,val,val];}if(l<0.5)t2=l*(1+s);else t2=l+s-l*s;t1=2*l-t2;rgb=[0,0,0];for(var i=0;i<3;i++){t3=h+1/3*-(i-1);t3<0&&t3++;t3>1&&t3--;if(6*t3<1)val=t1+(t2-t1)*6*t3;else if(2*t3<1)val=t2;else if(3*t3<2)val=t1+(t2-t1)*(2/3-t3)*6;else val=t1;rgb[i]=val*255;}return rgb;}function hsl2hsv(hsl){var h=hsl[0],s=hsl[1]/100,l=hsl[2]/100,sv,v;if(l===0){// no need to do calc on black
// also avoids divide by 0 error
return[0,0,0];}l*=2;s*=l<=1?l:2-l;v=(l+s)/2;sv=2*s/(l+s);return[h,sv*100,v*100];}function hsl2hwb(args){return rgb2hwb(hsl2rgb(args));}function hsl2cmyk(args){return rgb2cmyk(hsl2rgb(args));}function hsl2keyword(args){return rgb2keyword(hsl2rgb(args));}function hsv2rgb(hsv){var h=hsv[0]/60,s=hsv[1]/100,v=hsv[2]/100,hi=Math.floor(h)%6;var f=h-Math.floor(h),p=255*v*(1-s),q=255*v*(1-s*f),t=255*v*(1-s*(1-f)),v=255*v;switch(hi){case 0:return[v,t,p];case 1:return[q,v,p];case 2:return[p,v,t];case 3:return[p,q,v];case 4:return[t,p,v];case 5:return[v,p,q];}}function hsv2hsl(hsv){var h=hsv[0],s=hsv[1]/100,v=hsv[2]/100,sl,l;l=(2-s)*v;sl=s*v;sl/=l<=1?l:2-l;sl=sl||0;l/=2;return[h,sl*100,l*100];}function hsv2hwb(args){return rgb2hwb(hsv2rgb(args));}function hsv2cmyk(args){return rgb2cmyk(hsv2rgb(args));}function hsv2keyword(args){return rgb2keyword(hsv2rgb(args));}// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
function hwb2rgb(hwb){var h=hwb[0]/360,wh=hwb[1]/100,bl=hwb[2]/100,ratio=wh+bl,i,v,f,n;// wh + bl cant be > 1
if(ratio>1){wh/=ratio;bl/=ratio;}i=Math.floor(6*h);v=1-bl;f=6*h-i;if((i&0x01)!=0){f=1-f;}n=wh+f*(v-wh);// linear interpolation
switch(i){default:case 6:case 0:r=v;g=n;b=wh;break;case 1:r=n;g=v;b=wh;break;case 2:r=wh;g=v;b=n;break;case 3:r=wh;g=n;b=v;break;case 4:r=n;g=wh;b=v;break;case 5:r=v;g=wh;b=n;break;}return[r*255,g*255,b*255];}function hwb2hsl(args){return rgb2hsl(hwb2rgb(args));}function hwb2hsv(args){return rgb2hsv(hwb2rgb(args));}function hwb2cmyk(args){return rgb2cmyk(hwb2rgb(args));}function hwb2keyword(args){return rgb2keyword(hwb2rgb(args));}function cmyk2rgb(cmyk){var c=cmyk[0]/100,m=cmyk[1]/100,y=cmyk[2]/100,k=cmyk[3]/100,r,g,b;r=1-Math.min(1,c*(1-k)+k);g=1-Math.min(1,m*(1-k)+k);b=1-Math.min(1,y*(1-k)+k);return[r*255,g*255,b*255];}function cmyk2hsl(args){return rgb2hsl(cmyk2rgb(args));}function cmyk2hsv(args){return rgb2hsv(cmyk2rgb(args));}function cmyk2hwb(args){return rgb2hwb(cmyk2rgb(args));}function cmyk2keyword(args){return rgb2keyword(cmyk2rgb(args));}function xyz2rgb(xyz){var x=xyz[0]/100,y=xyz[1]/100,z=xyz[2]/100,r,g,b;r=x*3.2406+y*-1.5372+z*-0.4986;g=x*-0.9689+y*1.8758+z*0.0415;b=x*0.0557+y*-0.2040+z*1.0570;// assume sRGB
r=r>0.0031308?1.055*Math.pow(r,1.0/2.4)-0.055:r=r*12.92;g=g>0.0031308?1.055*Math.pow(g,1.0/2.4)-0.055:g=g*12.92;b=b>0.0031308?1.055*Math.pow(b,1.0/2.4)-0.055:b=b*12.92;r=Math.min(Math.max(0,r),1);g=Math.min(Math.max(0,g),1);b=Math.min(Math.max(0,b),1);return[r*255,g*255,b*255];}function xyz2lab(xyz){var x=xyz[0],y=xyz[1],z=xyz[2],l,a,b;x/=95.047;y/=100;z/=108.883;x=x>0.008856?Math.pow(x,1/3):7.787*x+16/116;y=y>0.008856?Math.pow(y,1/3):7.787*y+16/116;z=z>0.008856?Math.pow(z,1/3):7.787*z+16/116;l=116*y-16;a=500*(x-y);b=200*(y-z);return[l,a,b];}function xyz2lch(args){return lab2lch(xyz2lab(args));}function lab2xyz(lab){var l=lab[0],a=lab[1],b=lab[2],x,y,z,y2;if(l<=8){y=l*100/903.3;y2=7.787*(y/100)+16/116;}else{y=100*Math.pow((l+16)/116,3);y2=Math.pow(y/100,1/3);}x=x/95.047<=0.008856?x=95.047*(a/500+y2-16/116)/7.787:95.047*Math.pow(a/500+y2,3);z=z/108.883<=0.008859?z=108.883*(y2-b/200-16/116)/7.787:108.883*Math.pow(y2-b/200,3);return[x,y,z];}function lab2lch(lab){var l=lab[0],a=lab[1],b=lab[2],hr,h,c;hr=Math.atan2(b,a);h=hr*360/2/Math.PI;if(h<0){h+=360;}c=Math.sqrt(a*a+b*b);return[l,c,h];}function lab2rgb(args){return xyz2rgb(lab2xyz(args));}function lch2lab(lch){var l=lch[0],c=lch[1],h=lch[2],a,b,hr;hr=h/360*2*Math.PI;a=c*Math.cos(hr);b=c*Math.sin(hr);return[l,a,b];}function lch2xyz(args){return lab2xyz(lch2lab(args));}function lch2rgb(args){return lab2rgb(lch2lab(args));}function keyword2rgb(keyword){return cssKeywords[keyword];}function keyword2hsl(args){return rgb2hsl(keyword2rgb(args));}function keyword2hsv(args){return rgb2hsv(keyword2rgb(args));}function keyword2hwb(args){return rgb2hwb(keyword2rgb(args));}function keyword2cmyk(args){return rgb2cmyk(keyword2rgb(args));}function keyword2lab(args){return rgb2lab(keyword2rgb(args));}function keyword2xyz(args){return rgb2xyz(keyword2rgb(args));}var cssKeywords={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};var reverseKeywords={};for(var key in cssKeywords){reverseKeywords[JSON.stringify(cssKeywords[key])]=key;}},{}],5:[function(require,module,exports){var conversions=require(4);var convert=function convert(){return new Converter();};for(var func in conversions){// export Raw versions
convert[func+"Raw"]=function(func){// accept array or plain args
return function(arg){if(typeof arg=="number")arg=Array.prototype.slice.call(arguments);return conversions[func](arg);};}(func);var pair=/(\w+)2(\w+)/.exec(func),from=pair[1],to=pair[2];// export rgb2hsl and ["rgb"]["hsl"]
convert[from]=convert[from]||{};convert[from][to]=convert[func]=function(func){return function(arg){if(typeof arg=="number")arg=Array.prototype.slice.call(arguments);var val=conversions[func](arg);if(typeof val=="string"||val===undefined)return val;// keyword
for(var i=0;i<val.length;i++){val[i]=Math.round(val[i]);}return val;};}(func);}/* Converter does lazy conversion and caching */var Converter=function Converter(){this.convs={};};/* Either get the values for a space or
  set the values for a space, depending on args */Converter.prototype.routeSpace=function(space,args){var values=args[0];if(values===undefined){// color.rgb()
return this.getValues(space);}// color.rgb(10, 10, 10)
if(typeof values=="number"){values=Array.prototype.slice.call(args);}return this.setValues(space,values);};/* Set the values for a space, invalidating cache */Converter.prototype.setValues=function(space,values){this.space=space;this.convs={};this.convs[space]=values;return this;};/* Get the values for a space. If there's already
  a conversion for the space, fetch it, otherwise
  compute it */Converter.prototype.getValues=function(space){var vals=this.convs[space];if(!vals){var fspace=this.space,from=this.convs[fspace];vals=convert[fspace][space](from);this.convs[space]=vals;}return vals;};["rgb","hsl","hsv","cmyk","keyword"].forEach(function(space){Converter.prototype[space]=function(vals){return this.routeSpace(space,arguments);};});module.exports=convert;},{"4":4}],6:[function(require,module,exports){'use strict';module.exports={"aliceblue":[240,248,255],"antiquewhite":[250,235,215],"aqua":[0,255,255],"aquamarine":[127,255,212],"azure":[240,255,255],"beige":[245,245,220],"bisque":[255,228,196],"black":[0,0,0],"blanchedalmond":[255,235,205],"blue":[0,0,255],"blueviolet":[138,43,226],"brown":[165,42,42],"burlywood":[222,184,135],"cadetblue":[95,158,160],"chartreuse":[127,255,0],"chocolate":[210,105,30],"coral":[255,127,80],"cornflowerblue":[100,149,237],"cornsilk":[255,248,220],"crimson":[220,20,60],"cyan":[0,255,255],"darkblue":[0,0,139],"darkcyan":[0,139,139],"darkgoldenrod":[184,134,11],"darkgray":[169,169,169],"darkgreen":[0,100,0],"darkgrey":[169,169,169],"darkkhaki":[189,183,107],"darkmagenta":[139,0,139],"darkolivegreen":[85,107,47],"darkorange":[255,140,0],"darkorchid":[153,50,204],"darkred":[139,0,0],"darksalmon":[233,150,122],"darkseagreen":[143,188,143],"darkslateblue":[72,61,139],"darkslategray":[47,79,79],"darkslategrey":[47,79,79],"darkturquoise":[0,206,209],"darkviolet":[148,0,211],"deeppink":[255,20,147],"deepskyblue":[0,191,255],"dimgray":[105,105,105],"dimgrey":[105,105,105],"dodgerblue":[30,144,255],"firebrick":[178,34,34],"floralwhite":[255,250,240],"forestgreen":[34,139,34],"fuchsia":[255,0,255],"gainsboro":[220,220,220],"ghostwhite":[248,248,255],"gold":[255,215,0],"goldenrod":[218,165,32],"gray":[128,128,128],"green":[0,128,0],"greenyellow":[173,255,47],"grey":[128,128,128],"honeydew":[240,255,240],"hotpink":[255,105,180],"indianred":[205,92,92],"indigo":[75,0,130],"ivory":[255,255,240],"khaki":[240,230,140],"lavender":[230,230,250],"lavenderblush":[255,240,245],"lawngreen":[124,252,0],"lemonchiffon":[255,250,205],"lightblue":[173,216,230],"lightcoral":[240,128,128],"lightcyan":[224,255,255],"lightgoldenrodyellow":[250,250,210],"lightgray":[211,211,211],"lightgreen":[144,238,144],"lightgrey":[211,211,211],"lightpink":[255,182,193],"lightsalmon":[255,160,122],"lightseagreen":[32,178,170],"lightskyblue":[135,206,250],"lightslategray":[119,136,153],"lightslategrey":[119,136,153],"lightsteelblue":[176,196,222],"lightyellow":[255,255,224],"lime":[0,255,0],"limegreen":[50,205,50],"linen":[250,240,230],"magenta":[255,0,255],"maroon":[128,0,0],"mediumaquamarine":[102,205,170],"mediumblue":[0,0,205],"mediumorchid":[186,85,211],"mediumpurple":[147,112,219],"mediumseagreen":[60,179,113],"mediumslateblue":[123,104,238],"mediumspringgreen":[0,250,154],"mediumturquoise":[72,209,204],"mediumvioletred":[199,21,133],"midnightblue":[25,25,112],"mintcream":[245,255,250],"mistyrose":[255,228,225],"moccasin":[255,228,181],"navajowhite":[255,222,173],"navy":[0,0,128],"oldlace":[253,245,230],"olive":[128,128,0],"olivedrab":[107,142,35],"orange":[255,165,0],"orangered":[255,69,0],"orchid":[218,112,214],"palegoldenrod":[238,232,170],"palegreen":[152,251,152],"paleturquoise":[175,238,238],"palevioletred":[219,112,147],"papayawhip":[255,239,213],"peachpuff":[255,218,185],"peru":[205,133,63],"pink":[255,192,203],"plum":[221,160,221],"powderblue":[176,224,230],"purple":[128,0,128],"rebeccapurple":[102,51,153],"red":[255,0,0],"rosybrown":[188,143,143],"royalblue":[65,105,225],"saddlebrown":[139,69,19],"salmon":[250,128,114],"sandybrown":[244,164,96],"seagreen":[46,139,87],"seashell":[255,245,238],"sienna":[160,82,45],"silver":[192,192,192],"skyblue":[135,206,235],"slateblue":[106,90,205],"slategray":[112,128,144],"slategrey":[112,128,144],"snow":[255,250,250],"springgreen":[0,255,127],"steelblue":[70,130,180],"tan":[210,180,140],"teal":[0,128,128],"thistle":[216,191,216],"tomato":[255,99,71],"turquoise":[64,224,208],"violet":[238,130,238],"wheat":[245,222,179],"white":[255,255,255],"whitesmoke":[245,245,245],"yellow":[255,255,0],"yellowgreen":[154,205,50]};},{}],7:[function(require,module,exports){/**
 * @namespace Chart
 */var Chart=require(29)();Chart.helpers=require(45);// @todo dispatch these helpers into appropriated helpers/helpers.* file and write unit tests!
require(27)(Chart);Chart.defaults=require(25);Chart.Element=require(26);Chart.elements=require(40);Chart.Interaction=require(28);Chart.layouts=require(30);Chart.platform=require(48);Chart.plugins=require(31);Chart.Ticks=require(34);require(22)(Chart);require(23)(Chart);require(24)(Chart);require(33)(Chart);require(32)(Chart);require(35)(Chart);require(55)(Chart);require(53)(Chart);require(54)(Chart);require(56)(Chart);require(57)(Chart);require(58)(Chart);// Controllers must be loaded after elements
// See Chart.core.datasetController.dataElementType
require(15)(Chart);require(16)(Chart);require(17)(Chart);require(18)(Chart);require(19)(Chart);require(20)(Chart);require(21)(Chart);require(8)(Chart);require(9)(Chart);require(10)(Chart);require(11)(Chart);require(12)(Chart);require(13)(Chart);require(14)(Chart);// Loading built-it plugins
var plugins=require(49);for(var k in plugins){if(plugins.hasOwnProperty(k)){Chart.plugins.register(plugins[k]);}}Chart.platform.initialize();module.exports=Chart;if(typeof window!=='undefined'){window.Chart=Chart;}// DEPRECATIONS
/**
 * Provided for backward compatibility, not available anymore
 * @namespace Chart.Legend
 * @deprecated since version 2.1.5
 * @todo remove at version 3
 * @private
 */Chart.Legend=plugins.legend._element;/**
 * Provided for backward compatibility, not available anymore
 * @namespace Chart.Title
 * @deprecated since version 2.1.5
 * @todo remove at version 3
 * @private
 */Chart.Title=plugins.title._element;/**
 * Provided for backward compatibility, use Chart.plugins instead
 * @namespace Chart.pluginService
 * @deprecated since version 2.1.5
 * @todo remove at version 3
 * @private
 */Chart.pluginService=Chart.plugins;/**
 * Provided for backward compatibility, inheriting from Chart.PlugingBase has no
 * effect, instead simply create/register plugins via plain JavaScript objects.
 * @interface Chart.PluginBase
 * @deprecated since version 2.5.0
 * @todo remove at version 3
 * @private
 */Chart.PluginBase=Chart.Element.extend({});/**
 * Provided for backward compatibility, use Chart.helpers.canvas instead.
 * @namespace Chart.canvasHelpers
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 * @private
 */Chart.canvasHelpers=Chart.helpers.canvas;/**
 * Provided for backward compatibility, use Chart.layouts instead.
 * @namespace Chart.layoutService
 * @deprecated since version 2.8.0
 * @todo remove at version 3
 * @private
 */Chart.layoutService=Chart.layouts;},{"10":10,"11":11,"12":12,"13":13,"14":14,"15":15,"16":16,"17":17,"18":18,"19":19,"20":20,"21":21,"22":22,"23":23,"24":24,"25":25,"26":26,"27":27,"28":28,"29":29,"30":30,"31":31,"32":32,"33":33,"34":34,"35":35,"40":40,"45":45,"48":48,"49":49,"53":53,"54":54,"55":55,"56":56,"57":57,"58":58,"8":8,"9":9}],8:[function(require,module,exports){'use strict';module.exports=function(Chart){Chart.Bar=function(context,config){config.type='bar';return new Chart(context,config);};};},{}],9:[function(require,module,exports){'use strict';module.exports=function(Chart){Chart.Bubble=function(context,config){config.type='bubble';return new Chart(context,config);};};},{}],10:[function(require,module,exports){'use strict';module.exports=function(Chart){Chart.Doughnut=function(context,config){config.type='doughnut';return new Chart(context,config);};};},{}],11:[function(require,module,exports){'use strict';module.exports=function(Chart){Chart.Line=function(context,config){config.type='line';return new Chart(context,config);};};},{}],12:[function(require,module,exports){'use strict';module.exports=function(Chart){Chart.PolarArea=function(context,config){config.type='polarArea';return new Chart(context,config);};};},{}],13:[function(require,module,exports){'use strict';module.exports=function(Chart){Chart.Radar=function(context,config){config.type='radar';return new Chart(context,config);};};},{}],14:[function(require,module,exports){'use strict';module.exports=function(Chart){Chart.Scatter=function(context,config){config.type='scatter';return new Chart(context,config);};};},{}],15:[function(require,module,exports){'use strict';var defaults=require(25);var elements=require(40);var helpers=require(45);defaults._set('bar',{hover:{mode:'label'},scales:{xAxes:[{type:'category',// Specific to Bar Controller
categoryPercentage:0.8,barPercentage:0.9,// offset settings
offset:true,// grid line settings
gridLines:{offsetGridLines:true}}],yAxes:[{type:'linear'}]}});defaults._set('horizontalBar',{hover:{mode:'index',axis:'y'},scales:{xAxes:[{type:'linear',position:'bottom'}],yAxes:[{position:'left',type:'category',// Specific to Horizontal Bar Controller
categoryPercentage:0.8,barPercentage:0.9,// offset settings
offset:true,// grid line settings
gridLines:{offsetGridLines:true}}]},elements:{rectangle:{borderSkipped:'left'}},tooltips:{callbacks:{title:function title(item,data){// Pick first xLabel for now
var title='';if(item.length>0){if(item[0].yLabel){title=item[0].yLabel;}else if(data.labels.length>0&&item[0].index<data.labels.length){title=data.labels[item[0].index];}}return title;},label:function label(item,data){var datasetLabel=data.datasets[item.datasetIndex].label||'';return datasetLabel+': '+item.xLabel;}},mode:'index',axis:'y'}});/**
 * Computes the "optimal" sample size to maintain bars equally sized while preventing overlap.
 * @private
 */function computeMinSampleSize(scale,pixels){var min=scale.isHorizontal()?scale.width:scale.height;var ticks=scale.getTicks();var prev,curr,i,ilen;for(i=1,ilen=pixels.length;i<ilen;++i){min=Math.min(min,pixels[i]-pixels[i-1]);}for(i=0,ilen=ticks.length;i<ilen;++i){curr=scale.getPixelForTick(i);min=i>0?Math.min(min,curr-prev):min;prev=curr;}return min;}/**
 * Computes an "ideal" category based on the absolute bar thickness or, if undefined or null,
 * uses the smallest interval (see computeMinSampleSize) that prevents bar overlapping. This
 * mode currently always generates bars equally sized (until we introduce scriptable options?).
 * @private
 */function computeFitCategoryTraits(index,ruler,options){var thickness=options.barThickness;var count=ruler.stackCount;var curr=ruler.pixels[index];var size,ratio;if(helpers.isNullOrUndef(thickness)){size=ruler.min*options.categoryPercentage;ratio=options.barPercentage;}else{// When bar thickness is enforced, category and bar percentages are ignored.
// Note(SB): we could add support for relative bar thickness (e.g. barThickness: '50%')
// and deprecate barPercentage since this value is ignored when thickness is absolute.
size=thickness*count;ratio=1;}return{chunk:size/count,ratio:ratio,start:curr-size/2};}/**
 * Computes an "optimal" category that globally arranges bars side by side (no gap when
 * percentage options are 1), based on the previous and following categories. This mode
 * generates bars with different widths when data are not evenly spaced.
 * @private
 */function computeFlexCategoryTraits(index,ruler,options){var pixels=ruler.pixels;var curr=pixels[index];var prev=index>0?pixels[index-1]:null;var next=index<pixels.length-1?pixels[index+1]:null;var percent=options.categoryPercentage;var start,size;if(prev===null){// first data: its size is double based on the next point or,
// if it's also the last data, we use the scale end extremity.
prev=curr-(next===null?ruler.end-curr:next-curr);}if(next===null){// last data: its size is also double based on the previous point.
next=curr+curr-prev;}start=curr-(curr-prev)/2*percent;size=(next-prev)/2*percent;return{chunk:size/ruler.stackCount,ratio:options.barPercentage,start:start};}module.exports=function(Chart){Chart.controllers.bar=Chart.DatasetController.extend({dataElementType:elements.Rectangle,initialize:function initialize(){var me=this;var meta;Chart.DatasetController.prototype.initialize.apply(me,arguments);meta=me.getMeta();meta.stack=me.getDataset().stack;meta.bar=true;},update:function update(reset){var me=this;var rects=me.getMeta().data;var i,ilen;me._ruler=me.getRuler();for(i=0,ilen=rects.length;i<ilen;++i){me.updateElement(rects[i],i,reset);}},updateElement:function updateElement(rectangle,index,reset){var me=this;var chart=me.chart;var meta=me.getMeta();var dataset=me.getDataset();var custom=rectangle.custom||{};var rectangleOptions=chart.options.elements.rectangle;rectangle._xScale=me.getScaleForId(meta.xAxisID);rectangle._yScale=me.getScaleForId(meta.yAxisID);rectangle._datasetIndex=me.index;rectangle._index=index;rectangle._model={datasetLabel:dataset.label,label:chart.data.labels[index],borderSkipped:custom.borderSkipped?custom.borderSkipped:rectangleOptions.borderSkipped,backgroundColor:custom.backgroundColor?custom.backgroundColor:helpers.valueAtIndexOrDefault(dataset.backgroundColor,index,rectangleOptions.backgroundColor),borderColor:custom.borderColor?custom.borderColor:helpers.valueAtIndexOrDefault(dataset.borderColor,index,rectangleOptions.borderColor),borderWidth:custom.borderWidth?custom.borderWidth:helpers.valueAtIndexOrDefault(dataset.borderWidth,index,rectangleOptions.borderWidth)};me.updateElementGeometry(rectangle,index,reset);rectangle.pivot();},/**
		 * @private
		 */updateElementGeometry:function updateElementGeometry(rectangle,index,reset){var me=this;var model=rectangle._model;var vscale=me.getValueScale();var base=vscale.getBasePixel();var horizontal=vscale.isHorizontal();var ruler=me._ruler||me.getRuler();var vpixels=me.calculateBarValuePixels(me.index,index);var ipixels=me.calculateBarIndexPixels(me.index,index,ruler);model.horizontal=horizontal;model.base=reset?base:vpixels.base;model.x=horizontal?reset?base:vpixels.head:ipixels.center;model.y=horizontal?ipixels.center:reset?base:vpixels.head;model.height=horizontal?ipixels.size:undefined;model.width=horizontal?undefined:ipixels.size;},/**
		 * @private
		 */getValueScaleId:function getValueScaleId(){return this.getMeta().yAxisID;},/**
		 * @private
		 */getIndexScaleId:function getIndexScaleId(){return this.getMeta().xAxisID;},/**
		 * @private
		 */getValueScale:function getValueScale(){return this.getScaleForId(this.getValueScaleId());},/**
		 * @private
		 */getIndexScale:function getIndexScale(){return this.getScaleForId(this.getIndexScaleId());},/**
		 * Returns the stacks based on groups and bar visibility.
		 * @param {Number} [last] - The dataset index
		 * @returns {Array} The stack list
		 * @private
		 */_getStacks:function _getStacks(last){var me=this;var chart=me.chart;var scale=me.getIndexScale();var stacked=scale.options.stacked;var ilen=last===undefined?chart.data.datasets.length:last+1;var stacks=[];var i,meta;for(i=0;i<ilen;++i){meta=chart.getDatasetMeta(i);if(meta.bar&&chart.isDatasetVisible(i)&&(stacked===false||stacked===true&&stacks.indexOf(meta.stack)===-1||stacked===undefined&&(meta.stack===undefined||stacks.indexOf(meta.stack)===-1))){stacks.push(meta.stack);}}return stacks;},/**
		 * Returns the effective number of stacks based on groups and bar visibility.
		 * @private
		 */getStackCount:function getStackCount(){return this._getStacks().length;},/**
		 * Returns the stack index for the given dataset based on groups and bar visibility.
		 * @param {Number} [datasetIndex] - The dataset index
		 * @param {String} [name] - The stack name to find
		 * @returns {Number} The stack index
		 * @private
		 */getStackIndex:function getStackIndex(datasetIndex,name){var stacks=this._getStacks(datasetIndex);var index=name!==undefined?stacks.indexOf(name):-1;// indexOf returns -1 if element is not present
return index===-1?stacks.length-1:index;},/**
		 * @private
		 */getRuler:function getRuler(){var me=this;var scale=me.getIndexScale();var stackCount=me.getStackCount();var datasetIndex=me.index;var isHorizontal=scale.isHorizontal();var start=isHorizontal?scale.left:scale.top;var end=start+(isHorizontal?scale.width:scale.height);var pixels=[];var i,ilen,min;for(i=0,ilen=me.getMeta().data.length;i<ilen;++i){pixels.push(scale.getPixelForValue(null,i,datasetIndex));}min=helpers.isNullOrUndef(scale.options.barThickness)?computeMinSampleSize(scale,pixels):-1;return{min:min,pixels:pixels,start:start,end:end,stackCount:stackCount,scale:scale};},/**
		 * Note: pixel values are not clamped to the scale area.
		 * @private
		 */calculateBarValuePixels:function calculateBarValuePixels(datasetIndex,index){var me=this;var chart=me.chart;var meta=me.getMeta();var scale=me.getValueScale();var datasets=chart.data.datasets;var value=scale.getRightValue(datasets[datasetIndex].data[index]);var stacked=scale.options.stacked;var stack=meta.stack;var start=0;var i,imeta,ivalue,base,head,size;if(stacked||stacked===undefined&&stack!==undefined){for(i=0;i<datasetIndex;++i){imeta=chart.getDatasetMeta(i);if(imeta.bar&&imeta.stack===stack&&imeta.controller.getValueScaleId()===scale.id&&chart.isDatasetVisible(i)){ivalue=scale.getRightValue(datasets[i].data[index]);if(value<0&&ivalue<0||value>=0&&ivalue>0){start+=ivalue;}}}}base=scale.getPixelForValue(start);head=scale.getPixelForValue(start+value);size=(head-base)/2;return{size:size,base:base,head:head,center:head+size/2};},/**
		 * @private
		 */calculateBarIndexPixels:function calculateBarIndexPixels(datasetIndex,index,ruler){var me=this;var options=ruler.scale.options;var range=options.barThickness==='flex'?computeFlexCategoryTraits(index,ruler,options):computeFitCategoryTraits(index,ruler,options);var stackIndex=me.getStackIndex(datasetIndex,me.getMeta().stack);var center=range.start+range.chunk*stackIndex+range.chunk/2;var size=Math.min(helpers.valueOrDefault(options.maxBarThickness,Infinity),range.chunk*range.ratio);return{base:center-size/2,head:center+size/2,center:center,size:size};},draw:function draw(){var me=this;var chart=me.chart;var scale=me.getValueScale();var rects=me.getMeta().data;var dataset=me.getDataset();var ilen=rects.length;var i=0;helpers.canvas.clipArea(chart.ctx,chart.chartArea);for(;i<ilen;++i){if(!isNaN(scale.getRightValue(dataset.data[i]))){rects[i].draw();}}helpers.canvas.unclipArea(chart.ctx);},setHoverStyle:function setHoverStyle(rectangle){var dataset=this.chart.data.datasets[rectangle._datasetIndex];var index=rectangle._index;var custom=rectangle.custom||{};var model=rectangle._model;model.backgroundColor=custom.hoverBackgroundColor?custom.hoverBackgroundColor:helpers.valueAtIndexOrDefault(dataset.hoverBackgroundColor,index,helpers.getHoverColor(model.backgroundColor));model.borderColor=custom.hoverBorderColor?custom.hoverBorderColor:helpers.valueAtIndexOrDefault(dataset.hoverBorderColor,index,helpers.getHoverColor(model.borderColor));model.borderWidth=custom.hoverBorderWidth?custom.hoverBorderWidth:helpers.valueAtIndexOrDefault(dataset.hoverBorderWidth,index,model.borderWidth);},removeHoverStyle:function removeHoverStyle(rectangle){var dataset=this.chart.data.datasets[rectangle._datasetIndex];var index=rectangle._index;var custom=rectangle.custom||{};var model=rectangle._model;var rectangleElementOptions=this.chart.options.elements.rectangle;model.backgroundColor=custom.backgroundColor?custom.backgroundColor:helpers.valueAtIndexOrDefault(dataset.backgroundColor,index,rectangleElementOptions.backgroundColor);model.borderColor=custom.borderColor?custom.borderColor:helpers.valueAtIndexOrDefault(dataset.borderColor,index,rectangleElementOptions.borderColor);model.borderWidth=custom.borderWidth?custom.borderWidth:helpers.valueAtIndexOrDefault(dataset.borderWidth,index,rectangleElementOptions.borderWidth);}});Chart.controllers.horizontalBar=Chart.controllers.bar.extend({/**
		 * @private
		 */getValueScaleId:function getValueScaleId(){return this.getMeta().xAxisID;},/**
		 * @private
		 */getIndexScaleId:function getIndexScaleId(){return this.getMeta().yAxisID;}});};},{"25":25,"40":40,"45":45}],16:[function(require,module,exports){'use strict';var defaults=require(25);var elements=require(40);var helpers=require(45);defaults._set('bubble',{hover:{mode:'single'},scales:{xAxes:[{type:'linear',// bubble should probably use a linear scale by default
position:'bottom',id:'x-axis-0'// need an ID so datasets can reference the scale
}],yAxes:[{type:'linear',position:'left',id:'y-axis-0'}]},tooltips:{callbacks:{title:function title(){// Title doesn't make sense for scatter since we format the data as a point
return'';},label:function label(item,data){var datasetLabel=data.datasets[item.datasetIndex].label||'';var dataPoint=data.datasets[item.datasetIndex].data[item.index];return datasetLabel+': ('+item.xLabel+', '+item.yLabel+', '+dataPoint.r+')';}}}});module.exports=function(Chart){Chart.controllers.bubble=Chart.DatasetController.extend({/**
		 * @protected
		 */dataElementType:elements.Point,/**
		 * @protected
		 */update:function update(reset){var me=this;var meta=me.getMeta();var points=meta.data;// Update Points
helpers.each(points,function(point,index){me.updateElement(point,index,reset);});},/**
		 * @protected
		 */updateElement:function updateElement(point,index,reset){var me=this;var meta=me.getMeta();var custom=point.custom||{};var xScale=me.getScaleForId(meta.xAxisID);var yScale=me.getScaleForId(meta.yAxisID);var options=me._resolveElementOptions(point,index);var data=me.getDataset().data[index];var dsIndex=me.index;var x=reset?xScale.getPixelForDecimal(0.5):xScale.getPixelForValue((typeof data==="undefined"?"undefined":_typeof2(data))==='object'?data:NaN,index,dsIndex);var y=reset?yScale.getBasePixel():yScale.getPixelForValue(data,index,dsIndex);point._xScale=xScale;point._yScale=yScale;point._options=options;point._datasetIndex=dsIndex;point._index=index;point._model={backgroundColor:options.backgroundColor,borderColor:options.borderColor,borderWidth:options.borderWidth,hitRadius:options.hitRadius,pointStyle:options.pointStyle,radius:reset?0:options.radius,skip:custom.skip||isNaN(x)||isNaN(y),x:x,y:y};point.pivot();},/**
		 * @protected
		 */setHoverStyle:function setHoverStyle(point){var model=point._model;var options=point._options;model.backgroundColor=helpers.valueOrDefault(options.hoverBackgroundColor,helpers.getHoverColor(options.backgroundColor));model.borderColor=helpers.valueOrDefault(options.hoverBorderColor,helpers.getHoverColor(options.borderColor));model.borderWidth=helpers.valueOrDefault(options.hoverBorderWidth,options.borderWidth);model.radius=options.radius+options.hoverRadius;},/**
		 * @protected
		 */removeHoverStyle:function removeHoverStyle(point){var model=point._model;var options=point._options;model.backgroundColor=options.backgroundColor;model.borderColor=options.borderColor;model.borderWidth=options.borderWidth;model.radius=options.radius;},/**
		 * @private
		 */_resolveElementOptions:function _resolveElementOptions(point,index){var me=this;var chart=me.chart;var datasets=chart.data.datasets;var dataset=datasets[me.index];var custom=point.custom||{};var options=chart.options.elements.point;var resolve=helpers.options.resolve;var data=dataset.data[index];var values={};var i,ilen,key;// Scriptable options
var context={chart:chart,dataIndex:index,dataset:dataset,datasetIndex:me.index};var keys=['backgroundColor','borderColor','borderWidth','hoverBackgroundColor','hoverBorderColor','hoverBorderWidth','hoverRadius','hitRadius','pointStyle'];for(i=0,ilen=keys.length;i<ilen;++i){key=keys[i];values[key]=resolve([custom[key],dataset[key],options[key]],context,index);}// Custom radius resolution
values.radius=resolve([custom.radius,data?data.r:undefined,dataset.radius,options.radius],context,index);return values;}});};},{"25":25,"40":40,"45":45}],17:[function(require,module,exports){'use strict';var defaults=require(25);var elements=require(40);var helpers=require(45);defaults._set('doughnut',{animation:{// Boolean - Whether we animate the rotation of the Doughnut
animateRotate:true,// Boolean - Whether we animate scaling the Doughnut from the centre
animateScale:false},hover:{mode:'single'},legendCallback:function legendCallback(chart){var text=[];text.push('<ul class="'+chart.id+'-legend">');var data=chart.data;var datasets=data.datasets;var labels=data.labels;if(datasets.length){for(var i=0;i<datasets[0].data.length;++i){text.push('<li><span style="background-color:'+datasets[0].backgroundColor[i]+'"></span>');if(labels[i]){text.push(labels[i]);}text.push('</li>');}}text.push('</ul>');return text.join('');},legend:{labels:{generateLabels:function generateLabels(chart){var data=chart.data;if(data.labels.length&&data.datasets.length){return data.labels.map(function(label,i){var meta=chart.getDatasetMeta(0);var ds=data.datasets[0];var arc=meta.data[i];var custom=arc&&arc.custom||{};var valueAtIndexOrDefault=helpers.valueAtIndexOrDefault;var arcOpts=chart.options.elements.arc;var fill=custom.backgroundColor?custom.backgroundColor:valueAtIndexOrDefault(ds.backgroundColor,i,arcOpts.backgroundColor);var stroke=custom.borderColor?custom.borderColor:valueAtIndexOrDefault(ds.borderColor,i,arcOpts.borderColor);var bw=custom.borderWidth?custom.borderWidth:valueAtIndexOrDefault(ds.borderWidth,i,arcOpts.borderWidth);return{text:label,fillStyle:fill,strokeStyle:stroke,lineWidth:bw,hidden:isNaN(ds.data[i])||meta.data[i].hidden,// Extra data used for toggling the correct item
index:i};});}return[];}},onClick:function onClick(e,legendItem){var index=legendItem.index;var chart=this.chart;var i,ilen,meta;for(i=0,ilen=(chart.data.datasets||[]).length;i<ilen;++i){meta=chart.getDatasetMeta(i);// toggle visibility of index if exists
if(meta.data[index]){meta.data[index].hidden=!meta.data[index].hidden;}}chart.update();}},// The percentage of the chart that we cut out of the middle.
cutoutPercentage:50,// The rotation of the chart, where the first data arc begins.
rotation:Math.PI*-0.5,// The total circumference of the chart.
circumference:Math.PI*2.0,// Need to override these to give a nice default
tooltips:{callbacks:{title:function title(){return'';},label:function label(tooltipItem,data){var dataLabel=data.labels[tooltipItem.index];var value=': '+data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];if(helpers.isArray(dataLabel)){// show value on first line of multiline label
// need to clone because we are changing the value
dataLabel=dataLabel.slice();dataLabel[0]+=value;}else{dataLabel+=value;}return dataLabel;}}}});defaults._set('pie',helpers.clone(defaults.doughnut));defaults._set('pie',{cutoutPercentage:0});module.exports=function(Chart){Chart.controllers.doughnut=Chart.controllers.pie=Chart.DatasetController.extend({dataElementType:elements.Arc,linkScales:helpers.noop,// Get index of the dataset in relation to the visible datasets. This allows determining the inner and outer radius correctly
getRingIndex:function getRingIndex(datasetIndex){var ringIndex=0;for(var j=0;j<datasetIndex;++j){if(this.chart.isDatasetVisible(j)){++ringIndex;}}return ringIndex;},update:function update(reset){var me=this;var chart=me.chart;var chartArea=chart.chartArea;var opts=chart.options;var arcOpts=opts.elements.arc;var availableWidth=chartArea.right-chartArea.left-arcOpts.borderWidth;var availableHeight=chartArea.bottom-chartArea.top-arcOpts.borderWidth;var minSize=Math.min(availableWidth,availableHeight);var offset={x:0,y:0};var meta=me.getMeta();var cutoutPercentage=opts.cutoutPercentage;var circumference=opts.circumference;// If the chart's circumference isn't a full circle, calculate minSize as a ratio of the width/height of the arc
if(circumference<Math.PI*2.0){var startAngle=opts.rotation%(Math.PI*2.0);startAngle+=Math.PI*2.0*(startAngle>=Math.PI?-1:startAngle<-Math.PI?1:0);var endAngle=startAngle+circumference;var start={x:Math.cos(startAngle),y:Math.sin(startAngle)};var end={x:Math.cos(endAngle),y:Math.sin(endAngle)};var contains0=startAngle<=0&&endAngle>=0||startAngle<=Math.PI*2.0&&Math.PI*2.0<=endAngle;var contains90=startAngle<=Math.PI*0.5&&Math.PI*0.5<=endAngle||startAngle<=Math.PI*2.5&&Math.PI*2.5<=endAngle;var contains180=startAngle<=-Math.PI&&-Math.PI<=endAngle||startAngle<=Math.PI&&Math.PI<=endAngle;var contains270=startAngle<=-Math.PI*0.5&&-Math.PI*0.5<=endAngle||startAngle<=Math.PI*1.5&&Math.PI*1.5<=endAngle;var cutout=cutoutPercentage/100.0;var min={x:contains180?-1:Math.min(start.x*(start.x<0?1:cutout),end.x*(end.x<0?1:cutout)),y:contains270?-1:Math.min(start.y*(start.y<0?1:cutout),end.y*(end.y<0?1:cutout))};var max={x:contains0?1:Math.max(start.x*(start.x>0?1:cutout),end.x*(end.x>0?1:cutout)),y:contains90?1:Math.max(start.y*(start.y>0?1:cutout),end.y*(end.y>0?1:cutout))};var size={width:(max.x-min.x)*0.5,height:(max.y-min.y)*0.5};minSize=Math.min(availableWidth/size.width,availableHeight/size.height);offset={x:(max.x+min.x)*-0.5,y:(max.y+min.y)*-0.5};}chart.borderWidth=me.getMaxBorderWidth(meta.data);chart.outerRadius=Math.max((minSize-chart.borderWidth)/2,0);chart.innerRadius=Math.max(cutoutPercentage?chart.outerRadius/100*cutoutPercentage:0,0);chart.radiusLength=(chart.outerRadius-chart.innerRadius)/chart.getVisibleDatasetCount();chart.offsetX=offset.x*chart.outerRadius;chart.offsetY=offset.y*chart.outerRadius;meta.total=me.calculateTotal();me.outerRadius=chart.outerRadius-chart.radiusLength*me.getRingIndex(me.index);me.innerRadius=Math.max(me.outerRadius-chart.radiusLength,0);helpers.each(meta.data,function(arc,index){me.updateElement(arc,index,reset);});},updateElement:function updateElement(arc,index,reset){var me=this;var chart=me.chart;var chartArea=chart.chartArea;var opts=chart.options;var animationOpts=opts.animation;var centerX=(chartArea.left+chartArea.right)/2;var centerY=(chartArea.top+chartArea.bottom)/2;var startAngle=opts.rotation;// non reset case handled later
var endAngle=opts.rotation;// non reset case handled later
var dataset=me.getDataset();var circumference=reset&&animationOpts.animateRotate?0:arc.hidden?0:me.calculateCircumference(dataset.data[index])*(opts.circumference/(2.0*Math.PI));var innerRadius=reset&&animationOpts.animateScale?0:me.innerRadius;var outerRadius=reset&&animationOpts.animateScale?0:me.outerRadius;var valueAtIndexOrDefault=helpers.valueAtIndexOrDefault;helpers.extend(arc,{// Utility
_datasetIndex:me.index,_index:index,// Desired view properties
_model:{x:centerX+chart.offsetX,y:centerY+chart.offsetY,startAngle:startAngle,endAngle:endAngle,circumference:circumference,outerRadius:outerRadius,innerRadius:innerRadius,label:valueAtIndexOrDefault(dataset.label,index,chart.data.labels[index])}});var model=arc._model;// Resets the visual styles
this.removeHoverStyle(arc);// Set correct angles if not resetting
if(!reset||!animationOpts.animateRotate){if(index===0){model.startAngle=opts.rotation;}else{model.startAngle=me.getMeta().data[index-1]._model.endAngle;}model.endAngle=model.startAngle+model.circumference;}arc.pivot();},removeHoverStyle:function removeHoverStyle(arc){Chart.DatasetController.prototype.removeHoverStyle.call(this,arc,this.chart.options.elements.arc);},calculateTotal:function calculateTotal(){var dataset=this.getDataset();var meta=this.getMeta();var total=0;var value;helpers.each(meta.data,function(element,index){value=dataset.data[index];if(!isNaN(value)&&!element.hidden){total+=Math.abs(value);}});/* if (total === 0) {
				total = NaN;
			}*/return total;},calculateCircumference:function calculateCircumference(value){var total=this.getMeta().total;if(total>0&&!isNaN(value)){return Math.PI*2.0*(Math.abs(value)/total);}return 0;},// gets the max border or hover width to properly scale pie charts
getMaxBorderWidth:function getMaxBorderWidth(arcs){var max=0;var index=this.index;var length=arcs.length;var borderWidth;var hoverWidth;for(var i=0;i<length;i++){borderWidth=arcs[i]._model?arcs[i]._model.borderWidth:0;hoverWidth=arcs[i]._chart?arcs[i]._chart.config.data.datasets[index].hoverBorderWidth:0;max=borderWidth>max?borderWidth:max;max=hoverWidth>max?hoverWidth:max;}return max;}});};},{"25":25,"40":40,"45":45}],18:[function(require,module,exports){'use strict';var defaults=require(25);var elements=require(40);var helpers=require(45);defaults._set('line',{showLines:true,spanGaps:false,hover:{mode:'label'},scales:{xAxes:[{type:'category',id:'x-axis-0'}],yAxes:[{type:'linear',id:'y-axis-0'}]}});module.exports=function(Chart){function lineEnabled(dataset,options){return helpers.valueOrDefault(dataset.showLine,options.showLines);}Chart.controllers.line=Chart.DatasetController.extend({datasetElementType:elements.Line,dataElementType:elements.Point,update:function update(reset){var me=this;var meta=me.getMeta();var line=meta.dataset;var points=meta.data||[];var options=me.chart.options;var lineElementOptions=options.elements.line;var scale=me.getScaleForId(meta.yAxisID);var i,ilen,custom;var dataset=me.getDataset();var showLine=lineEnabled(dataset,options);// Update Line
if(showLine){custom=line.custom||{};// Compatibility: If the properties are defined with only the old name, use those values
if(dataset.tension!==undefined&&dataset.lineTension===undefined){dataset.lineTension=dataset.tension;}// Utility
line._scale=scale;line._datasetIndex=me.index;// Data
line._children=points;// Model
line._model={// Appearance
// The default behavior of lines is to break at null values, according
// to https://github.com/chartjs/Chart.js/issues/2435#issuecomment-216718158
// This option gives lines the ability to span gaps
spanGaps:dataset.spanGaps?dataset.spanGaps:options.spanGaps,tension:custom.tension?custom.tension:helpers.valueOrDefault(dataset.lineTension,lineElementOptions.tension),backgroundColor:custom.backgroundColor?custom.backgroundColor:dataset.backgroundColor||lineElementOptions.backgroundColor,borderWidth:custom.borderWidth?custom.borderWidth:dataset.borderWidth||lineElementOptions.borderWidth,borderColor:custom.borderColor?custom.borderColor:dataset.borderColor||lineElementOptions.borderColor,borderCapStyle:custom.borderCapStyle?custom.borderCapStyle:dataset.borderCapStyle||lineElementOptions.borderCapStyle,borderDash:custom.borderDash?custom.borderDash:dataset.borderDash||lineElementOptions.borderDash,borderDashOffset:custom.borderDashOffset?custom.borderDashOffset:dataset.borderDashOffset||lineElementOptions.borderDashOffset,borderJoinStyle:custom.borderJoinStyle?custom.borderJoinStyle:dataset.borderJoinStyle||lineElementOptions.borderJoinStyle,fill:custom.fill?custom.fill:dataset.fill!==undefined?dataset.fill:lineElementOptions.fill,steppedLine:custom.steppedLine?custom.steppedLine:helpers.valueOrDefault(dataset.steppedLine,lineElementOptions.stepped),cubicInterpolationMode:custom.cubicInterpolationMode?custom.cubicInterpolationMode:helpers.valueOrDefault(dataset.cubicInterpolationMode,lineElementOptions.cubicInterpolationMode)};line.pivot();}// Update Points
for(i=0,ilen=points.length;i<ilen;++i){me.updateElement(points[i],i,reset);}if(showLine&&line._model.tension!==0){me.updateBezierControlPoints();}// Now pivot the point for animation
for(i=0,ilen=points.length;i<ilen;++i){points[i].pivot();}},getPointBackgroundColor:function getPointBackgroundColor(point,index){var backgroundColor=this.chart.options.elements.point.backgroundColor;var dataset=this.getDataset();var custom=point.custom||{};if(custom.backgroundColor){backgroundColor=custom.backgroundColor;}else if(dataset.pointBackgroundColor){backgroundColor=helpers.valueAtIndexOrDefault(dataset.pointBackgroundColor,index,backgroundColor);}else if(dataset.backgroundColor){backgroundColor=dataset.backgroundColor;}return backgroundColor;},getPointBorderColor:function getPointBorderColor(point,index){var borderColor=this.chart.options.elements.point.borderColor;var dataset=this.getDataset();var custom=point.custom||{};if(custom.borderColor){borderColor=custom.borderColor;}else if(dataset.pointBorderColor){borderColor=helpers.valueAtIndexOrDefault(dataset.pointBorderColor,index,borderColor);}else if(dataset.borderColor){borderColor=dataset.borderColor;}return borderColor;},getPointBorderWidth:function getPointBorderWidth(point,index){var borderWidth=this.chart.options.elements.point.borderWidth;var dataset=this.getDataset();var custom=point.custom||{};if(!isNaN(custom.borderWidth)){borderWidth=custom.borderWidth;}else if(!isNaN(dataset.pointBorderWidth)||helpers.isArray(dataset.pointBorderWidth)){borderWidth=helpers.valueAtIndexOrDefault(dataset.pointBorderWidth,index,borderWidth);}else if(!isNaN(dataset.borderWidth)){borderWidth=dataset.borderWidth;}return borderWidth;},updateElement:function updateElement(point,index,reset){var me=this;var meta=me.getMeta();var custom=point.custom||{};var dataset=me.getDataset();var datasetIndex=me.index;var value=dataset.data[index];var yScale=me.getScaleForId(meta.yAxisID);var xScale=me.getScaleForId(meta.xAxisID);var pointOptions=me.chart.options.elements.point;var x,y;// Compatibility: If the properties are defined with only the old name, use those values
if(dataset.radius!==undefined&&dataset.pointRadius===undefined){dataset.pointRadius=dataset.radius;}if(dataset.hitRadius!==undefined&&dataset.pointHitRadius===undefined){dataset.pointHitRadius=dataset.hitRadius;}x=xScale.getPixelForValue((typeof value==="undefined"?"undefined":_typeof2(value))==='object'?value:NaN,index,datasetIndex);y=reset?yScale.getBasePixel():me.calculatePointY(value,index,datasetIndex);// Utility
point._xScale=xScale;point._yScale=yScale;point._datasetIndex=datasetIndex;point._index=index;// Desired view properties
point._model={x:x,y:y,skip:custom.skip||isNaN(x)||isNaN(y),// Appearance
radius:custom.radius||helpers.valueAtIndexOrDefault(dataset.pointRadius,index,pointOptions.radius),pointStyle:custom.pointStyle||helpers.valueAtIndexOrDefault(dataset.pointStyle,index,pointOptions.pointStyle),backgroundColor:me.getPointBackgroundColor(point,index),borderColor:me.getPointBorderColor(point,index),borderWidth:me.getPointBorderWidth(point,index),tension:meta.dataset._model?meta.dataset._model.tension:0,steppedLine:meta.dataset._model?meta.dataset._model.steppedLine:false,// Tooltip
hitRadius:custom.hitRadius||helpers.valueAtIndexOrDefault(dataset.pointHitRadius,index,pointOptions.hitRadius)};},calculatePointY:function calculatePointY(value,index,datasetIndex){var me=this;var chart=me.chart;var meta=me.getMeta();var yScale=me.getScaleForId(meta.yAxisID);var sumPos=0;var sumNeg=0;var i,ds,dsMeta;if(yScale.options.stacked){for(i=0;i<datasetIndex;i++){ds=chart.data.datasets[i];dsMeta=chart.getDatasetMeta(i);if(dsMeta.type==='line'&&dsMeta.yAxisID===yScale.id&&chart.isDatasetVisible(i)){var stackedRightValue=Number(yScale.getRightValue(ds.data[index]));if(stackedRightValue<0){sumNeg+=stackedRightValue||0;}else{sumPos+=stackedRightValue||0;}}}var rightValue=Number(yScale.getRightValue(value));if(rightValue<0){return yScale.getPixelForValue(sumNeg+rightValue);}return yScale.getPixelForValue(sumPos+rightValue);}return yScale.getPixelForValue(value);},updateBezierControlPoints:function updateBezierControlPoints(){var me=this;var meta=me.getMeta();var area=me.chart.chartArea;var points=meta.data||[];var i,ilen,point,model,controlPoints;// Only consider points that are drawn in case the spanGaps option is used
if(meta.dataset._model.spanGaps){points=points.filter(function(pt){return!pt._model.skip;});}function capControlPoint(pt,min,max){return Math.max(Math.min(pt,max),min);}if(meta.dataset._model.cubicInterpolationMode==='monotone'){helpers.splineCurveMonotone(points);}else{for(i=0,ilen=points.length;i<ilen;++i){point=points[i];model=point._model;controlPoints=helpers.splineCurve(helpers.previousItem(points,i)._model,model,helpers.nextItem(points,i)._model,meta.dataset._model.tension);model.controlPointPreviousX=controlPoints.previous.x;model.controlPointPreviousY=controlPoints.previous.y;model.controlPointNextX=controlPoints.next.x;model.controlPointNextY=controlPoints.next.y;}}if(me.chart.options.elements.line.capBezierPoints){for(i=0,ilen=points.length;i<ilen;++i){model=points[i]._model;model.controlPointPreviousX=capControlPoint(model.controlPointPreviousX,area.left,area.right);model.controlPointPreviousY=capControlPoint(model.controlPointPreviousY,area.top,area.bottom);model.controlPointNextX=capControlPoint(model.controlPointNextX,area.left,area.right);model.controlPointNextY=capControlPoint(model.controlPointNextY,area.top,area.bottom);}}},draw:function draw(){var me=this;var chart=me.chart;var meta=me.getMeta();var points=meta.data||[];var area=chart.chartArea;var ilen=points.length;var i=0;helpers.canvas.clipArea(chart.ctx,area);if(lineEnabled(me.getDataset(),chart.options)){meta.dataset.draw();}helpers.canvas.unclipArea(chart.ctx);// Draw the points
for(;i<ilen;++i){points[i].draw(area);}},setHoverStyle:function setHoverStyle(point){// Point
var dataset=this.chart.data.datasets[point._datasetIndex];var index=point._index;var custom=point.custom||{};var model=point._model;model.radius=custom.hoverRadius||helpers.valueAtIndexOrDefault(dataset.pointHoverRadius,index,this.chart.options.elements.point.hoverRadius);model.backgroundColor=custom.hoverBackgroundColor||helpers.valueAtIndexOrDefault(dataset.pointHoverBackgroundColor,index,helpers.getHoverColor(model.backgroundColor));model.borderColor=custom.hoverBorderColor||helpers.valueAtIndexOrDefault(dataset.pointHoverBorderColor,index,helpers.getHoverColor(model.borderColor));model.borderWidth=custom.hoverBorderWidth||helpers.valueAtIndexOrDefault(dataset.pointHoverBorderWidth,index,model.borderWidth);},removeHoverStyle:function removeHoverStyle(point){var me=this;var dataset=me.chart.data.datasets[point._datasetIndex];var index=point._index;var custom=point.custom||{};var model=point._model;// Compatibility: If the properties are defined with only the old name, use those values
if(dataset.radius!==undefined&&dataset.pointRadius===undefined){dataset.pointRadius=dataset.radius;}model.radius=custom.radius||helpers.valueAtIndexOrDefault(dataset.pointRadius,index,me.chart.options.elements.point.radius);model.backgroundColor=me.getPointBackgroundColor(point,index);model.borderColor=me.getPointBorderColor(point,index);model.borderWidth=me.getPointBorderWidth(point,index);}});};},{"25":25,"40":40,"45":45}],19:[function(require,module,exports){'use strict';var defaults=require(25);var elements=require(40);var helpers=require(45);defaults._set('polarArea',{scale:{type:'radialLinear',angleLines:{display:false},gridLines:{circular:true},pointLabels:{display:false},ticks:{beginAtZero:true}},// Boolean - Whether to animate the rotation of the chart
animation:{animateRotate:true,animateScale:true},startAngle:-0.5*Math.PI,legendCallback:function legendCallback(chart){var text=[];text.push('<ul class="'+chart.id+'-legend">');var data=chart.data;var datasets=data.datasets;var labels=data.labels;if(datasets.length){for(var i=0;i<datasets[0].data.length;++i){text.push('<li><span style="background-color:'+datasets[0].backgroundColor[i]+'"></span>');if(labels[i]){text.push(labels[i]);}text.push('</li>');}}text.push('</ul>');return text.join('');},legend:{labels:{generateLabels:function generateLabels(chart){var data=chart.data;if(data.labels.length&&data.datasets.length){return data.labels.map(function(label,i){var meta=chart.getDatasetMeta(0);var ds=data.datasets[0];var arc=meta.data[i];var custom=arc.custom||{};var valueAtIndexOrDefault=helpers.valueAtIndexOrDefault;var arcOpts=chart.options.elements.arc;var fill=custom.backgroundColor?custom.backgroundColor:valueAtIndexOrDefault(ds.backgroundColor,i,arcOpts.backgroundColor);var stroke=custom.borderColor?custom.borderColor:valueAtIndexOrDefault(ds.borderColor,i,arcOpts.borderColor);var bw=custom.borderWidth?custom.borderWidth:valueAtIndexOrDefault(ds.borderWidth,i,arcOpts.borderWidth);return{text:label,fillStyle:fill,strokeStyle:stroke,lineWidth:bw,hidden:isNaN(ds.data[i])||meta.data[i].hidden,// Extra data used for toggling the correct item
index:i};});}return[];}},onClick:function onClick(e,legendItem){var index=legendItem.index;var chart=this.chart;var i,ilen,meta;for(i=0,ilen=(chart.data.datasets||[]).length;i<ilen;++i){meta=chart.getDatasetMeta(i);meta.data[index].hidden=!meta.data[index].hidden;}chart.update();}},// Need to override these to give a nice default
tooltips:{callbacks:{title:function title(){return'';},label:function label(item,data){return data.labels[item.index]+': '+item.yLabel;}}}});module.exports=function(Chart){Chart.controllers.polarArea=Chart.DatasetController.extend({dataElementType:elements.Arc,linkScales:helpers.noop,update:function update(reset){var me=this;var chart=me.chart;var chartArea=chart.chartArea;var meta=me.getMeta();var opts=chart.options;var arcOpts=opts.elements.arc;var minSize=Math.min(chartArea.right-chartArea.left,chartArea.bottom-chartArea.top);chart.outerRadius=Math.max((minSize-arcOpts.borderWidth/2)/2,0);chart.innerRadius=Math.max(opts.cutoutPercentage?chart.outerRadius/100*opts.cutoutPercentage:1,0);chart.radiusLength=(chart.outerRadius-chart.innerRadius)/chart.getVisibleDatasetCount();me.outerRadius=chart.outerRadius-chart.radiusLength*me.index;me.innerRadius=me.outerRadius-chart.radiusLength;meta.count=me.countVisibleElements();helpers.each(meta.data,function(arc,index){me.updateElement(arc,index,reset);});},updateElement:function updateElement(arc,index,reset){var me=this;var chart=me.chart;var dataset=me.getDataset();var opts=chart.options;var animationOpts=opts.animation;var scale=chart.scale;var labels=chart.data.labels;var circumference=me.calculateCircumference(dataset.data[index]);var centerX=scale.xCenter;var centerY=scale.yCenter;// If there is NaN data before us, we need to calculate the starting angle correctly.
// We could be way more efficient here, but its unlikely that the polar area chart will have a lot of data
var visibleCount=0;var meta=me.getMeta();for(var i=0;i<index;++i){if(!isNaN(dataset.data[i])&&!meta.data[i].hidden){++visibleCount;}}// var negHalfPI = -0.5 * Math.PI;
var datasetStartAngle=opts.startAngle;var distance=arc.hidden?0:scale.getDistanceFromCenterForValue(dataset.data[index]);var startAngle=datasetStartAngle+circumference*visibleCount;var endAngle=startAngle+(arc.hidden?0:circumference);var resetRadius=animationOpts.animateScale?0:scale.getDistanceFromCenterForValue(dataset.data[index]);helpers.extend(arc,{// Utility
_datasetIndex:me.index,_index:index,_scale:scale,// Desired view properties
_model:{x:centerX,y:centerY,innerRadius:0,outerRadius:reset?resetRadius:distance,startAngle:reset&&animationOpts.animateRotate?datasetStartAngle:startAngle,endAngle:reset&&animationOpts.animateRotate?datasetStartAngle:endAngle,label:helpers.valueAtIndexOrDefault(labels,index,labels[index])}});// Apply border and fill style
me.removeHoverStyle(arc);arc.pivot();},removeHoverStyle:function removeHoverStyle(arc){Chart.DatasetController.prototype.removeHoverStyle.call(this,arc,this.chart.options.elements.arc);},countVisibleElements:function countVisibleElements(){var dataset=this.getDataset();var meta=this.getMeta();var count=0;helpers.each(meta.data,function(element,index){if(!isNaN(dataset.data[index])&&!element.hidden){count++;}});return count;},calculateCircumference:function calculateCircumference(value){var count=this.getMeta().count;if(count>0&&!isNaN(value)){return 2*Math.PI/count;}return 0;}});};},{"25":25,"40":40,"45":45}],20:[function(require,module,exports){'use strict';var defaults=require(25);var elements=require(40);var helpers=require(45);defaults._set('radar',{scale:{type:'radialLinear'},elements:{line:{tension:0// no bezier in radar
}}});module.exports=function(Chart){Chart.controllers.radar=Chart.DatasetController.extend({datasetElementType:elements.Line,dataElementType:elements.Point,linkScales:helpers.noop,update:function update(reset){var me=this;var meta=me.getMeta();var line=meta.dataset;var points=meta.data;var custom=line.custom||{};var dataset=me.getDataset();var lineElementOptions=me.chart.options.elements.line;var scale=me.chart.scale;// Compatibility: If the properties are defined with only the old name, use those values
if(dataset.tension!==undefined&&dataset.lineTension===undefined){dataset.lineTension=dataset.tension;}helpers.extend(meta.dataset,{// Utility
_datasetIndex:me.index,_scale:scale,// Data
_children:points,_loop:true,// Model
_model:{// Appearance
tension:custom.tension?custom.tension:helpers.valueOrDefault(dataset.lineTension,lineElementOptions.tension),backgroundColor:custom.backgroundColor?custom.backgroundColor:dataset.backgroundColor||lineElementOptions.backgroundColor,borderWidth:custom.borderWidth?custom.borderWidth:dataset.borderWidth||lineElementOptions.borderWidth,borderColor:custom.borderColor?custom.borderColor:dataset.borderColor||lineElementOptions.borderColor,fill:custom.fill?custom.fill:dataset.fill!==undefined?dataset.fill:lineElementOptions.fill,borderCapStyle:custom.borderCapStyle?custom.borderCapStyle:dataset.borderCapStyle||lineElementOptions.borderCapStyle,borderDash:custom.borderDash?custom.borderDash:dataset.borderDash||lineElementOptions.borderDash,borderDashOffset:custom.borderDashOffset?custom.borderDashOffset:dataset.borderDashOffset||lineElementOptions.borderDashOffset,borderJoinStyle:custom.borderJoinStyle?custom.borderJoinStyle:dataset.borderJoinStyle||lineElementOptions.borderJoinStyle}});meta.dataset.pivot();// Update Points
helpers.each(points,function(point,index){me.updateElement(point,index,reset);},me);// Update bezier control points
me.updateBezierControlPoints();},updateElement:function updateElement(point,index,reset){var me=this;var custom=point.custom||{};var dataset=me.getDataset();var scale=me.chart.scale;var pointElementOptions=me.chart.options.elements.point;var pointPosition=scale.getPointPositionForValue(index,dataset.data[index]);// Compatibility: If the properties are defined with only the old name, use those values
if(dataset.radius!==undefined&&dataset.pointRadius===undefined){dataset.pointRadius=dataset.radius;}if(dataset.hitRadius!==undefined&&dataset.pointHitRadius===undefined){dataset.pointHitRadius=dataset.hitRadius;}helpers.extend(point,{// Utility
_datasetIndex:me.index,_index:index,_scale:scale,// Desired view properties
_model:{x:reset?scale.xCenter:pointPosition.x,// value not used in dataset scale, but we want a consistent API between scales
y:reset?scale.yCenter:pointPosition.y,// Appearance
tension:custom.tension?custom.tension:helpers.valueOrDefault(dataset.lineTension,me.chart.options.elements.line.tension),radius:custom.radius?custom.radius:helpers.valueAtIndexOrDefault(dataset.pointRadius,index,pointElementOptions.radius),backgroundColor:custom.backgroundColor?custom.backgroundColor:helpers.valueAtIndexOrDefault(dataset.pointBackgroundColor,index,pointElementOptions.backgroundColor),borderColor:custom.borderColor?custom.borderColor:helpers.valueAtIndexOrDefault(dataset.pointBorderColor,index,pointElementOptions.borderColor),borderWidth:custom.borderWidth?custom.borderWidth:helpers.valueAtIndexOrDefault(dataset.pointBorderWidth,index,pointElementOptions.borderWidth),pointStyle:custom.pointStyle?custom.pointStyle:helpers.valueAtIndexOrDefault(dataset.pointStyle,index,pointElementOptions.pointStyle),// Tooltip
hitRadius:custom.hitRadius?custom.hitRadius:helpers.valueAtIndexOrDefault(dataset.pointHitRadius,index,pointElementOptions.hitRadius)}});point._model.skip=custom.skip?custom.skip:isNaN(point._model.x)||isNaN(point._model.y);},updateBezierControlPoints:function updateBezierControlPoints(){var chartArea=this.chart.chartArea;var meta=this.getMeta();helpers.each(meta.data,function(point,index){var model=point._model;var controlPoints=helpers.splineCurve(helpers.previousItem(meta.data,index,true)._model,model,helpers.nextItem(meta.data,index,true)._model,model.tension);// Prevent the bezier going outside of the bounds of the graph
model.controlPointPreviousX=Math.max(Math.min(controlPoints.previous.x,chartArea.right),chartArea.left);model.controlPointPreviousY=Math.max(Math.min(controlPoints.previous.y,chartArea.bottom),chartArea.top);model.controlPointNextX=Math.max(Math.min(controlPoints.next.x,chartArea.right),chartArea.left);model.controlPointNextY=Math.max(Math.min(controlPoints.next.y,chartArea.bottom),chartArea.top);// Now pivot the point for animation
point.pivot();});},setHoverStyle:function setHoverStyle(point){// Point
var dataset=this.chart.data.datasets[point._datasetIndex];var custom=point.custom||{};var index=point._index;var model=point._model;model.radius=custom.hoverRadius?custom.hoverRadius:helpers.valueAtIndexOrDefault(dataset.pointHoverRadius,index,this.chart.options.elements.point.hoverRadius);model.backgroundColor=custom.hoverBackgroundColor?custom.hoverBackgroundColor:helpers.valueAtIndexOrDefault(dataset.pointHoverBackgroundColor,index,helpers.getHoverColor(model.backgroundColor));model.borderColor=custom.hoverBorderColor?custom.hoverBorderColor:helpers.valueAtIndexOrDefault(dataset.pointHoverBorderColor,index,helpers.getHoverColor(model.borderColor));model.borderWidth=custom.hoverBorderWidth?custom.hoverBorderWidth:helpers.valueAtIndexOrDefault(dataset.pointHoverBorderWidth,index,model.borderWidth);},removeHoverStyle:function removeHoverStyle(point){var dataset=this.chart.data.datasets[point._datasetIndex];var custom=point.custom||{};var index=point._index;var model=point._model;var pointElementOptions=this.chart.options.elements.point;model.radius=custom.radius?custom.radius:helpers.valueAtIndexOrDefault(dataset.pointRadius,index,pointElementOptions.radius);model.backgroundColor=custom.backgroundColor?custom.backgroundColor:helpers.valueAtIndexOrDefault(dataset.pointBackgroundColor,index,pointElementOptions.backgroundColor);model.borderColor=custom.borderColor?custom.borderColor:helpers.valueAtIndexOrDefault(dataset.pointBorderColor,index,pointElementOptions.borderColor);model.borderWidth=custom.borderWidth?custom.borderWidth:helpers.valueAtIndexOrDefault(dataset.pointBorderWidth,index,pointElementOptions.borderWidth);}});};},{"25":25,"40":40,"45":45}],21:[function(require,module,exports){'use strict';var defaults=require(25);defaults._set('scatter',{hover:{mode:'single'},scales:{xAxes:[{id:'x-axis-1',// need an ID so datasets can reference the scale
type:'linear',// scatter should not use a category axis
position:'bottom'}],yAxes:[{id:'y-axis-1',type:'linear',position:'left'}]},showLines:false,tooltips:{callbacks:{title:function title(){return'';// doesn't make sense for scatter since data are formatted as a point
},label:function label(item){return'('+item.xLabel+', '+item.yLabel+')';}}}});module.exports=function(Chart){// Scatter charts use line controllers
Chart.controllers.scatter=Chart.controllers.line;};},{"25":25}],22:[function(require,module,exports){/* global window: false */'use strict';var defaults=require(25);var Element=require(26);var helpers=require(45);defaults._set('global',{animation:{duration:1000,easing:'easeOutQuart',onProgress:helpers.noop,onComplete:helpers.noop}});module.exports=function(Chart){Chart.Animation=Element.extend({chart:null,// the animation associated chart instance
currentStep:0,// the current animation step
numSteps:60,// default number of steps
easing:'',// the easing to use for this animation
render:null,// render function used by the animation service
onAnimationProgress:null,// user specified callback to fire on each step of the animation
onAnimationComplete:null// user specified callback to fire when the animation finishes
});Chart.animationService={frameDuration:17,animations:[],dropFrames:0,request:null,/**
		 * @param {Chart} chart - The chart to animate.
		 * @param {Chart.Animation} animation - The animation that we will animate.
		 * @param {Number} duration - The animation duration in ms.
		 * @param {Boolean} lazy - if true, the chart is not marked as animating to enable more responsive interactions
		 */addAnimation:function addAnimation(chart,animation,duration,lazy){var animations=this.animations;var i,ilen;animation.chart=chart;if(!lazy){chart.animating=true;}for(i=0,ilen=animations.length;i<ilen;++i){if(animations[i].chart===chart){animations[i]=animation;return;}}animations.push(animation);// If there are no animations queued, manually kickstart a digest, for lack of a better word
if(animations.length===1){this.requestAnimationFrame();}},cancelAnimation:function cancelAnimation(chart){var index=helpers.findIndex(this.animations,function(animation){return animation.chart===chart;});if(index!==-1){this.animations.splice(index,1);chart.animating=false;}},requestAnimationFrame:function requestAnimationFrame(){var me=this;if(me.request===null){// Skip animation frame requests until the active one is executed.
// This can happen when processing mouse events, e.g. 'mousemove'
// and 'mouseout' events will trigger multiple renders.
me.request=helpers.requestAnimFrame.call(window,function(){me.request=null;me.startDigest();});}},/**
		 * @private
		 */startDigest:function startDigest(){var me=this;var startTime=Date.now();var framesToDrop=0;if(me.dropFrames>1){framesToDrop=Math.floor(me.dropFrames);me.dropFrames=me.dropFrames%1;}me.advance(1+framesToDrop);var endTime=Date.now();me.dropFrames+=(endTime-startTime)/me.frameDuration;// Do we have more stuff to animate?
if(me.animations.length>0){me.requestAnimationFrame();}},/**
		 * @private
		 */advance:function advance(count){var animations=this.animations;var animation,chart;var i=0;while(i<animations.length){animation=animations[i];chart=animation.chart;animation.currentStep=(animation.currentStep||0)+count;animation.currentStep=Math.min(animation.currentStep,animation.numSteps);helpers.callback(animation.render,[chart,animation],chart);helpers.callback(animation.onAnimationProgress,[animation],chart);if(animation.currentStep>=animation.numSteps){helpers.callback(animation.onAnimationComplete,[animation],chart);chart.animating=false;animations.splice(i,1);}else{++i;}}}};/**
	 * Provided for backward compatibility, use Chart.Animation instead
	 * @prop Chart.Animation#animationObject
	 * @deprecated since version 2.6.0
	 * @todo remove at version 3
	 */Object.defineProperty(Chart.Animation.prototype,'animationObject',{get:function get(){return this;}});/**
	 * Provided for backward compatibility, use Chart.Animation#chart instead
	 * @prop Chart.Animation#chartInstance
	 * @deprecated since version 2.6.0
	 * @todo remove at version 3
	 */Object.defineProperty(Chart.Animation.prototype,'chartInstance',{get:function get(){return this.chart;},set:function set(value){this.chart=value;}});};},{"25":25,"26":26,"45":45}],23:[function(require,module,exports){'use strict';var defaults=require(25);var helpers=require(45);var Interaction=require(28);var layouts=require(30);var platform=require(48);var plugins=require(31);module.exports=function(Chart){// Create a dictionary of chart types, to allow for extension of existing types
Chart.types={};// Store a reference to each instance - allowing us to globally resize chart instances on window resize.
// Destroy method on the chart will remove the instance of the chart from this reference.
Chart.instances={};// Controllers available for dataset visualization eg. bar, line, slice, etc.
Chart.controllers={};/**
	 * Initializes the given config with global and chart default values.
	 */function initConfig(config){config=config||{};// Do NOT use configMerge() for the data object because this method merges arrays
// and so would change references to labels and datasets, preventing data updates.
var data=config.data=config.data||{};data.datasets=data.datasets||[];data.labels=data.labels||[];config.options=helpers.configMerge(defaults.global,defaults[config.type],config.options||{});return config;}/**
	 * Updates the config of the chart
	 * @param chart {Chart} chart to update the options for
	 */function updateConfig(chart){var newOptions=chart.options;helpers.each(chart.scales,function(scale){layouts.removeBox(chart,scale);});newOptions=helpers.configMerge(Chart.defaults.global,Chart.defaults[chart.config.type],newOptions);chart.options=chart.config.options=newOptions;chart.ensureScalesHaveIDs();chart.buildOrUpdateScales();// Tooltip
chart.tooltip._options=newOptions.tooltips;chart.tooltip.initialize();}function positionIsHorizontal(position){return position==='top'||position==='bottom';}helpers.extend(Chart.prototype,/** @lends Chart */{/**
		 * @private
		 */construct:function construct(item,config){var me=this;config=initConfig(config);var context=platform.acquireContext(item,config);var canvas=context&&context.canvas;var height=canvas&&canvas.height;var width=canvas&&canvas.width;me.id=helpers.uid();me.ctx=context;me.canvas=canvas;me.config=config;me.width=width;me.height=height;me.aspectRatio=height?width/height:null;me.options=config.options;me._bufferedRender=false;/**
			 * Provided for backward compatibility, Chart and Chart.Controller have been merged,
			 * the "instance" still need to be defined since it might be called from plugins.
			 * @prop Chart#chart
			 * @deprecated since version 2.6.0
			 * @todo remove at version 3
			 * @private
			 */me.chart=me;me.controller=me;// chart.chart.controller #inception
// Add the chart instance to the global namespace
Chart.instances[me.id]=me;// Define alias to the config data: `chart.data === chart.config.data`
Object.defineProperty(me,'data',{get:function get(){return me.config.data;},set:function set(value){me.config.data=value;}});if(!context||!canvas){// The given item is not a compatible context2d element, let's return before finalizing
// the chart initialization but after setting basic chart / controller properties that
// can help to figure out that the chart is not valid (e.g chart.canvas !== null);
// https://github.com/chartjs/Chart.js/issues/2807
console.error("Failed to create chart: can't acquire context from the given item");return;}me.initialize();me.update();},/**
		 * @private
		 */initialize:function initialize(){var me=this;// Before init plugin notification
plugins.notify(me,'beforeInit');helpers.retinaScale(me,me.options.devicePixelRatio);me.bindEvents();if(me.options.responsive){// Initial resize before chart draws (must be silent to preserve initial animations).
me.resize(true);}// Make sure scales have IDs and are built before we build any controllers.
me.ensureScalesHaveIDs();me.buildOrUpdateScales();me.initToolTip();// After init plugin notification
plugins.notify(me,'afterInit');return me;},clear:function clear(){helpers.canvas.clear(this);return this;},stop:function stop(){// Stops any current animation loop occurring
Chart.animationService.cancelAnimation(this);return this;},resize:function resize(silent){var me=this;var options=me.options;var canvas=me.canvas;var aspectRatio=options.maintainAspectRatio&&me.aspectRatio||null;// the canvas render width and height will be casted to integers so make sure that
// the canvas display style uses the same integer values to avoid blurring effect.
// Set to 0 instead of canvas.size because the size defaults to 300x150 if the element is collased
var newWidth=Math.max(0,Math.floor(helpers.getMaximumWidth(canvas)));var newHeight=Math.max(0,Math.floor(aspectRatio?newWidth/aspectRatio:helpers.getMaximumHeight(canvas)));if(me.width===newWidth&&me.height===newHeight){return;}canvas.width=me.width=newWidth;canvas.height=me.height=newHeight;canvas.style.width=newWidth+'px';canvas.style.height=newHeight+'px';helpers.retinaScale(me,options.devicePixelRatio);if(!silent){// Notify any plugins about the resize
var newSize={width:newWidth,height:newHeight};plugins.notify(me,'resize',[newSize]);// Notify of resize
if(me.options.onResize){me.options.onResize(me,newSize);}me.stop();me.update(me.options.responsiveAnimationDuration);}},ensureScalesHaveIDs:function ensureScalesHaveIDs(){var options=this.options;var scalesOptions=options.scales||{};var scaleOptions=options.scale;helpers.each(scalesOptions.xAxes,function(xAxisOptions,index){xAxisOptions.id=xAxisOptions.id||'x-axis-'+index;});helpers.each(scalesOptions.yAxes,function(yAxisOptions,index){yAxisOptions.id=yAxisOptions.id||'y-axis-'+index;});if(scaleOptions){scaleOptions.id=scaleOptions.id||'scale';}},/**
		 * Builds a map of scale ID to scale object for future lookup.
		 */buildOrUpdateScales:function buildOrUpdateScales(){var me=this;var options=me.options;var scales=me.scales||{};var items=[];var updated=Object.keys(scales).reduce(function(obj,id){obj[id]=false;return obj;},{});if(options.scales){items=items.concat((options.scales.xAxes||[]).map(function(xAxisOptions){return{options:xAxisOptions,dtype:'category',dposition:'bottom'};}),(options.scales.yAxes||[]).map(function(yAxisOptions){return{options:yAxisOptions,dtype:'linear',dposition:'left'};}));}if(options.scale){items.push({options:options.scale,dtype:'radialLinear',isDefault:true,dposition:'chartArea'});}helpers.each(items,function(item){var scaleOptions=item.options;var id=scaleOptions.id;var scaleType=helpers.valueOrDefault(scaleOptions.type,item.dtype);if(positionIsHorizontal(scaleOptions.position)!==positionIsHorizontal(item.dposition)){scaleOptions.position=item.dposition;}updated[id]=true;var scale=null;if(id in scales&&scales[id].type===scaleType){scale=scales[id];scale.options=scaleOptions;scale.ctx=me.ctx;scale.chart=me;}else{var scaleClass=Chart.scaleService.getScaleConstructor(scaleType);if(!scaleClass){return;}scale=new scaleClass({id:id,type:scaleType,options:scaleOptions,ctx:me.ctx,chart:me});scales[scale.id]=scale;}scale.mergeTicksOptions();// TODO(SB): I think we should be able to remove this custom case (options.scale)
// and consider it as a regular scale part of the "scales"" map only! This would
// make the logic easier and remove some useless? custom code.
if(item.isDefault){me.scale=scale;}});// clear up discarded scales
helpers.each(updated,function(hasUpdated,id){if(!hasUpdated){delete scales[id];}});me.scales=scales;Chart.scaleService.addScalesToLayout(this);},buildOrUpdateControllers:function buildOrUpdateControllers(){var me=this;var types=[];var newControllers=[];helpers.each(me.data.datasets,function(dataset,datasetIndex){var meta=me.getDatasetMeta(datasetIndex);var type=dataset.type||me.config.type;if(meta.type&&meta.type!==type){me.destroyDatasetMeta(datasetIndex);meta=me.getDatasetMeta(datasetIndex);}meta.type=type;types.push(meta.type);if(meta.controller){meta.controller.updateIndex(datasetIndex);meta.controller.linkScales();}else{var ControllerClass=Chart.controllers[meta.type];if(ControllerClass===undefined){throw new Error('"'+meta.type+'" is not a chart type.');}meta.controller=new ControllerClass(me,datasetIndex);newControllers.push(meta.controller);}},me);return newControllers;},/**
		 * Reset the elements of all datasets
		 * @private
		 */resetElements:function resetElements(){var me=this;helpers.each(me.data.datasets,function(dataset,datasetIndex){me.getDatasetMeta(datasetIndex).controller.reset();},me);},/**
		* Resets the chart back to it's state before the initial animation
		*/reset:function reset(){this.resetElements();this.tooltip.initialize();},update:function update(config){var me=this;if(!config||(typeof config==="undefined"?"undefined":_typeof2(config))!=='object'){// backwards compatibility
config={duration:config,lazy:arguments[1]};}updateConfig(me);// plugins options references might have change, let's invalidate the cache
// https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167
plugins._invalidate(me);if(plugins.notify(me,'beforeUpdate')===false){return;}// In case the entire data object changed
me.tooltip._data=me.data;// Make sure dataset controllers are updated and new controllers are reset
var newControllers=me.buildOrUpdateControllers();// Make sure all dataset controllers have correct meta data counts
helpers.each(me.data.datasets,function(dataset,datasetIndex){me.getDatasetMeta(datasetIndex).controller.buildOrUpdateElements();},me);me.updateLayout();// Can only reset the new controllers after the scales have been updated
if(me.options.animation&&me.options.animation.duration){helpers.each(newControllers,function(controller){controller.reset();});}me.updateDatasets();// Need to reset tooltip in case it is displayed with elements that are removed
// after update.
me.tooltip.initialize();// Last active contains items that were previously in the tooltip.
// When we reset the tooltip, we need to clear it
me.lastActive=[];// Do this before render so that any plugins that need final scale updates can use it
plugins.notify(me,'afterUpdate');if(me._bufferedRender){me._bufferedRequest={duration:config.duration,easing:config.easing,lazy:config.lazy};}else{me.render(config);}},/**
		 * Updates the chart layout unless a plugin returns `false` to the `beforeLayout`
		 * hook, in which case, plugins will not be called on `afterLayout`.
		 * @private
		 */updateLayout:function updateLayout(){var me=this;if(plugins.notify(me,'beforeLayout')===false){return;}layouts.update(this,this.width,this.height);/**
			 * Provided for backward compatibility, use `afterLayout` instead.
			 * @method IPlugin#afterScaleUpdate
			 * @deprecated since version 2.5.0
			 * @todo remove at version 3
			 * @private
			 */plugins.notify(me,'afterScaleUpdate');plugins.notify(me,'afterLayout');},/**
		 * Updates all datasets unless a plugin returns `false` to the `beforeDatasetsUpdate`
		 * hook, in which case, plugins will not be called on `afterDatasetsUpdate`.
		 * @private
		 */updateDatasets:function updateDatasets(){var me=this;if(plugins.notify(me,'beforeDatasetsUpdate')===false){return;}for(var i=0,ilen=me.data.datasets.length;i<ilen;++i){me.updateDataset(i);}plugins.notify(me,'afterDatasetsUpdate');},/**
		 * Updates dataset at index unless a plugin returns `false` to the `beforeDatasetUpdate`
		 * hook, in which case, plugins will not be called on `afterDatasetUpdate`.
		 * @private
		 */updateDataset:function updateDataset(index){var me=this;var meta=me.getDatasetMeta(index);var args={meta:meta,index:index};if(plugins.notify(me,'beforeDatasetUpdate',[args])===false){return;}meta.controller.update();plugins.notify(me,'afterDatasetUpdate',[args]);},render:function render(config){var me=this;if(!config||(typeof config==="undefined"?"undefined":_typeof2(config))!=='object'){// backwards compatibility
config={duration:config,lazy:arguments[1]};}var duration=config.duration;var lazy=config.lazy;if(plugins.notify(me,'beforeRender')===false){return;}var animationOptions=me.options.animation;var onComplete=function onComplete(animation){plugins.notify(me,'afterRender');helpers.callback(animationOptions&&animationOptions.onComplete,[animation],me);};if(animationOptions&&(typeof duration!=='undefined'&&duration!==0||typeof duration==='undefined'&&animationOptions.duration!==0)){var animation=new Chart.Animation({numSteps:(duration||animationOptions.duration)/16.66,// 60 fps
easing:config.easing||animationOptions.easing,render:function render(chart,animationObject){var easingFunction=helpers.easing.effects[animationObject.easing];var currentStep=animationObject.currentStep;var stepDecimal=currentStep/animationObject.numSteps;chart.draw(easingFunction(stepDecimal),stepDecimal,currentStep);},onAnimationProgress:animationOptions.onProgress,onAnimationComplete:onComplete});Chart.animationService.addAnimation(me,animation,duration,lazy);}else{me.draw();// See https://github.com/chartjs/Chart.js/issues/3781
onComplete(new Chart.Animation({numSteps:0,chart:me}));}return me;},draw:function draw(easingValue){var me=this;me.clear();if(helpers.isNullOrUndef(easingValue)){easingValue=1;}me.transition(easingValue);if(plugins.notify(me,'beforeDraw',[easingValue])===false){return;}// Draw all the scales
helpers.each(me.boxes,function(box){box.draw(me.chartArea);},me);if(me.scale){me.scale.draw();}me.drawDatasets(easingValue);me._drawTooltip(easingValue);plugins.notify(me,'afterDraw',[easingValue]);},/**
		 * @private
		 */transition:function transition(easingValue){var me=this;for(var i=0,ilen=(me.data.datasets||[]).length;i<ilen;++i){if(me.isDatasetVisible(i)){me.getDatasetMeta(i).controller.transition(easingValue);}}me.tooltip.transition(easingValue);},/**
		 * Draws all datasets unless a plugin returns `false` to the `beforeDatasetsDraw`
		 * hook, in which case, plugins will not be called on `afterDatasetsDraw`.
		 * @private
		 */drawDatasets:function drawDatasets(easingValue){var me=this;if(plugins.notify(me,'beforeDatasetsDraw',[easingValue])===false){return;}// Draw datasets reversed to support proper line stacking
for(var i=(me.data.datasets||[]).length-1;i>=0;--i){if(me.isDatasetVisible(i)){me.drawDataset(i,easingValue);}}plugins.notify(me,'afterDatasetsDraw',[easingValue]);},/**
		 * Draws dataset at index unless a plugin returns `false` to the `beforeDatasetDraw`
		 * hook, in which case, plugins will not be called on `afterDatasetDraw`.
		 * @private
		 */drawDataset:function drawDataset(index,easingValue){var me=this;var meta=me.getDatasetMeta(index);var args={meta:meta,index:index,easingValue:easingValue};if(plugins.notify(me,'beforeDatasetDraw',[args])===false){return;}meta.controller.draw(easingValue);plugins.notify(me,'afterDatasetDraw',[args]);},/**
		 * Draws tooltip unless a plugin returns `false` to the `beforeTooltipDraw`
		 * hook, in which case, plugins will not be called on `afterTooltipDraw`.
		 * @private
		 */_drawTooltip:function _drawTooltip(easingValue){var me=this;var tooltip=me.tooltip;var args={tooltip:tooltip,easingValue:easingValue};if(plugins.notify(me,'beforeTooltipDraw',[args])===false){return;}tooltip.draw();plugins.notify(me,'afterTooltipDraw',[args]);},// Get the single element that was clicked on
// @return : An object containing the dataset index and element index of the matching element. Also contains the rectangle that was draw
getElementAtEvent:function getElementAtEvent(e){return Interaction.modes.single(this,e);},getElementsAtEvent:function getElementsAtEvent(e){return Interaction.modes.label(this,e,{intersect:true});},getElementsAtXAxis:function getElementsAtXAxis(e){return Interaction.modes['x-axis'](this,e,{intersect:true});},getElementsAtEventForMode:function getElementsAtEventForMode(e,mode,options){var method=Interaction.modes[mode];if(typeof method==='function'){return method(this,e,options);}return[];},getDatasetAtEvent:function getDatasetAtEvent(e){return Interaction.modes.dataset(this,e,{intersect:true});},getDatasetMeta:function getDatasetMeta(datasetIndex){var me=this;var dataset=me.data.datasets[datasetIndex];if(!dataset._meta){dataset._meta={};}var meta=dataset._meta[me.id];if(!meta){meta=dataset._meta[me.id]={type:null,data:[],dataset:null,controller:null,hidden:null,// See isDatasetVisible() comment
xAxisID:null,yAxisID:null};}return meta;},getVisibleDatasetCount:function getVisibleDatasetCount(){var count=0;for(var i=0,ilen=this.data.datasets.length;i<ilen;++i){if(this.isDatasetVisible(i)){count++;}}return count;},isDatasetVisible:function isDatasetVisible(datasetIndex){var meta=this.getDatasetMeta(datasetIndex);// meta.hidden is a per chart dataset hidden flag override with 3 states: if true or false,
// the dataset.hidden value is ignored, else if null, the dataset hidden state is returned.
return typeof meta.hidden==='boolean'?!meta.hidden:!this.data.datasets[datasetIndex].hidden;},generateLegend:function generateLegend(){return this.options.legendCallback(this);},/**
		 * @private
		 */destroyDatasetMeta:function destroyDatasetMeta(datasetIndex){var id=this.id;var dataset=this.data.datasets[datasetIndex];var meta=dataset._meta&&dataset._meta[id];if(meta){meta.controller.destroy();delete dataset._meta[id];}},destroy:function destroy(){var me=this;var canvas=me.canvas;var i,ilen;me.stop();// dataset controllers need to cleanup associated data
for(i=0,ilen=me.data.datasets.length;i<ilen;++i){me.destroyDatasetMeta(i);}if(canvas){me.unbindEvents();helpers.canvas.clear(me);platform.releaseContext(me.ctx);me.canvas=null;me.ctx=null;}plugins.notify(me,'destroy');delete Chart.instances[me.id];},toBase64Image:function toBase64Image(){return this.canvas.toDataURL.apply(this.canvas,arguments);},initToolTip:function initToolTip(){var me=this;me.tooltip=new Chart.Tooltip({_chart:me,_chartInstance:me,// deprecated, backward compatibility
_data:me.data,_options:me.options.tooltips},me);},/**
		 * @private
		 */bindEvents:function bindEvents(){var me=this;var listeners=me._listeners={};var listener=function listener(){me.eventHandler.apply(me,arguments);};helpers.each(me.options.events,function(type){platform.addEventListener(me,type,listener);listeners[type]=listener;});// Elements used to detect size change should not be injected for non responsive charts.
// See https://github.com/chartjs/Chart.js/issues/2210
if(me.options.responsive){listener=function listener(){me.resize();};platform.addEventListener(me,'resize',listener);listeners.resize=listener;}},/**
		 * @private
		 */unbindEvents:function unbindEvents(){var me=this;var listeners=me._listeners;if(!listeners){return;}delete me._listeners;helpers.each(listeners,function(listener,type){platform.removeEventListener(me,type,listener);});},updateHoverStyle:function updateHoverStyle(elements,mode,enabled){var method=enabled?'setHoverStyle':'removeHoverStyle';var element,i,ilen;for(i=0,ilen=elements.length;i<ilen;++i){element=elements[i];if(element){this.getDatasetMeta(element._datasetIndex).controller[method](element);}}},/**
		 * @private
		 */eventHandler:function eventHandler(e){var me=this;var tooltip=me.tooltip;if(plugins.notify(me,'beforeEvent',[e])===false){return;}// Buffer any update calls so that renders do not occur
me._bufferedRender=true;me._bufferedRequest=null;var changed=me.handleEvent(e);// for smooth tooltip animations issue #4989
// the tooltip should be the source of change
// Animation check workaround:
// tooltip._start will be null when tooltip isn't animating
if(tooltip){changed=tooltip._start?tooltip.handleEvent(e):changed|tooltip.handleEvent(e);}plugins.notify(me,'afterEvent',[e]);var bufferedRequest=me._bufferedRequest;if(bufferedRequest){// If we have an update that was triggered, we need to do a normal render
me.render(bufferedRequest);}else if(changed&&!me.animating){// If entering, leaving, or changing elements, animate the change via pivot
me.stop();// We only need to render at this point. Updating will cause scales to be
// recomputed generating flicker & using more memory than necessary.
me.render(me.options.hover.animationDuration,true);}me._bufferedRender=false;me._bufferedRequest=null;return me;},/**
		 * Handle an event
		 * @private
		 * @param {IEvent} event the event to handle
		 * @return {Boolean} true if the chart needs to re-render
		 */handleEvent:function handleEvent(e){var me=this;var options=me.options||{};var hoverOptions=options.hover;var changed=false;me.lastActive=me.lastActive||[];// Find Active Elements for hover and tooltips
if(e.type==='mouseout'){me.active=[];}else{me.active=me.getElementsAtEventForMode(e,hoverOptions.mode,hoverOptions);}// Invoke onHover hook
// Need to call with native event here to not break backwards compatibility
helpers.callback(options.onHover||options.hover.onHover,[e.native,me.active],me);if(e.type==='mouseup'||e.type==='click'){if(options.onClick){// Use e.native here for backwards compatibility
options.onClick.call(me,e.native,me.active);}}// Remove styling for last active (even if it may still be active)
if(me.lastActive.length){me.updateHoverStyle(me.lastActive,hoverOptions.mode,false);}// Built in hover styling
if(me.active.length&&hoverOptions.mode){me.updateHoverStyle(me.active,hoverOptions.mode,true);}changed=!helpers.arrayEquals(me.active,me.lastActive);// Remember Last Actives
me.lastActive=me.active;return changed;}});/**
	 * Provided for backward compatibility, use Chart instead.
	 * @class Chart.Controller
	 * @deprecated since version 2.6.0
	 * @todo remove at version 3
	 * @private
	 */Chart.Controller=Chart;};},{"25":25,"28":28,"30":30,"31":31,"45":45,"48":48}],24:[function(require,module,exports){'use strict';var helpers=require(45);module.exports=function(Chart){var arrayEvents=['push','pop','shift','splice','unshift'];/**
	 * Hooks the array methods that add or remove values ('push', pop', 'shift', 'splice',
	 * 'unshift') and notify the listener AFTER the array has been altered. Listeners are
	 * called on the 'onData*' callbacks (e.g. onDataPush, etc.) with same arguments.
	 */function listenArrayEvents(array,listener){if(array._chartjs){array._chartjs.listeners.push(listener);return;}Object.defineProperty(array,'_chartjs',{configurable:true,enumerable:false,value:{listeners:[listener]}});arrayEvents.forEach(function(key){var method='onData'+key.charAt(0).toUpperCase()+key.slice(1);var base=array[key];Object.defineProperty(array,key,{configurable:true,enumerable:false,value:function value(){var args=Array.prototype.slice.call(arguments);var res=base.apply(this,args);helpers.each(array._chartjs.listeners,function(object){if(typeof object[method]==='function'){object[method].apply(object,args);}});return res;}});});}/**
	 * Removes the given array event listener and cleanup extra attached properties (such as
	 * the _chartjs stub and overridden methods) if array doesn't have any more listeners.
	 */function unlistenArrayEvents(array,listener){var stub=array._chartjs;if(!stub){return;}var listeners=stub.listeners;var index=listeners.indexOf(listener);if(index!==-1){listeners.splice(index,1);}if(listeners.length>0){return;}arrayEvents.forEach(function(key){delete array[key];});delete array._chartjs;}// Base class for all dataset controllers (line, bar, etc)
Chart.DatasetController=function(chart,datasetIndex){this.initialize(chart,datasetIndex);};helpers.extend(Chart.DatasetController.prototype,{/**
		 * Element type used to generate a meta dataset (e.g. Chart.element.Line).
		 * @type {Chart.core.element}
		 */datasetElementType:null,/**
		 * Element type used to generate a meta data (e.g. Chart.element.Point).
		 * @type {Chart.core.element}
		 */dataElementType:null,initialize:function initialize(chart,datasetIndex){var me=this;me.chart=chart;me.index=datasetIndex;me.linkScales();me.addElements();},updateIndex:function updateIndex(datasetIndex){this.index=datasetIndex;},linkScales:function linkScales(){var me=this;var meta=me.getMeta();var dataset=me.getDataset();if(meta.xAxisID===null||!(meta.xAxisID in me.chart.scales)){meta.xAxisID=dataset.xAxisID||me.chart.options.scales.xAxes[0].id;}if(meta.yAxisID===null||!(meta.yAxisID in me.chart.scales)){meta.yAxisID=dataset.yAxisID||me.chart.options.scales.yAxes[0].id;}},getDataset:function getDataset(){return this.chart.data.datasets[this.index];},getMeta:function getMeta(){return this.chart.getDatasetMeta(this.index);},getScaleForId:function getScaleForId(scaleID){return this.chart.scales[scaleID];},reset:function reset(){this.update(true);},/**
		 * @private
		 */destroy:function destroy(){if(this._data){unlistenArrayEvents(this._data,this);}},createMetaDataset:function createMetaDataset(){var me=this;var type=me.datasetElementType;return type&&new type({_chart:me.chart,_datasetIndex:me.index});},createMetaData:function createMetaData(index){var me=this;var type=me.dataElementType;return type&&new type({_chart:me.chart,_datasetIndex:me.index,_index:index});},addElements:function addElements(){var me=this;var meta=me.getMeta();var data=me.getDataset().data||[];var metaData=meta.data;var i,ilen;for(i=0,ilen=data.length;i<ilen;++i){metaData[i]=metaData[i]||me.createMetaData(i);}meta.dataset=meta.dataset||me.createMetaDataset();},addElementAndReset:function addElementAndReset(index){var element=this.createMetaData(index);this.getMeta().data.splice(index,0,element);this.updateElement(element,index,true);},buildOrUpdateElements:function buildOrUpdateElements(){var me=this;var dataset=me.getDataset();var data=dataset.data||(dataset.data=[]);// In order to correctly handle data addition/deletion animation (an thus simulate
// real-time charts), we need to monitor these data modifications and synchronize
// the internal meta data accordingly.
if(me._data!==data){if(me._data){// This case happens when the user replaced the data array instance.
unlistenArrayEvents(me._data,me);}listenArrayEvents(data,me);me._data=data;}// Re-sync meta data in case the user replaced the data array or if we missed
// any updates and so make sure that we handle number of datapoints changing.
me.resyncElements();},update:helpers.noop,transition:function transition(easingValue){var meta=this.getMeta();var elements=meta.data||[];var ilen=elements.length;var i=0;for(;i<ilen;++i){elements[i].transition(easingValue);}if(meta.dataset){meta.dataset.transition(easingValue);}},draw:function draw(){var meta=this.getMeta();var elements=meta.data||[];var ilen=elements.length;var i=0;if(meta.dataset){meta.dataset.draw();}for(;i<ilen;++i){elements[i].draw();}},removeHoverStyle:function removeHoverStyle(element,elementOpts){var dataset=this.chart.data.datasets[element._datasetIndex];var index=element._index;var custom=element.custom||{};var valueOrDefault=helpers.valueAtIndexOrDefault;var model=element._model;model.backgroundColor=custom.backgroundColor?custom.backgroundColor:valueOrDefault(dataset.backgroundColor,index,elementOpts.backgroundColor);model.borderColor=custom.borderColor?custom.borderColor:valueOrDefault(dataset.borderColor,index,elementOpts.borderColor);model.borderWidth=custom.borderWidth?custom.borderWidth:valueOrDefault(dataset.borderWidth,index,elementOpts.borderWidth);},setHoverStyle:function setHoverStyle(element){var dataset=this.chart.data.datasets[element._datasetIndex];var index=element._index;var custom=element.custom||{};var valueOrDefault=helpers.valueAtIndexOrDefault;var getHoverColor=helpers.getHoverColor;var model=element._model;model.backgroundColor=custom.hoverBackgroundColor?custom.hoverBackgroundColor:valueOrDefault(dataset.hoverBackgroundColor,index,getHoverColor(model.backgroundColor));model.borderColor=custom.hoverBorderColor?custom.hoverBorderColor:valueOrDefault(dataset.hoverBorderColor,index,getHoverColor(model.borderColor));model.borderWidth=custom.hoverBorderWidth?custom.hoverBorderWidth:valueOrDefault(dataset.hoverBorderWidth,index,model.borderWidth);},/**
		 * @private
		 */resyncElements:function resyncElements(){var me=this;var meta=me.getMeta();var data=me.getDataset().data;var numMeta=meta.data.length;var numData=data.length;if(numData<numMeta){meta.data.splice(numData,numMeta-numData);}else if(numData>numMeta){me.insertElements(numMeta,numData-numMeta);}},/**
		 * @private
		 */insertElements:function insertElements(start,count){for(var i=0;i<count;++i){this.addElementAndReset(start+i);}},/**
		 * @private
		 */onDataPush:function onDataPush(){this.insertElements(this.getDataset().data.length-1,arguments.length);},/**
		 * @private
		 */onDataPop:function onDataPop(){this.getMeta().data.pop();},/**
		 * @private
		 */onDataShift:function onDataShift(){this.getMeta().data.shift();},/**
		 * @private
		 */onDataSplice:function onDataSplice(start,count){this.getMeta().data.splice(start,count);this.insertElements(start,arguments.length-2);},/**
		 * @private
		 */onDataUnshift:function onDataUnshift(){this.insertElements(0,arguments.length);}});Chart.DatasetController.extend=helpers.inherits;};},{"45":45}],25:[function(require,module,exports){'use strict';var helpers=require(45);module.exports={/**
	 * @private
	 */_set:function _set(scope,values){return helpers.merge(this[scope]||(this[scope]={}),values);}};},{"45":45}],26:[function(require,module,exports){'use strict';var color=require(3);var helpers=require(45);function interpolate(start,view,model,ease){var keys=Object.keys(model);var i,ilen,key,actual,origin,target,type,c0,c1;for(i=0,ilen=keys.length;i<ilen;++i){key=keys[i];target=model[key];// if a value is added to the model after pivot() has been called, the view
// doesn't contain it, so let's initialize the view to the target value.
if(!view.hasOwnProperty(key)){view[key]=target;}actual=view[key];if(actual===target||key[0]==='_'){continue;}if(!start.hasOwnProperty(key)){start[key]=actual;}origin=start[key];type=typeof target==="undefined"?"undefined":_typeof2(target);if(type===(typeof origin==="undefined"?"undefined":_typeof2(origin))){if(type==='string'){c0=color(origin);if(c0.valid){c1=color(target);if(c1.valid){view[key]=c1.mix(c0,ease).rgbString();continue;}}}else if(type==='number'&&isFinite(origin)&&isFinite(target)){view[key]=origin+(target-origin)*ease;continue;}}view[key]=target;}}var Element=function Element(configuration){helpers.extend(this,configuration);this.initialize.apply(this,arguments);};helpers.extend(Element.prototype,{initialize:function initialize(){this.hidden=false;},pivot:function pivot(){var me=this;if(!me._view){me._view=helpers.clone(me._model);}me._start={};return me;},transition:function transition(ease){var me=this;var model=me._model;var start=me._start;var view=me._view;// No animation -> No Transition
if(!model||ease===1){me._view=model;me._start=null;return me;}if(!view){view=me._view={};}if(!start){start=me._start={};}interpolate(start,view,model,ease);return me;},tooltipPosition:function tooltipPosition(){return{x:this._model.x,y:this._model.y};},hasValue:function hasValue(){return helpers.isNumber(this._model.x)&&helpers.isNumber(this._model.y);}});Element.extend=helpers.inherits;module.exports=Element;},{"3":3,"45":45}],27:[function(require,module,exports){/* global window: false *//* global document: false */'use strict';var color=require(3);var defaults=require(25);var helpers=require(45);module.exports=function(Chart){// -- Basic js utility methods
helpers.configMerge=function()/* objects ... */{return helpers.merge(helpers.clone(arguments[0]),[].slice.call(arguments,1),{merger:function merger(key,target,source,options){var tval=target[key]||{};var sval=source[key];if(key==='scales'){// scale config merging is complex. Add our own function here for that
target[key]=helpers.scaleMerge(tval,sval);}else if(key==='scale'){// used in polar area & radar charts since there is only one scale
target[key]=helpers.merge(tval,[Chart.scaleService.getScaleDefaults(sval.type),sval]);}else{helpers._merger(key,target,source,options);}}});};helpers.scaleMerge=function()/* objects ... */{return helpers.merge(helpers.clone(arguments[0]),[].slice.call(arguments,1),{merger:function merger(key,target,source,options){if(key==='xAxes'||key==='yAxes'){var slen=source[key].length;var i,type,scale;if(!target[key]){target[key]=[];}for(i=0;i<slen;++i){scale=source[key][i];type=helpers.valueOrDefault(scale.type,key==='xAxes'?'category':'linear');if(i>=target[key].length){target[key].push({});}if(!target[key][i].type||scale.type&&scale.type!==target[key][i].type){// new/untyped scale or type changed: let's apply the new defaults
// then merge source scale to correctly overwrite the defaults.
helpers.merge(target[key][i],[Chart.scaleService.getScaleDefaults(type),scale]);}else{// scales type are the same
helpers.merge(target[key][i],scale);}}}else{helpers._merger(key,target,source,options);}}});};helpers.where=function(collection,filterCallback){if(helpers.isArray(collection)&&Array.prototype.filter){return collection.filter(filterCallback);}var filtered=[];helpers.each(collection,function(item){if(filterCallback(item)){filtered.push(item);}});return filtered;};helpers.findIndex=Array.prototype.findIndex?function(array,callback,scope){return array.findIndex(callback,scope);}:function(array,callback,scope){scope=scope===undefined?array:scope;for(var i=0,ilen=array.length;i<ilen;++i){if(callback.call(scope,array[i],i,array)){return i;}}return-1;};helpers.findNextWhere=function(arrayToSearch,filterCallback,startIndex){// Default to start of the array
if(helpers.isNullOrUndef(startIndex)){startIndex=-1;}for(var i=startIndex+1;i<arrayToSearch.length;i++){var currentItem=arrayToSearch[i];if(filterCallback(currentItem)){return currentItem;}}};helpers.findPreviousWhere=function(arrayToSearch,filterCallback,startIndex){// Default to end of the array
if(helpers.isNullOrUndef(startIndex)){startIndex=arrayToSearch.length;}for(var i=startIndex-1;i>=0;i--){var currentItem=arrayToSearch[i];if(filterCallback(currentItem)){return currentItem;}}};// -- Math methods
helpers.isNumber=function(n){return!isNaN(parseFloat(n))&&isFinite(n);};helpers.almostEquals=function(x,y,epsilon){return Math.abs(x-y)<epsilon;};helpers.almostWhole=function(x,epsilon){var rounded=Math.round(x);return rounded-epsilon<x&&rounded+epsilon>x;};helpers.max=function(array){return array.reduce(function(max,value){if(!isNaN(value)){return Math.max(max,value);}return max;},Number.NEGATIVE_INFINITY);};helpers.min=function(array){return array.reduce(function(min,value){if(!isNaN(value)){return Math.min(min,value);}return min;},Number.POSITIVE_INFINITY);};helpers.sign=Math.sign?function(x){return Math.sign(x);}:function(x){x=+x;// convert to a number
if(x===0||isNaN(x)){return x;}return x>0?1:-1;};helpers.log10=Math.log10?function(x){return Math.log10(x);}:function(x){var exponent=Math.log(x)*Math.LOG10E;// Math.LOG10E = 1 / Math.LN10.
// Check for whole powers of 10,
// which due to floating point rounding error should be corrected.
var powerOf10=Math.round(exponent);var isPowerOf10=x===Math.pow(10,powerOf10);return isPowerOf10?powerOf10:exponent;};helpers.toRadians=function(degrees){return degrees*(Math.PI/180);};helpers.toDegrees=function(radians){return radians*(180/Math.PI);};// Gets the angle from vertical upright to the point about a centre.
helpers.getAngleFromPoint=function(centrePoint,anglePoint){var distanceFromXCenter=anglePoint.x-centrePoint.x;var distanceFromYCenter=anglePoint.y-centrePoint.y;var radialDistanceFromCenter=Math.sqrt(distanceFromXCenter*distanceFromXCenter+distanceFromYCenter*distanceFromYCenter);var angle=Math.atan2(distanceFromYCenter,distanceFromXCenter);if(angle<-0.5*Math.PI){angle+=2.0*Math.PI;// make sure the returned angle is in the range of (-PI/2, 3PI/2]
}return{angle:angle,distance:radialDistanceFromCenter};};helpers.distanceBetweenPoints=function(pt1,pt2){return Math.sqrt(Math.pow(pt2.x-pt1.x,2)+Math.pow(pt2.y-pt1.y,2));};helpers.aliasPixel=function(pixelWidth){return pixelWidth%2===0?0:0.5;};helpers.splineCurve=function(firstPoint,middlePoint,afterPoint,t){// Props to Rob Spencer at scaled innovation for his post on splining between points
// http://scaledinnovation.com/analytics/splines/aboutSplines.html
// This function must also respect "skipped" points
var previous=firstPoint.skip?middlePoint:firstPoint;var current=middlePoint;var next=afterPoint.skip?middlePoint:afterPoint;var d01=Math.sqrt(Math.pow(current.x-previous.x,2)+Math.pow(current.y-previous.y,2));var d12=Math.sqrt(Math.pow(next.x-current.x,2)+Math.pow(next.y-current.y,2));var s01=d01/(d01+d12);var s12=d12/(d01+d12);// If all points are the same, s01 & s02 will be inf
s01=isNaN(s01)?0:s01;s12=isNaN(s12)?0:s12;var fa=t*s01;// scaling factor for triangle Ta
var fb=t*s12;return{previous:{x:current.x-fa*(next.x-previous.x),y:current.y-fa*(next.y-previous.y)},next:{x:current.x+fb*(next.x-previous.x),y:current.y+fb*(next.y-previous.y)}};};helpers.EPSILON=Number.EPSILON||1e-14;helpers.splineCurveMonotone=function(points){// This function calculates Bézier control points in a similar way than |splineCurve|,
// but preserves monotonicity of the provided data and ensures no local extremums are added
// between the dataset discrete points due to the interpolation.
// See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
var pointsWithTangents=(points||[]).map(function(point){return{model:point._model,deltaK:0,mK:0};});// Calculate slopes (deltaK) and initialize tangents (mK)
var pointsLen=pointsWithTangents.length;var i,pointBefore,pointCurrent,pointAfter;for(i=0;i<pointsLen;++i){pointCurrent=pointsWithTangents[i];if(pointCurrent.model.skip){continue;}pointBefore=i>0?pointsWithTangents[i-1]:null;pointAfter=i<pointsLen-1?pointsWithTangents[i+1]:null;if(pointAfter&&!pointAfter.model.skip){var slopeDeltaX=pointAfter.model.x-pointCurrent.model.x;// In the case of two points that appear at the same x pixel, slopeDeltaX is 0
pointCurrent.deltaK=slopeDeltaX!==0?(pointAfter.model.y-pointCurrent.model.y)/slopeDeltaX:0;}if(!pointBefore||pointBefore.model.skip){pointCurrent.mK=pointCurrent.deltaK;}else if(!pointAfter||pointAfter.model.skip){pointCurrent.mK=pointBefore.deltaK;}else if(this.sign(pointBefore.deltaK)!==this.sign(pointCurrent.deltaK)){pointCurrent.mK=0;}else{pointCurrent.mK=(pointBefore.deltaK+pointCurrent.deltaK)/2;}}// Adjust tangents to ensure monotonic properties
var alphaK,betaK,tauK,squaredMagnitude;for(i=0;i<pointsLen-1;++i){pointCurrent=pointsWithTangents[i];pointAfter=pointsWithTangents[i+1];if(pointCurrent.model.skip||pointAfter.model.skip){continue;}if(helpers.almostEquals(pointCurrent.deltaK,0,this.EPSILON)){pointCurrent.mK=pointAfter.mK=0;continue;}alphaK=pointCurrent.mK/pointCurrent.deltaK;betaK=pointAfter.mK/pointCurrent.deltaK;squaredMagnitude=Math.pow(alphaK,2)+Math.pow(betaK,2);if(squaredMagnitude<=9){continue;}tauK=3/Math.sqrt(squaredMagnitude);pointCurrent.mK=alphaK*tauK*pointCurrent.deltaK;pointAfter.mK=betaK*tauK*pointCurrent.deltaK;}// Compute control points
var deltaX;for(i=0;i<pointsLen;++i){pointCurrent=pointsWithTangents[i];if(pointCurrent.model.skip){continue;}pointBefore=i>0?pointsWithTangents[i-1]:null;pointAfter=i<pointsLen-1?pointsWithTangents[i+1]:null;if(pointBefore&&!pointBefore.model.skip){deltaX=(pointCurrent.model.x-pointBefore.model.x)/3;pointCurrent.model.controlPointPreviousX=pointCurrent.model.x-deltaX;pointCurrent.model.controlPointPreviousY=pointCurrent.model.y-deltaX*pointCurrent.mK;}if(pointAfter&&!pointAfter.model.skip){deltaX=(pointAfter.model.x-pointCurrent.model.x)/3;pointCurrent.model.controlPointNextX=pointCurrent.model.x+deltaX;pointCurrent.model.controlPointNextY=pointCurrent.model.y+deltaX*pointCurrent.mK;}}};helpers.nextItem=function(collection,index,loop){if(loop){return index>=collection.length-1?collection[0]:collection[index+1];}return index>=collection.length-1?collection[collection.length-1]:collection[index+1];};helpers.previousItem=function(collection,index,loop){if(loop){return index<=0?collection[collection.length-1]:collection[index-1];}return index<=0?collection[0]:collection[index-1];};// Implementation of the nice number algorithm used in determining where axis labels will go
helpers.niceNum=function(range,round){var exponent=Math.floor(helpers.log10(range));var fraction=range/Math.pow(10,exponent);var niceFraction;if(round){if(fraction<1.5){niceFraction=1;}else if(fraction<3){niceFraction=2;}else if(fraction<7){niceFraction=5;}else{niceFraction=10;}}else if(fraction<=1.0){niceFraction=1;}else if(fraction<=2){niceFraction=2;}else if(fraction<=5){niceFraction=5;}else{niceFraction=10;}return niceFraction*Math.pow(10,exponent);};// Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
helpers.requestAnimFrame=function(){if(typeof window==='undefined'){return function(callback){callback();};}return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){return window.setTimeout(callback,1000/60);};}();// -- DOM methods
helpers.getRelativePosition=function(evt,chart){var mouseX,mouseY;var e=evt.originalEvent||evt;var canvas=evt.currentTarget||evt.srcElement;var boundingRect=canvas.getBoundingClientRect();var touches=e.touches;if(touches&&touches.length>0){mouseX=touches[0].clientX;mouseY=touches[0].clientY;}else{mouseX=e.clientX;mouseY=e.clientY;}// Scale mouse coordinates into canvas coordinates
// by following the pattern laid out by 'jerryj' in the comments of
// http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
var paddingLeft=parseFloat(helpers.getStyle(canvas,'padding-left'));var paddingTop=parseFloat(helpers.getStyle(canvas,'padding-top'));var paddingRight=parseFloat(helpers.getStyle(canvas,'padding-right'));var paddingBottom=parseFloat(helpers.getStyle(canvas,'padding-bottom'));var width=boundingRect.right-boundingRect.left-paddingLeft-paddingRight;var height=boundingRect.bottom-boundingRect.top-paddingTop-paddingBottom;// We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
// the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here
mouseX=Math.round((mouseX-boundingRect.left-paddingLeft)/width*canvas.width/chart.currentDevicePixelRatio);mouseY=Math.round((mouseY-boundingRect.top-paddingTop)/height*canvas.height/chart.currentDevicePixelRatio);return{x:mouseX,y:mouseY};};// Private helper function to convert max-width/max-height values that may be percentages into a number
function parseMaxStyle(styleValue,node,parentProperty){var valueInPixels;if(typeof styleValue==='string'){valueInPixels=parseInt(styleValue,10);if(styleValue.indexOf('%')!==-1){// percentage * size in dimension
valueInPixels=valueInPixels/100*node.parentNode[parentProperty];}}else{valueInPixels=styleValue;}return valueInPixels;}/**
	 * Returns if the given value contains an effective constraint.
	 * @private
	 */function isConstrainedValue(value){return value!==undefined&&value!==null&&value!=='none';}// Private helper to get a constraint dimension
// @param domNode : the node to check the constraint on
// @param maxStyle : the style that defines the maximum for the direction we are using (maxWidth / maxHeight)
// @param percentageProperty : property of parent to use when calculating width as a percentage
// @see http://www.nathanaeljones.com/blog/2013/reading-max-width-cross-browser
function getConstraintDimension(domNode,maxStyle,percentageProperty){var view=document.defaultView;var parentNode=domNode.parentNode;var constrainedNode=view.getComputedStyle(domNode)[maxStyle];var constrainedContainer=view.getComputedStyle(parentNode)[maxStyle];var hasCNode=isConstrainedValue(constrainedNode);var hasCContainer=isConstrainedValue(constrainedContainer);var infinity=Number.POSITIVE_INFINITY;if(hasCNode||hasCContainer){return Math.min(hasCNode?parseMaxStyle(constrainedNode,domNode,percentageProperty):infinity,hasCContainer?parseMaxStyle(constrainedContainer,parentNode,percentageProperty):infinity);}return'none';}// returns Number or undefined if no constraint
helpers.getConstraintWidth=function(domNode){return getConstraintDimension(domNode,'max-width','clientWidth');};// returns Number or undefined if no constraint
helpers.getConstraintHeight=function(domNode){return getConstraintDimension(domNode,'max-height','clientHeight');};helpers.getMaximumWidth=function(domNode){var container=domNode.parentNode;if(!container){return domNode.clientWidth;}var paddingLeft=parseInt(helpers.getStyle(container,'padding-left'),10);var paddingRight=parseInt(helpers.getStyle(container,'padding-right'),10);var w=container.clientWidth-paddingLeft-paddingRight;var cw=helpers.getConstraintWidth(domNode);return isNaN(cw)?w:Math.min(w,cw);};helpers.getMaximumHeight=function(domNode){var container=domNode.parentNode;if(!container){return domNode.clientHeight;}var paddingTop=parseInt(helpers.getStyle(container,'padding-top'),10);var paddingBottom=parseInt(helpers.getStyle(container,'padding-bottom'),10);var h=container.clientHeight-paddingTop-paddingBottom;var ch=helpers.getConstraintHeight(domNode);return isNaN(ch)?h:Math.min(h,ch);};helpers.getStyle=function(el,property){return el.currentStyle?el.currentStyle[property]:document.defaultView.getComputedStyle(el,null).getPropertyValue(property);};helpers.retinaScale=function(chart,forceRatio){var pixelRatio=chart.currentDevicePixelRatio=forceRatio||window.devicePixelRatio||1;if(pixelRatio===1){return;}var canvas=chart.canvas;var height=chart.height;var width=chart.width;canvas.height=height*pixelRatio;canvas.width=width*pixelRatio;chart.ctx.scale(pixelRatio,pixelRatio);// If no style has been set on the canvas, the render size is used as display size,
// making the chart visually bigger, so let's enforce it to the "correct" values.
// See https://github.com/chartjs/Chart.js/issues/3575
if(!canvas.style.height&&!canvas.style.width){canvas.style.height=height+'px';canvas.style.width=width+'px';}};// -- Canvas methods
helpers.fontString=function(pixelSize,fontStyle,fontFamily){return fontStyle+' '+pixelSize+'px '+fontFamily;};helpers.longestText=function(ctx,font,arrayOfThings,cache){cache=cache||{};var data=cache.data=cache.data||{};var gc=cache.garbageCollect=cache.garbageCollect||[];if(cache.font!==font){data=cache.data={};gc=cache.garbageCollect=[];cache.font=font;}ctx.font=font;var longest=0;helpers.each(arrayOfThings,function(thing){// Undefined strings and arrays should not be measured
if(thing!==undefined&&thing!==null&&helpers.isArray(thing)!==true){longest=helpers.measureText(ctx,data,gc,longest,thing);}else if(helpers.isArray(thing)){// if it is an array lets measure each element
// to do maybe simplify this function a bit so we can do this more recursively?
helpers.each(thing,function(nestedThing){// Undefined strings and arrays should not be measured
if(nestedThing!==undefined&&nestedThing!==null&&!helpers.isArray(nestedThing)){longest=helpers.measureText(ctx,data,gc,longest,nestedThing);}});}});var gcLen=gc.length/2;if(gcLen>arrayOfThings.length){for(var i=0;i<gcLen;i++){delete data[gc[i]];}gc.splice(0,gcLen);}return longest;};helpers.measureText=function(ctx,data,gc,longest,string){var textWidth=data[string];if(!textWidth){textWidth=data[string]=ctx.measureText(string).width;gc.push(string);}if(textWidth>longest){longest=textWidth;}return longest;};helpers.numberOfLabelLines=function(arrayOfThings){var numberOfLines=1;helpers.each(arrayOfThings,function(thing){if(helpers.isArray(thing)){if(thing.length>numberOfLines){numberOfLines=thing.length;}}});return numberOfLines;};helpers.color=!color?function(value){console.error('Color.js not found!');return value;}:function(value){/* global CanvasGradient */if(value instanceof CanvasGradient){value=defaults.global.defaultColor;}return color(value);};helpers.getHoverColor=function(colorValue){/* global CanvasPattern */return colorValue instanceof CanvasPattern?colorValue:helpers.color(colorValue).saturate(0.5).darken(0.1).rgbString();};};},{"25":25,"3":3,"45":45}],28:[function(require,module,exports){'use strict';var helpers=require(45);/**
 * Helper function to get relative position for an event
 * @param {Event|IEvent} event - The event to get the position for
 * @param {Chart} chart - The chart
 * @returns {Point} the event position
 */function getRelativePosition(e,chart){if(e.native){return{x:e.x,y:e.y};}return helpers.getRelativePosition(e,chart);}/**
 * Helper function to traverse all of the visible elements in the chart
 * @param chart {chart} the chart
 * @param handler {Function} the callback to execute for each visible item
 */function parseVisibleItems(chart,handler){var datasets=chart.data.datasets;var meta,i,j,ilen,jlen;for(i=0,ilen=datasets.length;i<ilen;++i){if(!chart.isDatasetVisible(i)){continue;}meta=chart.getDatasetMeta(i);for(j=0,jlen=meta.data.length;j<jlen;++j){var element=meta.data[j];if(!element._view.skip){handler(element);}}}}/**
 * Helper function to get the items that intersect the event position
 * @param items {ChartElement[]} elements to filter
 * @param position {Point} the point to be nearest to
 * @return {ChartElement[]} the nearest items
 */function getIntersectItems(chart,position){var elements=[];parseVisibleItems(chart,function(element){if(element.inRange(position.x,position.y)){elements.push(element);}});return elements;}/**
 * Helper function to get the items nearest to the event position considering all visible items in teh chart
 * @param chart {Chart} the chart to look at elements from
 * @param position {Point} the point to be nearest to
 * @param intersect {Boolean} if true, only consider items that intersect the position
 * @param distanceMetric {Function} function to provide the distance between points
 * @return {ChartElement[]} the nearest items
 */function getNearestItems(chart,position,intersect,distanceMetric){var minDistance=Number.POSITIVE_INFINITY;var nearestItems=[];parseVisibleItems(chart,function(element){if(intersect&&!element.inRange(position.x,position.y)){return;}var center=element.getCenterPoint();var distance=distanceMetric(position,center);if(distance<minDistance){nearestItems=[element];minDistance=distance;}else if(distance===minDistance){// Can have multiple items at the same distance in which case we sort by size
nearestItems.push(element);}});return nearestItems;}/**
 * Get a distance metric function for two points based on the
 * axis mode setting
 * @param {String} axis the axis mode. x|y|xy
 */function getDistanceMetricForAxis(axis){var useX=axis.indexOf('x')!==-1;var useY=axis.indexOf('y')!==-1;return function(pt1,pt2){var deltaX=useX?Math.abs(pt1.x-pt2.x):0;var deltaY=useY?Math.abs(pt1.y-pt2.y):0;return Math.sqrt(Math.pow(deltaX,2)+Math.pow(deltaY,2));};}function indexMode(chart,e,options){var position=getRelativePosition(e,chart);// Default axis for index mode is 'x' to match old behaviour
options.axis=options.axis||'x';var distanceMetric=getDistanceMetricForAxis(options.axis);var items=options.intersect?getIntersectItems(chart,position):getNearestItems(chart,position,false,distanceMetric);var elements=[];if(!items.length){return[];}chart.data.datasets.forEach(function(dataset,datasetIndex){if(chart.isDatasetVisible(datasetIndex)){var meta=chart.getDatasetMeta(datasetIndex);var element=meta.data[items[0]._index];// don't count items that are skipped (null data)
if(element&&!element._view.skip){elements.push(element);}}});return elements;}/**
 * @interface IInteractionOptions
 *//**
 * If true, only consider items that intersect the point
 * @name IInterfaceOptions#boolean
 * @type Boolean
 *//**
 * Contains interaction related functions
 * @namespace Chart.Interaction
 */module.exports={// Helper function for different modes
modes:{single:function single(chart,e){var position=getRelativePosition(e,chart);var elements=[];parseVisibleItems(chart,function(element){if(element.inRange(position.x,position.y)){elements.push(element);return elements;}});return elements.slice(0,1);},/**
		 * @function Chart.Interaction.modes.label
		 * @deprecated since version 2.4.0
		 * @todo remove at version 3
		 * @private
		 */label:indexMode,/**
		 * Returns items at the same index. If the options.intersect parameter is true, we only return items if we intersect something
		 * If the options.intersect mode is false, we find the nearest item and return the items at the same index as that item
		 * @function Chart.Interaction.modes.index
		 * @since v2.4.0
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use during interaction
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */index:indexMode,/**
		 * Returns items in the same dataset. If the options.intersect parameter is true, we only return items if we intersect something
		 * If the options.intersect is false, we find the nearest item and return the items in that dataset
		 * @function Chart.Interaction.modes.dataset
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use during interaction
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */dataset:function dataset(chart,e,options){var position=getRelativePosition(e,chart);options.axis=options.axis||'xy';var distanceMetric=getDistanceMetricForAxis(options.axis);var items=options.intersect?getIntersectItems(chart,position):getNearestItems(chart,position,false,distanceMetric);if(items.length>0){items=chart.getDatasetMeta(items[0]._datasetIndex).data;}return items;},/**
		 * @function Chart.Interaction.modes.x-axis
		 * @deprecated since version 2.4.0. Use index mode and intersect == true
		 * @todo remove at version 3
		 * @private
		 */'x-axis':function xAxis(chart,e){return indexMode(chart,e,{intersect:false});},/**
		 * Point mode returns all elements that hit test based on the event position
		 * of the event
		 * @function Chart.Interaction.modes.intersect
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */point:function point(chart,e){var position=getRelativePosition(e,chart);return getIntersectItems(chart,position);},/**
		 * nearest mode returns the element closest to the point
		 * @function Chart.Interaction.modes.intersect
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */nearest:function nearest(chart,e,options){var position=getRelativePosition(e,chart);options.axis=options.axis||'xy';var distanceMetric=getDistanceMetricForAxis(options.axis);var nearestItems=getNearestItems(chart,position,options.intersect,distanceMetric);// We have multiple items at the same distance from the event. Now sort by smallest
if(nearestItems.length>1){nearestItems.sort(function(a,b){var sizeA=a.getArea();var sizeB=b.getArea();var ret=sizeA-sizeB;if(ret===0){// if equal sort by dataset index
ret=a._datasetIndex-b._datasetIndex;}return ret;});}// Return only 1 item
return nearestItems.slice(0,1);},/**
		 * x mode returns the elements that hit-test at the current x coordinate
		 * @function Chart.Interaction.modes.x
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */x:function x(chart,e,options){var position=getRelativePosition(e,chart);var items=[];var intersectsItem=false;parseVisibleItems(chart,function(element){if(element.inXRange(position.x)){items.push(element);}if(element.inRange(position.x,position.y)){intersectsItem=true;}});// If we want to trigger on an intersect and we don't have any items
// that intersect the position, return nothing
if(options.intersect&&!intersectsItem){items=[];}return items;},/**
		 * y mode returns the elements that hit-test at the current y coordinate
		 * @function Chart.Interaction.modes.y
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */y:function y(chart,e,options){var position=getRelativePosition(e,chart);var items=[];var intersectsItem=false;parseVisibleItems(chart,function(element){if(element.inYRange(position.y)){items.push(element);}if(element.inRange(position.x,position.y)){intersectsItem=true;}});// If we want to trigger on an intersect and we don't have any items
// that intersect the position, return nothing
if(options.intersect&&!intersectsItem){items=[];}return items;}}};},{"45":45}],29:[function(require,module,exports){'use strict';var defaults=require(25);defaults._set('global',{responsive:true,responsiveAnimationDuration:0,maintainAspectRatio:true,events:['mousemove','mouseout','click','touchstart','touchmove'],hover:{onHover:null,mode:'nearest',intersect:true,animationDuration:400},onClick:null,defaultColor:'rgba(0,0,0,0.1)',defaultFontColor:'#666',defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:'normal',showLines:true,// Element defaults defined in element extensions
elements:{},// Layout options such as padding
layout:{padding:{top:0,right:0,bottom:0,left:0}}});module.exports=function(){// Occupy the global variable of Chart, and create a simple base class
var Chart=function Chart(item,config){this.construct(item,config);return this;};Chart.Chart=Chart;return Chart;};},{"25":25}],30:[function(require,module,exports){'use strict';var helpers=require(45);function filterByPosition(array,position){return helpers.where(array,function(v){return v.position===position;});}function sortByWeight(array,reverse){array.forEach(function(v,i){v._tmpIndex_=i;return v;});array.sort(function(a,b){var v0=reverse?b:a;var v1=reverse?a:b;return v0.weight===v1.weight?v0._tmpIndex_-v1._tmpIndex_:v0.weight-v1.weight;});array.forEach(function(v){delete v._tmpIndex_;});}/**
 * @interface ILayoutItem
 * @prop {String} position - The position of the item in the chart layout. Possible values are
 * 'left', 'top', 'right', 'bottom', and 'chartArea'
 * @prop {Number} weight - The weight used to sort the item. Higher weights are further away from the chart area
 * @prop {Boolean} fullWidth - if true, and the item is horizontal, then push vertical boxes down
 * @prop {Function} isHorizontal - returns true if the layout item is horizontal (ie. top or bottom)
 * @prop {Function} update - Takes two parameters: width and height. Returns size of item
 * @prop {Function} getPadding -  Returns an object with padding on the edges
 * @prop {Number} width - Width of item. Must be valid after update()
 * @prop {Number} height - Height of item. Must be valid after update()
 * @prop {Number} left - Left edge of the item. Set by layout system and cannot be used in update
 * @prop {Number} top - Top edge of the item. Set by layout system and cannot be used in update
 * @prop {Number} right - Right edge of the item. Set by layout system and cannot be used in update
 * @prop {Number} bottom - Bottom edge of the item. Set by layout system and cannot be used in update
 */// The layout service is very self explanatory.  It's responsible for the layout within a chart.
// Scales, Legends and Plugins all rely on the layout service and can easily register to be placed anywhere they need
// It is this service's responsibility of carrying out that layout.
module.exports={defaults:{},/**
	 * Register a box to a chart.
	 * A box is simply a reference to an object that requires layout. eg. Scales, Legend, Title.
	 * @param {Chart} chart - the chart to use
	 * @param {ILayoutItem} item - the item to add to be layed out
	 */addBox:function addBox(chart,item){if(!chart.boxes){chart.boxes=[];}// initialize item with default values
item.fullWidth=item.fullWidth||false;item.position=item.position||'top';item.weight=item.weight||0;chart.boxes.push(item);},/**
	 * Remove a layoutItem from a chart
	 * @param {Chart} chart - the chart to remove the box from
	 * @param {Object} layoutItem - the item to remove from the layout
	 */removeBox:function removeBox(chart,layoutItem){var index=chart.boxes?chart.boxes.indexOf(layoutItem):-1;if(index!==-1){chart.boxes.splice(index,1);}},/**
	 * Sets (or updates) options on the given `item`.
	 * @param {Chart} chart - the chart in which the item lives (or will be added to)
	 * @param {Object} item - the item to configure with the given options
	 * @param {Object} options - the new item options.
	 */configure:function configure(chart,item,options){var props=['fullWidth','position','weight'];var ilen=props.length;var i=0;var prop;for(;i<ilen;++i){prop=props[i];if(options.hasOwnProperty(prop)){item[prop]=options[prop];}}},/**
	 * Fits boxes of the given chart into the given size by having each box measure itself
	 * then running a fitting algorithm
	 * @param {Chart} chart - the chart
	 * @param {Number} width - the width to fit into
	 * @param {Number} height - the height to fit into
	 */update:function update(chart,width,height){if(!chart){return;}var layoutOptions=chart.options.layout||{};var padding=helpers.options.toPadding(layoutOptions.padding);var leftPadding=padding.left;var rightPadding=padding.right;var topPadding=padding.top;var bottomPadding=padding.bottom;var leftBoxes=filterByPosition(chart.boxes,'left');var rightBoxes=filterByPosition(chart.boxes,'right');var topBoxes=filterByPosition(chart.boxes,'top');var bottomBoxes=filterByPosition(chart.boxes,'bottom');var chartAreaBoxes=filterByPosition(chart.boxes,'chartArea');// Sort boxes by weight. A higher weight is further away from the chart area
sortByWeight(leftBoxes,true);sortByWeight(rightBoxes,false);sortByWeight(topBoxes,true);sortByWeight(bottomBoxes,false);// Essentially we now have any number of boxes on each of the 4 sides.
// Our canvas looks like the following.
// The areas L1 and L2 are the left axes. R1 is the right axis, T1 is the top axis and
// B1 is the bottom axis
// There are also 4 quadrant-like locations (left to right instead of clockwise) reserved for chart overlays
// These locations are single-box locations only, when trying to register a chartArea location that is already taken,
// an error will be thrown.
//
// |----------------------------------------------------|
// |                  T1 (Full Width)                   |
// |----------------------------------------------------|
// |    |    |                 T2                  |    |
// |    |----|-------------------------------------|----|
// |    |    | C1 |                           | C2 |    |
// |    |    |----|                           |----|    |
// |    |    |                                     |    |
// | L1 | L2 |           ChartArea (C0)            | R1 |
// |    |    |                                     |    |
// |    |    |----|                           |----|    |
// |    |    | C3 |                           | C4 |    |
// |    |----|-------------------------------------|----|
// |    |    |                 B1                  |    |
// |----------------------------------------------------|
// |                  B2 (Full Width)                   |
// |----------------------------------------------------|
//
// What we do to find the best sizing, we do the following
// 1. Determine the minimum size of the chart area.
// 2. Split the remaining width equally between each vertical axis
// 3. Split the remaining height equally between each horizontal axis
// 4. Give each layout the maximum size it can be. The layout will return it's minimum size
// 5. Adjust the sizes of each axis based on it's minimum reported size.
// 6. Refit each axis
// 7. Position each axis in the final location
// 8. Tell the chart the final location of the chart area
// 9. Tell any axes that overlay the chart area the positions of the chart area
// Step 1
var chartWidth=width-leftPadding-rightPadding;var chartHeight=height-topPadding-bottomPadding;var chartAreaWidth=chartWidth/2;// min 50%
var chartAreaHeight=chartHeight/2;// min 50%
// Step 2
var verticalBoxWidth=(width-chartAreaWidth)/(leftBoxes.length+rightBoxes.length);// Step 3
var horizontalBoxHeight=(height-chartAreaHeight)/(topBoxes.length+bottomBoxes.length);// Step 4
var maxChartAreaWidth=chartWidth;var maxChartAreaHeight=chartHeight;var minBoxSizes=[];function getMinimumBoxSize(box){var minSize;var isHorizontal=box.isHorizontal();if(isHorizontal){minSize=box.update(box.fullWidth?chartWidth:maxChartAreaWidth,horizontalBoxHeight);maxChartAreaHeight-=minSize.height;}else{minSize=box.update(verticalBoxWidth,maxChartAreaHeight);maxChartAreaWidth-=minSize.width;}minBoxSizes.push({horizontal:isHorizontal,minSize:minSize,box:box});}helpers.each(leftBoxes.concat(rightBoxes,topBoxes,bottomBoxes),getMinimumBoxSize);// If a horizontal box has padding, we move the left boxes over to avoid ugly charts (see issue #2478)
var maxHorizontalLeftPadding=0;var maxHorizontalRightPadding=0;var maxVerticalTopPadding=0;var maxVerticalBottomPadding=0;helpers.each(topBoxes.concat(bottomBoxes),function(horizontalBox){if(horizontalBox.getPadding){var boxPadding=horizontalBox.getPadding();maxHorizontalLeftPadding=Math.max(maxHorizontalLeftPadding,boxPadding.left);maxHorizontalRightPadding=Math.max(maxHorizontalRightPadding,boxPadding.right);}});helpers.each(leftBoxes.concat(rightBoxes),function(verticalBox){if(verticalBox.getPadding){var boxPadding=verticalBox.getPadding();maxVerticalTopPadding=Math.max(maxVerticalTopPadding,boxPadding.top);maxVerticalBottomPadding=Math.max(maxVerticalBottomPadding,boxPadding.bottom);}});// At this point, maxChartAreaHeight and maxChartAreaWidth are the size the chart area could
// be if the axes are drawn at their minimum sizes.
// Steps 5 & 6
var totalLeftBoxesWidth=leftPadding;var totalRightBoxesWidth=rightPadding;var totalTopBoxesHeight=topPadding;var totalBottomBoxesHeight=bottomPadding;// Function to fit a box
function fitBox(box){var minBoxSize=helpers.findNextWhere(minBoxSizes,function(minBox){return minBox.box===box;});if(minBoxSize){if(box.isHorizontal()){var scaleMargin={left:Math.max(totalLeftBoxesWidth,maxHorizontalLeftPadding),right:Math.max(totalRightBoxesWidth,maxHorizontalRightPadding),top:0,bottom:0};// Don't use min size here because of label rotation. When the labels are rotated, their rotation highly depends
// on the margin. Sometimes they need to increase in size slightly
box.update(box.fullWidth?chartWidth:maxChartAreaWidth,chartHeight/2,scaleMargin);}else{box.update(minBoxSize.minSize.width,maxChartAreaHeight);}}}// Update, and calculate the left and right margins for the horizontal boxes
helpers.each(leftBoxes.concat(rightBoxes),fitBox);helpers.each(leftBoxes,function(box){totalLeftBoxesWidth+=box.width;});helpers.each(rightBoxes,function(box){totalRightBoxesWidth+=box.width;});// Set the Left and Right margins for the horizontal boxes
helpers.each(topBoxes.concat(bottomBoxes),fitBox);// Figure out how much margin is on the top and bottom of the vertical boxes
helpers.each(topBoxes,function(box){totalTopBoxesHeight+=box.height;});helpers.each(bottomBoxes,function(box){totalBottomBoxesHeight+=box.height;});function finalFitVerticalBox(box){var minBoxSize=helpers.findNextWhere(minBoxSizes,function(minSize){return minSize.box===box;});var scaleMargin={left:0,right:0,top:totalTopBoxesHeight,bottom:totalBottomBoxesHeight};if(minBoxSize){box.update(minBoxSize.minSize.width,maxChartAreaHeight,scaleMargin);}}// Let the left layout know the final margin
helpers.each(leftBoxes.concat(rightBoxes),finalFitVerticalBox);// Recalculate because the size of each layout might have changed slightly due to the margins (label rotation for instance)
totalLeftBoxesWidth=leftPadding;totalRightBoxesWidth=rightPadding;totalTopBoxesHeight=topPadding;totalBottomBoxesHeight=bottomPadding;helpers.each(leftBoxes,function(box){totalLeftBoxesWidth+=box.width;});helpers.each(rightBoxes,function(box){totalRightBoxesWidth+=box.width;});helpers.each(topBoxes,function(box){totalTopBoxesHeight+=box.height;});helpers.each(bottomBoxes,function(box){totalBottomBoxesHeight+=box.height;});// We may be adding some padding to account for rotated x axis labels
var leftPaddingAddition=Math.max(maxHorizontalLeftPadding-totalLeftBoxesWidth,0);totalLeftBoxesWidth+=leftPaddingAddition;totalRightBoxesWidth+=Math.max(maxHorizontalRightPadding-totalRightBoxesWidth,0);var topPaddingAddition=Math.max(maxVerticalTopPadding-totalTopBoxesHeight,0);totalTopBoxesHeight+=topPaddingAddition;totalBottomBoxesHeight+=Math.max(maxVerticalBottomPadding-totalBottomBoxesHeight,0);// Figure out if our chart area changed. This would occur if the dataset layout label rotation
// changed due to the application of the margins in step 6. Since we can only get bigger, this is safe to do
// without calling `fit` again
var newMaxChartAreaHeight=height-totalTopBoxesHeight-totalBottomBoxesHeight;var newMaxChartAreaWidth=width-totalLeftBoxesWidth-totalRightBoxesWidth;if(newMaxChartAreaWidth!==maxChartAreaWidth||newMaxChartAreaHeight!==maxChartAreaHeight){helpers.each(leftBoxes,function(box){box.height=newMaxChartAreaHeight;});helpers.each(rightBoxes,function(box){box.height=newMaxChartAreaHeight;});helpers.each(topBoxes,function(box){if(!box.fullWidth){box.width=newMaxChartAreaWidth;}});helpers.each(bottomBoxes,function(box){if(!box.fullWidth){box.width=newMaxChartAreaWidth;}});maxChartAreaHeight=newMaxChartAreaHeight;maxChartAreaWidth=newMaxChartAreaWidth;}// Step 7 - Position the boxes
var left=leftPadding+leftPaddingAddition;var top=topPadding+topPaddingAddition;function placeBox(box){if(box.isHorizontal()){box.left=box.fullWidth?leftPadding:totalLeftBoxesWidth;box.right=box.fullWidth?width-rightPadding:totalLeftBoxesWidth+maxChartAreaWidth;box.top=top;box.bottom=top+box.height;// Move to next point
top=box.bottom;}else{box.left=left;box.right=left+box.width;box.top=totalTopBoxesHeight;box.bottom=totalTopBoxesHeight+maxChartAreaHeight;// Move to next point
left=box.right;}}helpers.each(leftBoxes.concat(topBoxes),placeBox);// Account for chart width and height
left+=maxChartAreaWidth;top+=maxChartAreaHeight;helpers.each(rightBoxes,placeBox);helpers.each(bottomBoxes,placeBox);// Step 8
chart.chartArea={left:totalLeftBoxesWidth,top:totalTopBoxesHeight,right:totalLeftBoxesWidth+maxChartAreaWidth,bottom:totalTopBoxesHeight+maxChartAreaHeight};// Step 9
helpers.each(chartAreaBoxes,function(box){box.left=chart.chartArea.left;box.top=chart.chartArea.top;box.right=chart.chartArea.right;box.bottom=chart.chartArea.bottom;box.update(maxChartAreaWidth,maxChartAreaHeight);});}};},{"45":45}],31:[function(require,module,exports){'use strict';var defaults=require(25);var helpers=require(45);defaults._set('global',{plugins:{}});/**
 * The plugin service singleton
 * @namespace Chart.plugins
 * @since 2.1.0
 */module.exports={/**
	 * Globally registered plugins.
	 * @private
	 */_plugins:[],/**
	 * This identifier is used to invalidate the descriptors cache attached to each chart
	 * when a global plugin is registered or unregistered. In this case, the cache ID is
	 * incremented and descriptors are regenerated during following API calls.
	 * @private
	 */_cacheId:0,/**
	 * Registers the given plugin(s) if not already registered.
	 * @param {Array|Object} plugins plugin instance(s).
	 */register:function register(plugins){var p=this._plugins;[].concat(plugins).forEach(function(plugin){if(p.indexOf(plugin)===-1){p.push(plugin);}});this._cacheId++;},/**
	 * Unregisters the given plugin(s) only if registered.
	 * @param {Array|Object} plugins plugin instance(s).
	 */unregister:function unregister(plugins){var p=this._plugins;[].concat(plugins).forEach(function(plugin){var idx=p.indexOf(plugin);if(idx!==-1){p.splice(idx,1);}});this._cacheId++;},/**
	 * Remove all registered plugins.
	 * @since 2.1.5
	 */clear:function clear(){this._plugins=[];this._cacheId++;},/**
	 * Returns the number of registered plugins?
	 * @returns {Number}
	 * @since 2.1.5
	 */count:function count(){return this._plugins.length;},/**
	 * Returns all registered plugin instances.
	 * @returns {Array} array of plugin objects.
	 * @since 2.1.5
	 */getAll:function getAll(){return this._plugins;},/**
	 * Calls enabled plugins for `chart` on the specified hook and with the given args.
	 * This method immediately returns as soon as a plugin explicitly returns false. The
	 * returned value can be used, for instance, to interrupt the current action.
	 * @param {Object} chart - The chart instance for which plugins should be called.
	 * @param {String} hook - The name of the plugin method to call (e.g. 'beforeUpdate').
	 * @param {Array} [args] - Extra arguments to apply to the hook call.
	 * @returns {Boolean} false if any of the plugins return false, else returns true.
	 */notify:function notify(chart,hook,args){var descriptors=this.descriptors(chart);var ilen=descriptors.length;var i,descriptor,plugin,params,method;for(i=0;i<ilen;++i){descriptor=descriptors[i];plugin=descriptor.plugin;method=plugin[hook];if(typeof method==='function'){params=[chart].concat(args||[]);params.push(descriptor.options);if(method.apply(plugin,params)===false){return false;}}}return true;},/**
	 * Returns descriptors of enabled plugins for the given chart.
	 * @returns {Array} [{ plugin, options }]
	 * @private
	 */descriptors:function descriptors(chart){var cache=chart.$plugins||(chart.$plugins={});if(cache.id===this._cacheId){return cache.descriptors;}var plugins=[];var descriptors=[];var config=chart&&chart.config||{};var options=config.options&&config.options.plugins||{};this._plugins.concat(config.plugins||[]).forEach(function(plugin){var idx=plugins.indexOf(plugin);if(idx!==-1){return;}var id=plugin.id;var opts=options[id];if(opts===false){return;}if(opts===true){opts=helpers.clone(defaults.global.plugins[id]);}plugins.push(plugin);descriptors.push({plugin:plugin,options:opts||{}});});cache.descriptors=descriptors;cache.id=this._cacheId;return descriptors;},/**
	 * Invalidates cache for the given chart: descriptors hold a reference on plugin option,
	 * but in some cases, this reference can be changed by the user when updating options.
	 * https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167
	 * @private
	 */_invalidate:function _invalidate(chart){delete chart.$plugins;}};/**
 * Plugin extension hooks.
 * @interface IPlugin
 * @since 2.1.0
 *//**
 * @method IPlugin#beforeInit
 * @desc Called before initializing `chart`.
 * @param {Chart.Controller} chart - The chart instance.
 * @param {Object} options - The plugin options.
 *//**
 * @method IPlugin#afterInit
 * @desc Called after `chart` has been initialized and before the first update.
 * @param {Chart.Controller} chart - The chart instance.
 * @param {Object} options - The plugin options.
 *//**
 * @method IPlugin#beforeUpdate
 * @desc Called before updating `chart`. If any plugin returns `false`, the update
 * is cancelled (and thus subsequent render(s)) until another `update` is triggered.
 * @param {Chart.Controller} chart - The chart instance.
 * @param {Object} options - The plugin options.
 * @returns {Boolean} `false` to cancel the chart update.
 *//**
 * @method IPlugin#afterUpdate
 * @desc Called after `chart` has been updated and before rendering. Note that this
 * hook will not be called if the chart update has been previously cancelled.
 * @param {Chart.Controller} chart - The chart instance.
 * @param {Object} options - The plugin options.
 *//**
 * @method IPlugin#beforeDatasetsUpdate
 * @desc Called before updating the `chart` datasets. If any plugin returns `false`,
 * the datasets update is cancelled until another `update` is triggered.
 * @param {Chart.Controller} chart - The chart instance.
 * @param {Object} options - The plugin options.
 * @returns {Boolean} false to cancel the datasets update.
 * @since version 2.1.5
*//**
 * @method IPlugin#afterDatasetsUpdate
 * @desc Called after the `chart` datasets have been updated. Note that this hook
 * will not be called if the datasets update has been previously cancelled.
 * @param {Chart.Controller} chart - The chart instance.
 * @param {Object} options - The plugin options.
 * @since version 2.1.5
 *//**
 * @method IPlugin#beforeDatasetUpdate
 * @desc Called before updating the `chart` dataset at the given `args.index`. If any plugin
 * returns `false`, the datasets update is cancelled until another `update` is triggered.
 * @param {Chart} chart - The chart instance.
 * @param {Object} args - The call arguments.
 * @param {Number} args.index - The dataset index.
 * @param {Object} args.meta - The dataset metadata.
 * @param {Object} options - The plugin options.
 * @returns {Boolean} `false` to cancel the chart datasets drawing.
 *//**
 * @method IPlugin#afterDatasetUpdate
 * @desc Called after the `chart` datasets at the given `args.index` has been updated. Note
 * that this hook will not be called if the datasets update has been previously cancelled.
 * @param {Chart} chart - The chart instance.
 * @param {Object} args - The call arguments.
 * @param {Number} args.index - The dataset index.
 * @param {Object} args.meta - The dataset metadata.
 * @param {Object} options - The plugin options.
 *//**
 * @method IPlugin#beforeLayout
 * @desc Called before laying out `chart`. If any plugin returns `false`,
 * the layout update is cancelled until another `update` is triggered.
 * @param {Chart.Controller} chart - The chart instance.
 * @param {Object} options - The plugin options.
 * @returns {Boolean} `false` to cancel the chart layout.
 *//**
 * @method IPlugin#afterLayout
 * @desc Called after the `chart` has been layed out. Note that this hook will not
 * be called if the layout update has been previously cancelled.
 * @param {Chart.Controller} chart - The chart instance.
 * @param {Object} options - The plugin options.
 *//**
 * @method IPlugin#beforeRender
 * @desc Called before rendering `chart`. If any plugin returns `false`,
 * the rendering is cancelled until another `render` is triggered.
 * @param {Chart.Controller} chart - The chart instance.
 * @param {Object} options - The plugin options.
 * @returns {Boolean} `false` to cancel the chart rendering.
 *//**
 * @method IPlugin#afterRender
 * @desc Called after the `chart` has been fully rendered (and animation completed). Note
 * that this hook will not be called if the rendering has been previously cancelled.
 * @param {Chart.Controller} chart - The chart instance.
 * @param {Object} options - The plugin options.
 *//**
 * @method IPlugin#beforeDraw
 * @desc Called before drawing `chart` at every animation frame specified by the given
 * easing value. If any plugin returns `false`, the frame drawing is cancelled until
 * another `render` is triggered.
 * @param {Chart.Controller} chart - The chart instance.
 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
 * @param {Object} options - The plugin options.
 * @returns {Boolean} `false` to cancel the chart drawing.
 *//**
 * @method IPlugin#afterDraw
 * @desc Called after the `chart` has been drawn for the specific easing value. Note
 * that this hook will not be called if the drawing has been previously cancelled.
 * @param {Chart.Controller} chart - The chart instance.
 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
 * @param {Object} options - The plugin options.
 *//**
 * @method IPlugin#beforeDatasetsDraw
 * @desc Called before drawing the `chart` datasets. If any plugin returns `false`,
 * the datasets drawing is cancelled until another `render` is triggered.
 * @param {Chart.Controller} chart - The chart instance.
 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
 * @param {Object} options - The plugin options.
 * @returns {Boolean} `false` to cancel the chart datasets drawing.
 *//**
 * @method IPlugin#afterDatasetsDraw
 * @desc Called after the `chart` datasets have been drawn. Note that this hook
 * will not be called if the datasets drawing has been previously cancelled.
 * @param {Chart.Controller} chart - The chart instance.
 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
 * @param {Object} options - The plugin options.
 *//**
 * @method IPlugin#beforeDatasetDraw
 * @desc Called before drawing the `chart` dataset at the given `args.index` (datasets
 * are drawn in the reverse order). If any plugin returns `false`, the datasets drawing
 * is cancelled until another `render` is triggered.
 * @param {Chart} chart - The chart instance.
 * @param {Object} args - The call arguments.
 * @param {Number} args.index - The dataset index.
 * @param {Object} args.meta - The dataset metadata.
 * @param {Number} args.easingValue - The current animation value, between 0.0 and 1.0.
 * @param {Object} options - The plugin options.
 * @returns {Boolean} `false` to cancel the chart datasets drawing.
 *//**
 * @method IPlugin#afterDatasetDraw
 * @desc Called after the `chart` datasets at the given `args.index` have been drawn
 * (datasets are drawn in the reverse order). Note that this hook will not be called
 * if the datasets drawing has been previously cancelled.
 * @param {Chart} chart - The chart instance.
 * @param {Object} args - The call arguments.
 * @param {Number} args.index - The dataset index.
 * @param {Object} args.meta - The dataset metadata.
 * @param {Number} args.easingValue - The current animation value, between 0.0 and 1.0.
 * @param {Object} options - The plugin options.
 *//**
 * @method IPlugin#beforeTooltipDraw
 * @desc Called before drawing the `tooltip`. If any plugin returns `false`,
 * the tooltip drawing is cancelled until another `render` is triggered.
 * @param {Chart} chart - The chart instance.
 * @param {Object} args - The call arguments.
 * @param {Object} args.tooltip - The tooltip.
 * @param {Number} args.easingValue - The current animation value, between 0.0 and 1.0.
 * @param {Object} options - The plugin options.
 * @returns {Boolean} `false` to cancel the chart tooltip drawing.
 *//**
 * @method IPlugin#afterTooltipDraw
 * @desc Called after drawing the `tooltip`. Note that this hook will not
 * be called if the tooltip drawing has been previously cancelled.
 * @param {Chart} chart - The chart instance.
 * @param {Object} args - The call arguments.
 * @param {Object} args.tooltip - The tooltip.
 * @param {Number} args.easingValue - The current animation value, between 0.0 and 1.0.
 * @param {Object} options - The plugin options.
 *//**
 * @method IPlugin#beforeEvent
 * @desc Called before processing the specified `event`. If any plugin returns `false`,
 * the event will be discarded.
 * @param {Chart.Controller} chart - The chart instance.
 * @param {IEvent} event - The event object.
 * @param {Object} options - The plugin options.
 *//**
 * @method IPlugin#afterEvent
 * @desc Called after the `event` has been consumed. Note that this hook
 * will not be called if the `event` has been previously discarded.
 * @param {Chart.Controller} chart - The chart instance.
 * @param {IEvent} event - The event object.
 * @param {Object} options - The plugin options.
 *//**
 * @method IPlugin#resize
 * @desc Called after the chart as been resized.
 * @param {Chart.Controller} chart - The chart instance.
 * @param {Number} size - The new canvas display size (eq. canvas.style width & height).
 * @param {Object} options - The plugin options.
 *//**
 * @method IPlugin#destroy
 * @desc Called after the chart as been destroyed.
 * @param {Chart.Controller} chart - The chart instance.
 * @param {Object} options - The plugin options.
 */},{"25":25,"45":45}],32:[function(require,module,exports){'use strict';var defaults=require(25);var Element=require(26);var helpers=require(45);var Ticks=require(34);defaults._set('scale',{display:true,position:'left',offset:false,// grid line settings
gridLines:{display:true,color:'rgba(0, 0, 0, 0.1)',lineWidth:1,drawBorder:true,drawOnChartArea:true,drawTicks:true,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:'rgba(0,0,0,0.25)',zeroLineBorderDash:[],zeroLineBorderDashOffset:0.0,offsetGridLines:false,borderDash:[],borderDashOffset:0.0},// scale label
scaleLabel:{// display property
display:false,// actual label
labelString:'',// line height
lineHeight:1.2,// top/bottom padding
padding:{top:4,bottom:4}},// label settings
ticks:{beginAtZero:false,minRotation:0,maxRotation:50,mirror:false,padding:0,reverse:false,display:true,autoSkip:true,autoSkipPadding:0,labelOffset:0,// We pass through arrays to be rendered as multiline labels, we convert Others to strings here.
callback:Ticks.formatters.values,minor:{},major:{}}});function labelsFromTicks(ticks){var labels=[];var i,ilen;for(i=0,ilen=ticks.length;i<ilen;++i){labels.push(ticks[i].label);}return labels;}function getLineValue(scale,index,offsetGridLines){var lineValue=scale.getPixelForTick(index);if(offsetGridLines){if(index===0){lineValue-=(scale.getPixelForTick(1)-lineValue)/2;}else{lineValue-=(lineValue-scale.getPixelForTick(index-1))/2;}}return lineValue;}module.exports=function(Chart){function computeTextSize(context,tick,font){return helpers.isArray(tick)?helpers.longestText(context,font,tick):context.measureText(tick).width;}function parseFontOptions(options){var valueOrDefault=helpers.valueOrDefault;var globalDefaults=defaults.global;var size=valueOrDefault(options.fontSize,globalDefaults.defaultFontSize);var style=valueOrDefault(options.fontStyle,globalDefaults.defaultFontStyle);var family=valueOrDefault(options.fontFamily,globalDefaults.defaultFontFamily);return{size:size,style:style,family:family,font:helpers.fontString(size,style,family)};}function parseLineHeight(options){return helpers.options.toLineHeight(helpers.valueOrDefault(options.lineHeight,1.2),helpers.valueOrDefault(options.fontSize,defaults.global.defaultFontSize));}Chart.Scale=Element.extend({/**
		 * Get the padding needed for the scale
		 * @method getPadding
		 * @private
		 * @returns {Padding} the necessary padding
		 */getPadding:function getPadding(){var me=this;return{left:me.paddingLeft||0,top:me.paddingTop||0,right:me.paddingRight||0,bottom:me.paddingBottom||0};},/**
		 * Returns the scale tick objects ({label, major})
		 * @since 2.7
		 */getTicks:function getTicks(){return this._ticks;},// These methods are ordered by lifecyle. Utilities then follow.
// Any function defined here is inherited by all scale types.
// Any function can be extended by the scale type
mergeTicksOptions:function mergeTicksOptions(){var ticks=this.options.ticks;if(ticks.minor===false){ticks.minor={display:false};}if(ticks.major===false){ticks.major={display:false};}for(var key in ticks){if(key!=='major'&&key!=='minor'){if(typeof ticks.minor[key]==='undefined'){ticks.minor[key]=ticks[key];}if(typeof ticks.major[key]==='undefined'){ticks.major[key]=ticks[key];}}}},beforeUpdate:function beforeUpdate(){helpers.callback(this.options.beforeUpdate,[this]);},update:function update(maxWidth,maxHeight,margins){var me=this;var i,ilen,labels,label,ticks,tick;// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
me.beforeUpdate();// Absorb the master measurements
me.maxWidth=maxWidth;me.maxHeight=maxHeight;me.margins=helpers.extend({left:0,right:0,top:0,bottom:0},margins);me.longestTextCache=me.longestTextCache||{};// Dimensions
me.beforeSetDimensions();me.setDimensions();me.afterSetDimensions();// Data min/max
me.beforeDataLimits();me.determineDataLimits();me.afterDataLimits();// Ticks - `this.ticks` is now DEPRECATED!
// Internal ticks are now stored as objects in the PRIVATE `this._ticks` member
// and must not be accessed directly from outside this class. `this.ticks` being
// around for long time and not marked as private, we can't change its structure
// without unexpected breaking changes. If you need to access the scale ticks,
// use scale.getTicks() instead.
me.beforeBuildTicks();// New implementations should return an array of objects but for BACKWARD COMPAT,
// we still support no return (`this.ticks` internally set by calling this method).
ticks=me.buildTicks()||[];me.afterBuildTicks();me.beforeTickToLabelConversion();// New implementations should return the formatted tick labels but for BACKWARD
// COMPAT, we still support no return (`this.ticks` internally changed by calling
// this method and supposed to contain only string values).
labels=me.convertTicksToLabels(ticks)||me.ticks;me.afterTickToLabelConversion();me.ticks=labels;// BACKWARD COMPATIBILITY
// IMPORTANT: from this point, we consider that `this.ticks` will NEVER change!
// BACKWARD COMPAT: synchronize `_ticks` with labels (so potentially `this.ticks`)
for(i=0,ilen=labels.length;i<ilen;++i){label=labels[i];tick=ticks[i];if(!tick){ticks.push(tick={label:label,major:false});}else{tick.label=label;}}me._ticks=ticks;// Tick Rotation
me.beforeCalculateTickRotation();me.calculateTickRotation();me.afterCalculateTickRotation();// Fit
me.beforeFit();me.fit();me.afterFit();//
me.afterUpdate();return me.minSize;},afterUpdate:function afterUpdate(){helpers.callback(this.options.afterUpdate,[this]);},//
beforeSetDimensions:function beforeSetDimensions(){helpers.callback(this.options.beforeSetDimensions,[this]);},setDimensions:function setDimensions(){var me=this;// Set the unconstrained dimension before label rotation
if(me.isHorizontal()){// Reset position before calculating rotation
me.width=me.maxWidth;me.left=0;me.right=me.width;}else{me.height=me.maxHeight;// Reset position before calculating rotation
me.top=0;me.bottom=me.height;}// Reset padding
me.paddingLeft=0;me.paddingTop=0;me.paddingRight=0;me.paddingBottom=0;},afterSetDimensions:function afterSetDimensions(){helpers.callback(this.options.afterSetDimensions,[this]);},// Data limits
beforeDataLimits:function beforeDataLimits(){helpers.callback(this.options.beforeDataLimits,[this]);},determineDataLimits:helpers.noop,afterDataLimits:function afterDataLimits(){helpers.callback(this.options.afterDataLimits,[this]);},//
beforeBuildTicks:function beforeBuildTicks(){helpers.callback(this.options.beforeBuildTicks,[this]);},buildTicks:helpers.noop,afterBuildTicks:function afterBuildTicks(){helpers.callback(this.options.afterBuildTicks,[this]);},beforeTickToLabelConversion:function beforeTickToLabelConversion(){helpers.callback(this.options.beforeTickToLabelConversion,[this]);},convertTicksToLabels:function convertTicksToLabels(){var me=this;// Convert ticks to strings
var tickOpts=me.options.ticks;me.ticks=me.ticks.map(tickOpts.userCallback||tickOpts.callback,this);},afterTickToLabelConversion:function afterTickToLabelConversion(){helpers.callback(this.options.afterTickToLabelConversion,[this]);},//
beforeCalculateTickRotation:function beforeCalculateTickRotation(){helpers.callback(this.options.beforeCalculateTickRotation,[this]);},calculateTickRotation:function calculateTickRotation(){var me=this;var context=me.ctx;var tickOpts=me.options.ticks;var labels=labelsFromTicks(me._ticks);// Get the width of each grid by calculating the difference
// between x offsets between 0 and 1.
var tickFont=parseFontOptions(tickOpts);context.font=tickFont.font;var labelRotation=tickOpts.minRotation||0;if(labels.length&&me.options.display&&me.isHorizontal()){var originalLabelWidth=helpers.longestText(context,tickFont.font,labels,me.longestTextCache);var labelWidth=originalLabelWidth;var cosRotation,sinRotation;// Allow 3 pixels x2 padding either side for label readability
var tickWidth=me.getPixelForTick(1)-me.getPixelForTick(0)-6;// Max label rotation can be set or default to 90 - also act as a loop counter
while(labelWidth>tickWidth&&labelRotation<tickOpts.maxRotation){var angleRadians=helpers.toRadians(labelRotation);cosRotation=Math.cos(angleRadians);sinRotation=Math.sin(angleRadians);if(sinRotation*originalLabelWidth>me.maxHeight){// go back one step
labelRotation--;break;}labelRotation++;labelWidth=cosRotation*originalLabelWidth;}}me.labelRotation=labelRotation;},afterCalculateTickRotation:function afterCalculateTickRotation(){helpers.callback(this.options.afterCalculateTickRotation,[this]);},//
beforeFit:function beforeFit(){helpers.callback(this.options.beforeFit,[this]);},fit:function fit(){var me=this;// Reset
var minSize=me.minSize={width:0,height:0};var labels=labelsFromTicks(me._ticks);var opts=me.options;var tickOpts=opts.ticks;var scaleLabelOpts=opts.scaleLabel;var gridLineOpts=opts.gridLines;var display=opts.display;var isHorizontal=me.isHorizontal();var tickFont=parseFontOptions(tickOpts);var tickMarkLength=opts.gridLines.tickMarkLength;// Width
if(isHorizontal){// subtract the margins to line up with the chartArea if we are a full width scale
minSize.width=me.isFullWidth()?me.maxWidth-me.margins.left-me.margins.right:me.maxWidth;}else{minSize.width=display&&gridLineOpts.drawTicks?tickMarkLength:0;}// height
if(isHorizontal){minSize.height=display&&gridLineOpts.drawTicks?tickMarkLength:0;}else{minSize.height=me.maxHeight;// fill all the height
}// Are we showing a title for the scale?
if(scaleLabelOpts.display&&display){var scaleLabelLineHeight=parseLineHeight(scaleLabelOpts);var scaleLabelPadding=helpers.options.toPadding(scaleLabelOpts.padding);var deltaHeight=scaleLabelLineHeight+scaleLabelPadding.height;if(isHorizontal){minSize.height+=deltaHeight;}else{minSize.width+=deltaHeight;}}// Don't bother fitting the ticks if we are not showing them
if(tickOpts.display&&display){var largestTextWidth=helpers.longestText(me.ctx,tickFont.font,labels,me.longestTextCache);var tallestLabelHeightInLines=helpers.numberOfLabelLines(labels);var lineSpace=tickFont.size*0.5;var tickPadding=me.options.ticks.padding;if(isHorizontal){// A horizontal axis is more constrained by the height.
me.longestLabelWidth=largestTextWidth;var angleRadians=helpers.toRadians(me.labelRotation);var cosRotation=Math.cos(angleRadians);var sinRotation=Math.sin(angleRadians);// TODO - improve this calculation
var labelHeight=sinRotation*largestTextWidth+tickFont.size*tallestLabelHeightInLines+lineSpace*(tallestLabelHeightInLines-1)+lineSpace;// padding
minSize.height=Math.min(me.maxHeight,minSize.height+labelHeight+tickPadding);me.ctx.font=tickFont.font;var firstLabelWidth=computeTextSize(me.ctx,labels[0],tickFont.font);var lastLabelWidth=computeTextSize(me.ctx,labels[labels.length-1],tickFont.font);// Ensure that our ticks are always inside the canvas. When rotated, ticks are right aligned
// which means that the right padding is dominated by the font height
if(me.labelRotation!==0){me.paddingLeft=opts.position==='bottom'?cosRotation*firstLabelWidth+3:cosRotation*lineSpace+3;// add 3 px to move away from canvas edges
me.paddingRight=opts.position==='bottom'?cosRotation*lineSpace+3:cosRotation*lastLabelWidth+3;}else{me.paddingLeft=firstLabelWidth/2+3;// add 3 px to move away from canvas edges
me.paddingRight=lastLabelWidth/2+3;}}else{// A vertical axis is more constrained by the width. Labels are the
// dominant factor here, so get that length first and account for padding
if(tickOpts.mirror){largestTextWidth=0;}else{// use lineSpace for consistency with horizontal axis
// tickPadding is not implemented for horizontal
largestTextWidth+=tickPadding+lineSpace;}minSize.width=Math.min(me.maxWidth,minSize.width+largestTextWidth);me.paddingTop=tickFont.size/2;me.paddingBottom=tickFont.size/2;}}me.handleMargins();me.width=minSize.width;me.height=minSize.height;},/**
		 * Handle margins and padding interactions
		 * @private
		 */handleMargins:function handleMargins(){var me=this;if(me.margins){me.paddingLeft=Math.max(me.paddingLeft-me.margins.left,0);me.paddingTop=Math.max(me.paddingTop-me.margins.top,0);me.paddingRight=Math.max(me.paddingRight-me.margins.right,0);me.paddingBottom=Math.max(me.paddingBottom-me.margins.bottom,0);}},afterFit:function afterFit(){helpers.callback(this.options.afterFit,[this]);},// Shared Methods
isHorizontal:function isHorizontal(){return this.options.position==='top'||this.options.position==='bottom';},isFullWidth:function isFullWidth(){return this.options.fullWidth;},// Get the correct value. NaN bad inputs, If the value type is object get the x or y based on whether we are horizontal or not
getRightValue:function getRightValue(rawValue){// Null and undefined values first
if(helpers.isNullOrUndef(rawValue)){return NaN;}// isNaN(object) returns true, so make sure NaN is checking for a number; Discard Infinite values
if(typeof rawValue==='number'&&!isFinite(rawValue)){return NaN;}// If it is in fact an object, dive in one more level
if(rawValue){if(this.isHorizontal()){if(rawValue.x!==undefined){return this.getRightValue(rawValue.x);}}else if(rawValue.y!==undefined){return this.getRightValue(rawValue.y);}}// Value is good, return it
return rawValue;},/**
		 * Used to get the value to display in the tooltip for the data at the given index
		 * @param index
		 * @param datasetIndex
		 */getLabelForIndex:helpers.noop,/**
		 * Returns the location of the given data point. Value can either be an index or a numerical value
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 * @param value
		 * @param index
		 * @param datasetIndex
		 */getPixelForValue:helpers.noop,/**
		 * Used to get the data value from a given pixel. This is the inverse of getPixelForValue
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 * @param pixel
		 */getValueForPixel:helpers.noop,/**
		 * Returns the location of the tick at the given index
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 */getPixelForTick:function getPixelForTick(index){var me=this;var offset=me.options.offset;if(me.isHorizontal()){var innerWidth=me.width-(me.paddingLeft+me.paddingRight);var tickWidth=innerWidth/Math.max(me._ticks.length-(offset?0:1),1);var pixel=tickWidth*index+me.paddingLeft;if(offset){pixel+=tickWidth/2;}var finalVal=me.left+Math.round(pixel);finalVal+=me.isFullWidth()?me.margins.left:0;return finalVal;}var innerHeight=me.height-(me.paddingTop+me.paddingBottom);return me.top+index*(innerHeight/(me._ticks.length-1));},/**
		 * Utility for getting the pixel location of a percentage of scale
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 */getPixelForDecimal:function getPixelForDecimal(decimal){var me=this;if(me.isHorizontal()){var innerWidth=me.width-(me.paddingLeft+me.paddingRight);var valueOffset=innerWidth*decimal+me.paddingLeft;var finalVal=me.left+Math.round(valueOffset);finalVal+=me.isFullWidth()?me.margins.left:0;return finalVal;}return me.top+decimal*me.height;},/**
		 * Returns the pixel for the minimum chart value
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 */getBasePixel:function getBasePixel(){return this.getPixelForValue(this.getBaseValue());},getBaseValue:function getBaseValue(){var me=this;var min=me.min;var max=me.max;return me.beginAtZero?0:min<0&&max<0?max:min>0&&max>0?min:0;},/**
		 * Returns a subset of ticks to be plotted to avoid overlapping labels.
		 * @private
		 */_autoSkip:function _autoSkip(ticks){var skipRatio;var me=this;var isHorizontal=me.isHorizontal();var optionTicks=me.options.ticks.minor;var tickCount=ticks.length;var labelRotationRadians=helpers.toRadians(me.labelRotation);var cosRotation=Math.cos(labelRotationRadians);var longestRotatedLabel=me.longestLabelWidth*cosRotation;var result=[];var i,tick,shouldSkip;// figure out the maximum number of gridlines to show
var maxTicks;if(optionTicks.maxTicksLimit){maxTicks=optionTicks.maxTicksLimit;}if(isHorizontal){skipRatio=false;if((longestRotatedLabel+optionTicks.autoSkipPadding)*tickCount>me.width-(me.paddingLeft+me.paddingRight)){skipRatio=1+Math.floor((longestRotatedLabel+optionTicks.autoSkipPadding)*tickCount/(me.width-(me.paddingLeft+me.paddingRight)));}// if they defined a max number of optionTicks,
// increase skipRatio until that number is met
if(maxTicks&&tickCount>maxTicks){skipRatio=Math.max(skipRatio,Math.floor(tickCount/maxTicks));}}for(i=0;i<tickCount;i++){tick=ticks[i];// Since we always show the last tick,we need may need to hide the last shown one before
shouldSkip=skipRatio>1&&i%skipRatio>0||i%skipRatio===0&&i+skipRatio>=tickCount;if(shouldSkip&&i!==tickCount-1){// leave tick in place but make sure it's not displayed (#4635)
delete tick.label;}result.push(tick);}return result;},// Actually draw the scale on the canvas
// @param {rectangle} chartArea : the area of the chart to draw full grid lines on
draw:function draw(chartArea){var me=this;var options=me.options;if(!options.display){return;}var context=me.ctx;var globalDefaults=defaults.global;var optionTicks=options.ticks.minor;var optionMajorTicks=options.ticks.major||optionTicks;var gridLines=options.gridLines;var scaleLabel=options.scaleLabel;var isRotated=me.labelRotation!==0;var isHorizontal=me.isHorizontal();var ticks=optionTicks.autoSkip?me._autoSkip(me.getTicks()):me.getTicks();var tickFontColor=helpers.valueOrDefault(optionTicks.fontColor,globalDefaults.defaultFontColor);var tickFont=parseFontOptions(optionTicks);var majorTickFontColor=helpers.valueOrDefault(optionMajorTicks.fontColor,globalDefaults.defaultFontColor);var majorTickFont=parseFontOptions(optionMajorTicks);var tl=gridLines.drawTicks?gridLines.tickMarkLength:0;var scaleLabelFontColor=helpers.valueOrDefault(scaleLabel.fontColor,globalDefaults.defaultFontColor);var scaleLabelFont=parseFontOptions(scaleLabel);var scaleLabelPadding=helpers.options.toPadding(scaleLabel.padding);var labelRotationRadians=helpers.toRadians(me.labelRotation);var itemsToDraw=[];var axisWidth=me.options.gridLines.lineWidth;var xTickStart=options.position==='right'?me.right:me.right-axisWidth-tl;var xTickEnd=options.position==='right'?me.right+tl:me.right;var yTickStart=options.position==='bottom'?me.top+axisWidth:me.bottom-tl-axisWidth;var yTickEnd=options.position==='bottom'?me.top+axisWidth+tl:me.bottom+axisWidth;helpers.each(ticks,function(tick,index){// autoskipper skipped this tick (#4635)
if(helpers.isNullOrUndef(tick.label)){return;}var label=tick.label;var lineWidth,lineColor,borderDash,borderDashOffset;if(index===me.zeroLineIndex&&options.offset===gridLines.offsetGridLines){// Draw the first index specially
lineWidth=gridLines.zeroLineWidth;lineColor=gridLines.zeroLineColor;borderDash=gridLines.zeroLineBorderDash;borderDashOffset=gridLines.zeroLineBorderDashOffset;}else{lineWidth=helpers.valueAtIndexOrDefault(gridLines.lineWidth,index);lineColor=helpers.valueAtIndexOrDefault(gridLines.color,index);borderDash=helpers.valueOrDefault(gridLines.borderDash,globalDefaults.borderDash);borderDashOffset=helpers.valueOrDefault(gridLines.borderDashOffset,globalDefaults.borderDashOffset);}// Common properties
var tx1,ty1,tx2,ty2,x1,y1,x2,y2,labelX,labelY;var textAlign='middle';var textBaseline='middle';var tickPadding=optionTicks.padding;if(isHorizontal){var labelYOffset=tl+tickPadding;if(options.position==='bottom'){// bottom
textBaseline=!isRotated?'top':'middle';textAlign=!isRotated?'center':'right';labelY=me.top+labelYOffset;}else{// top
textBaseline=!isRotated?'bottom':'middle';textAlign=!isRotated?'center':'left';labelY=me.bottom-labelYOffset;}var xLineValue=getLineValue(me,index,gridLines.offsetGridLines&&ticks.length>1);if(xLineValue<me.left){lineColor='rgba(0,0,0,0)';}xLineValue+=helpers.aliasPixel(lineWidth);labelX=me.getPixelForTick(index)+optionTicks.labelOffset;// x values for optionTicks (need to consider offsetLabel option)
tx1=tx2=x1=x2=xLineValue;ty1=yTickStart;ty2=yTickEnd;y1=chartArea.top;y2=chartArea.bottom+axisWidth;}else{var isLeft=options.position==='left';var labelXOffset;if(optionTicks.mirror){textAlign=isLeft?'left':'right';labelXOffset=tickPadding;}else{textAlign=isLeft?'right':'left';labelXOffset=tl+tickPadding;}labelX=isLeft?me.right-labelXOffset:me.left+labelXOffset;var yLineValue=getLineValue(me,index,gridLines.offsetGridLines&&ticks.length>1);if(yLineValue<me.top){lineColor='rgba(0,0,0,0)';}yLineValue+=helpers.aliasPixel(lineWidth);labelY=me.getPixelForTick(index)+optionTicks.labelOffset;tx1=xTickStart;tx2=xTickEnd;x1=chartArea.left;x2=chartArea.right+axisWidth;ty1=ty2=y1=y2=yLineValue;}itemsToDraw.push({tx1:tx1,ty1:ty1,tx2:tx2,ty2:ty2,x1:x1,y1:y1,x2:x2,y2:y2,labelX:labelX,labelY:labelY,glWidth:lineWidth,glColor:lineColor,glBorderDash:borderDash,glBorderDashOffset:borderDashOffset,rotation:-1*labelRotationRadians,label:label,major:tick.major,textBaseline:textBaseline,textAlign:textAlign});});// Draw all of the tick labels, tick marks, and grid lines at the correct places
helpers.each(itemsToDraw,function(itemToDraw){if(gridLines.display){context.save();context.lineWidth=itemToDraw.glWidth;context.strokeStyle=itemToDraw.glColor;if(context.setLineDash){context.setLineDash(itemToDraw.glBorderDash);context.lineDashOffset=itemToDraw.glBorderDashOffset;}context.beginPath();if(gridLines.drawTicks){context.moveTo(itemToDraw.tx1,itemToDraw.ty1);context.lineTo(itemToDraw.tx2,itemToDraw.ty2);}if(gridLines.drawOnChartArea){context.moveTo(itemToDraw.x1,itemToDraw.y1);context.lineTo(itemToDraw.x2,itemToDraw.y2);}context.stroke();context.restore();}if(optionTicks.display){// Make sure we draw text in the correct color and font
context.save();context.translate(itemToDraw.labelX,itemToDraw.labelY);context.rotate(itemToDraw.rotation);context.font=itemToDraw.major?majorTickFont.font:tickFont.font;context.fillStyle=itemToDraw.major?majorTickFontColor:tickFontColor;context.textBaseline=itemToDraw.textBaseline;context.textAlign=itemToDraw.textAlign;var label=itemToDraw.label;if(helpers.isArray(label)){var lineCount=label.length;var lineHeight=tickFont.size*1.5;var y=me.isHorizontal()?0:-lineHeight*(lineCount-1)/2;for(var i=0;i<lineCount;++i){// We just make sure the multiline element is a string here..
context.fillText(''+label[i],0,y);// apply same lineSpacing as calculated @ L#320
y+=lineHeight;}}else{context.fillText(label,0,0);}context.restore();}});if(scaleLabel.display){// Draw the scale label
var scaleLabelX;var scaleLabelY;var rotation=0;var halfLineHeight=parseLineHeight(scaleLabel)/2;if(isHorizontal){scaleLabelX=me.left+(me.right-me.left)/2;// midpoint of the width
scaleLabelY=options.position==='bottom'?me.bottom-halfLineHeight-scaleLabelPadding.bottom:me.top+halfLineHeight+scaleLabelPadding.top;}else{var isLeft=options.position==='left';scaleLabelX=isLeft?me.left+halfLineHeight+scaleLabelPadding.top:me.right-halfLineHeight-scaleLabelPadding.top;scaleLabelY=me.top+(me.bottom-me.top)/2;rotation=isLeft?-0.5*Math.PI:0.5*Math.PI;}context.save();context.translate(scaleLabelX,scaleLabelY);context.rotate(rotation);context.textAlign='center';context.textBaseline='middle';context.fillStyle=scaleLabelFontColor;// render in correct colour
context.font=scaleLabelFont.font;context.fillText(scaleLabel.labelString,0,0);context.restore();}if(gridLines.drawBorder){// Draw the line at the edge of the axis
context.lineWidth=helpers.valueAtIndexOrDefault(gridLines.lineWidth,0);context.strokeStyle=helpers.valueAtIndexOrDefault(gridLines.color,0);var x1=me.left;var x2=me.right+axisWidth;var y1=me.top;var y2=me.bottom+axisWidth;var aliasPixel=helpers.aliasPixel(context.lineWidth);if(isHorizontal){y1=y2=options.position==='top'?me.bottom:me.top;y1+=aliasPixel;y2+=aliasPixel;}else{x1=x2=options.position==='left'?me.right:me.left;x1+=aliasPixel;x2+=aliasPixel;}context.beginPath();context.moveTo(x1,y1);context.lineTo(x2,y2);context.stroke();}}});};},{"25":25,"26":26,"34":34,"45":45}],33:[function(require,module,exports){'use strict';var defaults=require(25);var helpers=require(45);var layouts=require(30);module.exports=function(Chart){Chart.scaleService={// Scale registration object. Extensions can register new scale types (such as log or DB scales) and then
// use the new chart options to grab the correct scale
constructors:{},// Use a registration function so that we can move to an ES6 map when we no longer need to support
// old browsers
// Scale config defaults
defaults:{},registerScaleType:function registerScaleType(type,scaleConstructor,scaleDefaults){this.constructors[type]=scaleConstructor;this.defaults[type]=helpers.clone(scaleDefaults);},getScaleConstructor:function getScaleConstructor(type){return this.constructors.hasOwnProperty(type)?this.constructors[type]:undefined;},getScaleDefaults:function getScaleDefaults(type){// Return the scale defaults merged with the global settings so that we always use the latest ones
return this.defaults.hasOwnProperty(type)?helpers.merge({},[defaults.scale,this.defaults[type]]):{};},updateScaleDefaults:function updateScaleDefaults(type,additions){var me=this;if(me.defaults.hasOwnProperty(type)){me.defaults[type]=helpers.extend(me.defaults[type],additions);}},addScalesToLayout:function addScalesToLayout(chart){// Adds each scale to the chart.boxes array to be sized accordingly
helpers.each(chart.scales,function(scale){// Set ILayoutItem parameters for backwards compatibility
scale.fullWidth=scale.options.fullWidth;scale.position=scale.options.position;scale.weight=scale.options.weight;layouts.addBox(chart,scale);});}};};},{"25":25,"30":30,"45":45}],34:[function(require,module,exports){'use strict';var helpers=require(45);/**
 * Namespace to hold static tick generation functions
 * @namespace Chart.Ticks
 */module.exports={/**
	 * Namespace to hold formatters for different types of ticks
	 * @namespace Chart.Ticks.formatters
	 */formatters:{/**
		 * Formatter for value labels
		 * @method Chart.Ticks.formatters.values
		 * @param value the value to display
		 * @return {String|Array} the label to display
		 */values:function values(value){return helpers.isArray(value)?value:''+value;},/**
		 * Formatter for linear numeric ticks
		 * @method Chart.Ticks.formatters.linear
		 * @param tickValue {Number} the value to be formatted
		 * @param index {Number} the position of the tickValue parameter in the ticks array
		 * @param ticks {Array<Number>} the list of ticks being converted
		 * @return {String} string representation of the tickValue parameter
		 */linear:function linear(tickValue,index,ticks){// If we have lots of ticks, don't use the ones
var delta=ticks.length>3?ticks[2]-ticks[1]:ticks[1]-ticks[0];// If we have a number like 2.5 as the delta, figure out how many decimal places we need
if(Math.abs(delta)>1){if(tickValue!==Math.floor(tickValue)){// not an integer
delta=tickValue-Math.floor(tickValue);}}var logDelta=helpers.log10(Math.abs(delta));var tickString='';if(tickValue!==0){var numDecimal=-1*Math.floor(logDelta);numDecimal=Math.max(Math.min(numDecimal,20),0);// toFixed has a max of 20 decimal places
tickString=tickValue.toFixed(numDecimal);}else{tickString='0';// never show decimal places for 0
}return tickString;},logarithmic:function logarithmic(tickValue,index,ticks){var remain=tickValue/Math.pow(10,Math.floor(helpers.log10(tickValue)));if(tickValue===0){return'0';}else if(remain===1||remain===2||remain===5||index===0||index===ticks.length-1){return tickValue.toExponential();}return'';}}};},{"45":45}],35:[function(require,module,exports){'use strict';var defaults=require(25);var Element=require(26);var helpers=require(45);defaults._set('global',{tooltips:{enabled:true,custom:null,mode:'nearest',position:'average',intersect:true,backgroundColor:'rgba(0,0,0,0.8)',titleFontStyle:'bold',titleSpacing:2,titleMarginBottom:6,titleFontColor:'#fff',titleAlign:'left',bodySpacing:2,bodyFontColor:'#fff',bodyAlign:'left',footerFontStyle:'bold',footerSpacing:2,footerMarginTop:6,footerFontColor:'#fff',footerAlign:'left',yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:'#fff',displayColors:true,borderColor:'rgba(0,0,0,0)',borderWidth:0,callbacks:{// Args are: (tooltipItems, data)
beforeTitle:helpers.noop,title:function title(tooltipItems,data){// Pick first xLabel for now
var title='';var labels=data.labels;var labelCount=labels?labels.length:0;if(tooltipItems.length>0){var item=tooltipItems[0];if(item.xLabel){title=item.xLabel;}else if(labelCount>0&&item.index<labelCount){title=labels[item.index];}}return title;},afterTitle:helpers.noop,// Args are: (tooltipItems, data)
beforeBody:helpers.noop,// Args are: (tooltipItem, data)
beforeLabel:helpers.noop,label:function label(tooltipItem,data){var label=data.datasets[tooltipItem.datasetIndex].label||'';if(label){label+=': ';}label+=tooltipItem.yLabel;return label;},labelColor:function labelColor(tooltipItem,chart){var meta=chart.getDatasetMeta(tooltipItem.datasetIndex);var activeElement=meta.data[tooltipItem.index];var view=activeElement._view;return{borderColor:view.borderColor,backgroundColor:view.backgroundColor};},labelTextColor:function labelTextColor(){return this._options.bodyFontColor;},afterLabel:helpers.noop,// Args are: (tooltipItems, data)
afterBody:helpers.noop,// Args are: (tooltipItems, data)
beforeFooter:helpers.noop,footer:helpers.noop,afterFooter:helpers.noop}}});module.exports=function(Chart){/**
 	 * Helper method to merge the opacity into a color
 	 */function mergeOpacity(colorString,opacity){var color=helpers.color(colorString);return color.alpha(opacity*color.alpha()).rgbaString();}// Helper to push or concat based on if the 2nd parameter is an array or not
function pushOrConcat(base,toPush){if(toPush){if(helpers.isArray(toPush)){// base = base.concat(toPush);
Array.prototype.push.apply(base,toPush);}else{base.push(toPush);}}return base;}// Private helper to create a tooltip item model
// @param element : the chart element (point, arc, bar) to create the tooltip item for
// @return : new tooltip item
function createTooltipItem(element){var xScale=element._xScale;var yScale=element._yScale||element._scale;// handle radar || polarArea charts
var index=element._index;var datasetIndex=element._datasetIndex;return{xLabel:xScale?xScale.getLabelForIndex(index,datasetIndex):'',yLabel:yScale?yScale.getLabelForIndex(index,datasetIndex):'',index:index,datasetIndex:datasetIndex,x:element._model.x,y:element._model.y};}/**
	 * Helper to get the reset model for the tooltip
	 * @param tooltipOpts {Object} the tooltip options
	 */function getBaseModel(tooltipOpts){var globalDefaults=defaults.global;var valueOrDefault=helpers.valueOrDefault;return{// Positioning
xPadding:tooltipOpts.xPadding,yPadding:tooltipOpts.yPadding,xAlign:tooltipOpts.xAlign,yAlign:tooltipOpts.yAlign,// Body
bodyFontColor:tooltipOpts.bodyFontColor,_bodyFontFamily:valueOrDefault(tooltipOpts.bodyFontFamily,globalDefaults.defaultFontFamily),_bodyFontStyle:valueOrDefault(tooltipOpts.bodyFontStyle,globalDefaults.defaultFontStyle),_bodyAlign:tooltipOpts.bodyAlign,bodyFontSize:valueOrDefault(tooltipOpts.bodyFontSize,globalDefaults.defaultFontSize),bodySpacing:tooltipOpts.bodySpacing,// Title
titleFontColor:tooltipOpts.titleFontColor,_titleFontFamily:valueOrDefault(tooltipOpts.titleFontFamily,globalDefaults.defaultFontFamily),_titleFontStyle:valueOrDefault(tooltipOpts.titleFontStyle,globalDefaults.defaultFontStyle),titleFontSize:valueOrDefault(tooltipOpts.titleFontSize,globalDefaults.defaultFontSize),_titleAlign:tooltipOpts.titleAlign,titleSpacing:tooltipOpts.titleSpacing,titleMarginBottom:tooltipOpts.titleMarginBottom,// Footer
footerFontColor:tooltipOpts.footerFontColor,_footerFontFamily:valueOrDefault(tooltipOpts.footerFontFamily,globalDefaults.defaultFontFamily),_footerFontStyle:valueOrDefault(tooltipOpts.footerFontStyle,globalDefaults.defaultFontStyle),footerFontSize:valueOrDefault(tooltipOpts.footerFontSize,globalDefaults.defaultFontSize),_footerAlign:tooltipOpts.footerAlign,footerSpacing:tooltipOpts.footerSpacing,footerMarginTop:tooltipOpts.footerMarginTop,// Appearance
caretSize:tooltipOpts.caretSize,cornerRadius:tooltipOpts.cornerRadius,backgroundColor:tooltipOpts.backgroundColor,opacity:0,legendColorBackground:tooltipOpts.multiKeyBackground,displayColors:tooltipOpts.displayColors,borderColor:tooltipOpts.borderColor,borderWidth:tooltipOpts.borderWidth};}/**
	 * Get the size of the tooltip
	 */function getTooltipSize(tooltip,model){var ctx=tooltip._chart.ctx;var height=model.yPadding*2;// Tooltip Padding
var width=0;// Count of all lines in the body
var body=model.body;var combinedBodyLength=body.reduce(function(count,bodyItem){return count+bodyItem.before.length+bodyItem.lines.length+bodyItem.after.length;},0);combinedBodyLength+=model.beforeBody.length+model.afterBody.length;var titleLineCount=model.title.length;var footerLineCount=model.footer.length;var titleFontSize=model.titleFontSize;var bodyFontSize=model.bodyFontSize;var footerFontSize=model.footerFontSize;height+=titleLineCount*titleFontSize;// Title Lines
height+=titleLineCount?(titleLineCount-1)*model.titleSpacing:0;// Title Line Spacing
height+=titleLineCount?model.titleMarginBottom:0;// Title's bottom Margin
height+=combinedBodyLength*bodyFontSize;// Body Lines
height+=combinedBodyLength?(combinedBodyLength-1)*model.bodySpacing:0;// Body Line Spacing
height+=footerLineCount?model.footerMarginTop:0;// Footer Margin
height+=footerLineCount*footerFontSize;// Footer Lines
height+=footerLineCount?(footerLineCount-1)*model.footerSpacing:0;// Footer Line Spacing
// Title width
var widthPadding=0;var maxLineWidth=function maxLineWidth(line){width=Math.max(width,ctx.measureText(line).width+widthPadding);};ctx.font=helpers.fontString(titleFontSize,model._titleFontStyle,model._titleFontFamily);helpers.each(model.title,maxLineWidth);// Body width
ctx.font=helpers.fontString(bodyFontSize,model._bodyFontStyle,model._bodyFontFamily);helpers.each(model.beforeBody.concat(model.afterBody),maxLineWidth);// Body lines may include some extra width due to the color box
widthPadding=model.displayColors?bodyFontSize+2:0;helpers.each(body,function(bodyItem){helpers.each(bodyItem.before,maxLineWidth);helpers.each(bodyItem.lines,maxLineWidth);helpers.each(bodyItem.after,maxLineWidth);});// Reset back to 0
widthPadding=0;// Footer width
ctx.font=helpers.fontString(footerFontSize,model._footerFontStyle,model._footerFontFamily);helpers.each(model.footer,maxLineWidth);// Add padding
width+=2*model.xPadding;return{width:width,height:height};}/**
	 * Helper to get the alignment of a tooltip given the size
	 */function determineAlignment(tooltip,size){var model=tooltip._model;var chart=tooltip._chart;var chartArea=tooltip._chart.chartArea;var xAlign='center';var yAlign='center';if(model.y<size.height){yAlign='top';}else if(model.y>chart.height-size.height){yAlign='bottom';}var lf,rf;// functions to determine left, right alignment
var olf,orf;// functions to determine if left/right alignment causes tooltip to go outside chart
var yf;// function to get the y alignment if the tooltip goes outside of the left or right edges
var midX=(chartArea.left+chartArea.right)/2;var midY=(chartArea.top+chartArea.bottom)/2;if(yAlign==='center'){lf=function lf(x){return x<=midX;};rf=function rf(x){return x>midX;};}else{lf=function lf(x){return x<=size.width/2;};rf=function rf(x){return x>=chart.width-size.width/2;};}olf=function olf(x){return x+size.width+model.caretSize+model.caretPadding>chart.width;};orf=function orf(x){return x-size.width-model.caretSize-model.caretPadding<0;};yf=function yf(y){return y<=midY?'top':'bottom';};if(lf(model.x)){xAlign='left';// Is tooltip too wide and goes over the right side of the chart.?
if(olf(model.x)){xAlign='center';yAlign=yf(model.y);}}else if(rf(model.x)){xAlign='right';// Is tooltip too wide and goes outside left edge of canvas?
if(orf(model.x)){xAlign='center';yAlign=yf(model.y);}}var opts=tooltip._options;return{xAlign:opts.xAlign?opts.xAlign:xAlign,yAlign:opts.yAlign?opts.yAlign:yAlign};}/**
	 * @Helper to get the location a tooltip needs to be placed at given the initial position (via the vm) and the size and alignment
	 */function getBackgroundPoint(vm,size,alignment,chart){// Background Position
var x=vm.x;var y=vm.y;var caretSize=vm.caretSize;var caretPadding=vm.caretPadding;var cornerRadius=vm.cornerRadius;var xAlign=alignment.xAlign;var yAlign=alignment.yAlign;var paddingAndSize=caretSize+caretPadding;var radiusAndPadding=cornerRadius+caretPadding;if(xAlign==='right'){x-=size.width;}else if(xAlign==='center'){x-=size.width/2;if(x+size.width>chart.width){x=chart.width-size.width;}if(x<0){x=0;}}if(yAlign==='top'){y+=paddingAndSize;}else if(yAlign==='bottom'){y-=size.height+paddingAndSize;}else{y-=size.height/2;}if(yAlign==='center'){if(xAlign==='left'){x+=paddingAndSize;}else if(xAlign==='right'){x-=paddingAndSize;}}else if(xAlign==='left'){x-=radiusAndPadding;}else if(xAlign==='right'){x+=radiusAndPadding;}return{x:x,y:y};}Chart.Tooltip=Element.extend({initialize:function initialize(){this._model=getBaseModel(this._options);this._lastActive=[];},// Get the title
// Args are: (tooltipItem, data)
getTitle:function getTitle(){var me=this;var opts=me._options;var callbacks=opts.callbacks;var beforeTitle=callbacks.beforeTitle.apply(me,arguments);var title=callbacks.title.apply(me,arguments);var afterTitle=callbacks.afterTitle.apply(me,arguments);var lines=[];lines=pushOrConcat(lines,beforeTitle);lines=pushOrConcat(lines,title);lines=pushOrConcat(lines,afterTitle);return lines;},// Args are: (tooltipItem, data)
getBeforeBody:function getBeforeBody(){var lines=this._options.callbacks.beforeBody.apply(this,arguments);return helpers.isArray(lines)?lines:lines!==undefined?[lines]:[];},// Args are: (tooltipItem, data)
getBody:function getBody(tooltipItems,data){var me=this;var callbacks=me._options.callbacks;var bodyItems=[];helpers.each(tooltipItems,function(tooltipItem){var bodyItem={before:[],lines:[],after:[]};pushOrConcat(bodyItem.before,callbacks.beforeLabel.call(me,tooltipItem,data));pushOrConcat(bodyItem.lines,callbacks.label.call(me,tooltipItem,data));pushOrConcat(bodyItem.after,callbacks.afterLabel.call(me,tooltipItem,data));bodyItems.push(bodyItem);});return bodyItems;},// Args are: (tooltipItem, data)
getAfterBody:function getAfterBody(){var lines=this._options.callbacks.afterBody.apply(this,arguments);return helpers.isArray(lines)?lines:lines!==undefined?[lines]:[];},// Get the footer and beforeFooter and afterFooter lines
// Args are: (tooltipItem, data)
getFooter:function getFooter(){var me=this;var callbacks=me._options.callbacks;var beforeFooter=callbacks.beforeFooter.apply(me,arguments);var footer=callbacks.footer.apply(me,arguments);var afterFooter=callbacks.afterFooter.apply(me,arguments);var lines=[];lines=pushOrConcat(lines,beforeFooter);lines=pushOrConcat(lines,footer);lines=pushOrConcat(lines,afterFooter);return lines;},update:function update(changed){var me=this;var opts=me._options;// Need to regenerate the model because its faster than using extend and it is necessary due to the optimization in Chart.Element.transition
// that does _view = _model if ease === 1. This causes the 2nd tooltip update to set properties in both the view and model at the same time
// which breaks any animations.
var existingModel=me._model;var model=me._model=getBaseModel(opts);var active=me._active;var data=me._data;// In the case where active.length === 0 we need to keep these at existing values for good animations
var alignment={xAlign:existingModel.xAlign,yAlign:existingModel.yAlign};var backgroundPoint={x:existingModel.x,y:existingModel.y};var tooltipSize={width:existingModel.width,height:existingModel.height};var tooltipPosition={x:existingModel.caretX,y:existingModel.caretY};var i,len;if(active.length){model.opacity=1;var labelColors=[];var labelTextColors=[];tooltipPosition=Chart.Tooltip.positioners[opts.position].call(me,active,me._eventPosition);var tooltipItems=[];for(i=0,len=active.length;i<len;++i){tooltipItems.push(createTooltipItem(active[i]));}// If the user provided a filter function, use it to modify the tooltip items
if(opts.filter){tooltipItems=tooltipItems.filter(function(a){return opts.filter(a,data);});}// If the user provided a sorting function, use it to modify the tooltip items
if(opts.itemSort){tooltipItems=tooltipItems.sort(function(a,b){return opts.itemSort(a,b,data);});}// Determine colors for boxes
helpers.each(tooltipItems,function(tooltipItem){labelColors.push(opts.callbacks.labelColor.call(me,tooltipItem,me._chart));labelTextColors.push(opts.callbacks.labelTextColor.call(me,tooltipItem,me._chart));});// Build the Text Lines
model.title=me.getTitle(tooltipItems,data);model.beforeBody=me.getBeforeBody(tooltipItems,data);model.body=me.getBody(tooltipItems,data);model.afterBody=me.getAfterBody(tooltipItems,data);model.footer=me.getFooter(tooltipItems,data);// Initial positioning and colors
model.x=Math.round(tooltipPosition.x);model.y=Math.round(tooltipPosition.y);model.caretPadding=opts.caretPadding;model.labelColors=labelColors;model.labelTextColors=labelTextColors;// data points
model.dataPoints=tooltipItems;// We need to determine alignment of the tooltip
tooltipSize=getTooltipSize(this,model);alignment=determineAlignment(this,tooltipSize);// Final Size and Position
backgroundPoint=getBackgroundPoint(model,tooltipSize,alignment,me._chart);}else{model.opacity=0;}model.xAlign=alignment.xAlign;model.yAlign=alignment.yAlign;model.x=backgroundPoint.x;model.y=backgroundPoint.y;model.width=tooltipSize.width;model.height=tooltipSize.height;// Point where the caret on the tooltip points to
model.caretX=tooltipPosition.x;model.caretY=tooltipPosition.y;me._model=model;if(changed&&opts.custom){opts.custom.call(me,model);}return me;},drawCaret:function drawCaret(tooltipPoint,size){var ctx=this._chart.ctx;var vm=this._view;var caretPosition=this.getCaretPosition(tooltipPoint,size,vm);ctx.lineTo(caretPosition.x1,caretPosition.y1);ctx.lineTo(caretPosition.x2,caretPosition.y2);ctx.lineTo(caretPosition.x3,caretPosition.y3);},getCaretPosition:function getCaretPosition(tooltipPoint,size,vm){var x1,x2,x3,y1,y2,y3;var caretSize=vm.caretSize;var cornerRadius=vm.cornerRadius;var xAlign=vm.xAlign;var yAlign=vm.yAlign;var ptX=tooltipPoint.x;var ptY=tooltipPoint.y;var width=size.width;var height=size.height;if(yAlign==='center'){y2=ptY+height/2;if(xAlign==='left'){x1=ptX;x2=x1-caretSize;x3=x1;y1=y2+caretSize;y3=y2-caretSize;}else{x1=ptX+width;x2=x1+caretSize;x3=x1;y1=y2-caretSize;y3=y2+caretSize;}}else{if(xAlign==='left'){x2=ptX+cornerRadius+caretSize;x1=x2-caretSize;x3=x2+caretSize;}else if(xAlign==='right'){x2=ptX+width-cornerRadius-caretSize;x1=x2-caretSize;x3=x2+caretSize;}else{x2=vm.caretX;x1=x2-caretSize;x3=x2+caretSize;}if(yAlign==='top'){y1=ptY;y2=y1-caretSize;y3=y1;}else{y1=ptY+height;y2=y1+caretSize;y3=y1;// invert drawing order
var tmp=x3;x3=x1;x1=tmp;}}return{x1:x1,x2:x2,x3:x3,y1:y1,y2:y2,y3:y3};},drawTitle:function drawTitle(pt,vm,ctx,opacity){var title=vm.title;if(title.length){ctx.textAlign=vm._titleAlign;ctx.textBaseline='top';var titleFontSize=vm.titleFontSize;var titleSpacing=vm.titleSpacing;ctx.fillStyle=mergeOpacity(vm.titleFontColor,opacity);ctx.font=helpers.fontString(titleFontSize,vm._titleFontStyle,vm._titleFontFamily);var i,len;for(i=0,len=title.length;i<len;++i){ctx.fillText(title[i],pt.x,pt.y);pt.y+=titleFontSize+titleSpacing;// Line Height and spacing
if(i+1===title.length){pt.y+=vm.titleMarginBottom-titleSpacing;// If Last, add margin, remove spacing
}}}},drawBody:function drawBody(pt,vm,ctx,opacity){var bodyFontSize=vm.bodyFontSize;var bodySpacing=vm.bodySpacing;var body=vm.body;ctx.textAlign=vm._bodyAlign;ctx.textBaseline='top';ctx.font=helpers.fontString(bodyFontSize,vm._bodyFontStyle,vm._bodyFontFamily);// Before Body
var xLinePadding=0;var fillLineOfText=function fillLineOfText(line){ctx.fillText(line,pt.x+xLinePadding,pt.y);pt.y+=bodyFontSize+bodySpacing;};// Before body lines
ctx.fillStyle=mergeOpacity(vm.bodyFontColor,opacity);helpers.each(vm.beforeBody,fillLineOfText);var drawColorBoxes=vm.displayColors;xLinePadding=drawColorBoxes?bodyFontSize+2:0;// Draw body lines now
helpers.each(body,function(bodyItem,i){var textColor=mergeOpacity(vm.labelTextColors[i],opacity);ctx.fillStyle=textColor;helpers.each(bodyItem.before,fillLineOfText);helpers.each(bodyItem.lines,function(line){// Draw Legend-like boxes if needed
if(drawColorBoxes){// Fill a white rect so that colours merge nicely if the opacity is < 1
ctx.fillStyle=mergeOpacity(vm.legendColorBackground,opacity);ctx.fillRect(pt.x,pt.y,bodyFontSize,bodyFontSize);// Border
ctx.lineWidth=1;ctx.strokeStyle=mergeOpacity(vm.labelColors[i].borderColor,opacity);ctx.strokeRect(pt.x,pt.y,bodyFontSize,bodyFontSize);// Inner square
ctx.fillStyle=mergeOpacity(vm.labelColors[i].backgroundColor,opacity);ctx.fillRect(pt.x+1,pt.y+1,bodyFontSize-2,bodyFontSize-2);ctx.fillStyle=textColor;}fillLineOfText(line);});helpers.each(bodyItem.after,fillLineOfText);});// Reset back to 0 for after body
xLinePadding=0;// After body lines
helpers.each(vm.afterBody,fillLineOfText);pt.y-=bodySpacing;// Remove last body spacing
},drawFooter:function drawFooter(pt,vm,ctx,opacity){var footer=vm.footer;if(footer.length){pt.y+=vm.footerMarginTop;ctx.textAlign=vm._footerAlign;ctx.textBaseline='top';ctx.fillStyle=mergeOpacity(vm.footerFontColor,opacity);ctx.font=helpers.fontString(vm.footerFontSize,vm._footerFontStyle,vm._footerFontFamily);helpers.each(footer,function(line){ctx.fillText(line,pt.x,pt.y);pt.y+=vm.footerFontSize+vm.footerSpacing;});}},drawBackground:function drawBackground(pt,vm,ctx,tooltipSize,opacity){ctx.fillStyle=mergeOpacity(vm.backgroundColor,opacity);ctx.strokeStyle=mergeOpacity(vm.borderColor,opacity);ctx.lineWidth=vm.borderWidth;var xAlign=vm.xAlign;var yAlign=vm.yAlign;var x=pt.x;var y=pt.y;var width=tooltipSize.width;var height=tooltipSize.height;var radius=vm.cornerRadius;ctx.beginPath();ctx.moveTo(x+radius,y);if(yAlign==='top'){this.drawCaret(pt,tooltipSize);}ctx.lineTo(x+width-radius,y);ctx.quadraticCurveTo(x+width,y,x+width,y+radius);if(yAlign==='center'&&xAlign==='right'){this.drawCaret(pt,tooltipSize);}ctx.lineTo(x+width,y+height-radius);ctx.quadraticCurveTo(x+width,y+height,x+width-radius,y+height);if(yAlign==='bottom'){this.drawCaret(pt,tooltipSize);}ctx.lineTo(x+radius,y+height);ctx.quadraticCurveTo(x,y+height,x,y+height-radius);if(yAlign==='center'&&xAlign==='left'){this.drawCaret(pt,tooltipSize);}ctx.lineTo(x,y+radius);ctx.quadraticCurveTo(x,y,x+radius,y);ctx.closePath();ctx.fill();if(vm.borderWidth>0){ctx.stroke();}},draw:function draw(){var ctx=this._chart.ctx;var vm=this._view;if(vm.opacity===0){return;}var tooltipSize={width:vm.width,height:vm.height};var pt={x:vm.x,y:vm.y};// IE11/Edge does not like very small opacities, so snap to 0
var opacity=Math.abs(vm.opacity<1e-3)?0:vm.opacity;// Truthy/falsey value for empty tooltip
var hasTooltipContent=vm.title.length||vm.beforeBody.length||vm.body.length||vm.afterBody.length||vm.footer.length;if(this._options.enabled&&hasTooltipContent){// Draw Background
this.drawBackground(pt,vm,ctx,tooltipSize,opacity);// Draw Title, Body, and Footer
pt.x+=vm.xPadding;pt.y+=vm.yPadding;// Titles
this.drawTitle(pt,vm,ctx,opacity);// Body
this.drawBody(pt,vm,ctx,opacity);// Footer
this.drawFooter(pt,vm,ctx,opacity);}},/**
		 * Handle an event
		 * @private
		 * @param {IEvent} event - The event to handle
		 * @returns {Boolean} true if the tooltip changed
		 */handleEvent:function handleEvent(e){var me=this;var options=me._options;var changed=false;me._lastActive=me._lastActive||[];// Find Active Elements for tooltips
if(e.type==='mouseout'){me._active=[];}else{me._active=me._chart.getElementsAtEventForMode(e,options.mode,options);}// Remember Last Actives
changed=!helpers.arrayEquals(me._active,me._lastActive);// Only handle target event on tooltip change
if(changed){me._lastActive=me._active;if(options.enabled||options.custom){me._eventPosition={x:e.x,y:e.y};me.update(true);me.pivot();}}return changed;}});/**
	 * @namespace Chart.Tooltip.positioners
	 */Chart.Tooltip.positioners={/**
		 * Average mode places the tooltip at the average position of the elements shown
		 * @function Chart.Tooltip.positioners.average
		 * @param elements {ChartElement[]} the elements being displayed in the tooltip
		 * @returns {Point} tooltip position
		 */average:function average(elements){if(!elements.length){return false;}var i,len;var x=0;var y=0;var count=0;for(i=0,len=elements.length;i<len;++i){var el=elements[i];if(el&&el.hasValue()){var pos=el.tooltipPosition();x+=pos.x;y+=pos.y;++count;}}return{x:Math.round(x/count),y:Math.round(y/count)};},/**
		 * Gets the tooltip position nearest of the item nearest to the event position
		 * @function Chart.Tooltip.positioners.nearest
		 * @param elements {Chart.Element[]} the tooltip elements
		 * @param eventPosition {Point} the position of the event in canvas coordinates
		 * @returns {Point} the tooltip position
		 */nearest:function nearest(elements,eventPosition){var x=eventPosition.x;var y=eventPosition.y;var minDistance=Number.POSITIVE_INFINITY;var i,len,nearestElement;for(i=0,len=elements.length;i<len;++i){var el=elements[i];if(el&&el.hasValue()){var center=el.getCenterPoint();var d=helpers.distanceBetweenPoints(eventPosition,center);if(d<minDistance){minDistance=d;nearestElement=el;}}}if(nearestElement){var tp=nearestElement.tooltipPosition();x=tp.x;y=tp.y;}return{x:x,y:y};}};};},{"25":25,"26":26,"45":45}],36:[function(require,module,exports){'use strict';var defaults=require(25);var Element=require(26);var helpers=require(45);defaults._set('global',{elements:{arc:{backgroundColor:defaults.global.defaultColor,borderColor:'#fff',borderWidth:2}}});module.exports=Element.extend({inLabelRange:function inLabelRange(mouseX){var vm=this._view;if(vm){return Math.pow(mouseX-vm.x,2)<Math.pow(vm.radius+vm.hoverRadius,2);}return false;},inRange:function inRange(chartX,chartY){var vm=this._view;if(vm){var pointRelativePosition=helpers.getAngleFromPoint(vm,{x:chartX,y:chartY});var angle=pointRelativePosition.angle;var distance=pointRelativePosition.distance;// Sanitise angle range
var startAngle=vm.startAngle;var endAngle=vm.endAngle;while(endAngle<startAngle){endAngle+=2.0*Math.PI;}while(angle>endAngle){angle-=2.0*Math.PI;}while(angle<startAngle){angle+=2.0*Math.PI;}// Check if within the range of the open/close angle
var betweenAngles=angle>=startAngle&&angle<=endAngle;var withinRadius=distance>=vm.innerRadius&&distance<=vm.outerRadius;return betweenAngles&&withinRadius;}return false;},getCenterPoint:function getCenterPoint(){var vm=this._view;var halfAngle=(vm.startAngle+vm.endAngle)/2;var halfRadius=(vm.innerRadius+vm.outerRadius)/2;return{x:vm.x+Math.cos(halfAngle)*halfRadius,y:vm.y+Math.sin(halfAngle)*halfRadius};},getArea:function getArea(){var vm=this._view;return Math.PI*((vm.endAngle-vm.startAngle)/(2*Math.PI))*(Math.pow(vm.outerRadius,2)-Math.pow(vm.innerRadius,2));},tooltipPosition:function tooltipPosition(){var vm=this._view;var centreAngle=vm.startAngle+(vm.endAngle-vm.startAngle)/2;var rangeFromCentre=(vm.outerRadius-vm.innerRadius)/2+vm.innerRadius;return{x:vm.x+Math.cos(centreAngle)*rangeFromCentre,y:vm.y+Math.sin(centreAngle)*rangeFromCentre};},draw:function draw(){var ctx=this._chart.ctx;var vm=this._view;var sA=vm.startAngle;var eA=vm.endAngle;ctx.beginPath();ctx.arc(vm.x,vm.y,vm.outerRadius,sA,eA);ctx.arc(vm.x,vm.y,vm.innerRadius,eA,sA,true);ctx.closePath();ctx.strokeStyle=vm.borderColor;ctx.lineWidth=vm.borderWidth;ctx.fillStyle=vm.backgroundColor;ctx.fill();ctx.lineJoin='bevel';if(vm.borderWidth){ctx.stroke();}}});},{"25":25,"26":26,"45":45}],37:[function(require,module,exports){'use strict';var defaults=require(25);var Element=require(26);var helpers=require(45);var globalDefaults=defaults.global;defaults._set('global',{elements:{line:{tension:0.4,backgroundColor:globalDefaults.defaultColor,borderWidth:3,borderColor:globalDefaults.defaultColor,borderCapStyle:'butt',borderDash:[],borderDashOffset:0.0,borderJoinStyle:'miter',capBezierPoints:true,fill:true// do we fill in the area between the line and its base axis
}}});module.exports=Element.extend({draw:function draw(){var me=this;var vm=me._view;var ctx=me._chart.ctx;var spanGaps=vm.spanGaps;var points=me._children.slice();// clone array
var globalOptionLineElements=globalDefaults.elements.line;var lastDrawnIndex=-1;var index,current,previous,currentVM;// If we are looping, adding the first point again
if(me._loop&&points.length){points.push(points[0]);}ctx.save();// Stroke Line Options
ctx.lineCap=vm.borderCapStyle||globalOptionLineElements.borderCapStyle;// IE 9 and 10 do not support line dash
if(ctx.setLineDash){ctx.setLineDash(vm.borderDash||globalOptionLineElements.borderDash);}ctx.lineDashOffset=vm.borderDashOffset||globalOptionLineElements.borderDashOffset;ctx.lineJoin=vm.borderJoinStyle||globalOptionLineElements.borderJoinStyle;ctx.lineWidth=vm.borderWidth||globalOptionLineElements.borderWidth;ctx.strokeStyle=vm.borderColor||globalDefaults.defaultColor;// Stroke Line
ctx.beginPath();lastDrawnIndex=-1;for(index=0;index<points.length;++index){current=points[index];previous=helpers.previousItem(points,index);currentVM=current._view;// First point moves to it's starting position no matter what
if(index===0){if(!currentVM.skip){ctx.moveTo(currentVM.x,currentVM.y);lastDrawnIndex=index;}}else{previous=lastDrawnIndex===-1?previous:points[lastDrawnIndex];if(!currentVM.skip){if(lastDrawnIndex!==index-1&&!spanGaps||lastDrawnIndex===-1){// There was a gap and this is the first point after the gap
ctx.moveTo(currentVM.x,currentVM.y);}else{// Line to next point
helpers.canvas.lineTo(ctx,previous._view,current._view);}lastDrawnIndex=index;}}}ctx.stroke();ctx.restore();}});},{"25":25,"26":26,"45":45}],38:[function(require,module,exports){'use strict';var defaults=require(25);var Element=require(26);var helpers=require(45);var defaultColor=defaults.global.defaultColor;defaults._set('global',{elements:{point:{radius:3,pointStyle:'circle',backgroundColor:defaultColor,borderColor:defaultColor,borderWidth:1,// Hover
hitRadius:1,hoverRadius:4,hoverBorderWidth:1}}});function xRange(mouseX){var vm=this._view;return vm?Math.abs(mouseX-vm.x)<vm.radius+vm.hitRadius:false;}function yRange(mouseY){var vm=this._view;return vm?Math.abs(mouseY-vm.y)<vm.radius+vm.hitRadius:false;}module.exports=Element.extend({inRange:function inRange(mouseX,mouseY){var vm=this._view;return vm?Math.pow(mouseX-vm.x,2)+Math.pow(mouseY-vm.y,2)<Math.pow(vm.hitRadius+vm.radius,2):false;},inLabelRange:xRange,inXRange:xRange,inYRange:yRange,getCenterPoint:function getCenterPoint(){var vm=this._view;return{x:vm.x,y:vm.y};},getArea:function getArea(){return Math.PI*Math.pow(this._view.radius,2);},tooltipPosition:function tooltipPosition(){var vm=this._view;return{x:vm.x,y:vm.y,padding:vm.radius+vm.borderWidth};},draw:function draw(chartArea){var vm=this._view;var model=this._model;var ctx=this._chart.ctx;var pointStyle=vm.pointStyle;var radius=vm.radius;var x=vm.x;var y=vm.y;var color=helpers.color;var errMargin=1.01;// 1.01 is margin for Accumulated error. (Especially Edge, IE.)
var ratio=0;if(vm.skip){return;}ctx.strokeStyle=vm.borderColor||defaultColor;ctx.lineWidth=helpers.valueOrDefault(vm.borderWidth,defaults.global.elements.point.borderWidth);ctx.fillStyle=vm.backgroundColor||defaultColor;// Cliping for Points.
// going out from inner charArea?
if(chartArea!==undefined&&(model.x<chartArea.left||chartArea.right*errMargin<model.x||model.y<chartArea.top||chartArea.bottom*errMargin<model.y)){// Point fade out
if(model.x<chartArea.left){ratio=(x-model.x)/(chartArea.left-model.x);}else if(chartArea.right*errMargin<model.x){ratio=(model.x-x)/(model.x-chartArea.right);}else if(model.y<chartArea.top){ratio=(y-model.y)/(chartArea.top-model.y);}else if(chartArea.bottom*errMargin<model.y){ratio=(model.y-y)/(model.y-chartArea.bottom);}ratio=Math.round(ratio*100)/100;ctx.strokeStyle=color(ctx.strokeStyle).alpha(ratio).rgbString();ctx.fillStyle=color(ctx.fillStyle).alpha(ratio).rgbString();}helpers.canvas.drawPoint(ctx,pointStyle,radius,x,y);}});},{"25":25,"26":26,"45":45}],39:[function(require,module,exports){'use strict';var defaults=require(25);var Element=require(26);defaults._set('global',{elements:{rectangle:{backgroundColor:defaults.global.defaultColor,borderColor:defaults.global.defaultColor,borderSkipped:'bottom',borderWidth:0}}});function isVertical(bar){return bar._view.width!==undefined;}/**
 * Helper function to get the bounds of the bar regardless of the orientation
 * @param bar {Chart.Element.Rectangle} the bar
 * @return {Bounds} bounds of the bar
 * @private
 */function getBarBounds(bar){var vm=bar._view;var x1,x2,y1,y2;if(isVertical(bar)){// vertical
var halfWidth=vm.width/2;x1=vm.x-halfWidth;x2=vm.x+halfWidth;y1=Math.min(vm.y,vm.base);y2=Math.max(vm.y,vm.base);}else{// horizontal bar
var halfHeight=vm.height/2;x1=Math.min(vm.x,vm.base);x2=Math.max(vm.x,vm.base);y1=vm.y-halfHeight;y2=vm.y+halfHeight;}return{left:x1,top:y1,right:x2,bottom:y2};}module.exports=Element.extend({draw:function draw(){var ctx=this._chart.ctx;var vm=this._view;var left,right,top,bottom,signX,signY,borderSkipped;var borderWidth=vm.borderWidth;if(!vm.horizontal){// bar
left=vm.x-vm.width/2;right=vm.x+vm.width/2;top=vm.y;bottom=vm.base;signX=1;signY=bottom>top?1:-1;borderSkipped=vm.borderSkipped||'bottom';}else{// horizontal bar
left=vm.base;right=vm.x;top=vm.y-vm.height/2;bottom=vm.y+vm.height/2;signX=right>left?1:-1;signY=1;borderSkipped=vm.borderSkipped||'left';}// Canvas doesn't allow us to stroke inside the width so we can
// adjust the sizes to fit if we're setting a stroke on the line
if(borderWidth){// borderWidth shold be less than bar width and bar height.
var barSize=Math.min(Math.abs(left-right),Math.abs(top-bottom));borderWidth=borderWidth>barSize?barSize:borderWidth;var halfStroke=borderWidth/2;// Adjust borderWidth when bar top position is near vm.base(zero).
var borderLeft=left+(borderSkipped!=='left'?halfStroke*signX:0);var borderRight=right+(borderSkipped!=='right'?-halfStroke*signX:0);var borderTop=top+(borderSkipped!=='top'?halfStroke*signY:0);var borderBottom=bottom+(borderSkipped!=='bottom'?-halfStroke*signY:0);// not become a vertical line?
if(borderLeft!==borderRight){top=borderTop;bottom=borderBottom;}// not become a horizontal line?
if(borderTop!==borderBottom){left=borderLeft;right=borderRight;}}ctx.beginPath();ctx.fillStyle=vm.backgroundColor;ctx.strokeStyle=vm.borderColor;ctx.lineWidth=borderWidth;// Corner points, from bottom-left to bottom-right clockwise
// | 1 2 |
// | 0 3 |
var corners=[[left,bottom],[left,top],[right,top],[right,bottom]];// Find first (starting) corner with fallback to 'bottom'
var borders=['bottom','left','top','right'];var startCorner=borders.indexOf(borderSkipped,0);if(startCorner===-1){startCorner=0;}function cornerAt(index){return corners[(startCorner+index)%4];}// Draw rectangle from 'startCorner'
var corner=cornerAt(0);ctx.moveTo(corner[0],corner[1]);for(var i=1;i<4;i++){corner=cornerAt(i);ctx.lineTo(corner[0],corner[1]);}ctx.fill();if(borderWidth){ctx.stroke();}},height:function height(){var vm=this._view;return vm.base-vm.y;},inRange:function inRange(mouseX,mouseY){var inRange=false;if(this._view){var bounds=getBarBounds(this);inRange=mouseX>=bounds.left&&mouseX<=bounds.right&&mouseY>=bounds.top&&mouseY<=bounds.bottom;}return inRange;},inLabelRange:function inLabelRange(mouseX,mouseY){var me=this;if(!me._view){return false;}var inRange=false;var bounds=getBarBounds(me);if(isVertical(me)){inRange=mouseX>=bounds.left&&mouseX<=bounds.right;}else{inRange=mouseY>=bounds.top&&mouseY<=bounds.bottom;}return inRange;},inXRange:function inXRange(mouseX){var bounds=getBarBounds(this);return mouseX>=bounds.left&&mouseX<=bounds.right;},inYRange:function inYRange(mouseY){var bounds=getBarBounds(this);return mouseY>=bounds.top&&mouseY<=bounds.bottom;},getCenterPoint:function getCenterPoint(){var vm=this._view;var x,y;if(isVertical(this)){x=vm.x;y=(vm.y+vm.base)/2;}else{x=(vm.x+vm.base)/2;y=vm.y;}return{x:x,y:y};},getArea:function getArea(){var vm=this._view;return vm.width*Math.abs(vm.y-vm.base);},tooltipPosition:function tooltipPosition(){var vm=this._view;return{x:vm.x,y:vm.y};}});},{"25":25,"26":26}],40:[function(require,module,exports){'use strict';module.exports={};module.exports.Arc=require(36);module.exports.Line=require(37);module.exports.Point=require(38);module.exports.Rectangle=require(39);},{"36":36,"37":37,"38":38,"39":39}],41:[function(require,module,exports){'use strict';var helpers=require(42);/**
 * @namespace Chart.helpers.canvas
 */var exports=module.exports={/**
	 * Clears the entire canvas associated to the given `chart`.
	 * @param {Chart} chart - The chart for which to clear the canvas.
	 */clear:function clear(chart){chart.ctx.clearRect(0,0,chart.width,chart.height);},/**
	 * Creates a "path" for a rectangle with rounded corners at position (x, y) with a
	 * given size (width, height) and the same `radius` for all corners.
	 * @param {CanvasRenderingContext2D} ctx - The canvas 2D Context.
	 * @param {Number} x - The x axis of the coordinate for the rectangle starting point.
	 * @param {Number} y - The y axis of the coordinate for the rectangle starting point.
	 * @param {Number} width - The rectangle's width.
	 * @param {Number} height - The rectangle's height.
	 * @param {Number} radius - The rounded amount (in pixels) for the four corners.
	 * @todo handle `radius` as top-left, top-right, bottom-right, bottom-left array/object?
	 */roundedRect:function roundedRect(ctx,x,y,width,height,radius){if(radius){var rx=Math.min(radius,width/2);var ry=Math.min(radius,height/2);ctx.moveTo(x+rx,y);ctx.lineTo(x+width-rx,y);ctx.quadraticCurveTo(x+width,y,x+width,y+ry);ctx.lineTo(x+width,y+height-ry);ctx.quadraticCurveTo(x+width,y+height,x+width-rx,y+height);ctx.lineTo(x+rx,y+height);ctx.quadraticCurveTo(x,y+height,x,y+height-ry);ctx.lineTo(x,y+ry);ctx.quadraticCurveTo(x,y,x+rx,y);}else{ctx.rect(x,y,width,height);}},drawPoint:function drawPoint(ctx,style,radius,x,y){var type,edgeLength,xOffset,yOffset,height,size;if(style&&(typeof style==="undefined"?"undefined":_typeof2(style))==='object'){type=style.toString();if(type==='[object HTMLImageElement]'||type==='[object HTMLCanvasElement]'){ctx.drawImage(style,x-style.width/2,y-style.height/2,style.width,style.height);return;}}if(isNaN(radius)||radius<=0){return;}switch(style){// Default includes circle
default:ctx.beginPath();ctx.arc(x,y,radius,0,Math.PI*2);ctx.closePath();ctx.fill();break;case'triangle':ctx.beginPath();edgeLength=3*radius/Math.sqrt(3);height=edgeLength*Math.sqrt(3)/2;ctx.moveTo(x-edgeLength/2,y+height/3);ctx.lineTo(x+edgeLength/2,y+height/3);ctx.lineTo(x,y-2*height/3);ctx.closePath();ctx.fill();break;case'rect':size=1/Math.SQRT2*radius;ctx.beginPath();ctx.fillRect(x-size,y-size,2*size,2*size);ctx.strokeRect(x-size,y-size,2*size,2*size);break;case'rectRounded':var offset=radius/Math.SQRT2;var leftX=x-offset;var topY=y-offset;var sideSize=Math.SQRT2*radius;ctx.beginPath();this.roundedRect(ctx,leftX,topY,sideSize,sideSize,radius/2);ctx.closePath();ctx.fill();break;case'rectRot':size=1/Math.SQRT2*radius;ctx.beginPath();ctx.moveTo(x-size,y);ctx.lineTo(x,y+size);ctx.lineTo(x+size,y);ctx.lineTo(x,y-size);ctx.closePath();ctx.fill();break;case'cross':ctx.beginPath();ctx.moveTo(x,y+radius);ctx.lineTo(x,y-radius);ctx.moveTo(x-radius,y);ctx.lineTo(x+radius,y);ctx.closePath();break;case'crossRot':ctx.beginPath();xOffset=Math.cos(Math.PI/4)*radius;yOffset=Math.sin(Math.PI/4)*radius;ctx.moveTo(x-xOffset,y-yOffset);ctx.lineTo(x+xOffset,y+yOffset);ctx.moveTo(x-xOffset,y+yOffset);ctx.lineTo(x+xOffset,y-yOffset);ctx.closePath();break;case'star':ctx.beginPath();ctx.moveTo(x,y+radius);ctx.lineTo(x,y-radius);ctx.moveTo(x-radius,y);ctx.lineTo(x+radius,y);xOffset=Math.cos(Math.PI/4)*radius;yOffset=Math.sin(Math.PI/4)*radius;ctx.moveTo(x-xOffset,y-yOffset);ctx.lineTo(x+xOffset,y+yOffset);ctx.moveTo(x-xOffset,y+yOffset);ctx.lineTo(x+xOffset,y-yOffset);ctx.closePath();break;case'line':ctx.beginPath();ctx.moveTo(x-radius,y);ctx.lineTo(x+radius,y);ctx.closePath();break;case'dash':ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+radius,y);ctx.closePath();break;}ctx.stroke();},clipArea:function clipArea(ctx,area){ctx.save();ctx.beginPath();ctx.rect(area.left,area.top,area.right-area.left,area.bottom-area.top);ctx.clip();},unclipArea:function unclipArea(ctx){ctx.restore();},lineTo:function lineTo(ctx,previous,target,flip){if(target.steppedLine){if(target.steppedLine==='after'&&!flip||target.steppedLine!=='after'&&flip){ctx.lineTo(previous.x,target.y);}else{ctx.lineTo(target.x,previous.y);}ctx.lineTo(target.x,target.y);return;}if(!target.tension){ctx.lineTo(target.x,target.y);return;}ctx.bezierCurveTo(flip?previous.controlPointPreviousX:previous.controlPointNextX,flip?previous.controlPointPreviousY:previous.controlPointNextY,flip?target.controlPointNextX:target.controlPointPreviousX,flip?target.controlPointNextY:target.controlPointPreviousY,target.x,target.y);}};// DEPRECATIONS
/**
 * Provided for backward compatibility, use Chart.helpers.canvas.clear instead.
 * @namespace Chart.helpers.clear
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */helpers.clear=exports.clear;/**
 * Provided for backward compatibility, use Chart.helpers.canvas.roundedRect instead.
 * @namespace Chart.helpers.drawRoundedRectangle
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */helpers.drawRoundedRectangle=function(ctx){ctx.beginPath();exports.roundedRect.apply(exports,arguments);ctx.closePath();};},{"42":42}],42:[function(require,module,exports){'use strict';/**
 * @namespace Chart.helpers
 */var helpers={/**
	 * An empty function that can be used, for example, for optional callback.
	 */noop:function noop(){},/**
	 * Returns a unique id, sequentially generated from a global variable.
	 * @returns {Number}
	 * @function
	 */uid:function(){var id=0;return function(){return id++;};}(),/**
	 * Returns true if `value` is neither null nor undefined, else returns false.
	 * @param {*} value - The value to test.
	 * @returns {Boolean}
	 * @since 2.7.0
	 */isNullOrUndef:function isNullOrUndef(value){return value===null||typeof value==='undefined';},/**
	 * Returns true if `value` is an array, else returns false.
	 * @param {*} value - The value to test.
	 * @returns {Boolean}
	 * @function
	 */isArray:Array.isArray?Array.isArray:function(value){return Object.prototype.toString.call(value)==='[object Array]';},/**
	 * Returns true if `value` is an object (excluding null), else returns false.
	 * @param {*} value - The value to test.
	 * @returns {Boolean}
	 * @since 2.7.0
	 */isObject:function isObject(value){return value!==null&&Object.prototype.toString.call(value)==='[object Object]';},/**
	 * Returns `value` if defined, else returns `defaultValue`.
	 * @param {*} value - The value to return if defined.
	 * @param {*} defaultValue - The value to return if `value` is undefined.
	 * @returns {*}
	 */valueOrDefault:function valueOrDefault(value,defaultValue){return typeof value==='undefined'?defaultValue:value;},/**
	 * Returns value at the given `index` in array if defined, else returns `defaultValue`.
	 * @param {Array} value - The array to lookup for value at `index`.
	 * @param {Number} index - The index in `value` to lookup for value.
	 * @param {*} defaultValue - The value to return if `value[index]` is undefined.
	 * @returns {*}
	 */valueAtIndexOrDefault:function valueAtIndexOrDefault(value,index,defaultValue){return helpers.valueOrDefault(helpers.isArray(value)?value[index]:value,defaultValue);},/**
	 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
	 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
	 * @param {Function} fn - The function to call.
	 * @param {Array|undefined|null} args - The arguments with which `fn` should be called.
	 * @param {Object} [thisArg] - The value of `this` provided for the call to `fn`.
	 * @returns {*}
	 */callback:function callback(fn,args,thisArg){if(fn&&typeof fn.call==='function'){return fn.apply(thisArg,args);}},/**
	 * Note(SB) for performance sake, this method should only be used when loopable type
	 * is unknown or in none intensive code (not called often and small loopable). Else
	 * it's preferable to use a regular for() loop and save extra function calls.
	 * @param {Object|Array} loopable - The object or array to be iterated.
	 * @param {Function} fn - The function to call for each item.
	 * @param {Object} [thisArg] - The value of `this` provided for the call to `fn`.
	 * @param {Boolean} [reverse] - If true, iterates backward on the loopable.
	 */each:function each(loopable,fn,thisArg,reverse){var i,len,keys;if(helpers.isArray(loopable)){len=loopable.length;if(reverse){for(i=len-1;i>=0;i--){fn.call(thisArg,loopable[i],i);}}else{for(i=0;i<len;i++){fn.call(thisArg,loopable[i],i);}}}else if(helpers.isObject(loopable)){keys=Object.keys(loopable);len=keys.length;for(i=0;i<len;i++){fn.call(thisArg,loopable[keys[i]],keys[i]);}}},/**
	 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
	 * @see http://stackoverflow.com/a/14853974
	 * @param {Array} a0 - The array to compare
	 * @param {Array} a1 - The array to compare
	 * @returns {Boolean}
	 */arrayEquals:function arrayEquals(a0,a1){var i,ilen,v0,v1;if(!a0||!a1||a0.length!==a1.length){return false;}for(i=0,ilen=a0.length;i<ilen;++i){v0=a0[i];v1=a1[i];if(v0 instanceof Array&&v1 instanceof Array){if(!helpers.arrayEquals(v0,v1)){return false;}}else if(v0!==v1){// NOTE: two different object instances will never be equal: {x:20} != {x:20}
return false;}}return true;},/**
	 * Returns a deep copy of `source` without keeping references on objects and arrays.
	 * @param {*} source - The value to clone.
	 * @returns {*}
	 */clone:function clone(source){if(helpers.isArray(source)){return source.map(helpers.clone);}if(helpers.isObject(source)){var target={};var keys=Object.keys(source);var klen=keys.length;var k=0;for(;k<klen;++k){target[keys[k]]=helpers.clone(source[keys[k]]);}return target;}return source;},/**
	 * The default merger when Chart.helpers.merge is called without merger option.
	 * Note(SB): this method is also used by configMerge and scaleMerge as fallback.
	 * @private
	 */_merger:function _merger(key,target,source,options){var tval=target[key];var sval=source[key];if(helpers.isObject(tval)&&helpers.isObject(sval)){helpers.merge(tval,sval,options);}else{target[key]=helpers.clone(sval);}},/**
	 * Merges source[key] in target[key] only if target[key] is undefined.
	 * @private
	 */_mergerIf:function _mergerIf(key,target,source){var tval=target[key];var sval=source[key];if(helpers.isObject(tval)&&helpers.isObject(sval)){helpers.mergeIf(tval,sval);}else if(!target.hasOwnProperty(key)){target[key]=helpers.clone(sval);}},/**
	 * Recursively deep copies `source` properties into `target` with the given `options`.
	 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
	 * @param {Object} target - The target object in which all sources are merged into.
	 * @param {Object|Array(Object)} source - Object(s) to merge into `target`.
	 * @param {Object} [options] - Merging options:
	 * @param {Function} [options.merger] - The merge method (key, target, source, options)
	 * @returns {Object} The `target` object.
	 */merge:function merge(target,source,options){var sources=helpers.isArray(source)?source:[source];var ilen=sources.length;var merge,i,keys,klen,k;if(!helpers.isObject(target)){return target;}options=options||{};merge=options.merger||helpers._merger;for(i=0;i<ilen;++i){source=sources[i];if(!helpers.isObject(source)){continue;}keys=Object.keys(source);for(k=0,klen=keys.length;k<klen;++k){merge(keys[k],target,source,options);}}return target;},/**
	 * Recursively deep copies `source` properties into `target` *only* if not defined in target.
	 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
	 * @param {Object} target - The target object in which all sources are merged into.
	 * @param {Object|Array(Object)} source - Object(s) to merge into `target`.
	 * @returns {Object} The `target` object.
	 */mergeIf:function mergeIf(target,source){return helpers.merge(target,source,{merger:helpers._mergerIf});},/**
	 * Applies the contents of two or more objects together into the first object.
	 * @param {Object} target - The target object in which all objects are merged into.
	 * @param {Object} arg1 - Object containing additional properties to merge in target.
	 * @param {Object} argN - Additional objects containing properties to merge in target.
	 * @returns {Object} The `target` object.
	 */extend:function extend(target){var setFn=function setFn(value,key){target[key]=value;};for(var i=1,ilen=arguments.length;i<ilen;++i){helpers.each(arguments[i],setFn);}return target;},/**
	 * Basic javascript inheritance based on the model created in Backbone.js
	 */inherits:function inherits(extensions){var me=this;var ChartElement=extensions&&extensions.hasOwnProperty('constructor')?extensions.constructor:function(){return me.apply(this,arguments);};var Surrogate=function Surrogate(){this.constructor=ChartElement;};Surrogate.prototype=me.prototype;ChartElement.prototype=new Surrogate();ChartElement.extend=helpers.inherits;if(extensions){helpers.extend(ChartElement.prototype,extensions);}ChartElement.__super__=me.prototype;return ChartElement;}};module.exports=helpers;// DEPRECATIONS
/**
 * Provided for backward compatibility, use Chart.helpers.callback instead.
 * @function Chart.helpers.callCallback
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 * @private
 */helpers.callCallback=helpers.callback;/**
 * Provided for backward compatibility, use Array.prototype.indexOf instead.
 * Array.prototype.indexOf compatibility: Chrome, Opera, Safari, FF1.5+, IE9+
 * @function Chart.helpers.indexOf
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */helpers.indexOf=function(array,item,fromIndex){return Array.prototype.indexOf.call(array,item,fromIndex);};/**
 * Provided for backward compatibility, use Chart.helpers.valueOrDefault instead.
 * @function Chart.helpers.getValueOrDefault
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */helpers.getValueOrDefault=helpers.valueOrDefault;/**
 * Provided for backward compatibility, use Chart.helpers.valueAtIndexOrDefault instead.
 * @function Chart.helpers.getValueAtIndexOrDefault
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */helpers.getValueAtIndexOrDefault=helpers.valueAtIndexOrDefault;},{}],43:[function(require,module,exports){'use strict';var helpers=require(42);/**
 * Easing functions adapted from Robert Penner's easing equations.
 * @namespace Chart.helpers.easingEffects
 * @see http://www.robertpenner.com/easing/
 */var effects={linear:function linear(t){return t;},easeInQuad:function easeInQuad(t){return t*t;},easeOutQuad:function easeOutQuad(t){return-t*(t-2);},easeInOutQuad:function easeInOutQuad(t){if((t/=0.5)<1){return 0.5*t*t;}return-0.5*(--t*(t-2)-1);},easeInCubic:function easeInCubic(t){return t*t*t;},easeOutCubic:function easeOutCubic(t){return(t=t-1)*t*t+1;},easeInOutCubic:function easeInOutCubic(t){if((t/=0.5)<1){return 0.5*t*t*t;}return 0.5*((t-=2)*t*t+2);},easeInQuart:function easeInQuart(t){return t*t*t*t;},easeOutQuart:function easeOutQuart(t){return-((t=t-1)*t*t*t-1);},easeInOutQuart:function easeInOutQuart(t){if((t/=0.5)<1){return 0.5*t*t*t*t;}return-0.5*((t-=2)*t*t*t-2);},easeInQuint:function easeInQuint(t){return t*t*t*t*t;},easeOutQuint:function easeOutQuint(t){return(t=t-1)*t*t*t*t+1;},easeInOutQuint:function easeInOutQuint(t){if((t/=0.5)<1){return 0.5*t*t*t*t*t;}return 0.5*((t-=2)*t*t*t*t+2);},easeInSine:function easeInSine(t){return-Math.cos(t*(Math.PI/2))+1;},easeOutSine:function easeOutSine(t){return Math.sin(t*(Math.PI/2));},easeInOutSine:function easeInOutSine(t){return-0.5*(Math.cos(Math.PI*t)-1);},easeInExpo:function easeInExpo(t){return t===0?0:Math.pow(2,10*(t-1));},easeOutExpo:function easeOutExpo(t){return t===1?1:-Math.pow(2,-10*t)+1;},easeInOutExpo:function easeInOutExpo(t){if(t===0){return 0;}if(t===1){return 1;}if((t/=0.5)<1){return 0.5*Math.pow(2,10*(t-1));}return 0.5*(-Math.pow(2,-10*--t)+2);},easeInCirc:function easeInCirc(t){if(t>=1){return t;}return-(Math.sqrt(1-t*t)-1);},easeOutCirc:function easeOutCirc(t){return Math.sqrt(1-(t=t-1)*t);},easeInOutCirc:function easeInOutCirc(t){if((t/=0.5)<1){return-0.5*(Math.sqrt(1-t*t)-1);}return 0.5*(Math.sqrt(1-(t-=2)*t)+1);},easeInElastic:function easeInElastic(t){var s=1.70158;var p=0;var a=1;if(t===0){return 0;}if(t===1){return 1;}if(!p){p=0.3;}if(a<1){a=1;s=p/4;}else{s=p/(2*Math.PI)*Math.asin(1/a);}return-(a*Math.pow(2,10*(t-=1))*Math.sin((t-s)*(2*Math.PI)/p));},easeOutElastic:function easeOutElastic(t){var s=1.70158;var p=0;var a=1;if(t===0){return 0;}if(t===1){return 1;}if(!p){p=0.3;}if(a<1){a=1;s=p/4;}else{s=p/(2*Math.PI)*Math.asin(1/a);}return a*Math.pow(2,-10*t)*Math.sin((t-s)*(2*Math.PI)/p)+1;},easeInOutElastic:function easeInOutElastic(t){var s=1.70158;var p=0;var a=1;if(t===0){return 0;}if((t/=0.5)===2){return 1;}if(!p){p=0.45;}if(a<1){a=1;s=p/4;}else{s=p/(2*Math.PI)*Math.asin(1/a);}if(t<1){return-0.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t-s)*(2*Math.PI)/p));}return a*Math.pow(2,-10*(t-=1))*Math.sin((t-s)*(2*Math.PI)/p)*0.5+1;},easeInBack:function easeInBack(t){var s=1.70158;return t*t*((s+1)*t-s);},easeOutBack:function easeOutBack(t){var s=1.70158;return(t=t-1)*t*((s+1)*t+s)+1;},easeInOutBack:function easeInOutBack(t){var s=1.70158;if((t/=0.5)<1){return 0.5*(t*t*(((s*=1.525)+1)*t-s));}return 0.5*((t-=2)*t*(((s*=1.525)+1)*t+s)+2);},easeInBounce:function easeInBounce(t){return 1-effects.easeOutBounce(1-t);},easeOutBounce:function easeOutBounce(t){if(t<1/2.75){return 7.5625*t*t;}if(t<2/2.75){return 7.5625*(t-=1.5/2.75)*t+0.75;}if(t<2.5/2.75){return 7.5625*(t-=2.25/2.75)*t+0.9375;}return 7.5625*(t-=2.625/2.75)*t+0.984375;},easeInOutBounce:function easeInOutBounce(t){if(t<0.5){return effects.easeInBounce(t*2)*0.5;}return effects.easeOutBounce(t*2-1)*0.5+0.5;}};module.exports={effects:effects};// DEPRECATIONS
/**
 * Provided for backward compatibility, use Chart.helpers.easing.effects instead.
 * @function Chart.helpers.easingEffects
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */helpers.easingEffects=effects;},{"42":42}],44:[function(require,module,exports){'use strict';var helpers=require(42);/**
 * @alias Chart.helpers.options
 * @namespace
 */module.exports={/**
	 * Converts the given line height `value` in pixels for a specific font `size`.
	 * @param {Number|String} value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
	 * @param {Number} size - The font size (in pixels) used to resolve relative `value`.
	 * @returns {Number} The effective line height in pixels (size * 1.2 if value is invalid).
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
	 * @since 2.7.0
	 */toLineHeight:function toLineHeight(value,size){var matches=(''+value).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);if(!matches||matches[1]==='normal'){return size*1.2;}value=+matches[2];switch(matches[3]){case'px':return value;case'%':value/=100;break;default:break;}return size*value;},/**
	 * Converts the given value into a padding object with pre-computed width/height.
	 * @param {Number|Object} value - If a number, set the value to all TRBL component,
	 *  else, if and object, use defined properties and sets undefined ones to 0.
	 * @returns {Object} The padding values (top, right, bottom, left, width, height)
	 * @since 2.7.0
	 */toPadding:function toPadding(value){var t,r,b,l;if(helpers.isObject(value)){t=+value.top||0;r=+value.right||0;b=+value.bottom||0;l=+value.left||0;}else{t=r=b=l=+value||0;}return{top:t,right:r,bottom:b,left:l,height:t+b,width:l+r};},/**
	 * Evaluates the given `inputs` sequentially and returns the first defined value.
	 * @param {Array[]} inputs - An array of values, falling back to the last value.
	 * @param {Object} [context] - If defined and the current value is a function, the value
	 * is called with `context` as first argument and the result becomes the new input.
	 * @param {Number} [index] - If defined and the current value is an array, the value
	 * at `index` become the new input.
	 * @since 2.7.0
	 */resolve:function resolve(inputs,context,index){var i,ilen,value;for(i=0,ilen=inputs.length;i<ilen;++i){value=inputs[i];if(value===undefined){continue;}if(context!==undefined&&typeof value==='function'){value=value(context);}if(index!==undefined&&helpers.isArray(value)){value=value[index];}if(value!==undefined){return value;}}}};},{"42":42}],45:[function(require,module,exports){'use strict';module.exports=require(42);module.exports.easing=require(43);module.exports.canvas=require(41);module.exports.options=require(44);},{"41":41,"42":42,"43":43,"44":44}],46:[function(require,module,exports){/**
 * Platform fallback implementation (minimal).
 * @see https://github.com/chartjs/Chart.js/pull/4591#issuecomment-319575939
 */module.exports={acquireContext:function acquireContext(item){if(item&&item.canvas){// Support for any object associated to a canvas (including a context2d)
item=item.canvas;}return item&&item.getContext('2d')||null;}};},{}],47:[function(require,module,exports){/**
 * Chart.Platform implementation for targeting a web browser
 */'use strict';var helpers=require(45);var EXPANDO_KEY='$chartjs';var CSS_PREFIX='chartjs-';var CSS_RENDER_MONITOR=CSS_PREFIX+'render-monitor';var CSS_RENDER_ANIMATION=CSS_PREFIX+'render-animation';var ANIMATION_START_EVENTS=['animationstart','webkitAnimationStart'];/**
 * DOM event types -> Chart.js event types.
 * Note: only events with different types are mapped.
 * @see https://developer.mozilla.org/en-US/docs/Web/Events
 */var EVENT_TYPES={touchstart:'mousedown',touchmove:'mousemove',touchend:'mouseup',pointerenter:'mouseenter',pointerdown:'mousedown',pointermove:'mousemove',pointerup:'mouseup',pointerleave:'mouseout',pointerout:'mouseout'};/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns {Number} Size in pixels or undefined if unknown.
 */function readUsedSize(element,property){var value=helpers.getStyle(element,property);var matches=value&&value.match(/^(\d+)(\.\d+)?px$/);return matches?Number(matches[1]):undefined;}/**
 * Initializes the canvas style and render size without modifying the canvas display size,
 * since responsiveness is handled by the controller.resize() method. The config is used
 * to determine the aspect ratio to apply in case no explicit height has been specified.
 */function initCanvas(canvas,config){var style=canvas.style;// NOTE(SB) canvas.getAttribute('width') !== canvas.width: in the first case it
// returns null or '' if no explicit value has been set to the canvas attribute.
var renderHeight=canvas.getAttribute('height');var renderWidth=canvas.getAttribute('width');// Chart.js modifies some canvas values that we want to restore on destroy
canvas[EXPANDO_KEY]={initial:{height:renderHeight,width:renderWidth,style:{display:style.display,height:style.height,width:style.width}}};// Force canvas to display as block to avoid extra space caused by inline
// elements, which would interfere with the responsive resize process.
// https://github.com/chartjs/Chart.js/issues/2538
style.display=style.display||'block';if(renderWidth===null||renderWidth===''){var displayWidth=readUsedSize(canvas,'width');if(displayWidth!==undefined){canvas.width=displayWidth;}}if(renderHeight===null||renderHeight===''){if(canvas.style.height===''){// If no explicit render height and style height, let's apply the aspect ratio,
// which one can be specified by the user but also by charts as default option
// (i.e. options.aspectRatio). If not specified, use canvas aspect ratio of 2.
canvas.height=canvas.width/(config.options.aspectRatio||2);}else{var displayHeight=readUsedSize(canvas,'height');if(displayWidth!==undefined){canvas.height=displayHeight;}}}return canvas;}/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */var supportsEventListenerOptions=function(){var supports=false;try{var options=Object.defineProperty({},'passive',{get:function get(){supports=true;}});window.addEventListener('e',null,options);}catch(e){// continue regardless of error
}return supports;}();// Default passive to true as expected by Chrome for 'touchstart' and 'touchend' events.
// https://github.com/chartjs/Chart.js/issues/4287
var eventListenerOptions=supportsEventListenerOptions?{passive:true}:false;function _addEventListener(node,type,listener){node.addEventListener(type,listener,eventListenerOptions);}function _removeEventListener(node,type,listener){node.removeEventListener(type,listener,eventListenerOptions);}function createEvent(type,chart,x,y,nativeEvent){return{type:type,chart:chart,native:nativeEvent||null,x:x!==undefined?x:null,y:y!==undefined?y:null};}function fromNativeEvent(event,chart){var type=EVENT_TYPES[event.type]||event.type;var pos=helpers.getRelativePosition(event,chart);return createEvent(type,chart,pos.x,pos.y,event);}function throttled(fn,thisArg){var ticking=false;var args=[];return function(){args=Array.prototype.slice.call(arguments);thisArg=thisArg||this;if(!ticking){ticking=true;helpers.requestAnimFrame.call(window,function(){ticking=false;fn.apply(thisArg,args);});}};}// Implementation based on https://github.com/marcj/css-element-queries
function createResizer(handler){var resizer=document.createElement('div');var cls=CSS_PREFIX+'size-monitor';var maxSize=1000000;var style='position:absolute;'+'left:0;'+'top:0;'+'right:0;'+'bottom:0;'+'overflow:hidden;'+'pointer-events:none;'+'visibility:hidden;'+'z-index:-1;';resizer.style.cssText=style;resizer.className=cls;resizer.innerHTML='<div class="'+cls+'-expand" style="'+style+'">'+'<div style="'+'position:absolute;'+'width:'+maxSize+'px;'+'height:'+maxSize+'px;'+'left:0;'+'top:0">'+'</div>'+'</div>'+'<div class="'+cls+'-shrink" style="'+style+'">'+'<div style="'+'position:absolute;'+'width:200%;'+'height:200%;'+'left:0; '+'top:0">'+'</div>'+'</div>';var expand=resizer.childNodes[0];var shrink=resizer.childNodes[1];resizer._reset=function(){expand.scrollLeft=maxSize;expand.scrollTop=maxSize;shrink.scrollLeft=maxSize;shrink.scrollTop=maxSize;};var onScroll=function onScroll(){resizer._reset();handler();};_addEventListener(expand,'scroll',onScroll.bind(expand,'expand'));_addEventListener(shrink,'scroll',onScroll.bind(shrink,'shrink'));return resizer;}// https://davidwalsh.name/detect-node-insertion
function watchForRender(node,handler){var expando=node[EXPANDO_KEY]||(node[EXPANDO_KEY]={});var proxy=expando.renderProxy=function(e){if(e.animationName===CSS_RENDER_ANIMATION){handler();}};helpers.each(ANIMATION_START_EVENTS,function(type){_addEventListener(node,type,proxy);});// #4737: Chrome might skip the CSS animation when the CSS_RENDER_MONITOR class
// is removed then added back immediately (same animation frame?). Accessing the
// `offsetParent` property will force a reflow and re-evaluate the CSS animation.
// https://gist.github.com/paulirish/5d52fb081b3570c81e3a#box-metrics
// https://github.com/chartjs/Chart.js/issues/4737
expando.reflow=!!node.offsetParent;node.classList.add(CSS_RENDER_MONITOR);}function unwatchForRender(node){var expando=node[EXPANDO_KEY]||{};var proxy=expando.renderProxy;if(proxy){helpers.each(ANIMATION_START_EVENTS,function(type){_removeEventListener(node,type,proxy);});delete expando.renderProxy;}node.classList.remove(CSS_RENDER_MONITOR);}function addResizeListener(node,listener,chart){var expando=node[EXPANDO_KEY]||(node[EXPANDO_KEY]={});// Let's keep track of this added resizer and thus avoid DOM query when removing it.
var resizer=expando.resizer=createResizer(throttled(function(){if(expando.resizer){return listener(createEvent('resize',chart));}}));// The resizer needs to be attached to the node parent, so we first need to be
// sure that `node` is attached to the DOM before injecting the resizer element.
watchForRender(node,function(){if(expando.resizer){var container=node.parentNode;if(container&&container!==resizer.parentNode){container.insertBefore(resizer,container.firstChild);}// The container size might have changed, let's reset the resizer state.
resizer._reset();}});}function removeResizeListener(node){var expando=node[EXPANDO_KEY]||{};var resizer=expando.resizer;delete expando.resizer;unwatchForRender(node);if(resizer&&resizer.parentNode){resizer.parentNode.removeChild(resizer);}}function injectCSS(platform,css){// http://stackoverflow.com/q/3922139
var style=platform._style||document.createElement('style');if(!platform._style){platform._style=style;css='/* Chart.js */\n'+css;style.setAttribute('type','text/css');document.getElementsByTagName('head')[0].appendChild(style);}style.appendChild(document.createTextNode(css));}module.exports={/**
	 * This property holds whether this platform is enabled for the current environment.
	 * Currently used by platform.js to select the proper implementation.
	 * @private
	 */_enabled:typeof window!=='undefined'&&typeof document!=='undefined',initialize:function initialize(){var keyframes='from{opacity:0.99}to{opacity:1}';injectCSS(this,// DOM rendering detection
// https://davidwalsh.name/detect-node-insertion
'@-webkit-keyframes '+CSS_RENDER_ANIMATION+'{'+keyframes+'}'+'@keyframes '+CSS_RENDER_ANIMATION+'{'+keyframes+'}'+'.'+CSS_RENDER_MONITOR+'{'+'-webkit-animation:'+CSS_RENDER_ANIMATION+' 0.001s;'+'animation:'+CSS_RENDER_ANIMATION+' 0.001s;'+'}');},acquireContext:function acquireContext(item,config){if(typeof item==='string'){item=document.getElementById(item);}else if(item.length){// Support for array based queries (such as jQuery)
item=item[0];}if(item&&item.canvas){// Support for any object associated to a canvas (including a context2d)
item=item.canvas;}// To prevent canvas fingerprinting, some add-ons undefine the getContext
// method, for example: https://github.com/kkapsner/CanvasBlocker
// https://github.com/chartjs/Chart.js/issues/2807
var context=item&&item.getContext&&item.getContext('2d');// `instanceof HTMLCanvasElement/CanvasRenderingContext2D` fails when the item is
// inside an iframe or when running in a protected environment. We could guess the
// types from their toString() value but let's keep things flexible and assume it's
// a sufficient condition if the item has a context2D which has item as `canvas`.
// https://github.com/chartjs/Chart.js/issues/3887
// https://github.com/chartjs/Chart.js/issues/4102
// https://github.com/chartjs/Chart.js/issues/4152
if(context&&context.canvas===item){initCanvas(item,config);return context;}return null;},releaseContext:function releaseContext(context){var canvas=context.canvas;if(!canvas[EXPANDO_KEY]){return;}var initial=canvas[EXPANDO_KEY].initial;['height','width'].forEach(function(prop){var value=initial[prop];if(helpers.isNullOrUndef(value)){canvas.removeAttribute(prop);}else{canvas.setAttribute(prop,value);}});helpers.each(initial.style||{},function(value,key){canvas.style[key]=value;});// The canvas render size might have been changed (and thus the state stack discarded),
// we can't use save() and restore() to restore the initial state. So make sure that at
// least the canvas context is reset to the default state by setting the canvas width.
// https://www.w3.org/TR/2011/WD-html5-20110525/the-canvas-element.html
canvas.width=canvas.width;delete canvas[EXPANDO_KEY];},addEventListener:function addEventListener(chart,type,listener){var canvas=chart.canvas;if(type==='resize'){// Note: the resize event is not supported on all browsers.
addResizeListener(canvas,listener,chart);return;}var expando=listener[EXPANDO_KEY]||(listener[EXPANDO_KEY]={});var proxies=expando.proxies||(expando.proxies={});var proxy=proxies[chart.id+'_'+type]=function(event){listener(fromNativeEvent(event,chart));};_addEventListener(canvas,type,proxy);},removeEventListener:function removeEventListener(chart,type,listener){var canvas=chart.canvas;if(type==='resize'){// Note: the resize event is not supported on all browsers.
removeResizeListener(canvas,listener);return;}var expando=listener[EXPANDO_KEY]||{};var proxies=expando.proxies||{};var proxy=proxies[chart.id+'_'+type];if(!proxy){return;}_removeEventListener(canvas,type,proxy);}};// DEPRECATIONS
/**
 * Provided for backward compatibility, use EventTarget.addEventListener instead.
 * EventTarget.addEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * @function Chart.helpers.addEvent
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */helpers.addEvent=_addEventListener;/**
 * Provided for backward compatibility, use EventTarget.removeEventListener instead.
 * EventTarget.removeEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
 * @function Chart.helpers.removeEvent
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */helpers.removeEvent=_removeEventListener;},{"45":45}],48:[function(require,module,exports){'use strict';var helpers=require(45);var basic=require(46);var dom=require(47);// @TODO Make possible to select another platform at build time.
var implementation=dom._enabled?dom:basic;/**
 * @namespace Chart.platform
 * @see https://chartjs.gitbooks.io/proposals/content/Platform.html
 * @since 2.4.0
 */module.exports=helpers.extend({/**
	 * @since 2.7.0
	 */initialize:function initialize(){},/**
	 * Called at chart construction time, returns a context2d instance implementing
	 * the [W3C Canvas 2D Context API standard]{@link https://www.w3.org/TR/2dcontext/}.
	 * @param {*} item - The native item from which to acquire context (platform specific)
	 * @param {Object} options - The chart options
	 * @returns {CanvasRenderingContext2D} context2d instance
	 */acquireContext:function acquireContext(){},/**
	 * Called at chart destruction time, releases any resources associated to the context
	 * previously returned by the acquireContext() method.
	 * @param {CanvasRenderingContext2D} context - The context2d instance
	 * @returns {Boolean} true if the method succeeded, else false
	 */releaseContext:function releaseContext(){},/**
	 * Registers the specified listener on the given chart.
	 * @param {Chart} chart - Chart from which to listen for event
	 * @param {String} type - The ({@link IEvent}) type to listen for
	 * @param {Function} listener - Receives a notification (an object that implements
	 * the {@link IEvent} interface) when an event of the specified type occurs.
	 */addEventListener:function addEventListener(){},/**
	 * Removes the specified listener previously registered with addEventListener.
	 * @param {Chart} chart -Chart from which to remove the listener
	 * @param {String} type - The ({@link IEvent}) type to remove
	 * @param {Function} listener - The listener function to remove from the event target.
	 */removeEventListener:function removeEventListener(){}},implementation);/**
 * @interface IPlatform
 * Allows abstracting platform dependencies away from the chart
 * @borrows Chart.platform.acquireContext as acquireContext
 * @borrows Chart.platform.releaseContext as releaseContext
 * @borrows Chart.platform.addEventListener as addEventListener
 * @borrows Chart.platform.removeEventListener as removeEventListener
 *//**
 * @interface IEvent
 * @prop {String} type - The event type name, possible values are:
 * 'contextmenu', 'mouseenter', 'mousedown', 'mousemove', 'mouseup', 'mouseout',
 * 'click', 'dblclick', 'keydown', 'keypress', 'keyup' and 'resize'
 * @prop {*} native - The original native event (null for emulated events, e.g. 'resize')
 * @prop {Number} x - The mouse x position, relative to the canvas (null for incompatible events)
 * @prop {Number} y - The mouse y position, relative to the canvas (null for incompatible events)
 */},{"45":45,"46":46,"47":47}],49:[function(require,module,exports){'use strict';module.exports={};module.exports.filler=require(50);module.exports.legend=require(51);module.exports.title=require(52);},{"50":50,"51":51,"52":52}],50:[function(require,module,exports){/**
 * Plugin based on discussion from the following Chart.js issues:
 * @see https://github.com/chartjs/Chart.js/issues/2380#issuecomment-279961569
 * @see https://github.com/chartjs/Chart.js/issues/2440#issuecomment-256461897
 */'use strict';var defaults=require(25);var elements=require(40);var helpers=require(45);defaults._set('global',{plugins:{filler:{propagate:true}}});var mappers={dataset:function dataset(source){var index=source.fill;var chart=source.chart;var meta=chart.getDatasetMeta(index);var visible=meta&&chart.isDatasetVisible(index);var points=visible&&meta.dataset._children||[];var length=points.length||0;return!length?null:function(point,i){return i<length&&points[i]._view||null;};},boundary:function boundary(source){var boundary=source.boundary;var x=boundary?boundary.x:null;var y=boundary?boundary.y:null;return function(point){return{x:x===null?point.x:x,y:y===null?point.y:y};};}};// @todo if (fill[0] === '#')
function decodeFill(el,index,count){var model=el._model||{};var fill=model.fill;var target;if(fill===undefined){fill=!!model.backgroundColor;}if(fill===false||fill===null){return false;}if(fill===true){return'origin';}target=parseFloat(fill,10);if(isFinite(target)&&Math.floor(target)===target){if(fill[0]==='-'||fill[0]==='+'){target=index+target;}if(target===index||target<0||target>=count){return false;}return target;}switch(fill){// compatibility
case'bottom':return'start';case'top':return'end';case'zero':return'origin';// supported boundaries
case'origin':case'start':case'end':return fill;// invalid fill values
default:return false;}}function computeBoundary(source){var model=source.el._model||{};var scale=source.el._scale||{};var fill=source.fill;var target=null;var horizontal;if(isFinite(fill)){return null;}// Backward compatibility: until v3, we still need to support boundary values set on
// the model (scaleTop, scaleBottom and scaleZero) because some external plugins and
// controllers might still use it (e.g. the Smith chart).
if(fill==='start'){target=model.scaleBottom===undefined?scale.bottom:model.scaleBottom;}else if(fill==='end'){target=model.scaleTop===undefined?scale.top:model.scaleTop;}else if(model.scaleZero!==undefined){target=model.scaleZero;}else if(scale.getBasePosition){target=scale.getBasePosition();}else if(scale.getBasePixel){target=scale.getBasePixel();}if(target!==undefined&&target!==null){if(target.x!==undefined&&target.y!==undefined){return target;}if(typeof target==='number'&&isFinite(target)){horizontal=scale.isHorizontal();return{x:horizontal?target:null,y:horizontal?null:target};}}return null;}function resolveTarget(sources,index,propagate){var source=sources[index];var fill=source.fill;var visited=[index];var target;if(!propagate){return fill;}while(fill!==false&&visited.indexOf(fill)===-1){if(!isFinite(fill)){return fill;}target=sources[fill];if(!target){return false;}if(target.visible){return fill;}visited.push(fill);fill=target.fill;}return false;}function createMapper(source){var fill=source.fill;var type='dataset';if(fill===false){return null;}if(!isFinite(fill)){type='boundary';}return mappers[type](source);}function isDrawable(point){return point&&!point.skip;}function drawArea(ctx,curve0,curve1,len0,len1){var i;if(!len0||!len1){return;}// building first area curve (normal)
ctx.moveTo(curve0[0].x,curve0[0].y);for(i=1;i<len0;++i){helpers.canvas.lineTo(ctx,curve0[i-1],curve0[i]);}// joining the two area curves
ctx.lineTo(curve1[len1-1].x,curve1[len1-1].y);// building opposite area curve (reverse)
for(i=len1-1;i>0;--i){helpers.canvas.lineTo(ctx,curve1[i],curve1[i-1],true);}}function doFill(ctx,points,mapper,view,color,loop){var count=points.length;var span=view.spanGaps;var curve0=[];var curve1=[];var len0=0;var len1=0;var i,ilen,index,p0,p1,d0,d1;ctx.beginPath();for(i=0,ilen=count+!!loop;i<ilen;++i){index=i%count;p0=points[index]._view;p1=mapper(p0,index,view);d0=isDrawable(p0);d1=isDrawable(p1);if(d0&&d1){len0=curve0.push(p0);len1=curve1.push(p1);}else if(len0&&len1){if(!span){drawArea(ctx,curve0,curve1,len0,len1);len0=len1=0;curve0=[];curve1=[];}else{if(d0){curve0.push(p0);}if(d1){curve1.push(p1);}}}}drawArea(ctx,curve0,curve1,len0,len1);ctx.closePath();ctx.fillStyle=color;ctx.fill();}module.exports={id:'filler',afterDatasetsUpdate:function afterDatasetsUpdate(chart,options){var count=(chart.data.datasets||[]).length;var propagate=options.propagate;var sources=[];var meta,i,el,source;for(i=0;i<count;++i){meta=chart.getDatasetMeta(i);el=meta.dataset;source=null;if(el&&el._model&&el instanceof elements.Line){source={visible:chart.isDatasetVisible(i),fill:decodeFill(el,i,count),chart:chart,el:el};}meta.$filler=source;sources.push(source);}for(i=0;i<count;++i){source=sources[i];if(!source){continue;}source.fill=resolveTarget(sources,i,propagate);source.boundary=computeBoundary(source);source.mapper=createMapper(source);}},beforeDatasetDraw:function beforeDatasetDraw(chart,args){var meta=args.meta.$filler;if(!meta){return;}var ctx=chart.ctx;var el=meta.el;var view=el._view;var points=el._children||[];var mapper=meta.mapper;var color=view.backgroundColor||defaults.global.defaultColor;if(mapper&&color&&points.length){helpers.canvas.clipArea(ctx,chart.chartArea);doFill(ctx,points,mapper,view,color,el._loop);helpers.canvas.unclipArea(ctx);}}};},{"25":25,"40":40,"45":45}],51:[function(require,module,exports){'use strict';var defaults=require(25);var Element=require(26);var helpers=require(45);var layouts=require(30);var noop=helpers.noop;defaults._set('global',{legend:{display:true,position:'top',fullWidth:true,reverse:false,weight:1000,// a callback that will handle
onClick:function onClick(e,legendItem){var index=legendItem.datasetIndex;var ci=this.chart;var meta=ci.getDatasetMeta(index);// See controller.isDatasetVisible comment
meta.hidden=meta.hidden===null?!ci.data.datasets[index].hidden:null;// We hid a dataset ... rerender the chart
ci.update();},onHover:null,labels:{boxWidth:40,padding:10,// Generates labels shown in the legend
// Valid properties to return:
// text : text to display
// fillStyle : fill of coloured box
// strokeStyle: stroke of coloured box
// hidden : if this legend item refers to a hidden item
// lineCap : cap style for line
// lineDash
// lineDashOffset :
// lineJoin :
// lineWidth :
generateLabels:function generateLabels(chart){var data=chart.data;return helpers.isArray(data.datasets)?data.datasets.map(function(dataset,i){return{text:dataset.label,fillStyle:!helpers.isArray(dataset.backgroundColor)?dataset.backgroundColor:dataset.backgroundColor[0],hidden:!chart.isDatasetVisible(i),lineCap:dataset.borderCapStyle,lineDash:dataset.borderDash,lineDashOffset:dataset.borderDashOffset,lineJoin:dataset.borderJoinStyle,lineWidth:dataset.borderWidth,strokeStyle:dataset.borderColor,pointStyle:dataset.pointStyle,// Below is extra data used for toggling the datasets
datasetIndex:i};},this):[];}}},legendCallback:function legendCallback(chart){var text=[];text.push('<ul class="'+chart.id+'-legend">');for(var i=0;i<chart.data.datasets.length;i++){text.push('<li><span style="background-color:'+chart.data.datasets[i].backgroundColor+'"></span>');if(chart.data.datasets[i].label){text.push(chart.data.datasets[i].label);}text.push('</li>');}text.push('</ul>');return text.join('');}});/**
 * Helper function to get the box width based on the usePointStyle option
 * @param labelopts {Object} the label options on the legend
 * @param fontSize {Number} the label font size
 * @return {Number} width of the color box area
 */function getBoxWidth(labelOpts,fontSize){return labelOpts.usePointStyle?fontSize*Math.SQRT2:labelOpts.boxWidth;}/**
 * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
 */var Legend=Element.extend({initialize:function initialize(config){helpers.extend(this,config);// Contains hit boxes for each dataset (in dataset order)
this.legendHitBoxes=[];// Are we in doughnut mode which has a different data type
this.doughnutMode=false;},// These methods are ordered by lifecycle. Utilities then follow.
// Any function defined here is inherited by all legend types.
// Any function can be extended by the legend type
beforeUpdate:noop,update:function update(maxWidth,maxHeight,margins){var me=this;// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
me.beforeUpdate();// Absorb the master measurements
me.maxWidth=maxWidth;me.maxHeight=maxHeight;me.margins=margins;// Dimensions
me.beforeSetDimensions();me.setDimensions();me.afterSetDimensions();// Labels
me.beforeBuildLabels();me.buildLabels();me.afterBuildLabels();// Fit
me.beforeFit();me.fit();me.afterFit();//
me.afterUpdate();return me.minSize;},afterUpdate:noop,//
beforeSetDimensions:noop,setDimensions:function setDimensions(){var me=this;// Set the unconstrained dimension before label rotation
if(me.isHorizontal()){// Reset position before calculating rotation
me.width=me.maxWidth;me.left=0;me.right=me.width;}else{me.height=me.maxHeight;// Reset position before calculating rotation
me.top=0;me.bottom=me.height;}// Reset padding
me.paddingLeft=0;me.paddingTop=0;me.paddingRight=0;me.paddingBottom=0;// Reset minSize
me.minSize={width:0,height:0};},afterSetDimensions:noop,//
beforeBuildLabels:noop,buildLabels:function buildLabels(){var me=this;var labelOpts=me.options.labels||{};var legendItems=helpers.callback(labelOpts.generateLabels,[me.chart],me)||[];if(labelOpts.filter){legendItems=legendItems.filter(function(item){return labelOpts.filter(item,me.chart.data);});}if(me.options.reverse){legendItems.reverse();}me.legendItems=legendItems;},afterBuildLabels:noop,//
beforeFit:noop,fit:function fit(){var me=this;var opts=me.options;var labelOpts=opts.labels;var display=opts.display;var ctx=me.ctx;var globalDefault=defaults.global;var valueOrDefault=helpers.valueOrDefault;var fontSize=valueOrDefault(labelOpts.fontSize,globalDefault.defaultFontSize);var fontStyle=valueOrDefault(labelOpts.fontStyle,globalDefault.defaultFontStyle);var fontFamily=valueOrDefault(labelOpts.fontFamily,globalDefault.defaultFontFamily);var labelFont=helpers.fontString(fontSize,fontStyle,fontFamily);// Reset hit boxes
var hitboxes=me.legendHitBoxes=[];var minSize=me.minSize;var isHorizontal=me.isHorizontal();if(isHorizontal){minSize.width=me.maxWidth;// fill all the width
minSize.height=display?10:0;}else{minSize.width=display?10:0;minSize.height=me.maxHeight;// fill all the height
}// Increase sizes here
if(display){ctx.font=labelFont;if(isHorizontal){// Labels
// Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
var lineWidths=me.lineWidths=[0];var totalHeight=me.legendItems.length?fontSize+labelOpts.padding:0;ctx.textAlign='left';ctx.textBaseline='top';helpers.each(me.legendItems,function(legendItem,i){var boxWidth=getBoxWidth(labelOpts,fontSize);var width=boxWidth+fontSize/2+ctx.measureText(legendItem.text).width;if(lineWidths[lineWidths.length-1]+width+labelOpts.padding>=me.width){totalHeight+=fontSize+labelOpts.padding;lineWidths[lineWidths.length]=me.left;}// Store the hitbox width and height here. Final position will be updated in `draw`
hitboxes[i]={left:0,top:0,width:width,height:fontSize};lineWidths[lineWidths.length-1]+=width+labelOpts.padding;});minSize.height+=totalHeight;}else{var vPadding=labelOpts.padding;var columnWidths=me.columnWidths=[];var totalWidth=labelOpts.padding;var currentColWidth=0;var currentColHeight=0;var itemHeight=fontSize+vPadding;helpers.each(me.legendItems,function(legendItem,i){var boxWidth=getBoxWidth(labelOpts,fontSize);var itemWidth=boxWidth+fontSize/2+ctx.measureText(legendItem.text).width;// If too tall, go to new column
if(currentColHeight+itemHeight>minSize.height){totalWidth+=currentColWidth+labelOpts.padding;columnWidths.push(currentColWidth);// previous column width
currentColWidth=0;currentColHeight=0;}// Get max width
currentColWidth=Math.max(currentColWidth,itemWidth);currentColHeight+=itemHeight;// Store the hitbox width and height here. Final position will be updated in `draw`
hitboxes[i]={left:0,top:0,width:itemWidth,height:fontSize};});totalWidth+=currentColWidth;columnWidths.push(currentColWidth);minSize.width+=totalWidth;}}me.width=minSize.width;me.height=minSize.height;},afterFit:noop,// Shared Methods
isHorizontal:function isHorizontal(){return this.options.position==='top'||this.options.position==='bottom';},// Actually draw the legend on the canvas
draw:function draw(){var me=this;var opts=me.options;var labelOpts=opts.labels;var globalDefault=defaults.global;var lineDefault=globalDefault.elements.line;var legendWidth=me.width;var lineWidths=me.lineWidths;if(opts.display){var ctx=me.ctx;var valueOrDefault=helpers.valueOrDefault;var fontColor=valueOrDefault(labelOpts.fontColor,globalDefault.defaultFontColor);var fontSize=valueOrDefault(labelOpts.fontSize,globalDefault.defaultFontSize);var fontStyle=valueOrDefault(labelOpts.fontStyle,globalDefault.defaultFontStyle);var fontFamily=valueOrDefault(labelOpts.fontFamily,globalDefault.defaultFontFamily);var labelFont=helpers.fontString(fontSize,fontStyle,fontFamily);var cursor;// Canvas setup
ctx.textAlign='left';ctx.textBaseline='middle';ctx.lineWidth=0.5;ctx.strokeStyle=fontColor;// for strikethrough effect
ctx.fillStyle=fontColor;// render in correct colour
ctx.font=labelFont;var boxWidth=getBoxWidth(labelOpts,fontSize);var hitboxes=me.legendHitBoxes;// current position
var drawLegendBox=function drawLegendBox(x,y,legendItem){if(isNaN(boxWidth)||boxWidth<=0){return;}// Set the ctx for the box
ctx.save();ctx.fillStyle=valueOrDefault(legendItem.fillStyle,globalDefault.defaultColor);ctx.lineCap=valueOrDefault(legendItem.lineCap,lineDefault.borderCapStyle);ctx.lineDashOffset=valueOrDefault(legendItem.lineDashOffset,lineDefault.borderDashOffset);ctx.lineJoin=valueOrDefault(legendItem.lineJoin,lineDefault.borderJoinStyle);ctx.lineWidth=valueOrDefault(legendItem.lineWidth,lineDefault.borderWidth);ctx.strokeStyle=valueOrDefault(legendItem.strokeStyle,globalDefault.defaultColor);var isLineWidthZero=valueOrDefault(legendItem.lineWidth,lineDefault.borderWidth)===0;if(ctx.setLineDash){// IE 9 and 10 do not support line dash
ctx.setLineDash(valueOrDefault(legendItem.lineDash,lineDefault.borderDash));}if(opts.labels&&opts.labels.usePointStyle){// Recalculate x and y for drawPoint() because its expecting
// x and y to be center of figure (instead of top left)
var radius=fontSize*Math.SQRT2/2;var offSet=radius/Math.SQRT2;var centerX=x+offSet;var centerY=y+offSet;// Draw pointStyle as legend symbol
helpers.canvas.drawPoint(ctx,legendItem.pointStyle,radius,centerX,centerY);}else{// Draw box as legend symbol
if(!isLineWidthZero){ctx.strokeRect(x,y,boxWidth,fontSize);}ctx.fillRect(x,y,boxWidth,fontSize);}ctx.restore();};var fillText=function fillText(x,y,legendItem,textWidth){var halfFontSize=fontSize/2;var xLeft=boxWidth+halfFontSize+x;var yMiddle=y+halfFontSize;ctx.fillText(legendItem.text,xLeft,yMiddle);if(legendItem.hidden){// Strikethrough the text if hidden
ctx.beginPath();ctx.lineWidth=2;ctx.moveTo(xLeft,yMiddle);ctx.lineTo(xLeft+textWidth,yMiddle);ctx.stroke();}};// Horizontal
var isHorizontal=me.isHorizontal();if(isHorizontal){cursor={x:me.left+(legendWidth-lineWidths[0])/2,y:me.top+labelOpts.padding,line:0};}else{cursor={x:me.left+labelOpts.padding,y:me.top+labelOpts.padding,line:0};}var itemHeight=fontSize+labelOpts.padding;helpers.each(me.legendItems,function(legendItem,i){var textWidth=ctx.measureText(legendItem.text).width;var width=boxWidth+fontSize/2+textWidth;var x=cursor.x;var y=cursor.y;if(isHorizontal){if(x+width>=legendWidth){y=cursor.y+=itemHeight;cursor.line++;x=cursor.x=me.left+(legendWidth-lineWidths[cursor.line])/2;}}else if(y+itemHeight>me.bottom){x=cursor.x=x+me.columnWidths[cursor.line]+labelOpts.padding;y=cursor.y=me.top+labelOpts.padding;cursor.line++;}drawLegendBox(x,y,legendItem);hitboxes[i].left=x;hitboxes[i].top=y;// Fill the actual label
fillText(x,y,legendItem,textWidth);if(isHorizontal){cursor.x+=width+labelOpts.padding;}else{cursor.y+=itemHeight;}});}},/**
	 * Handle an event
	 * @private
	 * @param {IEvent} event - The event to handle
	 * @return {Boolean} true if a change occured
	 */handleEvent:function handleEvent(e){var me=this;var opts=me.options;var type=e.type==='mouseup'?'click':e.type;var changed=false;if(type==='mousemove'){if(!opts.onHover){return;}}else if(type==='click'){if(!opts.onClick){return;}}else{return;}// Chart event already has relative position in it
var x=e.x;var y=e.y;if(x>=me.left&&x<=me.right&&y>=me.top&&y<=me.bottom){// See if we are touching one of the dataset boxes
var lh=me.legendHitBoxes;for(var i=0;i<lh.length;++i){var hitBox=lh[i];if(x>=hitBox.left&&x<=hitBox.left+hitBox.width&&y>=hitBox.top&&y<=hitBox.top+hitBox.height){// Touching an element
if(type==='click'){// use e.native for backwards compatibility
opts.onClick.call(me,e.native,me.legendItems[i]);changed=true;break;}else if(type==='mousemove'){// use e.native for backwards compatibility
opts.onHover.call(me,e.native,me.legendItems[i]);changed=true;break;}}}}return changed;}});function createNewLegendAndAttach(chart,legendOpts){var legend=new Legend({ctx:chart.ctx,options:legendOpts,chart:chart});layouts.configure(chart,legend,legendOpts);layouts.addBox(chart,legend);chart.legend=legend;}module.exports={id:'legend',/**
	 * Backward compatibility: since 2.1.5, the legend is registered as a plugin, making
	 * Chart.Legend obsolete. To avoid a breaking change, we export the Legend as part of
	 * the plugin, which one will be re-exposed in the chart.js file.
	 * https://github.com/chartjs/Chart.js/pull/2640
	 * @private
	 */_element:Legend,beforeInit:function beforeInit(chart){var legendOpts=chart.options.legend;if(legendOpts){createNewLegendAndAttach(chart,legendOpts);}},beforeUpdate:function beforeUpdate(chart){var legendOpts=chart.options.legend;var legend=chart.legend;if(legendOpts){helpers.mergeIf(legendOpts,defaults.global.legend);if(legend){layouts.configure(chart,legend,legendOpts);legend.options=legendOpts;}else{createNewLegendAndAttach(chart,legendOpts);}}else if(legend){layouts.removeBox(chart,legend);delete chart.legend;}},afterEvent:function afterEvent(chart,e){var legend=chart.legend;if(legend){legend.handleEvent(e);}}};},{"25":25,"26":26,"30":30,"45":45}],52:[function(require,module,exports){'use strict';var defaults=require(25);var Element=require(26);var helpers=require(45);var layouts=require(30);var noop=helpers.noop;defaults._set('global',{title:{display:false,fontStyle:'bold',fullWidth:true,lineHeight:1.2,padding:10,position:'top',text:'',weight:2000// by default greater than legend (1000) to be above
}});/**
 * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
 */var Title=Element.extend({initialize:function initialize(config){var me=this;helpers.extend(me,config);// Contains hit boxes for each dataset (in dataset order)
me.legendHitBoxes=[];},// These methods are ordered by lifecycle. Utilities then follow.
beforeUpdate:noop,update:function update(maxWidth,maxHeight,margins){var me=this;// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
me.beforeUpdate();// Absorb the master measurements
me.maxWidth=maxWidth;me.maxHeight=maxHeight;me.margins=margins;// Dimensions
me.beforeSetDimensions();me.setDimensions();me.afterSetDimensions();// Labels
me.beforeBuildLabels();me.buildLabels();me.afterBuildLabels();// Fit
me.beforeFit();me.fit();me.afterFit();//
me.afterUpdate();return me.minSize;},afterUpdate:noop,//
beforeSetDimensions:noop,setDimensions:function setDimensions(){var me=this;// Set the unconstrained dimension before label rotation
if(me.isHorizontal()){// Reset position before calculating rotation
me.width=me.maxWidth;me.left=0;me.right=me.width;}else{me.height=me.maxHeight;// Reset position before calculating rotation
me.top=0;me.bottom=me.height;}// Reset padding
me.paddingLeft=0;me.paddingTop=0;me.paddingRight=0;me.paddingBottom=0;// Reset minSize
me.minSize={width:0,height:0};},afterSetDimensions:noop,//
beforeBuildLabels:noop,buildLabels:noop,afterBuildLabels:noop,//
beforeFit:noop,fit:function fit(){var me=this;var valueOrDefault=helpers.valueOrDefault;var opts=me.options;var display=opts.display;var fontSize=valueOrDefault(opts.fontSize,defaults.global.defaultFontSize);var minSize=me.minSize;var lineCount=helpers.isArray(opts.text)?opts.text.length:1;var lineHeight=helpers.options.toLineHeight(opts.lineHeight,fontSize);var textSize=display?lineCount*lineHeight+opts.padding*2:0;if(me.isHorizontal()){minSize.width=me.maxWidth;// fill all the width
minSize.height=textSize;}else{minSize.width=textSize;minSize.height=me.maxHeight;// fill all the height
}me.width=minSize.width;me.height=minSize.height;},afterFit:noop,// Shared Methods
isHorizontal:function isHorizontal(){var pos=this.options.position;return pos==='top'||pos==='bottom';},// Actually draw the title block on the canvas
draw:function draw(){var me=this;var ctx=me.ctx;var valueOrDefault=helpers.valueOrDefault;var opts=me.options;var globalDefaults=defaults.global;if(opts.display){var fontSize=valueOrDefault(opts.fontSize,globalDefaults.defaultFontSize);var fontStyle=valueOrDefault(opts.fontStyle,globalDefaults.defaultFontStyle);var fontFamily=valueOrDefault(opts.fontFamily,globalDefaults.defaultFontFamily);var titleFont=helpers.fontString(fontSize,fontStyle,fontFamily);var lineHeight=helpers.options.toLineHeight(opts.lineHeight,fontSize);var offset=lineHeight/2+opts.padding;var rotation=0;var top=me.top;var left=me.left;var bottom=me.bottom;var right=me.right;var maxWidth,titleX,titleY;ctx.fillStyle=valueOrDefault(opts.fontColor,globalDefaults.defaultFontColor);// render in correct colour
ctx.font=titleFont;// Horizontal
if(me.isHorizontal()){titleX=left+(right-left)/2;// midpoint of the width
titleY=top+offset;maxWidth=right-left;}else{titleX=opts.position==='left'?left+offset:right-offset;titleY=top+(bottom-top)/2;maxWidth=bottom-top;rotation=Math.PI*(opts.position==='left'?-0.5:0.5);}ctx.save();ctx.translate(titleX,titleY);ctx.rotate(rotation);ctx.textAlign='center';ctx.textBaseline='middle';var text=opts.text;if(helpers.isArray(text)){var y=0;for(var i=0;i<text.length;++i){ctx.fillText(text[i],0,y,maxWidth);y+=lineHeight;}}else{ctx.fillText(text,0,0,maxWidth);}ctx.restore();}}});function createNewTitleBlockAndAttach(chart,titleOpts){var title=new Title({ctx:chart.ctx,options:titleOpts,chart:chart});layouts.configure(chart,title,titleOpts);layouts.addBox(chart,title);chart.titleBlock=title;}module.exports={id:'title',/**
	 * Backward compatibility: since 2.1.5, the title is registered as a plugin, making
	 * Chart.Title obsolete. To avoid a breaking change, we export the Title as part of
	 * the plugin, which one will be re-exposed in the chart.js file.
	 * https://github.com/chartjs/Chart.js/pull/2640
	 * @private
	 */_element:Title,beforeInit:function beforeInit(chart){var titleOpts=chart.options.title;if(titleOpts){createNewTitleBlockAndAttach(chart,titleOpts);}},beforeUpdate:function beforeUpdate(chart){var titleOpts=chart.options.title;var titleBlock=chart.titleBlock;if(titleOpts){helpers.mergeIf(titleOpts,defaults.global.title);if(titleBlock){layouts.configure(chart,titleBlock,titleOpts);titleBlock.options=titleOpts;}else{createNewTitleBlockAndAttach(chart,titleOpts);}}else if(titleBlock){layouts.removeBox(chart,titleBlock);delete chart.titleBlock;}}};},{"25":25,"26":26,"30":30,"45":45}],53:[function(require,module,exports){'use strict';module.exports=function(Chart){// Default config for a category scale
var defaultConfig={position:'bottom'};var DatasetScale=Chart.Scale.extend({/**
		* Internal function to get the correct labels. If data.xLabels or data.yLabels are defined, use those
		* else fall back to data.labels
		* @private
		*/getLabels:function getLabels(){var data=this.chart.data;return this.options.labels||(this.isHorizontal()?data.xLabels:data.yLabels)||data.labels;},determineDataLimits:function determineDataLimits(){var me=this;var labels=me.getLabels();me.minIndex=0;me.maxIndex=labels.length-1;var findIndex;if(me.options.ticks.min!==undefined){// user specified min value
findIndex=labels.indexOf(me.options.ticks.min);me.minIndex=findIndex!==-1?findIndex:me.minIndex;}if(me.options.ticks.max!==undefined){// user specified max value
findIndex=labels.indexOf(me.options.ticks.max);me.maxIndex=findIndex!==-1?findIndex:me.maxIndex;}me.min=labels[me.minIndex];me.max=labels[me.maxIndex];},buildTicks:function buildTicks(){var me=this;var labels=me.getLabels();// If we are viewing some subset of labels, slice the original array
me.ticks=me.minIndex===0&&me.maxIndex===labels.length-1?labels:labels.slice(me.minIndex,me.maxIndex+1);},getLabelForIndex:function getLabelForIndex(index,datasetIndex){var me=this;var data=me.chart.data;var isHorizontal=me.isHorizontal();if(data.yLabels&&!isHorizontal){return me.getRightValue(data.datasets[datasetIndex].data[index]);}return me.ticks[index-me.minIndex];},// Used to get data value locations.  Value can either be an index or a numerical value
getPixelForValue:function getPixelForValue(value,index){var me=this;var offset=me.options.offset;// 1 is added because we need the length but we have the indexes
var offsetAmt=Math.max(me.maxIndex+1-me.minIndex-(offset?0:1),1);// If value is a data object, then index is the index in the data array,
// not the index of the scale. We need to change that.
var valueCategory;if(value!==undefined&&value!==null){valueCategory=me.isHorizontal()?value.x:value.y;}if(valueCategory!==undefined||value!==undefined&&isNaN(index)){var labels=me.getLabels();value=valueCategory||value;var idx=labels.indexOf(value);index=idx!==-1?idx:index;}if(me.isHorizontal()){var valueWidth=me.width/offsetAmt;var widthOffset=valueWidth*(index-me.minIndex);if(offset){widthOffset+=valueWidth/2;}return me.left+Math.round(widthOffset);}var valueHeight=me.height/offsetAmt;var heightOffset=valueHeight*(index-me.minIndex);if(offset){heightOffset+=valueHeight/2;}return me.top+Math.round(heightOffset);},getPixelForTick:function getPixelForTick(index){return this.getPixelForValue(this.ticks[index],index+this.minIndex,null);},getValueForPixel:function getValueForPixel(pixel){var me=this;var offset=me.options.offset;var value;var offsetAmt=Math.max(me._ticks.length-(offset?0:1),1);var horz=me.isHorizontal();var valueDimension=(horz?me.width:me.height)/offsetAmt;pixel-=horz?me.left:me.top;if(offset){pixel-=valueDimension/2;}if(pixel<=0){value=0;}else{value=Math.round(pixel/valueDimension);}return value+me.minIndex;},getBasePixel:function getBasePixel(){return this.bottom;}});Chart.scaleService.registerScaleType('category',DatasetScale,defaultConfig);};},{}],54:[function(require,module,exports){'use strict';var defaults=require(25);var helpers=require(45);var Ticks=require(34);module.exports=function(Chart){var defaultConfig={position:'left',ticks:{callback:Ticks.formatters.linear}};var LinearScale=Chart.LinearScaleBase.extend({determineDataLimits:function determineDataLimits(){var me=this;var opts=me.options;var chart=me.chart;var data=chart.data;var datasets=data.datasets;var isHorizontal=me.isHorizontal();var DEFAULT_MIN=0;var DEFAULT_MAX=1;function IDMatches(meta){return isHorizontal?meta.xAxisID===me.id:meta.yAxisID===me.id;}// First Calculate the range
me.min=null;me.max=null;var hasStacks=opts.stacked;if(hasStacks===undefined){helpers.each(datasets,function(dataset,datasetIndex){if(hasStacks){return;}var meta=chart.getDatasetMeta(datasetIndex);if(chart.isDatasetVisible(datasetIndex)&&IDMatches(meta)&&meta.stack!==undefined){hasStacks=true;}});}if(opts.stacked||hasStacks){var valuesPerStack={};helpers.each(datasets,function(dataset,datasetIndex){var meta=chart.getDatasetMeta(datasetIndex);var key=[meta.type,// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
opts.stacked===undefined&&meta.stack===undefined?datasetIndex:'',meta.stack].join('.');if(valuesPerStack[key]===undefined){valuesPerStack[key]={positiveValues:[],negativeValues:[]};}// Store these per type
var positiveValues=valuesPerStack[key].positiveValues;var negativeValues=valuesPerStack[key].negativeValues;if(chart.isDatasetVisible(datasetIndex)&&IDMatches(meta)){helpers.each(dataset.data,function(rawValue,index){var value=+me.getRightValue(rawValue);if(isNaN(value)||meta.data[index].hidden){return;}positiveValues[index]=positiveValues[index]||0;negativeValues[index]=negativeValues[index]||0;if(opts.relativePoints){positiveValues[index]=100;}else if(value<0){negativeValues[index]+=value;}else{positiveValues[index]+=value;}});}});helpers.each(valuesPerStack,function(valuesForType){var values=valuesForType.positiveValues.concat(valuesForType.negativeValues);var minVal=helpers.min(values);var maxVal=helpers.max(values);me.min=me.min===null?minVal:Math.min(me.min,minVal);me.max=me.max===null?maxVal:Math.max(me.max,maxVal);});}else{helpers.each(datasets,function(dataset,datasetIndex){var meta=chart.getDatasetMeta(datasetIndex);if(chart.isDatasetVisible(datasetIndex)&&IDMatches(meta)){helpers.each(dataset.data,function(rawValue,index){var value=+me.getRightValue(rawValue);if(isNaN(value)||meta.data[index].hidden){return;}if(me.min===null){me.min=value;}else if(value<me.min){me.min=value;}if(me.max===null){me.max=value;}else if(value>me.max){me.max=value;}});}});}me.min=isFinite(me.min)&&!isNaN(me.min)?me.min:DEFAULT_MIN;me.max=isFinite(me.max)&&!isNaN(me.max)?me.max:DEFAULT_MAX;// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
this.handleTickRangeOptions();},getTickLimit:function getTickLimit(){var maxTicks;var me=this;var tickOpts=me.options.ticks;if(me.isHorizontal()){maxTicks=Math.min(tickOpts.maxTicksLimit?tickOpts.maxTicksLimit:11,Math.ceil(me.width/50));}else{// The factor of 2 used to scale the font size has been experimentally determined.
var tickFontSize=helpers.valueOrDefault(tickOpts.fontSize,defaults.global.defaultFontSize);maxTicks=Math.min(tickOpts.maxTicksLimit?tickOpts.maxTicksLimit:11,Math.ceil(me.height/(2*tickFontSize)));}return maxTicks;},// Called after the ticks are built. We need
handleDirectionalChanges:function handleDirectionalChanges(){if(!this.isHorizontal()){// We are in a vertical orientation. The top value is the highest. So reverse the array
this.ticks.reverse();}},getLabelForIndex:function getLabelForIndex(index,datasetIndex){return+this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);},// Utils
getPixelForValue:function getPixelForValue(value){// This must be called after fit has been run so that
// this.left, this.top, this.right, and this.bottom have been defined
var me=this;var start=me.start;var rightValue=+me.getRightValue(value);var pixel;var range=me.end-start;if(me.isHorizontal()){pixel=me.left+me.width/range*(rightValue-start);}else{pixel=me.bottom-me.height/range*(rightValue-start);}return pixel;},getValueForPixel:function getValueForPixel(pixel){var me=this;var isHorizontal=me.isHorizontal();var innerDimension=isHorizontal?me.width:me.height;var offset=(isHorizontal?pixel-me.left:me.bottom-pixel)/innerDimension;return me.start+(me.end-me.start)*offset;},getPixelForTick:function getPixelForTick(index){return this.getPixelForValue(this.ticksAsNumbers[index]);}});Chart.scaleService.registerScaleType('linear',LinearScale,defaultConfig);};},{"25":25,"34":34,"45":45}],55:[function(require,module,exports){'use strict';var helpers=require(45);/**
 * Generate a set of linear ticks
 * @param generationOptions the options used to generate the ticks
 * @param dataRange the range of the data
 * @returns {Array<Number>} array of tick values
 */function generateTicks(generationOptions,dataRange){var ticks=[];// To get a "nice" value for the tick spacing, we will use the appropriately named
// "nice number" algorithm. See http://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
// for details.
var spacing;if(generationOptions.stepSize&&generationOptions.stepSize>0){spacing=generationOptions.stepSize;}else{var niceRange=helpers.niceNum(dataRange.max-dataRange.min,false);spacing=helpers.niceNum(niceRange/(generationOptions.maxTicks-1),true);}var niceMin=Math.floor(dataRange.min/spacing)*spacing;var niceMax=Math.ceil(dataRange.max/spacing)*spacing;// If min, max and stepSize is set and they make an evenly spaced scale use it.
if(generationOptions.min&&generationOptions.max&&generationOptions.stepSize){// If very close to our whole number, use it.
if(helpers.almostWhole((generationOptions.max-generationOptions.min)/generationOptions.stepSize,spacing/1000)){niceMin=generationOptions.min;niceMax=generationOptions.max;}}var numSpaces=(niceMax-niceMin)/spacing;// If very close to our rounded value, use it.
if(helpers.almostEquals(numSpaces,Math.round(numSpaces),spacing/1000)){numSpaces=Math.round(numSpaces);}else{numSpaces=Math.ceil(numSpaces);}var precision=1;if(spacing<1){precision=Math.pow(10,spacing.toString().length-2);niceMin=Math.round(niceMin*precision)/precision;niceMax=Math.round(niceMax*precision)/precision;}ticks.push(generationOptions.min!==undefined?generationOptions.min:niceMin);for(var j=1;j<numSpaces;++j){ticks.push(Math.round((niceMin+j*spacing)*precision)/precision);}ticks.push(generationOptions.max!==undefined?generationOptions.max:niceMax);return ticks;}module.exports=function(Chart){var noop=helpers.noop;Chart.LinearScaleBase=Chart.Scale.extend({getRightValue:function getRightValue(value){if(typeof value==='string'){return+value;}return Chart.Scale.prototype.getRightValue.call(this,value);},handleTickRangeOptions:function handleTickRangeOptions(){var me=this;var opts=me.options;var tickOpts=opts.ticks;// If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
// do nothing since that would make the chart weird. If the user really wants a weird chart
// axis, they can manually override it
if(tickOpts.beginAtZero){var minSign=helpers.sign(me.min);var maxSign=helpers.sign(me.max);if(minSign<0&&maxSign<0){// move the top up to 0
me.max=0;}else if(minSign>0&&maxSign>0){// move the bottom down to 0
me.min=0;}}var setMin=tickOpts.min!==undefined||tickOpts.suggestedMin!==undefined;var setMax=tickOpts.max!==undefined||tickOpts.suggestedMax!==undefined;if(tickOpts.min!==undefined){me.min=tickOpts.min;}else if(tickOpts.suggestedMin!==undefined){if(me.min===null){me.min=tickOpts.suggestedMin;}else{me.min=Math.min(me.min,tickOpts.suggestedMin);}}if(tickOpts.max!==undefined){me.max=tickOpts.max;}else if(tickOpts.suggestedMax!==undefined){if(me.max===null){me.max=tickOpts.suggestedMax;}else{me.max=Math.max(me.max,tickOpts.suggestedMax);}}if(setMin!==setMax){// We set the min or the max but not both.
// So ensure that our range is good
// Inverted or 0 length range can happen when
// ticks.min is set, and no datasets are visible
if(me.min>=me.max){if(setMin){me.max=me.min+1;}else{me.min=me.max-1;}}}if(me.min===me.max){me.max++;if(!tickOpts.beginAtZero){me.min--;}}},getTickLimit:noop,handleDirectionalChanges:noop,buildTicks:function buildTicks(){var me=this;var opts=me.options;var tickOpts=opts.ticks;// Figure out what the max number of ticks we can support it is based on the size of
// the axis area. For now, we say that the minimum tick spacing in pixels must be 50
// We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
// the graph. Make sure we always have at least 2 ticks
var maxTicks=me.getTickLimit();maxTicks=Math.max(2,maxTicks);var numericGeneratorOptions={maxTicks:maxTicks,min:tickOpts.min,max:tickOpts.max,stepSize:helpers.valueOrDefault(tickOpts.fixedStepSize,tickOpts.stepSize)};var ticks=me.ticks=generateTicks(numericGeneratorOptions,me);me.handleDirectionalChanges();// At this point, we need to update our max and min given the tick values since we have expanded the
// range of the scale
me.max=helpers.max(ticks);me.min=helpers.min(ticks);if(tickOpts.reverse){ticks.reverse();me.start=me.max;me.end=me.min;}else{me.start=me.min;me.end=me.max;}},convertTicksToLabels:function convertTicksToLabels(){var me=this;me.ticksAsNumbers=me.ticks.slice();me.zeroLineIndex=me.ticks.indexOf(0);Chart.Scale.prototype.convertTicksToLabels.call(me);}});};},{"45":45}],56:[function(require,module,exports){'use strict';var helpers=require(45);var Ticks=require(34);/**
 * Generate a set of logarithmic ticks
 * @param generationOptions the options used to generate the ticks
 * @param dataRange the range of the data
 * @returns {Array<Number>} array of tick values
 */function generateTicks(generationOptions,dataRange){var ticks=[];var valueOrDefault=helpers.valueOrDefault;// Figure out what the max number of ticks we can support it is based on the size of
// the axis area. For now, we say that the minimum tick spacing in pixels must be 50
// We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
// the graph
var tickVal=valueOrDefault(generationOptions.min,Math.pow(10,Math.floor(helpers.log10(dataRange.min))));var endExp=Math.floor(helpers.log10(dataRange.max));var endSignificand=Math.ceil(dataRange.max/Math.pow(10,endExp));var exp,significand;if(tickVal===0){exp=Math.floor(helpers.log10(dataRange.minNotZero));significand=Math.floor(dataRange.minNotZero/Math.pow(10,exp));ticks.push(tickVal);tickVal=significand*Math.pow(10,exp);}else{exp=Math.floor(helpers.log10(tickVal));significand=Math.floor(tickVal/Math.pow(10,exp));}var precision=exp<0?Math.pow(10,Math.abs(exp)):1;do{ticks.push(tickVal);++significand;if(significand===10){significand=1;++exp;precision=exp>=0?1:precision;}tickVal=Math.round(significand*Math.pow(10,exp)*precision)/precision;}while(exp<endExp||exp===endExp&&significand<endSignificand);var lastTick=valueOrDefault(generationOptions.max,tickVal);ticks.push(lastTick);return ticks;}module.exports=function(Chart){var defaultConfig={position:'left',// label settings
ticks:{callback:Ticks.formatters.logarithmic}};var LogarithmicScale=Chart.Scale.extend({determineDataLimits:function determineDataLimits(){var me=this;var opts=me.options;var chart=me.chart;var data=chart.data;var datasets=data.datasets;var isHorizontal=me.isHorizontal();function IDMatches(meta){return isHorizontal?meta.xAxisID===me.id:meta.yAxisID===me.id;}// Calculate Range
me.min=null;me.max=null;me.minNotZero=null;var hasStacks=opts.stacked;if(hasStacks===undefined){helpers.each(datasets,function(dataset,datasetIndex){if(hasStacks){return;}var meta=chart.getDatasetMeta(datasetIndex);if(chart.isDatasetVisible(datasetIndex)&&IDMatches(meta)&&meta.stack!==undefined){hasStacks=true;}});}if(opts.stacked||hasStacks){var valuesPerStack={};helpers.each(datasets,function(dataset,datasetIndex){var meta=chart.getDatasetMeta(datasetIndex);var key=[meta.type,// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
opts.stacked===undefined&&meta.stack===undefined?datasetIndex:'',meta.stack].join('.');if(chart.isDatasetVisible(datasetIndex)&&IDMatches(meta)){if(valuesPerStack[key]===undefined){valuesPerStack[key]=[];}helpers.each(dataset.data,function(rawValue,index){var values=valuesPerStack[key];var value=+me.getRightValue(rawValue);// invalid, hidden and negative values are ignored
if(isNaN(value)||meta.data[index].hidden||value<0){return;}values[index]=values[index]||0;values[index]+=value;});}});helpers.each(valuesPerStack,function(valuesForType){if(valuesForType.length>0){var minVal=helpers.min(valuesForType);var maxVal=helpers.max(valuesForType);me.min=me.min===null?minVal:Math.min(me.min,minVal);me.max=me.max===null?maxVal:Math.max(me.max,maxVal);}});}else{helpers.each(datasets,function(dataset,datasetIndex){var meta=chart.getDatasetMeta(datasetIndex);if(chart.isDatasetVisible(datasetIndex)&&IDMatches(meta)){helpers.each(dataset.data,function(rawValue,index){var value=+me.getRightValue(rawValue);// invalid, hidden and negative values are ignored
if(isNaN(value)||meta.data[index].hidden||value<0){return;}if(me.min===null){me.min=value;}else if(value<me.min){me.min=value;}if(me.max===null){me.max=value;}else if(value>me.max){me.max=value;}if(value!==0&&(me.minNotZero===null||value<me.minNotZero)){me.minNotZero=value;}});}});}// Common base implementation to handle ticks.min, ticks.max
this.handleTickRangeOptions();},handleTickRangeOptions:function handleTickRangeOptions(){var me=this;var opts=me.options;var tickOpts=opts.ticks;var valueOrDefault=helpers.valueOrDefault;var DEFAULT_MIN=1;var DEFAULT_MAX=10;me.min=valueOrDefault(tickOpts.min,me.min);me.max=valueOrDefault(tickOpts.max,me.max);if(me.min===me.max){if(me.min!==0&&me.min!==null){me.min=Math.pow(10,Math.floor(helpers.log10(me.min))-1);me.max=Math.pow(10,Math.floor(helpers.log10(me.max))+1);}else{me.min=DEFAULT_MIN;me.max=DEFAULT_MAX;}}if(me.min===null){me.min=Math.pow(10,Math.floor(helpers.log10(me.max))-1);}if(me.max===null){me.max=me.min!==0?Math.pow(10,Math.floor(helpers.log10(me.min))+1):DEFAULT_MAX;}if(me.minNotZero===null){if(me.min>0){me.minNotZero=me.min;}else if(me.max<1){me.minNotZero=Math.pow(10,Math.floor(helpers.log10(me.max)));}else{me.minNotZero=DEFAULT_MIN;}}},buildTicks:function buildTicks(){var me=this;var opts=me.options;var tickOpts=opts.ticks;var reverse=!me.isHorizontal();var generationOptions={min:tickOpts.min,max:tickOpts.max};var ticks=me.ticks=generateTicks(generationOptions,me);// At this point, we need to update our max and min given the tick values since we have expanded the
// range of the scale
me.max=helpers.max(ticks);me.min=helpers.min(ticks);if(tickOpts.reverse){reverse=!reverse;me.start=me.max;me.end=me.min;}else{me.start=me.min;me.end=me.max;}if(reverse){ticks.reverse();}},convertTicksToLabels:function convertTicksToLabels(){this.tickValues=this.ticks.slice();Chart.Scale.prototype.convertTicksToLabels.call(this);},// Get the correct tooltip label
getLabelForIndex:function getLabelForIndex(index,datasetIndex){return+this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);},getPixelForTick:function getPixelForTick(index){return this.getPixelForValue(this.tickValues[index]);},/**
		 * Returns the value of the first tick.
		 * @param {Number} value - The minimum not zero value.
		 * @return {Number} The first tick value.
		 * @private
		 */_getFirstTickValue:function _getFirstTickValue(value){var exp=Math.floor(helpers.log10(value));var significand=Math.floor(value/Math.pow(10,exp));return significand*Math.pow(10,exp);},getPixelForValue:function getPixelForValue(value){var me=this;var reverse=me.options.ticks.reverse;var log10=helpers.log10;var firstTickValue=me._getFirstTickValue(me.minNotZero);var offset=0;var innerDimension,pixel,start,end,sign;value=+me.getRightValue(value);if(reverse){start=me.end;end=me.start;sign=-1;}else{start=me.start;end=me.end;sign=1;}if(me.isHorizontal()){innerDimension=me.width;pixel=reverse?me.right:me.left;}else{innerDimension=me.height;sign*=-1;// invert, since the upper-left corner of the canvas is at pixel (0, 0)
pixel=reverse?me.top:me.bottom;}if(value!==start){if(start===0){// include zero tick
offset=helpers.getValueOrDefault(me.options.ticks.fontSize,Chart.defaults.global.defaultFontSize);innerDimension-=offset;start=firstTickValue;}if(value!==0){offset+=innerDimension/(log10(end)-log10(start))*(log10(value)-log10(start));}pixel+=sign*offset;}return pixel;},getValueForPixel:function getValueForPixel(pixel){var me=this;var reverse=me.options.ticks.reverse;var log10=helpers.log10;var firstTickValue=me._getFirstTickValue(me.minNotZero);var innerDimension,start,end,value;if(reverse){start=me.end;end=me.start;}else{start=me.start;end=me.end;}if(me.isHorizontal()){innerDimension=me.width;value=reverse?me.right-pixel:pixel-me.left;}else{innerDimension=me.height;value=reverse?pixel-me.top:me.bottom-pixel;}if(value!==start){if(start===0){// include zero tick
var offset=helpers.getValueOrDefault(me.options.ticks.fontSize,Chart.defaults.global.defaultFontSize);value-=offset;innerDimension-=offset;start=firstTickValue;}value*=log10(end)-log10(start);value/=innerDimension;value=Math.pow(10,log10(start)+value);}return value;}});Chart.scaleService.registerScaleType('logarithmic',LogarithmicScale,defaultConfig);};},{"34":34,"45":45}],57:[function(require,module,exports){'use strict';var defaults=require(25);var helpers=require(45);var Ticks=require(34);module.exports=function(Chart){var globalDefaults=defaults.global;var defaultConfig={display:true,// Boolean - Whether to animate scaling the chart from the centre
animate:true,position:'chartArea',angleLines:{display:true,color:'rgba(0, 0, 0, 0.1)',lineWidth:1},gridLines:{circular:false},// label settings
ticks:{// Boolean - Show a backdrop to the scale label
showLabelBackdrop:true,// String - The colour of the label backdrop
backdropColor:'rgba(255,255,255,0.75)',// Number - The backdrop padding above & below the label in pixels
backdropPaddingY:2,// Number - The backdrop padding to the side of the label in pixels
backdropPaddingX:2,callback:Ticks.formatters.linear},pointLabels:{// Boolean - if true, show point labels
display:true,// Number - Point label font size in pixels
fontSize:10,// Function - Used to convert point labels
callback:function callback(label){return label;}}};function getValueCount(scale){var opts=scale.options;return opts.angleLines.display||opts.pointLabels.display?scale.chart.data.labels.length:0;}function getPointLabelFontOptions(scale){var pointLabelOptions=scale.options.pointLabels;var fontSize=helpers.valueOrDefault(pointLabelOptions.fontSize,globalDefaults.defaultFontSize);var fontStyle=helpers.valueOrDefault(pointLabelOptions.fontStyle,globalDefaults.defaultFontStyle);var fontFamily=helpers.valueOrDefault(pointLabelOptions.fontFamily,globalDefaults.defaultFontFamily);var font=helpers.fontString(fontSize,fontStyle,fontFamily);return{size:fontSize,style:fontStyle,family:fontFamily,font:font};}function measureLabelSize(ctx,fontSize,label){if(helpers.isArray(label)){return{w:helpers.longestText(ctx,ctx.font,label),h:label.length*fontSize+(label.length-1)*1.5*fontSize};}return{w:ctx.measureText(label).width,h:fontSize};}function determineLimits(angle,pos,size,min,max){if(angle===min||angle===max){return{start:pos-size/2,end:pos+size/2};}else if(angle<min||angle>max){return{start:pos-size-5,end:pos};}return{start:pos,end:pos+size+5};}/**
	 * Helper function to fit a radial linear scale with point labels
	 */function fitWithPointLabels(scale){/*
		 * Right, this is really confusing and there is a lot of maths going on here
		 * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
		 *
		 * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
		 *
		 * Solution:
		 *
		 * We assume the radius of the polygon is half the size of the canvas at first
		 * at each index we check if the text overlaps.
		 *
		 * Where it does, we store that angle and that index.
		 *
		 * After finding the largest index and angle we calculate how much we need to remove
		 * from the shape radius to move the point inwards by that x.
		 *
		 * We average the left and right distances to get the maximum shape radius that can fit in the box
		 * along with labels.
		 *
		 * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
		 * on each side, removing that from the size, halving it and adding the left x protrusion width.
		 *
		 * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
		 * and position it in the most space efficient manner
		 *
		 * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
		 */var plFont=getPointLabelFontOptions(scale);// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
var largestPossibleRadius=Math.min(scale.height/2,scale.width/2);var furthestLimits={r:scale.width,l:0,t:scale.height,b:0};var furthestAngles={};var i,textSize,pointPosition;scale.ctx.font=plFont.font;scale._pointLabelSizes=[];var valueCount=getValueCount(scale);for(i=0;i<valueCount;i++){pointPosition=scale.getPointPosition(i,largestPossibleRadius);textSize=measureLabelSize(scale.ctx,plFont.size,scale.pointLabels[i]||'');scale._pointLabelSizes[i]=textSize;// Add quarter circle to make degree 0 mean top of circle
var angleRadians=scale.getIndexAngle(i);var angle=helpers.toDegrees(angleRadians)%360;var hLimits=determineLimits(angle,pointPosition.x,textSize.w,0,180);var vLimits=determineLimits(angle,pointPosition.y,textSize.h,90,270);if(hLimits.start<furthestLimits.l){furthestLimits.l=hLimits.start;furthestAngles.l=angleRadians;}if(hLimits.end>furthestLimits.r){furthestLimits.r=hLimits.end;furthestAngles.r=angleRadians;}if(vLimits.start<furthestLimits.t){furthestLimits.t=vLimits.start;furthestAngles.t=angleRadians;}if(vLimits.end>furthestLimits.b){furthestLimits.b=vLimits.end;furthestAngles.b=angleRadians;}}scale.setReductions(largestPossibleRadius,furthestLimits,furthestAngles);}/**
	 * Helper function to fit a radial linear scale with no point labels
	 */function _fit(scale){var largestPossibleRadius=Math.min(scale.height/2,scale.width/2);scale.drawingArea=Math.round(largestPossibleRadius);scale.setCenterPoint(0,0,0,0);}function getTextAlignForAngle(angle){if(angle===0||angle===180){return'center';}else if(angle<180){return'left';}return'right';}function fillText(ctx,text,position,fontSize){if(helpers.isArray(text)){var y=position.y;var spacing=1.5*fontSize;for(var i=0;i<text.length;++i){ctx.fillText(text[i],position.x,y);y+=spacing;}}else{ctx.fillText(text,position.x,position.y);}}function adjustPointPositionForLabelHeight(angle,textSize,position){if(angle===90||angle===270){position.y-=textSize.h/2;}else if(angle>270||angle<90){position.y-=textSize.h;}}function drawPointLabels(scale){var ctx=scale.ctx;var opts=scale.options;var angleLineOpts=opts.angleLines;var pointLabelOpts=opts.pointLabels;ctx.lineWidth=angleLineOpts.lineWidth;ctx.strokeStyle=angleLineOpts.color;var outerDistance=scale.getDistanceFromCenterForValue(opts.ticks.reverse?scale.min:scale.max);// Point Label Font
var plFont=getPointLabelFontOptions(scale);ctx.textBaseline='top';for(var i=getValueCount(scale)-1;i>=0;i--){if(angleLineOpts.display){var outerPosition=scale.getPointPosition(i,outerDistance);ctx.beginPath();ctx.moveTo(scale.xCenter,scale.yCenter);ctx.lineTo(outerPosition.x,outerPosition.y);ctx.stroke();ctx.closePath();}if(pointLabelOpts.display){// Extra 3px out for some label spacing
var pointLabelPosition=scale.getPointPosition(i,outerDistance+5);// Keep this in loop since we may support array properties here
var pointLabelFontColor=helpers.valueAtIndexOrDefault(pointLabelOpts.fontColor,i,globalDefaults.defaultFontColor);ctx.font=plFont.font;ctx.fillStyle=pointLabelFontColor;var angleRadians=scale.getIndexAngle(i);var angle=helpers.toDegrees(angleRadians);ctx.textAlign=getTextAlignForAngle(angle);adjustPointPositionForLabelHeight(angle,scale._pointLabelSizes[i],pointLabelPosition);fillText(ctx,scale.pointLabels[i]||'',pointLabelPosition,plFont.size);}}}function drawRadiusLine(scale,gridLineOpts,radius,index){var ctx=scale.ctx;ctx.strokeStyle=helpers.valueAtIndexOrDefault(gridLineOpts.color,index-1);ctx.lineWidth=helpers.valueAtIndexOrDefault(gridLineOpts.lineWidth,index-1);if(scale.options.gridLines.circular){// Draw circular arcs between the points
ctx.beginPath();ctx.arc(scale.xCenter,scale.yCenter,radius,0,Math.PI*2);ctx.closePath();ctx.stroke();}else{// Draw straight lines connecting each index
var valueCount=getValueCount(scale);if(valueCount===0){return;}ctx.beginPath();var pointPosition=scale.getPointPosition(0,radius);ctx.moveTo(pointPosition.x,pointPosition.y);for(var i=1;i<valueCount;i++){pointPosition=scale.getPointPosition(i,radius);ctx.lineTo(pointPosition.x,pointPosition.y);}ctx.closePath();ctx.stroke();}}function numberOrZero(param){return helpers.isNumber(param)?param:0;}var LinearRadialScale=Chart.LinearScaleBase.extend({setDimensions:function setDimensions(){var me=this;var opts=me.options;var tickOpts=opts.ticks;// Set the unconstrained dimension before label rotation
me.width=me.maxWidth;me.height=me.maxHeight;me.xCenter=Math.round(me.width/2);me.yCenter=Math.round(me.height/2);var minSize=helpers.min([me.height,me.width]);var tickFontSize=helpers.valueOrDefault(tickOpts.fontSize,globalDefaults.defaultFontSize);me.drawingArea=opts.display?minSize/2-(tickFontSize/2+tickOpts.backdropPaddingY):minSize/2;},determineDataLimits:function determineDataLimits(){var me=this;var chart=me.chart;var min=Number.POSITIVE_INFINITY;var max=Number.NEGATIVE_INFINITY;helpers.each(chart.data.datasets,function(dataset,datasetIndex){if(chart.isDatasetVisible(datasetIndex)){var meta=chart.getDatasetMeta(datasetIndex);helpers.each(dataset.data,function(rawValue,index){var value=+me.getRightValue(rawValue);if(isNaN(value)||meta.data[index].hidden){return;}min=Math.min(value,min);max=Math.max(value,max);});}});me.min=min===Number.POSITIVE_INFINITY?0:min;me.max=max===Number.NEGATIVE_INFINITY?0:max;// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
me.handleTickRangeOptions();},getTickLimit:function getTickLimit(){var tickOpts=this.options.ticks;var tickFontSize=helpers.valueOrDefault(tickOpts.fontSize,globalDefaults.defaultFontSize);return Math.min(tickOpts.maxTicksLimit?tickOpts.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*tickFontSize)));},convertTicksToLabels:function convertTicksToLabels(){var me=this;Chart.LinearScaleBase.prototype.convertTicksToLabels.call(me);// Point labels
me.pointLabels=me.chart.data.labels.map(me.options.pointLabels.callback,me);},getLabelForIndex:function getLabelForIndex(index,datasetIndex){return+this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);},fit:function fit(){if(this.options.pointLabels.display){fitWithPointLabels(this);}else{_fit(this);}},/**
		 * Set radius reductions and determine new radius and center point
		 * @private
		 */setReductions:function setReductions(largestPossibleRadius,furthestLimits,furthestAngles){var me=this;var radiusReductionLeft=furthestLimits.l/Math.sin(furthestAngles.l);var radiusReductionRight=Math.max(furthestLimits.r-me.width,0)/Math.sin(furthestAngles.r);var radiusReductionTop=-furthestLimits.t/Math.cos(furthestAngles.t);var radiusReductionBottom=-Math.max(furthestLimits.b-me.height,0)/Math.cos(furthestAngles.b);radiusReductionLeft=numberOrZero(radiusReductionLeft);radiusReductionRight=numberOrZero(radiusReductionRight);radiusReductionTop=numberOrZero(radiusReductionTop);radiusReductionBottom=numberOrZero(radiusReductionBottom);me.drawingArea=Math.min(Math.round(largestPossibleRadius-(radiusReductionLeft+radiusReductionRight)/2),Math.round(largestPossibleRadius-(radiusReductionTop+radiusReductionBottom)/2));me.setCenterPoint(radiusReductionLeft,radiusReductionRight,radiusReductionTop,radiusReductionBottom);},setCenterPoint:function setCenterPoint(leftMovement,rightMovement,topMovement,bottomMovement){var me=this;var maxRight=me.width-rightMovement-me.drawingArea;var maxLeft=leftMovement+me.drawingArea;var maxTop=topMovement+me.drawingArea;var maxBottom=me.height-bottomMovement-me.drawingArea;me.xCenter=Math.round((maxLeft+maxRight)/2+me.left);me.yCenter=Math.round((maxTop+maxBottom)/2+me.top);},getIndexAngle:function getIndexAngle(index){var angleMultiplier=Math.PI*2/getValueCount(this);var startAngle=this.chart.options&&this.chart.options.startAngle?this.chart.options.startAngle:0;var startAngleRadians=startAngle*Math.PI*2/360;// Start from the top instead of right, so remove a quarter of the circle
return index*angleMultiplier+startAngleRadians;},getDistanceFromCenterForValue:function getDistanceFromCenterForValue(value){var me=this;if(value===null){return 0;// null always in center
}// Take into account half font size + the yPadding of the top value
var scalingFactor=me.drawingArea/(me.max-me.min);if(me.options.ticks.reverse){return(me.max-value)*scalingFactor;}return(value-me.min)*scalingFactor;},getPointPosition:function getPointPosition(index,distanceFromCenter){var me=this;var thisAngle=me.getIndexAngle(index)-Math.PI/2;return{x:Math.round(Math.cos(thisAngle)*distanceFromCenter)+me.xCenter,y:Math.round(Math.sin(thisAngle)*distanceFromCenter)+me.yCenter};},getPointPositionForValue:function getPointPositionForValue(index,value){return this.getPointPosition(index,this.getDistanceFromCenterForValue(value));},getBasePosition:function getBasePosition(){var me=this;var min=me.min;var max=me.max;return me.getPointPositionForValue(0,me.beginAtZero?0:min<0&&max<0?max:min>0&&max>0?min:0);},draw:function draw(){var me=this;var opts=me.options;var gridLineOpts=opts.gridLines;var tickOpts=opts.ticks;var valueOrDefault=helpers.valueOrDefault;if(opts.display){var ctx=me.ctx;var startAngle=this.getIndexAngle(0);// Tick Font
var tickFontSize=valueOrDefault(tickOpts.fontSize,globalDefaults.defaultFontSize);var tickFontStyle=valueOrDefault(tickOpts.fontStyle,globalDefaults.defaultFontStyle);var tickFontFamily=valueOrDefault(tickOpts.fontFamily,globalDefaults.defaultFontFamily);var tickLabelFont=helpers.fontString(tickFontSize,tickFontStyle,tickFontFamily);helpers.each(me.ticks,function(label,index){// Don't draw a centre value (if it is minimum)
if(index>0||tickOpts.reverse){var yCenterOffset=me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);// Draw circular lines around the scale
if(gridLineOpts.display&&index!==0){drawRadiusLine(me,gridLineOpts,yCenterOffset,index);}if(tickOpts.display){var tickFontColor=valueOrDefault(tickOpts.fontColor,globalDefaults.defaultFontColor);ctx.font=tickLabelFont;ctx.save();ctx.translate(me.xCenter,me.yCenter);ctx.rotate(startAngle);if(tickOpts.showLabelBackdrop){var labelWidth=ctx.measureText(label).width;ctx.fillStyle=tickOpts.backdropColor;ctx.fillRect(-labelWidth/2-tickOpts.backdropPaddingX,-yCenterOffset-tickFontSize/2-tickOpts.backdropPaddingY,labelWidth+tickOpts.backdropPaddingX*2,tickFontSize+tickOpts.backdropPaddingY*2);}ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=tickFontColor;ctx.fillText(label,0,-yCenterOffset);ctx.restore();}}});if(opts.angleLines.display||opts.pointLabels.display){drawPointLabels(me);}}}});Chart.scaleService.registerScaleType('radialLinear',LinearRadialScale,defaultConfig);};},{"25":25,"34":34,"45":45}],58:[function(require,module,exports){/* global window: false */'use strict';var moment=require(1);moment=typeof moment==='function'?moment:window.moment;var defaults=require(25);var helpers=require(45);// Integer constants are from the ES6 spec.
var MIN_INTEGER=Number.MIN_SAFE_INTEGER||-9007199254740991;var MAX_INTEGER=Number.MAX_SAFE_INTEGER||9007199254740991;var INTERVALS={millisecond:{common:true,size:1,steps:[1,2,5,10,20,50,100,250,500]},second:{common:true,size:1000,steps:[1,2,5,10,30]},minute:{common:true,size:60000,steps:[1,2,5,10,30]},hour:{common:true,size:3600000,steps:[1,2,3,6,12]},day:{common:true,size:86400000,steps:[1,2,5]},week:{common:false,size:604800000,steps:[1,2,3,4]},month:{common:true,size:2.628e9,steps:[1,2,3]},quarter:{common:false,size:7.884e9,steps:[1,2,3,4]},year:{common:true,size:3.154e10}};var UNITS=Object.keys(INTERVALS);function sorter(a,b){return a-b;}function arrayUnique(items){var hash={};var out=[];var i,ilen,item;for(i=0,ilen=items.length;i<ilen;++i){item=items[i];if(!hash[item]){hash[item]=true;out.push(item);}}return out;}/**
 * Returns an array of {time, pos} objects used to interpolate a specific `time` or position
 * (`pos`) on the scale, by searching entries before and after the requested value. `pos` is
 * a decimal between 0 and 1: 0 being the start of the scale (left or top) and 1 the other
 * extremity (left + width or top + height). Note that it would be more optimized to directly
 * store pre-computed pixels, but the scale dimensions are not guaranteed at the time we need
 * to create the lookup table. The table ALWAYS contains at least two items: min and max.
 *
 * @param {Number[]} timestamps - timestamps sorted from lowest to highest.
 * @param {String} distribution - If 'linear', timestamps will be spread linearly along the min
 * and max range, so basically, the table will contains only two items: {min, 0} and {max, 1}.
 * If 'series', timestamps will be positioned at the same distance from each other. In this
 * case, only timestamps that break the time linearity are registered, meaning that in the
 * best case, all timestamps are linear, the table contains only min and max.
 */function buildLookupTable(timestamps,min,max,distribution){if(distribution==='linear'||!timestamps.length){return[{time:min,pos:0},{time:max,pos:1}];}var table=[];var items=[min];var i,ilen,prev,curr,next;for(i=0,ilen=timestamps.length;i<ilen;++i){curr=timestamps[i];if(curr>min&&curr<max){items.push(curr);}}items.push(max);for(i=0,ilen=items.length;i<ilen;++i){next=items[i+1];prev=items[i-1];curr=items[i];// only add points that breaks the scale linearity
if(prev===undefined||next===undefined||Math.round((next+prev)/2)!==curr){table.push({time:curr,pos:i/(ilen-1)});}}return table;}// @see adapted from http://www.anujgakhar.com/2014/03/01/binary-search-in-javascript/
function lookup(table,key,value){var lo=0;var hi=table.length-1;var mid,i0,i1;while(lo>=0&&lo<=hi){mid=lo+hi>>1;i0=table[mid-1]||null;i1=table[mid];if(!i0){// given value is outside table (before first item)
return{lo:null,hi:i1};}else if(i1[key]<value){lo=mid+1;}else if(i0[key]>value){hi=mid-1;}else{return{lo:i0,hi:i1};}}// given value is outside table (after last item)
return{lo:i1,hi:null};}/**
 * Linearly interpolates the given source `value` using the table items `skey` values and
 * returns the associated `tkey` value. For example, interpolate(table, 'time', 42, 'pos')
 * returns the position for a timestamp equal to 42. If value is out of bounds, values at
 * index [0, 1] or [n - 1, n] are used for the interpolation.
 */function interpolate(table,skey,sval,tkey){var range=lookup(table,skey,sval);// Note: the lookup table ALWAYS contains at least 2 items (min and max)
var prev=!range.lo?table[0]:!range.hi?table[table.length-2]:range.lo;var next=!range.lo?table[1]:!range.hi?table[table.length-1]:range.hi;var span=next[skey]-prev[skey];var ratio=span?(sval-prev[skey])/span:0;var offset=(next[tkey]-prev[tkey])*ratio;return prev[tkey]+offset;}/**
 * Convert the given value to a moment object using the given time options.
 * @see http://momentjs.com/docs/#/parsing/
 */function momentify(value,options){var parser=options.parser;var format=options.parser||options.format;if(typeof parser==='function'){return parser(value);}if(typeof value==='string'&&typeof format==='string'){return moment(value,format);}if(!(value instanceof moment)){value=moment(value);}if(value.isValid()){return value;}// Labels are in an incompatible moment format and no `parser` has been provided.
// The user might still use the deprecated `format` option to convert his inputs.
if(typeof format==='function'){return format(value);}return value;}function parse(input,scale){if(helpers.isNullOrUndef(input)){return null;}var options=scale.options.time;var value=momentify(scale.getRightValue(input),options);if(!value.isValid()){return null;}if(options.round){value.startOf(options.round);}return value.valueOf();}/**
 * Returns the number of unit to skip to be able to display up to `capacity` number of ticks
 * in `unit` for the given `min` / `max` range and respecting the interval steps constraints.
 */function determineStepSize(min,max,unit,capacity){var range=max-min;var interval=INTERVALS[unit];var milliseconds=interval.size;var steps=interval.steps;var i,ilen,factor;if(!steps){return Math.ceil(range/(capacity*milliseconds));}for(i=0,ilen=steps.length;i<ilen;++i){factor=steps[i];if(Math.ceil(range/(milliseconds*factor))<=capacity){break;}}return factor;}/**
 * Figures out what unit results in an appropriate number of auto-generated ticks
 */function determineUnitForAutoTicks(minUnit,min,max,capacity){var ilen=UNITS.length;var i,interval,factor;for(i=UNITS.indexOf(minUnit);i<ilen-1;++i){interval=INTERVALS[UNITS[i]];factor=interval.steps?interval.steps[interval.steps.length-1]:MAX_INTEGER;if(interval.common&&Math.ceil((max-min)/(factor*interval.size))<=capacity){return UNITS[i];}}return UNITS[ilen-1];}/**
 * Figures out what unit to format a set of ticks with
 */function determineUnitForFormatting(ticks,minUnit,min,max){var duration=moment.duration(moment(max).diff(moment(min)));var ilen=UNITS.length;var i,unit;for(i=ilen-1;i>=UNITS.indexOf(minUnit);i--){unit=UNITS[i];if(INTERVALS[unit].common&&duration.as(unit)>=ticks.length){return unit;}}return UNITS[minUnit?UNITS.indexOf(minUnit):0];}function determineMajorUnit(unit){for(var i=UNITS.indexOf(unit)+1,ilen=UNITS.length;i<ilen;++i){if(INTERVALS[UNITS[i]].common){return UNITS[i];}}}/**
 * Generates a maximum of `capacity` timestamps between min and max, rounded to the
 * `minor` unit, aligned on the `major` unit and using the given scale time `options`.
 * Important: this method can return ticks outside the min and max range, it's the
 * responsibility of the calling code to clamp values if needed.
 */function generate(min,max,capacity,options){var timeOpts=options.time;var minor=timeOpts.unit||determineUnitForAutoTicks(timeOpts.minUnit,min,max,capacity);var major=determineMajorUnit(minor);var stepSize=helpers.valueOrDefault(timeOpts.stepSize,timeOpts.unitStepSize);var weekday=minor==='week'?timeOpts.isoWeekday:false;var majorTicksEnabled=options.ticks.major.enabled;var interval=INTERVALS[minor];var first=moment(min);var last=moment(max);var ticks=[];var time;if(!stepSize){stepSize=determineStepSize(min,max,minor,capacity);}// For 'week' unit, handle the first day of week option
if(weekday){first=first.isoWeekday(weekday);last=last.isoWeekday(weekday);}// Align first/last ticks on unit
first=first.startOf(weekday?'day':minor);last=last.startOf(weekday?'day':minor);// Make sure that the last tick include max
if(last<max){last.add(1,minor);}time=moment(first);if(majorTicksEnabled&&major&&!weekday&&!timeOpts.round){// Align the first tick on the previous `minor` unit aligned on the `major` unit:
// we first aligned time on the previous `major` unit then add the number of full
// stepSize there is between first and the previous major time.
time.startOf(major);time.add(~~((first-time)/(interval.size*stepSize))*stepSize,minor);}for(;time<last;time.add(stepSize,minor)){ticks.push(+time);}ticks.push(+time);return ticks;}/**
 * Returns the right and left offsets from edges in the form of {left, right}.
 * Offsets are added when the `offset` option is true.
 */function computeOffsets(table,ticks,min,max,options){var left=0;var right=0;var upper,lower;if(options.offset&&ticks.length){if(!options.time.min){upper=ticks.length>1?ticks[1]:max;lower=ticks[0];left=(interpolate(table,'time',upper,'pos')-interpolate(table,'time',lower,'pos'))/2;}if(!options.time.max){upper=ticks[ticks.length-1];lower=ticks.length>1?ticks[ticks.length-2]:min;right=(interpolate(table,'time',upper,'pos')-interpolate(table,'time',lower,'pos'))/2;}}return{left:left,right:right};}function ticksFromTimestamps(values,majorUnit){var ticks=[];var i,ilen,value,major;for(i=0,ilen=values.length;i<ilen;++i){value=values[i];major=majorUnit?value===+moment(value).startOf(majorUnit):false;ticks.push({value:value,major:major});}return ticks;}function determineLabelFormat(data,timeOpts){var i,momentDate,hasTime;var ilen=data.length;// find the label with the most parts (milliseconds, minutes, etc.)
// format all labels with the same level of detail as the most specific label
for(i=0;i<ilen;i++){momentDate=momentify(data[i],timeOpts);if(momentDate.millisecond()!==0){return'MMM D, YYYY h:mm:ss.SSS a';}if(momentDate.second()!==0||momentDate.minute()!==0||momentDate.hour()!==0){hasTime=true;}}if(hasTime){return'MMM D, YYYY h:mm:ss a';}return'MMM D, YYYY';}module.exports=function(Chart){var defaultConfig={position:'bottom',/**
		 * Data distribution along the scale:
		 * - 'linear': data are spread according to their time (distances can vary),
		 * - 'series': data are spread at the same distance from each other.
		 * @see https://github.com/chartjs/Chart.js/pull/4507
		 * @since 2.7.0
		 */distribution:'linear',/**
		 * Scale boundary strategy (bypassed by min/max time options)
		 * - `data`: make sure data are fully visible, ticks outside are removed
		 * - `ticks`: make sure ticks are fully visible, data outside are truncated
		 * @see https://github.com/chartjs/Chart.js/pull/4556
		 * @since 2.7.0
		 */bounds:'data',time:{parser:false,// false == a pattern string from http://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment
format:false,// DEPRECATED false == date objects, moment object, callback or a pattern string from http://momentjs.com/docs/#/parsing/string-format/
unit:false,// false == automatic or override with week, month, year, etc.
round:false,// none, or override with week, month, year, etc.
displayFormat:false,// DEPRECATED
isoWeekday:false,// override week start day - see http://momentjs.com/docs/#/get-set/iso-weekday/
minUnit:'millisecond',// defaults to unit's corresponding unitFormat below or override using pattern string from http://momentjs.com/docs/#/displaying/format/
displayFormats:{millisecond:'h:mm:ss.SSS a',// 11:20:01.123 AM,
second:'h:mm:ss a',// 11:20:01 AM
minute:'h:mm a',// 11:20 AM
hour:'hA',// 5PM
day:'MMM D',// Sep 4
week:'ll',// Week 46, or maybe "[W]WW - YYYY" ?
month:'MMM YYYY',// Sept 2015
quarter:'[Q]Q - YYYY',// Q3
year:'YYYY'// 2015
}},ticks:{autoSkip:false,/**
			 * Ticks generation input values:
			 * - 'auto': generates "optimal" ticks based on scale size and time options.
			 * - 'data': generates ticks from data (including labels from data {t|x|y} objects).
			 * - 'labels': generates ticks from user given `data.labels` values ONLY.
			 * @see https://github.com/chartjs/Chart.js/pull/4507
			 * @since 2.7.0
			 */source:'auto',major:{enabled:false}}};var TimeScale=Chart.Scale.extend({initialize:function initialize(){if(!moment){throw new Error('Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com');}this.mergeTicksOptions();Chart.Scale.prototype.initialize.call(this);},update:function update(){var me=this;var options=me.options;// DEPRECATIONS: output a message only one time per update
if(options.time&&options.time.format){console.warn('options.time.format is deprecated and replaced by options.time.parser.');}return Chart.Scale.prototype.update.apply(me,arguments);},/**
		 * Allows data to be referenced via 't' attribute
		 */getRightValue:function getRightValue(rawValue){if(rawValue&&rawValue.t!==undefined){rawValue=rawValue.t;}return Chart.Scale.prototype.getRightValue.call(this,rawValue);},determineDataLimits:function determineDataLimits(){var me=this;var chart=me.chart;var timeOpts=me.options.time;var unit=timeOpts.unit||'day';var min=MAX_INTEGER;var max=MIN_INTEGER;var timestamps=[];var datasets=[];var labels=[];var i,j,ilen,jlen,data,timestamp;// Convert labels to timestamps
for(i=0,ilen=chart.data.labels.length;i<ilen;++i){labels.push(parse(chart.data.labels[i],me));}// Convert data to timestamps
for(i=0,ilen=(chart.data.datasets||[]).length;i<ilen;++i){if(chart.isDatasetVisible(i)){data=chart.data.datasets[i].data;// Let's consider that all data have the same format.
if(helpers.isObject(data[0])){datasets[i]=[];for(j=0,jlen=data.length;j<jlen;++j){timestamp=parse(data[j],me);timestamps.push(timestamp);datasets[i][j]=timestamp;}}else{timestamps.push.apply(timestamps,labels);datasets[i]=labels.slice(0);}}else{datasets[i]=[];}}if(labels.length){// Sort labels **after** data have been converted
labels=arrayUnique(labels).sort(sorter);min=Math.min(min,labels[0]);max=Math.max(max,labels[labels.length-1]);}if(timestamps.length){timestamps=arrayUnique(timestamps).sort(sorter);min=Math.min(min,timestamps[0]);max=Math.max(max,timestamps[timestamps.length-1]);}min=parse(timeOpts.min,me)||min;max=parse(timeOpts.max,me)||max;// In case there is no valid min/max, set limits based on unit time option
min=min===MAX_INTEGER?+moment().startOf(unit):min;max=max===MIN_INTEGER?+moment().endOf(unit)+1:max;// Make sure that max is strictly higher than min (required by the lookup table)
me.min=Math.min(min,max);me.max=Math.max(min+1,max);// PRIVATE
me._horizontal=me.isHorizontal();me._table=[];me._timestamps={data:timestamps,datasets:datasets,labels:labels};},buildTicks:function buildTicks(){var me=this;var min=me.min;var max=me.max;var options=me.options;var timeOpts=options.time;var timestamps=[];var ticks=[];var i,ilen,timestamp;switch(options.ticks.source){case'data':timestamps=me._timestamps.data;break;case'labels':timestamps=me._timestamps.labels;break;case'auto':default:timestamps=generate(min,max,me.getLabelCapacity(min),options);}if(options.bounds==='ticks'&&timestamps.length){min=timestamps[0];max=timestamps[timestamps.length-1];}// Enforce limits with user min/max options
min=parse(timeOpts.min,me)||min;max=parse(timeOpts.max,me)||max;// Remove ticks outside the min/max range
for(i=0,ilen=timestamps.length;i<ilen;++i){timestamp=timestamps[i];if(timestamp>=min&&timestamp<=max){ticks.push(timestamp);}}me.min=min;me.max=max;// PRIVATE
me._unit=timeOpts.unit||determineUnitForFormatting(ticks,timeOpts.minUnit,me.min,me.max);me._majorUnit=determineMajorUnit(me._unit);me._table=buildLookupTable(me._timestamps.data,min,max,options.distribution);me._offsets=computeOffsets(me._table,ticks,min,max,options);me._labelFormat=determineLabelFormat(me._timestamps.data,timeOpts);return ticksFromTimestamps(ticks,me._majorUnit);},getLabelForIndex:function getLabelForIndex(index,datasetIndex){var me=this;var data=me.chart.data;var timeOpts=me.options.time;var label=data.labels&&index<data.labels.length?data.labels[index]:'';var value=data.datasets[datasetIndex].data[index];if(helpers.isObject(value)){label=me.getRightValue(value);}if(timeOpts.tooltipFormat){return momentify(label,timeOpts).format(timeOpts.tooltipFormat);}if(typeof label==='string'){return label;}return momentify(label,timeOpts).format(me._labelFormat);},/**
		 * Function to format an individual tick mark
		 * @private
		 */tickFormatFunction:function tickFormatFunction(tick,index,ticks,formatOverride){var me=this;var options=me.options;var time=tick.valueOf();var formats=options.time.displayFormats;var minorFormat=formats[me._unit];var majorUnit=me._majorUnit;var majorFormat=formats[majorUnit];var majorTime=tick.clone().startOf(majorUnit).valueOf();var majorTickOpts=options.ticks.major;var major=majorTickOpts.enabled&&majorUnit&&majorFormat&&time===majorTime;var label=tick.format(formatOverride?formatOverride:major?majorFormat:minorFormat);var tickOpts=major?majorTickOpts:options.ticks.minor;var formatter=helpers.valueOrDefault(tickOpts.callback,tickOpts.userCallback);return formatter?formatter(label,index,ticks):label;},convertTicksToLabels:function convertTicksToLabels(ticks){var labels=[];var i,ilen;for(i=0,ilen=ticks.length;i<ilen;++i){labels.push(this.tickFormatFunction(moment(ticks[i].value),i,ticks));}return labels;},/**
		 * @private
		 */getPixelForOffset:function getPixelForOffset(time){var me=this;var size=me._horizontal?me.width:me.height;var start=me._horizontal?me.left:me.top;var pos=interpolate(me._table,'time',time,'pos');return start+size*(me._offsets.left+pos)/(me._offsets.left+1+me._offsets.right);},getPixelForValue:function getPixelForValue(value,index,datasetIndex){var me=this;var time=null;if(index!==undefined&&datasetIndex!==undefined){time=me._timestamps.datasets[datasetIndex][index];}if(time===null){time=parse(value,me);}if(time!==null){return me.getPixelForOffset(time);}},getPixelForTick:function getPixelForTick(index){var ticks=this.getTicks();return index>=0&&index<ticks.length?this.getPixelForOffset(ticks[index].value):null;},getValueForPixel:function getValueForPixel(pixel){var me=this;var size=me._horizontal?me.width:me.height;var start=me._horizontal?me.left:me.top;var pos=(size?(pixel-start)/size:0)*(me._offsets.left+1+me._offsets.left)-me._offsets.right;var time=interpolate(me._table,'pos',pos,'time');return moment(time);},/**
		 * Crude approximation of what the label width might be
		 * @private
		 */getLabelWidth:function getLabelWidth(label){var me=this;var ticksOpts=me.options.ticks;var tickLabelWidth=me.ctx.measureText(label).width;var angle=helpers.toRadians(ticksOpts.maxRotation);var cosRotation=Math.cos(angle);var sinRotation=Math.sin(angle);var tickFontSize=helpers.valueOrDefault(ticksOpts.fontSize,defaults.global.defaultFontSize);return tickLabelWidth*cosRotation+tickFontSize*sinRotation;},/**
		 * @private
		 */getLabelCapacity:function getLabelCapacity(exampleTime){var me=this;var formatOverride=me.options.time.displayFormats.millisecond;// Pick the longest format for guestimation
var exampleLabel=me.tickFormatFunction(moment(exampleTime),0,[],formatOverride);var tickLabelWidth=me.getLabelWidth(exampleLabel);var innerWidth=me.isHorizontal()?me.width:me.height;var capacity=Math.floor(innerWidth/tickLabelWidth);return capacity>0?capacity:1;}});Chart.scaleService.registerScaleType('time',TimeScale,defaultConfig);};},{"1":1,"25":25,"45":45}]},{},[7])(7);});/**
 * --------------------------------------------------------------------------
 * CoreUI Plugins - Custom Tooltips for Chart.js (v1.2.0): custom-tooltips.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */function CustomTooltips(tooltipModel){var _this=this;// Add unique id if not exist
var _setCanvasId=function _setCanvasId(){var _idMaker=function _idMaker(){var _hex=16;var _multiplier=0x10000;return((1+Math.random())*_multiplier|0).toString(_hex);};var _canvasId="_canvas-"+(_idMaker()+_idMaker());_this._chart.canvas.id=_canvasId;return _canvasId;};var ClassName={ABOVE:'above',BELOW:'below',CHARTJS_TOOLTIP:'chartjs-tooltip',NO_TRANSFORM:'no-transform',TOOLTIP_BODY:'tooltip-body',TOOLTIP_BODY_ITEM:'tooltip-body-item',TOOLTIP_BODY_ITEM_COLOR:'tooltip-body-item-color',TOOLTIP_BODY_ITEM_LABEL:'tooltip-body-item-label',TOOLTIP_BODY_ITEM_VALUE:'tooltip-body-item-value',TOOLTIP_HEADER:'tooltip-header',TOOLTIP_HEADER_ITEM:'tooltip-header-item'};var Selector={DIV:'div',SPAN:'span',TOOLTIP:(this._chart.canvas.id||_setCanvasId())+"-tooltip"};var tooltip=document.getElementById(Selector.TOOLTIP);if(!tooltip){tooltip=document.createElement('div');tooltip.id=Selector.TOOLTIP;tooltip.className=ClassName.CHARTJS_TOOLTIP;this._chart.canvas.parentNode.appendChild(tooltip);}// Hide if no tooltip
if(tooltipModel.opacity===0){tooltip.style.opacity=0;return;}// Set caret Position
tooltip.classList.remove(ClassName.ABOVE,ClassName.BELOW,ClassName.NO_TRANSFORM);if(tooltipModel.yAlign){tooltip.classList.add(tooltipModel.yAlign);}else{tooltip.classList.add(ClassName.NO_TRANSFORM);}// Set Text
if(tooltipModel.body){var titleLines=tooltipModel.title||[];var tooltipHeader=document.createElement(Selector.DIV);tooltipHeader.className=ClassName.TOOLTIP_HEADER;titleLines.forEach(function(title){var tooltipHeaderTitle=document.createElement(Selector.DIV);tooltipHeaderTitle.className=ClassName.TOOLTIP_HEADER_ITEM;tooltipHeaderTitle.innerHTML=title;tooltipHeader.appendChild(tooltipHeaderTitle);});var tooltipBody=document.createElement(Selector.DIV);tooltipBody.className=ClassName.TOOLTIP_BODY;var tooltipBodyItems=tooltipModel.body.map(function(item){return item.lines;});tooltipBodyItems.forEach(function(item,i){var tooltipBodyItem=document.createElement(Selector.DIV);tooltipBodyItem.className=ClassName.TOOLTIP_BODY_ITEM;var colors=tooltipModel.labelColors[i];var tooltipBodyItemColor=document.createElement(Selector.SPAN);tooltipBodyItemColor.className=ClassName.TOOLTIP_BODY_ITEM_COLOR;tooltipBodyItemColor.style.backgroundColor=colors.backgroundColor;tooltipBodyItem.appendChild(tooltipBodyItemColor);if(item[0].split(':').length>1){var tooltipBodyItemLabel=document.createElement(Selector.SPAN);tooltipBodyItemLabel.className=ClassName.TOOLTIP_BODY_ITEM_LABEL;tooltipBodyItemLabel.innerHTML=item[0].split(': ')[0];tooltipBodyItem.appendChild(tooltipBodyItemLabel);var tooltipBodyItemValue=document.createElement(Selector.SPAN);tooltipBodyItemValue.className=ClassName.TOOLTIP_BODY_ITEM_VALUE;tooltipBodyItemValue.innerHTML=item[0].split(': ').pop();tooltipBodyItem.appendChild(tooltipBodyItemValue);}else{var _tooltipBodyItemValue=document.createElement(Selector.SPAN);_tooltipBodyItemValue.className=ClassName.TOOLTIP_BODY_ITEM_VALUE;_tooltipBodyItemValue.innerHTML=item[0];tooltipBodyItem.appendChild(_tooltipBodyItemValue);}tooltipBody.appendChild(tooltipBodyItem);});tooltip.innerHTML='';tooltip.appendChild(tooltipHeader);tooltip.appendChild(tooltipBody);}var positionY=this._chart.canvas.offsetTop;var positionX=this._chart.canvas.offsetLeft;// Display, position, and set styles for font
tooltip.style.opacity=1;tooltip.style.left=positionX+tooltipModel.caretX+"px";tooltip.style.top=positionY+tooltipModel.caretY+"px";}//# sourceMappingURL=custom-tooltips.js.map
/*!
* sweetalert2 v7.29.1
* Released under the MIT License.
*/(function(global,factory){(typeof exports==="undefined"?"undefined":_typeof2(exports))==='object'&&typeof module!=='undefined'?module.exports=factory():typeof define==='function'&&define.amd?define(factory):global.Sweetalert2=factory();})(this,function(){'use strict';function _typeof(obj){if(typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"){_typeof=function _typeof(obj){return typeof obj==="undefined"?"undefined":_typeof2(obj);};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==="undefined"?"undefined":_typeof2(obj);};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _construct(Parent,args,Class){if(isNativeReflectConstruct()){_construct=Reflect.construct;}else{_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)_setPrototypeOf(instance,Class.prototype);return instance;};}return _construct.apply(null,arguments);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _possibleConstructorReturn(self,call){if(call&&((typeof call==="undefined"?"undefined":_typeof2(call))==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _superPropBase(object,property){while(!Object.prototype.hasOwnProperty.call(object,property)){object=_getPrototypeOf(object);if(object===null)break;}return object;}function _get(target,property,receiver){if(typeof Reflect!=="undefined"&&Reflect.get){_get=Reflect.get;}else{_get=function _get(target,property,receiver){var base=_superPropBase(target,property);if(!base)return;var desc=Object.getOwnPropertyDescriptor(base,property);if(desc.get){return desc.get.call(receiver);}return desc.value;};}return _get(target,property,receiver||target);}var consolePrefix='SweetAlert2:';/**
 * Filter the unique values into a new array
 * @param arr
 */var uniqueArray=function uniqueArray(arr){var result=[];for(var i=0;i<arr.length;i++){if(result.indexOf(arr[i])===-1){result.push(arr[i]);}}return result;};/**
 * Convert NodeList to Array
 * @param nodeList
 */var toArray=function toArray(nodeList){return Array.prototype.slice.call(nodeList);};/**
 * Converts `inputOptions` into an array of `[value, label]`s
 * @param inputOptions
 */var formatInputOptions=function formatInputOptions(inputOptions){var result=[];if(typeof Map!=='undefined'&&inputOptions instanceof Map){inputOptions.forEach(function(value,key){result.push([key,value]);});}else{Object.keys(inputOptions).forEach(function(key){result.push([key,inputOptions[key]]);});}return result;};/**
 * Standardise console warnings
 * @param message
 */var warn=function warn(message){console.warn("".concat(consolePrefix," ").concat(message));};/**
 * Standardise console errors
 * @param message
 */var error=function error(message){console.error("".concat(consolePrefix," ").concat(message));};/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */var previousWarnOnceMessages=[];/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */var warnOnce=function warnOnce(message){if(!(previousWarnOnceMessages.indexOf(message)!==-1)){previousWarnOnceMessages.push(message);warn(message);}};/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */var callIfFunction=function callIfFunction(arg){return typeof arg==='function'?arg():arg;};var isThenable=function isThenable(arg){return arg&&_typeof(arg)==='object'&&typeof arg.then==='function';};var DismissReason=Object.freeze({cancel:'cancel',backdrop:'overlay',close:'close',esc:'esc',timer:'timer'});var argsToParams=function argsToParams(args){var params={};switch(_typeof(args[0])){case'object':_extends(params,args[0]);break;default:['title','html','type'].forEach(function(name,index){switch(_typeof(args[index])){case'string':params[name]=args[index];break;case'undefined':break;default:error("Unexpected type of ".concat(name,"! Expected \"string\", got ").concat(_typeof(args[index])));}});}return params;};/**
 * Adapt a legacy inputValidator for use with expectRejections=false
 */var adaptInputValidator=function adaptInputValidator(legacyValidator){return function adaptedInputValidator(inputValue,extraParams){return legacyValidator.call(this,inputValue,extraParams).then(function(){return undefined;},function(validationMessage){return validationMessage;});};};var swalPrefix='swal2-';var prefix=function prefix(items){var result={};for(var i in items){result[items[i]]=swalPrefix+items[i];}return result;};var swalClasses=prefix(['container','shown','height-auto','iosfix','popup','modal','no-backdrop','toast','toast-shown','toast-column','fade','show','hide','noanimation','close','title','header','content','actions','confirm','cancel','footer','icon','icon-text','image','input','file','range','select','radio','checkbox','label','textarea','inputerror','validation-message','progresssteps','activeprogressstep','progresscircle','progressline','loading','styled','top','top-start','top-end','top-left','top-right','center','center-start','center-end','center-left','center-right','bottom','bottom-start','bottom-end','bottom-left','bottom-right','grow-row','grow-column','grow-fullscreen','rtl']);var iconTypes=prefix(['success','warning','info','question','error']);var states={previousBodyPadding:null};var hasClass=function hasClass(elem,className){return elem.classList.contains(className);};var focusInput=function focusInput(input){input.focus();// place cursor at end of text in text input
if(input.type!=='file'){// http://stackoverflow.com/a/2345915
var val=input.value;input.value='';input.value=val;}};var addOrRemoveClass=function addOrRemoveClass(target,classList,add){if(!target||!classList){return;}if(typeof classList==='string'){classList=classList.split(/\s+/).filter(Boolean);}classList.forEach(function(className){if(target.forEach){target.forEach(function(elem){add?elem.classList.add(className):elem.classList.remove(className);});}else{add?target.classList.add(className):target.classList.remove(className);}});};var addClass=function addClass(target,classList){addOrRemoveClass(target,classList,true);};var removeClass=function removeClass(target,classList){addOrRemoveClass(target,classList,false);};var getChildByClass=function getChildByClass(elem,className){for(var i=0;i<elem.childNodes.length;i++){if(hasClass(elem.childNodes[i],className)){return elem.childNodes[i];}}};var show=function show(elem){elem.style.opacity='';elem.style.display=elem.id===swalClasses.content?'block':'flex';};var hide=function hide(elem){elem.style.opacity='';elem.style.display='none';};// borrowed from jquery $(elem).is(':visible') implementation
var isVisible=function isVisible(elem){return elem&&(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);};var getContainer=function getContainer(){return document.body.querySelector('.'+swalClasses.container);};var elementByClass=function elementByClass(className){var container=getContainer();return container?container.querySelector('.'+className):null;};var getPopup=function getPopup(){return elementByClass(swalClasses.popup);};var getIcons=function getIcons(){var popup=getPopup();return toArray(popup.querySelectorAll('.'+swalClasses.icon));};var getTitle=function getTitle(){return elementByClass(swalClasses.title);};var getContent=function getContent(){return elementByClass(swalClasses.content);};var getImage=function getImage(){return elementByClass(swalClasses.image);};var getProgressSteps=function getProgressSteps(){return elementByClass(swalClasses.progresssteps);};var getValidationMessage=function getValidationMessage(){return elementByClass(swalClasses['validation-message']);};var getConfirmButton=function getConfirmButton(){return elementByClass(swalClasses.confirm);};var getCancelButton=function getCancelButton(){return elementByClass(swalClasses.cancel);};/* @deprecated *//* istanbul ignore next */var getButtonsWrapper=function getButtonsWrapper(){warnOnce("swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead");return elementByClass(swalClasses.actions);};var getActions=function getActions(){return elementByClass(swalClasses.actions);};var getFooter=function getFooter(){return elementByClass(swalClasses.footer);};var getCloseButton=function getCloseButton(){return elementByClass(swalClasses.close);};var getFocusableElements=function getFocusableElements(){var focusableElementsWithTabindex=toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'))// sort according to tabindex
.sort(function(a,b){a=parseInt(a.getAttribute('tabindex'));b=parseInt(b.getAttribute('tabindex'));if(a>b){return 1;}else if(a<b){return-1;}return 0;});// https://github.com/jkup/focusable/blob/master/index.js
var otherFocusableElements=toArray(getPopup().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function(el){return el.getAttribute('tabindex')!=='-1';});return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function(el){return isVisible(el);});};var isModal=function isModal(){return!isToast()&&!document.body.classList.contains(swalClasses['no-backdrop']);};var isToast=function isToast(){return document.body.classList.contains(swalClasses['toast-shown']);};var isLoading=function isLoading(){return getPopup().hasAttribute('data-loading');};// Detect Node env
var isNodeEnv=function isNodeEnv(){return typeof window==='undefined'||typeof document==='undefined';};var sweetHTML="\n <div aria-labelledby=\"".concat(swalClasses.title,"\" aria-describedby=\"").concat(swalClasses.content,"\" class=\"").concat(swalClasses.popup,"\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header,"\">\n     <ul class=\"").concat(swalClasses.progresssteps,"\"></ul>\n     <div class=\"").concat(swalClasses.icon," ").concat(iconTypes.error,"\">\n       <span class=\"swal2-x-mark\"><span class=\"swal2-x-mark-line-left\"></span><span class=\"swal2-x-mark-line-right\"></span></span>\n     </div>\n     <div class=\"").concat(swalClasses.icon," ").concat(iconTypes.question,"\">\n       <span class=\"").concat(swalClasses['icon-text'],"\">?</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon," ").concat(iconTypes.warning,"\">\n       <span class=\"").concat(swalClasses['icon-text'],"\">!</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon," ").concat(iconTypes.info,"\">\n       <span class=\"").concat(swalClasses['icon-text'],"\">i</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon," ").concat(iconTypes.success,"\">\n       <div class=\"swal2-success-circular-line-left\"></div>\n       <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n       <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n       <div class=\"swal2-success-circular-line-right\"></div>\n     </div>\n     <img class=\"").concat(swalClasses.image,"\" />\n     <h2 class=\"").concat(swalClasses.title,"\" id=\"").concat(swalClasses.title,"\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close,"\">\xD7</button>\n   </div>\n   <div class=\"").concat(swalClasses.content,"\">\n     <div id=\"").concat(swalClasses.content,"\"></div>\n     <input class=\"").concat(swalClasses.input,"\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file,"\" />\n     <div class=\"").concat(swalClasses.range,"\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select,"\"></select>\n     <div class=\"").concat(swalClasses.radio,"\"></div>\n     <label for=\"").concat(swalClasses.checkbox,"\" class=\"").concat(swalClasses.checkbox,"\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label,"\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea,"\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'],"\" id=\"").concat(swalClasses['validation-message'],"\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions,"\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm,"\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel,"\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer,"\">\n   </div>\n </div>\n").replace(/(^|\n)\s*/g,'');/*
 * Add modal + backdrop to DOM
 */var init=function init(params){// Clean up the old popup if it exists
var c=getContainer();if(c){c.parentNode.removeChild(c);removeClass([document.documentElement,document.body],[swalClasses['no-backdrop'],swalClasses['toast-shown'],swalClasses['has-column']]);}/* istanbul ignore if */if(isNodeEnv()){error('SweetAlert2 requires document to initialize');return;}var container=document.createElement('div');container.className=swalClasses.container;container.innerHTML=sweetHTML;var targetElement=typeof params.target==='string'?document.querySelector(params.target):params.target;targetElement.appendChild(container);var popup=getPopup();var content=getContent();var input=getChildByClass(content,swalClasses.input);var file=getChildByClass(content,swalClasses.file);var range=content.querySelector(".".concat(swalClasses.range," input"));var rangeOutput=content.querySelector(".".concat(swalClasses.range," output"));var select=getChildByClass(content,swalClasses.select);var checkbox=content.querySelector(".".concat(swalClasses.checkbox," input"));var textarea=getChildByClass(content,swalClasses.textarea);// a11y
popup.setAttribute('role',params.toast?'alert':'dialog');popup.setAttribute('aria-live',params.toast?'polite':'assertive');if(!params.toast){popup.setAttribute('aria-modal','true');}// RTL
if(window.getComputedStyle(targetElement).direction==='rtl'){addClass(getContainer(),swalClasses.rtl);}var oldInputVal;// IE11 workaround, see #1109 for details
var resetValidationMessage=function resetValidationMessage(e){if(Swal.isVisible()&&oldInputVal!==e.target.value){Swal.resetValidationMessage();}oldInputVal=e.target.value;};input.oninput=resetValidationMessage;file.onchange=resetValidationMessage;select.onchange=resetValidationMessage;checkbox.onchange=resetValidationMessage;textarea.oninput=resetValidationMessage;range.oninput=function(e){resetValidationMessage(e);rangeOutput.value=range.value;};range.onchange=function(e){resetValidationMessage(e);range.nextSibling.value=range.value;};return popup;};var parseHtmlToContainer=function parseHtmlToContainer(param,target){if(!param){return hide(target);}if(_typeof(param)==='object'){target.innerHTML='';if(0 in param){for(var i=0;i in param;i++){target.appendChild(param[i].cloneNode(true));}}else{target.appendChild(param.cloneNode(true));}}else if(param){target.innerHTML=param;}show(target);};var animationEndEvent=function(){// Prevent run in Node env
/* istanbul ignore if */if(isNodeEnv()){return false;}var testEl=document.createElement('div');var transEndEventNames={'WebkitAnimation':'webkitAnimationEnd','OAnimation':'oAnimationEnd oanimationend','animation':'animationend'};for(var i in transEndEventNames){if(transEndEventNames.hasOwnProperty(i)&&typeof testEl.style[i]!=='undefined'){return transEndEventNames[i];}}return false;}();// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
var measureScrollbar=function measureScrollbar(){var supportsTouch='ontouchstart'in window||navigator.msMaxTouchPoints;if(supportsTouch){return 0;}var scrollDiv=document.createElement('div');scrollDiv.style.width='50px';scrollDiv.style.height='50px';scrollDiv.style.overflow='scroll';document.body.appendChild(scrollDiv);var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth;document.body.removeChild(scrollDiv);return scrollbarWidth;};var renderActions=function renderActions(params){var actions=getActions();var confirmButton=getConfirmButton();var cancelButton=getCancelButton();// Actions (buttons) wrapper
if(!params.showConfirmButton&&!params.showCancelButton){hide(actions);}else{show(actions);}// Cancel button
if(params.showCancelButton){cancelButton.style.display='inline-block';}else{hide(cancelButton);}// Confirm button
if(params.showConfirmButton){confirmButton.style.removeProperty('display');}else{hide(confirmButton);}// Edit text on confirm and cancel buttons
confirmButton.innerHTML=params.confirmButtonText;cancelButton.innerHTML=params.cancelButtonText;// ARIA labels for confirm and cancel buttons
confirmButton.setAttribute('aria-label',params.confirmButtonAriaLabel);cancelButton.setAttribute('aria-label',params.cancelButtonAriaLabel);// Add buttons custom classes
confirmButton.className=swalClasses.confirm;addClass(confirmButton,params.confirmButtonClass);cancelButton.className=swalClasses.cancel;addClass(cancelButton,params.cancelButtonClass);// Buttons styling
if(params.buttonsStyling){addClass([confirmButton,cancelButton],swalClasses.styled);// Buttons background colors
if(params.confirmButtonColor){confirmButton.style.backgroundColor=params.confirmButtonColor;}if(params.cancelButtonColor){cancelButton.style.backgroundColor=params.cancelButtonColor;}// Loading state
var confirmButtonBackgroundColor=window.getComputedStyle(confirmButton).getPropertyValue('background-color');confirmButton.style.borderLeftColor=confirmButtonBackgroundColor;confirmButton.style.borderRightColor=confirmButtonBackgroundColor;}else{removeClass([confirmButton,cancelButton],swalClasses.styled);confirmButton.style.backgroundColor=confirmButton.style.borderLeftColor=confirmButton.style.borderRightColor='';cancelButton.style.backgroundColor=cancelButton.style.borderLeftColor=cancelButton.style.borderRightColor='';}};var renderContent=function renderContent(params){var content=getContent().querySelector('#'+swalClasses.content);// Content as HTML
if(params.html){parseHtmlToContainer(params.html,content);// Content as plain text
}else if(params.text){content.textContent=params.text;show(content);}else{hide(content);}};var renderIcon=function renderIcon(params){var icons=getIcons();for(var i=0;i<icons.length;i++){hide(icons[i]);}if(params.type){if(Object.keys(iconTypes).indexOf(params.type)!==-1){var icon=Swal.getPopup().querySelector(".".concat(swalClasses.icon,".").concat(iconTypes[params.type]));show(icon);// Animate icon
if(params.animation){addClass(icon,"swal2-animate-".concat(params.type,"-icon"));}}else{error("Unknown type! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.type,"\""));}}};var renderImage=function renderImage(params){var image=getImage();if(params.imageUrl){image.setAttribute('src',params.imageUrl);image.setAttribute('alt',params.imageAlt);show(image);if(params.imageWidth){image.setAttribute('width',params.imageWidth);}else{image.removeAttribute('width');}if(params.imageHeight){image.setAttribute('height',params.imageHeight);}else{image.removeAttribute('height');}image.className=swalClasses.image;if(params.imageClass){addClass(image,params.imageClass);}}else{hide(image);}};var renderProgressSteps=function renderProgressSteps(params){var progressStepsContainer=getProgressSteps();var currentProgressStep=parseInt(params.currentProgressStep===null?Swal.getQueueStep():params.currentProgressStep,10);if(params.progressSteps&&params.progressSteps.length){show(progressStepsContainer);progressStepsContainer.innerHTML='';if(currentProgressStep>=params.progressSteps.length){warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length '+'(currentProgressStep like JS arrays starts from 0)');}params.progressSteps.forEach(function(step,index){var circle=document.createElement('li');addClass(circle,swalClasses.progresscircle);circle.innerHTML=step;if(index===currentProgressStep){addClass(circle,swalClasses.activeprogressstep);}progressStepsContainer.appendChild(circle);if(index!==params.progressSteps.length-1){var line=document.createElement('li');addClass(line,swalClasses.progressline);if(params.progressStepsDistance){line.style.width=params.progressStepsDistance;}progressStepsContainer.appendChild(line);}});}else{hide(progressStepsContainer);}};var renderTitle=function renderTitle(params){var title=getTitle();if(params.titleText){title.innerText=params.titleText;}else if(params.title){if(typeof params.title==='string'){params.title=params.title.split('\n').join('<br />');}parseHtmlToContainer(params.title,title);}};var fixScrollbar=function fixScrollbar(){// for queues, do not do this more than once
if(states.previousBodyPadding!==null){return;}// if the body has overflow
if(document.body.scrollHeight>window.innerHeight){// add padding so the content doesn't shift after removal of scrollbar
states.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));document.body.style.paddingRight=states.previousBodyPadding+measureScrollbar()+'px';}};var undoScrollbar=function undoScrollbar(){if(states.previousBodyPadding!==null){document.body.style.paddingRight=states.previousBodyPadding;states.previousBodyPadding=null;}};/* istanbul ignore next */var iOSfix=function iOSfix(){var iOS=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;if(iOS&&!hasClass(document.body,swalClasses.iosfix)){var offset=document.body.scrollTop;document.body.style.top=offset*-1+'px';addClass(document.body,swalClasses.iosfix);}};/* istanbul ignore next */var undoIOSfix=function undoIOSfix(){if(hasClass(document.body,swalClasses.iosfix)){var offset=parseInt(document.body.style.top,10);removeClass(document.body,swalClasses.iosfix);document.body.style.top='';document.body.scrollTop=offset*-1;}};var isIE11=function isIE11(){return!!window.MSInputMethodContext&&!!document.documentMode;};// Fix IE11 centering sweetalert2/issues/933
/* istanbul ignore next */var fixVerticalPositionIE=function fixVerticalPositionIE(){var container=getContainer();var popup=getPopup();container.style.removeProperty('align-items');if(popup.offsetTop<0){container.style.alignItems='flex-start';}};/* istanbul ignore next */var IEfix=function IEfix(){if(typeof window!=='undefined'&&isIE11()){fixVerticalPositionIE();window.addEventListener('resize',fixVerticalPositionIE);}};/* istanbul ignore next */var undoIEfix=function undoIEfix(){if(typeof window!=='undefined'&&isIE11()){window.removeEventListener('resize',fixVerticalPositionIE);}};// Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
// elements not within the active modal dialog will not be surfaced if a user opens a screen
// reader’s list of elements (headings, form controls, landmarks, etc.) in the document.
var setAriaHidden=function setAriaHidden(){var bodyChildren=toArray(document.body.children);bodyChildren.forEach(function(el){if(el===getContainer()||el.contains(getContainer())){return;}if(el.hasAttribute('aria-hidden')){el.setAttribute('data-previous-aria-hidden',el.getAttribute('aria-hidden'));}el.setAttribute('aria-hidden','true');});};var unsetAriaHidden=function unsetAriaHidden(){var bodyChildren=toArray(document.body.children);bodyChildren.forEach(function(el){if(el.hasAttribute('data-previous-aria-hidden')){el.setAttribute('aria-hidden',el.getAttribute('data-previous-aria-hidden'));el.removeAttribute('data-previous-aria-hidden');}else{el.removeAttribute('aria-hidden');}});};var RESTORE_FOCUS_TIMEOUT=100;var globalState={};var restoreActiveElement=function restoreActiveElement(){return new Promise(function(resolve){var x=window.scrollX;var y=window.scrollY;globalState.restoreFocusTimeout=setTimeout(function(){if(globalState.previousActiveElement&&globalState.previousActiveElement.focus){globalState.previousActiveElement.focus();globalState.previousActiveElement=null;}else if(document.body){document.body.focus();}resolve();},RESTORE_FOCUS_TIMEOUT);// issues/900
if(typeof x!=='undefined'&&typeof y!=='undefined'){// IE doesn't have scrollX/scrollY support
window.scrollTo(x,y);}});};/*
 * Global function to close sweetAlert
 */var close=function close(onClose,onAfterClose){var container=getContainer();var popup=getPopup();if(!popup){return;}if(onClose!==null&&typeof onClose==='function'){onClose(popup);}removeClass(popup,swalClasses.show);addClass(popup,swalClasses.hide);var removePopupAndResetState=function removePopupAndResetState(){if(!isToast()){restoreActiveElement().then(function(){return triggerOnAfterClose(onAfterClose);});globalState.keydownTarget.removeEventListener('keydown',globalState.keydownHandler,{capture:globalState.keydownListenerCapture});globalState.keydownHandlerAdded=false;}else{triggerOnAfterClose(onAfterClose);}if(container.parentNode){container.parentNode.removeChild(container);}removeClass([document.documentElement,document.body],[swalClasses.shown,swalClasses['height-auto'],swalClasses['no-backdrop'],swalClasses['toast-shown'],swalClasses['toast-column']]);if(isModal()){undoScrollbar();undoIOSfix();undoIEfix();unsetAriaHidden();}};// If animation is supported, animate
if(animationEndEvent&&!hasClass(popup,swalClasses.noanimation)){popup.addEventListener(animationEndEvent,function swalCloseEventFinished(){popup.removeEventListener(animationEndEvent,swalCloseEventFinished);if(hasClass(popup,swalClasses.hide)){removePopupAndResetState();}});}else{// Otherwise, remove immediately
removePopupAndResetState();}};var triggerOnAfterClose=function triggerOnAfterClose(onAfterClose){if(onAfterClose!==null&&typeof onAfterClose==='function'){setTimeout(function(){onAfterClose();});}};/*
 * Global function to determine if swal2 popup is shown
 */var isVisible$1=function isVisible(){return!!getPopup();};/*
 * Global function to click 'Confirm' button
 */var clickConfirm=function clickConfirm(){return getConfirmButton().click();};/*
 * Global function to click 'Cancel' button
 */var clickCancel=function clickCancel(){return getCancelButton().click();};function fire(){var Swal=this;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _construct(Swal,args);}/**
 * Extends a Swal class making it able to be instantiated without the `new` keyword (and thus without `Swal.fire`)
 * @param ParentSwal
 * @returns {NoNewKeywordSwal}
 */function withNoNewKeyword(ParentSwal){var NoNewKeywordSwal=function NoNewKeywordSwal(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}if(!(this instanceof NoNewKeywordSwal)){return _construct(NoNewKeywordSwal,args);}Object.getPrototypeOf(NoNewKeywordSwal).apply(this,args);};NoNewKeywordSwal.prototype=_extends(Object.create(ParentSwal.prototype),{constructor:NoNewKeywordSwal});if(typeof Object.setPrototypeOf==='function'){Object.setPrototypeOf(NoNewKeywordSwal,ParentSwal);}else{// Android 4.4
/* istanbul ignore next */// eslint-disable-next-line
NoNewKeywordSwal.__proto__=ParentSwal;}return NoNewKeywordSwal;}var defaultParams={title:'',titleText:'',text:'',html:'',footer:'',type:null,toast:false,customClass:'',target:'body',backdrop:true,animation:true,heightAuto:true,allowOutsideClick:true,allowEscapeKey:true,allowEnterKey:true,stopKeydownPropagation:true,keydownListenerCapture:false,showConfirmButton:true,showCancelButton:false,preConfirm:null,confirmButtonText:'OK',confirmButtonAriaLabel:'',confirmButtonColor:null,confirmButtonClass:null,cancelButtonText:'Cancel',cancelButtonAriaLabel:'',cancelButtonColor:null,cancelButtonClass:null,buttonsStyling:true,reverseButtons:false,focusConfirm:true,focusCancel:false,showCloseButton:false,closeButtonAriaLabel:'Close this dialog',showLoaderOnConfirm:false,imageUrl:null,imageWidth:null,imageHeight:null,imageAlt:'',imageClass:null,timer:null,width:null,padding:null,background:null,input:null,inputPlaceholder:'',inputValue:'',inputOptions:{},inputAutoTrim:true,inputClass:null,inputAttributes:{},inputValidator:null,validationMessage:null,grow:false,position:'center',progressSteps:[],currentProgressStep:null,progressStepsDistance:null,onBeforeOpen:null,onAfterClose:null,onOpen:null,onClose:null,useRejections:false,expectRejections:false};var deprecatedParams=['useRejections','expectRejections','extraParams'];var toastIncompatibleParams=['allowOutsideClick','allowEnterKey','backdrop','focusConfirm','focusCancel','heightAuto','keydownListenerCapture'];/**
 * Is valid parameter
 * @param {String} paramName
 */var isValidParameter=function isValidParameter(paramName){return defaultParams.hasOwnProperty(paramName)||paramName==='extraParams';};/**
 * Is deprecated parameter
 * @param {String} paramName
 */var isDeprecatedParameter=function isDeprecatedParameter(paramName){return deprecatedParams.indexOf(paramName)!==-1;};/**
 * Show relevant warnings for given params
 *
 * @param params
 */var showWarningsForParams=function showWarningsForParams(params){for(var param in params){if(!isValidParameter(param)){warn("Unknown parameter \"".concat(param,"\""));}if(params.toast&&toastIncompatibleParams.indexOf(param)!==-1){warn("The parameter \"".concat(param,"\" is incompatible with toasts"));}if(isDeprecatedParameter(param)){warnOnce("The parameter \"".concat(param,"\" is deprecated and will be removed in the next major release."));}}};var deprecationWarning="\"setDefaults\" & \"resetDefaults\" methods are deprecated in favor of \"mixin\" method and will be removed in the next major release. For new projects, use \"mixin\". For past projects already using \"setDefaults\", support will be provided through an additional package.";var defaults={};function withGlobalDefaults(ParentSwal){var SwalWithGlobalDefaults=/*#__PURE__*/function(_ParentSwal){_inherits(SwalWithGlobalDefaults,_ParentSwal);function SwalWithGlobalDefaults(){_classCallCheck(this,SwalWithGlobalDefaults);return _possibleConstructorReturn(this,_getPrototypeOf(SwalWithGlobalDefaults).apply(this,arguments));}_createClass(SwalWithGlobalDefaults,[{key:"_main",value:function _main(params){return _get(_getPrototypeOf(SwalWithGlobalDefaults.prototype),"_main",this).call(this,_extends({},defaults,params));}}],[{key:"setDefaults",value:function setDefaults(params){warnOnce(deprecationWarning);if(!params||_typeof(params)!=='object'){throw new TypeError('SweetAlert2: The argument for setDefaults() is required and has to be a object');}showWarningsForParams(params);// assign valid params from `params` to `defaults`
Object.keys(params).forEach(function(param){if(ParentSwal.isValidParameter(param)){defaults[param]=params[param];}});}},{key:"resetDefaults",value:function resetDefaults(){warnOnce(deprecationWarning);defaults={};}}]);return SwalWithGlobalDefaults;}(ParentSwal);// Set default params if `window._swalDefaults` is an object
if(typeof window!=='undefined'&&_typeof(window._swalDefaults)==='object'){SwalWithGlobalDefaults.setDefaults(window._swalDefaults);}return SwalWithGlobalDefaults;}/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */function mixin(mixinParams){return withNoNewKeyword(/*#__PURE__*/function(_this){_inherits(MixinSwal,_this);function MixinSwal(){_classCallCheck(this,MixinSwal);return _possibleConstructorReturn(this,_getPrototypeOf(MixinSwal).apply(this,arguments));}_createClass(MixinSwal,[{key:"_main",value:function _main(params){return _get(_getPrototypeOf(MixinSwal.prototype),"_main",this).call(this,_extends({},mixinParams,params));}}]);return MixinSwal;}(this));}// private global state for the queue feature
var currentSteps=[];/*
 * Global function for chaining sweetAlert popups
 */var queue=function queue(steps){var swal=this;currentSteps=steps;var resetQueue=function resetQueue(){currentSteps=[];document.body.removeAttribute('data-swal2-queue-step');};var queueResult=[];return new Promise(function(resolve){(function step(i,callback){if(i<currentSteps.length){document.body.setAttribute('data-swal2-queue-step',i);swal(currentSteps[i]).then(function(result){if(typeof result.value!=='undefined'){queueResult.push(result.value);step(i+1,callback);}else{resetQueue();resolve({dismiss:result.dismiss});}});}else{resetQueue();resolve({value:queueResult});}})(0);});};/*
 * Global function for getting the index of current popup in queue
 */var getQueueStep=function getQueueStep(){return document.body.getAttribute('data-swal2-queue-step');};/*
 * Global function for inserting a popup to the queue
 */var insertQueueStep=function insertQueueStep(step,index){if(index&&index<currentSteps.length){return currentSteps.splice(index,0,step);}return currentSteps.push(step);};/*
 * Global function for deleting a popup from the queue
 */var deleteQueueStep=function deleteQueueStep(index){if(typeof currentSteps[index]!=='undefined'){currentSteps.splice(index,1);}};/**
 * Show spinner instead of Confirm button and disable Cancel button
 */var showLoading=function showLoading(){var popup=getPopup();if(!popup){Swal('');}popup=getPopup();var actions=getActions();var confirmButton=getConfirmButton();var cancelButton=getCancelButton();show(actions);show(confirmButton);addClass([popup,actions],swalClasses.loading);confirmButton.disabled=true;cancelButton.disabled=true;popup.setAttribute('data-loading',true);popup.setAttribute('aria-busy',true);popup.focus();};/**
 * If `timer` parameter is set, returns number os milliseconds of timer remained.
 * Otherwise, returns null.
 */var getTimerLeft=function getTimerLeft(){return globalState.timeout&&globalState.timeout.getTimerLeft();};var staticMethods=Object.freeze({isValidParameter:isValidParameter,isDeprecatedParameter:isDeprecatedParameter,argsToParams:argsToParams,adaptInputValidator:adaptInputValidator,close:close,closePopup:close,closeModal:close,closeToast:close,isVisible:isVisible$1,clickConfirm:clickConfirm,clickCancel:clickCancel,getContainer:getContainer,getPopup:getPopup,getTitle:getTitle,getContent:getContent,getImage:getImage,getIcons:getIcons,getCloseButton:getCloseButton,getButtonsWrapper:getButtonsWrapper,getActions:getActions,getConfirmButton:getConfirmButton,getCancelButton:getCancelButton,getFooter:getFooter,getFocusableElements:getFocusableElements,getValidationMessage:getValidationMessage,isLoading:isLoading,fire:fire,mixin:mixin,queue:queue,getQueueStep:getQueueStep,insertQueueStep:insertQueueStep,deleteQueueStep:deleteQueueStep,showLoading:showLoading,enableLoading:showLoading,getTimerLeft:getTimerLeft});// https://github.com/Riim/symbol-polyfill/blob/master/index.js
/* istanbul ignore next */var _Symbol=typeof Symbol==='function'?Symbol:function(){var idCounter=0;function _Symbol(key){return'__'+key+'_'+Math.floor(Math.random()*1e9)+'_'+ ++idCounter+'__';}_Symbol.iterator=_Symbol('Symbol.iterator');return _Symbol;}();// WeakMap polyfill, needed for Android 4.4
// Related issue: https://github.com/sweetalert2/sweetalert2/issues/1071
// http://webreflection.blogspot.fi/2015/04/a-weakmap-polyfill-in-20-lines-of-code.html
/* istanbul ignore next */var WeakMap$1=typeof WeakMap==='function'?WeakMap:function(s,dP,hOP){function WeakMap(){dP(this,s,{value:_Symbol('WeakMap')});}WeakMap.prototype={'delete':function del(o){delete o[this[s]];},get:function get(o){return o[this[s]];},has:function has(o){return hOP.call(o,this[s]);},set:function set(o,v){dP(o,this[s],{configurable:true,value:v});}};return WeakMap;}(_Symbol('WeakMap'),Object.defineProperty,{}.hasOwnProperty);/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */var privateProps={promise:new WeakMap$1(),innerParams:new WeakMap$1(),domCache:new WeakMap$1()};/**
 * Enables buttons and hide loader.
 */function hideLoading(){var innerParams=privateProps.innerParams.get(this);var domCache=privateProps.domCache.get(this);if(!innerParams.showConfirmButton){hide(domCache.confirmButton);if(!innerParams.showCancelButton){hide(domCache.actions);}}removeClass([domCache.popup,domCache.actions],swalClasses.loading);domCache.popup.removeAttribute('aria-busy');domCache.popup.removeAttribute('data-loading');domCache.confirmButton.disabled=false;domCache.cancelButton.disabled=false;}function getInput(inputType){var innerParams=privateProps.innerParams.get(this);var domCache=privateProps.domCache.get(this);inputType=inputType||innerParams.input;if(!inputType){return null;}switch(inputType){case'select':case'textarea':case'file':return getChildByClass(domCache.content,swalClasses[inputType]);case'checkbox':return domCache.popup.querySelector(".".concat(swalClasses.checkbox," input"));case'radio':return domCache.popup.querySelector(".".concat(swalClasses.radio," input:checked"))||domCache.popup.querySelector(".".concat(swalClasses.radio," input:first-child"));case'range':return domCache.popup.querySelector(".".concat(swalClasses.range," input"));default:return getChildByClass(domCache.content,swalClasses.input);}}function enableButtons(){var domCache=privateProps.domCache.get(this);domCache.confirmButton.disabled=false;domCache.cancelButton.disabled=false;}function disableButtons(){var domCache=privateProps.domCache.get(this);domCache.confirmButton.disabled=true;domCache.cancelButton.disabled=true;}function enableConfirmButton(){var domCache=privateProps.domCache.get(this);domCache.confirmButton.disabled=false;}function disableConfirmButton(){var domCache=privateProps.domCache.get(this);domCache.confirmButton.disabled=true;}function enableInput(){var input=this.getInput();if(!input){return false;}if(input.type==='radio'){var radiosContainer=input.parentNode.parentNode;var radios=radiosContainer.querySelectorAll('input');for(var i=0;i<radios.length;i++){radios[i].disabled=false;}}else{input.disabled=false;}}function disableInput(){var input=this.getInput();if(!input){return false;}if(input&&input.type==='radio'){var radiosContainer=input.parentNode.parentNode;var radios=radiosContainer.querySelectorAll('input');for(var i=0;i<radios.length;i++){radios[i].disabled=true;}}else{input.disabled=true;}}function showValidationMessage(error$$1){var domCache=privateProps.domCache.get(this);domCache.validationMessage.innerHTML=error$$1;var popupComputedStyle=window.getComputedStyle(domCache.popup);domCache.validationMessage.style.marginLeft="-".concat(popupComputedStyle.getPropertyValue('padding-left'));domCache.validationMessage.style.marginRight="-".concat(popupComputedStyle.getPropertyValue('padding-right'));show(domCache.validationMessage);var input=this.getInput();if(input){input.setAttribute('aria-invalid',true);input.setAttribute('aria-describedBy',swalClasses['validation-message']);focusInput(input);addClass(input,swalClasses.inputerror);}}// Hide block with validation message
function resetValidationMessage(){var domCache=privateProps.domCache.get(this);if(domCache.validationMessage){hide(domCache.validationMessage);}var input=this.getInput();if(input){input.removeAttribute('aria-invalid');input.removeAttribute('aria-describedBy');removeClass(input,swalClasses.inputerror);}}// @deprecated
/* istanbul ignore next */function resetValidationError(){warnOnce("Swal.resetValidationError() is deprecated and will be removed in the next major release, use Swal.resetValidationMessage() instead");resetValidationMessage.bind(this)();}// @deprecated
/* istanbul ignore next */function showValidationError(error$$1){warnOnce("Swal.showValidationError() is deprecated and will be removed in the next major release, use Swal.showValidationMessage() instead");showValidationMessage.bind(this)(error$$1);}function getProgressSteps$1(){var innerParams=privateProps.innerParams.get(this);return innerParams.progressSteps;}function setProgressSteps(progressSteps){var innerParams=privateProps.innerParams.get(this);var updatedParams=_extends({},innerParams,{progressSteps:progressSteps});privateProps.innerParams.set(this,updatedParams);renderProgressSteps(updatedParams);}function showProgressSteps(){var domCache=privateProps.domCache.get(this);show(domCache.progressSteps);}function hideProgressSteps(){var domCache=privateProps.domCache.get(this);hide(domCache.progressSteps);}var Timer=function Timer(callback,delay){_classCallCheck(this,Timer);var id,started,running;var remaining=delay;this.start=function(){running=true;started=new Date();id=setTimeout(callback,remaining);};this.stop=function(){running=false;clearTimeout(id);remaining-=new Date()-started;};this.getTimerLeft=function(){if(running){this.stop();this.start();}return remaining;};this.start();};var defaultInputValidators={email:function email(string,extraParams){return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string)?Promise.resolve():Promise.reject(extraParams&&extraParams.validationMessage?extraParams.validationMessage:'Invalid email address');},url:function url(string,extraParams){// taken from https://stackoverflow.com/a/3809435
return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(string)?Promise.resolve():Promise.reject(extraParams&&extraParams.validationMessage?extraParams.validationMessage:'Invalid URL');}};/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */function setParameters(params){// Use default `inputValidator` for supported input types if not provided
if(!params.inputValidator){Object.keys(defaultInputValidators).forEach(function(key){if(params.input===key){params.inputValidator=params.expectRejections?defaultInputValidators[key]:Swal.adaptInputValidator(defaultInputValidators[key]);}});}// params.extraParams is @deprecated
if(params.validationMessage){if(_typeof(params.extraParams)!=='object'){params.extraParams={};}params.extraParams.validationMessage=params.validationMessage;}// Determine if the custom target element is valid
if(!params.target||typeof params.target==='string'&&!document.querySelector(params.target)||typeof params.target!=='string'&&!params.target.appendChild){warn('Target parameter is not valid, defaulting to "body"');params.target='body';}// Animation
if(typeof params.animation==='function'){params.animation=params.animation.call();}var popup;var oldPopup=getPopup();var targetElement=typeof params.target==='string'?document.querySelector(params.target):params.target;// If the model target has changed, refresh the popup
if(oldPopup&&targetElement&&oldPopup.parentNode!==targetElement.parentNode){popup=init(params);}else{popup=oldPopup||init(params);}// Set popup width
if(params.width){popup.style.width=typeof params.width==='number'?params.width+'px':params.width;}// Set popup padding
if(params.padding){popup.style.padding=typeof params.padding==='number'?params.padding+'px':params.padding;}// Set popup background
if(params.background){popup.style.background=params.background;}var popupBackgroundColor=window.getComputedStyle(popup).getPropertyValue('background-color');var successIconParts=popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');for(var i=0;i<successIconParts.length;i++){successIconParts[i].style.backgroundColor=popupBackgroundColor;}var container=getContainer();var closeButton=getCloseButton();var footer=getFooter();// Title
renderTitle(params);// Content
renderContent(params);// Backdrop
if(typeof params.backdrop==='string'){getContainer().style.background=params.backdrop;}else if(!params.backdrop){addClass([document.documentElement,document.body],swalClasses['no-backdrop']);}if(!params.backdrop&&params.allowOutsideClick){warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');}// Position
if(params.position in swalClasses){addClass(container,swalClasses[params.position]);}else{warn('The "position" parameter is not valid, defaulting to "center"');addClass(container,swalClasses.center);}// Grow
if(params.grow&&typeof params.grow==='string'){var growClass='grow-'+params.grow;if(growClass in swalClasses){addClass(container,swalClasses[growClass]);}}// Close button
if(params.showCloseButton){closeButton.setAttribute('aria-label',params.closeButtonAriaLabel);show(closeButton);}else{hide(closeButton);}// Default Class
popup.className=swalClasses.popup;if(params.toast){addClass([document.documentElement,document.body],swalClasses['toast-shown']);addClass(popup,swalClasses.toast);}else{addClass(popup,swalClasses.modal);}// Custom Class
if(params.customClass){addClass(popup,params.customClass);}// Progress steps
renderProgressSteps(params);// Icon
renderIcon(params);// Image
renderImage(params);// Actions (buttons)
renderActions(params);// Footer
parseHtmlToContainer(params.footer,footer);// CSS animation
if(params.animation===true){removeClass(popup,swalClasses.noanimation);}else{addClass(popup,swalClasses.noanimation);}// showLoaderOnConfirm && preConfirm
if(params.showLoaderOnConfirm&&!params.preConfirm){warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n'+'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n'+'https://sweetalert2.github.io/#ajax-request');}}/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param {Array} params
 */var openPopup=function openPopup(params){var container=getContainer();var popup=getPopup();if(params.onBeforeOpen!==null&&typeof params.onBeforeOpen==='function'){params.onBeforeOpen(popup);}if(params.animation){addClass(popup,swalClasses.show);addClass(container,swalClasses.fade);removeClass(popup,swalClasses.hide);}else{removeClass(popup,swalClasses.fade);}show(popup);// scrolling is 'hidden' until animation is done, after that 'auto'
container.style.overflowY='hidden';if(animationEndEvent&&!hasClass(popup,swalClasses.noanimation)){popup.addEventListener(animationEndEvent,function swalCloseEventFinished(){popup.removeEventListener(animationEndEvent,swalCloseEventFinished);container.style.overflowY='auto';});}else{container.style.overflowY='auto';}addClass([document.documentElement,document.body,container],swalClasses.shown);if(params.heightAuto&&params.backdrop&&!params.toast){addClass([document.documentElement,document.body],swalClasses['height-auto']);}if(isModal()){fixScrollbar();iOSfix();IEfix();setAriaHidden();// sweetalert2/issues/1247
setTimeout(function(){container.scrollTop=0;});}if(!isToast()&&!globalState.previousActiveElement){globalState.previousActiveElement=document.activeElement;}if(params.onOpen!==null&&typeof params.onOpen==='function'){setTimeout(function(){params.onOpen(popup);});}};function _main(userParams){var _this=this;showWarningsForParams(userParams);var innerParams=_extends({},defaultParams,userParams);setParameters(innerParams);Object.freeze(innerParams);privateProps.innerParams.set(this,innerParams);// clear the previous timer
if(globalState.timeout){globalState.timeout.stop();delete globalState.timeout;}// clear the restore focus timeout
clearTimeout(globalState.restoreFocusTimeout);var domCache={popup:getPopup(),container:getContainer(),content:getContent(),actions:getActions(),confirmButton:getConfirmButton(),cancelButton:getCancelButton(),closeButton:getCloseButton(),validationMessage:getValidationMessage(),progressSteps:getProgressSteps()};privateProps.domCache.set(this,domCache);var constructor=this.constructor;return new Promise(function(resolve,reject){// functions to handle all resolving/rejecting/settling
var succeedWith=function succeedWith(value){constructor.closePopup(innerParams.onClose,innerParams.onAfterClose);// TODO: make closePopup an *instance* method
if(innerParams.useRejections){resolve(value);}else{resolve({value:value});}};var dismissWith=function dismissWith(dismiss){constructor.closePopup(innerParams.onClose,innerParams.onAfterClose);if(innerParams.useRejections){reject(dismiss);}else{resolve({dismiss:dismiss});}};var errorWith=function errorWith(error$$1){constructor.closePopup(innerParams.onClose,innerParams.onAfterClose);reject(error$$1);};// Close on timer
if(innerParams.timer){globalState.timeout=new Timer(function(){dismissWith('timer');delete globalState.timeout;},innerParams.timer);}// Get the value of the popup input
var getInputValue=function getInputValue(){var input=_this.getInput();if(!input){return null;}switch(innerParams.input){case'checkbox':return input.checked?1:0;case'radio':return input.checked?input.value:null;case'file':return input.files.length?input.files[0]:null;default:return innerParams.inputAutoTrim?input.value.trim():input.value;}};// input autofocus
if(innerParams.input){setTimeout(function(){var input=_this.getInput();if(input){focusInput(input);}},0);}var confirm=function confirm(value){if(innerParams.showLoaderOnConfirm){constructor.showLoading();// TODO: make showLoading an *instance* method
}if(innerParams.preConfirm){_this.resetValidationMessage();var preConfirmPromise=Promise.resolve().then(function(){return innerParams.preConfirm(value,innerParams.extraParams);});if(innerParams.expectRejections){preConfirmPromise.then(function(preConfirmValue){return succeedWith(preConfirmValue||value);},function(validationMessage){_this.hideLoading();if(validationMessage){_this.showValidationMessage(validationMessage);}});}else{preConfirmPromise.then(function(preConfirmValue){if(isVisible(domCache.validationMessage)||preConfirmValue===false){_this.hideLoading();}else{succeedWith(preConfirmValue||value);}},function(error$$1){return errorWith(error$$1);});}}else{succeedWith(value);}};// Mouse interactions
var onButtonEvent=function onButtonEvent(e){var target=e.target;var confirmButton=domCache.confirmButton,cancelButton=domCache.cancelButton;var targetedConfirm=confirmButton&&(confirmButton===target||confirmButton.contains(target));var targetedCancel=cancelButton&&(cancelButton===target||cancelButton.contains(target));switch(e.type){case'click':// Clicked 'confirm'
if(targetedConfirm&&constructor.isVisible()){_this.disableButtons();if(innerParams.input){var inputValue=getInputValue();if(innerParams.inputValidator){_this.disableInput();var validationPromise=Promise.resolve().then(function(){return innerParams.inputValidator(inputValue,innerParams.extraParams);});if(innerParams.expectRejections){validationPromise.then(function(){_this.enableButtons();_this.enableInput();confirm(inputValue);},function(validationMessage){_this.enableButtons();_this.enableInput();if(validationMessage){_this.showValidationMessage(validationMessage);}});}else{validationPromise.then(function(validationMessage){_this.enableButtons();_this.enableInput();if(validationMessage){_this.showValidationMessage(validationMessage);}else{confirm(inputValue);}},function(error$$1){return errorWith(error$$1);});}}else if(!_this.getInput().checkValidity()){_this.enableButtons();_this.showValidationMessage(innerParams.validationMessage);}else{confirm(inputValue);}}else{confirm(true);}// Clicked 'cancel'
}else if(targetedCancel&&constructor.isVisible()){_this.disableButtons();dismissWith(constructor.DismissReason.cancel);}break;default:}};var buttons=domCache.popup.querySelectorAll('button');for(var i=0;i<buttons.length;i++){buttons[i].onclick=onButtonEvent;buttons[i].onmouseover=onButtonEvent;buttons[i].onmouseout=onButtonEvent;buttons[i].onmousedown=onButtonEvent;}// Closing popup by close button
domCache.closeButton.onclick=function(){dismissWith(constructor.DismissReason.close);};if(innerParams.toast){// Closing popup by internal click
domCache.popup.onclick=function(){if(innerParams.showConfirmButton||innerParams.showCancelButton||innerParams.showCloseButton||innerParams.input){return;}dismissWith(constructor.DismissReason.close);};}else{var ignoreOutsideClick=false;// Ignore click events that had mousedown on the popup but mouseup on the container
// This can happen when the user drags a slider
domCache.popup.onmousedown=function(){domCache.container.onmouseup=function(e){domCache.container.onmouseup=undefined;// We only check if the mouseup target is the container because usually it doesn't
// have any other direct children aside of the popup
if(e.target===domCache.container){ignoreOutsideClick=true;}};};// Ignore click events that had mousedown on the container but mouseup on the popup
domCache.container.onmousedown=function(){domCache.popup.onmouseup=function(e){domCache.popup.onmouseup=undefined;// We also need to check if the mouseup target is a child of the popup
if(e.target===domCache.popup||domCache.popup.contains(e.target)){ignoreOutsideClick=true;}};};domCache.container.onclick=function(e){if(ignoreOutsideClick){ignoreOutsideClick=false;return;}if(e.target!==domCache.container){return;}if(callIfFunction(innerParams.allowOutsideClick)){dismissWith(constructor.DismissReason.backdrop);}};}// Reverse buttons (Confirm on the right side)
if(innerParams.reverseButtons){domCache.confirmButton.parentNode.insertBefore(domCache.cancelButton,domCache.confirmButton);}else{domCache.confirmButton.parentNode.insertBefore(domCache.confirmButton,domCache.cancelButton);}// Focus handling
var setFocus=function setFocus(index,increment){var focusableElements=getFocusableElements(innerParams.focusCancel);// search for visible elements and select the next possible match
for(var _i=0;_i<focusableElements.length;_i++){index=index+increment;// rollover to first item
if(index===focusableElements.length){index=0;// go to last item
}else if(index===-1){index=focusableElements.length-1;}return focusableElements[index].focus();}// no visible focusable elements, focus the popup
domCache.popup.focus();};var keydownHandler=function keydownHandler(e,innerParams){if(innerParams.stopKeydownPropagation){e.stopPropagation();}var arrowKeys=['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Left','Right','Up','Down'// IE11
];if(e.key==='Enter'&&!e.isComposing){if(e.target&&_this.getInput()&&e.target.outerHTML===_this.getInput().outerHTML){if(['textarea','file'].indexOf(innerParams.input)!==-1){return;// do not submit
}constructor.clickConfirm();e.preventDefault();}// TAB
}else if(e.key==='Tab'){var targetElement=e.target;var focusableElements=getFocusableElements(innerParams.focusCancel);var btnIndex=-1;for(var _i2=0;_i2<focusableElements.length;_i2++){if(targetElement===focusableElements[_i2]){btnIndex=_i2;break;}}if(!e.shiftKey){// Cycle to the next button
setFocus(btnIndex,1);}else{// Cycle to the prev button
setFocus(btnIndex,-1);}e.stopPropagation();e.preventDefault();// ARROWS - switch focus between buttons
}else if(arrowKeys.indexOf(e.key)!==-1){// focus Cancel button if Confirm button is currently focused
if(document.activeElement===domCache.confirmButton&&isVisible(domCache.cancelButton)){domCache.cancelButton.focus();// and vice versa
}else if(document.activeElement===domCache.cancelButton&&isVisible(domCache.confirmButton)){domCache.confirmButton.focus();}// ESC
}else if((e.key==='Escape'||e.key==='Esc')&&callIfFunction(innerParams.allowEscapeKey)===true){e.preventDefault();dismissWith(constructor.DismissReason.esc);}};if(globalState.keydownHandlerAdded){globalState.keydownTarget.removeEventListener('keydown',globalState.keydownHandler,{capture:globalState.keydownListenerCapture});globalState.keydownHandlerAdded=false;}if(!innerParams.toast){globalState.keydownHandler=function(e){return keydownHandler(e,innerParams);};globalState.keydownTarget=innerParams.keydownListenerCapture?window:domCache.popup;globalState.keydownListenerCapture=innerParams.keydownListenerCapture;globalState.keydownTarget.addEventListener('keydown',globalState.keydownHandler,{capture:globalState.keydownListenerCapture});globalState.keydownHandlerAdded=true;}_this.enableButtons();_this.hideLoading();_this.resetValidationMessage();if(innerParams.toast&&(innerParams.input||innerParams.footer||innerParams.showCloseButton)){addClass(document.body,swalClasses['toast-column']);}else{removeClass(document.body,swalClasses['toast-column']);}// inputs
var inputTypes=['input','file','range','select','radio','checkbox','textarea'];var setInputPlaceholder=function setInputPlaceholder(input){if(!input.placeholder||innerParams.inputPlaceholder){input.placeholder=innerParams.inputPlaceholder;}};var input;for(var _i3=0;_i3<inputTypes.length;_i3++){var inputClass=swalClasses[inputTypes[_i3]];var inputContainer=getChildByClass(domCache.content,inputClass);input=_this.getInput(inputTypes[_i3]);// set attributes
if(input){for(var j in input.attributes){if(input.attributes.hasOwnProperty(j)){var attrName=input.attributes[j].name;if(attrName!=='type'&&attrName!=='value'){input.removeAttribute(attrName);}}}for(var attr in innerParams.inputAttributes){// Do not set a placeholder for <input type="range">
// it'll crash Edge, #1298
if(inputTypes[_i3]==='range'&&attr==='placeholder'){continue;}input.setAttribute(attr,innerParams.inputAttributes[attr]);}}// set class
inputContainer.className=inputClass;if(innerParams.inputClass){addClass(inputContainer,innerParams.inputClass);}hide(inputContainer);}var populateInputOptions;switch(innerParams.input){case'text':case'email':case'password':case'number':case'tel':case'url':{input=getChildByClass(domCache.content,swalClasses.input);if(typeof innerParams.inputValue==='string'||typeof innerParams.inputValue==='number'){input.value=innerParams.inputValue;}else{warn("Unexpected type of inputValue! Expected \"string\" or \"number\", got \"".concat(_typeof(innerParams.inputValue),"\""));}setInputPlaceholder(input);input.type=innerParams.input;show(input);break;}case'file':{input=getChildByClass(domCache.content,swalClasses.file);setInputPlaceholder(input);input.type=innerParams.input;show(input);break;}case'range':{var range=getChildByClass(domCache.content,swalClasses.range);var rangeInput=range.querySelector('input');var rangeOutput=range.querySelector('output');rangeInput.value=innerParams.inputValue;rangeInput.type=innerParams.input;rangeOutput.value=innerParams.inputValue;show(range);break;}case'select':{var select=getChildByClass(domCache.content,swalClasses.select);select.innerHTML='';if(innerParams.inputPlaceholder){var placeholder=document.createElement('option');placeholder.innerHTML=innerParams.inputPlaceholder;placeholder.value='';placeholder.disabled=true;placeholder.selected=true;select.appendChild(placeholder);}populateInputOptions=function populateInputOptions(inputOptions){inputOptions.forEach(function(inputOption){var optionValue=inputOption[0];var optionLabel=inputOption[1];var option=document.createElement('option');option.value=optionValue;option.innerHTML=optionLabel;if(innerParams.inputValue.toString()===optionValue.toString()){option.selected=true;}select.appendChild(option);});show(select);select.focus();};break;}case'radio':{var radio=getChildByClass(domCache.content,swalClasses.radio);radio.innerHTML='';populateInputOptions=function populateInputOptions(inputOptions){inputOptions.forEach(function(inputOption){var radioValue=inputOption[0];var radioLabel=inputOption[1];var radioInput=document.createElement('input');var radioLabelElement=document.createElement('label');radioInput.type='radio';radioInput.name=swalClasses.radio;radioInput.value=radioValue;if(innerParams.inputValue.toString()===radioValue.toString()){radioInput.checked=true;}var label=document.createElement('span');label.innerHTML=radioLabel;label.className=swalClasses.label;radioLabelElement.appendChild(radioInput);radioLabelElement.appendChild(label);radio.appendChild(radioLabelElement);});show(radio);var radios=radio.querySelectorAll('input');if(radios.length){radios[0].focus();}};break;}case'checkbox':{var checkbox=getChildByClass(domCache.content,swalClasses.checkbox);var checkboxInput=_this.getInput('checkbox');checkboxInput.type='checkbox';checkboxInput.value=1;checkboxInput.id=swalClasses.checkbox;checkboxInput.checked=Boolean(innerParams.inputValue);var label=checkbox.querySelector('span');label.innerHTML=innerParams.inputPlaceholder;show(checkbox);break;}case'textarea':{var textarea=getChildByClass(domCache.content,swalClasses.textarea);textarea.value=innerParams.inputValue;setInputPlaceholder(textarea);show(textarea);break;}case null:{break;}default:error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(innerParams.input,"\""));break;}if(innerParams.input==='select'||innerParams.input==='radio'){var processInputOptions=function processInputOptions(inputOptions){return populateInputOptions(formatInputOptions(inputOptions));};if(isThenable(innerParams.inputOptions)){constructor.showLoading();innerParams.inputOptions.then(function(inputOptions){_this.hideLoading();processInputOptions(inputOptions);});}else if(_typeof(innerParams.inputOptions)==='object'){processInputOptions(innerParams.inputOptions);}else{error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(innerParams.inputOptions)));}}else if(['text','email','number','tel','textarea'].indexOf(innerParams.input)!==-1&&isThenable(innerParams.inputValue)){constructor.showLoading();hide(input);innerParams.inputValue.then(function(inputValue){input.value=innerParams.input==='number'?parseFloat(inputValue)||0:inputValue+'';show(input);input.focus();_this.hideLoading();}).catch(function(err){error('Error in inputValue promise: '+err);input.value='';show(input);input.focus();_this.hideLoading();});}openPopup(innerParams);if(!innerParams.toast){if(!callIfFunction(innerParams.allowEnterKey)){if(document.activeElement&&typeof document.activeElement.blur==='function'){document.activeElement.blur();}}else if(innerParams.focusCancel&&isVisible(domCache.cancelButton)){domCache.cancelButton.focus();}else if(innerParams.focusConfirm&&isVisible(domCache.confirmButton)){domCache.confirmButton.focus();}else{setFocus(-1,1);}}// fix scroll
domCache.container.scrollTop=0;});}var instanceMethods=Object.freeze({hideLoading:hideLoading,disableLoading:hideLoading,getInput:getInput,enableButtons:enableButtons,disableButtons:disableButtons,enableConfirmButton:enableConfirmButton,disableConfirmButton:disableConfirmButton,enableInput:enableInput,disableInput:disableInput,showValidationMessage:showValidationMessage,resetValidationMessage:resetValidationMessage,resetValidationError:resetValidationError,showValidationError:showValidationError,getProgressSteps:getProgressSteps$1,setProgressSteps:setProgressSteps,showProgressSteps:showProgressSteps,hideProgressSteps:hideProgressSteps,_main:_main});var currentInstance;// SweetAlert constructor
function SweetAlert(){// Prevent run in Node env
/* istanbul ignore if */if(typeof window==='undefined'){return;}// Check for the existence of Promise
/* istanbul ignore if */if(typeof Promise==='undefined'){error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');}for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}if(args.length===0){error('At least 1 argument is expected!');return false;}currentInstance=this;var outerParams=Object.freeze(this.constructor.argsToParams(args));Object.defineProperties(this,{params:{value:outerParams,writable:false,enumerable:true}});var promise=this._main(this.params);privateProps.promise.set(this,promise);}// `catch` cannot be the name of a module export, so we define our thenable methods here instead
SweetAlert.prototype.then=function(onFulfilled,onRejected){var promise=privateProps.promise.get(this);return promise.then(onFulfilled,onRejected);};SweetAlert.prototype.catch=function(onRejected){var promise=privateProps.promise.get(this);return promise.catch(onRejected);};SweetAlert.prototype.finally=function(onFinally){var promise=privateProps.promise.get(this);return promise.finally(onFinally);};// Assign instance methods from src/instanceMethods/*.js to prototype
_extends(SweetAlert.prototype,instanceMethods);// Assign static methods from src/staticMethods/*.js to constructor
_extends(SweetAlert,staticMethods);// Proxy to instance methods to constructor, for now, for backwards compatibility
Object.keys(instanceMethods).forEach(function(key){SweetAlert[key]=function(){if(currentInstance){var _currentInstance;return(_currentInstance=currentInstance)[key].apply(_currentInstance,arguments);}};});SweetAlert.DismissReason=DismissReason;/* istanbul ignore next */SweetAlert.noop=function(){};var Swal=withNoNewKeyword(withGlobalDefaults(SweetAlert));Swal.default=Swal;return Swal;});if(typeof window!=='undefined'&&window.Sweetalert2){window.Sweetalert2.version='7.29.1';window.swal=window.sweetAlert=window.Swal=window.SweetAlert=window.Sweetalert2;}"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t;}catch(e){n.innerText=t;}}(document,"@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{position:fixed;background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;box-shadow:0 0 .625em #d9d9d9;overflow-y:hidden}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:initial;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon-text{font-size:2em;font-weight:700;line-height:1em}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:2em;height:2.8125em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.25em;left:-.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 2em;transform-origin:0 2em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:showSweetToast .5s;animation:showSweetToast .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:hideSweetToast .2s forwards;animation:hideSweetToast .2s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:animate-toast-success-tip .75s;animation:animate-toast-success-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:animate-toast-success-long .75s;animation:animate-toast-success-long .75s}@-webkit-keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@-webkit-keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:10px;background-color:transparent;z-index:1060;overflow-x:hidden;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem;box-sizing:border-box}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-popup .swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-popup .swal2-title{display:block;position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-popup .swal2-actions{flex-wrap:wrap;align-items:center;justify-content:center;margin:1.25em auto 0;z-index:1}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm{width:2.5em;height:2.5em;margin:.46875em;padding:0;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;box-sizing:border-box;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{display:inline-block;width:15px;height:15px;margin-left:5px;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff;content:'';-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal}.swal2-popup .swal2-styled{margin:.3125em;padding:.625em 2em;font-weight:500;box-shadow:none}.swal2-popup .swal2-styled:not([disabled]){cursor:pointer}.swal2-popup .swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-popup .swal2-styled::-moz-focus-inner{border:0}.swal2-popup .swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-popup .swal2-image{max-width:100%;margin:1.25em auto}.swal2-popup .swal2-close{position:absolute;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;transition:color .1s ease-out;border:none;border-radius:0;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer;overflow:hidden}.swal2-popup .swal2-close:hover{-webkit-transform:none;transform:none;color:#f27474}.swal2-popup>.swal2-checkbox,.swal2-popup>.swal2-file,.swal2-popup>.swal2-input,.swal2-popup>.swal2-radio,.swal2-popup>.swal2-select,.swal2-popup>.swal2-textarea{display:none}.swal2-popup .swal2-content{justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;z-index:1;word-wrap:break-word}.swal2-popup #swal2-content{text-align:center}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-radio,.swal2-popup .swal2-select,.swal2-popup .swal2-textarea{margin:1em auto}.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-textarea{width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;font-size:1.125em;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);box-sizing:border-box}.swal2-popup .swal2-file.swal2-inputerror,.swal2-popup .swal2-input.swal2-inputerror,.swal2-popup .swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-popup .swal2-file:focus,.swal2-popup .swal2-input:focus,.swal2-popup .swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-popup .swal2-file::-webkit-input-placeholder,.swal2-popup .swal2-input::-webkit-input-placeholder,.swal2-popup .swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-popup .swal2-file:-ms-input-placeholder,.swal2-popup .swal2-input:-ms-input-placeholder,.swal2-popup .swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::-ms-input-placeholder,.swal2-popup .swal2-input::-ms-input-placeholder,.swal2-popup .swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::placeholder,.swal2-popup .swal2-input::placeholder,.swal2-popup .swal2-textarea::placeholder{color:#ccc}.swal2-popup .swal2-range input{width:80%}.swal2-popup .swal2-range output{width:20%;font-weight:600;text-align:center}.swal2-popup .swal2-range input,.swal2-popup .swal2-range output{height:2.625em;margin:1em auto;padding:0;font-size:1.125em;line-height:2.625em}.swal2-popup .swal2-input{height:2.625em;padding:0 .75em}.swal2-popup .swal2-input[type=number]{max-width:10em}.swal2-popup .swal2-file{font-size:1.125em}.swal2-popup .swal2-textarea{height:6.75em;padding:.75em}.swal2-popup .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;color:#545454;font-size:1.125em}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-radio{align-items:center;justify-content:center}.swal2-popup .swal2-checkbox label,.swal2-popup .swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-popup .swal2-checkbox input,.swal2-popup .swal2-radio input{margin:0 .4em}.swal2-popup .swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;background:#f0f0f0;color:#666;font-size:1em;font-weight:300;overflow:hidden}.swal2-popup .swal2-validation-message::before{display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center;content:'!';zoom:normal}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;zoom:normal}.swal2-icon-text{font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;top:-.25em;left:-.25em;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%;z-index:2;box-sizing:content-box}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);z-index:1}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;height:.3125em;border-radius:.125em;background-color:#a5dc86;z-index:2}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progresssteps{align-items:center;margin:0 0 1.25em;padding:0;font-weight:600}.swal2-progresssteps li{display:inline-block;position:relative}.swal2-progresssteps .swal2-progresscircle{width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center;z-index:20}.swal2-progresssteps .swal2-progresscircle:first-child{margin-left:0}.swal2-progresssteps .swal2-progresscircle:last-child{margin-right:0}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep{background:#3085d6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progresscircle{background:#add8e6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progressline{background:#add8e6}.swal2-progresssteps .swal2-progressline{width:2.5em;height:.4em;margin:0 -1px;background:#3085d6;z-index:10}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:initial!important}}");
(function($) {
    $('.preventDoubleClick').on('submit',function() {
        $(this).find(':submit').html('<i class="fas fa-spinner fa-pulse"></i> Salvando').attr('disabled','disabled');
    });
    $('[data-toggle="popover"]').popover().on('click', function (e) {
        e.preventDefault();
    });
    $('a[href="#"]').on('click', function (e) {
        e.preventDefault();
    });
})(jQuery);
