let body = document.querySelector('body');
let container = document.createElement('div');
let boards = document.createElement('div');


boards.className = "boards";
container.className = "container";


body.appendChild(container);
container.appendChild(boards);

let boardNames = ["To do", "In progress", "Stuck", "Done"];
let todo = [{
    title: "test",

},{

},]
function createBoards(){
    for (let i = 0; i < boardNames.length; i++) {
         createBoard(boardNames[i]); 
    }
}

function createBoard(name) {
   let board = document.createElement('div');
   let boardHeader = document.createElement('div');
   let boardCard = document.createElement('div');
   let addbtn = document.createElement('div');
   let boardHeaderTitle = document.createElement('div');
    let boardCount = document.createElement('span');

    board.className = "board";
    boardHeader.className = "boardHeader";
    boardCard.className = "boardCard";
    addbtn.className = "addbtn";
    boardHeaderTitle.className = "boardHeaderTitle";
    boardCount.className = "boardCount";

    boards.appendChild(board);  
    board.appendChild(boardHeader);
    board.appendChild(boardCard);
    board.appendChild(addbtn);
    boardHeader.appendChild(boardHeaderTitle);
    boardHeader.appendChild(boardCount);
  
    boardHeaderTitle.innerText = name;
}


createBoards();

