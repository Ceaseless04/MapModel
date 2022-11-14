"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{19:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$q:function(){return rl},AK:function(){return Cl},Ab:function(){return kl},B$:function(){return na},Bt:function(){return xl},Cf:function(){return jc},EK:function(){return nt},ET:function(){return pl},Eo:function(){return ia},F8:function(){return ih},Fc:function(){return ja},GL:function(){return El},IO:function(){return Mh},IX:function(){return Fa},Ix:function(){return za},JU:function(){return sa},Jj:function(){return th},K9:function(){return F},Ky:function(){return ct},L$:function(){return Xa},Lx:function(){return zh},Lz:function(){return eh},Me:function(){return jt},Mx:function(){return Wa},PL:function(){return dl},PU:function(){return vl},Pb:function(){return Ya},QT:function(){return al},ST:function(){return Ka},TF:function(){return Ha},TQ:function(){return jh},UQ:function(){return _l},Ub:function(){return D},W:function(){return ol},WA:function(){return L},Wi:function(){return qc},Wu:function(){return Hh},Xb:function(){return ut},Xk:function(){return fl},Xo:function(){return Lh},ad:function(){return La},ar:function(){return $h},at:function(){return Yc},b9:function(){return qh},cf:function(){return Il},e0:function(){return Qh},fH:function(){return Ga},hJ:function(){return ea},i3:function(){return Dl},iE:function(){return ra},kl:function(){return ll},l7:function(){return ne},my:function(){return Xc},nP:function(){return Ol},oe:function(){return yl},pl:function(){return ml},qK:function(){return cl},qY:function(){return Ua},r7:function(){return gl},sc:function(){return Tl},u7:function(){return tl},vh:function(){return Kh},vr:function(){return Nl},xU:function(){return il},yq:function(){return N},zN:function(){return wl}});var Yn,Xn,_firebase_app__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5816),_firebase_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8463),_firebase_logger__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3333),_firebase_util__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4444),_firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3510),process=__webpack_require__(3454);let b="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class P{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}P.UNAUTHENTICATED=new P(null),P.GOOGLE_CREDENTIALS=new P("google-credentials-uid"),P.FIRST_PARTY=new P("first-party-uid"),P.MOCK_USER=new P("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let v="9.14.0",V=new _firebase_logger__WEBPACK_IMPORTED_MODULE_2__.Yd("@firebase/firestore");function S(){return V.logLevel}function D(t){V.setLogLevel(t)}function C(t,...e){if(V.logLevel<=_firebase_logger__WEBPACK_IMPORTED_MODULE_2__.in.DEBUG){let n=e.map(k);V.debug(`Firestore (${v}): ${t}`,...n)}}function x(t,...e){if(V.logLevel<=_firebase_logger__WEBPACK_IMPORTED_MODULE_2__.in.ERROR){let n=e.map(k);V.error(`Firestore (${v}): ${t}`,...n)}}function N(t,...e){if(V.logLevel<=_firebase_logger__WEBPACK_IMPORTED_MODULE_2__.in.WARN){let n=e.map(k);V.warn(`Firestore (${v}): ${t}`,...n)}}function k(t){if("string"==typeof t)return t;try{return JSON.stringify(t)}catch(e){return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function O(t="Unexpected state"){let e=`FIRESTORE (${v}) INTERNAL ASSERTION FAILED: `+t;throw x(e),Error(e)}function F(t,e){t||O()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends _firebase_util__WEBPACK_IMPORTED_MODULE_3__.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class U{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class q{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class K{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(P.UNAUTHENTICATED))}shutdown(){}}class G{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Q{constructor(t){this.t=t,this.currentUser=P.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i,s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve(),i=new U;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new U,t.enqueueRetryable(()=>s(this.currentUser))};let r=()=>{let e=i;t.enqueueRetryable(async()=>{await e.promise,await s(this.currentUser)})},o=t=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){let t=this.t.getImmediate({optional:!0});t?o(t):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new U)}},0),r()}getToken(){let t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?("string"==typeof e.accessToken||O(),new q(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let t=this.auth&&this.auth.getUid();return null===t||"string"==typeof t||O(),new P(t)}}class j{constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s,this.type="FirstParty",this.user=P.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():("object"==typeof this.h&&null!==this.h&&this.h.auth&&this.h.auth.getAuthHeaderValueForFirstParty||O(),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);let t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class W{constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s}getToken(){return Promise.resolve(new j(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable(()=>e(P.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class z{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class H{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){let n=t=>{null!=t.error&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);let n=t.token!==this.A;return this.A=t.token,C("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};let s=t=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit(t=>s(t)),setTimeout(()=>{if(!this.appCheck){let t=this.T.getImmediate({optional:!0});t?s(t):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?("string"==typeof t.token||O(),this.A=t.token,new z(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class X{static R(){let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length,n="";for(;n.length<20;){let s=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(t){let e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e1=0;e1<t;e1++)n[e1]=Math.floor(256*Math.random());return n}(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function Z(t,e){return t<e?-1:t>e?1:0}function tt(t,e,n){return t.length===e.length&&t.every((t,s)=>n(t,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0||e>=1e9)throw new L(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800||t>=253402300800)throw new L(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){let e=Math.floor(t/1e3);return new nt(e,Math.floor(1e6*(t-1e3*e)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Z(this.nanoseconds,t.nanoseconds):Z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class st{constructor(t){this.timestamp=t}static fromTimestamp(t){return new st(t)}static min(){return new st(new nt(0,0))}static max(){return new st(new nt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class it{constructor(t,e,n){void 0===e?e=0:e>t.length&&O(),void 0===n?n=t.length-e:n>t.length-e&&O(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===it.comparator(this,t)}child(t){let e=this.segments.slice(this.offset,this.limit());return t instanceof it?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){let n=Math.min(t.length,e.length);for(let s=0;s<n;s++){let n1=t.get(s),i=e.get(s);if(n1<i)return -1;if(n1>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class rt extends it{construct(t,e,n){return new rt(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){let e=[];for(let n of t){if(n.indexOf("//")>=0)throw new L(B.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new rt(e)}static emptyPath(){return new rt([])}}let ot=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends it{construct(t,e,n){return new ut(t,e,n)}static isValidIdentifier(t){return ot.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ut(["__name__"])}static fromServerFormat(t){let e=[],n="",s=0,i=()=>{if(0===n.length)throw new L(B.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""},r=!1;for(;s<t.length;){let e1=t[s];if("\\"===e1){if(s+1===t.length)throw new L(B.INVALID_ARGUMENT,"Path has trailing escape character: "+t);let e2=t[s+1];if("\\"!==e2&&"."!==e2&&"`"!==e2)throw new L(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e2,s+=2}else"`"===e1?(r=!r,s++):"."!==e1||r?(n+=e1,s++):(i(),s++)}if(i(),r)throw new L(B.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ct{constructor(t){this.path=t}static fromPath(t){return new ct(rt.fromString(t))}static fromName(t){return new ct(rt.fromString(t).popFirst(5))}static empty(){return new ct(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===rt.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return rt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ct(new rt(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class at{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}function ht(t){return t.fields.find(t=>2===t.kind)}function lt(t){return t.fields.filter(t=>2!==t.kind)}at.UNKNOWN_ID=-1;class dt{constructor(t,e){this.fieldPath=t,this.kind=e}}class wt{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new wt(0,yt.min())}}function mt(t,e){let n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=st.fromTimestamp(1e9===s?new nt(n+1,0):new nt(n,s));return new yt(i,ct.empty(),e)}function gt(t){return new yt(t.readTime,t.key,-1)}class yt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new yt(st.min(),ct.empty(),-1)}static max(){return new yt(st.max(),ct.empty(),-1)}}function pt(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:0!==(n=ct.comparator(t.documentKey,e.documentKey))?n:Z(t.largestBatchId,e.largestBatchId)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let It="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Tt{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Et(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==It)throw t;C("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class At{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new At((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{let e=t();return e instanceof At?e:At.resolve(e)}catch(t1){return At.reject(t1)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):At.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):At.reject(e)}static resolve(t){return new At((e,n)=>{e(t)})}static reject(t){return new At((e,n)=>{n(t)})}static waitFor(t){return new At((e,n)=>{let s=0,i=0,r=!1;t.forEach(t=>{++s,t.next(()=>{++i,r&&i===s&&e()},t=>n(t))}),r=!0,i===s&&e()})}static or(t){let e=At.resolve(!1);for(let n of t)e=e.next(t=>t?At.resolve(t):n());return e}static forEach(t,e){let n=[];return t.forEach((t,s)=>{n.push(e.call(this,t,s))}),this.waitFor(n)}static mapArray(t,e){return new At((n,s)=>{let i=t.length,r=Array(i),o=0;for(let u=0;u<i;u++){let c=u;e(t[c]).next(t=>{r[c]=t,++o===i&&n(r)},t=>s(t))}})}static doWhile(t,e){return new At((n,s)=>{let i=()=>{!0===t()?e().next(()=>{i()},s):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Rt{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.P=new U,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{e.error?this.P.reject(new vt(t,e.error)):this.P.resolve()},this.transaction.onerror=e=>{let n=xt(e.target.error);this.P.reject(new vt(t,n))}}static open(t,e,n,s){try{return new Rt(e,t.transaction(s,n))}catch(t1){throw new vt(e,t1)}}get v(){return this.P.promise}abort(t){t&&this.P.reject(t),this.aborted||(C("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){let t=this.transaction;this.aborted||"function"!=typeof t.commit||t.commit()}store(t){let e=this.transaction.objectStore(t);return new St(e)}}class bt{constructor(t,e,n){this.name=t,this.version=e,this.S=n,12.2===bt.D((0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.z$)())&&x("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return C("SimpleDb","Removing database:",t),Dt(window.indexedDB.deleteDatabase(t)).toPromise()}static C(){if(!(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.hl)())return!1;if(bt.N())return!0;let t=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.z$)(),e=bt.D(t),s=bt.k(t);return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||0<e&&e<10||0<s&&s<4.5)}static N(){var t;return void 0!==process&&"YES"===(null===(t=process.env)||void 0===t?void 0:t.O)}static M(t,e){return t.store(e)}static D(t){let e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static k(t){let e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async F(t){return this.db||(C("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,n)=>{let s=indexedDB.open(this.name,this.version);s.onsuccess=t=>{let n=t.target.result;e(n)},s.onblocked=()=>{n(new vt(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=e=>{let s=e.target.error;"VersionError"===s.name?n(new L(B.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===s.name?n(new L(B.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+s)):n(new vt(t,s))},s.onupgradeneeded=t=>{C("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion);let e=t.target.result;this.S.$(e,s.transaction,t.oldVersion,this.version).next(()=>{C("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=t=>this.B(t)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,s){let i="readonly"===e,r=0;for(;;){++r;try{this.db=await this.F(t);let e1=Rt.open(this.db,t,i?"readonly":"readwrite",n),r1=s(e1).next(t=>(e1.V(),t)).catch(t=>(e1.abort(t),At.reject(t))).toPromise();return r1.catch(()=>{}),await e1.v,r1}catch(t1){let n1="FirebaseError"!==t1.name&&r<3;if(C("SimpleDb","Transaction failed with error:",t1.message,"Retrying:",n1),this.close(),!n1)return Promise.reject(t1)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Pt{constructor(t){this.U=t,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(t){this.U=t}done(){this.q=!0}j(t){this.K=t}delete(){return Dt(this.U.delete())}}class vt extends L{constructor(t,e){super(B.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Vt(t){return"IndexedDbTransactionError"===t.name}class St{constructor(t){this.store=t}put(t,e){let n;return void 0!==e?(C("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(C("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Dt(n)}add(t){return C("SimpleDb","ADD",this.store.name,t,t),Dt(this.store.add(t))}get(t){return Dt(this.store.get(t)).next(e=>(void 0===e&&(e=null),C("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return C("SimpleDb","DELETE",this.store.name,t),Dt(this.store.delete(t))}count(){return C("SimpleDb","COUNT",this.store.name),Dt(this.store.count())}W(t,e){let n=this.options(t,e);if(n.index||"function"!=typeof this.store.getAll){let t1=this.cursor(n),e1=[];return this.H(t1,(t,n)=>{e1.push(n)}).next(()=>e1)}{let t2=this.store.getAll(n.range);return new At((e,n)=>{t2.onerror=t=>{n(t.target.error)},t2.onsuccess=t=>{e(t.target.result)}})}}J(t,e){let n=this.store.getAll(t,null===e?void 0:e);return new At((t,e)=>{n.onerror=t=>{e(t.target.error)},n.onsuccess=e=>{t(e.target.result)}})}Y(t,e){C("SimpleDb","DELETE ALL",this.store.name);let n=this.options(t,e);n.X=!1;let s=this.cursor(n);return this.H(s,(t,e,n)=>n.delete())}Z(t,e){let n;e?n=t:(n={},e=t);let s=this.cursor(n);return this.H(s,e)}tt(t){let e=this.cursor({});return new At((n,s)=>{e.onerror=t=>{let e=xt(t.target.error);s(e)},e.onsuccess=e=>{let s=e.target.result;s?t(s.primaryKey,s.value).next(t=>{t?s.continue():n()}):n()}})}H(t,e){let n=[];return new At((s,i)=>{t.onerror=t=>{i(t.target.error)},t.onsuccess=t=>{let i=t.target.result;if(!i)return void s();let r=new Pt(i),o=e(i.primaryKey,i.value,r);if(o instanceof At){let t1=o.catch(t=>(r.done(),At.reject(t)));n.push(t1)}r.isDone?s():null===r.G?i.continue():i.continue(r.G)}}).next(()=>At.waitFor(n))}options(t,e){let n;return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){let n=this.store.index(t.index);return t.X?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Dt(t){return new At((e,n)=>{t.onsuccess=t=>{let n=t.target.result;e(n)},t.onerror=t=>{let e=xt(t.target.error);n(e)}})}let Ct=!1;function xt(t){let e=bt.D((0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.z$)());if(e>=12.2&&e<13){let e1="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e1)>=0){let t1=new L("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e1}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ct||(Ct=!0,setTimeout(()=>{throw t1},0)),t1}}return t}class Nt{constructor(t,e){this.asyncQueue=t,this.et=e,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}nt(t){C("IndexBackiller",`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{C("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(t){Vt(t)?C("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await Et(t)}await this.nt(6e4)})}}class kt{constructor(t,e){this.localStore=t,this.persistence=e}async st(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.it(e,t))}it(t,e){let n=new Set,s=e,i=!0;return At.doWhile(()=>!0===i&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(e=>{if(null!==e&&!n.has(e))return C("IndexBackiller",`Processing collection: ${e}`),this.rt(t,e,s).next(t=>{s-=t,n.add(e)});i=!1})).next(()=>e-s)}rt(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(s=>this.localStore.localDocuments.getNextDocuments(t,e,s,n).next(n=>{let i=n.changes;return this.localStore.indexManager.updateIndexEntries(t,i).next(()=>this.ot(s,n)).next(n=>(C("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(t,e,n))).next(()=>i.size)}))}ot(t,e){let n=t;return e.changes.forEach((t,e)=>{let s=gt(e);pt(s,n)>0&&(n=s)}),new yt(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ot{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){let t=++this.previousValue;return this.ct&&this.ct(t),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Mt(t){let e=0;for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ft(t,e){for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $t(t){for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Ot.at=-1;class Bt{constructor(t,e){this.comparator=t,this.root=e||Ut.EMPTY}insert(t,e){return new Bt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ut.BLACK,null,null))}remove(t){return new Bt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){let n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){let s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){let t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Lt(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Lt(this.root,t,this.comparator,!1)}getReverseIterator(){return new Lt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Lt(this.root,t,this.comparator,!0)}}class Lt{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop(),e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ut{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:Ut.RED,this.left=null!=s?s:Ut.EMPTY,this.right=null!=i?i:Ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new Ut(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this,i=n(t,s.key);return(s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n))).fixUp()}removeMin(){if(this.left.isEmpty())return Ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),(t=t.copy(null,null,null,t.left.removeMin(),null)).fixUp()}remove(t,e){let n,s=this;if(0>e(t,s.key))s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Ut.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=(t=(t=t.copy(null,null,null,null,t.right.rotateRight())).rotateLeft()).colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=(t=t.rotateRight()).colorFlip()),t}rotateLeft(){let t=this.copy(null,null,Ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){let t=this.copy(null,null,Ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){let t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){let t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();let t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}Ut.EMPTY=null,Ut.RED=!0,Ut.BLACK=!1,Ut.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qt{constructor(t){this.comparator=t,this.data=new Bt(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){let n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){let s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){let e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Kt(this.data.getIterator())}getIteratorFrom(t){return new Kt(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof qt)||this.size!==t.size)return!1;let e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){let t1=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t1,s))return!1}return!0}toArray(){let t=[];return this.forEach(e=>{t.push(e)}),t}toString(){let t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){let e=new qt(this.comparator);return e.data=t,e}}class Kt{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Gt(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qt{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new Qt([])}unionWith(t){let e=new qt(ut.comparator);for(let t1 of this.fields)e=e.add(t1);for(let n of t)e=e.add(n);return new Qt(e.toArray())}covers(t){for(let e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return tt(this.fields,t.fields,(t,e)=>t.isEqual(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function jt(){return"undefined"!=typeof atob}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Wt{constructor(t){this.binaryString=t}static fromBase64String(t){let e=atob(t);return new Wt(e)}static fromUint8Array(t){let e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Wt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(t){let e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Wt.EMPTY_BYTE_STRING=new Wt("");let zt=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ht(t){if(t||O(),"string"==typeof t){let e=0,n=zt.exec(t);if(n||O(),n[1]){let t1=n[1];e=Number(t1=(t1+"000000000").substr(0,9))}let s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Jt(t.seconds),nanos:Jt(t.nanos)}}function Jt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Yt(t){return"string"==typeof t?Wt.fromBase64String(t):Wt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Xt(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function te(t){let e=Ht(t.mapValue.fields.__local_write_time__.timestampValue);return new nt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ee{constructor(t,e,n,s,i,r,o,u){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=u}}class ne{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ne("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof ne&&t.projectId===this.projectId&&t.database===this.database}}function se(t){return null==t}function ie(t){return 0===t&&1/t==-1/0}function re(t){return"number"==typeof t&&Number.isInteger(t)&&!ie(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let oe={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ue={nullValue:"NULL_VALUE"};function ce(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xt(t)?4:Ee(t)?9007199254740991:10:O()}function ae(t,e){if(t===e)return!0;let n=ce(t);if(n!==ce(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return te(t).isEqual(te(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;let n=Ht(t.timestampValue),s=Ht(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return Yt(t.bytesValue).isEqual(Yt(e.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return Jt(t.geoPointValue.latitude)===Jt(e.geoPointValue.latitude)&&Jt(t.geoPointValue.longitude)===Jt(e.geoPointValue.longitude);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Jt(t.integerValue)===Jt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){let n=Jt(t.doubleValue),s=Jt(e.doubleValue);return n===s?ie(n)===ie(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return tt(t.arrayValue.values||[],e.arrayValue.values||[],ae);case 10:return function(t,e){let n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(Mt(n)!==Mt(s))return!1;for(let t1 in n)if(n.hasOwnProperty(t1)&&(void 0===s[t1]||!ae(n[t1],s[t1])))return!1;return!0}(t,e);default:return O()}}function he(t,e){return void 0!==(t.values||[]).find(t=>ae(t,e))}function le(t,e){if(t===e)return 0;let n=ce(t),s=ce(e);if(n!==s)return Z(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(t,e){let n=Jt(t.integerValue||t.doubleValue),s=Jt(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return fe(t.timestampValue,e.timestampValue);case 4:return fe(te(t),te(e));case 5:return Z(t.stringValue,e.stringValue);case 6:return function(t,e){let n=Yt(t),s=Yt(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){let n=t.split("/"),s=e.split("/");for(let t1=0;t1<n.length&&t1<s.length;t1++){let e1=Z(n[t1],s[t1]);if(0!==e1)return e1}return Z(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){let n=Z(Jt(t.latitude),Jt(e.latitude));return 0!==n?n:Z(Jt(t.longitude),Jt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){let n=t.values||[],s=e.values||[];for(let t1=0;t1<n.length&&t1<s.length;++t1){let e1=le(n[t1],s[t1]);if(e1)return e1}return Z(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===oe.mapValue&&e===oe.mapValue)return 0;if(t===oe.mapValue)return 1;if(e===oe.mapValue)return -1;let n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let t1=0;t1<s.length&&t1<r.length;++t1){let e1=Z(s[t1],r[t1]);if(0!==e1)return e1;let o=le(n[s[t1]],i[r[t1]]);if(0!==o)return o}return Z(s.length,r.length)}(t.mapValue,e.mapValue);default:throw O()}}function fe(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Z(t,e);let n=Ht(t),s=Ht(e),i=Z(n.seconds,s.seconds);return 0!==i?i:Z(n.nanos,s.nanos)}function _e(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){let e=Ht(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Yt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ct.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(let s of t.values||[])n?n=!1:e+=",",e+=_e(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){let e=Object.keys(t.fields||{}).sort(),n="{",s=!0;for(let i of e)s?s=!1:n+=",",n+=`${i}:${_e(t.fields[i])}`;return n+"}"}(t.mapValue):O()}function we(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function me(t){return!!t&&"integerValue"in t}function ge(t){return!!t&&"arrayValue"in t}function ye(t){return!!t&&"nullValue"in t}function pe(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ie(t){return!!t&&"mapValue"in t}function Te(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){let e={mapValue:{fields:{}}};return Ft(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Te(n)),e}if(t.arrayValue){let e1={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e1.arrayValue.values[n]=Te(t.arrayValue.values[n]);return e1}return Object.assign({},t)}function Ee(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}function be(t,e){let n=le(t.value,e.value);return 0!==n?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Pe(t,e){let n=le(t.value,e.value);return 0!==n?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ve{constructor(t){this.value=t}static empty(){return new ve({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(!Ie(e=(e.mapValue.fields||{})[t.get(n)]))return null;return(e=(e.mapValue.fields||{})[t.lastSegment()])||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Te(e)}setAll(t){let e=ut.emptyPath(),n={},s=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){let t1=this.getFieldsMap(e);this.applyChanges(t1,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=Te(t):s.push(i.lastSegment())});let i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){let e=this.field(t.popLast());Ie(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ae(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Ie(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){for(let e1 of(Ft(e,(e,n)=>t[e]=n),n))delete t[e1]}clone(){return new ve(Te(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Se{constructor(t,e,n,s,i,r){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.data=i,this.documentState=r}static newInvalidDocument(t){return new Se(t,0,st.min(),st.min(),ve.empty(),0)}static newFoundDocument(t,e,n){return new Se(t,1,e,st.min(),n,0)}static newNoDocument(t,e){return new Se(t,2,e,st.min(),ve.empty(),0)}static newUnknownDocument(t,e){return new Se(t,3,e,st.min(),ve.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ve.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=st.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Se&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Se(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class De{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.ht=null}}function Ce(t,e=null,n=[],s=[],i=null,r=null,o=null){return new De(t,e,n,s,i,r,o)}function xe(t){let e=t;if(null===e.ht){let t1=e.path.canonicalString();null!==e.collectionGroup&&(t1+="|cg:"+e.collectionGroup),t1="|f:"+e.filters.map(t=>t.field.canonicalString()+t.op.toString()+_e(t.value)).join(",")+"|ob:"+e.orderBy.map(t=>t.field.canonicalString()+t.dir).join(","),se(e.limit)||(t1="|l:"+e.limit),e.startAt&&(t1="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(t=>_e(t)).join(",")),e.endAt&&(t1="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(t=>_e(t)).join(",")),e.ht=t1}return e.ht}function ke(t,e){var n,s,t1,e1;if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n1=0;n1<t.orderBy.length;n1++)if(t1=t.orderBy[n1],e1=e.orderBy[n1],!(t1.dir===e1.dir&&t1.field.isEqual(e1.field)))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!ae(n.value,s.value))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Xe(t.startAt,e.startAt)&&Xe(t.endAt,e.endAt)}function Oe(t){return ct.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}function Me(t,e){return t.filters.filter(t=>t instanceof Be&&t.field.isEqual(e))}function Fe(t,e,n){let s=ue,i=!0;for(let n1 of Me(t,e)){let t1=ue,e1=!0;switch(n1.op){case"<":case"<=":var t2;t1="nullValue"in(t2=n1.value)?ue:"booleanValue"in t2?{booleanValue:!1}:"integerValue"in t2||"doubleValue"in t2?{doubleValue:NaN}:"timestampValue"in t2?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t2?{stringValue:""}:"bytesValue"in t2?{bytesValue:""}:"referenceValue"in t2?we(ne.empty(),ct.empty()):"geoPointValue"in t2?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t2?{arrayValue:{}}:"mapValue"in t2?{mapValue:{}}:O();break;case"==":case"in":case">=":t1=n1.value;break;case">":t1=n1.value,e1=!1;break;case"!=":case"not-in":t1=ue}0>be({value:s,inclusive:i},{value:t1,inclusive:e1})&&(s=t1,i=e1)}if(null!==n){for(let r=0;r<t.orderBy.length;++r)if(t.orderBy[r].field.isEqual(e)){let t3=n.position[r];0>be({value:s,inclusive:i},{value:t3,inclusive:n.inclusive})&&(s=t3,i=n.inclusive);break}}return{value:s,inclusive:i}}function $e(t,e,n){let s=oe,i=!0;for(let n1 of Me(t,e)){let t1=oe,e1=!0;switch(n1.op){case">=":case">":var t2;t1="nullValue"in(t2=n1.value)?{booleanValue:!1}:"booleanValue"in t2?{doubleValue:NaN}:"integerValue"in t2||"doubleValue"in t2?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t2?{stringValue:""}:"stringValue"in t2?{bytesValue:""}:"bytesValue"in t2?we(ne.empty(),ct.empty()):"referenceValue"in t2?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t2?{arrayValue:{}}:"arrayValue"in t2?{mapValue:{}}:"mapValue"in t2?oe:O(),e1=!1;break;case"==":case"in":case"<=":t1=n1.value;break;case"<":t1=n1.value,e1=!1;break;case"!=":case"not-in":t1=oe}Pe({value:s,inclusive:i},{value:t1,inclusive:e1})>0&&(s=t1,i=e1)}if(null!==n){for(let r=0;r<t.orderBy.length;++r)if(t.orderBy[r].field.isEqual(e)){let t3=n.position[r];Pe({value:s,inclusive:i},{value:t3,inclusive:n.inclusive})>0&&(s=t3,i=n.inclusive);break}}return{value:s,inclusive:i}}class Be extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.lt(t,e,n):new Le(t,e,n):"array-contains"===e?new Ge(t,n):"in"===e?new Qe(t,n):"not-in"===e?new je(t,n):"array-contains-any"===e?new We(t,n):new Be(t,e,n)}static lt(t,e,n){return"in"===e?new Ue(t,n):new qe(t,n)}matches(t){let e=t.data.field(this.field);return"!="===this.op?null!==e&&this.ft(le(e,this.value)):null!==e&&ce(this.value)===ce(e)&&this.ft(le(e,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return O()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Le extends Be{constructor(t,e,n){super(t,e,n),this.key=ct.fromName(n.referenceValue)}matches(t){let e=ct.comparator(t.key,this.key);return this.ft(e)}}class Ue extends Be{constructor(t,e){super(t,"in",e),this.keys=Ke("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class qe extends Be{constructor(t,e){super(t,"not-in",e),this.keys=Ke("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ke(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>ct.fromName(t.referenceValue))}class Ge extends Be{constructor(t,e){super(t,"array-contains",e)}matches(t){let e=t.data.field(this.field);return ge(e)&&he(e.arrayValue,this.value)}}class Qe extends Be{constructor(t,e){super(t,"in",e)}matches(t){let e=t.data.field(this.field);return null!==e&&he(this.value.arrayValue,e)}}class je extends Be{constructor(t,e){super(t,"not-in",e)}matches(t){if(he(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let e=t.data.field(this.field);return null!==e&&!he(this.value.arrayValue,e)}}class We extends Be{constructor(t,e){super(t,"array-contains-any",e)}matches(t){let e=t.data.field(this.field);return!(!ge(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>he(this.value.arrayValue,t))}}class ze{constructor(t,e){this.position=t,this.inclusive=e}}class He{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ye(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){let r=e[i],o=t.position[i];if(s=r.field.isKeyField()?ct.comparator(ct.fromName(o.referenceValue),n.key):le(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function Xe(t,e){if(null===t)return null===e;if(null===e||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ae(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ze{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=u,this._t=null,this.wt=null,this.startAt,this.endAt}}function en(t){return new Ze(t)}function nn(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function sn(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function rn(t){for(let e of t.filters)if(e.dt())return e.field;return null}function on(t){return null!==t.collectionGroup}function un(t){let e=t;if(null===e._t){e._t=[];let t1=rn(e),n=sn(e);if(null!==t1&&null===n)t1.isKeyField()||e._t.push(new He(t1)),e._t.push(new He(ut.keyField(),"asc"));else{let t2=!1;for(let n1 of e.explicitOrderBy)e._t.push(n1),n1.field.isKeyField()&&(t2=!0);if(!t2){let t3=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new He(ut.keyField(),t3))}}}return e._t}function cn(t){let e=t;if(!e.wt){if("F"===e.limitType)e.wt=Ce(e.path,e.collectionGroup,un(e),e.filters,e.limit,e.startAt,e.endAt);else{let t1=[];for(let n of un(e)){let e1="desc"===n.dir?"asc":"desc";t1.push(new He(n.field,e1))}let n1=e.endAt?new ze(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new ze(e.startAt.position,e.startAt.inclusive):null;e.wt=Ce(e.path,e.collectionGroup,t1,e.filters,e.limit,n1,s)}}return e.wt}function an(t,e,n){return new Ze(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hn(t,e){return ke(cn(t),cn(e))&&t.limitType===e.limitType}function ln(t){return`${xe(cn(t))}|lt:${t.limitType}`}function fn(t){var t1;let e;return`Query(target=${e=(t1=cn(t)).path.canonicalString(),null!==t1.collectionGroup&&(e+=" collectionGroup="+t1.collectionGroup),t1.filters.length>0&&(e+=`, filters: [${t1.filters.map(t=>`${t.field.canonicalString()} ${t.op} ${_e(t.value)}`).join(", ")}]`),se(t1.limit)||(e+=", limit: "+t1.limit),t1.orderBy.length>0&&(e+=`, orderBy: [${t1.orderBy.map(t=>`${t.field.canonicalString()} (${t.dir})`).join(", ")}]`),t1.startAt&&(e=", startAt: "+(t1.startAt.inclusive?"b:":"a:")+t1.startAt.position.map(t=>_e(t)).join(",")),t1.endAt&&(e=", endAt: "+(t1.endAt.inclusive?"a:":"b:")+t1.endAt.position.map(t=>_e(t)).join(",")),`Target(${e})`}; limitType=${t.limitType})`}function dn(t,e){return e.isFoundDocument()&&function(t,e){let n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ct.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(let n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(let n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(!t.startAt||!!function(t,e,n){let s=Ye(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,un(t),e))&&(!t.endAt||!!function(t,e,n){let s=Ye(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,un(t),e))}function _n(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function wn(t){return(e,n)=>{let s=!1;for(let i of un(t)){let t1=function(t,e,n){let s=t.field.isKeyField()?ct.comparator(e.key,n.key):function(t,e,n){let s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?le(s,i):O()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return -1*s;default:return O()}}(i,e,n);if(0!==t1)return t1;s=s||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function gn(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ie(e)?"-0":e}}function yn(t){return{integerValue:""+t}}function pn(t,e){return re(e)?yn(e):gn(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class In{constructor(){this._=void 0}}function An(t,e){return t instanceof Sn?me(e)||e&&"doubleValue"in e?e:{integerValue:0}:null}class Rn extends In{}class bn extends In{constructor(t){super(),this.elements=t}}function Pn(t,e){let n=Cn(e);for(let e1 of t.elements)n.some(t=>ae(t,e1))||n.push(e1);return{arrayValue:{values:n}}}class vn extends In{constructor(t){super(),this.elements=t}}function Vn(t,e){let n=Cn(e);for(let e1 of t.elements)n=n.filter(t=>!ae(t,e1));return{arrayValue:{values:n}}}class Sn extends In{constructor(t,e){super(),this.It=t,this.yt=e}}function Dn(t){return Jt(t.integerValue||t.doubleValue)}function Cn(t){return ge(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xn{constructor(t,e){this.field=t,this.transform=e}}class kn{constructor(t,e){this.version=t,this.transformResults=e}}class On{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new On}static exists(t){return new On(void 0,t)}static updateTime(t){return new On(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Mn(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Fn{}function $n(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new zn(t.key,On.none()):new Kn(t.key,t.data,On.none());{let n=t.data,s=ve.empty(),i=new qt(ut.comparator);for(let t1 of e.fields)if(!i.has(t1)){let e1=n.field(t1);null===e1&&t1.length>1&&(t1=t1.popLast(),e1=n.field(t1)),null===e1?s.delete(t1):s.set(t1,e1),i=i.add(t1)}return new Gn(t.key,s,new Qt(i.toArray()),On.none())}}function Ln(t,e,n,s){return t instanceof Kn?function(t,e,n,s){if(!Mn(t.precondition,e))return n;let i=t.value.clone(),r=Wn(t.fieldTransforms,s,e);return i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,s):t instanceof Gn?function(t,e,n,s){if(!Mn(t.precondition,e))return n;let i=Wn(t.fieldTransforms,s,e),r=e.data;return(r.setAll(Qn(t)),r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n)?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,s):Mn(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}function qn(t,e){var t1,e1;return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(t1=t.fieldTransforms,e1=e.fieldTransforms,!!(void 0===t1&&void 0===e1||!(!t1||!e1)&&tt(t1,e1,(t,e)=>{var t1,e1;return t.field.isEqual(e.field)&&(t1=t.transform,e1=e.transform,t1 instanceof bn&&e1 instanceof bn||t1 instanceof vn&&e1 instanceof vn?tt(t1.elements,e1.elements,ae):t1 instanceof Sn&&e1 instanceof Sn?ae(t1.yt,e1.yt):t1 instanceof Rn&&e1 instanceof Rn)})))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Kn extends Fn{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Gn extends Fn{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Qn(t){let e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let s=t.data.field(n);e.set(n,s)}}),e}function jn(t,e,n){var n1;let s=new Map;t.length===n.length||O();for(let i=0;i<n.length;i++){let r=t[i],o=r.transform,u=e.data.field(r.field);s.set(r.field,(n1=n[i],o instanceof bn?Pn(o,u):o instanceof vn?Vn(o,u):n1))}return s}function Wn(t,e,n){let s=new Map;for(let i of t){let t1=i.transform,r=n.data.field(i.field);s.set(i.field,t1 instanceof Rn?function(t,e){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(e,r):t1 instanceof bn?Pn(t1,r):t1 instanceof vn?Vn(t1,r):function(t,e){let n=An(t,e),s=Dn(n)+Dn(t.yt);return me(n)&&me(t.yt)?yn(s):gn(t.It,s)}(t1,r))}return s}class zn extends Fn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hn extends Fn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Jn{constructor(t){this.count=t}}function Zn(t){switch(t){default:return O();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0}}function ts(t){if(void 0===t)return x("GRPC error has no .code"),B.UNKNOWN;switch(t){case Yn.OK:return B.OK;case Yn.CANCELLED:return B.CANCELLED;case Yn.UNKNOWN:return B.UNKNOWN;case Yn.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case Yn.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case Yn.INTERNAL:return B.INTERNAL;case Yn.UNAVAILABLE:return B.UNAVAILABLE;case Yn.UNAUTHENTICATED:return B.UNAUTHENTICATED;case Yn.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case Yn.NOT_FOUND:return B.NOT_FOUND;case Yn.ALREADY_EXISTS:return B.ALREADY_EXISTS;case Yn.PERMISSION_DENIED:return B.PERMISSION_DENIED;case Yn.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case Yn.ABORTED:return B.ABORTED;case Yn.OUT_OF_RANGE:return B.OUT_OF_RANGE;case Yn.UNIMPLEMENTED:return B.UNIMPLEMENTED;case Yn.DATA_LOSS:return B.DATA_LOSS;default:return O()}}(Xn=Yn||(Yn={}))[Xn.OK=0]="OK",Xn[Xn.CANCELLED=1]="CANCELLED",Xn[Xn.UNKNOWN=2]="UNKNOWN",Xn[Xn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Xn[Xn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Xn[Xn.NOT_FOUND=5]="NOT_FOUND",Xn[Xn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Xn[Xn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Xn[Xn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Xn[Xn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Xn[Xn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Xn[Xn.ABORTED=10]="ABORTED",Xn[Xn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Xn[Xn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Xn[Xn.INTERNAL=13]="INTERNAL",Xn[Xn.UNAVAILABLE=14]="UNAVAILABLE",Xn[Xn.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class es{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){let e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n){for(let[e1,s]of n)if(this.equalsFn(e1,t))return s}}has(t){return void 0!==this.get(t)}set(t,e){let n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n1=0;n1<s.length;n1++)if(this.equalsFn(s[n1][0],t))return void(s[n1]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){let e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ft(this.inner,(e,n)=>{for(let[e1,s]of n)t(e1,s)})}isEmpty(){return $t(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ns=new Bt(ct.comparator),is=new Bt(ct.comparator);function rs(...t){let e=is;for(let n of t)e=e.insert(n.key,n);return e}function os(t){let e=is;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function as(){return new es(t=>t.toString(),(t,e)=>t.isEqual(e))}let hs=new Bt(ct.comparator),ls=new qt(ct.comparator);function fs(...t){let e=ls;for(let n of t)e=e.add(n);return e}let ds=new qt(Z);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ws{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){let s=new Map;return s.set(t,ms.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new ws(st.min(),s,ds,ns,fs())}}class ms{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new ms(n,e,fs(),fs(),fs())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gs{constructor(t,e,n,s){this.Tt=t,this.removedTargetIds=e,this.key=n,this.Et=s}}class ys{constructor(t,e){this.targetId=t,this.At=e}}class ps{constructor(t,e,n=Wt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Is{constructor(){this.Rt=0,this.bt=As(),this.Pt=Wt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=fs(),e=fs(),n=fs();return this.bt.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:O()}}),new ms(this.Pt,this.vt,t,e,n)}Nt(){this.Vt=!1,this.bt=As()}kt(t,e){this.Vt=!0,this.bt=this.bt.insert(t,e)}Ot(t){this.Vt=!0,this.bt=this.bt.remove(t)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Ts{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=ns,this.qt=Es(),this.Kt=new qt(Z)}Gt(t){for(let e of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(e,t.Et):this.jt(e,t.key,t.Et);for(let e1 of t.removedTargetIds)this.jt(e1,t.key,t.Et)}Wt(t){this.forEachTarget(t,e=>{let n=this.zt(e);switch(t.state){case 0:this.Ht(e)&&n.Ct(t.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(t.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(e);break;case 3:this.Ht(e)&&(n.$t(),n.Ct(t.resumeToken));break;case 4:this.Ht(e)&&(this.Jt(e),n.Ct(t.resumeToken));break;default:O()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Lt.forEach((t,n)=>{this.Ht(n)&&e(n)})}Yt(t){let e=t.targetId,n=t.At.count,s=this.Xt(e);if(s){let t1=s.target;if(Oe(t1)){if(0===n){let n1=new ct(t1.path);this.jt(e,n1,Se.newNoDocument(n1,st.min()))}else 1===n||O()}else this.Zt(e)!==n&&(this.Jt(e),this.Kt=this.Kt.add(e))}}te(t){let e=new Map;this.Lt.forEach((n,s)=>{let i=this.Xt(s);if(i){if(n.current&&Oe(i.target)){let e1=new ct(i.target.path);null!==this.Ut.get(e1)||this.ee(s,e1)||this.jt(s,e1,Se.newNoDocument(e1,t))}n.Dt&&(e.set(s,n.xt()),n.Nt())}});let n=fs();this.qt.forEach((t,e)=>{let s=!0;e.forEachWhile(t=>{let e=this.Xt(t);return!e||2===e.purpose||(s=!1,!1)}),s&&(n=n.add(t))}),this.Ut.forEach((e,n)=>n.setReadTime(t));let s=new ws(t,e,this.Kt,this.Ut,n);return this.Ut=ns,this.qt=Es(),this.Kt=new qt(Z),s}Qt(t,e){if(!this.Ht(t))return;let n=this.ee(t,e.key)?2:0;this.zt(t).kt(e.key,n),this.Ut=this.Ut.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ne(e.key).add(t))}jt(t,e,n){if(!this.Ht(t))return;let s=this.zt(t);this.ee(t,e)?s.kt(e,1):s.Ot(e),this.qt=this.qt.insert(e,this.ne(e).delete(t)),n&&(this.Ut=this.Ut.insert(e,n))}removeTarget(t){this.Lt.delete(t)}Zt(t){let e=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Mt(t){this.zt(t).Mt()}zt(t){let e=this.Lt.get(t);return e||(e=new Is,this.Lt.set(t,e)),e}ne(t){let e=this.qt.get(t);return e||(e=new qt(Z),this.qt=this.qt.insert(t,e)),e}Ht(t){let e=null!==this.Xt(t);return e||C("WatchChangeAggregator","Detected inactive target",t),e}Xt(t){let e=this.Lt.get(t);return e&&e.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new Is),this.Bt.getRemoteKeysForTarget(t).forEach(e=>{this.jt(t,e,null)})}ee(t,e){return this.Bt.getRemoteKeysForTarget(t).has(e)}}function Es(){return new Bt(ct.comparator)}function As(){return new Bt(ct.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Rs={asc:"ASCENDING",desc:"DESCENDING"},bs={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Ps{constructor(t,e){this.databaseId=t,this.gt=e}}function vs(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vs(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Ds(t){return t||O(),st.fromTimestamp(function(t){let e=Ht(t);return new nt(e.seconds,e.nanos)}(t))}function Cs(t,e){return new rt(["projects",t.projectId,"databases",t.database]).child("documents").child(e).canonicalString()}function xs(t){let e=rt.fromString(t);return ii(e)||O(),e}function Ns(t,e){return Cs(t.databaseId,e.path)}function ks(t,e){let n=xs(e);if(n.get(1)!==t.databaseId.projectId)throw new L(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ct($s(n))}function Os(t,e){return Cs(t.databaseId,e)}function Ms(t){let e=xs(t);return 4===e.length?rt.emptyPath():$s(e)}function Fs(t){return new rt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $s(t){return t.length>4&&"documents"===t.get(4)||O(),t.popFirst(5)}function Bs(t,e,n){return{name:Ns(t,e),fields:n.value.mapValue.fields}}function Ls(t,e,n){let s=ks(t,e.name),i=Ds(e.updateTime),r=new ve({mapValue:{fields:e.fields}}),o=Se.newFoundDocument(s,i,r);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Ks(t,e){var e1;let n;if(e instanceof Kn)n={update:Bs(t,e.key,e.value)};else if(e instanceof zn)n={delete:Ns(t,e.key)};else if(e instanceof Gn)n={update:Bs(t,e.key,e.data),updateMask:function(t){let e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}(e.fieldMask)};else{if(!(e instanceof Hn))return O();n={verify:Ns(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>(function(t,e){let n=e.transform;if(n instanceof Rn)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof bn)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof vn)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Sn)return{fieldPath:e.field.canonicalString(),increment:n.yt};throw O()})(0,t))),e.precondition.isNone||(n.currentDocument=void 0!==(e1=e.precondition).updateTime?{updateTime:vs(t,e1.updateTime.toTimestamp())}:void 0!==e1.exists?{exists:e1.exists}:O()),n}function Gs(t,e){var t1;let n=e.currentDocument?void 0!==(t1=e.currentDocument).updateTime?On.updateTime(Ds(t1.updateTime)):void 0!==t1.exists?On.exists(t1.exists):On.none():On.none(),s=e.updateTransforms?e.updateTransforms.map(e=>(function(t,e){let n=null;if("setToServerValue"in e)"REQUEST_TIME"===e.setToServerValue||O(),n=new Rn;else if("appendMissingElements"in e){let t1=e.appendMissingElements.values||[];n=new bn(t1)}else if("removeAllFromArray"in e){let t2=e.removeAllFromArray.values||[];n=new vn(t2)}else"increment"in e?n=new Sn(t,e.increment):O();let s=ut.fromServerFormat(e.fieldPath);return new xn(s,n)})(t,e)):[];if(e.update){e.update.name;let i=ks(t,e.update.name),r=new ve({mapValue:{fields:e.update.fields}});if(e.updateMask){let t2=function(t){let e=t.fieldPaths||[];return new Qt(e.map(t=>ut.fromServerFormat(t)))}(e.updateMask);return new Gn(i,r,t2,n,s)}return new Kn(i,r,n,s)}if(e.delete){let s1=ks(t,e.delete);return new zn(s1,n)}if(e.verify){let s2=ks(t,e.verify);return new Hn(s2,n)}return O()}function js(t,e){return{documents:[Os(t,e.path)]}}function Ws(t,e){var u,e1,t1;let n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=Os(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Os(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);let i=function(t){if(0===t.length)return;let e=t.map(t=>(function(t){if("=="===t.op){if(pe(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NAN"}};if(ye(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(pe(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NOT_NAN"}};if(ye(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zs(t.field),op:bs[t.op],value:t.value}}})(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);let r=function(t){if(0!==t.length)return t.map(t=>({field:Zs(t.field),direction:Rs[t.dir]}))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);let o=(e1=e.limit,t.gt||se(e1)?e1:{value:e1});return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(u=e.startAt).inclusive,values:u.position}),e.endAt&&(n.structuredQuery.endAt={before:!(t1=e.endAt).inclusive,values:t1.position}),n}function zs(t){var t1,t2,e,n,s,i,o,u;let e1,e2=Ms(t.parent),n1=t.structuredQuery,s1=n1.from?n1.from.length:0,i1=null;if(s1>0){1===s1||O();let t3=n1.from[0];t3.allDescendants?i1=t3.collectionId:e2=e2.child(t3.collectionId)}let r=[];n1.where&&(r=function Js(t){return t?void 0!==t.unaryFilter?[function(t){switch(t.unaryFilter.op){case"IS_NAN":let e=ti(t.unaryFilter.field);return Be.create(e,"==",{doubleValue:NaN});case"IS_NULL":let n=ti(t.unaryFilter.field);return Be.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=ti(t.unaryFilter.field);return Be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=ti(t.unaryFilter.field);return Be.create(i,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(t)]:void 0!==t.fieldFilter?[Be.create(ti(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(t.fieldFilter.op),t.fieldFilter.value)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Js(t)).reduce((t,e)=>t.concat(e)):O():[]}(n1.where));let o1=[];n1.orderBy&&(o1=n1.orderBy.map(t=>new He(ti(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))));let u1=null;n1.limit&&(u1=se(e1="object"==typeof(t1=n1.limit)?t1.value:t1)?null:e1);let c=null;n1.startAt&&(c=function(t){let e=!!t.before,n=t.values||[];return new ze(n,e)}(n1.startAt));let a=null;return n1.endAt&&(a=function(t){let e=!t.before,n=t.values||[];return new ze(n,e)}(n1.endAt)),t2=e2,e=i1,n=o1,s=r,i=u1,o=c,u=a,new Ze(t2,e,n,s,i,"F",o,u)}function Zs(t){return{fieldPath:t.canonicalString()}}function ti(t){return ut.fromServerFormat(t.fieldPath)}function ii(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ri(t){var t1,t2;let e="";for(let n=0;n<t.length;n++)e.length>0&&(e+="\x01\x01"),e=function(t,e){let n=e,s=t.length;for(let e1=0;e1<s;e1++){let s1=t.charAt(e1);switch(s1){case"\0":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=s1}}return n}(t.get(n),e);return e+"\x01\x01"}function ci(t){let e=t.length;if(e>=2||O(),2===e)return"\x01"===t.charAt(0)&&"\x01"===t.charAt(1)||O(),rt.emptyPath();let n=e-2,s=[],i="";for(let r=0;r<e;){let e1=t.indexOf("\x01",r);switch((e1<0||e1>n)&&O(),t.charAt(e1+1)){case"\x01":let o;let n1=t.substring(r,e1);0===i.length?o=n1:(i+=n1,o=i,i=""),s.push(o);break;case"\x10":i=t.substring(r,e1)+"\0";break;case"\x11":i+=t.substring(r,e1+1);break;default:O()}r=e1+2}return new rt(s)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ai=["userId","batchId"],fi={},di=["prefixPath","collectionGroup","readTime","documentId"],_i=["prefixPath","collectionGroup","documentId"],wi=["collectionGroup","readTime","prefixPath","documentId"],mi=["canonicalId","targetId"],gi=["targetId","path"],yi=["path","targetId"],pi=["collectionId","parent"],Ii=["indexId","uid"],Ti=["uid","sequenceNumber"],Ei=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Ai=["indexId","uid","orderedDocumentKey"],Ri=["userId","collectionPath","documentId"],bi=["userId","collectionPath","largestBatchId"],Pi=["userId","collectionGroup","largestBatchId"],vi=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Vi=[...vi,"documentOverlays"],Si=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ci=[...Si,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xi extends Tt{constructor(t,e){super(),this.ie=t,this.currentSequenceNumber=e}}function Ni(t,e){return bt.M(t.ie,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ki{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){let n=e.mutationResults;for(let e1=0;e1<this.mutations.length;e1++){let s=this.mutations[e1];if(s.key.isEqual(t.key)){var n1;n1=n[e1],s instanceof Kn?function(t,e,n){let s=t.value.clone(),i=jn(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(s,t,n1):s instanceof Gn?function(t,e,n){if(!Mn(t.precondition,e))return void e.convertToUnknownDocument(n.version);let s=jn(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Qn(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(s,t,n1):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n1)}}}applyToLocalView(t,e){for(let n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ln(n,t,e,this.localWriteTime));for(let n1 of this.mutations)n1.key.isEqual(t.key)&&(e=Ln(n1,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){let n=as();return this.mutations.forEach(s=>{let i=t.get(s.key),r=i.overlayedDocument,o=this.applyToLocalView(r,i.mutatedFields);o=e.has(s.key)?null:o;let u=$n(r,o);null!==u&&n.set(s.key,u),r.isValidDocument()||r.convertToNoDocument(st.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),fs())}isEqual(t){return this.batchId===t.batchId&&tt(this.mutations,t.mutations,(t,e)=>qn(t,e))&&tt(this.baseMutations,t.baseMutations,(t,e)=>qn(t,e))}}class Oi{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){t.mutations.length===n.length||O();let s=hs,i=t.mutations;for(let t1=0;t1<i.length;t1++)s=s.insert(i[t1].key,n[t1].version);return new Oi(t,e,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Mi{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Fi{constructor(t,e,n,s,i=st.min(),r=st.min(),o=Wt.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new Fi(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Fi(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $i{constructor(t){this.re=t}}function Li(t,e){let n=e.key,s={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Ui(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument()){var t1;s.document={name:Ns(t1=t.re,e.key),fields:e.data.value.mapValue.fields,updateTime:vs(t1,e.version.toTimestamp())}}else if(e.isNoDocument())s.noDocument={path:n.path.toArray(),readTime:qi(e.version)};else{if(!e.isUnknownDocument())return O();s.unknownDocument={path:n.path.toArray(),version:qi(e.version)}}return s}function Ui(t){let e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function qi(t){let e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ki(t){let e=new nt(t.seconds,t.nanoseconds);return st.fromTimestamp(e)}function Gi(t,e){let n=(e.baseMutations||[]).map(e=>Gs(t.re,e));for(let t1=0;t1<e.mutations.length-1;++t1){let n1=e.mutations[t1];if(t1+1<e.mutations.length&&void 0!==e.mutations[t1+1].transform){let s=e.mutations[t1+1];n1.updateTransforms=s.transform.fieldTransforms,e.mutations.splice(t1+1,1),++t1}}let s1=e.mutations.map(e=>Gs(t.re,e)),i=nt.fromMillis(e.localWriteTimeMs);return new ki(e.batchId,i,n,s1)}function Qi(t){var i;let s;let e=Ki(t.readTime),n=void 0!==t.lastLimboFreeSnapshotVersion?Ki(t.lastLimboFreeSnapshotVersion):st.min();return void 0!==t.query.documents?(1===(i=t.query).documents.length||O(),s=cn(en(Ms(i.documents[0])))):s=cn(zs(t.query)),new Fi(s,t.targetId,0,t.lastListenSequenceNumber,e,n,Wt.fromBase64String(t.resumeToken))}function ji(t,e){let i;let n=qi(e.snapshotVersion),s=qi(e.lastLimboFreeSnapshotVersion);i=Oe(e.target)?js(t.re,e.target):Ws(t.re,e.target);let r=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:xe(e.target),readTime:n,resumeToken:r,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:s,query:i}}function Wi(t){let e=zs({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?an(e,e.limit,"L"):e}function zi(t,e){return new Mi(e.largestBatchId,Gs(t.re,e.overlayMutation))}function Hi(t,e){let n=e.path.lastSegment();return[t,ri(e.path.popLast()),n]}function Ji(t,e,n,s){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:qi(s.readTime),documentKey:ri(s.documentKey.path),largestBatchId:s.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Yi{getBundleMetadata(t,e){return Xi(t).get(e).next(t=>{if(t)return{id:t.bundleId,createTime:Ki(t.createTime),version:t.version}})}saveBundleMetadata(t,e){return Xi(t).put({bundleId:e.id,createTime:qi(Ds(e.createTime)),version:e.version})}getNamedQuery(t,e){return Zi(t).get(e).next(t=>{if(t)return{name:t.name,query:Wi(t.bundledQuery),readTime:Ki(t.readTime)}})}saveNamedQuery(t,e){return Zi(t).put({name:e.name,readTime:qi(Ds(e.readTime)),bundledQuery:e.bundledQuery})}}function Xi(t){return Ni(t,"bundles")}function Zi(t){return Ni(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tr{constructor(t,e){this.It=t,this.userId=e}static oe(t,e){let n=e.uid||"";return new tr(t,n)}getOverlay(t,e){return er(t).get(Hi(this.userId,e)).next(t=>t?zi(this.It,t):null)}getOverlays(t,e){let n=as();return At.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){let s=[];return n.forEach((n,i)=>{let r=new Mi(e,i);s.push(this.ue(t,r))}),At.waitFor(s)}removeOverlaysForBatchId(t,e,n){let s=new Set;e.forEach(t=>s.add(ri(t.getCollectionPath())));let i=[];return s.forEach(e=>{let s=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,n+1],!1,!0);i.push(er(t).Y("collectionPathOverlayIndex",s))}),At.waitFor(i)}getOverlaysForCollection(t,e,n){let s=as(),i=ri(e),r=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return er(t).W("collectionPathOverlayIndex",r).next(t=>{for(let e of t){let t1=zi(this.It,e);s.set(t1.getKey(),t1)}return s})}getOverlaysForCollectionGroup(t,e,n,s){let r;let i=as(),o=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return er(t).Z({index:"collectionGroupOverlayIndex",range:o},(t,e,n)=>{let o=zi(this.It,e);i.size()<s||o.largestBatchId===r?(i.set(o.getKey(),o),r=o.largestBatchId):n.done()}).next(()=>i)}ue(t,e){return er(t).put(function(t,e,n){let[s,i,r]=Hi(e,n.mutation.key);return{userId:e,collectionPath:i,documentId:r,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Ks(t.re,n.mutation)}}(this.It,this.userId,e))}}function er(t){return Ni(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nr{constructor(){}ce(t,e){this.ae(t,e),e.he()}ae(t,e){if("nullValue"in t)this.le(e,5);else if("booleanValue"in t)this.le(e,10),e.fe(t.booleanValue?1:0);else if("integerValue"in t)this.le(e,15),e.fe(Jt(t.integerValue));else if("doubleValue"in t){let n=Jt(t.doubleValue);isNaN(n)?this.le(e,13):(this.le(e,15),ie(n)?e.fe(0):e.fe(n))}else if("timestampValue"in t){let n1=t.timestampValue;this.le(e,20),"string"==typeof n1?e.de(n1):(e.de(`${n1.seconds||""}`),e.fe(n1.nanos||0))}else if("stringValue"in t)this._e(t.stringValue,e),this.we(e);else if("bytesValue"in t)this.le(e,30),e.me(Yt(t.bytesValue)),this.we(e);else if("referenceValue"in t)this.ge(t.referenceValue,e);else if("geoPointValue"in t){let n2=t.geoPointValue;this.le(e,45),e.fe(n2.latitude||0),e.fe(n2.longitude||0)}else"mapValue"in t?Ee(t)?this.le(e,Number.MAX_SAFE_INTEGER):(this.ye(t.mapValue,e),this.we(e)):"arrayValue"in t?(this.pe(t.arrayValue,e),this.we(e)):O()}_e(t,e){this.le(e,25),this.Ie(t,e)}Ie(t,e){e.de(t)}ye(t,e){let n=t.fields||{};for(let t1 of(this.le(e,55),Object.keys(n)))this._e(t1,e),this.ae(n[t1],e)}pe(t,e){let n=t.values||[];for(let t1 of(this.le(e,50),n))this.ae(t1,e)}ge(t,e){this.le(e,37),ct.fromName(t).path.forEach(t=>{this.le(e,60),this.Ie(t,e)})}le(t,e){t.fe(e)}we(t){t.fe(2)}}function ir(t){let e=64-function(t){let e=0;for(let n=0;n<8;++n){let s=function(t){if(0===t)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}(255&t[n]);if(e+=s,8!==s)break}return e}(t);return Math.ceil(e/8)}nr.Te=new nr;class rr{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(t){let e=t[Symbol.iterator](),n=e.next();for(;!n.done;)this.Ae(n.value),n=e.next();this.Re()}be(t){let e=t[Symbol.iterator](),n=e.next();for(;!n.done;)this.Pe(n.value),n=e.next();this.ve()}Ve(t){for(let e of t){let t1=e.charCodeAt(0);if(t1<128)this.Ae(t1);else if(t1<2048)this.Ae(960|t1>>>6),this.Ae(128|63&t1);else if(e<"\ud800"||"\udbff"<e)this.Ae(480|t1>>>12),this.Ae(128|63&t1>>>6),this.Ae(128|63&t1);else{let t2=e.codePointAt(0);this.Ae(240|t2>>>18),this.Ae(128|63&t2>>>12),this.Ae(128|63&t2>>>6),this.Ae(128|63&t2)}}this.Re()}Se(t){for(let e of t){let t1=e.charCodeAt(0);if(t1<128)this.Pe(t1);else if(t1<2048)this.Pe(960|t1>>>6),this.Pe(128|63&t1);else if(e<"\ud800"||"\udbff"<e)this.Pe(480|t1>>>12),this.Pe(128|63&t1>>>6),this.Pe(128|63&t1);else{let t2=e.codePointAt(0);this.Pe(240|t2>>>18),this.Pe(128|63&t2>>>12),this.Pe(128|63&t2>>>6),this.Pe(128|63&t2)}}this.ve()}De(t){let e=this.Ce(t),n=ir(e);this.xe(1+n),this.buffer[this.position++]=255&n;for(let t1=e.length-n;t1<e.length;++t1)this.buffer[this.position++]=255&e[t1]}Ne(t){let e=this.Ce(t),n=ir(e);this.xe(1+n),this.buffer[this.position++]=~(255&n);for(let t1=e.length-n;t1<e.length;++t1)this.buffer[this.position++]=~(255&e[t1])}ke(){this.Oe(255),this.Oe(255)}Me(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(t){this.xe(t.length),this.buffer.set(t,this.position),this.position+=t.length}$e(){return this.buffer.slice(0,this.position)}Ce(t){let e=function(t){let e=new DataView(new ArrayBuffer(8));return e.setFloat64(0,t,!1),new Uint8Array(e.buffer)}(t),n=0!=(128&e[0]);e[0]^=n?255:128;for(let t1=1;t1<e.length;++t1)e[t1]^=n?255:0;return e}Ae(t){let e=255&t;0===e?(this.Oe(0),this.Oe(255)):255===e?(this.Oe(255),this.Oe(0)):this.Oe(e)}Pe(t){let e=255&t;0===e?(this.Fe(0),this.Fe(255)):255===e?(this.Fe(255),this.Fe(0)):this.Fe(t)}Re(){this.Oe(0),this.Oe(1)}ve(){this.Fe(0),this.Fe(1)}Oe(t){this.xe(1),this.buffer[this.position++]=t}Fe(t){this.xe(1),this.buffer[this.position++]=~t}xe(t){let e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);let s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class or{constructor(t){this.Be=t}me(t){this.Be.Ee(t)}de(t){this.Be.Ve(t)}fe(t){this.Be.De(t)}he(){this.Be.ke()}}class ur{constructor(t){this.Be=t}me(t){this.Be.be(t)}de(t){this.Be.Se(t)}fe(t){this.Be.Ne(t)}he(){this.Be.Me()}}class cr{constructor(){this.Be=new rr,this.Le=new or(this.Be),this.Ue=new ur(this.Be)}seed(t){this.Be.seed(t)}qe(t){return 0===t?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ar{constructor(t,e,n,s){this.indexId=t,this.documentKey=e,this.arrayValue=n,this.directionalValue=s}Ke(){let t=this.directionalValue.length,e=0===t||255===this.directionalValue[t-1]?t+1:t,n=new Uint8Array(e);return n.set(this.directionalValue,0),e!==t?n.set([0],this.directionalValue.length):++n[n.length-1],new ar(this.indexId,this.documentKey,this.arrayValue,n)}}function hr(t,e){let n=t.indexId-e.indexId;return 0!==n?n:0!==(n=lr(t.arrayValue,e.arrayValue))?n:0!==(n=lr(t.directionalValue,e.directionalValue))?n:ct.comparator(t.documentKey,e.documentKey)}function lr(t,e){for(let n=0;n<t.length&&n<e.length;++n){let s=t[n]-e[n];if(0!==s)return s}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fr{constructor(t){for(let e of(this.collectionId=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment(),this.Ge=t.orderBy,this.Qe=[],t.filters)){let t1=e;t1.dt()?this.je=t1:this.Qe.push(t1)}}We(t){let e=ht(t);if(void 0!==e&&!this.ze(e))return!1;let n=lt(t),s=0,i=0;for(;s<n.length&&this.ze(n[s]);++s);if(s===n.length)return!0;if(void 0!==this.je){let t1=n[s];if(!this.He(this.je,t1)||!this.Je(this.Ge[i++],t1))return!1;++s}for(;s<n.length;++s){let t2=n[s];if(i>=this.Ge.length||!this.Je(this.Ge[i++],t2))return!1}return!0}ze(t){for(let e of this.Qe)if(this.He(e,t))return!0;return!1}He(t,e){if(void 0===t||!t.field.isEqual(e.fieldPath))return!1;let n="array-contains"===t.op||"array-contains-any"===t.op;return 2===e.kind===n}Je(t,e){return!!t.field.isEqual(e.fieldPath)&&(0===e.kind&&"asc"===t.dir||1===e.kind&&"desc"===t.dir)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dr{constructor(){this.Ye=new _r}addToCollectionParentIndex(t,e){return this.Ye.add(e),At.resolve()}getCollectionParents(t,e){return At.resolve(this.Ye.getEntries(e))}addFieldIndex(t,e){return At.resolve()}deleteFieldIndex(t,e){return At.resolve()}getDocumentsMatchingTarget(t,e){return At.resolve(null)}getIndexType(t,e){return At.resolve(0)}getFieldIndexes(t,e){return At.resolve([])}getNextCollectionGroupToUpdate(t){return At.resolve(null)}getMinOffset(t,e){return At.resolve(yt.min())}getMinOffsetFromCollectionGroup(t,e){return At.resolve(yt.min())}updateCollectionGroup(t,e,n){return At.resolve()}updateIndexEntries(t,e){return At.resolve()}}class _r{constructor(){this.index={}}add(t){let e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new qt(rt.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){let e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new qt(rt.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let wr=new Uint8Array(0);class mr{constructor(t,e){this.user=t,this.databaseId=e,this.Xe=new _r,this.Ze=new es(t=>xe(t),(t,e)=>ke(t,e)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.Xe.has(e)){let n=e.lastSegment(),s=e.popLast();t.addOnCommittedListener(()=>{this.Xe.add(e)});let i={collectionId:n,parent:ri(s)};return gr(t).put(i)}return At.resolve()}getCollectionParents(t,e){let n=[],s=IDBKeyRange.bound([e,""],[e+"\0",""],!1,!0);return gr(t).W(s).next(t=>{for(let s of t){if(s.collectionId!==e)break;n.push(ci(s.parent))}return n})}addFieldIndex(t,e){let n=pr(t),s={indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map(t=>[t.fieldPath.canonicalString(),t.kind])};delete s.indexId;let i=n.add(s);if(e.indexState){let n1=Ir(t);return i.next(t=>{n1.put(Ji(t,this.user,e.indexState.sequenceNumber,e.indexState.offset))})}return i.next()}deleteFieldIndex(t,e){let n=pr(t),s=Ir(t),i=yr(t);return n.delete(e.indexId).next(()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}getDocumentsMatchingTarget(t,e){let n=yr(t),s=!0,i=new Map;return At.forEach(this.tn(e),e=>this.en(t,e).next(t=>{s&&(s=!!t),i.set(e,t)})).next(()=>{if(s){let t=fs(),s1=[];return At.forEach(i,(i,r)=>{C("IndexedDbIndexManager",`Using index id=${i.indexId}|cg=${i.collectionGroup}|f=${i.fields.map(t=>`${t.fieldPath}:${t.kind}`).join(",")} to execute ${xe(e)}`);let u=function(t,e){let n=ht(e);if(void 0===n)return null;for(let e1 of Me(t,n.fieldPath))switch(e1.op){case"array-contains-any":return e1.value.arrayValue.values||[];case"array-contains":return[e1.value]}return null}(r,i),c=function(t,e){let n=new Map;for(let s of lt(e))for(let e1 of Me(t,s.fieldPath))switch(e1.op){case"==":case"in":n.set(s.fieldPath.canonicalString(),e1.value);break;case"not-in":case"!=":return n.set(s.fieldPath.canonicalString(),e1.value),Array.from(n.values())}return null}(r,i),a=function(t,e){let n=[],s=!0;for(let i of lt(e)){let e1=0===i.kind?Fe(t,i.fieldPath,t.startAt):$e(t,i.fieldPath,t.startAt);n.push(e1.value),s&&(s=e1.inclusive)}return new ze(n,s)}(r,i),h=function(t,e){let n=[],s=!0;for(let i of lt(e)){let e1=0===i.kind?$e(t,i.fieldPath,t.endAt):Fe(t,i.fieldPath,t.endAt);n.push(e1.value),s&&(s=e1.inclusive)}return new ze(n,s)}(r,i),l=this.nn(i,r,a),f=this.nn(i,r,h),d=this.sn(i,r,c),_=this.rn(i.indexId,u,l,a.inclusive,f,h.inclusive,d);return At.forEach(_,i=>n.J(i,e.limit).next(e=>{e.forEach(e=>{let n=ct.fromSegments(e.documentKey);t.has(n)||(t=t.add(n),s1.push(n))})}))}).next(()=>s1)}return At.resolve(null)})}tn(t){let e=this.Ze.get(t);return e||(e=[t],this.Ze.set(t,e),e)}rn(t,e,n,s,i,r,o){let u=(null!=e?e.length:1)*Math.max(n.length,i.length),c=u/(null!=e?e.length:1),a=[];for(let h=0;h<u;++h){let u1=e?this.on(e[h/c]):wr,l=this.un(t,u1,n[h%c],s),f=this.cn(t,u1,i[h%c],r),d=o.map(e=>this.un(t,u1,e,!0));a.push(...this.createRange(l,f,d))}return a}un(t,e,n,s){let i=new ar(t,ct.empty(),e,n);return s?i:i.Ke()}cn(t,e,n,s){let i=new ar(t,ct.empty(),e,n);return s?i.Ke():i}en(t,e){let n=new fr(e),s=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,s).next(t=>{let e=null;for(let s of t)n.We(s)&&(!e||s.fields.length>e.fields.length)&&(e=s);return e})}getIndexType(t,e){let n=2;return At.forEach(this.tn(e),e=>this.en(t,e).next(t=>{t?0!==n&&t.fields.length<function(t){let e=new qt(ut.comparator),n=!1;for(let s of t.filters){let t1=s;t1.field.isKeyField()||("array-contains"===t1.op||"array-contains-any"===t1.op?n=!0:e=e.add(t1.field))}for(let n1 of t.orderBy)n1.field.isKeyField()||(e=e.add(n1.field));return e.size+(n?1:0)}(e)&&(n=1):n=0})).next(()=>n)}an(t,e){let n=new cr;for(let s of lt(t)){let t1=e.data.field(s.fieldPath);if(null==t1)return null;let i=n.qe(s.kind);nr.Te.ce(t1,i)}return n.$e()}on(t){let e=new cr;return nr.Te.ce(t,e.qe(0)),e.$e()}hn(t,e){let n=new cr;return nr.Te.ce(we(this.databaseId,e),n.qe(function(t){let e=lt(t);return 0===e.length?0:e[e.length-1].kind}(t))),n.$e()}sn(t,e,n){if(null===n)return[];let s=[];s.push(new cr);let i=0;for(let r of lt(t)){let t1=n[i++];for(let n1 of s)if(this.ln(e,r.fieldPath)&&ge(t1))s=this.fn(s,r,t1);else{let e1=n1.qe(r.kind);nr.Te.ce(t1,e1)}}return this.dn(s)}nn(t,e,n){return this.sn(t,e,n.position)}dn(t){let e=[];for(let n=0;n<t.length;++n)e[n]=t[n].$e();return e}fn(t,e,n){let s=[...t],i=[];for(let t1 of n.arrayValue.values||[])for(let n1 of s){let s1=new cr;s1.seed(n1.$e()),nr.Te.ce(t1,s1.qe(e.kind)),i.push(s1)}return i}ln(t,e){return!!t.filters.find(t=>t instanceof Be&&t.field.isEqual(e)&&("in"===t.op||"not-in"===t.op))}getFieldIndexes(t,e){let n=pr(t),s=Ir(t);return(e?n.W("collectionGroupIndex",IDBKeyRange.bound(e,e)):n.W()).next(t=>{let e=[];return At.forEach(t,t=>s.get([t.indexId,this.uid]).next(n=>{e.push(function(t,e){let n=e?new wt(e.sequenceNumber,new yt(Ki(e.readTime),new ct(ci(e.documentKey)),e.largestBatchId)):wt.empty(),s=t.fields.map(([t,e])=>new dt(ut.fromServerFormat(t),e));return new at(t.indexId,t.collectionGroup,s,n)}(t,n))})).next(()=>e)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(t=>0===t.length?null:(t.sort((t,e)=>{let n=t.indexState.sequenceNumber-e.indexState.sequenceNumber;return 0!==n?n:Z(t.collectionGroup,e.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(t,e,n){let s=pr(t),i=Ir(t);return this._n(t).next(t=>s.W("collectionGroupIndex",IDBKeyRange.bound(e,e)).next(e=>At.forEach(e,e=>i.put(Ji(e.indexId,this.user,t,n)))))}updateIndexEntries(t,e){let n=new Map;return At.forEach(e,(e,s)=>{let i=n.get(e.collectionGroup);return(i?At.resolve(i):this.getFieldIndexes(t,e.collectionGroup)).next(i=>(n.set(e.collectionGroup,i),At.forEach(i,n=>this.wn(t,e,n).next(e=>{let i=this.mn(s,n);return e.isEqual(i)?At.resolve():this.gn(t,s,n,e,i)}))))})}yn(t,e,n,s){return yr(t).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.hn(n,e.key),documentKey:e.key.path.toArray()})}pn(t,e,n,s){return yr(t).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.hn(n,e.key),e.key.path.toArray()])}wn(t,e,n){let s=yr(t),i=new qt(hr);return s.Z({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.hn(n,e)])},(t,s)=>{i=i.add(new ar(n.indexId,e,s.arrayValue,s.directionalValue))}).next(()=>i)}mn(t,e){let n=new qt(hr),s=this.an(e,t);if(null==s)return n;let i=ht(e);if(null!=i){let r=t.data.field(i.fieldPath);if(ge(r))for(let i1 of r.arrayValue.values||[])n=n.add(new ar(e.indexId,t.key,this.on(i1),s))}else n=n.add(new ar(e.indexId,t.key,wr,s));return n}gn(t,e,n,s,i){C("IndexedDbIndexManager","Updating index entries for document '%s'",e.key);let r=[];return function(t,e,n,s,i){let r=t.getIterator(),o=e.getIterator(),u=Gt(r),c=Gt(o);for(;u||c;){let t1=!1,e1=!1;if(u&&c){let s1=n(u,c);s1<0?e1=!0:s1>0&&(t1=!0)}else null!=u?e1=!0:t1=!0;t1?(s(c),c=Gt(o)):e1?(i(u),u=Gt(r)):(u=Gt(r),c=Gt(o))}}(s,i,hr,s=>{r.push(this.yn(t,e,n,s))},s=>{r.push(this.pn(t,e,n,s))}),At.waitFor(r)}_n(t){let e=1;return Ir(t).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(t,n,s)=>{s.done(),e=n.sequenceNumber+1}).next(()=>e)}createRange(t,e,n){n=n.sort((t,e)=>hr(t,e)).filter((t,e,n)=>!e||0!==hr(t,n[e-1]));let s=[];for(let i of(s.push(t),n)){let n1=hr(i,t),r=hr(i,e);if(0===n1)s[0]=t.Ke();else if(n1>0&&r<0)s.push(i),s.push(i.Ke());else if(r>0)break}s.push(e);let i1=[];for(let t1=0;t1<s.length;t1+=2)i1.push(IDBKeyRange.bound([s[t1].indexId,this.uid,s[t1].arrayValue,s[t1].directionalValue,wr,[]],[s[t1+1].indexId,this.uid,s[t1+1].arrayValue,s[t1+1].directionalValue,wr,[]]));return i1}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(Tr)}getMinOffset(t,e){return At.mapArray(this.tn(e),e=>this.en(t,e).next(t=>t||O())).next(Tr)}}function gr(t){return Ni(t,"collectionParents")}function yr(t){return Ni(t,"indexEntries")}function pr(t){return Ni(t,"indexConfiguration")}function Ir(t){return Ni(t,"indexState")}function Tr(t){0!==t.length||O();let e=t[0].indexState.offset,n=e.largestBatchId;for(let s=1;s<t.length;s++){let i=t[s].indexState.offset;0>pt(i,e)&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new yt(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Er={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ar{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Ar(t,Ar.DEFAULT_COLLECTION_PERCENTILE,Ar.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Rr(t,e,n){let s=t.store("mutations"),i=t.store("documentMutations"),r=[],o=IDBKeyRange.only(n.batchId),u=0,c=s.Z({range:o},(t,e,n)=>(u++,n.delete()));r.push(c.next(()=>{1===u||O()}));let a=[];for(let t1 of n.mutations){var e1,n1;let s1=(e1=t1.key.path,n1=n.batchId,[e,ri(e1),n1]);r.push(i.delete(s1)),a.push(t1.key)}return At.waitFor(r).next(()=>a)}function br(t){let e;if(!t)return 0;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw O();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Ar.DEFAULT_COLLECTION_PERCENTILE=10,Ar.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ar.DEFAULT=new Ar(41943040,Ar.DEFAULT_COLLECTION_PERCENTILE,Ar.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ar.DISABLED=new Ar(-1,0,0);class Pr{constructor(t,e,n,s){this.userId=t,this.It=e,this.indexManager=n,this.referenceDelegate=s,this.In={}}static oe(t,e,n,s){""!==t.uid||O();let i=t.isAuthenticated()?t.uid:"";return new Pr(i,e,n,s)}checkEmpty(t){let e=!0,n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Vr(t).Z({index:"userMutationsIndex",range:n},(t,n,s)=>{e=!1,s.done()}).next(()=>e)}addMutationBatch(t,e,n,s){let i=Sr(t),r=Vr(t);return r.add({}).next(o=>{"number"==typeof o||O();let u=new ki(o,e,n,s),c=function(t,e,n){let s=n.baseMutations.map(e=>Ks(t.re,e)),i=n.mutations.map(e=>Ks(t.re,e));return{userId:e,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:s,mutations:i}}(this.It,this.userId,u),a=[],h=new qt((t,e)=>Z(t.canonicalString(),e.canonicalString()));for(let t1 of s){let e1=[this.userId,ri(t1.key.path),o];h=h.add(t1.key.path.popLast()),a.push(r.put(c)),a.push(i.put(e1,fi))}return h.forEach(e=>{a.push(this.indexManager.addToCollectionParentIndex(t,e))}),t.addOnCommittedListener(()=>{this.In[o]=u.keys()}),At.waitFor(a).next(()=>u)})}lookupMutationBatch(t,e){return Vr(t).get(e).next(t=>t?(t.userId===this.userId||O(),Gi(this.It,t)):null)}Tn(t,e){return this.In[e]?At.resolve(this.In[e]):this.lookupMutationBatch(t,e).next(t=>{if(t){let n=t.keys();return this.In[e]=n,n}return null})}getNextMutationBatchAfterBatchId(t,e){let n=e+1,s=IDBKeyRange.lowerBound([this.userId,n]),i=null;return Vr(t).Z({index:"userMutationsIndex",range:s},(t,e,s)=>{e.userId===this.userId&&(e.batchId>=n||O(),i=Gi(this.It,e)),s.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(t){let e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),n=-1;return Vr(t).Z({index:"userMutationsIndex",range:e,reverse:!0},(t,e,s)=>{n=e.batchId,s.done()}).next(()=>n)}getAllMutationBatches(t){let e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Vr(t).W("userMutationsIndex",e).next(t=>t.map(t=>Gi(this.It,t)))}getAllMutationBatchesAffectingDocumentKey(t,e){let n=[this.userId,ri(e.path)],s=IDBKeyRange.lowerBound(n),i=[];return Sr(t).Z({range:s},(n,s,r)=>{let[o,u,c]=n,a=ci(u);if(o===this.userId&&e.path.isEqual(a))return Vr(t).get(c).next(t=>{if(!t)throw O();t.userId===this.userId||O(),i.push(Gi(this.It,t))});r.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new qt(Z),s=[];return e.forEach(e=>{let i=[this.userId,ri(e.path)],r=IDBKeyRange.lowerBound(i),o=Sr(t).Z({range:r},(t,s,i)=>{let[r,o,u]=t,c=ci(o);r===this.userId&&e.path.isEqual(c)?n=n.add(u):i.done()});s.push(o)}),At.waitFor(s).next(()=>this.En(t,n))}getAllMutationBatchesAffectingQuery(t,e){let n=e.path,s=n.length+1,i=[this.userId,ri(n)],r=IDBKeyRange.lowerBound(i),o=new qt(Z);return Sr(t).Z({range:r},(t,e,i)=>{let[r,u,c]=t,a=ci(u);r===this.userId&&n.isPrefixOf(a)?a.length===s&&(o=o.add(c)):i.done()}).next(()=>this.En(t,o))}En(t,e){let n=[],s=[];return e.forEach(e=>{s.push(Vr(t).get(e).next(t=>{if(null===t)throw O();t.userId===this.userId||O(),n.push(Gi(this.It,t))}))}),At.waitFor(s).next(()=>n)}removeMutationBatch(t,e){return Rr(t.ie,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.An(e.batchId)}),At.forEach(n,e=>this.referenceDelegate.markPotentiallyOrphaned(t,e))))}An(t){delete this.In[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return At.resolve();let n=IDBKeyRange.lowerBound([this.userId]),s=[];return Sr(t).Z({range:n},(t,e,n)=>{if(t[0]===this.userId){let e1=ci(t[1]);s.push(e1)}else n.done()}).next(()=>{0===s.length||O()})})}containsKey(t,e){return vr(t,this.userId,e)}Rn(t){return Dr(t).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function vr(t,e,n){let s=[e,ri(n.path)],i=s[1],r=IDBKeyRange.lowerBound(s),o=!1;return Sr(t).Z({range:r,X:!0},(t,n,s)=>{let[r,u,c]=t;r===e&&u===i&&(o=!0),s.done()}).next(()=>o)}function Vr(t){return Ni(t,"mutations")}function Sr(t){return Ni(t,"documentMutations")}function Dr(t){return Ni(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Cr{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Cr(0)}static vn(){return new Cr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xr{constructor(t,e){this.referenceDelegate=t,this.It=e}allocateTargetId(t){return this.Vn(t).next(e=>{let n=new Cr(e.highestTargetId);return e.highestTargetId=n.next(),this.Sn(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.Vn(t).next(t=>st.fromTimestamp(new nt(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.Vn(t).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.Vn(t).next(s=>(s.highestListenSequenceNumber=e,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),e>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=e),this.Sn(t,s)))}addTargetData(t,e){return this.Dn(t,e).next(()=>this.Vn(t).next(n=>(n.targetCount+=1,this.Cn(e,n),this.Sn(t,n))))}updateTargetData(t,e){return this.Dn(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>Nr(t).delete(e.targetId)).next(()=>this.Vn(t)).next(e=>(e.targetCount>0||O(),e.targetCount-=1,this.Sn(t,e)))}removeTargets(t,e,n){let s=0,i=[];return Nr(t).Z((r,o)=>{let u=Qi(o);u.sequenceNumber<=e&&null===n.get(u.targetId)&&(s++,i.push(this.removeTargetData(t,u)))}).next(()=>At.waitFor(i)).next(()=>s)}forEachTarget(t,e){return Nr(t).Z((t,n)=>{let s=Qi(n);e(s)})}Vn(t){return kr(t).get("targetGlobalKey").next(t=>(null!==t||O(),t))}Sn(t,e){return kr(t).put("targetGlobalKey",e)}Dn(t,e){return Nr(t).put(ji(this.It,e))}Cn(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.Vn(t).next(t=>t.targetCount)}getTargetData(t,e){let n=xe(e),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]),i=null;return Nr(t).Z({range:s,index:"queryTargetsIndex"},(t,n,s)=>{let r=Qi(n);ke(e,r.target)&&(i=r,s.done())}).next(()=>i)}addMatchingKeys(t,e,n){let s=[],i=Or(t);return e.forEach(e=>{let r=ri(e.path);s.push(i.put({targetId:n,path:r})),s.push(this.referenceDelegate.addReference(t,n,e))}),At.waitFor(s)}removeMatchingKeys(t,e,n){let s=Or(t);return At.forEach(e,e=>{let i=ri(e.path);return At.waitFor([s.delete([n,i]),this.referenceDelegate.removeReference(t,n,e)])})}removeMatchingKeysForTargetId(t,e){let n=Or(t),s=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(t,e){let n=IDBKeyRange.bound([e],[e+1],!1,!0),s=Or(t),i=fs();return s.Z({range:n,X:!0},(t,e,n)=>{let s=ci(t[1]),r=new ct(s);i=i.add(r)}).next(()=>i)}containsKey(t,e){let n=ri(e.path),s=IDBKeyRange.bound([n],[n+"\0"],!1,!0),i=0;return Or(t).Z({index:"documentTargetsIndex",X:!0,range:s},([t,e],n,s)=>{0!==t&&(i++,s.done())}).next(()=>i>0)}se(t,e){return Nr(t).get(e).next(t=>t?Qi(t):null)}}function Nr(t){return Ni(t,"targets")}function kr(t){return Ni(t,"targetGlobal")}function Or(t){return Ni(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Mr([t,e],[n,s]){let i=Z(t,n);return 0===i?Z(e,s):i}class Fr{constructor(t){this.xn=t,this.buffer=new qt(Mr),this.Nn=0}kn(){return++this.Nn}On(t){let e=[t,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(e);else{let t1=this.buffer.last();0>Mr(e,t1)&&(this.buffer=this.buffer.delete(t1).add(e))}}get maxValue(){return this.buffer.last()[0]}}class $r{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Mn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return null!==this.Mn}Fn(t){C("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Vt(t)?C("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Et(t)}await this.Fn(3e5)})}}class Br{constructor(t,e){this.$n=t,this.params=e}calculateTargetCount(t,e){return this.$n.Bn(t).next(t=>Math.floor(e/100*t))}nthSequenceNumber(t,e){if(0===e)return At.resolve(Ot.at);let n=new Fr(e);return this.$n.forEachTarget(t,t=>n.On(t.sequenceNumber)).next(()=>this.$n.Ln(t,t=>n.On(t))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.$n.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.$n.removeOrphanedDocuments(t,e)}collect(t,e){return -1===this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector","Garbage collection skipped; disabled"),At.resolve(Er)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Er):this.Un(t,e))}getCacheSize(t){return this.$n.getCacheSize(t)}Un(t,e){let n,s,i,r,o,c,a;let h=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(e=>(e>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),s=this.params.maximumSequenceNumbersToCollect):s=e,r=Date.now(),this.nthSequenceNumber(t,s))).next(s=>(n=s,o=Date.now(),this.removeTargets(t,n,e))).next(e=>(i=e,c=Date.now(),this.removeOrphanedDocuments(t,n))).next(t=>(a=Date.now(),S()<=_firebase_logger__WEBPACK_IMPORTED_MODULE_2__.in.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${r-h}ms
	Determined least recently used ${s} in `+(o-r)+"ms\n"+`	Removed ${i} targets in `+(c-o)+"ms\n"+`	Removed ${t} documents in `+(a-c)+"ms\n"+`Total Duration: ${a-h}ms`),At.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:t})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Lr{constructor(t,e){this.db=t,this.garbageCollector=new Br(this,e)}Bn(t){let e=this.qn(t);return this.db.getTargetCache().getTargetCount(t).next(t=>e.next(e=>t+e))}qn(t){let e=0;return this.Ln(t,t=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}Ln(t,e){return this.Kn(t,(t,n)=>e(n))}addReference(t,e,n){return Ur(t,n)}removeReference(t,e,n){return Ur(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return Ur(t,e)}Gn(t,e){let n;return n=!1,Dr(t).tt(s=>vr(t,s,e).next(t=>(t&&(n=!0),At.resolve(!t)))).next(()=>n)}removeOrphanedDocuments(t,e){let n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[],i=0;return this.Kn(t,(r,o)=>{if(o<=e){let e1=this.Gn(t,r).next(e=>{if(!e)return i++,n.getEntry(t,r).next(()=>(n.removeEntry(r,st.min()),Or(t).delete([0,ri(r.path)])))});s.push(e1)}}).next(()=>At.waitFor(s)).next(()=>n.apply(t)).next(()=>i)}removeTarget(t,e){let n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return Ur(t,e)}Kn(t,e){let n=Or(t),s,i=Ot.at;return n.Z({index:"documentTargetsIndex"},([t,n],{path:r,sequenceNumber:o})=>{0===t?(i!==Ot.at&&e(new ct(ci(s)),i),i=o,s=r):i=Ot.at}).next(()=>{i!==Ot.at&&e(new ct(ci(s)),i)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Ur(t,e){var e1;return Or(t).put((e1=t.currentSequenceNumber,{targetId:0,path:ri(e.path),sequenceNumber:e1}))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qr{constructor(){this.changes=new es(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Se.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();let n=this.changes.get(e);return void 0!==n?At.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Kr{constructor(t){this.It=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return Wr(t).put(n)}removeEntry(t,e,n){return Wr(t).delete(function(t,e){let n=t.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],Ui(e),n[n.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.Qn(t,n)))}getEntry(t,e){let n=Se.newInvalidDocument(e);return Wr(t).Z({index:"documentKeyIndex",range:IDBKeyRange.only(zr(e))},(t,s)=>{n=this.jn(e,s)}).next(()=>n)}Wn(t,e){let n={size:0,document:Se.newInvalidDocument(e)};return Wr(t).Z({index:"documentKeyIndex",range:IDBKeyRange.only(zr(e))},(t,s)=>{n={document:this.jn(e,s),size:br(s)}}).next(()=>n)}getEntries(t,e){let n=ns;return this.zn(t,e,(t,e)=>{let s=this.jn(t,e);n=n.insert(t,s)}).next(()=>n)}Hn(t,e){let n=ns,s=new Bt(ct.comparator);return this.zn(t,e,(t,e)=>{let i=this.jn(t,e);n=n.insert(t,i),s=s.insert(t,br(e))}).next(()=>({documents:n,Jn:s}))}zn(t,e,n){if(e.isEmpty())return At.resolve();let s=new qt(Jr);e.forEach(t=>s=s.add(t));let i=IDBKeyRange.bound(zr(s.first()),zr(s.last())),r=s.getIterator(),o=r.getNext();return Wr(t).Z({index:"documentKeyIndex",range:i},(t,e,s)=>{let i=ct.fromSegments([...e.prefixPath,e.collectionGroup,e.documentId]);for(;o&&0>Jr(o,i);)n(o,null),o=r.getNext();o&&o.isEqual(i)&&(n(o,e),o=r.hasNext()?r.getNext():null),o?s.j(zr(o)):s.done()}).next(()=>{for(;o;)n(o,null),o=r.hasNext()?r.getNext():null})}getAllFromCollection(t,e,n){let s=[e.popLast().toArray(),e.lastSegment(),Ui(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],i=[e.popLast().toArray(),e.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Wr(t).W(IDBKeyRange.bound(s,i,!0)).next(t=>{let e=ns;for(let n of t){let t1=this.jn(ct.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);e=e.insert(t1.key,t1)}return e})}getAllFromCollectionGroup(t,e,n,s){let i=ns,r=Hr(e,n),o=Hr(e,yt.max());return Wr(t).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(r,o,!0)},(t,e,n)=>{let r=this.jn(ct.fromSegments(e.prefixPath.concat(e.collectionGroup,e.documentId)),e);(i=i.insert(r.key,r)).size===s&&n.done()}).next(()=>i)}newChangeBuffer(t){return new Qr(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(t=>t.byteSize)}getMetadata(t){return jr(t).get("remoteDocumentGlobalKey").next(t=>(t||O(),t))}Qn(t,e){return jr(t).put("remoteDocumentGlobalKey",e)}jn(t,e){if(e){let t1=function(t,e){let n;if(e.document)n=Ls(t.re,e.document,!!e.hasCommittedMutations);else if(e.noDocument){let t1=ct.fromSegments(e.noDocument.path),s=Ki(e.noDocument.readTime);n=Se.newNoDocument(t1,s),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return O();{let t2=ct.fromSegments(e.unknownDocument.path),s1=Ki(e.unknownDocument.version);n=Se.newUnknownDocument(t2,s1)}}return e.readTime&&n.setReadTime(function(t){let e=new nt(t[0],t[1]);return st.fromTimestamp(e)}(e.readTime)),n}(this.It,e);if(!(t1.isNoDocument()&&t1.version.isEqual(st.min())))return t1}return Se.newInvalidDocument(t)}}class Qr extends qr{constructor(t,e){super(),this.Yn=t,this.trackRemovals=e,this.Xn=new es(t=>t.toString(),(t,e)=>t.isEqual(e))}applyChanges(t){let e=[],n=0,s=new qt((t,e)=>Z(t.canonicalString(),e.canonicalString()));return this.changes.forEach((i,r)=>{let o=this.Xn.get(i);if(e.push(this.Yn.removeEntry(t,i,o.readTime)),r.isValidDocument()){let u=Li(this.Yn.It,r);s=s.add(i.path.popLast());let c=br(u);n+=c-o.size,e.push(this.Yn.addEntry(t,i,u))}else if(n-=o.size,this.trackRemovals){let n1=Li(this.Yn.It,r.convertToNoDocument(st.min()));e.push(this.Yn.addEntry(t,i,n1))}}),s.forEach(n=>{e.push(this.Yn.indexManager.addToCollectionParentIndex(t,n))}),e.push(this.Yn.updateMetadata(t,n)),At.waitFor(e)}getFromCache(t,e){return this.Yn.Wn(t,e).next(t=>(this.Xn.set(e,{size:t.size,readTime:t.document.readTime}),t.document))}getAllFromCache(t,e){return this.Yn.Hn(t,e).next(({documents:t,Jn:e})=>(e.forEach((e,n)=>{this.Xn.set(e,{size:n,readTime:t.get(e).readTime})}),t))}}function jr(t){return Ni(t,"remoteDocumentGlobal")}function Wr(t){return Ni(t,"remoteDocumentsV14")}function zr(t){let e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Hr(t,e){let n=e.documentKey.path.toArray();return[t,Ui(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Jr(t,e){let n=t.path.toArray(),s=e.path.toArray(),i=0;for(let t1=0;t1<n.length-2&&t1<s.length-2;++t1)if(i=Z(n[t1],s[t1]))return i;return(i=Z(n.length,s.length))||(i=Z(n[n.length-2],s[s.length-2]))||Z(n[n.length-1],s[s.length-1])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Yr{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xr{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.getBaseDocument(t,e,n))).next(t=>(null!==n&&Ln(n.mutation,t,Qt.empty(),nt.now()),t))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,fs()).next(()=>e))}getLocalViewOfDocuments(t,e,n=fs()){let s=as();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(t=>{let e=rs();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}getOverlayedDocuments(t,e){let n=as();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,fs()))}populateOverlays(t,e,n){let s=[];return n.forEach(t=>{e.has(t)||s.push(t)}),this.documentOverlayCache.getOverlays(t,s).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}computeViews(t,e,n,s){let i=ns,r=as(),o=as();return e.forEach((t,e)=>{let o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof Gn)?i=i.insert(e.key,e):void 0!==o&&(r.set(e.key,o.mutation.getFieldMask()),Ln(o.mutation,e,o.mutation.getFieldMask(),nt.now()))}),this.recalculateAndSaveOverlays(t,i).next(t=>(t.forEach((t,e)=>r.set(t,e)),e.forEach((t,e)=>{var n;return o.set(t,new Yr(e,null!==(n=r.get(t))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(t,e){let n=as(),s=new Bt((t,e)=>t-e),i=fs();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(let i of t)i.keys().forEach(t=>{let r=e.get(t);if(null===r)return;let o=n.get(t)||Qt.empty();o=i.applyToLocalView(r,o),n.set(t,o);let u=(s.get(i.batchId)||fs()).add(t);s=s.insert(i.batchId,u)})}).next(()=>{let r=[],o=s.getReverseIterator();for(;o.hasNext();){let s1=o.getNext(),u=s1.key,c=s1.value,a=as();c.forEach(t=>{if(!i.has(t)){let s=$n(e.get(t),n.get(t));null!==s&&a.set(t,s),i=i.add(t)}}),r.push(this.documentOverlayCache.saveOverlays(t,u,a))}return At.waitFor(r)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}getDocumentsMatchingQuery(t,e,n){return ct.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):on(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(i=>{let r=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):At.resolve(as()),o=-1,u=i;return r.next(e=>At.forEach(e,(e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?At.resolve():this.getBaseDocument(t,e,n).next(t=>{u=u.insert(e,t)}))).next(()=>this.populateOverlays(t,e,i)).next(()=>this.computeViews(t,u,e,fs())).next(t=>({batchId:o,changes:os(t)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ct(e)).next(t=>{let e=rs();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n){let s=e.collectionGroup,i=rs();return this.indexManager.getCollectionParents(t,s).next(r=>At.forEach(r,r=>{var e1;let o=(e1=r.child(s),new Ze(e1,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt));return this.getDocumentsMatchingCollectionQuery(t,o,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next(i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId))).next(t=>{t.forEach((t,e)=>{let n=e.getKey();null===s.get(n)&&(s=s.insert(n,Se.newInvalidDocument(n)))});let n=rs();return s.forEach((s,i)=>{let r=t.get(s);void 0!==r&&Ln(r.mutation,i,Qt.empty(),nt.now()),dn(e,i)&&(n=n.insert(s,i))}),n})}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):At.resolve(Se.newInvalidDocument(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zr{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return At.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){return this.Zn.set(e.id,{id:e.id,version:e.version,createTime:Ds(e.createTime)}),At.resolve()}getNamedQuery(t,e){return At.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,{name:e.name,query:Wi(e.bundledQuery),readTime:Ds(e.readTime)}),At.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class to{constructor(){this.overlays=new Bt(ct.comparator),this.es=new Map}getOverlay(t,e){return At.resolve(this.overlays.get(e))}getOverlays(t,e){let n=as();return At.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,s)=>{this.ue(t,e,s)}),At.resolve()}removeOverlaysForBatchId(t,e,n){let s=this.es.get(n);return void 0!==s&&(s.forEach(t=>this.overlays=this.overlays.remove(t)),this.es.delete(n)),At.resolve()}getOverlaysForCollection(t,e,n){let s=as(),i=e.length+1,r=new ct(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){let t1=o.getNext().value,r1=t1.getKey();if(!e.isPrefixOf(r1.path))break;r1.path.length===i&&t1.largestBatchId>n&&s.set(t1.getKey(),t1)}return At.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new Bt((t,e)=>t-e),r=this.overlays.getIterator();for(;r.hasNext();){let t1=r.getNext().value;if(t1.getKey().getCollectionGroup()===e&&t1.largestBatchId>n){let e1=i.get(t1.largestBatchId);null===e1&&(e1=as(),i=i.insert(t1.largestBatchId,e1)),e1.set(t1.getKey(),t1)}}let o=as(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((t,e)=>o.set(t,e)),!(o.size()>=s)););return At.resolve(o)}ue(t,e,n){let s=this.overlays.get(n.key);if(null!==s){let t1=this.es.get(s.largestBatchId).delete(n.key);this.es.set(s.largestBatchId,t1)}this.overlays=this.overlays.insert(n.key,new Mi(e,n));let i=this.es.get(e);void 0===i&&(i=fs(),this.es.set(e,i)),this.es.set(e,i.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eo{constructor(){this.ns=new qt(no.ss),this.rs=new qt(no.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){let n=new no(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.cs(new no(t,e))}hs(t,e){t.forEach(t=>this.removeReference(t,e))}ls(t){let e=new ct(new rt([])),n=new no(e,t),s=new no(e,t+1),i=[];return this.rs.forEachInRange([n,s],t=>{this.cs(t),i.push(t.key)}),i}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){let e=new ct(new rt([])),n=new no(e,t),s=new no(e,t+1),i=fs();return this.rs.forEachInRange([n,s],t=>{i=i.add(t.key)}),i}containsKey(t){let e=new no(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class no{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return ct.comparator(t.key,e.key)||Z(t._s,e._s)}static os(t,e){return Z(t._s,e._s)||ct.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class so{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new qt(no.ss)}checkEmpty(t){return At.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){let i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let r=new ki(i,e,n,s);for(let e1 of(this.mutationQueue.push(r),s))this.gs=this.gs.add(new no(e1.key,i)),this.indexManager.addToCollectionParentIndex(t,e1.key.path.popLast());return At.resolve(r)}lookupMutationBatch(t,e){return At.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){let s=this.ps(e+1),i=s<0?0:s;return At.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return At.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return At.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){let n=new no(e,0),s=new no(e,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,s],t=>{let e=this.ys(t._s);i.push(e)}),At.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new qt(Z);return e.forEach(t=>{let e=new no(t,0),s=new no(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,s],t=>{n=n.add(t._s)})}),At.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){let n=e.path,s=n.length+1,i=n;ct.isDocumentKey(i)||(i=i.child(""));let r=new no(new ct(i),0),o=new qt(Z);return this.gs.forEachWhile(t=>{let e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t._s)),!0)},r),At.resolve(this.Is(o))}Is(t){let e=[];return t.forEach(t=>{let n=this.ys(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){0===this.Ts(e.batchId,"removed")||O(),this.mutationQueue.shift();let n=this.gs;return At.forEach(e.mutations,s=>{let i=new no(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.gs=n})}An(t){}containsKey(t,e){let n=new no(e,0),s=this.gs.firstAfterOrEqual(n);return At.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,At.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){let e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class io{constructor(t){this.Es=t,this.docs=new Bt(ct.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){let n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){let e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){let n=this.docs.get(e);return At.resolve(n?n.document.mutableCopy():Se.newInvalidDocument(e))}getEntries(t,e){let n=ns;return e.forEach(t=>{let e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Se.newInvalidDocument(t))}),At.resolve(n)}getAllFromCollection(t,e,n){let s=ns,i=new ct(e.child("")),r=this.docs.getIteratorFrom(i);for(;r.hasNext();){let{key:t1,value:{document:i1}}=r.getNext();if(!e.isPrefixOf(t1.path))break;t1.path.length>e.length+1||0>=pt(gt(i1),n)||(s=s.insert(i1.key,i1.mutableCopy()))}return At.resolve(s)}getAllFromCollectionGroup(t,e,n,s){O()}As(t,e){return At.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new ro(this)}getSize(t){return At.resolve(this.size)}}class ro extends qr{constructor(t){super(),this.Yn=t}applyChanges(t){let e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.Yn.addEntry(t,s)):this.Yn.removeEntry(n)}),At.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oo{constructor(t){this.persistence=t,this.Rs=new es(t=>xe(t),ke),this.lastRemoteSnapshotVersion=st.min(),this.highestTargetId=0,this.bs=0,this.Ps=new eo,this.targetCount=0,this.vs=Cr.Pn()}forEachTarget(t,e){return this.Rs.forEach((t,n)=>e(n)),At.resolve()}getLastRemoteSnapshotVersion(t){return At.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return At.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),At.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),At.resolve()}Dn(t){this.Rs.set(t.target,t);let e=t.targetId;e>this.highestTargetId&&(this.vs=new Cr(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,At.resolve()}updateTargetData(t,e){return this.Dn(e),At.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,At.resolve()}removeTargets(t,e,n){let s=0,i=[];return this.Rs.forEach((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)}),At.waitFor(i).next(()=>s)}getTargetCount(t){return At.resolve(this.targetCount)}getTargetData(t,e){let n=this.Rs.get(e)||null;return At.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),At.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);let s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(e=>{i.push(s.markPotentiallyOrphaned(t,e))}),At.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),At.resolve()}getMatchingKeysForTargetId(t,e){let n=this.Ps.ds(e);return At.resolve(n)}containsKey(t,e){return At.resolve(this.Ps.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uo{constructor(t,e){var t1;this.Vs={},this.overlays={},this.Ss=new Ot(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new oo(this),this.indexManager=new dr,this.remoteDocumentCache=(t1=t=>this.referenceDelegate.xs(t),new io(t1)),this.It=new $i(e),this.Ns=new Zr(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new to,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new so(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){C("MemoryPersistence","Starting transaction:",t);let s=new co(this.Ss.next());return this.referenceDelegate.ks(),n(s).next(t=>this.referenceDelegate.Os(s).next(()=>t)).toPromise().then(t=>(s.raiseOnCommittedEvent(),t))}Ms(t,e){return At.or(Object.values(this.Vs).map(n=>()=>n.containsKey(t,e)))}}class co extends Tt{constructor(t){super(),this.currentSequenceNumber=t}}class ao{constructor(t){this.persistence=t,this.Fs=new eo,this.$s=null}static Bs(t){return new ao(t)}get Ls(){if(this.$s)return this.$s;throw O()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),At.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),At.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),At.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach(t=>this.Ls.add(t.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.Ls.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}ks(){this.$s=new Set}Os(t){let e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return At.forEach(this.Ls,n=>{let s=ct.fromPath(n);return this.Us(t,s).next(t=>{t||e.removeEntry(s,st.min())})}).next(()=>(this.$s=null,e.apply(t)))}updateLimboDocument(t,e){return this.Us(t,e).next(t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())})}xs(t){return 0}Us(t,e){return At.or([()=>At.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ho{constructor(t){this.It=t}$(t,e,n,s){let i=new Rt("createOrUpgrade",e);n<1&&s>=1&&(function(t){t.createObjectStore("owner")}(t),t.createObjectStore("mutationQueues",{keyPath:"userId"}),t.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ai,{unique:!0}),t.createObjectStore("documentMutations"),lo(t),function(t){t.createObjectStore("remoteDocuments")}(t));let r=At.resolve();return n<3&&s>=3&&(0!==n&&(t.deleteObjectStore("targetDocuments"),t.deleteObjectStore("targets"),t.deleteObjectStore("targetGlobal"),lo(t)),r=r.next(()=>(function(t){let e=t.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:st.min().toTimestamp(),targetCount:0};return e.put("targetGlobalKey",n)})(i))),n<4&&s>=4&&(0!==n&&(r=r.next(()=>i.store("mutations").W().next(n=>{t.deleteObjectStore("mutations"),t.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ai,{unique:!0});let s=i.store("mutations"),i1=n.map(t=>s.put(t));return At.waitFor(i1)}))),r=r.next(()=>{!function(t){t.createObjectStore("clientMetadata",{keyPath:"clientId"})}(t)})),n<5&&s>=5&&(r=r.next(()=>this.qs(i))),n<6&&s>=6&&(r=r.next(()=>((function(t){t.createObjectStore("remoteDocumentGlobal")})(t),this.Ks(i)))),n<7&&s>=7&&(r=r.next(()=>this.Gs(i))),n<8&&s>=8&&(r=r.next(()=>this.Qs(t,i))),n<9&&s>=9&&(r=r.next(()=>{t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")})),n<10&&s>=10&&(r=r.next(()=>this.js(i))),n<11&&s>=11&&(r=r.next(()=>{(function(t){t.createObjectStore("bundles",{keyPath:"bundleId"})})(t),function(t){t.createObjectStore("namedQueries",{keyPath:"name"})}(t)})),n<12&&s>=12&&(r=r.next(()=>{!function(t){let e=t.createObjectStore("documentOverlays",{keyPath:Ri});e.createIndex("collectionPathOverlayIndex",bi,{unique:!1}),e.createIndex("collectionGroupOverlayIndex",Pi,{unique:!1})}(t)})),n<13&&s>=13&&(r=r.next(()=>(function(t){let e=t.createObjectStore("remoteDocumentsV14",{keyPath:di});e.createIndex("documentKeyIndex",_i),e.createIndex("collectionGroupIndex",wi)})(t)).next(()=>this.Ws(t,i)).next(()=>t.deleteObjectStore("remoteDocuments"))),n<14&&s>=14&&(r=r.next(()=>this.zs(t,i))),n<15&&s>=15&&(r=r.next(()=>{t.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),t.createObjectStore("indexState",{keyPath:Ii}).createIndex("sequenceNumberIndex",Ti,{unique:!1}),t.createObjectStore("indexEntries",{keyPath:Ei}).createIndex("documentKeyIndex",Ai,{unique:!1})})),r}Ks(t){let e=0;return t.store("remoteDocuments").Z((t,n)=>{e+=br(n)}).next(()=>{let n={byteSize:e};return t.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}qs(t){let e=t.store("mutationQueues"),n=t.store("mutations");return e.W().next(e=>At.forEach(e,e=>{let s=IDBKeyRange.bound([e.userId,-1],[e.userId,e.lastAcknowledgedBatchId]);return n.W("userMutationsIndex",s).next(n=>At.forEach(n,n=>{n.userId===e.userId||O();let s=Gi(this.It,n);return Rr(t,e.userId,s).next(()=>{})}))}))}Gs(t){let e=t.store("targetDocuments"),n=t.store("remoteDocuments");return t.store("targetGlobal").get("targetGlobalKey").next(t=>{let s=[];return n.Z((n,i)=>{let r=new rt(n),o=[0,ri(r)];s.push(e.get(o).next(n=>n?At.resolve():e.put({targetId:0,path:ri(r),sequenceNumber:t.highestListenSequenceNumber})))}).next(()=>At.waitFor(s))})}Qs(t,e){t.createObjectStore("collectionParents",{keyPath:pi});let n=e.store("collectionParents"),s=new _r,i=t=>{if(s.add(t)){let e=t.lastSegment(),s1=t.popLast();return n.put({collectionId:e,parent:ri(s1)})}};return e.store("remoteDocuments").Z({X:!0},(t,e)=>{let n=new rt(t);return i(n.popLast())}).next(()=>e.store("documentMutations").Z({X:!0},([t,e,n],s)=>{let r=ci(e);return i(r.popLast())}))}js(t){let e=t.store("targets");return e.Z((t,n)=>{let s=Qi(n),i=ji(this.It,s);return e.put(i)})}Ws(t,e){let n=e.store("remoteDocuments"),s=[];return n.Z((t,n)=>{let i=e.store("remoteDocumentsV14"),r=(n.document?new ct(rt.fromString(n.document.name).popFirst(5)):n.noDocument?ct.fromSegments(n.noDocument.path):n.unknownDocument?ct.fromSegments(n.unknownDocument.path):O()).path.toArray(),u={prefixPath:r.slice(0,r.length-2),collectionGroup:r[r.length-2],documentId:r[r.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};s.push(i.put(u))}).next(()=>At.waitFor(s))}zs(t,e){var t1;let n=e.store("mutations"),s=(t1=this.It,new Kr(t1)),i=new uo(ao.Bs,this.It.re);return n.W().next(t=>{let n=new Map;return t.forEach(t=>{var e;let s=null!==(e=n.get(t.userId))&&void 0!==e?e:fs();Gi(this.It,t).keys().forEach(t=>s=s.add(t)),n.set(t.userId,s)}),At.forEach(n,(t,n)=>{let r=new P(n),o=tr.oe(this.It,r),u=i.getIndexManager(r),c=Pr.oe(r,this.It,u,i.referenceDelegate);return new Xr(s,c,o,u).recalculateAndSaveOverlaysForDocumentKeys(new xi(e,Ot.at),t).next()})})}}function lo(t){t.createObjectStore("targetDocuments",{keyPath:gi}).createIndex("documentTargetsIndex",yi,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",mi,{unique:!0}),t.createObjectStore("targetGlobal")}let fo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class _o{constructor(t,e,n,s,i,r,o,u,c,a,h=15){var t1;if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Hs=i,this.window=r,this.document=o,this.Js=c,this.Ys=a,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=t=>Promise.resolve(),!_o.C())throw new L(B.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Lr(this,s),this.ii=e+"main",this.It=new $i(u),this.ri=new bt(this.ii,this.Xs,new ho(this.It)),this.Cs=new xr(this.referenceDelegate,this.It),this.remoteDocumentCache=(t1=this.It,new Kr(t1)),this.Ns=new Yi,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,!1===a&&x("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new L(B.FAILED_PRECONDITION,fo);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.Cs.getHighestSequenceNumber(t))}).then(t=>{this.Ss=new Ot(t,this.Js)}).then(()=>{this.Ds=!0}).catch(t=>(this.ri&&this.ri.close(),Promise.reject(t)))}li(t){return this.si=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.ri.L(async e=>{null===e.newVersion&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>mo(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(t).next(t=>{t||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(t)).next(e=>this.isPrimary&&!e?this._i(t).next(()=>!1):!!e&&this.wi(t).next(()=>!0))).catch(t=>{if(Vt(t))return C("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return C("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.Hs.enqueueRetryable(()=>this.si(t)),this.isPrimary=t})}fi(t){return wo(t).get("owner").next(t=>At.resolve(this.mi(t)))}gi(t){return mo(t).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();let t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{let e=Ni(t,"clientMetadata");return e.W().next(t=>{let n=this.Ii(t,18e5),s=t.filter(t=>-1===n.indexOf(t));return At.forEach(s,t=>e.delete(t.clientId)).next(()=>s)})}).catch(()=>[]);if(this.oi)for(let e of t)this.oi.removeItem(this.Ti(e.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(t){return!!t&&t.ownerId===this.clientId}di(t){return this.Ys?At.resolve(!0):wo(t).get("owner").next(e=>{if(null!==e&&this.pi(e.leaseTimestampMs,5e3)&&!this.Ei(e.ownerId)){if(this.mi(e)&&this.networkEnabled)return!0;if(!this.mi(e)){if(!e.allowTabSynchronization)throw new L(B.FAILED_PRECONDITION,fo);return!1}}return!(!this.networkEnabled||!this.inForeground)||mo(t).W().next(t=>void 0===this.Ii(t,5e3).find(t=>{if(this.clientId!==t.clientId){let e=!this.networkEnabled&&t.networkEnabled,n=!this.inForeground&&t.inForeground,s=this.networkEnabled===t.networkEnabled;if(e||n&&s)return!0}return!1}))}).next(t=>(this.isPrimary!==t&&C("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],t=>{let e=new xi(t,Ot.at);return this._i(e).next(()=>this.gi(e))}),this.ri.close(),this.Pi()}Ii(t,e){return t.filter(t=>this.pi(t.updateTimeMs,e)&&!this.Ei(t.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",t=>mo(t).W().next(t=>this.Ii(t,18e5).map(t=>t.clientId)))}get started(){return this.Ds}getMutationQueue(t,e){return Pr.oe(t,this.It,e,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new mr(t,this.It.re.databaseId)}getDocumentOverlayCache(t){return tr.oe(this.It,t)}getBundleCache(){return this.Ns}runTransaction(t,e,n){var r;let o;C("IndexedDbPersistence","Starting transaction:",t);let i=15===(r=this.Xs)?Ci:14===r?Si:13===r?Si:12===r?Vi:11===r?vi:void O();return this.ri.runTransaction(t,"readonly"===e?"readonly":"readwrite",i,s=>(o=new xi(s,this.Ss?this.Ss.next():Ot.at),"readwrite-primary"===e?this.fi(o).next(t=>!!t||this.di(o)).next(e=>{if(!e)throw x(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new L(B.FAILED_PRECONDITION,It);return n(o)}).next(t=>this.wi(o).next(()=>t)):this.Vi(o).next(()=>n(o)))).then(t=>(o.raiseOnCommittedEvent(),t))}Vi(t){return wo(t).get("owner").next(t=>{if(null!==t&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)&&!this.mi(t)&&!(this.Ys||this.allowTabSynchronization&&t.allowTabSynchronization))throw new L(B.FAILED_PRECONDITION,fo)})}wi(t){let e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return wo(t).put("owner",e)}static C(){return bt.C()}_i(t){let e=wo(t);return e.get("owner").next(t=>this.mi(t)?(C("IndexedDbPersistence","Releasing primary lease."),e.delete("owner")):At.resolve())}pi(t,e){let n=Date.now();return!(t<n-e)&&(!(t>n)||(x(`Detected an update time that is in the future: ${t} > ${n}`),!1))}ci(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground="visible"===this.document.visibilityState)}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var t;"function"==typeof(null===(t=this.window)||void 0===t?void 0:t.addEventListener)&&(this.Zs=()=>{this.Ai(),(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.G6)()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(t){var e;try{let n=null!==(null===(e=this.oi)||void 0===e?void 0:e.getItem(this.Ti(t)));return C("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(t1){return x("IndexedDbPersistence","Failed to get zombied client id.",t1),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(t){x("Failed to set zombie client id.",t)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch(t){}}Ti(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function wo(t){return Ni(t,"owner")}function mo(t){return Ni(t,"clientMetadata")}function go(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yo{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=s}static Ci(t,e){let n=fs(),s=fs();for(let t1 of e.docChanges)switch(t1.type){case 0:n=n.add(t1.doc.key);break;case 1:s=s.add(t1.doc.key)}return new yo(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class po{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,s){return this.ki(t,e).next(i=>i||this.Oi(t,e,s,n)).next(n=>n||this.Mi(t,e))}ki(t,e){if(nn(e))return At.resolve(null);let n=cn(e);return this.indexManager.getIndexType(t,n).next(s=>0===s?null:(null!==e.limit&&1===s&&(n=cn(e=an(e,null,"F"))),this.indexManager.getDocumentsMatchingTarget(t,n).next(s=>{let i=fs(...s);return this.Ni.getDocuments(t,i).next(s=>this.indexManager.getMinOffset(t,n).next(n=>{let r=this.Fi(e,s);return this.$i(e,r,i,n.readTime)?this.ki(t,an(e,null,"F")):this.Bi(t,r,e,n)}))})))}Oi(t,e,n,s){return nn(e)||s.isEqual(st.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next(i=>{let r=this.Fi(e,i);return this.$i(e,r,n,s)?this.Mi(t,e):(S()<=_firebase_logger__WEBPACK_IMPORTED_MODULE_2__.in.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),fn(e)),this.Bi(t,r,e,mt(s,-1)))})}Fi(t,e){let n=new qt(wn(t));return e.forEach((e,s)=>{dn(t,s)&&(n=n.add(s))}),n}$i(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;let i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Mi(t,e){return S()<=_firebase_logger__WEBPACK_IMPORTED_MODULE_2__.in.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",fn(e)),this.Ni.getDocumentsMatchingQuery(t,e,yt.min())}Bi(t,e,n,s){return this.Ni.getDocumentsMatchingQuery(t,n,s).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Io{constructor(t,e,n,s){this.persistence=t,this.Li=e,this.It=s,this.Ui=new Bt(Z),this.qi=new es(t=>xe(t),ke),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Xr(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ui))}}async function Eo(t,e){return await t.persistence.runTransaction("Handle user change","readonly",t1=>{let s;return t.mutationQueue.getAllMutationBatches(t1).next(i=>(s=i,t.Qi(e),t.mutationQueue.getAllMutationBatches(t1))).next(e=>{let i=[],r=[],o=fs();for(let t2 of s)for(let e1 of(i.push(t2.batchId),t2.mutations))o=o.add(e1.key);for(let t3 of e)for(let e2 of(r.push(t3.batchId),t3.mutations))o=o.add(e2.key);return t.localDocuments.getDocuments(t1,o).next(t=>({ji:t,removedBatchIds:i,addedBatchIds:r}))})})}function Ro(t){return t.persistence.runTransaction("Get last remote snapshot version","readonly",t1=>t.Cs.getLastRemoteSnapshotVersion(t1))}function Po(t,e,n){let s=fs(),i=fs();return n.forEach(t=>s=s.add(t)),e.getEntries(t,s).next(t=>{let s=ns;return n.forEach((n,r)=>{let o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),r.isNoDocument()&&r.version.isEqual(st.min())?(e.removeEntry(n,r.readTime),s=s.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),s=s.insert(n,r)):C("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)}),{Wi:s,zi:i}})}function Vo(t,e){let n=t;return n.persistence.runTransaction("Allocate target","readwrite",t=>{let s;return n.Cs.getTargetData(t,e).next(i=>i?(s=i,At.resolve(s)):n.Cs.allocateTargetId(t).next(i=>(s=new Fi(e,i,0,t.currentSequenceNumber),n.Cs.addTargetData(t,s).next(()=>s))))}).then(t=>{let s=n.Ui.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(t.targetId,t),n.qi.set(e,t.targetId)),t})}async function So(t,e,n){let s=t,i=s.Ui.get(e);try{n||await s.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>s.persistence.referenceDelegate.removeTarget(t,i))}catch(t1){if(!Vt(t1))throw t1;C("LocalStore",`Failed to update sequence numbers for target ${e}: ${t1}`)}s.Ui=s.Ui.remove(e),s.qi.delete(i.target)}function Do(t,e,n){let i=st.min(),r=fs();return t.persistence.runTransaction("Execute query","readonly",t1=>(function(t,e,n){let i=t.qi.get(n);return void 0!==i?At.resolve(t.Ui.get(i)):t.Cs.getTargetData(e,n)})(t,t1,cn(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,t.Cs.getMatchingKeysForTargetId(t1,e.targetId).next(t=>{r=t})}).next(()=>t.Li.getDocumentsMatchingQuery(t1,e,n?i:st.min(),n?r:fs())).next(t1=>(No(t,_n(e),t1),{documents:t1,Hi:r})))}function Co(t,e){let s=t.Cs,i=t.Ui.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",t=>s.se(t,e).next(t=>t?t.target:null))}function xo(t,e){let s=t.Ki.get(e)||st.min();return t.persistence.runTransaction("Get new document changes","readonly",t1=>t.Gi.getAllFromCollectionGroup(t1,e,mt(s,-1),Number.MAX_SAFE_INTEGER)).then(t1=>(No(t,e,t1),t1))}function No(t,e,n){let s=t.Ki.get(e)||st.min();n.forEach((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)}),t.Ki.set(e,s)}async function ko(t,e,n,s){let r=fs(),o=ns;for(let t1 of n){let n1=e.Ji(t1.metadata.name);t1.document&&(r=r.add(n1));let s1=e.Yi(t1);s1.setReadTime(e.Xi(t1.metadata.readTime)),o=o.insert(n1,s1)}let u=t.Gi.newChangeBuffer({trackRemovals:!0}),c=await Vo(t,cn(en(rt.fromString(`__bundle__/docs/${s}`))));return t.persistence.runTransaction("Apply bundle documents","readwrite",t1=>Po(t1,u,o).next(e=>(u.apply(t1),e)).next(e=>t.Cs.removeMatchingKeysForTargetId(t1,c.targetId).next(()=>t.Cs.addMatchingKeys(t1,r,c.targetId)).next(()=>t.localDocuments.getLocalViewOfDocuments(t1,e.Wi,e.zi)).next(()=>e.Wi)))}async function Oo(t,e,n=fs()){let s=await Vo(t,cn(Wi(e.bundledQuery))),i=t;return i.persistence.runTransaction("Save named query","readwrite",t=>{let r=Ds(e.readTime);if(s.snapshotVersion.compareTo(r)>=0)return i.Ns.saveNamedQuery(t,e);let o=s.withResumeToken(Wt.EMPTY_BYTE_STRING,r);return i.Ui=i.Ui.insert(o.targetId,o),i.Cs.updateTargetData(t,o).next(()=>i.Cs.removeMatchingKeysForTargetId(t,s.targetId)).next(()=>i.Cs.addMatchingKeys(t,n,s.targetId)).next(()=>i.Ns.saveNamedQuery(t,e))})}function Mo(t,e){return`firestore_clients_${t}_${e}`}function Fo(t,e,n){let s=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(s+=`_${e.uid}`),s}function $o(t,e){return`firestore_targets_${t}_${e}`}class Bo{constructor(t,e,n,s){this.user=t,this.batchId=e,this.state=n,this.error=s}static Zi(t,e,n){let s=JSON.parse(n),i,r="object"==typeof s&&-1!==["pending","acknowledged","rejected"].indexOf(s.state)&&(void 0===s.error||"object"==typeof s.error);return r&&s.error&&(r="string"==typeof s.error.message&&"string"==typeof s.error.code)&&(i=new L(s.error.code,s.error.message)),r?new Bo(t,e,s.state,i):(x("SharedClientState",`Failed to parse mutation state for ID '${e}': ${n}`),null)}tr(){let t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Lo{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static Zi(t,e){let n=JSON.parse(e),s,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code)&&(s=new L(n.error.code,n.error.message)),i?new Lo(t,n.state,s):(x("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}tr(){let t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Uo{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Zi(t,e){let n=JSON.parse(e),s="object"==typeof n&&n.activeTargetIds instanceof Array,i=ds;for(let t1=0;s&&t1<n.activeTargetIds.length;++t1)s=re(n.activeTargetIds[t1]),i=i.add(n.activeTargetIds[t1]);return s?new Uo(t,i):(x("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class qo{constructor(t,e){this.clientId=t,this.onlineState=e}static Zi(t){let e=JSON.parse(t);return"object"==typeof e&&-1!==["Unknown","Online","Offline"].indexOf(e.onlineState)&&"string"==typeof e.clientId?new qo(e.clientId,e.onlineState):(x("SharedClientState",`Failed to parse online state: ${t}`),null)}}class Ko{constructor(){this.activeTargetIds=ds}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){let t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Go{constructor(t,e,n,s,i){this.window=t,this.Hs=e,this.persistenceKey=n,this.sr=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new Bt(Z),this.started=!1,this.cr=[];let r=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ar=Mo(this.persistenceKey,this.sr),this.hr=`firestore_sequence_number_${this.persistenceKey}`,this.ur=this.ur.insert(this.sr,new Ko),this.lr=RegExp(`^firestore_clients_${r}_([^_]*)$`),this.dr=RegExp(`^firestore_mutations_${r}_(\\d+)(?:_(.*))?$`),this._r=RegExp(`^firestore_targets_${r}_(\\d+)$`),this.wr=`firestore_online_state_${this.persistenceKey}`,this.mr=`firestore_bundle_loaded_v2_${this.persistenceKey}`,this.window.addEventListener("storage",this.ir)}static C(t){return!(!t||!t.localStorage)}async start(){let t=await this.syncEngine.vi();for(let e of t){if(e===this.sr)continue;let t1=this.getItem(Mo(this.persistenceKey,e));if(t1){let n=Uo.Zi(e,t1);n&&(this.ur=this.ur.insert(n.clientId,n))}}this.gr();let e1=this.storage.getItem(this.wr);if(e1){let t2=this.yr(e1);t2&&this.pr(t2)}for(let t3 of this.cr)this.rr(t3);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.hr,JSON.stringify(t))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(t){let e=!1;return this.ur.forEach((n,s)=>{s.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.Tr(t,"pending")}updateMutationState(t,e,n){this.Tr(t,e,n),this.Er(t)}addLocalQueryTarget(t){let e="not-current";if(this.isActiveQueryTarget(t)){let n=this.storage.getItem($o(this.persistenceKey,t));if(n){let s=Lo.Zi(t,n);s&&(e=s.state)}}return this.Ar.er(t),this.gr(),e}removeLocalQueryTarget(t){this.Ar.nr(t),this.gr()}isLocalQueryTarget(t){return this.Ar.activeTargetIds.has(t)}clearQueryState(t){this.removeItem($o(this.persistenceKey,t))}updateQueryState(t,e,n){this.Rr(t,e,n)}handleUserChange(t,e,n){e.forEach(t=>{this.Er(t)}),this.currentUser=t,n.forEach(t=>{this.addPendingMutation(t)})}setOnlineState(t){this.br(t)}notifyBundleLoaded(t){this.Pr(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(t){let e=this.storage.getItem(t);return C("SharedClientState","READ",t,e),e}setItem(t,e){C("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){C("SharedClientState","REMOVE",t),this.storage.removeItem(t)}rr(t){if(t.storageArea===this.storage){if(C("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ar)return void x("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(null!==t.key){if(this.lr.test(t.key)){if(null==t.newValue){let t1=this.vr(t.key);return this.Vr(t1,null)}{let t2=this.Sr(t.key,t.newValue);if(t2)return this.Vr(t2.clientId,t2)}}else if(this.dr.test(t.key)){if(null!==t.newValue){let t3=this.Dr(t.key,t.newValue);if(t3)return this.Cr(t3)}}else if(this._r.test(t.key)){if(null!==t.newValue){let t4=this.Nr(t.key,t.newValue);if(t4)return this.kr(t4)}}else if(t.key===this.wr){if(null!==t.newValue){let t5=this.yr(t.newValue);if(t5)return this.pr(t5)}}else if(t.key===this.hr){let t6=function(t){let e=Ot.at;if(null!=t)try{let n=JSON.parse(t);"number"==typeof n||O(),e=n}catch(t1){x("SharedClientState","Failed to read sequence number from WebStorage",t1)}return e}(t.newValue);t6!==Ot.at&&this.sequenceNumberHandler(t6)}else if(t.key===this.mr){let t7=this.Or(t.newValue);await Promise.all(t7.map(t=>this.syncEngine.Mr(t)))}}}else this.cr.push(t)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(t,e,n){let s=new Bo(this.currentUser,t,e,n),i=Fo(this.persistenceKey,this.currentUser,t);this.setItem(i,s.tr())}Er(t){let e=Fo(this.persistenceKey,this.currentUser,t);this.removeItem(e)}br(t){let e={clientId:this.sr,onlineState:t};this.storage.setItem(this.wr,JSON.stringify(e))}Rr(t,e,n){let s=$o(this.persistenceKey,t),i=new Lo(t,e,n);this.setItem(s,i.tr())}Pr(t){let e=JSON.stringify(Array.from(t));this.setItem(this.mr,e)}vr(t){let e=this.lr.exec(t);return e?e[1]:null}Sr(t,e){let n=this.vr(t);return Uo.Zi(n,e)}Dr(t,e){let n=this.dr.exec(t),s=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Bo.Zi(new P(i),s,e)}Nr(t,e){let n=this._r.exec(t),s=Number(n[1]);return Lo.Zi(s,e)}yr(t){return qo.Zi(t)}Or(t){return JSON.parse(t)}async Cr(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.Fr(t.batchId,t.state,t.error);C("SharedClientState",`Ignoring mutation for non-active user ${t.user.uid}`)}kr(t){return this.syncEngine.$r(t.targetId,t.state,t.error)}Vr(t,e){let n=e?this.ur.insert(t,e):this.ur.remove(t),s=this.Ir(this.ur),i=this.Ir(n),r=[],o=[];return i.forEach(t=>{s.has(t)||r.push(t)}),s.forEach(t=>{i.has(t)||o.push(t)}),this.syncEngine.Br(r,o).then(()=>{this.ur=n})}pr(t){this.ur.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}Ir(t){let e=ds;return t.forEach((t,n)=>{e=e.unionWith(n.activeTargetIds)}),e}}class Qo{constructor(){this.Lr=new Ko,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,e,n){this.Ur[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Ko,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jo{qr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Wo{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){for(let t of(C("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Wr))t(0)}jr(){for(let t of(C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Wr))t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let zo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ho{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Jo extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,e,n,s,i){let r=this.ho(t,e);C("RestConnection","Sending: ",r,n);let o={};return this.lo(o,s,i),this.fo(t,r,o,n).then(t=>(C("RestConnection","Received: ",t),t),e=>{throw N("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e})}_o(t,e,n,s,i,r){return this.ao(t,e,n,s,i)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+v,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}ho(t,e){let n=zo[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,s){return new Promise((i,r)=>{let o=new _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__.JJ;o.setWithCredentials(!0),o.listenOnce(_firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__.tw.COMPLETE,()=>{var e;try{switch(o.getLastErrorCode()){case _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__.jK.NO_ERROR:let n=o.getResponseJson();C("Connection","XHR received:",JSON.stringify(n)),i(n);break;case _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__.jK.TIMEOUT:C("Connection",'RPC "'+t+'" timed out'),r(new L(B.DEADLINE_EXCEEDED,"Request time out"));break;case _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__.jK.HTTP_ERROR:let s=o.getStatus();if(C("Connection",'RPC "'+t+'" failed with status:',s,"response text:",o.getResponseText()),s>0){let t1=o.getResponseJson();Array.isArray(t1)&&(t1=t1[0]);let n1=null===(e=t1)||void 0===e?void 0:e.error;if(n1&&n1.status&&n1.message){let t2=function(t){let e=t.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(e)>=0?e:B.UNKNOWN}(n1.status);r(new L(t2,n1.message))}else r(new L(B.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new L(B.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{C("Connection",'RPC "'+t+'" completed.')}});let u=JSON.stringify(s);o.send(e,"POST",u,n,15)})}wo(t,e,n){let s=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=(0,_firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__.UE)(),r=(0,_firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__.FJ)(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__.zI({})),this.lo(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;let u=s.join("");C("Connection","Creating WebChannel: "+u,o);let c=i.createWebChannel(u,o),a=!1,h=!1,l=new Ho({Hr(t){h?C("Connection","Not sending because WebChannel is closed:",t):(a||(C("Connection","Opening WebChannel transport."),c.open(),a=!0),C("Connection","WebChannel sending:",t),c.send(t))},Jr:()=>c.close()}),f=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t1){setTimeout(()=>{throw t1},0)}})};return f(c,_firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__.ii.EventType.OPEN,()=>{h||C("Connection","WebChannel transport opened.")}),f(c,_firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__.ii.EventType.CLOSE,()=>{h||(h=!0,C("Connection","WebChannel transport closed"),l.io())}),f(c,_firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__.ii.EventType.ERROR,t=>{h||(h=!0,N("Connection","WebChannel transport errored:",t),l.io(new L(B.UNAVAILABLE,"The operation could not be completed")))}),f(c,_firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__.ii.EventType.MESSAGE,t=>{var e;if(!h){let n=t.data[0];n||O();let i=n.error||(null===(e=n[0])||void 0===e?void 0:e.error);if(i){C("Connection","WebChannel received error:",i);let t1=i.status,e1=function(t){let e=Yn[t];if(void 0!==e)return ts(e)}(t1),n1=i.message;void 0===e1&&(e1=B.INTERNAL,n1="Unknown error status: "+t1+" with message "+i.message),h=!0,l.io(new L(e1,n1)),c.close()}else C("Connection","WebChannel received:",n),l.ro(n)}}),f(r,_firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__.ju.STAT_EVENT,t=>{t.stat===_firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__.kN.PROXY?C("Connection","Detected buffering proxy"):t.stat===_firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__.kN.NOPROXY&&C("Connection","Detected no buffering proxy")}),setTimeout(()=>{l.so()},0),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Yo(){return"undefined"!=typeof window?window:null}function Xo(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Zo(t){return new Ps(t,!0)}class tu{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();let e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),s=Math.max(0,e-n);s>0&&C("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eu{constructor(t,e,n,s,i,r,o,u){this.Hs=t,this.vo=n,this.Vo=s,this.connection=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=u,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new tu(t,e)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===B.RESOURCE_EXHAUSTED?(x(e.toString()),x("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):e&&e.code===B.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}qo(){}auth(){this.state=1;let t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.So===e&&this.Go(t,n)},e=>{t(()=>{let t=new L(B.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)})})}Go(t,e){let n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr(()=>{n(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(t=>{n(()=>this.Qo(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return C("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget(()=>this.So===t?e():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nu extends eu{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.It=i}jo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.xo.reset();let e=function(t,e){let n;if("targetChange"in e){var t1,e1;e.targetChange;let s="NO_CHANGE"===(t1=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===t1?1:"REMOVE"===t1?2:"CURRENT"===t1?3:"RESET"===t1?4:O(),i=e.targetChange.targetIds||[],r=(e1=e.targetChange.resumeToken,t.gt?(void 0===e1||"string"==typeof e1||O(),Wt.fromBase64String(e1||"")):(void 0===e1||e1 instanceof Uint8Array||O(),Wt.fromUint8Array(e1||new Uint8Array))),o=e.targetChange.cause,u=o&&function(t){let e=void 0===t.code?B.UNKNOWN:ts(t.code);return new L(e,t.message||"")}(o);n=new ps(s,i,r,u||null)}else if("documentChange"in e){e.documentChange;let s1=e.documentChange;s1.document,s1.document.name,s1.document.updateTime;let i1=ks(t,s1.document.name),r1=Ds(s1.document.updateTime),o1=new ve({mapValue:{fields:s1.document.fields}}),u1=Se.newFoundDocument(i1,r1,o1),c=s1.targetIds||[],a=s1.removedTargetIds||[];n=new gs(c,a,u1.key,u1)}else if("documentDelete"in e){e.documentDelete;let s2=e.documentDelete;s2.document;let i2=ks(t,s2.document),r2=s2.readTime?Ds(s2.readTime):st.min(),o2=Se.newNoDocument(i2,r2),u2=s2.removedTargetIds||[];n=new gs([],u2,o2.key,o2)}else if("documentRemove"in e){e.documentRemove;let s3=e.documentRemove;s3.document;let i3=ks(t,s3.document),r3=s3.removedTargetIds||[];n=new gs([],r3,i3,null)}else{if(!("filter"in e))return O();{e.filter;let t2=e.filter;t2.targetId;let s4=t2.count||0,i4=new Jn(s4),r4=t2.targetId;n=new ys(r4,i4)}}return n}(this.It,t),n=function(t){if(!("targetChange"in t))return st.min();let e=t.targetChange;return e.targetIds&&e.targetIds.length?st.min():e.readTime?Ds(e.readTime):st.min()}(t);return this.listener.Wo(e,n)}zo(t){let e={};e.database=Fs(this.It),e.addTarget=function(t,e){let n;let s=e.target;return(n=Oe(s)?{documents:js(t,s)}:{query:Ws(t,s)}).targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Vs(t,e.resumeToken):e.snapshotVersion.compareTo(st.min())>0&&(n.readTime=vs(t,e.snapshotVersion.toTimestamp())),n}(this.It,t);let n=function(t,e){let n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return O()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.It,t);n&&(e.labels=n),this.Bo(e)}Ho(t){let e={};e.database=Fs(this.It),e.removeTarget=t,this.Bo(e)}}class su extends eu{constructor(t,e,n,s,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,r),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){var t1,e;if(t.streamToken||O(),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();let e1=(t1=t.writeResults,e=t.commitTime,t1&&t1.length>0?(void 0!==e||O(),t1.map(t=>{let n;return(n=t.updateTime?Ds(t.updateTime):Ds(e)).isEqual(st.min())&&(n=Ds(e)),new kn(n,t.transformResults||[])})):[]),n=Ds(t.commitTime);return this.listener.Zo(n,e1)}return t.writeResults&&0!==t.writeResults.length&&O(),this.Jo=!0,this.listener.tu()}eu(){let t={};t.database=Fs(this.It),this.Bo(t)}Xo(t){let e={streamToken:this.lastStreamToken,writes:t.map(t=>Ks(this.It,t))};this.Bo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iu extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.It=s,this.nu=!1}su(){if(this.nu)throw new L(B.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.ao(t,e,n,s,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new L(B.UNKNOWN,t.toString())})}_o(t,e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection._o(t,e,n,i,r,s)).catch(t=>{throw"FirebaseError"===t.name?(t.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new L(B.UNKNOWN,t.toString())})}terminate(){this.nu=!0}}class ou{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){let e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(x(e),this.ou=!1):C("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uu{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(t=>{n.enqueueAndForget(async()=>{mu(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(t){t._u.add(4),await au(t),t.gu.set("Unknown"),t._u.delete(4),await cu(t)}(this))})}),this.gu=new ou(n,s)}}async function cu(t){if(mu(t))for(let e of t.wu)await e(!0)}async function au(t){for(let e of t.wu)await e(!1)}function hu(t,e){t.du.has(e.targetId)||(t.du.set(e.targetId,e),wu(t)?_u(t):ku(t).ko()&&fu(t,e))}function lu(t,e){let s=ku(t);t.du.delete(e),s.ko()&&du(t,e),0===t.du.size&&(s.ko()?s.Fo():mu(t)&&t.gu.set("Unknown"))}function fu(t,e){t.yu.Mt(e.targetId),ku(t).zo(e)}function du(t,e){t.yu.Mt(e),ku(t).Ho(e)}function _u(t){t.yu=new Ts({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),ku(t).start(),t.gu.uu()}function wu(t){return mu(t)&&!ku(t).No()&&t.du.size>0}function mu(t){return 0===t._u.size}async function yu(t){t.du.forEach((e,n)=>{fu(t,e)})}async function pu(t,e){t.yu=void 0,wu(t)?(t.gu.hu(e),_u(t)):t.gu.set("Unknown")}async function Iu(t,e,n){if(t.gu.set("Online"),e instanceof ps&&2===e.state&&e.cause)try{await async function(t,e){let n=e.cause;for(let s of e.targetIds)t.du.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.du.delete(s),t.yu.removeTarget(s))}(t,e)}catch(n1){C("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n1),await Tu(t,n1)}else if(e instanceof gs?t.yu.Gt(e):e instanceof ys?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(st.min()))try{let e1=await Ro(t.localStore);n.compareTo(e1)>=0&&await function(t,e){let n=t.yu.te(e);return n.targetChanges.forEach((n,s)=>{if(n.resumeToken.approximateByteSize()>0){let i=t.du.get(s);i&&t.du.set(s,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{let n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(Wt.EMPTY_BYTE_STRING,n.snapshotVersion)),du(t,e);let s=new Fi(n.target,e,1,n.sequenceNumber);fu(t,s)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e2){C("RemoteStore","Failed to raise snapshot:",e2),await Tu(t,e2)}}async function Tu(t,e,n){if(!Vt(e))throw e;t._u.add(1),await au(t),t.gu.set("Offline"),n||(n=()=>Ro(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await cu(t)})}function Eu(t,e){return e().catch(n=>Tu(t,n,e))}async function Au(t){let n=Ou(t),s=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;mu(t)&&t.fu.length<10;)try{let t1=await function(t,e){return t.persistence.runTransaction("Get next mutation batch","readonly",t1=>(void 0===e&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(t1,e)))}(t.localStore,s);if(null===t1){0===t.fu.length&&n.Fo();break}s=t1.batchId,function(t,e){t.fu.push(e);let n=Ou(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}(t,t1)}catch(t2){await Tu(t,t2)}Pu(t)&&vu(t)}function Pu(t){return mu(t)&&!Ou(t).No()&&t.fu.length>0}function vu(t){Ou(t).start()}async function Vu(t){Ou(t).eu()}async function Su(t){let e=Ou(t);for(let n of t.fu)e.Xo(n.mutations)}async function Du(t,e,n){let s=t.fu.shift(),i=Oi.from(s,e,n);await Eu(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Au(t)}async function Cu(t,e){e&&Ou(t).Yo&&await async function(t,e){var n;if(Zn(n=e.code)&&n!==B.ABORTED){let n1=t.fu.shift();Ou(t).Mo(),await Eu(t,()=>t.remoteSyncer.rejectFailedWrite(n1.batchId,e)),await Au(t)}}(t,e),Pu(t)&&vu(t)}async function xu(t,e){t.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");let s=mu(t);t._u.add(3),await au(t),s&&t.gu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t._u.delete(3),await cu(t)}async function Nu(t,e){e?(t._u.delete(2),await cu(t)):e||(t._u.add(2),await au(t),t.gu.set("Unknown"))}function ku(t){var t1,e,n;return t.pu||(t.pu=(t1=t.datastore,e=t.asyncQueue,n={Yr:yu.bind(null,t),Zr:pu.bind(null,t),Wo:Iu.bind(null,t)},t1.su(),new nu(e,t1.connection,t1.authCredentials,t1.appCheckCredentials,t1.It,n)),t.wu.push(async e=>{e?(t.pu.Mo(),wu(t)?_u(t):t.gu.set("Unknown")):(await t.pu.stop(),t.yu=void 0)})),t.pu}function Ou(t){var t1,e,n;return t.Iu||(t.Iu=(t1=t.datastore,e=t.asyncQueue,n={Yr:Vu.bind(null,t),Zr:Cu.bind(null,t),tu:Su.bind(null,t),Zo:Du.bind(null,t)},t1.su(),new su(e,t1.connection,t1.authCredentials,t1.appCheckCredentials,t1.It,n)),t.wu.push(async e=>{e?(t.Iu.Mo(),await Au(t)):(await t.Iu.stop(),t.fu.length>0&&(C("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Mu{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new U,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,s,i){let r=Date.now()+n,o=new Mu(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new L(B.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fu(t,e){if(x("AsyncQueue",`${e}: ${t}`),Vt(t))return new L(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $u{constructor(t){this.comparator=t?(e,n)=>t(e,n)||ct.comparator(e.key,n.key):(t,e)=>ct.comparator(t.key,e.key),this.keyedMap=rs(),this.sortedSet=new Bt(this.comparator)}static emptySet(t){return new $u(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){let e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){let e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){let e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof $u)||this.size!==t.size)return!1;let e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){let t1=e.getNext().key,s=n.getNext().key;if(!t1.isEqual(s))return!1}return!0}toString(){let t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){let n=new $u;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Bu{constructor(){this.Tu=new Bt(ct.comparator)}track(t){let e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):O():this.Tu=this.Tu.insert(e,t)}Eu(){let t=[];return this.Tu.inorderTraversal((e,n)=>{t.push(n)}),t}}class Lu{constructor(t,e,n,s,i,r,o,u,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,s,i){let r=[];return e.forEach(t=>{r.push({type:0,doc:t})}),new Lu(t,e,$u.emptySet(e),r,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&hn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;let e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t1=0;t1<e.length;t1++)if(e[t1].type!==n[t1].type||!e[t1].doc.isEqual(n[t1].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Uu{constructor(){this.Au=void 0,this.listeners=[]}}class qu{constructor(){this.queries=new es(t=>ln(t),hn),this.onlineState="Unknown",this.Ru=new Set}}async function Ku(t,e){let s=e.query,i=!1,r=t.queries.get(s);if(r||(i=!0,r=new Uu),i)try{r.Au=await t.onListen(s)}catch(t1){let n=Fu(t1,`Initialization of query '${fn(e.query)}' failed`);return void e.onError(n)}t.queries.set(s,r),r.listeners.push(e),e.bu(t.onlineState),r.Au&&e.Pu(r.Au)&&Wu(t)}async function Gu(t,e){let s=e.query,i=!1,r=t.queries.get(s);if(r){let t1=r.listeners.indexOf(e);t1>=0&&(r.listeners.splice(t1,1),i=0===r.listeners.length)}if(i)return t.queries.delete(s),t.onUnlisten(s)}function Qu(t,e){let s=!1;for(let t1 of e){let e1=t1.query,i=t.queries.get(e1);if(i){for(let e2 of i.listeners)e2.Pu(t1)&&(s=!0);i.Au=t1}}s&&Wu(t)}function ju(t,e,n){let i=t.queries.get(e);if(i)for(let t1 of i.listeners)t1.onError(n);t.queries.delete(e)}function Wu(t){t.Ru.forEach(t=>{t.next()})}class zu{constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(t){if(!this.options.includeMetadataChanges){let e=[];for(let n of t.docChanges)3!==n.type&&e.push(n);t=new Lu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e1=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e1=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e1=!0),this.Su=t,e1}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){return!t.fromCache||(!this.options.Nu||!("Offline"!==e))&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;let e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=Lu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Hu{constructor(t,e){this.ku=t,this.byteLength=e}Ou(){return"metadata"in this.ku}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ju{constructor(t){this.It=t}Ji(t){return ks(this.It,t)}Yi(t){return t.metadata.exists?Ls(this.It,t.document,!1):Se.newNoDocument(this.Ji(t.metadata.name),this.Xi(t.metadata.readTime))}Xi(t){return Ds(t)}}class Yu{constructor(t,e,n){this.Mu=t,this.localStore=e,this.It=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Xu(t)}Fu(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;if(t.ku.namedQuery)this.queries.push(t.ku.namedQuery);else if(t.ku.documentMetadata){this.documents.push({metadata:t.ku.documentMetadata}),t.ku.documentMetadata.exists||++e;let n=rt.fromString(t.ku.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else t.ku.document&&(this.documents[this.documents.length-1].document=t.ku.document,++e);return e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}$u(t){let e=new Map,n=new Ju(this.It);for(let s of t)if(s.metadata.queries){let t1=n.Ji(s.metadata.name);for(let n1 of s.metadata.queries){let s1=(e.get(n1)||fs()).add(t1);e.set(n1,s1)}}return e}async complete(){let t=await ko(this.localStore,new Ju(this.It),this.documents,this.Mu.id),e=this.$u(this.documents);for(let t1 of this.queries)await Oo(this.localStore,t1,e.get(t1.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:t}}}function Xu(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zu{constructor(t){this.key=t}}class tc{constructor(t){this.key=t}}class ec{constructor(t,e){this.query=t,this.Uu=e,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=fs(),this.mutatedKeys=fs(),this.Gu=wn(t),this.Qu=new $u(this.Gu)}get ju(){return this.Uu}Wu(t,e){let n=e?e.zu:new Bu,s=e?e.Qu:this.Qu,i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1,u="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((t,e)=>{let a=s.get(t),h=dn(this.query,e)?e:null,l=!!a&&this.mutatedKeys.has(a.key),f=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),d=!1;a&&h?a.data.isEqual(h.data)?l!==f&&(n.track({type:3,doc:h}),d=!0):this.Hu(a,h)||(n.track({type:2,doc:h}),d=!0,(u&&this.Gu(h,u)>0||c&&0>this.Gu(h,c))&&(o=!0)):!a&&h?(n.track({type:0,doc:h}),d=!0):a&&!h&&(n.track({type:1,doc:a}),d=!0,(u||c)&&(o=!0)),d&&(h?(r=r.add(h),i=f?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))}),null!==this.query.limit)for(;r.size>this.query.limit;){let t1="F"===this.query.limitType?r.last():r.first();r=r.delete(t1.key),i=i.delete(t1.key),n.track({type:1,doc:t1})}return{Qu:r,zu:n,$i:o,mutatedKeys:i}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){let s=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;let i=t.zu.Eu();i.sort((t,e)=>(function(t,e){let n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return n(t)-n(e)})(t.type,e.type)||this.Gu(t.doc,e.doc)),this.Ju(n);let r=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,u=o!==this.qu;return(this.qu=o,0!==i.length||u)?{snapshot:new Lu(this.query,t.Qu,s,i,t.mutatedKeys,0===o,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:r}:{Xu:r}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Bu,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(t=>this.Uu=this.Uu.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.Uu=this.Uu.delete(t)),this.current=t.current)}Yu(){if(!this.current)return[];let t=this.Ku;this.Ku=fs(),this.Qu.forEach(t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))});let e=[];return t.forEach(t=>{this.Ku.has(t)||e.push(new tc(t))}),this.Ku.forEach(n=>{t.has(n)||e.push(new Zu(n))}),e}tc(t){this.Uu=t.Hi,this.Ku=fs();let e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return Lu.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class nc{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class sc{constructor(t){this.key=t,this.nc=!1}}class ic{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.sc={},this.ic=new es(t=>ln(t),hn),this.rc=new Map,this.oc=new Set,this.uc=new Bt(ct.comparator),this.cc=new Map,this.ac=new eo,this.hc={},this.lc=new Map,this.fc=Cr.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function rc(t,e){let s,i;let n=kc(t),r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{let t1=await Vo(n.localStore,cn(e));n.isPrimaryClient&&hu(n.remoteStore,t1);let r1=n.sharedClientState.addLocalQueryTarget(t1.targetId);i=await oc(n,e,s=t1.targetId,"current"===r1,t1.resumeToken)}return i}async function oc(t,e,n,s,i){t._c=(e,n,s)=>(async function(t,e,n,s){let i=e.view.Wu(n);i.$i&&(i=await Do(t.localStore,e.query,!1).then(({documents:t})=>e.view.Wu(t,i)));let r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return pc(t,e.targetId,o.Xu),o.snapshot})(t,e,n,s);let r=await Do(t.localStore,e,!0),o=new ec(e,r.Hi),u=o.Wu(r.documents),c=ms.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState,i),a=o.applyChanges(u,t.isPrimaryClient,c);pc(t,n,a.Xu);let h=new nc(e,n,o);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),a.snapshot}async function uc(t,e){let s=t.ic.get(e),i=t.rc.get(s.targetId);if(i.length>1)return t.rc.set(s.targetId,i.filter(t=>!hn(t,e))),void t.ic.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await So(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),lu(t.remoteStore,s.targetId),gc(t,s.targetId)}).catch(Et)):(gc(t,s.targetId),await So(t.localStore,s.targetId,!0))}async function cc(t,e,n){let s=Oc(t);try{var t1,e1;let s1;let t2=await function(t,e){let r,o;let s=nt.now(),i=e.reduce((t,e)=>t.add(e.key),fs());return t.persistence.runTransaction("Locally write mutations","readwrite",t1=>{let u=ns,c=fs();return t.Gi.getEntries(t1,i).next(t=>{(u=t).forEach((t,e)=>{e.isValidDocument()||(c=c.add(t))})}).next(()=>t.localDocuments.getOverlayedDocuments(t1,u)).next(i=>{r=i;let o=[];for(let t2 of e){let e1=function(t,e){let n=null;for(let s of t.fieldTransforms){let t1=e.data.field(s.field),i=An(s.transform,t1||null);null!=i&&(null===n&&(n=ve.empty()),n.set(s.field,i))}return n||null}(t2,r.get(t2.key).overlayedDocument);null!=e1&&o.push(new Gn(t2.key,e1,function Ve(t){let e=[];return Ft(t.fields,(t,n)=>{let s=new ut([t]);if(Ie(n)){let t1=Ve(n.mapValue).fields;if(0===t1.length)e.push(s);else for(let n1 of t1)e.push(s.child(n1))}else e.push(s)}),new Qt(e)}(e1.value.mapValue),On.exists(!0)))}return t.mutationQueue.addMutationBatch(t1,s,o,e)}).next(e=>{o=e;let s=e.applyToLocalDocumentSet(r,c);return t.documentOverlayCache.saveOverlays(t1,e.batchId,s)})}).then(()=>({batchId:o.batchId,changes:os(r)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(t2.batchId),t1=s,e1=t2.batchId,(s1=t1.hc[t1.currentUser.toKey()])||(s1=new Bt(Z)),s1=s1.insert(e1,n),t1.hc[t1.currentUser.toKey()]=s1,await Ec(s,t2.changes),await Au(s.remoteStore)}catch(t3){let e2=Fu(t3,"Failed to persist write");n.reject(e2)}}async function ac(t,e){try{let t1=await function(t,e){let n=t,s=e.snapshotVersion,i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{let r=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;let o=[];e.targetChanges.forEach((r,u)=>{var e1;let c=i.get(u);if(!c)return;o.push(n.Cs.removeMatchingKeys(t,r.removedDocuments,u).next(()=>n.Cs.addMatchingKeys(t,r.addedDocuments,u)));let a=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(u)?a=a.withResumeToken(Wt.EMPTY_BYTE_STRING,st.min()).withLastLimboFreeSnapshotVersion(st.min()):r.resumeToken.approximateByteSize()>0&&(a=a.withResumeToken(r.resumeToken,s)),i=i.insert(u,a),e1=a,(0===c.resumeToken.approximateByteSize()||e1.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size>0)&&o.push(n.Cs.updateTargetData(t,a))});let u=ns,c=fs();if(e.documentUpdates.forEach(s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))}),o.push(Po(t,r,e.documentUpdates).next(t=>{u=t.Wi,c=t.zi})),!s.isEqual(st.min())){let e1=n.Cs.getLastRemoteSnapshotVersion(t).next(e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,s));o.push(e1)}return At.waitFor(o).next(()=>r.apply(t)).next(()=>n.localDocuments.getLocalViewOfDocuments(t,u,c)).next(()=>u)}).then(t=>(n.Ui=i,t))}(t.localStore,e);e.targetChanges.forEach((t1,e)=>{let s=t.cc.get(e);s&&(t1.addedDocuments.size+t1.modifiedDocuments.size+t1.removedDocuments.size<=1||O(),t1.addedDocuments.size>0?s.nc=!0:t1.modifiedDocuments.size>0?s.nc||O():t1.removedDocuments.size>0&&(s.nc||O(),s.nc=!1))}),await Ec(t,t1,e)}catch(t2){await Et(t2)}}function hc(t,e,n){let s=t;if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){let t1=[];s.ic.forEach((n,s)=>{let i=s.view.bu(e);i.snapshot&&t1.push(i.snapshot)}),function(t,e){let n=t;n.onlineState=e;let s=!1;n.queries.forEach((t,n)=>{for(let t1 of n.listeners)t1.bu(e)&&(s=!0)}),s&&Wu(n)}(s.eventManager,e),t1.length&&s.sc.Wo(t1),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function lc(t,e,n){let s=t;s.sharedClientState.updateQueryState(e,"rejected",n);let i=s.cc.get(e),r=i&&i.key;if(r){let t1=new Bt(ct.comparator);t1=t1.insert(r,Se.newNoDocument(r,st.min()));let n1=fs().add(r),i1=new ws(st.min(),new Map,new qt(Z),t1,n1);await ac(s,i1),s.uc=s.uc.remove(r),s.cc.delete(e),Tc(s)}else await So(s.localStore,e,!1).then(()=>gc(s,e,n)).catch(Et)}async function fc(t,e){var t1;let s=e.batch.batchId;try{let t2=await (t1=t.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{let s=e.batch.keys(),i=t1.Gi.newChangeBuffer({trackRemovals:!0});return(function(t,e,n,s){let i=n.batch,r=i.keys(),o=At.resolve();return r.forEach(t=>{o=o.next(()=>s.getEntry(e,t)).next(e=>{let r=n.docVersions.get(t);null!==r||O(),0>e.version.compareTo(r)&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))})}),o.next(()=>t.mutationQueue.removeMutationBatch(e,i))})(t1,t,e,i).next(()=>i.apply(t)).next(()=>t1.mutationQueue.performConsistencyCheck(t)).next(()=>t1.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId)).next(()=>t1.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=fs();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e))).next(()=>t1.localDocuments.getDocuments(t,s))});mc(t,s,null),wc(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ec(t,t2)}catch(t3){await Et(t3)}}async function dc(t,e,n){var t1;try{let t2=await (t1=t.localStore).persistence.runTransaction("Reject batch","readwrite-primary",t=>{let s;return t1.mutationQueue.lookupMutationBatch(t,e).next(e=>(null!==e||O(),s=e.keys(),t1.mutationQueue.removeMutationBatch(t,e))).next(()=>t1.mutationQueue.performConsistencyCheck(t)).next(()=>t1.documentOverlayCache.removeOverlaysForBatchId(t,s,e)).next(()=>t1.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s)).next(()=>t1.localDocuments.getDocuments(t,s))});mc(t,e,n),wc(t,e),t.sharedClientState.updateMutationState(e,"rejected",n),await Ec(t,t2)}catch(n1){await Et(n1)}}async function _c(t,e){var t1;mu(t.remoteStore)||C("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{let t2=await (t1=t.localStore).persistence.runTransaction("Get highest unacknowledged batch id","readonly",t=>t1.mutationQueue.getHighestUnacknowledgedBatchId(t));if(-1===t2)return void e.resolve();let s=t.lc.get(t2)||[];s.push(e),t.lc.set(t2,s)}catch(t3){let n=Fu(t3,"Initialization of waitForPendingWrites() operation failed");e.reject(n)}}function wc(t,e){(t.lc.get(e)||[]).forEach(t=>{t.resolve()}),t.lc.delete(e)}function mc(t,e,n){let s=t,i=s.hc[s.currentUser.toKey()];if(i){let t1=i.get(e);t1&&(n?t1.reject(n):t1.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function gc(t,e,n=null){for(let s of(t.sharedClientState.removeLocalQueryTarget(e),t.rc.get(e)))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(e=>{t.ac.containsKey(e)||yc(t,e)})}function yc(t,e){t.oc.delete(e.path.canonicalString());let n=t.uc.get(e);null!==n&&(lu(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Tc(t))}function pc(t,e,n){for(let s of n)s instanceof Zu?(t.ac.addReference(s.key,e),function(t,e){let n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(C("SyncEngine","New document in limbo: "+n),t.oc.add(s),Tc(t))}(t,s)):s instanceof tc?(C("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||yc(t,s.key)):O()}function Tc(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){let e=t.oc.values().next().value;t.oc.delete(e);let n=new ct(rt.fromString(e)),s=t.fc.next();t.cc.set(s,new sc(n)),t.uc=t.uc.insert(n,s),hu(t.remoteStore,new Fi(cn(en(n.path)),s,2,Ot.at))}}async function Ec(t,e,n){let i=[],r=[],o=[];t.ic.isEmpty()||(t.ic.forEach((t1,u)=>{o.push(t._c(u,e,n).then(t1=>{if((t1||n)&&t.isPrimaryClient&&t.sharedClientState.updateQueryState(u.targetId,(null==t1?void 0:t1.fromCache)?"not-current":"current"),t1){i.push(t1);let e=yo.Ci(u.targetId,t1);r.push(e)}}))}),await Promise.all(o),t.sc.Wo(i),await async function(t,e){let n=t;try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>At.forEach(e,e=>At.forEach(e.Si,s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s)).next(()=>At.forEach(e.Di,s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))}catch(t1){if(!Vt(t1))throw t1;C("LocalStore","Failed to update sequence numbers: "+t1)}for(let t2 of e){let e1=t2.targetId;if(!t2.fromCache){let t3=n.Ui.get(e1),s=t3.snapshotVersion,i=t3.withLastLimboFreeSnapshotVersion(s);n.Ui=n.Ui.insert(e1,i)}}}(t.localStore,r))}async function Ac(t,e){let n=t;if(!n.currentUser.isEqual(e)){C("SyncEngine","User change. New user:",e.toKey());let t1=await Eo(n.localStore,e);n.currentUser=e,n.lc.forEach(t=>{t.forEach(t=>{t.reject(new L(B.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),n.lc.clear(),n.sharedClientState.handleUserChange(e,t1.removedBatchIds,t1.addedBatchIds),await Ec(n,t1.ji)}}function Rc(t,e){let s=t.cc.get(e);if(s&&s.nc)return fs().add(s.key);{let t1=fs(),s1=t.rc.get(e);if(!s1)return t1;for(let e1 of s1){let s2=t.ic.get(e1);t1=t1.unionWith(s2.view.ju)}return t1}}async function bc(t,e){let s=await Do(t.localStore,e.query,!0),i=e.view.tc(s);return t.isPrimaryClient&&pc(t,e.targetId,i.Xu),i}async function Pc(t,e){return xo(t.localStore,e).then(t1=>Ec(t,t1))}async function vc(t,e,n,s){let r=await function(t,e){let s=t.mutationQueue;return t.persistence.runTransaction("Lookup mutation documents","readonly",t1=>s.Tn(t1,e).next(e=>e?t.localDocuments.getDocuments(t1,e):At.resolve(null)))}(t.localStore,e);null!==r?("pending"===n?await Au(t.remoteStore):"acknowledged"===n||"rejected"===n?(mc(t,e,s||null),wc(t,e),function(t,e){t.mutationQueue.An(e)}(t.localStore,e)):O(),await Ec(t,r)):C("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Vc(t,e){let n=t;if(kc(n),Oc(n),!0===e&&!0!==n.dc){let t1=n.sharedClientState.getAllActiveQueryTargets(),e1=await Sc(n,t1.toArray());for(let t2 of(n.dc=!0,await Nu(n.remoteStore,!0),e1))hu(n.remoteStore,t2)}else if(!1===e&&!1!==n.dc){let t3=[],e2=Promise.resolve();n.rc.forEach((s,i)=>{n.sharedClientState.isLocalQueryTarget(i)?t3.push(i):e2=e2.then(()=>(gc(n,i),So(n.localStore,i,!0))),lu(n.remoteStore,i)}),await e2,await Sc(n,t3),function(t){let e=t;e.cc.forEach((t,n)=>{lu(e.remoteStore,n)}),e.ac.fs(),e.cc=new Map,e.uc=new Bt(ct.comparator)}(n),n.dc=!1,await Nu(n.remoteStore,!1)}}async function Sc(t,e,n){let i=[],r=[];for(let t1 of e){let e1;let n1=t.rc.get(t1);if(n1&&0!==n1.length)for(let t2 of(e1=await Vo(t.localStore,cn(n1[0])),n1)){let e2=t.ic.get(t2),n2=await bc(t,e2);n2.snapshot&&r.push(n2.snapshot)}else{let n3=await Co(t.localStore,t1);await oc(t,Dc(n3),t1,!1,(e1=await Vo(t.localStore,n3)).resumeToken)}i.push(e1)}return t.sc.Wo(r),i}function Dc(t){var t1,e,n,s,i,o,u;return t1=t.path,e=t.collectionGroup,n=t.orderBy,s=t.filters,i=t.limit,o=t.startAt,u=t.endAt,new Ze(t1,e,n,s,i,"F",o,u)}function Cc(t){return t.localStore.persistence.vi()}async function xc(t,e,n,s){if(t.dc)return void C("SyncEngine","Ignoring unexpected query state notification.");let r=t.rc.get(e);if(r&&r.length>0)switch(n){case"current":case"not-current":{let t1=await xo(t.localStore,_n(r[0])),s1=ws.createSynthesizedRemoteEventForCurrentChange(e,"current"===n,Wt.EMPTY_BYTE_STRING);await Ec(t,t1,s1);break}case"rejected":await So(t.localStore,e,!0),gc(t,e,s);break;default:O()}}async function Nc(t,e,n){let s=kc(t);if(s.dc){for(let t1 of e){if(s.rc.has(t1)){C("SyncEngine","Adding an already active target "+t1);continue}let e1=await Co(s.localStore,t1),n1=await Vo(s.localStore,e1);await oc(s,Dc(e1),n1.targetId,!1,n1.resumeToken),hu(s.remoteStore,n1)}for(let t2 of n)s.rc.has(t2)&&await So(s.localStore,t2,!1).then(()=>{lu(s.remoteStore,t2),gc(s,t2)}).catch(Et)}}function kc(t){let e=t;return e.remoteStore.remoteSyncer.applyRemoteEvent=ac.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Rc.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lc.bind(null,e),e.sc.Wo=Qu.bind(null,e.eventManager),e.sc.wc=ju.bind(null,e.eventManager),e}function Oc(t){let e=t;return e.remoteStore.remoteSyncer.applySuccessfulWrite=fc.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dc.bind(null,e),e}class Fc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=Zo(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){var t1,e,n,s;return t1=this.persistence,e=new po,n=t.initialUser,s=this.It,new Io(t1,e,n,s)}yc(t){return new uo(ao.Bs,this.It)}gc(t){return new Qo}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $c extends Fc{constructor(t,e,n){super(),this.Ac=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.Ac.initialize(this,t),await Oc(this.Ac.syncEngine),await Au(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(t){var t1,e,n,s;return t1=this.persistence,e=new po,n=t.initialUser,s=this.It,new Io(t1,e,n,s)}Tc(t,e){let n=this.persistence.referenceDelegate.garbageCollector;return new $r(n,t.asyncQueue,e)}Ec(t,e){let n=new kt(e,this.persistence);return new Nt(t.asyncQueue,n)}yc(t){let e=go(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Ar.withCacheSize(this.cacheSizeBytes):Ar.DEFAULT;return new _o(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,Yo(),Xo(),this.It,this.sharedClientState,!!this.forceOwnership)}gc(t){return new Qo}}class Bc extends $c{constructor(t,e){super(t,e,!1),this.Ac=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);let e=this.Ac.syncEngine;this.sharedClientState instanceof Go&&(this.sharedClientState.syncEngine={Fr:vc.bind(null,e),$r:xc.bind(null,e),Br:Nc.bind(null,e),vi:Cc.bind(null,e),Mr:Pc.bind(null,e)},await this.sharedClientState.start()),await this.persistence.li(async t=>{await Vc(this.Ac.syncEngine,t),this.gcScheduler&&(t&&!this.gcScheduler.started?this.gcScheduler.start():t||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(t&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():t||this.indexBackfillerScheduler.stop())})}gc(t){let e=Yo();if(!Go.C(e))throw new L(B.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");let n=go(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new Go(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class Lc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>hc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ac.bind(null,this.syncEngine),await Nu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new qu}createDatastore(t){var s,t1,e;let e1=Zo(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new Jo(s));return t1=t.authCredentials,e=t.appCheckCredentials,new iu(t1,e,n,e1)}createRemoteStore(t){var e,n,s,i,r;return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>hc(this.syncEngine,t,0),r=Wo.C()?new Wo:new jo,new uu(e,n,s,i,r)}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){let u=new ic(t,e,n,s,i,r);return o&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){C("RemoteStore","RemoteStore shutting down."),t._u.add(5),await au(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Uc(t,e,n){if(!n)throw new L(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function qc(t,e,n,s){if(!0===e&&!0===s)throw new L(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kc(t){if(!ct.isDocumentKey(t))throw new L(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gc(t){if(ct.isDocumentKey(t))throw new L(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qc(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{var t1;let e=(t1=t).constructor?t1.constructor.name:null;return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":O()}function jc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=Qc(t);throw new L(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Wc(t,e){if(e<=0)throw new L(B.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let zc=new Map;class Hc{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new L(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new L(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,qc("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Jc{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new L(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hc(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new K;switch(t.type){case"gapi":let e=t.client;return new W(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new L(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let e=zc.get(t);e&&(C("ComponentProvider","Removing Datastore"),zc.delete(t),e.terminate())}(this),Promise.resolve()}}function Yc(t,e,n,s={}){var i;let r=(t=jc(t,Jc))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==e&&N("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let e1,n1;if("string"==typeof s.mockUserToken)e1=s.mockUserToken,n1=P.MOCK_USER;else{e1=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.Sg)(s.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);let r1=s.mockUserToken.sub||s.mockUserToken.user_id;if(!r1)throw new L(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n1=new P(r1)}t._authCredentials=new G(new q(e1,n1))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xc{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ta(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Xc(this.firestore,t,this._key)}}class Zc{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Zc(this.firestore,t,this._query)}}class ta extends Zc{constructor(t,e,n){super(t,e,en(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let t=this._path.popLast();return t.isEmpty()?null:new Xc(this.firestore,null,new ct(t))}withConverter(t){return new ta(this.firestore,t,this._path)}}function ea(t,e,...n){if(t=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.m9)(t),Uc("collection","path",e),t instanceof Jc){let s=rt.fromString(e,...n);return Gc(s),new ta(t,null,s)}{if(!(t instanceof Xc||t instanceof ta))throw new L(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let s1=t._path.child(rt.fromString(e,...n));return Gc(s1),new ta(t.firestore,null,s1)}}function na(t,e){if(t=jc(t,Jc),Uc("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new L(B.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Zc(t,null,new Ze(rt.emptyPath(),e))}function sa(t,e,...n){if(t=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.m9)(t),1==arguments.length&&(e=X.R()),Uc("doc","path",e),t instanceof Jc){let s=rt.fromString(e,...n);return Kc(s),new Xc(t,null,new ct(s))}{if(!(t instanceof Xc||t instanceof ta))throw new L(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let s1=t._path.child(rt.fromString(e,...n));return Kc(s1),new Xc(t.firestore,t instanceof ta?t.converter:null,new ct(s1))}}function ia(t,e){return t=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.m9)(t),e=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.m9)(e),(t instanceof Xc||t instanceof ta)&&(e instanceof Xc||e instanceof ta)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function ra(t,e){return t=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.m9)(t),e=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.m9)(e),t instanceof Zc&&e instanceof Zc&&t.firestore===e.firestore&&hn(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function oa(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){let s={value:t.slice(n,n+e),done:!1};return n+=e,s}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ua{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):x("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ca{constructor(t,e){this.Pc=t,this.It=e,this.metadata=new U,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(t=>{t&&t.Ou()?this.metadata.resolve(t.ku.metadata):this.metadata.reject(Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(null==t?void 0:t.ku)}`))},t=>this.metadata.reject(t))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){let t=await this.Sc();if(null===t)return null;let e=this.vc.decode(t),n=Number(e);isNaN(n)&&this.Dc(`length string (${e}) is not valid number`);let s=await this.Cc(n);return new Hu(JSON.parse(s),t.length+n)}xc(){return this.buffer.findIndex(t=>123===t)}async Sc(){for(;0>this.xc()&&!await this.Nc(););if(0===this.buffer.length)return null;let t=this.xc();t<0&&this.Dc("Reached the end of bundle when a length string is expected.");let e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async Cc(t){for(;this.buffer.length<t;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");let e=this.vc.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}Dc(t){throw this.Pc.cancel(),Error(`Invalid bundle format: ${t}`)}async Nc(){let t=await this.Pc.read();if(!t.done){let e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fa{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new L(B.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");let e=await async function(t,e){let s=Fs(t.It)+"/documents",i={documents:e.map(t1=>Ns(t.It,t1))},r=await t._o("BatchGetDocuments",s,i,e.length),o=new Map;r.forEach(t1=>{var t2;let e=(t2=t.It,"found"in t1?function(t,e){e.found||O(),e.found.name,e.found.updateTime;let n=ks(t,e.found.name),s=Ds(e.found.updateTime),i=new ve({mapValue:{fields:e.found.fields}});return Se.newFoundDocument(n,s,i)}(t2,t1):"missing"in t1?function(t,e){e.missing||O(),e.readTime||O();let n=ks(t,e.missing),s=Ds(e.readTime);return Se.newNoDocument(n,s)}(t2,t1):O());o.set(e.key.toString(),e)});let u=[];return e.forEach(t=>{let e=o.get(t.toString());e||O(),u.push(e)}),u}(this.datastore,t);return e.forEach(t=>this.recordVersion(t)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t1){this.lastWriteError=t1}this.writtenDocs.add(t.toString())}delete(t){this.write(new zn(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;let t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((t,e)=>{let n=ct.fromPath(e);this.mutations.push(new Hn(n,this.precondition(n)))}),await async function(t,e){let s=Fs(t.It)+"/documents",i={writes:e.map(t1=>Ks(t.It,t1))};await t.ao("Commit",s,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw O();e=st.min()}let n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new L(B.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){let e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(st.min())?On.exists(!1):On.updateTime(e):On.none()}preconditionForUpdate(t){let e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(st.min()))throw new L(B.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return On.updateTime(e)}return On.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class da{constructor(t,e,n,s,i){this.asyncQueue=t,this.datastore=e,this.options=n,this.updateFunction=s,this.deferred=i,this.kc=n.maxAttempts,this.xo=new tu(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{let t=new fa(this.datastore),e=this.Mc(t);e&&e.then(e=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(e)}).catch(t=>{this.Fc(t)}))}).catch(t=>{this.Fc(t)})})}Mc(t){try{let e=this.updateFunction(t);return!se(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t1){return this.deferred.reject(t1),null}}Fc(t){this.kc>0&&this.$c(t)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(t)}$c(t){if("FirebaseError"===t.name){let e=t.code;return"aborted"===e||"failed-precondition"===e||"already-exists"===e||!Zn(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _a{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=P.UNAUTHENTICATED,this.clientId=X.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{C("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(C("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(B.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let t=new U;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){let n=Fu(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function wa(t,e){t.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");let n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async t=>{s.isEqual(t)||(await Eo(e.localStore,t),s=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function ma(t,e){t.asyncQueue.verifyOperationInProgress();let n=await ga(t);C("FirestoreClient","Initializing OnlineComponentProvider");let s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(t=>xu(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>xu(e.remoteStore,n)),t.onlineComponents=e}async function ga(t){return t.offlineComponents||(C("FirestoreClient","Using default OfflineComponentProvider"),await wa(t,new Fc)),t.offlineComponents}async function ya(t){return t.onlineComponents||(C("FirestoreClient","Using default OnlineComponentProvider"),await ma(t,new Lc)),t.onlineComponents}function pa(t){return ga(t).then(t=>t.persistence)}function Ia(t){return ga(t).then(t=>t.localStore)}function Ta(t){return ya(t).then(t=>t.remoteStore)}function Ea(t){return ya(t).then(t=>t.syncEngine)}async function Ra(t){let e=await ya(t),n=e.eventManager;return n.onListen=rc.bind(null,e.syncEngine),n.onUnlisten=uc.bind(null,e.syncEngine),n}function Va(t,e,n={}){let s=new U;return t.asyncQueue.enqueueAndForget(async()=>(function(t,e,n,s,i){let r=new ua({next(r){e.enqueueAndForget(()=>Gu(t,o));let u=r.docs.has(n);!u&&r.fromCache?i.reject(new L(B.UNAVAILABLE,"Failed to get document because the client is offline.")):u&&r.fromCache&&s&&"server"===s.source?i.reject(new L(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(r)},error:t=>i.reject(t)}),o=new zu(en(n.path),r,{includeMetadataChanges:!0,Nu:!0});return Ku(t,o)})(await Ra(t),t.asyncQueue,e,n,s)),s.promise}function Da(t,e,n={}){let s=new U;return t.asyncQueue.enqueueAndForget(async()=>(function(t,e,n,s,i){let r=new ua({next(n){e.enqueueAndForget(()=>Gu(t,o)),n.fromCache&&"server"===s.source?i.reject(new L(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new zu(n,r,{includeMetadataChanges:!0,Nu:!0});return Ku(t,o)})(await Ra(t),t.asyncQueue,e,n,s)),s.promise}class ka{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new tu(this,"async_queue_retry"),this.Wc=()=>{let t=Xo();t&&C("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};let t=Xo();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;let e=Xo();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise(()=>{});let e=new U;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!Vt(t))throw t;C("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){let e=this.Bc.then(()=>(this.Gc=!0,t().catch(t=>{let e;this.Kc=t,this.Gc=!1;let e1=(e=t.message||"",t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e);throw x("INTERNAL UNHANDLED ERROR: ",e1),t}).then(t=>(this.Gc=!1,t))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);let s=Mu.createAndSchedule(this,t,e,n,t=>this.Yc(t));return this.qc.push(s),s}zc(){this.Kc&&O()}verifyOperationInProgress(){}async Xc(){let t;do await (t=this.Bc);while(t!==this.Bc)}Zc(t){for(let e of this.qc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{for(let e of(this.qc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs),this.qc))if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){let e=this.qc.indexOf(t);this.qc.splice(e,1)}}function Oa(t){return function(t,e){if("object"!=typeof t||null===t)return!1;for(let t1 of e)if(t1 in t&&"function"==typeof t[t1])return!0;return!1}(t,["next","error","complete"])}class Ma{constructor(){this._progressObserver={},this._taskCompletionResolver=new U,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Fa=-1;class $a extends Jc{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new ka,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||qa(this),this._firestoreClient.terminate()}}function La(e,n){let s="object"==typeof e?e:(0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)(),r=(0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(s,"firestore").getImmediate({identifier:"string"==typeof e?e:n||"(default)"});if(!r._initialized){let t=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.P0)("firestore");t&&Yc(r,...t)}return r}function Ua(t){return t._firestoreClient||qa(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function qa(t){var e,t1,e1,n;let n1=t._freezeSettings(),s=(t1=t._databaseId,e1=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",n=t._persistenceKey,new ee(t1,e1,n,n1.host,n1.ssl,n1.experimentalForceLongPolling,n1.experimentalAutoDetectLongPolling,n1.useFetchStreams));t._firestoreClient=new _a(t._authCredentials,t._appCheckCredentials,t._queue,s)}function Ka(t,e){Za(t=jc(t,$a));let n=Ua(t),s=t._freezeSettings(),i=new Lc;return Qa(n,i,new $c(i,s.cacheSizeBytes,null==e?void 0:e.forceOwnership))}function Ga(t){Za(t=jc(t,$a));let e=Ua(t),n=t._freezeSettings(),s=new Lc;return Qa(e,s,new Bc(s,n.cacheSizeBytes))}function Qa(t,e,n){let s=new U;return t.asyncQueue.enqueue(async()=>{try{await wa(t,n),await ma(t,e),s.resolve()}catch(t1){if(!("FirebaseError"===t1.name?t1.code===B.FAILED_PRECONDITION||t1.code===B.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t1 instanceof DOMException)||22===t1.code||20===t1.code||11===t1.code))throw t1;N("Error enabling offline persistence. Falling back to persistence disabled: "+t1),s.reject(t1)}}).then(()=>s.promise)}function ja(t){if(t._initialized&&!t._terminated)throw new L(B.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");let e=new U;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!bt.C())return Promise.resolve();await bt.delete(t+"main")}(go(t._databaseId,t._persistenceKey)),e.resolve()}catch(t1){e.reject(t1)}}),e.promise}function Wa(t){return function(t){let e=new U;return t.asyncQueue.enqueueAndForget(async()=>_c(await Ea(t),e)),e.promise}(Ua(t=jc(t,$a)))}function za(t){var t1;return(t1=Ua(t=jc(t,$a))).asyncQueue.enqueue(async()=>{let e=await pa(t1),n=await Ta(t1);return e.setNetworkEnabled(!0),n._u.delete(0),cu(n)})}function Ha(t){var t1;return(t1=Ua(t=jc(t,$a))).asyncQueue.enqueue(async()=>{let e=await pa(t1),n=await Ta(t1);return e.setNetworkEnabled(!1),async function(t){t._u.add(0),await au(t),t.gu.set("Offline")}(n)})}function Ya(t,e){let n=Ua(t=jc(t,$a)),s=new Ma;return function(t,e,n,s){var e1,t1;let i=(e1=Zo(e),t1=function(t,e){if(t instanceof Uint8Array)return oa(t,e);if(t instanceof ArrayBuffer)return oa(new Uint8Array(t),e);if(t instanceof ReadableStream)return t.getReader();throw Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}("string"==typeof n?(new TextEncoder).encode(n):n),new ca(t1,e1));t.asyncQueue.enqueueAndForget(async()=>{!function(t,e,n){(async function(t,e,n){try{var t1;let s=await e.getMetadata();if(await function(t,e){let s=Ds(e.createTime);return t.persistence.runTransaction("hasNewerBundle","readonly",t1=>t.Ns.getBundleMetadata(t1,e.id)).then(t=>!!t&&t.createTime.compareTo(s)>=0)}(t.localStore,s))return await e.close(),n._completeWith({taskState:"Success",documentsLoaded:s.totalDocuments,bytesLoaded:s.totalBytes,totalDocuments:s.totalDocuments,totalBytes:s.totalBytes}),Promise.resolve(new Set);n._updateProgress(Xu(s));let i=new Yu(s,t.localStore,e.It),r=await e.mc();for(;r;){let t2=await i.Fu(r);t2&&n._updateProgress(t2),r=await e.mc()}let o=await i.complete();return await Ec(t,o.Lu,void 0),await (t1=t.localStore).persistence.runTransaction("Save bundle","readwrite",t=>t1.Ns.saveBundleMetadata(t,s)),n._completeWith(o.progress),Promise.resolve(o.Bu)}catch(t3){return N("SyncEngine",`Loading bundle failed with ${t3}`),n._failWith(t3),Promise.resolve(new Set)}})(t,e,n).then(t1=>{t.sharedClientState.notifyBundleLoaded(t1)})}(await Ea(t),i,s)})}(n,t._databaseId,e,s),s}function Xa(t,e){var t1;return(t1=Ua(t=jc(t,$a))).asyncQueue.enqueue(async()=>{var t;return(t=await Ia(t1)).persistence.runTransaction("Get named query","readonly",t1=>t.Ns.getNamedQuery(t1,e))}).then(e=>e?new Zc(t,null,e.query):null)}function Za(t){if(t._initialized||t._terminated)throw new L(B.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class th{constructor(t){this._byteString=t}static fromBase64String(t){try{return new th(Wt.fromBase64String(t))}catch(t1){throw new L(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t1)}}static fromUint8Array(t){return new th(Wt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eh{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new L(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sh{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ih{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new L(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new L(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Z(this._lat,t._lat)||Z(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let rh=/^__.*__$/;class oh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Gn(t,this.data,this.fieldMask,e,this.fieldTransforms):new Kn(t,this.data,e,this.fieldTransforms)}}class uh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Gn(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function ch(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class ah{constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.It=n,this.ignoreUndefinedProperties=s,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=r||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new ah(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var e;let n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.ia({path:n,oa:!1});return s.ua(t),s}ca(t){var e;let n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.ia({path:n,oa:!1});return s.na(),s}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return Sh(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(0===t.length)throw this.ha("Document fields must not be empty");if(ch(this.sa)&&rh.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class hh{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.It=n||Zo(t)}da(t,e,n,s=!1){return new ah({sa:t,methodName:e,fa:n,path:ut.emptyPath(),oa:!1,la:s},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function lh(t){let e=t._freezeSettings(),n=Zo(t._databaseId);return new hh(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fh(t,e,n,s,i,r={}){let c,a;let o=t.da(r.merge||r.mergeFields?2:0,e,n,i);bh("Data must be an object, but it was:",o,s);let u=Ah(s,o);if(r.merge)c=new Qt(o.fieldMask),a=o.fieldTransforms;else if(r.mergeFields){let t1=[];for(let s1 of r.mergeFields){let i1=Ph(e,s1,n);if(!o.contains(i1))throw new L(B.INVALID_ARGUMENT,`Field '${i1}' is specified in your field mask but missing from your input data.`);Dh(t1,i1)||t1.push(i1)}c=new Qt(t1),a=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,a=o.fieldTransforms;return new oh(new ve(u),c,a)}class dh extends sh{_toFieldTransform(t){if(2!==t.sa)throw 1===t.sa?t.ha(`${this._methodName}() can only appear at the top level of your update data`):t.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof dh}}function _h(t,e,n){return new ah({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.It,e.ignoreUndefinedProperties)}class wh extends sh{_toFieldTransform(t){return new xn(t.path,new Rn)}isEqual(t){return t instanceof wh}}class mh extends sh{constructor(t,e){super(t),this._a=e}_toFieldTransform(t){let e=_h(this,t,!0),n=this._a.map(t=>Eh(t,e)),s=new bn(n);return new xn(t.path,s)}isEqual(t){return this===t}}class gh extends sh{constructor(t,e){super(t),this._a=e}_toFieldTransform(t){let e=_h(this,t,!0),n=this._a.map(t=>Eh(t,e)),s=new vn(n);return new xn(t.path,s)}isEqual(t){return this===t}}class yh extends sh{constructor(t,e){super(t),this.wa=e}_toFieldTransform(t){let e=new Sn(t.It,pn(t.It,this.wa));return new xn(t.path,e)}isEqual(t){return this===t}}function ph(t,e,n,s){let i=t.da(1,e,n);bh("Data must be an object, but it was:",i,s);let r=[],o=ve.empty();Ft(s,(t,s)=>{let u=Vh(e,t,n);s=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.m9)(s);let c=i.ca(u);if(s instanceof dh)r.push(u);else{let t1=Eh(s,c);null!=t1&&(r.push(u),o.set(u,t1))}});let u=new Qt(r);return new uh(o,u,i.fieldTransforms)}function Ih(t,e,n,s,i,r){let o=t.da(1,e,n),u=[Ph(e,s,n)],c=[i];if(r.length%2!=0)throw new L(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t1=0;t1<r.length;t1+=2)u.push(Ph(e,r[t1])),c.push(r[t1+1]);let a=[],h=ve.empty();for(let t2=u.length-1;t2>=0;--t2)if(!Dh(a,u[t2])){let e1=u[t2],n1=c[t2];n1=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.m9)(n1);let s1=o.ca(e1);if(n1 instanceof dh)a.push(e1);else{let t3=Eh(n1,s1);null!=t3&&(a.push(e1),h.set(e1,t3))}}let l=new Qt(a);return new uh(h,l,o.fieldTransforms)}function Th(t,e,n,s=!1){return Eh(n,t.da(s?4:3,e))}function Eh(t,e){if(Rh(t=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.m9)(t)))return bh("Unsupported field value:",e,t),Ah(t,e);if(t instanceof sh)return function(t,e){if(!ch(e.sa))throw e.ha(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ha(`${t._methodName}() is not currently supported inside arrays`);let n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&4!==e.sa)throw e.ha("Nested arrays are not supported");return function(t,e){let n=[],s=0;for(let i of t){let t1=Eh(i,e.aa(s));null==t1&&(t1={nullValue:"NULL_VALUE"}),n.push(t1),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return pn(e.It,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){let n=nt.fromDate(t);return{timestampValue:vs(e.It,n)}}if(t instanceof nt){let n1=new nt(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:vs(e.It,n1)}}if(t instanceof ih)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof th)return{bytesValue:Vs(e.It,t._byteString)};if(t instanceof Xc){let n2=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n2))throw e.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n2.projectId}/${n2.database}`);return{referenceValue:Cs(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ha(`Unsupported field value: ${Qc(t)}`)}(t,e)}function Ah(t,e){let n={};return $t(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ft(t,(t,s)=>{let i=Eh(s,e.ra(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function Rh(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof nt||t instanceof ih||t instanceof th||t instanceof Xc||t instanceof sh)}function bh(t,e,n){if(!Rh(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let s=Qc(n);throw"an object"===s?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Ph(t,e,n){if((e=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.m9)(e))instanceof eh)return e._internalPath;if("string"==typeof e)return Vh(t,e);throw Sh("Field path arguments must be of type string or ",t,!1,void 0,n)}let vh=RegExp("[~\\*/\\[\\]]");function Vh(t,e,n){if(e.search(vh)>=0)throw Sh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new eh(...e.split("."))._internalPath}catch(s){throw Sh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sh(t,e,n,s,i){let r=s&&!s.isEmpty(),o=void 0!==i,u=`Function ${e}() called with invalid data`;n&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new L(B.INVALID_ARGUMENT,u+t+c)}function Dh(t,e){return t.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ch{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Xc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let t=new xh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){let e=this._document.data.field(Nh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class xh extends Ch{data(){return super.data()}}function Nh(t,e){return"string"==typeof e?Vh(t,e):e instanceof eh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function kh(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new L(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Oh{}function Mh(t,...e){for(let n of e)t=n._apply(t);return t}class Fh extends Oh{constructor(t,e,n){super(),this.ma=t,this.ga=e,this.ya=n,this.type="where"}_apply(t){let e=lh(t.firestore),n=function(t,e,n,s,i,r,o){let u;if(i.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new L(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on documentId().`);if("in"===r||"not-in"===r){Xh(o,r);let e1=[];for(let n1 of o)e1.push(Yh(s,t,n1));u={arrayValue:{values:e1}}}else u=Yh(s,t,o)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||Xh(o,r),u=Th(n,e,o,"in"===r||"not-in"===r);let c=Be.create(i,r,u);return function(t,e){if(e.dt()){let n=rn(t);if(null!==n&&!n.isEqual(e.field))throw new L(B.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);let s=sn(t);null!==s&&Zh(t,e.field,s)}let n1=function(t,e){for(let n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n1)throw n1===e.op?new L(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n1.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.ma,this.ga,this.ya);return new Zc(t.firestore,t.converter,function(t,e){let n=t.filters.concat([e]);return new Ze(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function $h(t,e,n){let i=Nh("where",t);return new Fh(i,e,n)}class Bh extends Oh{constructor(t,e){super(),this.ma=t,this.pa=e,this.type="orderBy"}_apply(t){let e=function(t,e,n){if(null!==t.startAt)throw new L(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new L(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let s=new He(e,n);return function(t,e){if(null===sn(t)){let n=rn(t);null!==n&&Zh(t,n,e.field)}}(t,s),s}(t._query,this.ma,this.pa);return new Zc(t.firestore,t.converter,function(t,e){let n=t.explicitOrderBy.concat([e]);return new Ze(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Lh(t,e="asc"){let s=Nh("orderBy",t);return new Bh(s,e)}class Uh extends Oh{constructor(t,e,n){super(),this.type=t,this.Ia=e,this.Ta=n}_apply(t){return new Zc(t.firestore,t.converter,an(t._query,this.Ia,this.Ta))}}function qh(t){return Wc("limit",t),new Uh("limit",t,"F")}function Kh(t){return Wc("limitToLast",t),new Uh("limitToLast",t,"L")}class Gh extends Oh{constructor(t,e,n){super(),this.type=t,this.Ea=e,this.Aa=n}_apply(t){var t1;let e=Jh(t,this.type,this.Ea,this.Aa);return new Zc(t.firestore,t.converter,(t1=t._query,new Ze(t1.path,t1.collectionGroup,t1.explicitOrderBy.slice(),t1.filters.slice(),t1.limit,t1.limitType,e,t1.endAt)))}}function Qh(...t){return new Gh("startAt",t,!0)}function jh(...t){return new Gh("startAfter",t,!1)}class Wh extends Oh{constructor(t,e,n){super(),this.type=t,this.Ea=e,this.Aa=n}_apply(t){var t1;let e=Jh(t,this.type,this.Ea,this.Aa);return new Zc(t.firestore,t.converter,(t1=t._query,new Ze(t1.path,t1.collectionGroup,t1.explicitOrderBy.slice(),t1.filters.slice(),t1.limit,t1.limitType,t1.startAt,e)))}}function zh(...t){return new Wh("endBefore",t,!1)}function Hh(...t){return new Wh("endAt",t,!0)}function Jh(t,e,n,s){if(n[0]=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.m9)(n[0]),n[0]instanceof Ch)return function(t,e,n,s,i){if(!s)throw new L(B.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);let r=[];for(let n1 of un(t))if(n1.field.isKeyField())r.push(we(e,s.key));else{let t1=s.data.field(n1.field);if(Xt(t1))throw new L(B.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n1.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t1){let t2=n1.field.canonicalString();throw new L(B.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t2}' (used as the orderBy) does not exist.`)}r.push(t1)}return new ze(r,i)}(t._query,t.firestore._databaseId,e,n[0]._document,s);{let i=lh(t.firestore);return function(t,e,n,s,i,r){let o=t.explicitOrderBy;if(i.length>o.length)throw new L(B.INVALID_ARGUMENT,`Too many arguments provided to ${s}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let u=[];for(let r1=0;r1<i.length;r1++){let c=i[r1];if(o[r1].field.isKeyField()){if("string"!=typeof c)throw new L(B.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${s}(), but got a ${typeof c}`);if(!on(t)&&-1!==c.indexOf("/"))throw new L(B.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${s}() must be a plain document ID, but '${c}' contains a slash.`);let n1=t.path.child(rt.fromString(c));if(!ct.isDocumentKey(n1))throw new L(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${s}() must result in a valid document path, but '${n1}' is not because it contains an odd number of segments.`);let i1=new ct(n1);u.push(we(e,i1))}else{let t1=Th(n,s,c);u.push(t1)}}return new ze(u,r)}(t._query,t.firestore._databaseId,i,e,n,s)}}function Yh(t,e,n){if("string"==typeof(n=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.m9)(n))){if(""===n)throw new L(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!on(e)&&-1!==n.indexOf("/"))throw new L(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let s=e.path.child(rt.fromString(n));if(!ct.isDocumentKey(s))throw new L(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return we(t,new ct(s))}if(n instanceof Xc)return we(t,n._key);throw new L(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qc(n)}.`)}function Xh(t,e){if(!Array.isArray(t)||0===t.length)throw new L(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new L(B.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Zh(t,e,n){if(!n.isEqual(e))throw new L(B.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tl{convertValue(t,e="none"){switch(ce(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Jt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Yt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw O()}}convertObject(t,e){let n={};return Ft(t.fields,(t,s)=>{n[t]=this.convertValue(s,e)}),n}convertGeoPoint(t){return new ih(Jt(t.latitude),Jt(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":let n=function Zt(t){let e=t.mapValue.fields.__previous_value__;return Xt(e)?Zt(e):e}(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(te(t));default:return null}}convertTimestamp(t){let e=Ht(t);return new nt(e.seconds,e.nanos)}convertDocumentKey(t,e){let n=rt.fromString(t);ii(n)||O();let s=new ne(n.get(1),n.get(3)),i=new ct(n.popFirst(5));return s.isEqual(e)||x(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function el(t,e,n){return t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e}class nl extends tl{constructor(t){super(),this.firestore=t}convertBytes(t){return new th(t)}convertReference(t){let e=this.convertDocumentKey(t,this.firestore._databaseId);return new Xc(this.firestore,null,e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sl{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class il extends Ch{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){let e=new rl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){let n=this._document.data.field(Nh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class rl extends il{data(t={}){return super.data(t)}}class ol{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new sl(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){let t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new rl(this._firestore,this._userDataWriter,n.key,n,new sl(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){let e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new L(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e1=0;return t._snapshot.docChanges.map(n=>{let s=new rl(t._firestore,t._userDataWriter,n.doc.key,n.doc,new sl(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:e1++}})}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{let s=new rl(t._firestore,t._userDataWriter,e.doc.key,e.doc,new sl(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter),i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(r=(n=n.add(e.doc)).indexOf(e.doc.key)),{type:function(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}(e.type),doc:s,oldIndex:i,newIndex:r}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function cl(t,e){return t instanceof il&&e instanceof il?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(null===t._document?null===e._document:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof ol&&e instanceof ol&&t._firestore===e._firestore&&ra(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function al(t){t=jc(t,Xc);let e=jc(t.firestore,$a);return Va(Ua(e),t._key).then(n=>Al(e,t,n))}class hl extends tl{constructor(t){super(),this.firestore=t}convertBytes(t){return new th(t)}convertReference(t){let e=this.convertDocumentKey(t,this.firestore._databaseId);return new Xc(this.firestore,null,e)}}function ll(t){t=jc(t,Xc);let e=jc(t.firestore,$a),n=Ua(e),s=new hl(e);return(function(t,e){let n=new U;return t.asyncQueue.enqueueAndForget(async()=>(async function(t,e,n){try{let s=await t.persistence.runTransaction("read document","readonly",t1=>t.localDocuments.getDocument(t1,e));s.isFoundDocument()?n.resolve(s):s.isNoDocument()?n.resolve(null):n.reject(new L(B.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(t1){let s1=Fu(t1,`Failed to get document '${e} from cache`);n.reject(s1)}})(await Ia(t),e,n)),n.promise})(n,t._key).then(n=>new il(e,s,t._key,n,new sl(null!==n&&n.hasLocalMutations,!0),t.converter))}function fl(t){t=jc(t,Xc);let e=jc(t.firestore,$a);return Va(Ua(e),t._key,{source:"server"}).then(n=>Al(e,t,n))}function dl(t){t=jc(t,Zc);let e=jc(t.firestore,$a),n=Ua(e),s=new hl(e);return kh(t._query),Da(n,t._query).then(n=>new ol(e,s,t,n))}function _l(t){t=jc(t,Zc);let e=jc(t.firestore,$a),n=Ua(e),s=new hl(e);return(function(t,e){let n=new U;return t.asyncQueue.enqueueAndForget(async()=>(async function(t,e,n){try{let s=await Do(t,e,!0),i=new ec(e,s.Hi),r=i.Wu(s.documents),o=i.applyChanges(r,!1);n.resolve(o.snapshot)}catch(t1){let s1=Fu(t1,`Failed to execute query '${e} against cache`);n.reject(s1)}})(await Ia(t),e,n)),n.promise})(n,t._query).then(n=>new ol(e,s,t,n))}function wl(t){t=jc(t,Zc);let e=jc(t.firestore,$a),n=Ua(e),s=new hl(e);return Da(n,t._query,{source:"server"}).then(n=>new ol(e,s,t,n))}function ml(t,e,n){t=jc(t,Xc);let s=jc(t.firestore,$a),i=el(t.converter,e,n);return El(s,[fh(lh(s),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,On.none())])}function gl(t,e,n,...s){let o;t=jc(t,Xc);let i=jc(t.firestore,$a),r=lh(i);return o="string"==typeof(e=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.m9)(e))||e instanceof eh?Ih(r,"updateDoc",t._key,e,n,s):ph(r,"updateDoc",t._key,e),El(i,[o.toMutation(t._key,On.exists(!0))])}function yl(t){return El(jc(t.firestore,$a),[new zn(t._key,On.none())])}function pl(t,e){let n=jc(t.firestore,$a),s=sa(t),i=el(t.converter,e);return El(n,[fh(lh(t.firestore),"addDoc",s._key,i,null!==t.converter,{}).toMutation(s._key,On.exists(!1))]).then(()=>s)}function Il(t,...e){var n,s,i;let c,a,h;t=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.m9)(t);let r={includeMetadataChanges:!1},o=0;"object"!=typeof e[0]||Oa(e[o])||(r=e[o],o++);let u={includeMetadataChanges:r.includeMetadataChanges};if(Oa(e[o])){let t1=e[o];e[o]=null===(n=t1.next)||void 0===n?void 0:n.bind(t1),e[o+1]=null===(s=t1.error)||void 0===s?void 0:s.bind(t1),e[o+2]=null===(i=t1.complete)||void 0===i?void 0:i.bind(t1)}if(t instanceof Xc)a=jc(t.firestore,$a),h=en(t._key.path),c={next(n){e[o]&&e[o](Al(a,t,n))},error:e[o+1],complete:e[o+2]};else{let n1=jc(t,Zc);a=jc(n1.firestore,$a),h=n1._query;let s1=new hl(a);c={next(t){e[o]&&e[o](new ol(a,s1,n1,t))},error:e[o+1],complete:e[o+2]},kh(t._query)}return function(t,e,n,s){let i=new ua(s),r=new zu(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>Ku(await Ra(t),r)),()=>{i.bc(),t.asyncQueue.enqueueAndForget(async()=>Gu(await Ra(t),r))}}(Ua(a),h,u,c)}function Tl(t,e){return function(t,e){let n=new ua(e);return t.asyncQueue.enqueueAndForget(async()=>{(await Ra(t)).Ru.add(n),n.next()}),()=>{n.bc(),t.asyncQueue.enqueueAndForget(async()=>(function(t,e){t.Ru.delete(e)})(await Ra(t),n))}}(Ua(t=jc(t,$a)),Oa(e)?e:{next:e})}function El(t,e){return function(t,e){let n=new U;return t.asyncQueue.enqueueAndForget(async()=>cc(await Ea(t),e,n)),n.promise}(Ua(t),e)}function Al(t,e,n){let s=n.docs.get(e._key),i=new hl(t);return new il(t,i,e._key,s,new sl(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Pl={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vl{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=lh(t)}set(t,e,n){this._verifyNotCommitted();let s=Vl(t,this._firestore),i=el(s.converter,e,n),r=fh(this._dataReader,"WriteBatch.set",s._key,i,null!==s.converter,n);return this._mutations.push(r.toMutation(s._key,On.none())),this}update(t,e,n,...s){let r;this._verifyNotCommitted();let i=Vl(t,this._firestore);return r="string"==typeof(e=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.m9)(e))||e instanceof eh?Ih(this._dataReader,"WriteBatch.update",i._key,e,n,s):ph(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(r.toMutation(i._key,On.exists(!0))),this}delete(t){this._verifyNotCommitted();let e=Vl(t,this._firestore);return this._mutations=this._mutations.concat(new zn(e._key,On.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new L(B.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Vl(t,e){if((t=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.m9)(t)).firestore!==e)throw new L(B.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Sl extends class{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=lh(t)}get(t){let e=Vl(t,this._firestore),n=new nl(this._firestore);return this._transaction.lookup([e._key]).then(t=>{if(!t||1!==t.length)return O();let s=t[0];if(s.isFoundDocument())return new Ch(this._firestore,n,s.key,s,e.converter);if(s.isNoDocument())return new Ch(this._firestore,n,e._key,null,e.converter);throw O()})}set(t,e,n){let s=Vl(t,this._firestore),i=el(s.converter,e,n),r=fh(this._dataReader,"Transaction.set",s._key,i,null!==s.converter,n);return this._transaction.set(s._key,r),this}update(t,e,n,...s){let r;let i=Vl(t,this._firestore);return r="string"==typeof(e=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.m9)(e))||e instanceof eh?Ih(this._dataReader,"Transaction.update",i._key,e,n,s):ph(this._dataReader,"Transaction.update",i._key,e),this._transaction.update(i._key,r),this}delete(t){let e=Vl(t,this._firestore);return this._transaction.delete(e._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){let e=Vl(t,this._firestore),n=new hl(this._firestore);return super.get(t).then(t=>new il(this._firestore,n,e._key,t._document,new sl(!1,!1),e.converter))}}function Dl(t,e,n){t=jc(t,$a);let s=Object.assign(Object.assign({},Pl),n);return!function(t){if(t.maxAttempts<1)throw new L(B.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),function(t,e,n){let s=new U;return t.asyncQueue.enqueueAndForget(async()=>{let i=await ya(t).then(t=>t.datastore);new da(t.asyncQueue,i,n,e,s).run()}),s.promise}(Ua(t),n=>e(new Sl(t,n)),s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Cl(){return new dh("deleteField")}function xl(){return new wh("serverTimestamp")}function Nl(...t){return new mh("arrayUnion",t)}function kl(...t){return new gh("arrayRemove",t)}function Ol(t){return new yh("increment",t)}!function(t,e=!0){v=_firebase_app__WEBPACK_IMPORTED_MODULE_0__.SDK_VERSION,(0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.wA("firestore",(t,{instanceIdentifier:n,options:s})=>{let i=t.getProvider("app").getImmediate(),r=new $a(new Q(t.getProvider("auth-internal")),new H(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new L(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ne(t.options.projectId,e)}(i,n),i);return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r},"PUBLIC").setMultipleInstances(!0)),(0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(b,"3.7.3",void 0),(0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(b,"3.7.3","esm2017")}()}}]);