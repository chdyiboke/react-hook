# react 父级组件更新数据触发子组件更新

突然问来，onchang监听没起作用，困扰了我一下，其实是更新子组件的问题，特此记录。

## 更新子组件问题

子组件显示父组件传来的props 做更新有 以下2种常用方式：

1. 直接使用

```
class Child extends Component {
    render() {
        return <div>{this.props.someThings}</div>
    }
}

```

这种方式可以直接在子组件中使用，方便快捷，父组件的更新的数据直接影响子组件的值。


2. 转换成自己的state

```
    class Child extends Component {
      constructor(props) {
        super(props);
        this.state = {
          someThings: props.someThings
        };
      }
      componentWillReceiveProps(nextProps) {
        this.setState({someThings: nextProps.someThings});
      }
      render() {
        return <div>{this.state.someThings}</div>
      }
    }
```
但是，遇到一个问题，是在渲染第一次是正常的，之后怎么也不做渲染了。

原来是 提升react加载性能的 shouldComponentUpdate方法，该方法会阻止 states 的重新渲染

## 其次，是onchange的更新问题


`通过DOM对象赋值不会触发`

实际过程：
```
一、当input捕获到焦点后，系统储存当前值

二、当input焦点离开后，判断当前值与之前存储的值是否不等，如果为true则触发onchange事件。

```

