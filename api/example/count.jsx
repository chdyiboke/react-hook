// https://codesandbox.io/ 在线工具
import React, { useState, useEffect } from "react";
import "./styles.css";
// import { useState, useEffect } from "react";
// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello Word</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count - 1)}>Click me -</button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount(count + 1)}>Click me +</button>
    </div>
  );
}