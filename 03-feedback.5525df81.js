function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return c.Date.now()};function p(e,t,n){var o,r,i,a,u,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function x(e){return l=e,u=setTimeout(j,t),c?y(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function j(){var e=g();if(S(e))return E(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?m(n,i-(e-l)):n}(e))}function E(e){return u=void 0,p&&o?y(e):(o=r=void 0,a)}function O(){var e=g(),n=S(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return x(f);if(s)return u=setTimeout(j,t),y(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=b(t)||0,v(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=r=u=void 0},O.flush=function(){return void 0===u?a:E(g())},O}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};let y={};const x={feedbackForm:document.querySelector(".feedback-form"),inputEmail:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")};x.feedbackForm.addEventListener("submit",(function(e){e.preventDefault(),x.inputEmail.value&&x.textarea.value?(console.log("email:",x.inputEmail.value),console.log("massag:",x.textarea.value),e.target.reset(),localStorage.removeItem("feedback-form-state")):alert("Заполните все поля, пожалуйста) 🍀")})),x.feedbackForm.addEventListener("input",e(t)((function(e){console.log(y[e.target.name]=e.target.value),localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),function(){const e=localStorage.getItem("feedback-form-state");console.log(e.message),e&&(console.log(x.textarea.value=JSON.parse(e).message),console.log(x.inputEmail.value=JSON.parse(e).email))}();
//# sourceMappingURL=03-feedback.5525df81.js.map