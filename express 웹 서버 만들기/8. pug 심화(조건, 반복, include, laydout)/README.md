# pug 심화(조건, 반복, include, laydout)
if, else if, else를 쓸 수 있다.

if not의 unless도 가능하다

for 아이템, 인덱스 in

(모두 들여쓰기가 중요)

웹페이지에서 중복되는 부부은 **include**나 **layout**으로 해결한다.

구조자체가 공통되는 부분은 layout

```pug
    include header.pug
    block content
    include footer.pug
```