import{_ as s,c as a,o as n,O as e}from"./chunks/framework.0d343703.js";const y=JSON.parse('{"title":"webpack","description":"","frontmatter":{"title":"webpack","date":"2021-08-25T15:45:00.000Z","summary":"webpack的基础配置","tags":["工程化"]},"headers":[],"relativePath":"technology/webpack的基础配置.md"}'),l={name:"technology/webpack的基础配置.md"},p=e(`<h1 id="webpack-的基础配置" tabindex="-1">webpack 的基础配置 <a class="header-anchor" href="#webpack-的基础配置" aria-label="Permalink to &quot;webpack 的基础配置&quot;">​</a></h1><p>1.明确一点，webpack 只是工具用来构建我们的开发项目，与框架无关。</p><h2 id="cli-使用-webpack" tabindex="-1">cli 使用 webpack <a class="header-anchor" href="#cli-使用-webpack" aria-label="Permalink to &quot;cli 使用 webpack&quot;">​</a></h2><p>不使用配置文件时候，可以使用全局的 webpack 命令，具体可查看文档配置 flags</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">webpack --entry ./first.js --entry ./second.js --output-path /build</span></span>
<span class="line"><span style="color:#A6ACCD;">即为打包到build文件夹下，默认名为main.js</span></span></code></pre></div><h2 id="项目中使用-webpack" tabindex="-1">项目中使用 webpack <a class="header-anchor" href="#项目中使用-webpack" aria-label="Permalink to &quot;项目中使用 webpack&quot;">​</a></h2><p>四个核心：entry，output，module，plugins</p><h3 id="entry" tabindex="-1">entry <a class="header-anchor" href="#entry" aria-label="Permalink to &quot;entry&quot;">​</a></h3><p>打包入口，可以为绝对路径也可为相对路径。</p><h3 id="output" tabindex="-1">output <a class="header-anchor" href="#output" aria-label="Permalink to &quot;output&quot;">​</a></h3><p>输出模块</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">filename: &#39;bundle.js&#39;, //输出文件名</span></span>
<span class="line"><span style="color:#A6ACCD;">        // path:&#39;./build&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        path: path.resolve(__dirname, &#39;./build&#39;), //找到绝对路径 =&gt; 拼接</span></span></code></pre></div><h3 id="module" tabindex="-1">module <a class="header-anchor" href="#module" aria-label="Permalink to &quot;module&quot;">​</a></h3><p>模块匹配规则，接受 rules 匹配规则</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                // 使用正则表达式</span></span>
<span class="line"><span style="color:#A6ACCD;">                test: /\\.css$/, // 以css结尾匹配</span></span>
<span class="line"><span style="color:#A6ACCD;">                use: [</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // UseEntry</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    //     loader: &#39;css-loader&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // }</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &#39;style-loader&#39;, // 下往上 =&gt; 栈 =&gt; 先进后出</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // &#39;css-loader&#39;,// 简写方式 实际还是转成上述方式</span></span>
<span class="line"><span style="color:#A6ACCD;">                    //  loader: [&#39;css-loader&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">                    {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        loader: &#39;css-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                            importLoaders: 1 //后面有几个loader则写几。</span></span>
<span class="line"><span style="color:#A6ACCD;">                        }</span></span>
<span class="line"><span style="color:#A6ACCD;">                    },</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &#39;postcss-loader&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    //     loader: &quot;postcss-loader&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    //     options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    //         postcssOptions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    //             plugins: [ //依赖多个插件</span></span>
<span class="line"><span style="color:#A6ACCD;">                    //                 // require(&quot;autoprefixer&quot;),</span></span>
<span class="line"><span style="color:#A6ACCD;">                    //                 // require(&#39;postcss-preset-env&#39;) //内置autoprefixer</span></span>
<span class="line"><span style="color:#A6ACCD;">                    //                 &#39;postcss-preset-env&#39; // 简写</span></span>
<span class="line"><span style="color:#A6ACCD;">                    //             ]</span></span>
<span class="line"><span style="color:#A6ACCD;">                    //         }</span></span>
<span class="line"><span style="color:#A6ACCD;">                    //     }</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // }</span></span>
<span class="line"><span style="color:#A6ACCD;">                ],</span></span>
<span class="line"><span style="color:#A6ACCD;">                // 加载方式 创建标签=&gt; document.createElement(style) 页内样式</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span></code></pre></div>`,15),o=[p];function t(c,r,i,C,A,d){return n(),a("div",null,o)}const h=s(l,[["render",t]]);export{y as __pageData,h as default};
