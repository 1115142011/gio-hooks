### gio-tools
1. gio :growing at input or output 
2. 对项目常用到的工具方法进行提炼
3. 野生前端一枚，期待您的宝贵意见

### install 
```js
npm install gio-tools or yarn add gio-tools
```
### api
*  <a href='#useDebounce'>useDebounce</a>
*  <a href='#useWillUnMount'>useWillUnMount</a>
*  <a href='#useThrottle'>useThrottle</a>
*  <a href='#useDidMount'>useDidMount</a>
*  <a href='#useTimeout'>useTimeout</a> 
*  <a href='#useInterval'>useInterval</a> 
  
  
### <span id='useDebounce'>useDebounce</span>
##### 防抖函数，使用setTimeout 实现，并且在组件销毁时会自动清除计时器，不会产生负作用。接收一个函数，和防抖周期，返回防抖包装后的函数
 * @param {fn } Function
 * @param {wait} number  delay time unite ms
```js
import {useDebounce}  from "gio-tools";
function App() {
  const [total, setTotal] = useState(0)
  const addHandle = () => {
    setTotal((prev) => prev + 1)
  }
  const increaseHandle = useDebounce(addHandle,500)
  return (
    <div>
      <button onClick={increaseHandle}>点击按钮</button>
      <div> {total}</div>
    </div>
  )
}
```
### <span id='useWillUnMount'>useWillUnMount</span>
##### 模拟组件销毁时的生命周期钩子
 * @param {fn } Function  callback runing on component Destory

```js
import {useWillUnMount}  from "gio-tools";
function App() {
 
  useWillUnMount(()=>console.log('组件销毁- do something')) 
  return (
    <div>
      <button onClick={testHand}>点击</button>
      <div> {total}</div>
    </div>
  )
}
```
### <span id='useThrottle'>useThrottle</span>
##### 节流函数，使用setTimeout 实现，并且在组件销毁时会自动清除计时器，不会产生负作用。接收一个函数，和节流周期，返回节流包装后的函数
 * @param {fn }  Function
 * @param {during } number  wait time unite ms

```js
import {useThrottle}  from "gio-tools";
function App() {
 
  const [total, setTotal] = useState(0)
  const addHandle = () => {
    setTotal((prev) => prev + 1)
  }

  const increaseHandle = useThrottle(addHandle,1000)
  return (
    <div>
      <button onClick={increaseHandle}>店家按钮</button>
      <div> {total}</div>
    </div>
  )
}

```
### <span id='useDidMount'>useDidMount</span>
##### 模拟组件挂载时的声明周期钩子，只会执行一次
 * @param {fn} Function
```js
import {useDidMount}  from "gio-tools";

function App() {
useDidMount(()=>console.log('组件挂载只会执行一次'))
  return (
    <div>
      <div> useDidMount</div>
    </div>
  )
}

```
### <span id='useTimeout'>useTimeout</span>
##### 延时器 对函数进行包装，使其延时执行，组件销毁时会自动清除，避免产生负作用，函数包装时不会立即执行需要主动调用
 * @param {Function} fn
 * @param {number} wait delay time unite ms
```js
import {useTimeout}  from "gio-tools";
function App() {
 
  const [total, setTotal] = useState(0)
  const addHandle = () => {
    setTotal((prev) => prev + 1)
  }

  const hand1 = useTimeout(()=>console.log('延时器 1000'),1000)
  const hand2 =  useTimeout(()=>console.log('延时器 800'),800)
  const increaseHandle = ()=>{
   hand1()
   hand2()
  }

  return (
    <div>
      <button onClick={increaseHandle}>点击按钮</button>
      <div> {total}</div>
    </div>
  )
}
```
### <span id='useInterval'>useInterval</span>
##### 定时器对函数进行包装，使其定时调用，组件销毁时会自动清除，避免产生负作用，函数包装时不会立即执行需要主动调用
##### 该方法使用 setTimeout 实现，因同步耗时任务大于定时器周期时，会导致定时器丢帧
 * @param {Function} fn
 * @param {number} wait delay time unite ms
```js
import {useInterval}  from "gio-tools";
function App() {
 
  const [total, setTotal] = useState(0)
  const addHandle = () => {
    setTotal((prev) => prev + 1)
  }

  const hand1 = useInterval(()=>console.log('定时器 1000'),1000)
  const hand2 =  useInterval(()=>console.log('定时器 800'),800)
  const increaseHandle = ()=>{
   hand1()
   hand2()
  }

  return (
    <div>
      <button onClick={increaseHandle}>点击按钮</button>
      <div> {total}</div>
    </div>
  )
}
```
### 规划
##### 项目分两部份 hooks 和工具函数。目前先实现了部分通用hooks.工具函数/hooks 会在后期逐步完善
* hooks (部分完成)
* 工具函数(待完善)
* 自动化测试(待完善)
* 完整的模块化打包(待完善)
