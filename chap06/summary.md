# 내비게이션

앱을 개발하기 전에 앱에서 내비게이션과 라우팅을 어떻게 처리할지 계획하는 시간을 갖는 것이 좋다.! 이 장에서는 모바일 앱에서 주로 사용하는 세 가지 내비게이션 형태인 탭 내비게이션, 스택 내비게이션, 드로어 내비게이션을 다룬다.

### 탭 네비게이션 ###
화면의 위나 아래에 탭이 있고 탭을 누르면 탭과 연결된 화면으로 이동

### 스택 내비게이션 ###
현재 화면을 대신해서 다른 화면이 보여지는 방식으로 다른 화면으로 이동할 때 애니메이션 이동 효과를 구현해 넣기도 함. 

### 드로어 내비게이션 ###
화면의 왼쪽 또는 오른쪽에서 나오는 전형적인 사이드 메뉴이며 옵션 목록을 표시한다. 옵션을 누르면, 드로어가 닫히고 새 화면으로 이동한다. 

리액트 네이티브 프레임워크에는 내비게이션 라이브러리가 포함되어 있지 않은데, 그래서 React Navigation 라이브러리를 사용한다. 이 라이브러리는 리액트 네이티브 개발팀에서 추천한 라이브러리이며 리액트와 리액트 네이티브 커뮤니티에 속한 다수의 사람이 참여하고 있다. 

## 리액트 네이티브 내비게이션과 웹 내비게이션의 비교

웹에서는 URL을 이용해 내비게이션을 처리한다. 새로운 화면으로 이동하는 라우팅은 프레임워크나 개발 환경에 따라서 다양한 방법이 있겠지만 보통 사용자를 새 URL로 보내는 방법을 사용하고 필요하다면 URL에 파라미터들을 추가하기도 한다.

리액트 네이티브에서 라우팅은 컴포넌트가 기준이다. 내비게이터를 이용해 컴포넌트를 로드하거나 표시한다. 탭 내비게이션이나 스택 내비게이션, 또는 드로어 내비게이션 중 하나를 사용하든지 아니면 이들 내비게이션을 결합해서 사용함에 따라 라우팅이 달라진다.

```
$ npx react-native init CitiesApp
$ npm install --save react-native-gesture-handler react-native-reanimated
$ npm install --save uuid react-navigation react-navigation-stack react-navigation-tabs

-- React Native 버전이 0.60 미만이라면 link를 통해 외부 모듈과 네이티브 연결이 필요 (내가 설치한 건 0.60이상이라 패스)
$ npx react-native link react-native-gesture-handler

-- 데이터 유지를 위한 async-storage 설치
$ npm install @react-native-community/async-storage
```
음,, 코드를 다 적고 실행하려는데,, 하얀 화면만 뜨고있다 ㅠ 아예 문서를 보고 새로운 프롲게트를 만들어 보고자 한다.

```
$ npm install @react-navigation/native
$ npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

$ npm install @react-navigation/stack <-- 요건 이미 있다고 한다. ㅋㅋ
$ npm install react-navigation-tabs
```

https://reactnavigation.org/docs/4.x/navigating 여기,, 좋다.. 와,, 일단 내거 버전인 4.x에 맞춰서 테스트코드 작성을 진행하고자 한다.

--- 

## 내비게이션 라이프사이클

이전 섹션에서는 두 개의 화면(Home 및 Details)이 있는 스택 탐색기로 작업했으며 this.props.navigation.navigate('RouteName')를 사용하여 경로를 탐색하는 방법을 배웠습니다.

이 맥락에서 중요한 질문은 다음과 같습니다. 홈에서 멀어지거나 다시 돌아오면 홈에 어떤일이 발생하는가? 경로는 사용자가 경로를 떠나거나 돌아오는 것을 어떻게 알 수 있을까?? 

웹에서 React Navigation으로 이동하면 사용자가 경로 A에서 경로 B로 이동할 때 A가 마운트 해제되고 해당 componentWillUnmount가 호출된다고 가정할 수 있습니다. 사용자가 돌아올 떄 A가 다시 마운트 될 것으로 예상할 수도 있습니다. 이러한 React 라이프 사이클 방법은 여전히 유효하고 React Navigation에서 사용되지만 사용법은 웹과 다릅니다. 이는 모바일 내비게이션의 더 복잡한 요구에 의해 주도됩니다. 

### 예제 시나리오

화면 A가 B가 있는 스택 탐색기를 고려합시오. A로 이동한 후 해당 componentDidMount가 호출됩니다. B를 푸시할 때 componentDidMount도 호출되지만 A는 스택에 마운트 된 상태로 유지되므로 componentWillUnmount는 호출되지 않습니다.

B에서 A로 돌아가면 B의 componentWillUnmount가 호출되지만 A의 componentDidMount는 A가 전체 시간 동안 마운트된 상태로 남아있기 떄문이 아닙니다. 

