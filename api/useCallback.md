# useCallback

return 缓存方法

```
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);

```
调用：
memoizedCallback();



