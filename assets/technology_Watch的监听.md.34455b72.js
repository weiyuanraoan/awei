import{_ as s,c as a,o as n,O as l}from"./chunks/framework.0d343703.js";const h=JSON.parse('{"title":"Vue的watch","description":"","frontmatter":{"title":"Vue的watch","date":"2021-08-25T15:45:00.000Z","summary":"常用常忘，多多总结。","tags":["框架"]},"headers":[],"relativePath":"technology/Watch的监听.md"}'),e={name:"technology/Watch的监听.md"},p=l(`<h1 id="watch的监听" tabindex="-1">Watch的监听 <a class="header-anchor" href="#watch的监听" aria-label="Permalink to &quot;Watch的监听&quot;">​</a></h1><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;p&gt;FullName: {{fullName}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;p&gt;FirstName: &lt;input type=&quot;text&quot; v-model=&quot;firstName&quot;&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">  el: &#39;#root&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    firstName: &#39;Dawei&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    lastName: &#39;Lou&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    fullName: &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  watch: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    firstName(newName, oldName) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.fullName = newName + &#39; &#39; + this.lastName;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  } </span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><p>以函数的形式进行监听，个人认为是内部定义函数名===监听对象，接手（new，old）俩参数，执行对应的函数。 第一次不会监听，等到其值发生变化才会监听执行。</p><h2 id="初始执行watch方法" tabindex="-1">初始执行watch方法 <a class="header-anchor" href="#初始执行watch方法" aria-label="Permalink to &quot;初始执行watch方法&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">watch: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  firstName: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    handler(newName, oldName) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.fullName = newName + &#39; &#39; + this.lastName;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法，如果设置了false，那么效果和上边例子一样</span></span>
<span class="line"><span style="color:#A6ACCD;">    immediate: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>以对象的形式进行监听，内部实现 监听对象===（对象名|| 函数名），增加handler函数内部进行监听，同样接受（new,old）参数进行处理，增加immediate属性进行是否初始监听的选项。</p><h2 id="深度监听" tabindex="-1">深度监听 <a class="header-anchor" href="#深度监听" aria-label="Permalink to &quot;深度监听&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;p&gt;obj.a: {{obj.a}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;p&gt;obj.a: &lt;input type=&quot;text&quot; v-model=&quot;obj.a&quot;&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">  el: &#39;#root&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    obj: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      a: 123</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  watch: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    obj: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      handler(newName, oldName) {</span></span>
<span class="line"><span style="color:#A6ACCD;">         console.log(&#39;obj.a changed&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      immediate: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">      deep:true</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  } </span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><p>深度，顾名思义为deep监听方法，用于对象的监听，因vue无法动态监听其对象属性的增删，其主要在初始实例时才实现getter\\setter 的转换。</p><p>缺点：obj任一属性改变则会执行该函数，性能开销较大。 建议：改为值监听即栈。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">watch: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;obj.a&#39;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    handler(newName, oldName) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;obj.a changed&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    immediate: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // deep: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div>`,12),t=[p];function o(c,i,r,C,A,d){return n(),a("div",null,t)}const D=s(e,[["render",o]]);export{h as __pageData,D as default};
