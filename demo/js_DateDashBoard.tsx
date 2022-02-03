import Table from "./component/Table"
import React, {useRef, useState, useMemo, useReducer, useCallback, useEffect} from "react";
import _ from "lodash";
import js_Date from "../src/js_Date";
import "./demo.scss";

type TState = {
    Obj : js_Date,
}

type TRef = {
    SetState : React.Dispatch<React.SetStateAction<TState>>;
}


export class js_DateDashBoard extends js_Date {

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
    Obj : js_DateDashBoard
}

export default function(props:TProps) {

    let [lv_Obj,] = useState(props.Obj);
    [lv_Obj.iv_State, lv_Obj.iv_Ref.SetState] = useState<TState>(props.Obj.iv_State);
    let [lv_요일, lv_get요일] = useState(props.Obj.im_WhatDay());

    const m_PlusDay = (e:any) =>{
        e.preventDefault();
        if(e.target.Year.value) lv_Obj.im_SeekYear(parseInt(e.target.Year.value));
        if(e.target.Month.value) lv_Obj.im_SeekMonth(parseInt(e.target.Month.value));
        if(e.target.Day.value) lv_Obj.im_SeekDay(parseInt(e.target.Day.value));
        lv_Obj.im_SetDate();
    }

    const m_Get요일 = (e:any) => {
        let result = lv_Obj.im_DayOfWeek(parseInt(e.target.value));
        lv_get요일(lv_Obj.im_WhatDay(result));
    }

    return (
        <div className="Root">
            <section className="DashBoard_Header">
                <div className="Panel">
                    <h2>Current Time👀</h2>
                    <p className="Current_Time">{ lv_Obj.im_im_GetAllStr() }</p>
                    <button onClick={() => {
                        lv_Obj.im_FromDate(new Date());
                        lv_Obj.im_SetDate();
                    }}>Update Time</button>
                </div>
            </section>
            <section className="DashBoard_Body">
                <div className="Setting">
                    <section className="PlusDay">   
                        <h4>Day Plus Minus</h4>
                        <form onSubmit={m_PlusDay}>
                            <input type='number' name="Year" placeholder="Year" />
                            <input type='number' name="Month" placeholder="Month" />
                            <input type='number' name="Day" placeholder="Day"/>
                            <input type="submit" value="Submit"></input>
                        </form>
                    </section>
                    <section className="DaySet">
                        <h4>Day Setting</h4>
                        <div className="DayForm">
                            <span>
                                <div>Year</div>
                                <div>Month</div>
                                <div>Day</div>
                                <div>String</div>
                            </span>
                            <span>
                                <input type='number' min={1} max={9999} name="Year" value={lv_Obj.iv_State.Obj.im_getYearStr()} placeholder="Year"
                                                            onChange={(e)=>lv_Obj.iv_Ref.SetState({Obj : lv_Obj.im_SetYear(parseInt(e.target.value))})}/>
                                <input type='number'min={1} max={12} name="Month" value={lv_Obj.iv_State.Obj.im_getMonthStr()} placeholder="Month"
                                                            onChange={(e)=>lv_Obj.iv_Ref.SetState({Obj : lv_Obj.im_SetMonth(parseInt(e.target.value))})}/>
                                <input type='number'min={1} max={lv_Obj.im_getMonthLastDay()} name="Day" value={lv_Obj.iv_State.Obj.im_getDayStr()} placeholder="Day"
                                                            onChange={(e)=>lv_Obj.iv_Ref.SetState({Obj : lv_Obj.im_SetDay(parseInt(e.target.value))})}/>
                                <input className="InputString" type="text" placeholder={lv_Obj.iv_State.Obj.im_im_GetAllStr()} onChange={(e)=>lv_Obj.iv_Ref.SetState({Obj : lv_Obj.im_trimDateString((e.target.value))})}/>                                                                                      
                            </span>
                        </div>
            
                    </section>
                    <section className="IsYun">
                        <div className="IfYun">
                            <h4>This year is leap year?</h4>
                            <p>{lv_Obj.iv_State.Obj.im_isYunYear().toString()}</p>
                            <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>                            
                        </div>
                        <div className="TotalYun">
                            <h4>Total number of leap year</h4>
                            <p>{lv_Obj.iv_State.Obj.im_yunYear()}</p>
                            <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
                        </div>
                    </section>
                    <section  className="WhatDay">
                        <div className="DayOfWeek">
                            <h4>Day of the week</h4>
                            <p>{lv_Obj.iv_State.Obj.im_WhatDay()}</p>
                            <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
                        </div>
                        <div className="DayWeekOn">
                            <span>
                                <h4>Day of the week on the</h4>
                                <input type="number" min={1} max={lv_Obj.iv_State.Obj.im_getMonthLastDay()}
                                onChange={m_Get요일}/>
                                <h4>th</h4>
                            </span>
                            <p>{lv_요일}</p>
                            <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
                        </div>
                    </section>
                    <section className="ZeroYear">
                        <h4>Total number of days</h4>
                        <span>
                            <div>0000-00-01</div>
                            <div>from to</div>
                            <div>{lv_Obj.iv_State.Obj.im_getYYYYMMDD()}</div>
                        </span>
                        <div className="TotalNum">{lv_Obj.iv_State.Obj.im_getDays()}<>&nbsp;</>Days</div>
                    </section>
                   
                   
                </div>
                <Table ObjCalander = {lv_Obj} />
               
            </section>
            
        </div>

       
    );

}
