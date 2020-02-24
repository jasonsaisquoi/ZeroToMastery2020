var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
//select all list items
let lis = document.querySelectorAll("li");
//select all delete buttons
let deletes = document.querySelectorAll(".delete");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));

	ul.appendChild(li);
	li.addEventListener("click", toggleClass)
	addDeleteButton(li);
	
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addDeleteButton(elem) {
	//add a delete button
	let deleteButton = document.createElement("button");
	deleteButton.setAttribute("class", "delete");
	deleteButton.textContent = "delete todo";
	elem.appendChild(deleteButton);
	deleteButton.addEventListener("click", removeParent);
}

function removeParent(event){
	let child = event.target;
	child.parentNode.remove(child);
}

function toggleClass(event) {
	console.log(event.target);
	if (event.target.nodeName === "LI") {
		event.target.classList.toggle("done");
	}
}
	
lis.forEach(listItem => {
	addDeleteButton(listItem);
	listItem.addEventListener("click", toggleClass);
})

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);