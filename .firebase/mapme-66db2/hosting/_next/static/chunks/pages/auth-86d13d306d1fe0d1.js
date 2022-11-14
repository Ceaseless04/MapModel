(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[473],{2304:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth",function(){return __webpack_require__(4743)}])},4743:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7294),_styles_Global_module_scss__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(2625),_styles_Global_module_scss__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_styles_Global_module_scss__WEBPACK_IMPORTED_MODULE_10__),_styles_Auth_module_scss__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(9799),_styles_Auth_module_scss__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_styles_Auth_module_scss__WEBPACK_IMPORTED_MODULE_11__),_env_firebase__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4825),_public_Major_Names_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6188),_components_error__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8117),firebase_storage__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1153),_firebase__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(6228),firebase_firestore__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(6257),react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(6594),next_router__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(1163),next_router__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);let dbInstance=(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.hJ)(_firebase__WEBPACK_IMPORTED_MODULE_6__.R,"users"),dbEmailInstance=(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.hJ)(_firebase__WEBPACK_IMPORTED_MODULE_6__.R,"emails"),Authentication=()=>{let[err,setError]=react__WEBPACK_IMPORTED_MODULE_1__.useState({active:!1,code:0,error:!0}),[pageNo,change]=react__WEBPACK_IMPORTED_MODULE_1__.useState(1),[imageUrl,changeUrl]=react__WEBPACK_IMPORTED_MODULE_1__.useState(""),[location,selectLocation]=react__WEBPACK_IMPORTED_MODULE_1__.useState(null),[userInformation,addInfo]=react__WEBPACK_IMPORTED_MODULE_1__.useState({email:"",name:"",major:"",country:"",city:"",picture:"",lat:null,lng:null}),router=next_router__WEBPACK_IMPORTED_MODULE_9___default();async function checkEmail(email,n){if(email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/))return signInUser(email,n);await error(5)}async function error(code){let isError=!(arguments.length>1)||void 0===arguments[1]||arguments[1];setError({active:!err.active,code:code,error:isError}),err.active||(await new Promise(f=>setTimeout(f,3e3)),setError({active:err.active,code:code,error:isError}))}async function uploadFile(){let uploadRef=(0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.iH)(storage,"storage/"+(null==image?void 0:image.name)),uploadTask=await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.B0)(uploadRef,image),imageUrl=await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.Jt)(uploadTask.ref).then(downloadURL=>(changeUrl(downloadURL),userInformation.picture=downloadURL,downloadURL)).catch(async er=>{await error(2)});return imageUrl}function getInputVal(name){return document.getElementById(name).value}async function signInUser(email,n){let q=(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.IO)(dbEmailInstance,(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.ar)("email","==",email)),querySnapshot=await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.PL)(q);querySnapshot.size<1?await (_env_firebase__WEBPACK_IMPORTED_MODULE_2__.I8.sendSignInLinkToEmail(email,actionCodeSettings).then(()=>(userInformation.email=email,window.localStorage.setItem("email",email),error(6,!1),!0)).catch(async error=>{error.code,error.message,await error(1)}),!1):(change(n),querySnapshot.forEach(doc=>{}))}(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{let email=window.location.href.split("/")[3];if(email.split("?").length>1){let emailAddress=email.split("?")[1].split("=")[1].split("&")[0].replace("%40","@");window.localStorage.setItem("email",emailAddress),document.getElementById("email").value=emailAddress,checkEmail(emailAddress,2)}},[]);let getLatLng=async placeId=>{try{let res=await fetch("https://maps.googleapis.com/maps/api/geocode/json?place_id=".concat(placeId,"&key=").concat(_env_firebase__WEBPACK_IMPORTED_MODULE_2__.Jy)),obj=await res.json(),lat=obj.results[0].geometry.location.lat,lng=obj.results[0].geometry.location.lng;return userInformation.lat=lat,userInformation.lng=lng,await uploadFile(),await addInfo({email:window.localStorage.getItem("email")||getInputVal("email"),name:getInputVal("name"),major:getInputVal("major"),city:null==location?void 0:location.label.split(",").slice(0,-1),country:obj.results[0].formatted_address.split(",").slice(-1).join().trim(),picture:imageUrl,lat:obj.results[0].geometry.location.lat,lng:obj.results[0].geometry.location.lng}),(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.ET)(dbInstance,userInformation).then(async()=>{await error(3,!1),router.replace("/")}),{lat:lat,lng:lng}}catch(err){console.log(err)}},[Image]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),[image,setImage]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),[preview,setPreview]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{if(image){let reader=new FileReader;reader.onloadend=()=>{setPreview(reader.result)},reader.readAsDataURL(image)}},[image]);let storage=(0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.cF)();async function next(e,n){switch(e.preventDefault(),n){case 2:let email=getInputVal("email");window.localStorage.setItem("email",email),checkEmail(email,n);break;case 3:userInformation.name=getInputVal("name"),userInformation.major=getInputVal("major"),userInformation.city=null==location?void 0:location.label.split(",").slice(0,-1),userInformation.country=null==location?void 0:location.label.split(",").slice(-1).join().trim(),userInformation.email=getInputVal("email"),""==userInformation.name||""==userInformation.major||""==userInformation.city||""==userInformation.country||""==userInformation.email?""==userInformation.city?await error(12):""==userInformation.name?await error(9):""==userInformation.major?await error(10):""==userInformation.country?await error(11):""==userInformation.email?await error(5):await error(4):change(n);break;case 0:image?(await getLatLng(location.value.place_id),window.localStorage.clear()):await error(11);break;default:change(n)}}function back(e,n){e.preventDefault(),change(n)}return(0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.iH)(storage,"storage"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:_styles_Global_module_scss__WEBPACK_IMPORTED_MODULE_10___default().font,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form",{className:_styles_Auth_module_scss__WEBPACK_IMPORTED_MODULE_11___default().center_flex,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:1==pageNo?_styles_Auth_module_scss__WEBPACK_IMPORTED_MODULE_11___default().form:_styles_Global_module_scss__WEBPACK_IMPORTED_MODULE_10___default().hidden,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{className:_styles_Auth_module_scss__WEBPACK_IMPORTED_MODULE_11___default().prompt_email,children:"Type your student email"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"text",placeholder:"Email",name:"email",id:"email"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_styles_Auth_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bottomBtns,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"".concat(_styles_Global_module_scss__WEBPACK_IMPORTED_MODULE_10___default().button_primary," ").concat(_styles_Global_module_scss__WEBPACK_IMPORTED_MODULE_10___default().button),onClick:e=>next(e,2),children:" Next "})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:2==pageNo?_styles_Auth_module_scss__WEBPACK_IMPORTED_MODULE_11___default().form:_styles_Global_module_scss__WEBPACK_IMPORTED_MODULE_10___default().hidden,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{children:"Add information"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:_styles_Auth_module_scss__WEBPACK_IMPORTED_MODULE_11___default().prompts_Info,children:"Name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{className:_styles_Auth_module_scss__WEBPACK_IMPORTED_MODULE_11___default().nameInput,type:"text",placeholder:"Name",name:"name",id:"name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:_styles_Auth_module_scss__WEBPACK_IMPORTED_MODULE_11___default().prompts_Info,children:"Major"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select",{className:_styles_Auth_module_scss__WEBPACK_IMPORTED_MODULE_11___default().selectMajor,name:"major",id:"major",children:_public_Major_Names_json__WEBPACK_IMPORTED_MODULE_3__.P.map(val=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:"Select your Major"==val["Major Name"]?"":val["Major Name"],children:val["Major Name"]},val["Major Name"]))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:_styles_Auth_module_scss__WEBPACK_IMPORTED_MODULE_11___default().prompts_Info,children:"Type your city of origin below"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_styles_Auth_module_scss__WEBPACK_IMPORTED_MODULE_11___default().input,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__.ZP,{apiKey:_env_firebase__WEBPACK_IMPORTED_MODULE_2__.Jy,selectProps:{location,onChange:selectLocation,styles:{input:provided=>({...provided,height:"60px",width:"39vw",color:"#486966"}),option:provided=>({...provided,color:"#486966",height:"60px",width:"39vw"}),singleValue:provided=>({...provided,color:"#486966",width:"39vw"})}}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{className:_styles_Auth_module_scss__WEBPACK_IMPORTED_MODULE_11___default().error_display,children:["Country Of Origin: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong",{children:null==location?void 0:location.label.split(",").slice(-1)})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["City of Origin: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong",{children:null==location?void 0:location.label.split(",").slice(0,-1)})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:_styles_Auth_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bottomBtns,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"".concat(_styles_Global_module_scss__WEBPACK_IMPORTED_MODULE_10___default().button_secondary," ").concat(_styles_Global_module_scss__WEBPACK_IMPORTED_MODULE_10___default().button),onClick:e=>back(e,1),children:" back "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"".concat(_styles_Global_module_scss__WEBPACK_IMPORTED_MODULE_10___default().button_primary," ").concat(_styles_Global_module_scss__WEBPACK_IMPORTED_MODULE_10___default().button),onClick:e=>next(e,3),children:" Next "})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:3===pageNo?_styles_Auth_module_scss__WEBPACK_IMPORTED_MODULE_11___default().form:_styles_Global_module_scss__WEBPACK_IMPORTED_MODULE_10___default().hidden,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{children:"Upload your photo"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:preview,style:{objectFit:"contain"},width:"20%",height:"50%"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"file",accept:"image/*",async onChange(event){let file=event.target.files[0];File?setImage(file):await error(1)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:_styles_Auth_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bottomBtns,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"".concat(_styles_Global_module_scss__WEBPACK_IMPORTED_MODULE_10___default().button_secondary," ").concat(_styles_Global_module_scss__WEBPACK_IMPORTED_MODULE_10___default().button),onClick:e=>back(e,2),children:" back "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"".concat(_styles_Global_module_scss__WEBPACK_IMPORTED_MODULE_10___default().button_primary," ").concat(_styles_Global_module_scss__WEBPACK_IMPORTED_MODULE_10___default().button),onClick:e=>next(e,0),children:" Next "})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_error__WEBPACK_IMPORTED_MODULE_4__.Z,{code:err.code,boolean:err.active,isError:err.error})]})},actionCodeSettings={url:"http://localhost:3000/verify/",handleCodeInApp:!0};__webpack_exports__.default=Authentication},9799:function(module){module.exports={body:"Auth_body__KL0nB",form:"Auth_form__l3O9T",bottomBtns:"Auth_bottomBtns__vM07t",input:"Auth_input__KUi2x",center_flex:"Auth_center_flex__EbduM",prompt_email:"Auth_prompt_email__UnUZ7",prompts_Info:"Auth_prompts_Info__p_BcE",error_display:"Auth_error_display__DDpqo",nameInput:"Auth_nameInput__2cOAp"}}},function(__webpack_require__){__webpack_require__.O(0,[16,590,161,204,316,774,888,179],function(){return __webpack_require__(__webpack_require__.s=2304)}),_N_E=__webpack_require__.O()}]);