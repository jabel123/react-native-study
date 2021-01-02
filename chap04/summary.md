# 스타일링 소개

## 리액트 네이티브에서 스타일 적용하고 관리하기

리액트 네이티브는 다수의 내장 컴포넌트를 제공한다.  예를들어, Text 컴포넌트는 fontWeight속성을 지원하고, View 컴포넌트에는 fontWeight속성이 없다. 
다양한 스타일을 배우고 적용하는 방법을 배우는 데는 시간이 걸리는데, 스타일을 적용하고 관리하는 방법을 기초로 배우고 시작하는게 중요하다. 

### 앱에서 스타일 적용하기

스타일시트로 스타일을 관리하면, 다음과 같은 장점이 있다
- 코드베이스만 분리해서 관리
- 다른 컴포넌트에서 스타일 재사용
- 개발 할 때 스타일 변경이 쉬움

### 스타일 구성하기
인라인 스타일을 이용해 스타일을 적용하는 방법은 추천할 만한 방법이 아니고, 스타일시트를 이용해 스타일을 관리하는 것이 훨씬 더 효과적인 방법이다. 

리액티 네이티브 커뮤니티에서는 다음 두 가지 일반적인 방법을 사용한다.
- 컴포넌트 내에 스타일시트 선언하기
하나의 파일에 컴포넌트와 컴포넌트가 사용할 스타일을 완전히 캡슐화 할 수 있다는 장점이 있다. 
- 컴포넌트 파일과는 별도의 스타일 시트 선언하기
CSS를 사용하는데, 익숙하다면, 사용할 모든 스타일을 벼롣의 한 파일에 선언하는 방법이 있다. 전형적인 이름은 style.js로, js파일로 만들어야 한다.

ex
```
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        marginTop: 150,
        backgroundColor: '#ededed',
        flexWrap: 'wrap'
    }
})

const buttons = StyleSheet.create({
    primary:{
        flex:1,
        height:70
    }
})
export { stylyes, buttons } 
```
### 스타일과 코드

style.js와 같은 코드에 메서드를 선언해서 원하는 값에 의해 다른 테마를 불러오게 하는 기능들을 만들 수 있다. 

---

## 컴포넌트에 스타일 적용하기

예제 내용
- borderWidth를 이용해 profile 컨테이너에 테두리(border)만들기
- borderRadius를 이용해 테두리의 모서리(corner of border) 둥글게 하기
- 컴포넌트 폭의 반 크기인 borderRadius 값을 이용해서 원처럼 보이는 테두리 만들기
- marign과 padding 속성을 이용해 위치 지정하기

Sample Style 예제 진행
```
$ npx react-native init SampleStyle
$ cd SampleStyle
$ npm install -g react-native-cli
```

ProfileCard 예제 진행
```
$ npx react-native init ProfileCard
$ cd ProfileCard
$ npm install -g react-native-cli
```
## Text 컴포넌트 vs View 컴포넌트
View에서 사용하는 대부분의 스타일을 Text에서 사용할 수 있으나 Text에서 사용하는 대부분의 스타일을 View에서는 사용할 수 없다. 

---
## 정리 
- 컴포넌트에 스타일을 적용할 때, 컴포넌트 내에서 인라인 스타일을 적용할 수도 있고 별도의 스타일시트에 정의된 스타일을 참조할 수도 있다.
- 하나의 파일을 이용해서 컴포넌트 내에서 컴포넌트의 정의 이후에 스타일읆 모아서 관리할 수도 있고 별도의 style.js팡리에 스타일을 모아서 관리할 수 있습니다.
- 리액트 네이티브에서의 스타일은 자바스크립트로 이루어진 코드이며 자바스크립트가 제공하는 변수와 함수로 기존의 CSS보다 편리한 점들이 있습니다. 
- View 컴포넌트는 UI의 주요 조립 블록이며 다양한 스타일링 속성을 제공합니다.
- 테두리를 다양하게 활용해 컴포넌트의 모습을 좋게 만들 수 있습니다. 심지어 테두리를 이용해 원 같은 모양도 만들 수 있습니다.
- 마진과 패딩을 이용해 컴포넌트의 위치를 다른 컴포넌트들과 상대적인 위치로 지정할 수 있습니다.
- 절대 위치는 부모 컨테이너 내에서 컴포넌트를 위치시킵니다.
- 기본 폰트 외에 다른 폰트를 사용하려면 문제가 발생할 수 있습니다. Platform컴포넌트를 이용해서 각 운영체제에 적합한 폰트를 선택합니다.
- 색상, 크기, 두께 등의 일반적인 폰트 스타일을 이용해서 Text컴포넌트의 크기나 모습을 변경할 수 있습니다.
- 운영체제에 따라 렌더링이 다르게 표현될 수 있습니다. 
- 텍스트 장식으로 텍스트에 밑줄이나 음영을 추가할 수 있습니다. 