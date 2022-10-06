import { setDefaultResultOrder } from 'dns';
import type { NextPage } from 'next'
import React from 'react';
import { useEffect } from 'react';
import Error from '../components/error'


const Home: NextPage = () => {
  let [err, setError] = React.useState({active: false,code: 0})
 
 
  async function error(code: number){
    setError({active: !err.active,code: code})
    if(!err.active){
      await new Promise(f => setTimeout(f, 3000));
      // restore defaults
      setError({active: err.active,code: code})
    }
  }


  // to call error call error(code)
  // the code is in errorCodes.tsx

  return (
    <div>
      <div>
      </div>
      <button onClick={()=>{error(1)}}>
        activate error
      </button>
      <Error code={err.code} boolean={err.active}></Error>   
    </div>
  )
}

export default Home
