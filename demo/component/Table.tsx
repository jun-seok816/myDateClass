
import React, { useState } from 'react';
import "./Table.scss"

export default function Thead(props:any){
  
    let m_Today = new Date();
    let m_Year = m_Today.getFullYear();
    let m_Month = m_Today.getMonth()+1;
    let m_Day = m_Today.getDate();
    let m_WeekDay = props.ObjCalander.im_getWeekDay();
    let m_LastDay = props.ObjCalander.im_getMonthLastDay();
    let day = 0;

    
    const weekArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return (
        <table>
            <thead>
                <tr>
                <td colSpan={7}>
                    <span className="Thead_td">
                        <div>{props.ObjCalander.im_getYearStr()}년</div>
                        <div>{props.ObjCalander.im_getMonthStr()}월</div>
                    </span>
                </td>
                </tr>
                <tr className="week">
                    {weekArr.map((week) => (
                    <td key={week}>
                    {week}
                    </td>
                ))}
                </tr>
            </thead>
            <tbody id="tbody">
            {
                [...Array(6)].map((trn,trni)=>{
                    
                    let week =[];
                    for(let i= 1; i<=7; i++){
                        if (m_WeekDay > 1) {
                            m_WeekDay--;
                            
                            week.push(<td key={"td"+i}></td>);
                        } else {
                            if (day < m_LastDay) {
                                day++;
                                (m_Year == props.ObjCalander.im_getYearStr() && m_Month == props.ObjCalander.im_getMonthStr() && m_Day == day)?
                                week.push(<td className='Today' key={day}>{day}</td>):week.push(<td key={day}>{day}</td>); 
                            } else {
                                week.push(<td key={"lastWeek"+i}></td>);
                            }
                        }
                    }
                    return <tr key={"week"+trni}>{week}</tr>
                })
                
            }
            </tbody>
        </table>
        
    )
}