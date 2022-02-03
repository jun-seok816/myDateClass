import { escapeRegExp, transform } from "lodash";
import Hook, {useRef, useState, useMemo, useReducer, useCallback, useEffect} from "react";
import {animated,useSpring} from 'react-spring'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import js_Date from "../src/js_Date"
import Comp_DashBoard, { js_DateDashBoard } from "./js_DateDashBoard";
import Comp_DateDemo, { js_DateDemo } from "./js_DateDemo";

let js_DateDemoObj = new js_DateDemo(new js_Date(new Date()));

export  default  function Root() {
    return (
        <Routes>
            <Route path="/" element={<Layout isHome = {true}/>}>
                <Route index element={<Comp_DashBoard Obj={js_DateDemoObj} />} />
                <Route path="Comp_DashBoard" element={<Comp_DashBoard Obj={js_DateDemoObj} />} />
                <Route path="Comp_DateDemo" element={<Comp_DateDemo Obj ={js_DateDemoObj} />} />
            </Route>
            <Route path="*" element={<div>Not Found</div>} />
        </Routes>
    );
}


function Layout(props : { isHome : boolean }) {
    let [lv_true,lv_false] = useState(true);
    return (
        <div className="Root">
           <nav className="NavBar">
            <div className="SideHeader">
                <a href="https://github.com/jun-seok816"><i className="fab fa-github js-github"></i>
                    junSeok</a>
            </div>
            <div className="Header">
                <div>Email:  junseok816@gmail.com</div>
                <div>Help: +82010 3975 0810</div>
            </div>
        </nav>
        <div id="type"></div>
        <div className="Main">
            <nav className="SideBar">
                <ul className="SideMenu">
                    <li className="nav-item nav-profile">
                        <a href="#">
                            <div className="profile-image">
                                <img className="img-xs rounded-circle" src="./github.jpg" />
                                <div className="dot-indicator bg-success"></div>
                            </div>
                            <div className="text-wrapper">
                                <p className="profile-name">junseok816</p>                
                                <p className="profile-email">Front end developer</p> 
                            </div>
                        </a>
                    </li>
                   
                    <li className="nav-item nav-category"><Link onClick={()=>lv_false(!lv_true)} to="/Comp_DateDemo"><span>Description</span></Link></li>
                    <div className={lv_true? "li-div":"li-divnone"}  >
                        <li className="nav-item active">
                            <a className="nav-link" href="#type" aria-expanded="true">
                                <i className="menu-icon typcn typcn-document-text"></i>
                                <span className="menu-title">타입호환</span>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#string" aria-expanded="true">
                                <i className="menu-icon typcn typcn-document-text"></i>
                                <span className="menu-title">문자열 관련함수</span>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#week" aria-expanded="true">
                                <i className="menu-icon typcn typcn-document-text"></i>
                                <span className="menu-title">주에관련된 함수</span>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#yun" aria-expanded="true">
                                <i className="menu-icon typcn typcn-document-text"></i>
                                <span className="menu-title">윤년 관련함수</span>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#dayofweek" aria-expanded="true">
                                <i className="menu-icon typcn typcn-document-text"></i>
                                <span className="menu-title">요일관련 함수</span>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#day" aria-expanded="true">
                                <i className="menu-icon typcn typcn-document-text"></i>
                                <span className="menu-title">날짜 관련함수</span>
                            </a>
                        </li>
                    </div>
                    <li className="nav-item nav-category"><Link to="/Comp_DashBoard"><span>DashBoard</span></Link></li>
                </ul>
            </nav>
            <div className="Container">
                <Outlet />
            </div>
        </div>
    </div>
    );
}


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('app')
);


