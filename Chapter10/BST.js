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
	this.root = null;
	this.insert = insert;
	this.inorder = inorder;
	this.preorder = preorder;
	this.postorder = postorder;
}

function insert(data){
	var n = new Node(data,null,null);
	
	if(this.root == null){
		this.root = n;
	}else{
		var current = this.root;
		var parent;
		while(true){
			parent = current;
			if(data < parent.data){
				current = current.left;
				if(current == null){
					parent.left = n;
					break;
				}
			}else{
				current = current.right;
				if(current == null){
					parent.right = n;
					break;
				}
			}
		}
	}
}

function inorder(node){
	if(!(node == null)){
		inorder(node.left);
		console.log(node.show() + "");
		inorder(node.right);
	}
}

function preorder(node){
	if(!(node == null)){
		console.log(node.show() + "");
		preorder(node.left);
		preorder(node.right);
	}
}

function postorder(node){
	if(!(node == null)){
		postorder(node.left);
		postorder(node.right);
		console.log(node.show() + "");
	}
}