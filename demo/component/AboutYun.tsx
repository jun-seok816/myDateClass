import React, {useRef, useState, useMemo, useReducer, useCallback, useEffect} from "react";
import _ from "lodash";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Comp_DateDemo, { js_DateDemo } from "../js_DateDemo";
import js_Date from "@jsLib/js_Date";

function Im_isYunYear(props : { jsobj : js_DateDemo}) {

    let [lv_true,lv_false] = useState(false);
    let [lv_Year,lv_YearChange]=useState(0);
    const [lv_value,lm_valueChange] = useState(props.jsobj.im_getYYYYMMDD());

 
    const m_CodeBlock = (e:any) =>{
        e.preventDefault();
        if(e.target.now.value) props.jsobj.im_trimDateString(e.target.now.value);
        
        if(e.target.Year.value) lv_YearChange(e.target.Year.value*1);
        props.jsobj.im_SetDate();
    }


    let example =`const date = new js_Date(Now);
console.log("js_Date인스턴스의 날짜가 윤년인가? : " + date.im_isYunYear())
//or
console.log("Year변수의 날짜가 윤년인가? : " +js_Date.sm_isYunYear(Year))`;
    let result = `js_Date인스턴스의 날짜가 윤년인가? : ${props.jsobj.im_isYunYear()}
Year변수의 날짜가 윤년인가? : ${js_Date.sm_isYunYear(lv_Year)}`
   

    return (
        <section className="Demo_Body">
            <div className="Description">
                <h2>im_isYunYear , sm_isYunYear</h2>
                <div>해당 년도가 윤년인지 아닌지 체크합니다.</div>
            </div>
            <div className="Setting">
                <section className="CodeBlock">  
                    <h4>Example</h4>
                    <form onSubmit={m_CodeBlock}>
                        <span className="formspan">
                            <span>let</span> Now = <input type="text" name="now" value={lv_value} onChange={(e)=>{lm_valueChange(e.target.value)}}/><br/>
                            <span>let</span> Year = <input className="year" type="number" name="Year" value={lv_Year} onChange={(e)=>{lv_YearChange(parseInt(e.target.value))}}/>
                        </span>
                        <SyntaxHighlighter language="typescript" wrapLines={true} style={docco}>
                            {example}
                        </SyntaxHighlighter>
                        <button onClick={()=>lv_false(true)} className="inputButton" type="submit" >
                            <span>Run</span>
                        </button><div className="CodeWidth"></div>
                    </form>    
                    <div style={{display: lv_true ? 'block' : 'none' }}>
                        <h4>Result</h4>
                        <div className="ResultCodeBlock">
                        <SyntaxHighlighter language="typescript" wrapLines={true} style={docco}>
                            {result}
                        </SyntaxHighlighter>
                        </div>
                        <div className="CodeWidth"></div>
                    </div>
                </section>
            </div>
        </section>
    )
}
function Im_yunYear (props : { jsobj : js_DateDemo}) {

    let [lv_true,lv_false] = useState(false);
    let [lv_Year,lv_YearChange]=useState(0);
    const [lv_value,lm_valueChange] = useState(props.jsobj.im_getYYYYMMDD());

 
    const m_CodeBlock = (e:any) =>{
        e.preventDefault();
        if(e.target.now.value) props.jsobj.im_trimDateString(e.target.now.value);
        
        if(e.target.Year.value) lv_YearChange(e.target.Year.value*1);
        props.jsobj.im_SetDate();
    }

   
    let example =`const date = new js_Date(Now);
console.log("0년1월1일부터 js_Date인스턴스의 날짜까지의 윤년수 : " + date.im_yunYear())
//or
console.log("0년1월1일부터 year년1월 1일까지의 윤년수 : " +js_Date.sm_yunYear(Year))`;
    let result = `0년1월1일부터 js_Date인스턴스의 날짜까지의 윤년수 : ${props.jsobj.im_yunYear()}
0년1월1일부터 year년1월 1일까지의 윤년수 : ${js_Date.sm_yunYear(lv_Year)}`
   

    return (
        <section className="Demo_Body">
            <div className="Description">
                <h2>im_yunYear , sm_yunYear</h2>
                <div>0년 부터 해당년도까지의 윤년이었던 년도수를 계산하는 함수입니다.</div>
            </div>
            <div className="Setting">
                <section className="CodeBlock">  
                    <h4>Example</h4>
                    <form onSubmit={m_CodeBlock}>
                        <span className="formspan">
                            <span>let</span> Now = <input type="text" name="now" value={lv_value} onChange={(e)=>{lm_valueChange(e.target.value)}}/><br/>
                            <span>let</span> Year = <input className="year" type="number" name="Year" value={lv_Year} onChange={(e)=>{lv_YearChange(parseInt(e.target.value))}}/>
                        </span>
                        <SyntaxHighlighter language="typescript" wrapLines={true} style={docco}>
                            {example}
                        </SyntaxHighlighter>
                        <button onClick={()=>lv_false(true)} className="inputButton" type="submit" >
                            <span>Run</span>
                        </button><div className="CodeWidth"></div>
                    </form>    
                    <div style={{display: lv_true ? 'block' : 'none' }}>
                        <h4>Result</h4>
                        <div className="ResultCodeBlock">
                        <SyntaxHighlighter language="typescript" wrapLines={true} style={docco}>
                            {result}
                        </SyntaxHighlighter>
                        </div>
                        <div className="CodeWidth"></div>
                    </div>
                </section>
            </div>
        </section>
    )
}
function Im_getMonthLastDay (props : { jsobj : js_DateDemo}) {

    let [lv_true,lv_false] = useState(false);
    let [lv_Year,lv_YearChange]=useState(0);
    let [lv_Month,lv_MonthChange] = useState(1);
    const [lv_value,lm_valueChange] = useState(props.jsobj.im_getYYYYMMDD());

 
    const m_CodeBlock = (e:any) =>{
        e.preventDefault();
        if(e.target.now.value) props.jsobj.im_trimDateString(e.target.now.value);
        if(e.target.Year.value) lv_YearChange(e.target.Year.value*1);
        if(e.target.Month.value) lv_MonthChange(e.target.Month.value*1);
        props.jsobj.im_SetDate();
    }

  
    let example =`const date = new js_Date(Now);
console.log("js_Date인스턴스의 해당하는 월의 마지막 날짜  : " + date.im_getMonthLastDay ())
//or
console.log("Year,Month변수의 해당하는 월의 마지막 날짜 : " +js_Date.sm_getMonthLastDay(Year,Month))`;
    let result = `js_Date인스턴스의 해당하는 월의 마지막 날짜 : ${props.jsobj.im_getMonthLastDay()}
Year,Month변수의 해당하는 월의 마지막 날짜 : ${js_Date.sm_getMonthLastDay(lv_Year,lv_Month)}`
   

    return (
        <section className="Demo_Body">
            <div className="Description">
                <h2>im_getMonthLastDay , sm_getMonthLastDay</h2>
                <div>해당 년도,월의 마지막 날짜가 며칠인지 계산하는 함수입니다.</div>
            </div>
            <div className="Setting">
                <section className="CodeBlock">  
                    <h4>Example</h4>
                    <form onSubmit={m_CodeBlock}>
                        <span className="formspan">
                            <span>let</span> Now = <input type="text" name="now" value={lv_value} onChange={(e)=>{lm_valueChange(e.target.value)}}/><br/>
                            <span>let</span> Year = <input className="year" type="number" name="Year" value={lv_Year} onChange={(e)=>{lv_YearChange(parseInt(e.target.value))}}/><br/>
                            <span>let</span> Month = <input className="month" type="number" name="Month" value={lv_Month} onChange={(e)=>{lv_MonthChange(parseInt(e.target.value))}}/>
                        </span>
                        <SyntaxHighlighter language="typescript" wrapLines={true} style={docco}>
                            {example}
                        </SyntaxHighlighter>
                        <button onClick={()=>lv_false(true)} className="inputButton" type="submit" >
                            <span>Run</span>
                        </button><div className="CodeWidth"></div>
                    </form>    
                    <div style={{display: lv_true ? 'block' : 'none' }}>
                        <h4>Result</h4>
                        <div className="ResultCodeBlock">
                        <SyntaxHighlighter language="typescript" wrapLines={true} style={docco}>
                            {result}
                        </SyntaxHighlighter>
                        </div>
                        <div className="CodeWidth"></div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default function(props:{jsobj:js_DateDemo}){
    return(
        <div>
            <Im_isYunYear jsobj={props.jsobj}/>
            <Im_yunYear jsobj={props.jsobj}/>
            <div id="dayofweek"></div>
            <Im_getMonthLastDay jsobj={props.jsobj}/>
        </div>
    )
}