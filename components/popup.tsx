import { useEffect, useState } from "react";
import styles from "../styles/Popup.module.scss";
import InformationComponent from "./information";
import { popups } from "../modules/popups";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import data from "../public/Major_Names.json";
import { key } from "../.env/firebase"
// impoty { mat-c}
type props = {
  dataType: string;
};
const Popup = ({ dataType }: props) => {
  const [showPop, display] = useState(false);
  const [location, selectLocation] = useState("");
  const [showFilter, displayFilter] = useState(false);
  const [major, changeMajor] = useState("")

  // useEffect(()=>{
  //   console.log(location,major)
  // },[location,major])

  return (
    <div className={styles.index}>
      {dataType == popups.filter && (
        <div>
          <button
            className={styles.filter_button}
            onClick={() => {
              displayFilter(!showFilter);
            }}
          >
            <span className="material-icons">
              {!showFilter ? "expand_more" : "expand_less"}
            </span>
            <p>filter:</p>
          </button>
          <div
            className={
              showFilter
                ? `${styles.filter_container} ${styles.openheight}`
                : `${styles.filter_container} ${styles.closeheight}`
            }
          >
            <p>country</p>
            <GooglePlacesAutocomplete
              apiKey= { key }
              selectProps={{
                location,
                onChange: selectLocation,
                styles: {
                  input: (provided: any) => ({
                    ...provided,
                    height: "60px",
                    width: "39vw",
                    color: "#486966"
                  }),
                  option: (provided: any) => ({
                    ...provided,
                    color: "#486966",
                    height: "60px",
                    width: "39vw"
                  }),
                  singleValue: (provided: any) => ({
                    ...provided,
                    color: "#486966",
                    width: "39vw"
                  })
                }
              }}
            />
            <p>Major</p>
            <select name="major" id="major">
              {data["MAIN"].map((val) => (
                <option value={val["Major Name"]} key={val["Major Name"]} onClick={()=>changeMajor(val["Major Name"])}>
                  {val["Major Name"]}
                </option>
              ))}
            </select>
            <button onClick={()=>{console.log(location, major)}}>
              Filter
            </button>
          </div>
        </div>
      )}
      {dataType == popups.information && (
        <div
          className={
            showPop && dataType == popups.information
              ? `${styles.parent} ${styles.moveleft}`
              : `${styles.parent} ${styles.moveright}`
          }
        >
          <div className={styles.child}>
            <span
              className="material-icons"
              onClick={() => {
                console.log(!showPop);
                display(!showPop);
              }}
            >
              close
            </span>

            <div className={styles.inherit}>
              <InformationComponent
                page={popups.information}
              ></InformationComponent>
            </div>
          </div>
        </div>
      )}
      {dataType == popups.team && (
        <div
          className={
            showPop && dataType == popups.team
              ? `${styles.parent} ${styles.moveleft}`
              : `${styles.parent} ${styles.moveright}`
          }
        >
          <div className={styles.child}>
            <span
              className="material-icons"
              onClick={() => {
                console.log(!showPop);
                display(!showPop);
              }}
            >
              close
            </span>

            <div className={styles.inherit}>
              <InformationComponent page={popups.team}></InformationComponent>
            </div>
          </div>
        </div>
      )}
      {dataType == popups.information && !showPop && (
        <div onClick={() => display(true)}>
          <button>open</button>
        </div>
      )}
      {dataType == popups.team && !showPop && (
        <div onClick={() => display(true)}>
          <button>open</button>
        </div>
      )}
    </div>
  );
};
export default Popup;
