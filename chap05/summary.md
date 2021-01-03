# 고급스타일링 기법

리액트 네이티브의 매력이 바로 자바스크립트를 이용해 iOS와 안드로이드에서 동시에 동작하는 앱을 만들수 있다는 점이다. 


```
* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.
* A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called.
```
위의 에러가 갑자기 뜨네 

도저히 답이 안나와 포멧을 하고 처음부터 세팅을 해보고자 한다.

리액트 네이티브 윈도우 초기 세팅!!
https://dev-yakuza.posstree.com/ko/react-native/install-on-windows/

```
-- 파워쉘에서 chocolatey 설치
$ Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

-- node 설치
$ choco install -y nodejs.install
$ node -–version
$ npm --version

-- python 설치
$ choco install -y python2
$ python --version

-- react native cli 설치
$ npm install -g react-native-cli
$ react-native --version

기타,, 안드로이드 스튜디오 설치를 통해 완료,,
5시간의 삽질 후 포멧한 다음 처음부터 다시세팅하여 겨우 완성,, 핳핳 ,,
```
뭔가,, 요약집이 아닌 일지가 되어버린 느낌.. 0.0