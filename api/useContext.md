# useContext

```
const value = useContext(MyContext);
```

例子例子例子：
```
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);


使用
const theme = useContext(ThemeContext);
```




