(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[143],{2841:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/verify",function(){return __webpack_require__(343)}])},4825:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{I8:function(){return auth},Jy:function(){return key}});var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1902);__webpack_require__(9085),__webpack_require__(2419);let key="AIzaSyDcjNrNrDamH1BaZ6BtgvWY3ENNx5QXoM4",firebaseApp=firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.Z.initializeApp({apiKey:key,authDomain:"mapme-66db2.firebaseapp.com",projectId:"mapme-66db2",storageBucket:"mapme-66db2.appspot.com",messagingSenderId:"272557516746",appId:"1:272557516746:web:a9574d74753be2c4ecd133",measurementId:"G-QP4EDCX1J1"});firebaseApp.firestore();let auth=firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.Z.auth()},6228:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{R:function(){return firestore}});var firebase_app__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5503),firebase_firestore__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6257);let app=(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.ZF)({apiKey:"AIzaSyDcjNrNrDamH1BaZ6BtgvWY3ENNx5QXoM4",authDomain:"mapme-66db2.firebaseapp.com",projectId:"mapme-66db2",storageBucket:"mapme-66db2.appspot.com",messagingSenderId:"272557516746",appId:"1:272557516746:web:a9574d74753be2c4ecd133",measurementId:"G-QP4EDCX1J1"}),firestore=(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.ad)(app)},343:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),firebase_firestore__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6257),_firebase__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6228),_env_firebase__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4825),_styles_Verify_module_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9044),_styles_Verify_module_scss__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_styles_Verify_module_scss__WEBPACK_IMPORTED_MODULE_6__),next_router__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1163),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(7294);let dbInstance=(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.hJ)(_firebase__WEBPACK_IMPORTED_MODULE_2__.R,"emails"),Verify=()=>{let[email,change]=(0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);(0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{_env_firebase__WEBPACK_IMPORTED_MODULE_3__.I8.isSignInWithEmailLink(window.location.href)&&(change(window.localStorage.getItem("email")),email||(email=window.localStorage.getItem("email")),_env_firebase__WEBPACK_IMPORTED_MODULE_3__.I8.signInWithEmailLink(email||"",window.location.href).then(result=>{window.localStorage.removeItem("email"),window.localStorage.setItem("email",email||""),(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.ET)(dbInstance,{email:email}).then(()=>{console.log("added")}),router.replace("/auth?email="+email.replace("@","%40"))}).catch(error=>{console.log(error)}))},[]);let router=(0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_styles_Verify_module_scss__WEBPACK_IMPORTED_MODULE_6___default().parent,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:["redirecting... if page does not redirect click here",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:()=>router.replace("/auth?email="+email.replace("@","%40")),children:"redirect me"})]})})};__webpack_exports__.default=Verify},9044:function(module){module.exports={parent:"Verify_parent__UeLD3"}}},function(__webpack_require__){__webpack_require__.O(0,[16,590,161,774,888,179],function(){return __webpack_require__(__webpack_require__.s=2841)}),_N_E=__webpack_require__.O()}]);