!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=(e,t)=>{const n=document.createElement("li");n.className="nav-item";const a=document.createElement("a");a.className="nav-link text-light",a.textContent=t,n.appendChild(a),e.appendChild(n)},r=(e,t)=>{const n=document.createElement("li");n.className="list-group-item d-flex justify-content-between align-items-center custom-bg";const a=document.createElement("span");a.textContent=e,n.appendChild(a);const r=document.createElement("span");return r.className="badge badge-secondary badge-pill",r.textContent=t,n.appendChild(r),n},i=document.getElementById("content");i.className="container mt-5 mb-5 pt-5 pb-5 rounded border border-light min-vh-100",(e=>{const t=document.createElement("div");t.className="row justify-content-center";const n=document.createElement("h1");n.className="text-light rounded border border-light p-2",n.innerHTML="Ratatouille's",t.appendChild(n),e.appendChild(t);const r=document.createElement("ul");r.className="nav justify-content-center",a(r,"About"),a(r,"Menu"),a(r,"Contact"),e.appendChild(r);const i=document.createElement("div");i.className="col-md-8 mx-auto card text-white mt-3 p-5 min-vh-75 border border-light text-justify custom-bg";const o=document.createElement("p");o.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis aliquet quam, viverra tempus magna tincidunt non. Aenean consequat nisi magna, nec blandit velit faucibus a. Praesent vel eros a dui accumsan posuere. Maecenas a fermentum leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a sodales lacus. Mauris tempor urna lectus, id placerat dolor finibus ut. Aliquam laoreet arcu sit amet eros tristique bibendum. Cras vel tellus maximus, ullamcorper erat id, euismod neque. Donec id lectus eleifend, ullamcorper erat id, pharetra leo.",i.appendChild(o),e.appendChild(i)})(i);const o=document.querySelectorAll(".nav-link"),c=document.querySelector(".card");o[0].addEventListener("click",()=>{c.innerHTML="",(e=>{const t=document.createElement("p");t.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis aliquet quam, viverra tempus magna tincidunt non. Aenean consequat nisi magna, nec blandit velit faucibus a. Praesent vel eros a dui accumsan posuere. Maecenas a fermentum leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a sodales lacus. Mauris tempor urna lectus, id placerat dolor finibus ut. Aliquam laoreet arcu sit amet eros tristique bibendum. Cras vel tellus maximus, ullamcorper erat id, euismod neque. Donec id lectus eleifend, ullamcorper erat id, pharetra leo.",e.appendChild(t)})(c)}),o[1].addEventListener("click",()=>{c.innerHTML="",(e=>{const t=document.createElement("ul");t.className="list-group",t.appendChild(r("Kicommando","$5")),t.appendChild(r("Fries","$5")),t.appendChild(r("Rolex","$5")),e.appendChild(t)})(c)})}]);