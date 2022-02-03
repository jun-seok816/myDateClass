
import React, {useRef, useState, useMemo, useReducer, useCallback, useEffect} from "react";
import _ from "lodash";
import js_Date from "../src/js_Date";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import AboutDate from "./component/AboutDate";
import AboutStr from "./component/AboutStr";
import AboutYun from "./component/AboutYun";
import "./demo.scss"
import "./github.jpg"

type TState = {
    Obj : js_Date,
}

type TRef = {
    SetState : React.Dispatch<React.SetStateAction<TState>>;
}


export class js_DateDemo extends js_Date {

    iv_State : TState
    iv_Ref : TRef

    public constructor(p_Date : js_Date) {
        super();

        this.iv_State = {
            Obj : p_Date
        }

        this.iv_Ref = {
            SetState : () => {}
        }
    }

    public im_SetDate() {
        this.iv_Ref.SetState(
            (prevValue) =>
                _.merge({}, prevValue,{ Obj : this })
        );
    }

}

type TProps = {
    //children: JSX.Element[] | null,
    Obj : js_DateDemo
}

/**타입호환 */
function Im_ToDate(props : { jsobj : js_DateDemo}) {
    let today = new js_Date(new Date());
    let [lv_true,lv_false] = useState(false);
    let [lv_value,lv_valueChange] = useState(props.jsobj.im_getYYYYMMDD())
 
    let example =`const date = new js_Date(Now);
const today = new js_Date(new Date());
console.log("js_Date형 타입호환: " + date.im_ToDate())
console.log("Date형 타입호환: " + today.im_getYYYYMMDD())`;
    let result = `js_Date형 타입호환: ${props.jsobj.im_ToDate()}
Date형 타입호환: ${props.jsobj.im_getYYYYMMDD()}`

    const m_CodeBlock = (e:any) =>{
        e.preventDefault();
        if(e.target.now.value) props.jsobj.im_trimDateString(e.target.now.value);
        props.jsobj.im_SetDate();
    }

    return (
        <section className="Demo_Body">
            <div className="Description">
                <div>js_Date형과 Date형의 타입호환입니다.</div>
                <div><b>im_ToDate</b>메소드를 사용하면 js_Date형을 Date형으로 타입호환 할 수 있습니다</div>
                <div>js_Date인스턴스를 생성할 때 Date객체를 Param으로 전달하여 타입호환 할 수 있습니다</div>
            </div>
            <div className="Setting">
                <section className="CodeBlock">  
                    <h4>Example</h4>
                    <form onSubmit={m_CodeBlock}>
                        <span className="formspan">
                            <span>let</span> Now = <input type="text" name="now" value={lv_value}
                                onChange={(e)=>{ 
                                    props.jsobj.im_trimDateString(e.target.value)
                                    console.log(props.jsobj)
                                    lv_valueChange(e.target.value);
                                }}
                            />
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

/**요일관련 함수 */
function Im_getWeekDay (props : { jsobj : js_DateDemo}) {
    const [lv_value,lm_valueChange] = useState(props.jsobj.im_getYYYYMMDD());
    let [lv_true,lv_false] = useState(false);

    const m_CodeBlock = (e:any) =>{
        e.preventDefault();
        if(e.target.now.value) props.jsobj.im_trimDateString(e.target.now.value);
        props.jsobj.im_SetDate();
    }

    let example =`const date = new js_Date(Now);
console.log("js_Date인스턴스의 요일 : " + date.im_getWeekDay())`;
    let result = `js_Date인스턴스의 요일 : ${props.jsobj.im_getWeekDay()}`
   

    return (
        <section className="Demo_Body">
            <div className="Description">
                <h2>im_getWeekDay</h2>
                <div>현재 년월일에 해당하는 요일을 계산하는 메소드 ,1~7을 일요일부터 토요일로 대입해서 구분합니다</div>
            </div>
            <div className="Setting">
                <section className="CodeBlock">  
                    <h4>Example</h4>
                    <form onSubmit={m_CodeBlock}>
                        <span className="formspan">
                            <span>let</span> Now = <input type="text" name="now" value={lv_value} onChange={(e)=>{lm_valueChange(e.target.value)}}/><br/>
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
                        <div>1 = 일요일, 2 = 월요일, 3 = 화요일, 4 = 수요일, 5 = 목요일, 6 = 금요일, 7 = 토요일</div><br/>
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

/**주에 관련된함수 */
function Im_getCurrentWeekOfMonth (props : { jsobj : js_DateDemo}) {
    const [lv_value,lm_valueChange] = useState(props.jsobj.im_getYYYYMMDD());
    let [lv_true,lv_false] = useState(false);
 
    const m_CodeBlock = (e:any) =>{
        e.preventDefault();
        if(e.target.now.value) props.jsobj.im_trimDateString(e.target.now.value);
        props.jsobj.im_SetDate();
    }

    let example =`const date = new js_Date(Now);    
console.log("현재 날짜가 몇번째 주인지 리턴합니다. : " + date.im_getCurrentWeekOfMonth())
console.log("이달의 마지막 날짜가 몇번째 주인지 리턴합니다.: " + date.im_getLastWeekOfMonth())
console.log("현재 날짜가 이달의 첫번째 주인지 리턴합니다. : " + date.im_isFirstWeek())
console.log("현재 날짜가 이달의 마지막 주인지 리턴합니다. : " + date.im_isLastWeek())`;
    let result = `현재 날짜가 몇번째 주인지 리턴합니다. : ${props.jsobj.im_getCurrentWeekOfMonth()}
이달의 마지막 날짜가 몇번째 주인지 리턴합니다. : ${props.jsobj.im_getLastWeekOfMonth()}
현재 날짜가 이달의 첫번째 주인지 리턴합니다. : ${props.jsobj.im_isFirstWeek()}
현재 날짜가 이달의 마지막 주인지 리턴합니다. : ${props.jsobj.im_isLastWeek()}`;
   

    return (
        <section className="Demo_Body">
            <div className="Description">
                <div>im_getCurrentWeekOfMonth : 현재 날짜가 몇번째 주인지 리턴합니다.</div>
                <div>im_getLastWeekOfMonth : 이달의 마지막 날짜가 몇번째 주인지 리턴합니다.</div>
                <div>im_isFirstWeek : 현재 날짜가 이달의 첫번째 주인지 리턴합니다.</div>
                <div>im_isLastWeek : 현재 날짜가 이달의 마지막 주인지 리턴합니다.</div>
            </div>
            <div className="Setting">
                <section className="CodeBlock">  
                    <h4>Example</h4>
                    <form onSubmit={m_CodeBlock}>
                        <span className="formspan">
                            <span>let</span> Now = <input type="text" name="now" value={lv_value} onChange={(e)=>{lm_valueChange(e.target.value)}}/><br/>
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

export default function(props:TProps) {

    let [lv_Obj,] = useState(props.Obj);
    [lv_Obj.iv_State, lv_Obj.iv_Ref.SetState] = useState<TState>(props.Obj.iv_State);

    return (
        <div className="Root">

        
            <div className="MainRight">
                <div className="Title">
                    <div >타입 호환</div>
                    <div className="Title_Border"></div>
                </div >
                <div id="string"></div>
                <Im_ToDate jsobj={lv_Obj}/>
                <div  className="Title">
                    <div >문자열 관련함수</div>
                    <div className="Title_Border"></div>
                </div>
                <div id="week"></div>
                <AboutStr jsobj={lv_Obj}/>
                <div className="Title">
                    <div >주에관련된 함수</div>
                    <div className="Title_Border"></div>
                </div>
                <div id="yun"></div>
                <Im_getCurrentWeekOfMonth jsobj={lv_Obj}/>
                <div className="Title">
                    <div >윤년 관련함수</div>
                    <div className="Title_Border"></div>
                </div>
                <AboutYun jsobj={lv_Obj}/>
                <div className="Title">
                    <div >요일관련 함수</div>
                    <div className="Title_Border"></div>
                </div>
                <div id="day"></div>
                <Im_getWeekDay jsobj={lv_Obj}/>
                
                <div  className="Title">
                    <div >날짜 관련함수</div>
                    <div className="Title_Border"></div>
                </div>
                <AboutDate jsobj = {lv_Obj}/>
            </div>
        </div>
   
  
    );
}
