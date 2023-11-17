let body = document.querySelector("body");
let container = document.createElement("div");
let boards = document.createElement("div");
let input = document.createElement("button");

boards.className = "boards";
container.className = "container";

body.appendChild(container);
container.appendChild(boards);
container.appendChild(input);

let boardNames = ["Todo", "Inprogress", "Stuck", "Done"];
let priorityOptionNames = ["low", "medium", "high"];
let editbutton = false;
let done = false;
let draggedItem = null;

let todo = [
  {
    title: "Car wash",
    description: "wash the car on the weekend",
    status: "Todo",
    priority: "low",
    id: "id-t333",
  },
  {
    title: "Read a book",
    description: "Read a javascript book",
    status: "Stuck",
    priority: "medium",
    id: "id-r222",
  },
];

function createBoards() {
  for (let i = 0; i < boardNames.length; i++) {
    createBoard(boardNames[i]);
  }
  DragAndDrop();
  countCard();
}

function createBoard(name) {
  let boardCards = document.createElement("div");
  let board = document.createElement("div");
  let boardHeader = document.createElement("div");
  let boardHeaderTitle = document.createElement("div");
  let boardCount = document.createElement("span");
  let addbtn = document.createElement("div");
  let addBtnplus = document.createElement("p");
  let addbtnText = document.createElement("div");

  board.className = "board";
  board.classList.add(name);
  boardHeader.className = "boardHeader";
  boardCards.className = "boardCards";
  addbtn.className = "addbtn";
  boardHeaderTitle.className = "boardHeaderTitle";
  boardCount.className = "boardCount";

  boards.appendChild(board);
  board.appendChild(boardHeader);
  board.appendChild(boardCards);
  board.appendChild(addbtn);
  boardHeader.appendChild(boardHeaderTitle);
  boardHeader.appendChild(boardCount);
  addbtn.appendChild(addBtnplus);
  addbtn.appendChild(addbtnText);
  addBtnplus.innerText = "+";
  addbtnText.innerText = "Add card";
  addbtn.onclick = backdrop;

  boardHeaderTitle.innerText = name;
  boardCount.innerText = 0;

  for (let i = 0; i < todo.length; i++) {
    let todoCard = createCard(todo[i]);
    if (todo[i].status == name) {
      boardCards.appendChild(todoCard);
    }
  }
}

function createCard(data) {
  // countCard();
  const { title, description, status, priority, id } = data;
  let boardCard = document.createElement("div");
  let done = document.createElement("div");
  let details = document.createElement("div");
  let detailsH4 = document.createElement("h4");
  let detailsP = document.createElement("P");
  let detailsPriority = document.createElement("div");
  let actions = document.createElement("div");
  let actionsDelete = document.createElement("div");
  let actionsEdit = document.createElement("div");

  boardCard.className = "boardCard";
  done.className = "done";
  details.className = "details";
  detailsPriority.className = "detailsPriority";
  actions.className = "actions";
  actionsDelete.className = actionsDelete;
  // actionsDelete.className = actionsButtons;
  actionsEdit.className = "actionsEdit";
  actionsEdit.classList = "actionsButtons";

  boardCard.appendChild(done);
  boardCard.appendChild(details);
  boardCard.appendChild(actions);
  details.appendChild(detailsH4);
  details.appendChild(detailsP);
  details.appendChild(detailsPriority);
  actions.appendChild(actionsDelete);
  actions.appendChild(actionsEdit);
  done.innerText = ">";

  actionsDelete.innerText = "del";
  actionsEdit.innerText = "E";
  detailsH4.innerText = title;
  detailsP.innerText = description;
  detailsPriority.innerText = priority;

  actionsDelete.onclick = function () {
    boardCard.remove();
    deleteCard(id);
    countCard();
  };

  actionsEdit.onclick = function () {
    editCard(id);
  };

  done.onclick = function () {
    //console.log(id)
    donecard(id);
  };

  let a = "card-" + (Math.random() * 1000).toFixed(0);
  boardCard.draggable = true;
  boardCard.setAttribute("data-id", a);
  boardCard.setAttribute("id", id);

  boardCard.addEventListener("dragstart", (event) => {
    console.log("eee");
    event.target.value;
    draggedItem = event.target;
    event.dataTransfer.setData("text", event.target.getAttribute("data-id"));
  });
  return boardCard;
}
// function CreateStatus() {
//   let status = document.createElement("div");
//   let statuslabel = document.createElement("label");
//   let statusselect = document.createElement("select");
//   statuslabel.innerText = "Status";
//   for (let i = 0; i < statusOptionNames.length; i++) {
//     let statusoption = document.createElement("option");
//     statusoption.setAttribute("value", statusOptionNames[i]);
//     statusoption.innerText = statusOptionNames[i];
//     statusselect.appendChild(statusoption);
//   }
//   status.appendChild(statuslabel);
//   status.appendChild(statusselect);
//   return status;
// }

function CreatePriority() {
  let priority = document.createElement("div");
  let prioritylabel = document.createElement("label");
  let priorityselect = document.createElement("select");
  prioritylabel.innerText = "Priority";
  for (let i = 0; i < priorityOptionNames.length; i++) {
    let priorityoption = document.createElement("option");
    priorityoption.setAttribute("value", priorityOptionNames[i]);
    priorityoption.innerText = priorityOptionNames[i];
    priorityselect.appendChild(priorityoption);
  }
  priority.appendChild(prioritylabel);
  priority.appendChild(priorityselect);
  return priority;
}

function backdrop() {
  // let status = CreateStatus();
  let priority = CreatePriority();
  let backdrop = document.createElement("div");
  let modaldiv = document.createElement("div");
  let modal = document.createElement("div");
  let fom = document.createElement("form");
  let modaltitle = document.createElement("h1");
  let title = document.createElement("div");
  let label = document.createElement("label");
  let input = document.createElement("input");
  let desc = document.createElement("div");
  let desclabel = document.createElement("label");
  let desctextarea = document.createElement("textarea");
  let addtodobutton = document.createElement("button");

  let status = document.createElement("div");
  let statuslabel = document.createElement("label");
  let statusselect = document.createElement("select");
  statuslabel.innerText = "Status";
  for (let i = 0; i < boardNames.length; i++) {
    let statusoption = document.createElement("option");
    statusoption.setAttribute("value", boardNames[i]);
    statusoption.innerText = boardNames[i];
    statusselect.appendChild(statusoption);
  }
  status.appendChild(statuslabel);
  status.appendChild(statusselect);

  backdrop.className = "backdrop";
  modaldiv.className = "modaldiv";
  modal.className = "modal";
  fom.className = "form";
  addtodobutton.className = "todobutton";

  container.appendChild(backdrop);
  container.appendChild(modaldiv);
  modaldiv.appendChild(modal);
  modal.appendChild(fom);
  fom.appendChild(modaltitle);
  fom.appendChild(title);
  fom.appendChild(desc);
  fom.appendChild(status);
  fom.appendChild(priority);
  fom.appendChild(addtodobutton);

  title.appendChild(label);
  title.appendChild(input);

  desc.appendChild(desclabel);
  desc.appendChild(desctextarea);

  backdrop.style.display = "block";

  modaltitle.innerText = "Add Task";
  label.innerText = "Title";
  desclabel.innerText = "description";
  addtodobutton.innerText = "Add Task";

  addtodobutton.onclick = function (event) {
    if (editbutton) {
      const selected = document.querySelectorAll("select");
      editCard(
        input.value,
        desctextarea.value,
        statusselect.value,
        selected[1].value
      );
      console.log(editbutton);
      event.preventDefault();
    } else {
      console.log(editbutton);
      const selected = document.querySelectorAll("select");
      event.preventDefault();
      AddCard(
        input.value,
        desctextarea.value,
        statusselect.value,
        selected[1].value
      );
    }
    backdrop.style.display = "none";
    modaldiv.style.display = "none";
  };
}

function AddCard(title, desc, status, priority) {
  editbutton = false;
  let cardid = "id-" + (Math.random() * 1000).toFixed(0);
  let newTodo = {
    title: title,
    description: desc,
    status: status,
    priority: priority,
    id: cardid,
  };
  todo.push(newTodo);
  console.log("Status:" + status);
  let boardCount = document.querySelectorAll(".boardCount");
  console.log(boardCount);
  let boards = document.getElementsByClassName("boardCards");
  if (newTodo.status == "Todo") {
    let todoCard = createCard(newTodo);
    boards[0].appendChild(todoCard);
    boardCount[0].innerText = Number(boardCount[0].innerText) + 1;
  } else if (newTodo.status == "Inprogress") {
    let todoCard = createCard(newTodo);
    boards[1].appendChild(todoCard);
    boardCount[1].innerText = Number(boardCount[1].innerText) + 1;
  } else if (newTodo.status == "Stuck") {
    let todoCard = createCard(newTodo);
    boards[2].appendChild(todoCard);
    boardCount[2].innerText = Number(boardCount[2].innerText) + 1;
  } else if (newTodo.status == "Done") {
    let todoCard = createCard(newTodo);
    boards[3].appendChild(todoCard);
    boardCount[3].innerText = Number(boardCount[3].innerText) + 1;
  }

  for (let i = 0; i < todo.length; i++) {
    console.log(todo[i]);
  }
}
function deleteCard(deleteId) {
  todo = todo.filter((element) => {
    return element.id !== deleteId;
  });
}

function editCard(editId) {
  editbutton = true;
  console.log(todo);
  backdrop();
  let title = document.getElementsByTagName("input");
  let desc = document.querySelectorAll("textarea");
  let status = document.querySelectorAll("select");

  for (let i = 0; i < todo.length; i++) {
    if (todo[i].id === editId) {
      title[0].value = todo[i].title;
      desc[0].value = todo[i].description;
      status[0].value = todo[i].status;
      // todo[i].title = title[0].value;
    }
  }
  console.log("edited after" + todo);
  console.log("ttttttttt " + title[0].value);
  return title[0].value;
}
console.log("todo Before", todo);

const donecard = (id) => {
  let boards = document.querySelectorAll(".board");
  console.log(boards);
  // console.log("Done called");
  todo.map((item) => {
    if (item.id === id) {
      console.log("passed id: ", id);
      item.status = "Done";
       let chosenCard = document.querySelector(`#${id}`);
       console.log(chosenCard);
      boards[3].appendChild(chosenCard);
    }
  });

  console.log("Todo after", todo);
};

// function test (input , desctextarea) {
// const selected = document.querySelectorAll("select");
//   console.log("status is " + selected[0].value);
//   console.log(selected[0].value, selected[1].value)
//   AddCard(
//     input.value,
//     desctextarea.value,
//     selected[0].value,
//     selected[1].value
//   );

// };
function DragAndDrop() {
  let boards = document.querySelectorAll(".board");
  boards.forEach((board) => {
    board.addEventListener("dragover", (event) => {
      console.log("Dragged");
      event.preventDefault();
    });
    board.addEventListener("dragenter", (event) => {
      event.preventDefault();
      if (draggedItem) {
        const draggingBoard = draggedItem.parentNode;
        if (draggingBoard !== event.currentTarget) {
          event.currentTarget.querySelector(".boardCards").appendChild(draggedItem);
         let id = draggedItem.getAttribute("id");
         console.log("selected", id);
          for (let i = 0; i < todo.length; i++) {
            if(todo[i] === id){
             
            }
            
          }
          // event.currentTarget.appendChild(draggedItem);
        }
      }
    });
    board.addEventListener("dragleave", () => {});
    board.addEventListener("drop", (event) => {
      event.preventDefault();
    });
  });
  // countCard();
}
function countCard() {
  let count = document.getElementsByTagName("span");
  console.log(count);
  let counts = {
    countTodo: 0,
    countInprogress: 0,
    countStuck: 0,
    countDone: 0,
  };
  for (let j = 0; j < todo.length; j++) {
    if (todo[j].status === "Todo") {
      counts.countTodo += 1;
      // count[0].innerText = Number(count[0].innerText) + 1;
    } else if (todo[j].status === "Inprogress") {
      counts.countInprogress += 1;
      // console.log("inprogress", counts.countInprogress);
      // count[1].innerText = Number(count[1].innerText) + 1;
    } else if (todo[j].status === "Stuck") {
      counts.countStuck += 1;
      // count[2].innerText = Number(count[2].innerText) + 1;
    } else if (todo[j].status === "Todo") {
      counts.countDone += 1;
      // count[3].innerText = Number(count[3].innerText) + 1;
    }
    // console.log("www" , todo[j]);
  }
  console.log(count);
  count[0].innerText = counts.countTodo;
  count[1].innerText = counts.countInprogress;
  count[2].innerText = counts.countStuck;
  count[3].innerText = counts.countDone;
}
createBoards();
