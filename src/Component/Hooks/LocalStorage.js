import  { useEffect, useState } from 'react'

const PRIFIX='code-editor';
export default function LocalStorage(key, initialValue) {
   const prefixKey=PRIFIX+key;
   const [value,setValue] =useState(()=>{
     const jsonValue=localStorage.getItem(prefixKey);
     if(jsonValue!=null) return JSON.parse(jsonValue);

     if(typeof initialValue==='function'){
        return initialValue();
     }else{
        return initialValue
     }
   })

   useEffect(()=>{
    localStorage.setItem(prefixKey,JSON.stringify(value))
   },[prefixKey,value]);
  return ([value,setValue]);
}
