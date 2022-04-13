import { createStoreHook } from "react-redux";
import reducer, { Reducer } from "./Reducer";
import { createStore } from "redux"


const initialSt={loggedin: false};
 const mystore=createStore(reducer,initialSt)

 export default mystore;