# 7. pug 기본 문법
만약에 html을 보내고 싶다면?

__res.sendFile(html파일 경로);__

html에 변수를 사용할 수 없기 때문에 tmpleat 엔진을 사용한다.

```
    express learn-express --view=pug
```
html 대신에 pug를 사용한다.

pug는 들여쓰기로 부모 자식 태그를 구분한다.

들여쓰기는 탭이든 스페이스든 상관없지만 하나로 통일해야 한다.

pug는 들여쓰기가 안되어있을 시 바로 에러가난다.

## app.render()
```javascript
  res.render('index', { 
    title: 'ejs',
    fruits : ['사과', '배', '오렌지'], 
  });
```

## pug 기능 
`-`뒤에 변수를 선언할 수 있고 

`=` 뒤에 변수를 사용하면 된다.

1. 속성은 () 안에, `div`태그는 생략가능 
2. 내용은 태그 한 칸 띄고 작성
3. 아이디는 #, 클래스는 . 
4. |로 여러줄, 
5. 태그. 으로 여러 줄