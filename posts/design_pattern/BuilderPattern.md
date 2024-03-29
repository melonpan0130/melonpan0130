---
title: 'Builder Pattern'
date: 2020-11-18 23:55:00
path: '/design_pattern/BuilderPattern'
category: 'design_pattern'
---

참고

[기계인간]('https://johngrib.github.io/wiki/builder-pattern/') [위키백과]('https://ko.wikipedia.org/wiki/%EB%B9%8C%EB%8D%94_%ED%8C%A8%ED%84%B4') 


내용 출처 [OKKY]('https://okky.kr/article/396206') [빌더를 사용하는 이유]('https://hashcode.co.kr/questions/887/%EC%9E%90%EB%B0%94%EC%97%90%EC%84%9C-builder%EB%A5%BC-%EC%93%B0%EB%8A%94-%EC%9D%B4%EC%9C%A0%EB%8A%94-%EB%AD%94%EA%B0%80%EC%9A%94')

####빌더와 자바 빈즈 패턴과의 차이
* 


####빌더패턴의 장점
* 클라이언트 코드는 작성이 쉽고, 가독성이 좋다.
* 생성자처럼 빌더는 자신의 매개변수에 불변 규칙(invariants)을 적용할 수 있고 build 메소드는 그런 불변 규칙을 검사할 수 있다.
* 여러개의 가변인자(varargs) 매개변수를 가질 수 있다.
* 유연성이 좋다. 하나의 빌더는 여러개의 객체를 생성한느데 사용될 수 있으며, 이러한 과정 중에 빌더의 매개변수는 다양하게 조정될 수 있다.
* 매개변수들의 값이 설정된 빌더는 훌륭한 추상팩토리를 만든다. 즉, 클라이언트 코드에서는 그런 빌더를 메소드로 전달하여 그 메소드에서 하나 이상의 객체를 생성하게 할 수 있다.


텔레스코핑 패턴
-> 설정할 필요가 없는 필드에도 인자를 전달해야 하는 경우가 발생. 인자 수가 늘어나면 클라이언트 코드를 작성하기 어려워짐.특정 파라미터가 어떤 값을 나타내는지 확인하기 어려움
자바 빈 패턴
-> 한번의 함수호출로 객체 생성을 끝낼 수 없어 객체 일관성(consistency)가 일시적으로 깨질 수 있다는 우려 발생.
빌더 패턴
-> 점층적 생성자 패턴의 안정성 + 자바빈 패턴의 가독성을 결합한 패턴



데코레이터 패턴 vs 프록시 패턴
