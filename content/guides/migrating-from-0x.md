+++
title = "Migrating from 0.x"
description = "Replace Repeat.of().times(n).repeat(...) with repeat(n, ...)."
lede = "1.0.0 replaces the builder with one static method. 0.0.9 and earlier used `Repeat.of().times(n).repeat(...)`."
weight = 20
+++

{{< callout kind="warning" >}}
Breaking change. The new `repeat` returns `void`; it no longer collects results into a list.
{{< /callout >}}

## Steps {#steps}

<ol class="steps">
<li>
<span class="step-num">1</span>
<div class="step-body">
<p class="step-title">Bump the version</p>
<pre class="chroma"><code>&lt;version&gt;<del>0.0.9</del> <span class="s">{{< version >}}</span>&lt;/version&gt;</code></pre>
</div>
</li>
<li>
<span class="step-num">2</span>
<div class="step-body">
<p class="step-title">Switch to the static import</p>
<pre class="chroma"><code><del>import io.github.repeat.Repeat;</del>
<span class="k">import static</span> io.github.repeat.Repeat.*;</code></pre>
</div>
</li>
<li>
<span class="step-num">3</span>
<div class="step-body">
<p class="step-title">Rewrite each call</p>
<p class="muted">Result ignored</p>
<pre class="chroma"><code><del>Repeat.of().times(3).repeat(i -&gt; { send(i); return null; });</del>
repeat(<span class="m">3</span>, i -&gt; send(i));</code></pre>
<p class="muted">Result used: collect it yourself</p>
<pre class="chroma"><code><del>List&lt;String&gt; ids = Repeat.of().times(3).repeat(i -&gt; "id-" + i);</del>
List&lt;String&gt; ids = <span class="k">new</span> ArrayList&lt;&gt;();
repeat(<span class="m">3</span>, i -&gt; ids.add(<span class="s">"id-"</span> + i));</code></pre>
</div>
</li>
</ol>

## Removed types {#removed}

<div class="table-frame">

| 0.0.9 | 1.0.0 and later |
|---|---|
| `Repeat.of()` → `RepeatContext` | [`Repeat.repeat(int, IndexedAction)`](/api/#repeat-method) |
| `RepeatCallback<T, E>` | [`IndexedAction<E>`](/api/#indexed-action) (no return value) |
| `doWithRepeat(int)` | [`accept(int)`](/api/#accept) |
| `RepeatOperations`, `RepeatTemplate` | <span class="muted">Removed; no replacement needed</span> |

</div>
