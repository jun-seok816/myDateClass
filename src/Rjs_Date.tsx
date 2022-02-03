import React, {useRef, useState, useMemo, useReducer, useCallback, useEffect} from "react";
import _ from "lodash";
import js_Date from "./js_Date";
import { prependOnceListener } from "process";


type TState = {
    Arg01 : js_Date
}

type TRef = {
    SetState : React.Dispatch<React.SetStateAction<TState>>;
}


export class rjs_Date {

    iv_State : TState
    iv_Ref : TRef

    public constructor(p_Arg01 : js_Date) {
        this.iv_State = {
            Arg01 : p_Arg01
        }

        this.iv_Ref = {
            SetState : () => {}
        }
    }

    public im_CurrentTime() {
        this.iv_Ref.SetState(
            (prevValue) =>
                _.merge({}, prevValue, { Arg01 : js_Date.sm_GetNowDate() })
        );
    }

    public im_ChangeYear(e:number){  
        this.iv_Ref.SetState(
            (prevValue) => 
                _.merge({Arg01 : prevValue.Arg01.im_SeekYear(e*1)})  
        )
       
    }
    public im_ChangeMonth(e:number){  
        this.iv_Ref.SetState(
            (prevValue) =>
            _.merge({ Arg01 :  prevValue.Arg01.im_SeekMonth(e*1) })
        ) 
      
    }
    public im_ChangeDay(e:number){  
        this.iv_Ref.SetState(
            (prevValue) =>
            _.merge({ Arg01 :  prevValue.Arg01.im_SeekDay(e*1) })
        )  
    }
   
}

type TProps = {
    //children: JSX.Element[] | null,
    Obj : rjs_Date
}

export default function(props:TProps) {

    const m_PlusDay = (e:any) =>{
        e.preventDefault();
        
        lv_Obj.im_ChangeYear(e.target.Year.value);
        lv_Obj.im_ChangeMonth(e.target.Month.value);
        lv_Obj.im_ChangeDay(e.target.Day.value);
    }
   

    let [lv_Obj,] = useState(props.Obj);
    [lv_Obj.iv_State, lv_Obj.iv_Ref.SetState] = useState<TState>(props.Obj.iv_State);

    //console.log('jsLib : Render ! , name=%s', lv_Obj.iv_State.Arg01.im_getYearStr());

    return (
        <div>
            <h3> js_Date : { lv_Obj.iv_State.Arg01.im_getYearStr()}년
                                                { lv_Obj.iv_State.Arg01.im_getMonthStr()}월
                                                { lv_Obj.iv_State.Arg01.im_getDayStr()}일
                                                { lv_Obj.iv_State.Arg01.im_getHoursStr()}시
                                                { lv_Obj.iv_State.Arg01.im_getMinutesStr()}분
                                                { lv_Obj.iv_State.Arg01.im_getSecondsStr()}초
                                                { lv_Obj.iv_State.Arg01.im_getMilliSecondsStr()}밀리초</h3>
            <h3> Date : { lv_Obj.iv_State.Arg01.im_ToDate().toString()}</h3>                                                
            <button onClick={lv_Obj.im_CurrentTime.bind(lv_Obj)}>Current Time</button>
            
            <form onSubmit={m_PlusDay}>
                년<input type="number" name="Year" placeholder="Year"/><br/>
                월<input type="number" name="Month" placeholder="Month"/><br/>
                일<input type="number" name="Day" placeholder="Day"/><br/>
                <input type="submit" value="버튼"></input>
            </form>
            <section>
                <h4>윤년관련 함수</h4>
                { 
                   [1].map(e=>{
                      return (lv_Obj.iv_State.Arg01.im_isYunYear()) ?  <p key={e}>true</p> : <p key={e}>false</p>
                   }) 
                }
                <div></div>
            </section>
        </div>
    );

}
