function Node(element){
	this.element = element;
	this.next = null;
}
function LList(){
	this.head = new Node('head');
	this.find = find;
	this.insert = insert;
	this.display = display;
	this.findPrevious = findPrevious;
	this.remove = remove;
	this.show = show;
	this.back = back;
	this.advance = advance;
}

function find(item){
	let currNode = this.head;
	while(currNode.element != item){
		currNode = currNode.next;
	}
	
	return currNode;
}

function insert(newElement,item){
	let currNode = this.find(item);
	let newNode = new Node(newElement);
	newNode.next = currNode.next;
	currNode.next = newNode;
}

function display(){
	let currNode = this.head;
	while(!(currNode.next == null)){
		console.log(currNode.next.element);
		currNode = currNode.next;
	}
}

function findPrevious(item){
	let currNode = this.head;
	while(!(currNode.next == null) && (currNode.next.element != item)){
		currNode = currNode.next;'
	}
	return currNode;
}

function remove(item){
	let prevNode = this.findPrevious(item);
	
	if(!(prevNode.next == null)){
		prevNode.next = prevNode.next.next;
	}
}

//
function show(){
	
}