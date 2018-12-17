function Node(element){
	this.element = element;
	this.next = null;
}

function LLList(){
	this.head = new Node('head');
	this.head.next = this.head;
	this.find = find;
	this.insert = insert;
	this.display = display;
	this.findPrevious = findPrevious;
	this.remove = remove;
}

function find(item){
	let currNode = this.head;
	while(currNode.element != item){
		currNode = currNode.next;
	}
	
	return currNode;
}

function insert(newElemen,item){
	let newNode = new Node(newElemen);
	let currNode = this.find(item);
	newNode.next = currNode.next;
	currNode.next = newNode;	
}

function display(){
	let currNode = this.head;
	while(!(currNode.next.element == 'head')){
		console.log(currNode.next.element);
		currNode = currNode.next;
	}
}

function findPrevious(item){
	let currNode = this.head;
	while(currNode.next.element != item && !(currNode.next.element == 'head')){
		currNode = currNode.next;
	}
	//console.log(currNode)
	return currNode;
}

function remove(item){
	let prevNode = this.findPrevious(item);
	prevNode.next = prevNode.next.next;
}