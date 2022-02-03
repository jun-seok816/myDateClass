/**
 * @ClassDescripton
 *  달력에 필요한 메소드를 담아두고 있는 클래스
 * @NamingRule
 *  Camel Case를 기준으로 이름을 정함
 *
 *  Instance Method : im_
 *  Instance Value : iv_
 *  Static Method : sm_
 *
 *  @Revision
 *      00 : Create
 *    Date : 2022.1.1
 *  Worker : junseok816@gmail.com
 *      00 : 기능추가
 *    Date : 2022.1.14
 *  Worker : junseok816@gmail.com
 *
 *
 */


 export default class js_Date {
    /**
     * Instance Variable */
    public iv_Year : number;
    public iv_Month : number;
    public iv_Day :number;
    public iv_Hours:number;
    public iv_Minutes:number;
    public iv_Seconds:number;
    public iv_Milliseconds:number;
    public iv_MonthLastDay : number;

    /**
     * @param {Number} p_year -년도
     * @param {Number} p_month -월
     * @param {Number} p_day  -일
     */
     public constructor(p_Arg01? : js_Date | string | Date | number
                      , p_Month? : number, p_Day? : number
                      , p_Hours? :number, p_Minutes? : number, p_Seconds? : number, p_Milliseconds? : number) {
        this.iv_Year = 0;
        this.iv_Month = 0;
        this.iv_Day = 0;
        this.iv_Hours = 0;
        this.iv_Minutes = 0;
        this.iv_Seconds = 0;
        this.iv_Milliseconds = 0;
        this.iv_MonthLastDay = 0;

        let m_Parts : string[] =[];

        if (p_Arg01 === undefined) p_Arg01 = new Date();

        if(p_Arg01 instanceof Date){
            this.im_FromDate(p_Arg01);
        }

        if(typeof p_Arg01 === 'string'){
            m_Parts = js_Date.sm_trimDateString(p_Arg01);
        }

        if(p_Arg01 instanceof js_Date){
            this.iv_Year = p_Arg01.iv_Year;
            this.iv_Month = p_Arg01.iv_Month;
            this.iv_Day = p_Arg01.iv_Day;
            this.iv_Hours = p_Arg01.iv_Hours;
            this.iv_Minutes = p_Arg01.iv_Minutes;
            this.iv_Seconds = p_Arg01.iv_Seconds;
            this.iv_Milliseconds = p_Arg01.iv_Milliseconds;
        }

        if(typeof p_Arg01 === 'number'){
            this.iv_Year = p_Arg01;
            if (p_Month) this.iv_Month = p_Month;
            if (p_Day) this.iv_Day = p_Day;
            if (p_Hours) this.iv_Hours = p_Hours;
            if (p_Minutes) this.iv_Minutes = p_Minutes;
            if (p_Seconds) this.iv_Seconds = p_Seconds;
            if (p_Milliseconds) this.iv_Milliseconds = p_Milliseconds;
        }

        if (m_Parts.length > 1) {
            this.iv_Year = parseInt(m_Parts[1]);
        }

        if (m_Parts.length > 2) {
            this.iv_Month = parseInt(m_Parts[2]);
        }

        this.im_fillGoodDate();

        if (m_Parts.length > 3) {
            this.iv_Day = parseInt(m_Parts[3]);
            if (this.iv_Day < 1) this.iv_Day = 1;
            if (this.iv_Day > this.iv_MonthLastDay) this.iv_Day = this.iv_MonthLastDay;
        }

        if (m_Parts.length > 4) {
            this.iv_Hours = parseInt(m_Parts[4]);
        }

        if (m_Parts.length > 5) {
            this.iv_Minutes = parseInt(m_Parts[5]);
        }
        if (m_Parts.length > 6) {
            this.iv_Seconds = parseInt(m_Parts[6]);
        }
        if (m_Parts.length > 7) {
            this.iv_Milliseconds= parseInt(m_Parts[7]);
        }

    }
    public im_SetYear(p_year:number):js_Date{
        this.iv_Year = p_year;
        return this;
    }
    public im_SetMonth(p_month:number):js_Date{
        this.iv_Month = p_month;
        return this;
    }
    public im_SetDay(p_day:number):js_Date{
        this.iv_Day = p_day;
        return this;
    }
    public im_SetHour(p_hour:number):js_Date{
        this.iv_Hours = p_hour;
        return this;
    }
    public im_SetMinutes(p_minutes:number):js_Date{
        this.iv_Minutes = p_minutes;
        return this;
    }
    public im_SetSeconds(p_Seconds:number):js_Date{
        this.iv_Seconds = p_Seconds;
        return this;
    }

     /**                                         +-------------------------
      * -----------------------------------------+ Date,js_Date인스턴스 리턴
      *                                          +-------------------------
      /**
      * 현재 년월일에 대한 Date 객체를 반환합니다
      * @returns {Date} Date인스턴스
      */
     public im_ToDate():Date{
         return new Date(
             this.iv_Year,
             this.iv_Month,
             this.iv_Day,
             this.iv_Hours,
             this.iv_Minutes,
             this.iv_Seconds,
             this.iv_Milliseconds)
     }

     public im_FromDate(p_Date : Date) : js_Date {
         this.iv_Year = p_Date.getFullYear();
         this.iv_Month = p_Date.getMonth()+1;
         this.iv_Day = p_Date.getDate();
         this.iv_Hours = p_Date.getHours();
         this.iv_Minutes = p_Date.getMinutes();
         this.iv_Seconds = p_Date.getSeconds();
         this.iv_Milliseconds = p_Date.getMilliseconds();

         return this;
     }

     /**
      * 현재 년월일에 대한 js_Date 객체를 반환합니다
      * @returns {js_Date} js_Date 인스턴스
      */
     public static sm_GetNowDate():js_Date {
         let m_Date = new Date();
         return new js_Date(m_Date.getFullYear()
             , m_Date.getMonth()+1
             , m_Date.getDate()
             , m_Date.getHours()
             , m_Date.getMinutes()
             , m_Date.getSeconds()
             , m_Date.getMilliseconds());
     }


    /**                                         +-------------------------
     * -----------------------------------------+ 문자,숫자로 변환하는 함수/
     *                                          +-------------------------
    /**
     *
     * @returns {string} 각 시간단위의 부족한 자리수를 0으로 채워서 리턴합니다
     */
    public im_getYearStr():string{
        let m_length = (this.iv_Year+'').length;
        return ('0000'+this.iv_Year).substring(m_length,m_length+4);
    }
    public im_getMonthStr():string{
        let m_length = (this.iv_Month+'').length;
        return ('00'+this.iv_Month).substring(m_length,m_length+2);
    }
    public im_getDayStr():string{
        let m_length = (this.iv_Day+'').length;
        return ('00'+this.iv_Day).substring(m_length,m_length+2);
    }
    public im_getHoursStr():string{
        let m_length = (this.iv_Hours+'').length;
        return ('00'+this.iv_Hours).substring(m_length,m_length+2);
    }
    public im_getMinutesStr():string{
        let m_length = (this.iv_Minutes+'').length;
        return ('00'+this.iv_Minutes).substring(m_length,m_length+2);
    }
    public im_getSecondsStr():string{
        let m_length = (this.iv_Seconds+'').length;
        return ('00'+this.iv_Seconds).substring(m_length,m_length+2);
    }
    public im_getMilliSecondsStr():string{
        let m_length = (this.iv_Milliseconds+'').length;
        return ('000'+this.iv_Milliseconds).substring(m_length,m_length+3);
    }
    public im_im_GetAllStr():string{
        return this.im_getYearStr() + '-' + this.im_getMonthStr() + '-' + this.im_getDayStr()
        + ' '
        + this.im_getHoursStr() + ':' + this.im_getMinutesStr() + ':' + this.im_getSecondsStr() + ':' + this.im_getMilliSecondsStr()
    }

    /**
     *
     * @returns {string} js_Date인스턴스 변수인
     * 년,월,일,시,분,초,밀리세컨드를 문자열로 리턴
     * */
    public im_getYYYYMMDD():string{
        return this.im_getYearStr() +'-'
             + this.im_getMonthStr() +'-'
             + this.im_getDayStr();
    }
    public im_getHHMMSSsss() : string {
        return this.im_getHoursStr()+':'
             + this.im_getMinutesStr()+':'
             + this.im_getSecondsStr()+':'
             + this.im_getMilliSecondsStr()
        ;
    };
    public im_getHHMMSS() : string {
        return this.im_getHoursStr()+':'
        + this.im_getMinutesStr()+':'
        + this.im_getSecondsStr()
    }
    public im_getYYYYMMDDHHMMSS() : string {
        return this.im_getYYYYMMDD() +'  '+ this.im_getHHMMSS();
    };
      /**
     *
     * @param {string } p_Date 문자열로 되어있는 날짜
     * @returns 문자열로 되어있는 날짜를 년,월,일,시,분,초,밀리초 로 문자열을 분리하여 배열로 리턴
     */
    public static sm_trimDateString(p_Date : string) : string[] {

        // 숫자가 아닌것은 모두 제거
        p_Date = p_Date.replace(/\D/g,'');

        // 년,월,일,시,분,초,밀리초 로 문자열을 분리한다. (/g 옵션을 사용하면 그룹별 결과를 받을 수 없음)
        let m_Value = p_Date.match(/(\d{0,4})(\d{0,2})(\d{0,2})(\d{0,2})(\d{0,2})(\d{0,2})(\d{0,3})/);

        if (m_Value === null) return [];

        for (let i=0; i < m_Value.length; i++) {
            if (m_Value[i] === '') m_Value[i] = '0';
        }

        if (m_Value.length > 1) return m_Value;

        return [];
    }

    public im_trimDateString(p_Date : string) : js_Date{
        let arr = js_Date.sm_trimDateString(p_Date);
        this.iv_Year = parseInt(arr[1]);
        this.iv_Month = parseInt(arr[2]);
        this.iv_Day = parseInt(arr[3]);
        this.iv_Hours = parseInt(arr[4]);
        this.iv_Minutes = parseInt(arr[5]);
        this.iv_Seconds = parseInt(arr[6]);
        this.iv_Milliseconds = parseInt(arr[7]);
        this.im_fillGoodDate();
        return this
    }
    /**                                         +-------------------------
     * -----------------------------------------+ 날짜 추가감소 함수/
     *                                          +-------------------------
    /**
     *
     * @param p_Days 플러스할 날짜
     * @returns js_Date인스턴스에서 특정일 만큼 추가한 js_Date인스턴스를 리턴합니다
     */
    public im_SeekDay(p_Days : number) : js_Date{
        return this.im_getDate(
            js_Date.sm_getDays(this.iv_Year,this.iv_Month,this.iv_Day+p_Days)
        )
    }
    /**
     *
     * @param p_Month 플러스할 개월수
     * @returns js_Date인스턴스에서 특정 개월수 만큼 추가한 js_Date인스턴스를 리턴합니다
     */
    public im_SeekMonth(p_Month : number) : js_Date{
        if (p_Month === 0) return this;

        if (p_Month > 0) {
            this.iv_Year = this.iv_Year + Math.trunc(p_Month / 12);
            p_Month = p_Month % 12;
            this.iv_Month = this.iv_Month + p_Month;
            if (this.iv_Month > 12) {
                this.iv_Year++;
                this.iv_Month = this.iv_Month % 12;
            }
        } else {
            p_Month = Math.abs(p_Month);
            this.iv_Year = this.iv_Year - Math.trunc(p_Month / 12);
            p_Month = p_Month % 12;
            if (this.iv_Month > p_Month) {
                this.iv_Month = this.iv_Month - p_Month;
            } else {
                this.iv_Year--;
                this.iv_Month = (this.iv_Month + 12) - p_Month;
            }
        }
        this.im_fillGoodDate();
        return this;
    }
    /**
     *
     * @param p_Year 플러스할 년도
     * @returns js_Date인스턴스에서 특정 년수 만큼 추가한 js_Date인스턴스를 리턴합니다
     */
    public im_SeekYear(p_Year : number) : js_Date {

        if (p_Year === 0) return this;

        this.iv_Year = this.iv_Year + p_Year;

        this.im_fillGoodDate();

        return this;
    }


    /**                                         +-------------------------
     * -----------------------------------------+ 윤년에 관련된 함수/
     *                                          +-------------------------
    /**
     * 해당 년도가 윤년인지 아닌지를 체크하는 함수입니다.
     * @param {Number} p_year -년도
     * @returns {Boolean} true or false
     */
    public static sm_isYunYear(p_year:number):boolean {
        let m_Result = false;
        if (p_year === 0)
            return false;
        if ((p_year % 4) === 0)
            m_Result = true;
        if ((p_year % 100) === 0)
            m_Result = false;
        if ((p_year % 400) === 0)
            m_Result = true;
        return m_Result;
    }
    public im_isYunYear():boolean {
        return js_Date.sm_isYunYear(this.iv_Year);
    }

    /**
     * 0년 부터 해당년도까지의 윤년이었던 년도수를 계산하는 함수입니다.
     * @param {Number} p_year - 년도
     * @returns {Number} 윤년 수
     */
    public static sm_yunYear(p_year:number):number {
        if (p_year < 1)
            return 0;
        return Math.trunc(p_year / 4)
            - Math.trunc(p_year / 100)
            + Math.trunc(p_year / 400);
    }
    public im_yunYear():number {
        return js_Date.sm_yunYear(this.iv_Year);
    }
    /**                                         +-------------------------
     * -----------------------------------------+ 총일수를 년도로 년도를 총일수로 반환하는 함수/
     *                                          +-------------------------
    /**
     *
     * 0년 1월 1일 부터 해당 년월일 까지의 총일수를 계산합니다
     * @param {Number} p_year - 년도
     * @param {Number} p_month -월
     * @param {Number} p_days  - 일
     * @returns {Number} 총 일수
     */
    public static sm_getDays(p_year:number
                            ,p_month:number = 1
                            ,p_days:number = 1):number {
        let m_Year = p_year;
        let m_BeforeYear = m_Year - 1;
        let m_윤달Days = js_Date.sm_yunYear(m_BeforeYear);
        let m_YearsDays = 0;
        let m_Index = 1;
        while (m_Index < p_month) {
            let m_LastDay = js_Date.sm_getMonthLastDay(m_Year, m_Index);
            m_YearsDays = m_YearsDays + m_LastDay;
            m_Index++;
        }
        let m_Result = (m_BeforeYear + 1) * 365
                    + m_윤달Days
                    + m_YearsDays
                    + p_days;
        return m_Result;
    }
    public im_getDays():number {
        return js_Date.sm_getDays(this.iv_Year, this.iv_Month, this.iv_Day);
    }

    /**
     *
     * @param {number} p_total 총 일수
     * @returns 총일수를 년도,월,일수로 계산하여 해당 년,월,일을 param으로 받은 js_Date인스턴스를 리턴합니다.
     */
    public im_getDate(p_total:number):js_Date {
        this.iv_Year = Math.trunc(p_total / 365);
        this.iv_Month = 1;
        this.iv_Day = 0;
        while (this.iv_Year >= 0) {
            this.iv_Day = p_total - (js_Date.sm_getDays(this.iv_Year,1,1) - 1);
            if (this.iv_Day < 1) {
                this.iv_Year--;
                continue;
            }
            while (this.iv_Month <= 12) {
                let m_last = js_Date.sm_getMonthLastDay(this.iv_Year, this.iv_Month);
                if (this.iv_Day > m_last) {
                    this.iv_Day = this.iv_Day - m_last;
                    this.iv_Month++;
                }else {
                    break;
                }
            }
            break;
        }
        return this;
    }

     /**                                        +-------------------------
     * -----------------------------------------+ 요일관련함수/
     *                                          +-------------------------
    /**
     * 현재 년월일에 해당하는 요일을 계산하는 메소드 ,1~7을 일요일부터 토요일로 대입해서 구분합니다
     * @returns {Number} 1~7까지의 정수
     */
    public im_getWeekDay():number {
        let m_Days = this.im_getDays();
        let m_Result = m_Days % 7;
        if (m_Result === 0) m_Result = 7;
        return m_Result;
    }

    public im_WhatDay(p_day : number = this.im_getWeekDay()):string{
        let day:string = '';
        switch(p_day){
            case 1: day = '일요일';
                break;
            case 2 : day = '월요일';
                break;
            case 3 : day = '화요일';
                break;
            case 4 : day = '수요일';
                break;
            case 5 : day = '목요일';
                break;
            case 6 : day = '금요일';
                break;
            case 7 : day = '토요일';
                break;
        }
        return day;
    }
    /**
     * @param p_Day 현재 년,월,p_Day일에 해당하는 요일을 계산하는 메소드
     * @returns {Number} 1~7까지의 정수
     */
    public im_DayOfWeek(p_Day? : number) : number {
        let m_Days = js_Date.sm_getDays(this.iv_Year,this.iv_Month,p_Day);
        let m_Result = m_Days % 7;
        if (m_Result === 0) m_Result = 7;
        return m_Result;
    }
    /**                                         +-------------------------
     * -----------------------------------------+ 주에 관련된 함수
     *                                          +-------------------------
    /**
     * @returns {number} 현재 날짜가 몇번째 주인지 리턴합니다.
     */
    public im_getCurrentWeekOfMonth() : number {
        // 첫날의 im_DayOfWeek 사용
        return Math.trunc((this.im_DayOfWeek(1) + this.iv_Day-2) / 7) + 1;
    }
    /**
     * @returns {number} 이달의 마지막 날짜가 몇번째 주인지 리턴합니다.
     */
    public im_getLastWeekOfMonth() : number {
        // 첫날의 im_DayOfWeek 사용
        return Math.trunc((this.im_DayOfWeek(1) + this.im_getMonthLastDay()-2) / 7) +1;
    }
    /**
     * @returns {boolean} 현재 날짜가 이달의 첫번째 주인지 확인
     */
    public im_isFirstWeek() : boolean {
        return this.im_getCurrentWeekOfMonth() == 1;
    }

    /**
     * @returns {boolean} 현재 날짜가 이달의 마지막 주인지 확인
     */
    public im_isLastWeek() : boolean {
        return this.im_getLastWeekOfMonth() === this.im_getCurrentWeekOfMonth();
    }

    /**
     * 각월의 마지막 날짜를 년도,월에 따라 반환합니다
     * @param {Number} p_year -년도
     * @param {Number} p_month -월
     * @returns {Number} 각월의 마지막 날짜
     */
    public static sm_getMonthLastDay(p_year:number, p_month:number):number {
        let lastDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        js_Date.sm_isYunYear(p_year) ? lastDay[1] = 29 : lastDay[1] = 28;
        if (p_month - 1 < 0)
            return 0;
        return lastDay[p_month - 1];
    }
    public im_getMonthLastDay():number {
        return js_Date.sm_getMonthLastDay(this.iv_Year, this.iv_Month);
    }
    /**                                         +-------------------------
     * -----------------------------------------+ Error Check
     *                                          +-------------------------
     /**
     * Instance Value값들에 제한값을 설정합니다
     */
      public im_fillGoodDate()  {
        if (this.iv_Year > 9999) this.iv_Year = 9999;

        if (this.iv_Month < 1) this.iv_Month = 1;
        if (this.iv_Month > 12) this.iv_Month = 12;

        this.iv_MonthLastDay = this.im_getMonthLastDay();

        if (this.iv_Day < 1) this.iv_Day = 1;
        if (this.iv_Day > this.iv_MonthLastDay) this.iv_Day = this.iv_MonthLastDay;

        if (this.iv_Hours < 0) this.iv_Hours = 0;
        if (this.iv_Hours > 23) this.iv_Hours = 23;

        if (this.iv_Minutes < 0) this.iv_Minutes = 0;
        if (this.iv_Minutes > 59) this.iv_Minutes = 59;

        if (this.iv_Seconds < 0) this.iv_Seconds = 0;
        if (this.iv_Seconds > 59) this.iv_Seconds = 59;

        if (this.iv_Milliseconds < 0) this.iv_Milliseconds = 0;
        if (this.iv_Milliseconds > 999) this.iv_Milliseconds = 999;
    }
    /**
     * 0년부터 9999년까지 반복문을 돌려서 sm_DayCalculate,sm_getDays메소드가 정확한 값을 산출하는지 확인합니다.
     * @return {void} - console로 확인
     */
    error_check() {
        let m_totalCount = 0;
        let m_ErrorCount = 0;
        for (let year = 0; year <= 9999; year++) {
            for (let month = 1; month <= 12; month++) {
                let m_MonthLastDay = js_Date.sm_getMonthLastDay(year, month);
                for (let day = 1; day <= m_MonthLastDay; day++) {
                    m_totalCount++;
                    let m_Date = this.im_getDate(m_totalCount);
                    if (m_Date.iv_Year !== year || m_Date.iv_Month !== month || m_Date.iv_Day !== day
                    ) {
                        m_ErrorCount++;
                        console.log('error ! year : %d  month : %d  day : %d ', year, month, day);
                    }
                    if (m_totalCount !== js_Date.sm_getDays(year, month, day)) {
                        m_ErrorCount++;
                        console.log('Days error! year: %d month : %d day : %d TotalDays : %d Totlacount : %d', year, month, day, js_Date.sm_getDays(year, month, day), m_totalCount);
                    }
                }
            }
        }
        console.log("TotalCount : %d , ErrorCount : %d", m_totalCount, m_ErrorCount);
    }

}
