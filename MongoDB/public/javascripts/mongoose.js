// 댓글 등록
function createComment(userID, comment) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 201) {
            console.log(xhr.responseText);
            getComment(id);
        } else {
            console.error(xhr.responseText);
        }
    };
    xhr.open('POST', '/comment');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ id: userID, comment: comment }));
}

// 모든 댓글 조회
function getComment(id) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 200) {
            var comments = JSON.parse(xhr.responseText);
            var tbody = document.querySelector('#comment-list tbody');
            tbody.innerHTML = '';
            comments.map(function (comment) {
                var row = document.createElement('tr');
                var td = document.createElement('td');
                td.textContent = comment._id;
                row.appendChild(td);
                td = document.createElement('td');
                td.textContent = comment.commenter.name;
                row.appendChild(td);
                td = document.createElement('td');
                td.textContent = comment.comment;
                row.appendChild(td);

                var edit = document.createElement('button');
                edit.textContent = '수정';
                edit.addEventListener('click', function () { 
                    var newComment = prompt('바꿀 내용을 입력하세요');
                    if (!newComment) {
                        return alert('내용을 반드시 입력하셔야 합니다');
                    }
                    setComment(comment._id, newComment);
                });

                var remove = document.createElement('button');
                remove.textContent = '삭제';
                remove.addEventListener('click', function () { 
                    removeComment(comment._id);
                });

                td = document.createElement('td');
                td.appendChild(edit);
                row.appendChild(td);
                td = document.createElement('td');
                td.appendChild(remove);
                row.appendChild(td);
                tbody.appendChild(row);
            });
        } else {
            console.error(xhr.responseText);
        }
    };
    xhr.open('GET', '/comment/' + id);
    xhr.send();
}

// 댓글 수정 
function setComment(commentId, newComment) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 201) {
            console.log(xhr.responseText);
            getComment(id);
        } else {
            console.error(xhr.responseText);
        }
    };
    xhr.open('PATCH', '/comment/' + commentId);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ comment: newComment }));
}

// 댓글 삭제 
function removeComment(CommentId) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        } else {
            console.error(xhr.responseText);
        }
    };
    xhr.open('DELETE', '/comment/' + CommentId);
    xhr.send();
}

// 사용자 로딩
function getUser() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 200) {
            var users = JSON.parse(xhr.responseText);
            console.log(users);
            var tbody = document.querySelector('#user-list tbody');
            tbody.innerHTML = '';
            users.map(function (user) {
                var row = document.createElement('tr');
                row.addEventListener('click', function () {
                    getComment(user._id);
                });
                var td = document.createElement('td');
                td.textContent = user._id;
                row.appendChild(td);
                td = document.createElement('td');
                td.textContent = user.name;
                row.appendChild(td);
                td = document.createElement('td');
                td.textContent = user.age;
                row.appendChild(td);
                td = document.createElement('td');
                td.textContent = user.married ? '기혼' : '미혼';
                row.appendChild(td);
                tbody.appendChild(row);
            });
        } else {
            console.error(xhr.responseText);
        }
    };
    xhr.open('GET', '/users');
    xhr.send();
}

// 사용자 등록
function createUser(name, age, married) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        } else {
            console.error(xhr.responseText);
        }
    };
    xhr.open('POST', '/users');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ name: name, age: age, married:married }));
}

// 사용자 이름 눌렀을 때 댓글 조회 event
document.querySelectorAll('#user-list tr').forEach(function (event) {
    event.addEventListener('click', function () {
        var id = event.querySelector('td').textContent;
        getComment(id);
    });
});

// 사용자 등록 evnet
document.getElementById('user-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = event.target.username.value;
    var age = event.target.age.value;
    var married = event.target.married.checked;
    if (!name) {
        return alert('이름을 입력하세요');
    }
    if (!age) {
        return alert('나이를 입력하세요');
    }
    
    createUser(name, age, married)
    getUser();

    event.target.username.value = '';
    event.target.age.value = '';
    event.target.married.checked = false;
}, { passive: false });

// 댓글 등록 event
document.getElementById('comment-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var id = event.target.userid.value;
    document.querySelectorAll('tr').forEach((data) => {
        data.querySelectorAll('td').forEach( (check)  => {
            if(check.innerText === id) {
                id = data.querySelectorAll('td')[0].innerText;
            }
        }) 
    });
    
    var comment = event.target.comment.value;
    if (!id) {
        return alert('아이디를 입력하세요');
    }
    if (!comment) {
        return alert('댓글을 입력하세요');
    }
    createComment(id, comment);
    getComment(id);
    event.target.userid.value = '';
    event.target.comment.value = '';
}, { passive: false });