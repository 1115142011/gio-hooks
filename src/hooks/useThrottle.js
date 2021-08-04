import React, { useCallback, useRef } from 'react'
import useWillUnMount from './useWillUnMount'
/**
 * @param {Function} fn 
 * @param {number} during wait time unite ms
 * tip: At component destory auto cancel throttle timer
*/
export default function useThrottle(fn, during) {
  if (typeof fn !== 'function') {
    throw new TypeError(
      `useDebounce expect an function as firstly params but got a \`${typeof fn}\``
    )
  }

  if (!Number.isFinite(Number(during))) {
    throw new Error(
      `useDebounce except a finite number as second params but got a \`${during}\``
    )
  }
  const timerRef = useRef()
  const cancel = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = 0
    }
  }, [])

  const callBack = useCallback(
    (...args) => {
      if (timerRef.current) return
      fn(...args)
      const wait = Number(during)
      timerRef.current = setTimeout(() => {
        cancel()
      }, wait)
    },
    [fn, cancel, during]
  )
  useWillUnMount(cancel)
  return callBack
}
