import{_ as s,c as n,o as a,O as l}from"./chunks/framework.0d343703.js";const F=JSON.parse('{"title":"Echarts配置项","description":"","frontmatter":{"title":"Echarts配置项","date":"2021-08-25T15:45:00.000Z","summary":"Echarts部分配置","tags":["Echarts"]},"headers":[],"relativePath":"technology/Echarts 配置项.md"}'),p={name:"technology/Echarts 配置项.md"},o=l(`<h1 id="echarts-配置项" tabindex="-1">Echarts 配置项 <a class="header-anchor" href="#echarts-配置项" aria-label="Permalink to &quot;Echarts 配置项&quot;">​</a></h1><h2 id="x轴文字显示" tabindex="-1">X轴文字显示 <a class="header-anchor" href="#x轴文字显示" aria-label="Permalink to &quot;X轴文字显示&quot;">​</a></h2><ul><li><p>竖着显示</p><div class="language-csharp"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">xAxis ： </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#FFCB6B;">axisLabel</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span><span style="color:#FFCB6B;">interval</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span><span style="color:#FFCB6B;">formatter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#676E95;font-style:italic;">//x轴的文字改为竖版显示</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">str</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></li><li><p>倾斜45度数</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">xAixs : </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      // x轴文字倾斜</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">                   // x轴文字倾斜</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#FFCB6B;">axisLabel</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#F07178;">                  </span><span style="color:#FFCB6B;">interval</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                  </span><span style="color:#FFCB6B;">rotate</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">45</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;font-style:italic;">//倾斜度 -90 至 90 默认为0</span></span>
<span class="line"><span style="color:#F07178;">                  </span><span style="color:#FFCB6B;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                  </span><span style="color:#FFCB6B;">textStyle</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#FFCB6B;">fontWeight</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bolder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#FFCB6B;">color</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#000000</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">                  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></li><li><p>X 轴数据太多折叠显示</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">axisLabel: {</span></span>
<span class="line"><span style="color:#A6ACCD;">interval: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">formatter(value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">if (value.length &gt; 5) {</span></span>
<span class="line"><span style="color:#A6ACCD;">value = \`\${value.substring(0, 5)}..\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">return value;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span></code></pre></div></li><li><p>饼图legend太多显示</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// formatter(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">//     return (name.length &gt; 5 ? (\`\${name.slice(0, 5)}...\`) : name); </span></span>
<span class="line"><span style="color:#A6ACCD;">// }</span></span></code></pre></div></li></ul><h2 id="动态给的echarts高度" tabindex="-1">动态给的Echarts高度 <a class="header-anchor" href="#动态给的echarts高度" aria-label="Permalink to &quot;动态给的Echarts高度&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">autodivheight() { // 函数：获取尺寸</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">​            // 获取浏览器窗口高度</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">​            let winHeight = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">​            if (window.innerHeight) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">​                winHeight = window.innerHeight;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">​            } else if ((document.body) &amp;&amp; (document.body.clientHeight)) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">​                winHeight = document.body.clientHeight;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">​            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">​            // 通过深入Document内部对body进行检测，获取浏览器窗口高度</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">​            if (document.documentElement &amp;&amp; document.documentElement.clientHeight) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">​                winHeight = document.documentElement.clientHeight;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">​            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">​            // DIV高度为浏览器窗口的高度</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">​            // document.getElementById(&quot;test&quot;).style.height= winHeight +&quot;px&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">​            // DIV高度为浏览器窗口高度的一半</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">​            document.getElementById(&#39;chart&#39;).style.height = \`\${winHeight * 0.6}px\`;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">​        }</span></span></code></pre></div><h2 id="初始化图表" tabindex="-1">初始化图表 <a class="header-anchor" href="#初始化图表" aria-label="Permalink to &quot;初始化图表&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">myChart.clear();</span></span>
<span class="line"><span style="color:#A6ACCD;">myChart.setOption(this.option); </span></span>
<span class="line"><span style="color:#A6ACCD;">window.onresize = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">this.autodivheight(); </span></span>
<span class="line"><span style="color:#A6ACCD;">//  根据窗口大小调整曲线大小</span></span>
<span class="line"><span style="color:#A6ACCD;">myChart.resize();</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span></code></pre></div><h2 id="x轴name的位置" tabindex="-1">x轴name的位置 <a class="header-anchor" href="#x轴name的位置" aria-label="Permalink to &quot;x轴name的位置&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">xAxis: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                name: &#39;报表日&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                type: &#39;category&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                axisLabel: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    interval: 0</span></span>
<span class="line"><span style="color:#A6ACCD;">                }, // x轴显示完整</span></span>
<span class="line"><span style="color:#A6ACCD;">                nameTextStyle: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    padding: [0, 0, 0, 20] // 四个数字分别为上右下左与原位置距离</span></span>
<span class="line"><span style="color:#A6ACCD;">                },</span></span>
<span class="line"><span style="color:#A6ACCD;">                data: []</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span></code></pre></div><h2 id="y轴的网格线的配置" tabindex="-1">Y轴的网格线的配置 <a class="header-anchor" href="#y轴的网格线的配置" aria-label="Permalink to &quot;Y轴的网格线的配置&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yAxis</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">企业数</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">提交率（%）</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#F07178;">min</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#F07178;">max</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#F07178;">interval</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#F07178;">offset</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#F07178;">axisLabel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#F07178;">formatter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{value} %</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#F07178;">splitLine</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 网格线</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#F07178;">show</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">            ]</span><span style="color:#89DDFF;">,</span></span></code></pre></div><h2 id="工具栏的配置" tabindex="-1">工具栏的配置 <a class="header-anchor" href="#工具栏的配置" aria-label="Permalink to &quot;工具栏的配置&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">toolbox: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                right: &#39;-5px&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                top: &#39;-10px&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                backgroundColor: &#39;rgba(0,0,0,0)&#39;, // 工具箱背景颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">                borderColor: &#39;#ccc&#39;, // 工具箱边框颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">                borderWidth: 0, // 工具箱边框线宽，单位px，默认为0（无边框）</span></span>
<span class="line"><span style="color:#A6ACCD;">                padding: 15, // 工具箱内边距，单位px，默认各方向内边距为5，</span></span>
<span class="line"><span style="color:#A6ACCD;">                // 接受数组分别设定上右下左边距，同css</span></span>
<span class="line"><span style="color:#A6ACCD;">                itemGap: 10, // 各个item之间的间隔，单位px，默认为10，</span></span>
<span class="line"><span style="color:#A6ACCD;">                // 横向布局时为水平间隔，纵向布局时为纵向间隔</span></span>
<span class="line"><span style="color:#A6ACCD;">                itemSize: 16,  </span></span>
<span class="line"><span style="color:#A6ACCD;">                feature: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    magicType: { </span></span>
<span class="line"><span style="color:#A6ACCD;">                        show: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        barWidth: 30,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        type: [&#39;bar&#39;, &#39;line&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">                        title: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                            line: &#39;折线图&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                            bar: &#39;柱状图&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        }</span></span>
<span class="line"><span style="color:#A6ACCD;">                    },</span></span>
<span class="line"><span style="color:#A6ACCD;">                    restore: { show: true }</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span></code></pre></div>`,13),e=[o];function t(c,r,C,i,y,D){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{F as __pageData,h as default};
