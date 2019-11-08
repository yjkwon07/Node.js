// 폼 제출
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // form 기본제출을 막아둔다.
    var name = event.target.username.value; // 값을 가져온다.
    if (!name) {
        return alert('이름을 입력하세요');
    }
    // ajax 
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        // 201: 생성됨(POST)
        // if(xhr.status === 200 || xhr.status === 201) {
        // if([201, 200].indexOf(xhr.status) > -1 ) {  Explore
        if ([200, 201].includes(xhr.status)) {
            console.log(xhr.responseText);
            getUser();
        } else {
            console.error(xhr.responseText);
        }
    };
    xhr.open('POST', '/users');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ name: name }));
    event.target.username.value = '';
});

function getUser() { // 로딩 시 사용자 가져오는 함수
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 200) {
            var users = JSON.parse(xhr.responseText);
            box(users); 
        } else {
            console.error(xhr.responseText);
        }
    };
    xhr.open('GET', '/users');
    xhr.send();
}

function box(users) {
    // Object.keys() 메서드는 개체 고유 속성의 이름을 배열로 반환합니다. 배열 순서는 일반 반복문을 사용할 때와 같습니다.
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    var list = document.getElementById('list');
    list.innerHTML = '';
    Object.keys(users).map(function (key) {
        var userDiv = document.createElement('div');
        var span = document.createElement('span');
        span.textContent = users[key];
        var edit = document.createElement('button');
        var remove = document.createElement('button');
        putBox(edit, key);    
        removeBox(remove, key);
        userDiv.appendChild(span);
        userDiv.appendChild(edit);
        userDiv.appendChild(remove);
        list.appendChild(userDiv);
    });
}

function putBox(edit, key) {
    edit.textContent = '수정';
    edit.addEventListener('click', function () { // 수정 버튼 클릭
        var name = prompt('바꿀 이름을 입력하세요');
        if (!name) {
            return alert('이름을 반드시 입력하셔야 합니다');
        }
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
                getUser();
            } else {
                console.error(xhr.responseText);
            }
        };
        xhr.open('PUT', '/users/' + key);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({ name: name }));
    });
}

function removeBox(remove, key) {
    remove.textContent = '삭제';
    remove.addEventListener('click', function () { // 삭제 버튼 클릭
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
                getUser();
            } else {
                console.error(xhr.responseText);
            }
        };
        xhr.open('DELETE', '/users/' + key);
        xhr.send();
    });
}

window.onload = getUser(); // 로딩 시 getUser 호출...
