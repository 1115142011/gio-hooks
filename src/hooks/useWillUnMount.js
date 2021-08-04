import React, { useEffect,useRef } from 'react'
/**
 * @param {Function} fn callback runing on component Destory
 * tip:因函数传递-在组件更新是会变成新的引用，导致组件更新，因此使用两个 effect
*/
export default function useWillUnMount(fn) {
  const handleRef = useRef()
  useEffect(() => {
    handleRef.current = fn
  }, [fn])
  useEffect(()=>{
    return () => {
      if(typeof handleRef.current ==='function'){
        fn()
      }
    }
  },[handleRef])
}
