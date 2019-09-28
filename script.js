var checkIcon = document.getElementsByClassName("circ");
var container = document.getElementById("container");

var check = "far fa-check-circle circ right-side";
var uncheck = "far fa-circle circ right-side";

var clicks = 0;

var trueOrFalseChecker = [];

var lists = {};

document.getElementById("button").addEventListener("click", sideBarInOut);

function sideBarInOut() {
    clicks++;
    if(clicks % 2 == 1) {
        document.getElementById("side-bar").style.display = "flex";
        document.getElementById("button").innerHTML = "Hide Lists";
    }
    if(clicks % 2 == 0) {
        document.getElementById("side-bar").style.display = "none";
        document.getElementById("button").innerHTML = "View Lists";
    }
}

document.getElementById("createList").addEventListener("click", newList);

var id = 0;

function newList() {
    id++;
    newid = String("list"+id);
    var listInput = document.getElementById("nextList");
    var listSelector = document.getElementById("listSelector");
    var nextList = `<li id="${newid}" class="newListItem">
                        <div class="new">${listInput.value}</div>
                        <i class="fas fa-trash"></i>
                    </li>`;
    trueOrFalseChecker.push({id: newid, name: listInput.value, selected: false });

    var newnewid = String(id+"list")

    var classSelector = `
        <div class="list-one">
            
            <ul id="${newnewid}">
                
            </ul>
        </div>
    `;
    container.insertAdjacentHTML("afterbegin", classSelector);
    listSelector.insertAdjacentHTML("beforeend", nextList);

    for(var a = 0; a < document.getElementsByClassName("newListItem").length; a++){
        document.getElementsByClassName("newListItem")[a].addEventListener("click", test)
        
        function test(){
            var b = this.id.charAt(4);

            obj.id = b;
            document.getElementById("header").innerHTML = this.innerHTML;

            console.log(b + "list");
            for(var g = 0; g < document.getElementsByClassName("list-one").length; g++){
                document.getElementsByClassName("list-one")[g].style.display='none';
            }
            document.getElementById(b + "list").parentNode.style.display = "block";
            
        }
    }
    listInput.value = "";

    var getRidOf = document.getElementsByClassName("fa-trash");
    for(var j = 0; j < getRidOf.length; j++) {
    getRidOf[j].addEventListener("click", function(event){
        var n = event.target;
        var ran = n.parentNode.id.charAt(4);
        document.getElementById(ran + "list").parentNode.remove();
        n.parentNode.remove();

        // console.log(listSelector.childNodes.length);
    });
    }
}

var obj = {
    
}

function addTask(content, iClass) {
    // console.log(obj.id);

    var list = document.getElementById(obj.id + "list");

    lists.innerlist = list;

    var newTask = `
        <li class="item">
            <i class="far fa-trash-alt"></i>
            <i class="fas fa-pencil-alt"></i>
            <p class="middle-text">${content}</p>
            <i class="${iClass}"></i>
        </li>
    `;
    list.insertAdjacentHTML("beforeend", newTask);

    var trash = document.getElementsByClassName("fa-trash-alt");
    for(var i = 0; i < trash.length; i++) {
        trash[i].addEventListener("click", function(event){
            var x = event.target;
            x.parentNode.remove();
        });
    }

    var pencil = document.getElementsByClassName("fa-pencil-alt");
    for(var u = 0; u < pencil.length; u++) {
        pencil[u].addEventListener("click", function(event){
            var g = event.target;
            console.log(g.nextSibling.nextSibling.innerHTML);
            document.getElementById("editTasks").style.display = "flex";
            document.getElementById('editTaskBtn').addEventListener("click", function(){
                var editInput = document.getElementById("editInput");
                g.nextSibling.nextSibling.innerHTML = editInput.value;
                document.getElementById("editTasks").style.display = "none";
                g = "";
            })
        });
    }

    for(j = 0; j < checkIcon.length; j++) {
        checkIcon[j].addEventListener("click", function(event) {
            this.style.color = "#0aa900";
            var y = event.target;
            y.style.color = "#0aa900"
            isComplete = true;
            this.className = check;
        })
    }
}

document.addEventListener("keyup", function(even) {
    if(event.keyCode == 13) {
        insertContent();
    }
});

document.getElementById("btn").addEventListener("click", insertContent);

function insertContent(){
    const input = document.getElementById("input");
    if(input.value==""){
        alert("Must enter an item");
    } else{
        addTask(input.value, uncheck);
        input.value = "";
    }
}