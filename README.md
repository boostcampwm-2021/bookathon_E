# 🍘 서비스명 : 맛좀볼래?!

![img](https://img.shields.io/badge/Express--orange) ![project_start_date](https://img.shields.io/badge/Dedate%20Start%20Date-2021--09--23-informational.svg)

> bookathon E조 레포지토리입니다.
> 
> nCloud micro server를 통해서 배포중입니다.

#### 👉 [맛좀볼래?! 서비스 맛 보러 이동하기](http://want-some-taste.o-r.kr/)

## ⚒ 기술 스택
<div>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/Pug-A86454?style=flat-square&logo=Pug&logoColor=white"/>
  <img src="https://img.shields.io/badge/NCloud-03C75A?style=flat-square&logo=naver&logoColor=white"/>
  <img src="https://img.shields.io/badge/NGINX-009639?style=flat-square&logo=nginx&logoColor=white"/>
  <img src="https://img.shields.io/badge/neDB-41454A?style=flat-square&logo=nedb&logoColor=white"/>
  <img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=white"/>
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"/>
</div>

## 🥕 팀원 구성

| J190   | J078   | J125  | J102   | 
| :------: | :------: | :------: | :------: |
| 정현구 | 민수빈 | 오석호 | 설민욱 |

![image (7)](https://user-images.githubusercontent.com/69030160/134611560-ec17886d-3b89-4210-98ff-d5ffdd8561da.png)

## 👨‍👧‍👦 작업 결과

![맛좀볼래 결과3](https://user-images.githubusercontent.com/69030160/134624111-e77c8b8d-b3aa-4bb2-9bf5-cfab404b4a35.gif)

## 🥇 감동적인 1등 수상

![맛좀볼래 수상](https://user-images.githubusercontent.com/14370441/135716121-fab6952e-be3b-4008-b090-a9ac1ca24fc7.png)

## 🥟 세줄 기획

그냥 다른 사람에게 아무런 말이나 하고 싶고, 아무런 말이나 듣고 싶은 날을 위한 포춘쿠키 웹페이지입니다.

사용자는 아무 말이나 입력하여 서버에 보낼 수 있고, 다른 사람이 보낸 말을 랜덤하게 받아볼 수도 있습니다.

말을 입력하여 보낼 때와 받을 때 포춘쿠키처럼 예쁜 애니메이션이 적용되면 좋겠습니다.

## 🥜 애플리케이션 구축을 위한 5W1H 기획서

### 🍺 Who

- 부스트캠프 캠퍼, 마스터, 운영진

### 🍺 When & What

- 불특정 다수에게 내가 누군지 드러내지 않고 내 속마음이나 전달사항을 드러내고 싶을 때 사용 가능
- 오늘의 운세가 담겨 있는 포춘쿠키 열람 가능

### 🍺 Where

- 웹 환경 이용
- 반응형 화면으로 모바일 화면 이용

### 🍺 Why

- 현재 부스트캠프는 코로나로 인한 온라인 수업체제로 진행되고 있기 때문에 서로 이야기해야 할 내용이 있다면 반드시 자신의 이름을 드러내야 합니다. 하지만 가끔은 비밀스럽게 하고 싶은 이야기가 있을 수 있습니다. 웹 수업 과정에서 Slido와 Google Docs를 통해 익명으로 질문이나 이야기를 주고받긴 하지만 특정 주제에 한정되거나, 웹 풀스택 과정에 있는 사람들끼리 이야기할 수 있는 구조였습니다. 저희 애플리케이션은 이런 상황 속에서 더 많은 사람들에게 자유롭게 익명 상태로 말할 수 있는 기회를 제공할 것입니다.
- 힘든 날에는 응원을 받고 싶거나, 아무 말이나 외치고 싶을 때 사용할 수 있을 것입니다.
- 다른 사람이 썼던 글을 랜덤하게 받을 수 있는 기능을 제공하여 익명으로 소통이 가능하게 만들어줍니다.

### 🍺 How

- Chat System이 아닌 일방적인 Save & Random Load 방식이 핵심입니다. 작성한 내용을 DB에 저장하고, 그 내용을 랜덤으로 사용자에게 출력하는 방식을 생각했습니다. 즉 내가 작성하는 내용은 **불특정 다수**가 볼 수 있습니다. 물론 안에 나름의 비밀 장치를 달아서 대화를 시도할 수 있겠죠. 하지만 데이터의 양이 많아진다면 그만큼 메시지를 찾기 위한 노력이 추가로 필요할 것입니다. (ex 크롱형 사랑해요)
- 추가로 내용에 따라 순한맛과 매운맛으로 구분할 예정입니다.
- 사용자 분들이 어떻게 순한 맛과 매운 맛의 기준을 나눌지 직접 판단하여 작성합니다.

## 📃 개발 기획 & 디자인 기획

bookathon E조 개발 기획 링크 : [Go to Link](https://onyx-knee-40f.notion.site/2e86f7fa734f4427987479b7238ae763)

bookathon E조 디자인 기획 링크 : [Go to Link](https://www.figma.com/file/Gl4bE7UHwQ3yyRqFtnusaI/)

## 📃 패치노트 

[v0.0.0](https://github.com/boostcampwm-2021/bookathon_E/wiki/%EB%A7%9B%EC%A2%80-%EB%B3%BC%EB%9E%98%3F!-%ED%8C%A8%EC%B9%98%EB%85%B8%ED%8A%B8-v0.0.0)

[v0.0.1](https://github.com/boostcampwm-2021/bookathon_E/wiki/%EB%A7%9B%EC%A2%80-%EB%B3%BC%EB%9E%98%3F!-%ED%8C%A8%EC%B9%98%EB%85%B8%ED%8A%B8-v0.0.1)

## 📃 API 문서

[v0.0.0](https://github.com/boostcampwm-2021/bookathon_E/wiki/%EB%A7%9B%EC%A2%80-%EB%B3%BC%EB%9E%98%3F!-api-reference-v0.0.0)
