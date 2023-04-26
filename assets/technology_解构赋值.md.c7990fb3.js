import{_ as s,c as n,o as a,O as l}from"./chunks/framework.0d343703.js";const d=JSON.parse('{"title":"解构赋值","description":"","frontmatter":{"title":"解构赋值","date":"2021-08-25T15:45:00.000Z","summary":"解构赋值","tags":["ES6"]},"headers":[],"relativePath":"technology/解构赋值.md"}'),p={name:"technology/解构赋值.md"},e=l(`<h1 id="解构赋值" tabindex="-1">解构赋值 <a class="header-anchor" href="#解构赋值" aria-label="Permalink to &quot;解构赋值&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;林三心&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  age: 22,</span></span>
<span class="line"><span style="color:#A6ACCD;">  gender: &#39;男&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  doing: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    morning: &#39;摸鱼&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    afternoon: &#39;摸鱼&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    evening: &#39;sleep&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const { name, age, gender } = obj</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(name, age, gender) // 林三心 22 男</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 解构重名</span></span>
<span class="line"><span style="color:#A6ACCD;">const { name: myname } = obj</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(myname) // 林三心</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 嵌套解构</span></span>
<span class="line"><span style="color:#A6ACCD;">const { doing: { evening } } = obj</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(evening) // sleep</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">数组结构</span></span>
<span class="line"><span style="color:#A6ACCD;">const arr = [1, 2, 3]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const [a, b, c] = arr</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a, b, c) // 1 2 3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 默认赋值</span></span>
<span class="line"><span style="color:#A6ACCD;">const [a, b, c, d = 5] = arr</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a, b, c, d) // 1 2 3 5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 乱序解构</span></span>
<span class="line"><span style="color:#A6ACCD;">const { 1: a, 0: b, 2: c } = arr</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a, b, c) // 2 1 3</span></span></code></pre></div><p>trimStart 和 trimEnd 用来单独去除字符串的首和尾的空格</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const str = &#39;    林三心    &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 去除首部空格</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(str.trimStart()) // &#39;林三心   &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 去除尾部空格</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(str.trimStart()) // &#39;   林三心&#39;</span></span></code></pre></div>`,5),o=[e];function c(t,r,i,C,A,y){return a(),n("div",null,o)}const g=s(p,[["render",c]]);export{d as __pageData,g as default};
