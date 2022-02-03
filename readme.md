<div align="center">
  <h1>📅나만의 js_Date클래스📆</h1>
    <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fjun-seok816%2FmyDateClass&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
</div>


<br/>
<p align="center">
  <img src="https://user-images.githubusercontent.com/72478198/152263677-756aed24-208e-4238-adde-92e2254cf6be.gif" alt="animated" />
</p>




본 프로젝트는 Javascript의 [__Date생성자__] 를 사용하지 않고 [__나만의 js_Date클래스__]를 사용하여 만들어졌습니다.


<div align="center">
  <h1>Front-end Stack</h1>
  <img src="https://img.shields.io/badge/React-3D41C8?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-EEEF16?style=flat-square&logo=JavaScript&logoColor=white"/>
</div>


### Javascript

프로젝트에 필요한 메소드를 담고있는 클래스를 활용하였습니다
클래스에 대한 정확한 정보는 [__나만의 js_Date클래스__]에 정리해두었습니다.



### React

[__CreateReactApp__]프로그램을 사용하지 않고 기본적인 React 앱을 만든 후 그 위에다 달력 프로젝트를 구현하였습니다.

사이트를 실행시키기 위해서는 이 커맨드를 당신의 터미널에서 실행시켜주세요:

```sh
npm run run_demo
```


<div align ="center">
  <h1>Description js_Date</h1>
</div>

### 타입 호환
- js_Date형과 Date형의 타입호환입니다.
- im_ToDate메소드를 사용하면 js_Date형을 Date형으로 타입호환 할 수 있습니다
- js_Date인스턴스를 생성할 때 Date객체를 Param으로 전달하여 타입호환 할 수 있습니다
</br>


> Example

```javascript
const date = new js_Date(2022-02-02);
const today = new js_Date(new Date());
console.log("js_Date형 타입호환: " + date.im_ToDate())
console.log("Date형 타입호환: " + today.im_getYYYYMMDD())
```

> Result

```javascript
js_Date형 타입호환: Wed Mar 02 2022 00:00:00 GMT+0900 (야쿠츠크 표준시)
Date형 타입호환: 2022-02-02
```

</br>

### 문자열 관련함수

- js_Date객체의 각 단위별 시간을 문자열로 반환합니다.
</br>

> Example

```javascript
const date = new js_Date(2022-02-02);
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
console.log("년,월,일,시,분,초 : " + date.im_getYYYYMMDDHHMMSS())
```

> Result

```javascript
년도 : 2022
월 : 02
날짜 : 02
시간 : 00
분 : 00
초 : 00
밀리초 : 000
년,월,일 : 2022-02-02
시,분,초,밀리초 : 00:00:00:000
시,분,초 : 00:00:00
년,월,일,시,분,초 : 2022-02-02  00:00:00
```
### 주에관련된 함수
- im_getCurrentWeekOfMonth : 현재 날짜가 몇번째 주인지 리턴합니다.
- im_getLastWeekOfMonth : 이달의 마지막 날짜가 몇번째 주인지 리턴합니다.
- im_isFirstWeek : 현재 날짜가 이달의 첫번째 주인지 리턴합니다.
- im_isLastWeek : 현재 날짜가 이달의 마지막 주인지 리턴합니다.
</br>

> Example

```javascript
const date = new js_Date(2022-02-02);    
console.log("현재 날짜가 몇번째 주인지 리턴합니다. : " + date.im_getCurrentWeekOfMonth())
console.log("이달의 마지막 날짜가 몇번째 주인지 리턴합니다.: " + date.im_getLastWeekOfMonth())
console.log("현재 날짜가 이달의 첫번째 주인지 리턴합니다. : " + date.im_isFirstWeek())
console.log("현재 날짜가 이달의 마지막 주인지 리턴합니다. : " + date.im_isLastWeek())
```

> Result

```javascript
현재 날짜가 몇번째 주인지 리턴합니다. : 1
이달의 마지막 날짜가 몇번째 주인지 리턴합니다. : 5
현재 날짜가 이달의 첫번째 주인지 리턴합니다. : true
현재 날짜가 이달의 마지막 주인지 리턴합니다. : false
```

### 윤년 관련함수

#### im_isYunYear , sm_isYunYear

- 해당 년도가 윤년인지 아닌지 체크합니다.

</br>

> Example

```javascript
const date = new js_Date(2022-02-02);
console.log("js_Date인스턴스의 날짜가 윤년인가? : " + date.im_isYunYear())
//or
console.log("Year변수의 날짜가 윤년인가? : " +js_Date.sm_isYunYear(Year))
```

> Result

```javascript
js_Date인스턴스의 날짜가 윤년인가? : false
Year변수의 날짜가 윤년인가? : false
```


#### im_yunYear , sm_yunYear

- 0년 부터 해당년도까지의 윤년이었던 년도수를 계산하는 함수입니다.

</br>

> Example

```javascript
const date = new js_Date(2022-02-02);
console.log("0년1월1일부터 js_Date인스턴스의 날짜까지의 윤년수 : " + date.im_yunYear())
//or
console.log("0년1월1일부터 year년1월 1일까지의 윤년수 : " +js_Date.sm_yunYear(4))
```

> Result

```javascript
0년1월1일부터 js_Date인스턴스의 날짜까지의 윤년수 : 490
0년1월1일부터 year년1월 1일까지의 윤년수 : 1
```

#### im_getMonthLastDay , sm_getMonthLastDay

- 해당 년도,월의 마지막 날짜가 며칠인지 계산하는 함수입니다.

</br>

> Example

```javascript
const date = new js_Date(2022-02-02);
console.log("js_Date인스턴스의 해당하는 월의 마지막 날짜  : " + date.im_getMonthLastDay ())
//or
console.log("Year,Month변수의 해당하는 월의 마지막 날짜 : " +js_Date.sm_getMonthLastDay(2,2))
```

> Result

```javascript
js_Date인스턴스의 해당하는 월의 마지막 날짜 : 28
Year,Month변수의 해당하는 월의 마지막 날짜 : 28
```

### 요일관련 함수


#### im_getWeekDay
- 현재 년월일에 해당하는 요일을 계산하는 메소드 ,1~7을 일요일부터 토요일로 대입해서 구분합니다

</br>

> Example

```javascript
const date = new js_Date(2022-02-02);
console.log("js_Date인스턴스의 요일 : " + date.im_getWeekDay())
```

> Result

1 = 일요일, 2 = 월요일, 3 = 화요일, 4 = 수요일, 5 = 목요일, 6 = 금요일, 7 = 토요일
```javascript
js_Date인스턴스의 요일 : 4
```

### 날짜 관련함수


#### im_SeekYear

- js_Date인스턴스에 년도를 빼거나 더한 인스턴스를 리턴합니다.

</br>

> Example

```javascript
const date = new js_Date(2022-02-02);
let result = date.im_SeekYear(4);
console.log(result.getYYYYMMDD())
```

> Result

```javascript
2026-02-02
```
#### im_SeekMonth

- js_Date인스턴스에 년도를 빼거나 더한 인스턴스를 리턴합니다.

</br>

> Example

```javascript
const date = new js_Date(2022-02-02);
let result = date.im_SeekMonth(4);
console.log(result.getYYYYMMDD())
```

> Result

```javascript
2026-06-02
```

#### im_SeekDay

- js_Date인스턴스에 날짜를 빼거나 더한 인스턴스를 리턴합니다.

</br>

> Example

```javascript
const date = new js_Date(2022-02-02);
let result = date.im_SeekDay(4);
console.log(result.getYYYYMMDD())
```

> Result

```javascript
2026-02-06
```


#### sm_trimDateString

- 문자열을 날짜로 리턴하는 함수입니다.

⚠️ 자릿수를 지켜주세요: 해당 메소드를 사용할때 숫자부분의 년,월,일,시,분,초,밀리초의 자릿수가 다르면 오류가 일어납니다.
</br>

> Example

```javascript
let result = js_Date.sm_trimDateString(2022년02월02)
console.log(result)
```

> Result
- arr[0] : 문자열내 문자만 제거한 숫자
- arr[1] : 년도
- arr[2] : 월
- arr[3] : 일
- arr[4] : 시
- arr[5] : 분
- arr[6] : 초
- arr[7] : 밀리초
```javascript
[20220202,2022,02,02,0,0,0,0]
```


#### 총 일수계산

- sm_getDays : 0년 1월 1일부터 지정한 날까지의 날짜수를 구합니다
- im_getDate : 총일수를 역산하여 년,월,일을 구합니다

</br>

> Example

```javascript
let result = js_Date.sm_getDays(2022 , 2 , 2);
let result2 = new js_Date(new Date());

console.log("0년1월1일부터 년,월,일까지의 총일수를 구합니다 :" +result);
console.log("총일수를 역산하여 년,월,일을 구합니다 : " +result2.im_getDate(result));
```

> Result

```javascript
0년1월1일부터 년,월,일까지의 총일수를 구합니다 : 738553
총일수를 역산하여 년,월,일을 구합니다 : js_Date {iv_Year: 2022, iv_Month: 2, iv_Day: 2, iv_Hours: 0, iv_Minutes: 0, iv_Seconds: 0, iv_Milliseconds: 0}
```

[__Date생성자__]: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
[__나만의 js_Date클래스__]: https://github.com/jun-seok816/myDateClass
[__CreateReactApp__]:https://github.com/facebook/create-react-app

