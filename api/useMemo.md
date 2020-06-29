# useMemo

return 缓存数据

```
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

```

作为性能优化的手段, 请不要在这个函数内部执行与渲染无关的操作

useMemo 可以包裹列表单表项，提升性能
