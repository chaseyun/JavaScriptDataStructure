function Node(data,left,right){
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}

function show(){
	return this.data;
}

function BST(){
	this.root = root;
	this.insert = insert;
	this.inorder = inprder;
}

function insert(data){
	var n = new Node(data,null,null);
	
	if(this.root == null){
		this.root = n;
	}else{
		var current = this.root;
		var parent;
		while(true){
			
		}
	}
	
}