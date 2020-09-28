class Board {
    constructor(boardNo, title, content, writer) {
        this._boardNo = boardNo;
        this._title = title;
        this._content = content;
        this._writer = writer;
    }
    get boardNo() {
        return this._boardNo;
    }
    set boardNo(boardNo) {
        this._boardNo = boardNo;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get content() {
        return this._content;
    }
    set content(content) {
        this._content = content;
    }
    get writer() {
        return this._writer;
    }
    set writer(writer) {
        this._writer = writer;
    }

} //end of clss   
let boardDB = [];
boardDB.push(new Board(1, '자바스크립트', '웹언어입니다', '최재영'));
boardDB.push(new Board(2, '자바', '컴파일러입니다', '김현동'));
boardDB.push(new Board(3, '오라클', '데이터베이스관리', '허성준'));

let titles = ['checkbox', 'boardNo', 'title', 'content', 'writer', 'button'];

let table, tr, td, text, checkbox, button;

function createTitle() {
    tr = document.createElement('tr');
    for (field of titles) {
        td = document.createElement('th');
        if (field === 'checkbox') { //=== 타입까지 체크 // 값만비교할떈 ==
            checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.onchange = function () {
                let chks = document.querySelectorAll('td input[type="checkbox"]');
                console.log(chks);
                for (let i = 0; i < chks.length; i++) {
                    chks[i].checked = this.checked; //true or false
                }
            }
            td.append(checkbox);

        } else if (field === 'button') {
            td.append('상세보기');

        } else {
            text = document.createTextNode(field);
            td.append(text);

        }
        tr.append(td);
    }
    return tr;
}

function getBoardList() {

    table = document.createElement("table");
    table.setAttribute('border', '1');
    table.setAttribute('id', 'tbl');
    table.append(createTitle()); //타이틀 row를 가져욤
    //데이터 영역
    boardDB.forEach(function (obj, idx) {
        tr = document.createElement('tr');
        tr.setAttribute('id', obj.boardNo)
        table.append(tr);
        for (let field of titles) {
            td = document.createElement('td');
            if (field === 'checkbox') {
                checkbox = document.createElement('input');
                checkbox.setAttribute('type', 'checkbox');
                checkbox.onchange = function () {
                    synchCheckbox();
                }
                td.append(checkbox);
            } else if (field === 'button') {
                button = document.createElement('button');
                button.innerHTML = '상세보기';
                td.append(button);
                button.onclick = showDetail;
            } else {
                text = document.createTextNode(obj[field]);
                td.append(text);

            }
            tr.append(td)
        }

    });
    document.getElementById('main').append(table);
}
function synchCheckbox(){//체크박스 전체선택및 각 택
    //checkall true 가정 데이터영역에잇는값중 하나라도 false면false
    let th_ckb = document.querySelectorAll('th input[type="checkbox"]');
    let td_ckb = document.querySelectorAll('td input[type="checkbox"]');
    th_ckb[0].checked=true;
    for(let i=0; i<td_ckb.length; i++){
        if(!td_ckb[i].checked){
            th_ckb[0].checked=false;
            break;
        }
    }
}
function insertDate() {
    let boardNo = document.getElementById('boardNo').value;
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let writer = document.getElementById('writer').value;
    boardNo = boardDB[boardDB.length - 1].boardNo +1;
    boardDB.push(new Board(boardNo, title, content, writer)); //db에입력

    let tbl = document.getElementById('tbl');
    tr = document.createElement('tr');
    tr.setAttribute('id', boardNo);
    //체크박스부분
    td = document.createElement('td');
    checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    td.append(checkbox);
    tr.append(td);
    //게시글 번호
    td = document.createElement('td');
    td.append(boardNo);
    tr.append(td);
    //제목
    td = document.createElement('td');
    td.append(title);
    tr.append(td);
    //내용
    td = document.createElement('td');
    td.append(content);
    tr.append(td);
    //작성자
    td = document.createElement('td');
    td.append(writer);
    tr.append(td);
    //상세보기 버튼
    td = document.createElement('td');
    button = document.createElement('button');
    button.innerHTML = '상세보기';
    button.onclick = showDetail;
    td.append(button);
    tr.append(td);

    tbl.append(tr)
}

function getBoard(id) {
    let oneBoard;
    for (let board of boardDB) {
        if (board.boardNo == id) {
            // oneBoard = new Board(board.boardNo.board.title,board.content,board.writer);
            oneBoard = board;
        }
    }
    return oneBoard;
}
//상세보기 기능
function showDetail() {
    let id = this.parentNode.parentNode.id;
    let board = getBoard(id);
    document.getElementById('boardNo').value = board.boardNo;
    document.getElementById('title').value = board.title;
    document.getElementById('content').value = board.content;
    document.getElementById('writer').value = board.writer;
}
//수정기능
function updateDate() { //element 정보를 가지고옴 입력화면에서 
    let boardNo = document.getElementById('boardNo').value;
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let writer = document.getElementById('writer').value;
    //배열에서 수정//boardNO= 키
    for (let i = 0; i < boardDB.length; i++) {
        if (boardDB[i].boardNo == boardNo) {
            //사용자가 입력한값으로 boardDB[i]에 입력
            boardDB[i] = new Board(boardNo, title, content, writer);
            break;
        }
    }
    console.log('break');
    console.log(boardDB);
    //tr속성중에 id값만 가지고 옴
    let trs = document.querySelectorAll('#tbl tr[id]');
    for (let i = 0; i < trs.length; i++) {
        console.log(trs[i].id, boardNo)
        if (trs[i].id == boardNo) {
            trs[i].children[2].innerHTML = title;
            trs[i].children[3].innerHTML = content;
            trs[i].children[4].innerHTML = writer;
            break;
        }
    }
}
//선택한 데이터 삭제
function deleteChecked() {
    //화면에서 삭제
    let checkedNo = [];
    chks = document.querySelectorAll('td input[type="checkbox"]');
    for(let i = 0; i<chks.length; i++){
        if(chks[i].checked == true){
        // 체크박스   부모      부모     아이디속성
            checkedNo.push(chks[i].parentNode.parentNode.id);
            chks[i].parentNode.parentNode.remove();
        }
    }
    //배열에서 삭제
    checkedNo.forEach(function(obj,idx){//삭제할 대상 배열 반복
       for(let i =0; i<boardDB.length; i++){
           if(boardDB[i].boardNo==obj){
               boardDB.splice(i, 1);
               break;
           }
       }
    });
    console.log(boardDB);
    document.querySelectorAll('th input[type="checkbox"]')[0].checked= false;
}