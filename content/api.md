+++
title = "API reference"
description = "Repeat and IndexedAction: signatures, behavior, examples."
lede = "Package `io.github.repeat`: one class, one functional interface. Generated Javadoc for every version is on [javadoc.io](https://javadoc.io/doc/io.github.java-repeat/repeat/latest/io/github/repeat/package-summary.html)."
+++

## Summary {#summary}

<div class="table-frame">

| Type | Member | Description |
|---|---|---|
| [`Repeat`](#repeat) | [`repeat`](#repeat-method)`(int, IndexedAction<E>)` | Runs the action `times` times with the zero-based index. |
| [`IndexedAction<E>`](#indexed-action) | [`accept`](#accept)`(int)` | The action your lambda implements; may throw `E`. |

</div>

<section class="api-section">
<div class="api-head">

## Repeat {#repeat}

<span class="badge">final class</span> <span class="badge badge-accent">since 1.0.0</span>

</div>

Kotlin-style function for running code multiple times. Designed for static import. Holds only static members; it cannot be instantiated.

```java
public final class Repeat
```

### repeat {#repeat-method .member}

```java
public static <E extends Throwable> void repeat(
        final int times,
        final IndexedAction<E> action) throws E
```

Executes the action the given number of times, passing the zero-based index of each iteration. Like Kotlin's `repeat`, a zero or negative `times` runs nothing.

<dl class="params">
<dt>TYPE PARAMETERS</dt>
<dd><span><code>E</code> — the exception type the action may throw; inferred from the lambda.</span></dd>
<dt>PARAMETERS</dt>
<dd><span><code>times</code> — the number of times to execute the action</span><span><code>action</code> — the action to execute; receives the index</span></dd>
<dt>THROWS</dt>
<dd><span><code>E</code> — if the action fails; remaining iterations are not executed</span></dd>
</dl>

#### Behavior {#behavior}

<div class="table-frame">

| When | Result |
|---|---|
| `times > 0` | Calls `action.accept(i)` for `i = 0 … times - 1`, in order, on the calling thread. |
| `times <= 0` | Does nothing. The action is never called. |
| action throws at index `k` | Indexes `0 … k` ran. The exception propagates unchanged, not wrapped. |
| `action == null` | `NullPointerException` on the first iteration; nothing if `times <= 0`. |

</div>

#### Examples {#examples}

```java
import static io.github.repeat.Repeat.*;

// method reference: collect the indexes 0, 1, 2
List<Integer> indexes = new ArrayList<>();
repeat(3, indexes::add);

// ignore the index
StringBuilder out = new StringBuilder();
repeat(2, i -> out.append("x"));   // "xx"
```

<p class="links"><a href="https://github.com/java-repeat/java-repeat/blob/main/src/main/java/io/github/repeat/Repeat.java">View source</a><a href="https://javadoc.io/doc/io.github.java-repeat/repeat/latest/io/github/repeat/Repeat.html">Javadoc: Repeat</a></p>
</section>

<section class="api-section">
<div class="api-head">

## IndexedAction&lt;E&gt; {#indexed-action}

<span class="badge">functional interface</span> <span class="badge badge-accent">since 1.0.0</span>

</div>

An action that receives the zero-based index of the current iteration. You rarely name it: a lambda or method reference passed to `repeat` becomes one.

```java
@FunctionalInterface
public interface IndexedAction<E extends Throwable>
```

<dl class="params">
<dt>TYPE PARAMETERS</dt>
<dd><span><code>E</code> — the exception type <code>accept</code> may throw. For a lambda that throws nothing checked, the compiler infers <code>RuntimeException</code>, so callers declare nothing.</span></dd>
</dl>

### accept {#accept .member}

```java
void accept(int index) throws E
```

<dl class="params">
<dt>PARAMETERS</dt>
<dd><span><code>index</code> — zero-based index of the current iteration</span></dd>
<dt>THROWS</dt>
<dd><span><code>E</code> — any exception the action raises</span></dd>
</dl>

#### Ways to write one {#forms}

<div class="table-frame">

| Form | Example | E is |
|---|---|---|
| Lambda | `i -> log.info("run " + i)` | `RuntimeException` |
| Method reference | `indexes::add` | `RuntimeException` |
| Throwing lambda | `i -> Files.delete(paths[i])` | `IOException` |
| Stored in a variable | `IndexedAction<IOException> a = i -> ...;` | as declared |

</div>

<p class="links"><a href="https://github.com/java-repeat/java-repeat/blob/main/src/main/java/io/github/repeat/IndexedAction.java">View source</a><a href="https://javadoc.io/doc/io.github.java-repeat/repeat/latest/io/github/repeat/IndexedAction.html">Javadoc: IndexedAction</a></p>
</section>
