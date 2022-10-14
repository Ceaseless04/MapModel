import { setDefaultResultOrder } from 'dns';
import type { NextPage } from 'next'
import React from 'react';
import { useEffect } from 'react';
import { urlToHttpOptions } from 'url';
import Error from '../components/error'
import data from '../public/Major_Names.json'

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

  function fetchMajorLit(element: any){

    for(let major of data["MAIN"]){
      // let ele = <option></option> as unknown as HTMLOptionElement;
      // ele.value = major['Major Name']
      element.appendChild(<option>{major['Major Name']}</option> )
      
    }
  }

  // to call error call error(code)
  // the code is in errorCodes.tsx

  return (
    <div>
      <div>
       
      </div>
      <button onClick={()=>{fetchMajorLit(document.getElementById('test'))}}>
        activate error
      </button>
     
      <Error code={err.code} boolean={err.active}></Error>   
    </div>
  )
}

export default Home
