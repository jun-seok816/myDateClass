import React, {useRef, useState, useMemo, useReducer, useCallback, useEffect} from "react";
import _ from "lodash";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Comp_DateDemo, { js_DateDemo } from "../js_DateDemo";
import js_Date from "@jsLib/js_Date";

/** 날짜관련함수 */
function Im_SeekYear(props : { jsobj : js_DateDemo}) {

    let example =`const date = new js_Date(Now);
let result = date.im_SeekYear(SeekYear);
console.log(result.getYYYYMMDD())`;
    let result = `${props.jsobj.im_getYYYYMMDD()}`

    let [lv_true,lv_false] = useState(false);
    const [lv_value,lm_valueChange] = useState(props.jsobj.im_getYYYYMMDD());

    const m_CodeBlock = (e:any) =>{
        e.preventDefault();
        if(e.target.now.value) props.jsobj.im_trimDateString(e.target.now.value);
        if(e.target.param.value) {
            props.jsobj.im_SeekYear(parseInt(e.target.param.value)*1);
        }
        props.jsobj.im_SetDate();
    }

    return (
        <section className="Demo_Body">
            <div className="Description">
                <h2>im_SeekYear</h2>
                <div>js_Date인스턴스에 년도를 빼거나 더한 인스턴스를 리턴합니다.</div>
            </div>
            <div className="Setting">
                <section className="CodeBlock">  
                    <h4>Example</h4>
                    <form onSubmit={m_CodeBlock}>
                        <span className="formspan">
                            <span>let</span> Now = <input type="text" name="now" value={lv_value} onChange={(e)=>{lm_valueChange(e.target.value)}}/>
                        </span>
                        <span className="formspan">
                            <span>let</span> SeekYear = <input className="year" type="number"  name="param" placeholder="0"/>
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

function Im_SeekMonth(props : { jsobj : js_DateDemo}) {

    let example =`const date = new js_Date(Now);
let result = date.im_SeekMonth(SeekMonth);
console.log(result.getYYYYMMDD())`;
    let result = `${props.jsobj.im_getYYYYMMDD()}`

    const [lv_value,lm_valueChange] = useState(props.jsobj.im_getYYYYMMDD());
    let [lv_true,lv_false] = useState(false);
 
    const m_CodeBlock = (e:any) =>{
        e.preventDefault();
        if(e.target.now.value) props.jsobj.im_trimDateString(e.target.now.value);
        if(e.target.param.value) {
            props.jsobj.im_SeekMonth(parseInt(e.target.param.value)*1);
        }
        props.jsobj.im_SetDate();
    }

    return (
        <section className="Demo_Body">
            <div className="Description">
                <h2>im_SeekMonth</h2>
                <div>js_Date인스턴스에 개월을 빼거나 더한 인스턴스를 리턴합니다.</div>
            </div>
            <div className="Setting">
                <section className="CodeBlock">  
                    <h4>Example</h4>
                    <form onSubmit={m_CodeBlock}>
                        <span className="formspan">
                            <span>let</span> Now = <input type="text" name="now" value={lv_value} onChange={(e)=>{lm_valueChange(e.target.value)}}/>
                        </span>
                        <span className="formspan">
                            <span>let</span> SeekMonth = <input className="month" type="number"  name="param" placeholder="0"/>
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

function Im_SeekDay(props : { jsobj : js_DateDemo}) {

    let example =`const date = new js_Date(Now);
let result = date.im_SeekDay(SeekDay);
console.log(result.getYYYYMMDD())`;
    let result = `${props.jsobj.im_getYYYYMMDD()}`

    const [lv_value,lm_valueChange] = useState(props.jsobj.im_getYYYYMMDD());
    let [lv_true,lv_false] = useState(false);
 
    const m_CodeBlock = (e:any) =>{
        e.preventDefault();
        if(e.target.now.value) props.jsobj.im_trimDateString(e.target.now.value);
        if(e.target.param.value) {
            props.jsobj.im_SeekDay(parseInt(e.target.param.value)*1);
        }
        props.jsobj.im_SetDate();
    }

    return (
        <section className="Demo_Body">
            <div className="Description">
                <h2>im_SeekDay</h2>
                <div>js_Date인스턴스에 날짜를 빼거나 더한 인스턴스를 리턴합니다.</div>
            </div>
            <div className="Setting">
                <section className="CodeBlock">  
                    <h4>Example</h4>
                    <form onSubmit={m_CodeBlock}>
                        <span className="formspan">
                            <span>let</span> Now = <input type="text" name="now" value={lv_value} onChange={(e)=>{lm_valueChange(e.target.value)}}/>
                        </span>
                        <span className="formspan">
                            <span>let</span> SeekDay = <input className="day" type="number"  name="param" placeholder="0"/>
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
function Sm_trimDateString (props : {jsobj : js_DateDemo}) {
    let sm_v = props.jsobj.im_getYYYYMMDD();
    let example =`let result = js_Date.sm_trimDateString(now)
console.log(result)`;
    let [lv_true,lv_false] = useState(false);
    let [sm_value,sm_change] =useState(sm_v);
    let result =`[${js_Date.sm_trimDateString(sm_value)}]`
    const m_CodeBlock = (e:any) =>{
        e.preventDefault();
        sm_change(e.target.now.value);
        props.jsobj.im_SetDate();
    }

    return (
        <section className="Demo_Body">
            <div className="Description">
                <h2>sm_trimDateString</h2>
                <div>문자열을 날짜로 리턴하는 함수입니다.</div><br/>
                <div>⚠️ <b>자릿수를 지켜주세요</b>: 해당 메소드를 사용할때 숫자부분의 년,월,일,시,분,초,밀리초의 자릿수가 다르면 오류가 일어납니다.</div>
            </div>
            <div className="Setting">
                <section className="CodeBlock">  
                    <h4>Example</h4>
                    <form onSubmit={m_CodeBlock}>
                        <span className="formspan">
                            <span>let</span> Now = <input type="text" name="now" onChange={(e)=>{sm_change(e.target.value)}} value={sm_value}/>
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
                        <div>arr[0] : 문자열내 문자만 제거한 숫자 </div>
                        <div>arr[1] : 년도 </div>
                        <div>arr[2] : 월 </div>
                        <div>arr[3] : 일 </div>
                        <div>arr[4] : 시 </div>
                        <div>arr[5] : 분 </div>
                        <div>arr[6] : 초 </div>
                        <div>arr[7] : 밀리초 </div><br/>
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

function Sm_getDays (props : {jsobj : js_DateDemo}) {

    let example =`let result = js_Date.sm_getDays(Year , Month , Day);
let result2 = new js_Date(new Date());

console.log("0년1월1일부터 년,월,일까지의 총일수를 구합니다 :" +result);
console.log("총일수를 역산하여 년,월,일을 구합니다 : " +result2.im_getDate(result));`;
    let [lv_true,lv_false] = useState(false);
    let result =`0년1월1일부터 년,월,일까지의 총일수를 구합니다 : ${props.jsobj.im_getDays()}
총일수를 역산하여 년,월,일을 구합니다 : js_Date {iv_Year: ${props.jsobj.iv_Year}, iv_Month: ${props.jsobj.iv_Month}, iv_Day: ${props.jsobj.iv_Day}, iv_Hours: 0, iv_Minutes: 0, iv_Seconds: 0, iv_Milliseconds: 0}`
    const m_CodeBlock = (e:any) =>{
        e.preventDefault();
        props.jsobj.im_SetYear(e.target.Year.value*1);
        props.jsobj.im_SetMonth(e.target.Month.value*1);
        props.jsobj.im_SetDay(e.target.Day.value*1);
        props.jsobj.im_SetDate();
    }

    return (
        <section className="Demo_Body">
            <div className="Description">
                <h2>총 일수계산</h2>
                <div>sm_getDays : 0년 1월 1일부터 지정한 날까지의 날짜수를 구합니다</div>
                <div>im_getDate : 총일수를 역산하여 년,월,일을 구합니다</div>
            </div>
            <div className="Setting">
                <section className="CodeBlock">  
                    <h4>Example</h4>
                    <form onSubmit={m_CodeBlock}>
                        <span className="formspan">
                            <span>let</span> Year = <input type="number" name="Year" placeholder='0'/><br/>
                            <span>let</span> Month = <input className="month" type="number" name="Month" placeholder='0'/><br/>
                            <span>let</span> Day = <input className="day" type="number" name="Day" placeholder='0'/><br/>
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
            <Im_SeekYear jsobj={props.jsobj}/>
            <Im_SeekMonth jsobj={props.jsobj}/>
            <Im_SeekDay jsobj={props.jsobj}/>
            <Sm_trimDateString jsobj={props.jsobj}/>
            <Sm_getDays jsobj={props.jsobj}/>
        </div>
    )
}