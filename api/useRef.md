# useRef

```
const refContainer = useRef(initialValue);

```
返回一个可变的 ref 对象   

DOM refs, 例子例子例子：
```
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

```

不仅可以用于 DOM refs。「ref」 对象是一个 current 属性可变且可以容纳任意值的通用容器，类似于一个 class 的实例属性

```
const intervalRef = useRef();

intervalRef.current = id;
  // ...
  function handleCancelClick() {
    clearInterval(intervalRef.current);
  }
```

