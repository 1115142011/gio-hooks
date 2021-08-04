import React, { useEffect, useCallback, useRef } from 'react'
import useWillUnMount from './useWillUnMount'
/**
 * @param {Function} fn
 * @param {number} wait delay time unite ms
 * tip: At component destroy auto this timer
 */

export default function useTimout(fn, wait) {
  if (typeof fn !== 'function') {
    throw new TypeError(
      `useDebounce expect an function as firstly params but got a \`${typeof fn}\``
    )
  }

  if (!Number.isFinite(Number(wait))) {
    throw new Error(
      `useDebounce except a finite number as second params but got a \`${wait}\``
    )
  }
  const timer = useRef()
  const cancel = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current)
      timer.current = 0
    }
  }, [])

  const excutor = useCallback(
    (...args) => {
      const delay = Number(wait)
      timer.current = setTimeout(() => {
        fn(...args)
      }, delay)
    },
    [cancel,fn],
  )
  useWillUnMount(cancel)
  return excutor
}
