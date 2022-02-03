import React, {useRef, useState, useMemo, useReducer, useCallback, useEffect} from "react";
import _ from "lodash";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Comp_DateDemo, { js_DateDemo } from "../js_DateDemo";
import js_Date from "@jsLib/js_Date";

/** 날짜관련함수 */
function Im_getStr(props : {jsobj : js_DateDemo}) {

    const [lv_value,lm_valueChange] = useState(props.jsobj.im_getYYYYMMDD());

    let example =`const date = new js_Date(Now);
console.log("년도 : " + date.im_getYearStr())
console.log("월  : " + date.im_getMonthStr())
console.log("날짜 : " + date.im_getDayStr())
console.log("시간 : " + date.im_getHoursStr())
console.log("분 : " + date.im_getMinutesStr())
console.log("초 : " + date.im_getSecondsStr())
console.log("밀리초 : " + date.im_getMilliSecondsStr())
console.log("년,월,일 : " + date.im_getYYYYMMDD())
console.log("시,분,초,밀리초 : " + date.im_getHHMMSSsss())
console.log("시,분,초 : " + date.im_getHHMMSS())
console.log("년,월,일,시,분,초 : " + date.im_getYYYYMMDDHHMMSS())`;
    let result = `년도 : ${props.jsobj.im_getYearStr()}
월 : ${props.jsobj.im_getMonthStr()}
날짜 : ${props.jsobj.im_getDayStr()}
시간 : ${props.jsobj.im_getHoursStr()}
분 : ${props.jsobj.im_getMinutesStr()}
초 : ${props.jsobj.im_getSecondsStr()}
밀리초 : ${props.jsobj.im_getMilliSecondsStr()}
년,월,일 : ${props.jsobj.im_getYYYYMMDD()}
시,분,초,밀리초 : ${props.jsobj.im_getHHMMSSsss()}
시,분,초 : ${props.jsobj.im_getHHMMSS()}
년,월,일,시,분,초 : ${props.jsobj.im_getYYYYMMDDHHMMSS()}`

    let [lv_true,lv_false] = useState(false);
 
    const m_CodeBlock = (e:any) =>{
        e.preventDefault();
        if(e.target.now.value) props.jsobj.im_trimDateString(e.target.now.value);
        props.jsobj.im_SetDate();
    }

    return (
        <section className="Demo_Body">
            <div className="Description">
                <div>js_Date객체의 각 단위별 시간을 문자열로 반환합니다.</div>
            </div>
            <div className="Setting">
                <section className="CodeBlock">  
                    <h4>Example</h4>
                    <form onSubmit={m_CodeBlock}>
                        <span className="formspan">
                            <span>let</span> Now = <input type="text" name="now" value={lv_value} onChange={(e)=>{lm_valueChange(e.target.value)}}/>
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
            <Im_getStr jsobj={props.jsobj}/>
        </div>
    )
}