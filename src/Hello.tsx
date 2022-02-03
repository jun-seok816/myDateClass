import React, {useRef, useState, useMemo, useReducer, useCallback, useEffect} from "react";
import _ from "lodash";

import  "./Hello.scss";

type TState = {
    Name : string,
    Age : number
}

type TRef = {
    SetState : React.Dispatch<React.SetStateAction<TState>>;
}


export class hello {

    iv_State : TState
    iv_Ref : TRef

    public constructor(p_Name : string, p_Age : number ) {
        this.iv_State = {
            Name : p_Name,
            Age : p_Age
        }

        this.iv_Ref = {
            SetState : () => {}
        }
    }

    public im_Add(e:number) {
        this.iv_Ref.SetState(
            (prevValue) =>
                _.merge({}, prevValue, { Age : prevValue.Age + e*1})
        );
    }

}

type TProps = {
    //children: JSX.Element[] | null,
    Obj : hello
}

export default function(props:TProps) {

    const m_PlusDay = (e:any) =>{
        e.preventDefault();
        
        lv_Obj.im_Add(e.target.Year.value);
        // lv_Obj.im_ChangeMonth(e.target.Month.value);
        // lv_Obj.im_ChangeDay(e.target.Day.value);
    }

    let [lv_Obj,] = useState(props.Obj);
    [lv_Obj.iv_State, lv_Obj.iv_Ref.SetState] = useState<TState>(props.Obj.iv_State);

    let [count, SetCount] = useState(0);

    console.log('jsLib : Render ! , name=%s', lv_Obj.iv_State.Name);

    return (
        <div>
            <div className="jsLib_Name"> 이름 : { lv_Obj.iv_State.Name }</div>
            <div className="jsLib_Age"> 나이 : { lv_Obj.iv_State.Age}</div>

            <form onSubmit={m_PlusDay}>
                년<input type="number" name="Year" placeholder="Year"/><br/>
                <input type="submit" value="버튼"></input>
            </form>
        </div>
    );

}
