# 애니메이션

애니메이션은 앱의 UI를 향상하거나 기존 디자인을 좀 더 생기있게 만들 때 사용합니다. 적절할 때에 적절하게 실행되는 애니메이션은 평범한 사용자 경험과 평범함을 뛰어넘는 사용자 경험의 차이를 만들어 낼 수 있으며 결국 유사한 앱 사이에서 개발하는 앱을 돋보이게 만들 것이다!


## Animated API 소개

1. 'react-native'에서 Animated를 가져오기
2. Animated API를 이용해서 애니메이션 효과 만들기
3. 컴포넌트에 스타일로 애니메이션 효과 연결하기

Animated API를 이용해서 애니메이션이 적용 가능한 컴포넌트는 다음 네 가지입니다.
- View 컴포넌트
- ScrollView 컴포넌트
- Text 컴포넌트
- Image 컴포넌트


## 정리

- 리액트 네이티브에서 애니메이션을 만들 때, 기본 제공하는 Animated API를 사용하도록 추천합니다.
- Animated API 라이브러리로 애니메이션을 만들 때 주로 사용하는 메서드는 Animated.timing 입니다.
- 기본 제공되는 애니메이션 적용 가능 컴포넌트는 View, Text, Image, ScrollView 컴포넌트뿐입니다. 하지만, createAnimatedComponent를 이요해서 사용자 정의 애니메이션 적용 가능 컴포넌트를 만들 수 있습니다.
- interpolate 메서드를 이용해서 애니메이션 효과들을 연결하거나 재사용할 수 있습니다.
- Animated.parallel를 이용해서 애니메이션의 배열을 동시에 만들고 실행할 수 이씁니다.
- Animated.loop를 이용해서 무한 반복되는 애니메이션을 만들 수 있습니다.
- Animated.sequence를 이용해서 차례로 실행되는 순차적인 애니메이션을 만들 수 있습니다.
- ANimated.stagger를 사용해서 간격을 두고 실행되는 애니메이션 배열을 만들 수 있습니다. 각 애니메이션은 전달되는 시간 값을 기준으로 간격을 두고 시작합니다.