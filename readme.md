<div align="center">
  <h1>๐๋๋ง์ js_Dateํด๋์ค๐</h1>
    <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fjun-seok816%2FmyDateClass&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
</div>


<br/>
<p align="center">
  <img src="https://user-images.githubusercontent.com/72478198/152263677-756aed24-208e-4238-adde-92e2254cf6be.gif" alt="animated" />
</p>




๋ณธ ํ๋ก์ ํธ๋ Javascript์ [__Date์์ฑ์__] ๋ฅผ ์ฌ์ฉํ์ง ์๊ณ  [__๋๋ง์ js_Dateํด๋์ค__]๋ฅผ ์ฌ์ฉํ์ฌ ๋ง๋ค์ด์ก์ต๋๋ค.


<div align="center">
  <h1>Front-end Stack</h1>
  <img src="https://img.shields.io/badge/React-3D41C8?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-EEEF16?style=flat-square&logo=JavaScript&logoColor=white"/>
</div>


### Javascript

ํ๋ก์ ํธ์ ํ์ํ ๋ฉ์๋๋ฅผ ๋ด๊ณ ์๋ ํด๋์ค๋ฅผ ํ์ฉํ์์ต๋๋ค
ํด๋์ค์ ๋ํ ์ ํํ ์ ๋ณด๋ [__๋๋ง์ js_Dateํด๋์ค__]์ ์ ๋ฆฌํด๋์์ต๋๋ค.



### React

[__CreateReactApp__]ํ๋ก๊ทธ๋จ์ ์ฌ์ฉํ์ง ์๊ณ  ๊ธฐ๋ณธ์ ์ธ React ์ฑ์ ๋ง๋  ํ ๊ทธ ์์๋ค ๋ฌ๋ ฅ ํ๋ก์ ํธ๋ฅผ ๊ตฌํํ์์ต๋๋ค.

์ฌ์ดํธ๋ฅผ ์คํ์ํค๊ธฐ ์ํด์๋ ์ด ์ปค๋งจ๋๋ฅผ ๋น์ ์ ํฐ๋ฏธ๋์์ ์คํ์์ผ์ฃผ์ธ์:

```sh
npm run run_demo
```


<div align ="center">
  <h1>Description js_Date</h1>
</div>

### ํ์ ํธํ
- js_Dateํ๊ณผ Dateํ์ ํ์ํธํ์๋๋ค.
- im_ToDate๋ฉ์๋๋ฅผ ์ฌ์ฉํ๋ฉด js_Dateํ์ Dateํ์ผ๋ก ํ์ํธํ ํ  ์ ์์ต๋๋ค
- js_Date์ธ์คํด์ค๋ฅผ ์์ฑํ  ๋ Date๊ฐ์ฒด๋ฅผ Param์ผ๋ก ์ ๋ฌํ์ฌ ํ์ํธํ ํ  ์ ์์ต๋๋ค
</br>


> Example

```javascript
const date = new js_Date(2022-02-02);
const today = new js_Date(new Date());
console.log("js_Dateํ ํ์ํธํ: " + date.im_ToDate())
console.log("Dateํ ํ์ํธํ: " + today.im_getYYYYMMDD())
```

> Result

```javascript
js_Dateํ ํ์ํธํ: Wed Mar 02 2022 00:00:00 GMT+0900 (์ผ์ฟ ์ธ ํฌ ํ์ค์)
Dateํ ํ์ํธํ: 2022-02-02
```

</br>

### ๋ฌธ์์ด ๊ด๋ จํจ์

- js_Date๊ฐ์ฒด์ ๊ฐ ๋จ์๋ณ ์๊ฐ์ ๋ฌธ์์ด๋ก ๋ฐํํฉ๋๋ค.
</br>

> Example

```javascript
const date = new js_Date(2022-02-02);
console.log("๋๋ : " + date.im_getYearStr())
console.log("์  : " + date.im_getMonthStr())
console.log("๋ ์ง : " + date.im_getDayStr())
console.log("์๊ฐ : " + date.im_getHoursStr())
console.log("๋ถ : " + date.im_getMinutesStr())
console.log("์ด : " + date.im_getSecondsStr())
console.log("๋ฐ๋ฆฌ์ด : " + date.im_getMilliSecondsStr())
console.log("๋,์,์ผ : " + date.im_getYYYYMMDD())
console.log("์,๋ถ,์ด,๋ฐ๋ฆฌ์ด : " + date.im_getHHMMSSsss())
console.log("์,๋ถ,์ด : " + date.im_getHHMMSS())
console.log("๋,์,์ผ,์,๋ถ,์ด : " + date.im_getYYYYMMDDHHMMSS())
```

> Result

```javascript
๋๋ : 2022
์ : 02
๋ ์ง : 02
์๊ฐ : 00
๋ถ : 00
์ด : 00
๋ฐ๋ฆฌ์ด : 000
๋,์,์ผ : 2022-02-02
์,๋ถ,์ด,๋ฐ๋ฆฌ์ด : 00:00:00:000
์,๋ถ,์ด : 00:00:00
๋,์,์ผ,์,๋ถ,์ด : 2022-02-02  00:00:00
```
### ์ฃผ์๊ด๋ จ๋ ํจ์
- im_getCurrentWeekOfMonth : ํ์ฌ ๋ ์ง๊ฐ ๋ช๋ฒ์งธ ์ฃผ์ธ์ง ๋ฆฌํดํฉ๋๋ค.
- im_getLastWeekOfMonth : ์ด๋ฌ์ ๋ง์ง๋ง ๋ ์ง๊ฐ ๋ช๋ฒ์งธ ์ฃผ์ธ์ง ๋ฆฌํดํฉ๋๋ค.
- im_isFirstWeek : ํ์ฌ ๋ ์ง๊ฐ ์ด๋ฌ์ ์ฒซ๋ฒ์งธ ์ฃผ์ธ์ง ๋ฆฌํดํฉ๋๋ค.
- im_isLastWeek : ํ์ฌ ๋ ์ง๊ฐ ์ด๋ฌ์ ๋ง์ง๋ง ์ฃผ์ธ์ง ๋ฆฌํดํฉ๋๋ค.
</br>

> Example

```javascript
const date = new js_Date(2022-02-02);    
console.log("ํ์ฌ ๋ ์ง๊ฐ ๋ช๋ฒ์งธ ์ฃผ์ธ์ง ๋ฆฌํดํฉ๋๋ค. : " + date.im_getCurrentWeekOfMonth())
console.log("์ด๋ฌ์ ๋ง์ง๋ง ๋ ์ง๊ฐ ๋ช๋ฒ์งธ ์ฃผ์ธ์ง ๋ฆฌํดํฉ๋๋ค.: " + date.im_getLastWeekOfMonth())
console.log("ํ์ฌ ๋ ์ง๊ฐ ์ด๋ฌ์ ์ฒซ๋ฒ์งธ ์ฃผ์ธ์ง ๋ฆฌํดํฉ๋๋ค. : " + date.im_isFirstWeek())
console.log("ํ์ฌ ๋ ์ง๊ฐ ์ด๋ฌ์ ๋ง์ง๋ง ์ฃผ์ธ์ง ๋ฆฌํดํฉ๋๋ค. : " + date.im_isLastWeek())
```

> Result

```javascript
ํ์ฌ ๋ ์ง๊ฐ ๋ช๋ฒ์งธ ์ฃผ์ธ์ง ๋ฆฌํดํฉ๋๋ค. : 1
์ด๋ฌ์ ๋ง์ง๋ง ๋ ์ง๊ฐ ๋ช๋ฒ์งธ ์ฃผ์ธ์ง ๋ฆฌํดํฉ๋๋ค. : 5
ํ์ฌ ๋ ์ง๊ฐ ์ด๋ฌ์ ์ฒซ๋ฒ์งธ ์ฃผ์ธ์ง ๋ฆฌํดํฉ๋๋ค. : true
ํ์ฌ ๋ ์ง๊ฐ ์ด๋ฌ์ ๋ง์ง๋ง ์ฃผ์ธ์ง ๋ฆฌํดํฉ๋๋ค. : false
```

### ์ค๋ ๊ด๋ จํจ์

#### im_isYunYear , sm_isYunYear

- ํด๋น ๋๋๊ฐ ์ค๋์ธ์ง ์๋์ง ์ฒดํฌํฉ๋๋ค.

</br>

> Example

```javascript
const date = new js_Date(2022-02-02);
console.log("js_Date์ธ์คํด์ค์ ๋ ์ง๊ฐ ์ค๋์ธ๊ฐ? : " + date.im_isYunYear())
//or
console.log("Year๋ณ์์ ๋ ์ง๊ฐ ์ค๋์ธ๊ฐ? : " +js_Date.sm_isYunYear(Year))
```

> Result

```javascript
js_Date์ธ์คํด์ค์ ๋ ์ง๊ฐ ์ค๋์ธ๊ฐ? : false
Year๋ณ์์ ๋ ์ง๊ฐ ์ค๋์ธ๊ฐ? : false
```


#### im_yunYear , sm_yunYear

- 0๋ ๋ถํฐ ํด๋น๋๋๊น์ง์ ์ค๋์ด์๋ ๋๋์๋ฅผ ๊ณ์ฐํ๋ ํจ์์๋๋ค.

</br>

> Example

```javascript
const date = new js_Date(2022-02-02);
console.log("0๋1์1์ผ๋ถํฐ js_Date์ธ์คํด์ค์ ๋ ์ง๊น์ง์ ์ค๋์ : " + date.im_yunYear())
//or
console.log("0๋1์1์ผ๋ถํฐ year๋1์ 1์ผ๊น์ง์ ์ค๋์ : " +js_Date.sm_yunYear(4))
```

> Result

```javascript
0๋1์1์ผ๋ถํฐ js_Date์ธ์คํด์ค์ ๋ ์ง๊น์ง์ ์ค๋์ : 490
0๋1์1์ผ๋ถํฐ year๋1์ 1์ผ๊น์ง์ ์ค๋์ : 1
```

#### im_getMonthLastDay , sm_getMonthLastDay

- ํด๋น ๋๋,์์ ๋ง์ง๋ง ๋ ์ง๊ฐ ๋ฉฐ์น ์ธ์ง ๊ณ์ฐํ๋ ํจ์์๋๋ค.

</br>

> Example

```javascript
const date = new js_Date(2022-02-02);
console.log("js_Date์ธ์คํด์ค์ ํด๋นํ๋ ์์ ๋ง์ง๋ง ๋ ์ง  : " + date.im_getMonthLastDay ())
//or
console.log("Year,Month๋ณ์์ ํด๋นํ๋ ์์ ๋ง์ง๋ง ๋ ์ง : " +js_Date.sm_getMonthLastDay(2,2))
```

> Result

```javascript
js_Date์ธ์คํด์ค์ ํด๋นํ๋ ์์ ๋ง์ง๋ง ๋ ์ง : 28
Year,Month๋ณ์์ ํด๋นํ๋ ์์ ๋ง์ง๋ง ๋ ์ง : 28
```

### ์์ผ๊ด๋ จ ํจ์


#### im_getWeekDay
- ํ์ฌ ๋์์ผ์ ํด๋นํ๋ ์์ผ์ ๊ณ์ฐํ๋ ๋ฉ์๋ ,1~7์ ์ผ์์ผ๋ถํฐ ํ ์์ผ๋ก ๋์ํด์ ๊ตฌ๋ถํฉ๋๋ค

</br>

> Example

```javascript
const date = new js_Date(2022-02-02);
console.log("js_Date์ธ์คํด์ค์ ์์ผ : " + date.im_getWeekDay())
```

> Result

1 = ์ผ์์ผ, 2 = ์์์ผ, 3 = ํ์์ผ, 4 = ์์์ผ, 5 = ๋ชฉ์์ผ, 6 = ๊ธ์์ผ, 7 = ํ ์์ผ
```javascript
js_Date์ธ์คํด์ค์ ์์ผ : 4
```

### ๋ ์ง ๊ด๋ จํจ์


#### im_SeekYear

- js_Date์ธ์คํด์ค์ ๋๋๋ฅผ ๋นผ๊ฑฐ๋ ๋ํ ์ธ์คํด์ค๋ฅผ ๋ฆฌํดํฉ๋๋ค.

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

- js_Date์ธ์คํด์ค์ ๋๋๋ฅผ ๋นผ๊ฑฐ๋ ๋ํ ์ธ์คํด์ค๋ฅผ ๋ฆฌํดํฉ๋๋ค.

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

- js_Date์ธ์คํด์ค์ ๋ ์ง๋ฅผ ๋นผ๊ฑฐ๋ ๋ํ ์ธ์คํด์ค๋ฅผ ๋ฆฌํดํฉ๋๋ค.

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

- ๋ฌธ์์ด์ ๋ ์ง๋ก ๋ฆฌํดํ๋ ํจ์์๋๋ค.

โ ๏ธ ์๋ฆฟ์๋ฅผ ์ง์ผ์ฃผ์ธ์: ํด๋น ๋ฉ์๋๋ฅผ ์ฌ์ฉํ ๋ ์ซ์๋ถ๋ถ์ ๋,์,์ผ,์,๋ถ,์ด,๋ฐ๋ฆฌ์ด์ ์๋ฆฟ์๊ฐ ๋ค๋ฅด๋ฉด ์ค๋ฅ๊ฐ ์ผ์ด๋ฉ๋๋ค.
</br>

> Example

```javascript
let result = js_Date.sm_trimDateString(2022๋02์02)
console.log(result)
```

> Result
- arr[0] : ๋ฌธ์์ด๋ด ๋ฌธ์๋ง ์ ๊ฑฐํ ์ซ์
- arr[1] : ๋๋
- arr[2] : ์
- arr[3] : ์ผ
- arr[4] : ์
- arr[5] : ๋ถ
- arr[6] : ์ด
- arr[7] : ๋ฐ๋ฆฌ์ด
```javascript
[20220202,2022,02,02,0,0,0,0]
```


#### ์ด ์ผ์๊ณ์ฐ

- sm_getDays : 0๋ 1์ 1์ผ๋ถํฐ ์ง์ ํ ๋ ๊น์ง์ ๋ ์ง์๋ฅผ ๊ตฌํฉ๋๋ค
- im_getDate : ์ด์ผ์๋ฅผ ์ญ์ฐํ์ฌ ๋,์,์ผ์ ๊ตฌํฉ๋๋ค

</br>

> Example

```javascript
let result = js_Date.sm_getDays(2022 , 2 , 2);
let result2 = new js_Date(new Date());

console.log("0๋1์1์ผ๋ถํฐ ๋,์,์ผ๊น์ง์ ์ด์ผ์๋ฅผ ๊ตฌํฉ๋๋ค :" +result);
console.log("์ด์ผ์๋ฅผ ์ญ์ฐํ์ฌ ๋,์,์ผ์ ๊ตฌํฉ๋๋ค : " +result2.im_getDate(result));
```

> Result

```javascript
0๋1์1์ผ๋ถํฐ ๋,์,์ผ๊น์ง์ ์ด์ผ์๋ฅผ ๊ตฌํฉ๋๋ค : 738553
์ด์ผ์๋ฅผ ์ญ์ฐํ์ฌ ๋,์,์ผ์ ๊ตฌํฉ๋๋ค : js_Date {iv_Year: 2022, iv_Month: 2, iv_Day: 2, iv_Hours: 0, iv_Minutes: 0, iv_Seconds: 0, iv_Milliseconds: 0}
```

[__Date์์ฑ์__]: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
[__๋๋ง์ js_Dateํด๋์ค__]: https://github.com/jun-seok816/myDateClass
[__CreateReactApp__]:https://github.com/facebook/create-react-app

