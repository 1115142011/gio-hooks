import React, { useEffect, useRef, useCallback } from 'react'
import useWillUnMount from './useWillUnMount'
/**
 * @param {Function} fn
 * @param {number} peried during time unite ms
 * tip: At component destroy auto cancel this interval
 * 因大量的耗时任务会导致 setInterval 丢帧，因此采用 setTimeout 实现
 */
export default function useInterval(fn, peried) {
  if (typeof fn !== 'function') {
    throw new TypeError(
      `useDebounce expect an function as firstly params but got a \`${typeof fn}\``
    )
  }

  if (!Number.isFinite(Number(peried))) {
    throw new Error(
      `useDebounce except a finite number as second params but got a \`${peried}\``
    )
  }

  const timer = useRef()
  const handler = useRef()
  const cancel = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current)
      timer.current = 0
    }
  }, [])
  const excutor = useCallback(
    (...args) => {
      const wait = Number(peried)
      timer.current = setTimeout(() => {
        handler.current(...args)
        excutor()
      }, wait)
    },
    [cancel, peried]
  )
  useEffect(() => {
    handler.current = fn
  }, [fn])
  useWillUnMount(cancel)
  return excutor
}
