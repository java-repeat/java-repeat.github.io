+++
title = "Checked exceptions"
description = "How E is inferred and what happens when an iteration throws."
lede = "The action can throw a checked exception. It reaches the caller unchanged, and the loop stops."
weight = 10
+++

## Why it matters {#why}

`IntStream.range(0, n).forEach(...)` takes an `IntConsumer`, which cannot throw checked exceptions. The usual workaround wraps and unwraps.

<div class="compare-code">
<div>
<span class="label">STREAMS</span>

```java
IntStream.range(0, 3).forEach(i -> {
    try {
        Files.createFile(path(i));
    } catch (IOException e) {
        throw new UncheckedIOException(e);
    }
});
```

</div>
<div class="preferred">
<span class="label">JAVA-REPEAT</span>

```java
repeat(3, i -> Files.createFile(path(i)));
// throws IOException
```

</div>
</div>

## How the type is inferred {#inference}

`repeat` is declared `<E extends Throwable> ... throws E`. The compiler picks `E` from what the lambda throws:

- Throws nothing checked: `E` is `RuntimeException`; nothing to declare.
- Throws one checked type: `E` is that type, for example `IOException`.
- Throws several: `E` is their common supertype, often `Exception`. Catch inside the action if you need them apart.

## A failure stops the loop {#stops}

```java
repeat(5, i -> {
    ran.add(i);
    if (i == 1) throw new IOException("ERROR!");
});
// ran == [0, 1]; the IOException reaches the caller
```

<div class="iterations" role="img" aria-label="Iterations 0 and 1 run; iteration 1 throws; iterations 2, 3 and 4 never run">
<div class="ran"><b>0</b>ran</div>
<div class="threw"><b>1</b>threw</div>
<div class="skipped"><b>2</b>skipped</div>
<div class="skipped"><b>3</b>skipped</div>
<div class="skipped"><b>4</b>skipped</div>
</div>

## Keep going after a failure {#continue}

To run every iteration regardless, catch inside the action and collect what failed.

```java
List<IOException> failures = new ArrayList<>();
repeat(5, i -> {
    try {
        Files.createFile(path(i));
    } catch (IOException e) {
        failures.add(e);
    }
});
```
