import type { NextPage } from "next";
import React from "react";
import Error from "../components/error";
import SideNav from "../components/sideNav";
import style from "../styles/Home.module.scss"


const Home: NextPage = () => {
  let [err, setError] = React.useState({ active: false, code: 0 });

  async function error(code: number) {
    setError({ active: !err.active, code: code });
    if (!err.active) {
      await new Promise((f) => setTimeout(f, 3000));
      // restore defaults
      setError({ active: err.active, code: code });
    }
  }

  

  // to call error call error(code)
  // the code is in errorCodes.tsx

  return (
    <div>
      <div className={style.parent}>
        <SideNav  imageUrl="imageUrl" name="Harry Potter" course="magic" city="hogwarts" country="United Kingdom"></SideNav>
        <div className={style.right}>
          <button>Information</button> 
          <button
            onClick={() =>  error(1)} >
            activate error
          </button>
        </div>
      </div>

      <Error code={err.code} boolean={err.active}></Error>
    </div>
  );
};

export default Home;
