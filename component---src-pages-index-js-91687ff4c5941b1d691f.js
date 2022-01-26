"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{644:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var n=a(7294),l=a(5444),c=a(6125),i=function(){var e=(0,l.useStaticQuery)("2814701207").allDataJson.nodes[0].clients;return n.createElement("div",{className:"flex justify-between"},e.map((function(e,t){var a=(0,c.d)(e.pic);return n.createElement(c.G,{key:t,className:"",image:a,alt:""})})))},s=function(e){var t=e.item,a=(e.className,t.title),l=t.description,i=t.pic,s=t.reverse,r=(0,c.d)(i);return n.createElement("div",{className:s?"flex flex-row-reverse":"flex"},n.createElement("div",null,n.createElement("img",{src:r,alt:""}),n.createElement(c.G,{className:"lg:w-full object-contain",image:r,alt:a})),n.createElement("div",null,n.createElement("h1",null,a),n.createElement("p",null,l),n.createElement("a",{href:""},"Learn more")))},r=function(){var e=(0,l.useStaticQuery)("3840259019");return n.createElement("div",null,e.allDataJson.nodes[0].features.map((function(e){return n.createElement(s,{key:e.title,item:e})})))},f=function(){return n.createElement("div",{className:"mt-18 pt-16 flex"},n.createElement("div",{className:"flex flex-col"},n.createElement("h1",null,"Grow your subscription business"),n.createElement("p",null,"Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end."),n.createElement("button",null,"Get Started")),n.createElement("div",null,n.createElement(c.S,{src:"../images/hero-img.png",formats:["auto","webp","avif"],alt:"A Gatsby astronaut",__imageData:a(4779)})))},m=a(5127),o=function(e){var t=e.setIsOpen,l=function(){return"undefined"!=typeof window};(0,n.useEffect)((function(){window.addEventListener("scroll",f)}),[function(){if(l)return window.pageYOffset}]);var i=(0,n.useState)(!1),s=i[0],r=i[1],f=function(){window.pageYOffset>0?s||r(!0):s&&r(!1)};return n.createElement("nav",{className:"fixed z-10 "+(s?"border-b-2":"border-none")+" w-full top-0 bg-white"},n.createElement("div",{className:"flex justify-between items-center px-6 py-4 lg:w-4/5 lg:mx-auto"},n.createElement("div",null,n.createElement("a",{href:"/"},n.createElement("span",{className:"text-sm text-theme font-bold"},n.createElement(c.S,{src:"../images/logo.svg",formats:["auto","webp","avif"],alt:"A Gatsby astronaut",__imageData:a(3226)})))),n.createElement("ul",{className:"hidden lg:flex gap-x-12"},n.createElement("li",{className:"text-xl",onClick:function(){return t(!1)}},n.createElement("a",{href:"#portfolio"},"Portfolio")),n.createElement("li",{className:"text-xl",onClick:function(){return t(!1)}},n.createElement("a",{href:"#about"},"About")),n.createElement("li",{className:"text-xl",onClick:function(){return t(!1)}},n.createElement("a",{href:"#contact"},"Contact"))),n.createElement("div",{className:"lg:hidden",onClick:function(){return t(!0)}},n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7ZM3 12C3 11.4477 3.44772 11 4 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L4 13C3.44772 13 3 12.5523 3 12ZM4 16C3.44772 16 3 16.4477 3 17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17C21 16.4477 20.5523 16 20 16H4Z",fill:"#6070FF"})))))},u=function(e){var t=e.item,a=e.index,l=t.plan,c=t.price,i=t.features;return n.createElement("div",{className:(1===a?"bg-orange-500":"bg-gray-300")+" w-full"},n.createElement("h6",null,l),n.createElement("span",null,c),n.createElement("ul",null,i.map((function(e,t){return n.createElement("li",{key:t},e)}))))},d=function(){var e=(0,l.useStaticQuery)("1707612641").allDataJson.nodes[0],t=(0,n.useState)(!0),a=t[0],c=(t[1],a?e.pricing[0].yearly:e.pricing[0].monthly);return n.createElement("div",{className:"flex"},c.map((function(e,t){return n.createElement(u,{key:t,item:e,index:t})})))},p=a(3751),g=function(e){var t=e.item,a=t.pic,l=t.title,i=t.description,s=(0,c.d)(a);return n.createElement("div",null,n.createElement(c.G,{className:"lg:w-full object-contain",image:s,alt:l}),n.createElement("h1",null,l),n.createElement("p",null,i))},b=function(){var e=(0,l.useStaticQuery)("2769802326");return n.createElement("div",{className:"flex justify-between"},e.allDataJson.nodes[0].extras.map((function(e){return n.createElement(g,{key:e.title,item:e})})))},w=function(){return n.createElement(m.Z,null,n.createElement(p.Z,{title:"Home"}),n.createElement(o,null),n.createElement(f,null),n.createElement(i,null),n.createElement(r,null),n.createElement(b,null),n.createElement(d,null))}},4779:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/saas-landing-template/static/7b9240eb00044ef6465974ac22695807/0e434/hero-img.png","srcSet":"/saas-landing-template/static/7b9240eb00044ef6465974ac22695807/96090/hero-img.png 153w,\\n/saas-landing-template/static/7b9240eb00044ef6465974ac22695807/14751/hero-img.png 305w,\\n/saas-landing-template/static/7b9240eb00044ef6465974ac22695807/0e434/hero-img.png 610w","sizes":"(min-width: 610px) 610px, 100vw"},"sources":[{"srcSet":"/saas-landing-template/static/7b9240eb00044ef6465974ac22695807/9edd9/hero-img.avif 153w,\\n/saas-landing-template/static/7b9240eb00044ef6465974ac22695807/8441b/hero-img.avif 305w,\\n/saas-landing-template/static/7b9240eb00044ef6465974ac22695807/d8bb5/hero-img.avif 610w","type":"image/avif","sizes":"(min-width: 610px) 610px, 100vw"},{"srcSet":"/saas-landing-template/static/7b9240eb00044ef6465974ac22695807/f35c0/hero-img.webp 153w,\\n/saas-landing-template/static/7b9240eb00044ef6465974ac22695807/e9827/hero-img.webp 305w,\\n/saas-landing-template/static/7b9240eb00044ef6465974ac22695807/504fd/hero-img.webp 610w","type":"image/webp","sizes":"(min-width: 610px) 610px, 100vw"}]},"width":610,"height":644}')},3226:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/saas-landing-template/static/b9fe2f2237b14a5cc052129e8af5ffc4/d2d5d/logo.svg","srcSet":"/saas-landing-template/static/b9fe2f2237b14a5cc052129e8af5ffc4/c0df1/logo.svg 50w,\\n/saas-landing-template/static/b9fe2f2237b14a5cc052129e8af5ffc4/e61e4/logo.svg 100w,\\n/saas-landing-template/static/b9fe2f2237b14a5cc052129e8af5ffc4/d2d5d/logo.svg 200w","sizes":"(min-width: 200px) 200px, 100vw"},"sources":[{"srcSet":"/saas-landing-template/static/b9fe2f2237b14a5cc052129e8af5ffc4/5fcd3/logo.avif 50w,\\n/saas-landing-template/static/b9fe2f2237b14a5cc052129e8af5ffc4/b362b/logo.avif 100w,\\n/saas-landing-template/static/b9fe2f2237b14a5cc052129e8af5ffc4/49639/logo.avif 200w","type":"image/avif","sizes":"(min-width: 200px) 200px, 100vw"},{"srcSet":"/saas-landing-template/static/b9fe2f2237b14a5cc052129e8af5ffc4/ebe4c/logo.webp 50w,\\n/saas-landing-template/static/b9fe2f2237b14a5cc052129e8af5ffc4/c0577/logo.webp 100w,\\n/saas-landing-template/static/b9fe2f2237b14a5cc052129e8af5ffc4/477ff/logo.webp 200w","type":"image/webp","sizes":"(min-width: 200px) 200px, 100vw"}]},"width":200,"height":41}')}}]);
//# sourceMappingURL=component---src-pages-index-js-91687ff4c5941b1d691f.js.map