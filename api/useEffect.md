# useEffect

```
useEffect(didUpdate);

```

ta是
componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合  

每次渲染后都执行,每次运行 effect 的同时，DOM 都已经更新完毕。  

componentWillUnmount:   如果你的 effect 返回一个函数，React 将会在执行清除操作时调用它.   

 一个函数中可以写多个useEffect。  


参数：
```
useEffect(
  () => {
    const subscription = props.source.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  },
  [props.source],
);

只有当 props.source 改变后才会重新创建订阅(调用useEffect)。
依赖  props.source
```
