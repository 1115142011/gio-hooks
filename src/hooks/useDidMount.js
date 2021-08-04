import React,{useEffect} from 'react'
/**
 * @param {Function} fn callback runing in componentDidMount
*/
export default function useDidMount(fn) {
    useEffect(()=>{
        if(typeof fn === 'function'){
            fn()
        }
    },[])
}
