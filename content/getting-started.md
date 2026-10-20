+++
title = "Getting started"
crumb = "Start"
description = "Add the dependency and make your first call."
lede = "Add one dependency, statically import `Repeat.*`, and call `repeat`."
+++

## Requirements {#requirements}

- Java 8 or later.
- No runtime dependencies.

## Install {#install}

### Maven

```xml
<dependency>
  <groupId>io.github.java-repeat</groupId>
  <artifactId>repeat</artifactId>
  <version>1.0.1</version>
</dependency>
```

### Gradle

```kotlin
implementation("io.github.java-repeat:repeat:1.0.1")
```

## Your first call {#first-call}

```java
import static io.github.repeat.Repeat.*;

repeat(3, i -> System.out.println("attempt " + i));
```

<p class="output-label">Output</p>
<pre class="output">attempt 0
attempt 1
attempt 2</pre>

The lambda receives the zero-based index of each iteration. A zero or negative count does nothing.

## Throwing checked exceptions {#checked}

The action may throw. The exception type is inferred, so the caller declares it as if it had written the loop itself.

```java
void createFiles() throws IOException {
    repeat(3, i -> Files.createFile(Paths.get("file-" + i)));
}
```

{{< callout >}}
If an iteration throws, the remaining iterations do not run. See [Checked exceptions](/guides/checked-exceptions/).
{{< /callout >}}

## Next {#next}

- [API reference](/api/): the full contract of `repeat(int, IndexedAction)`.
- [Migrating from 0.x](/guides/migrating-from-0x/): if you used `Repeat.of().times(n)`.
