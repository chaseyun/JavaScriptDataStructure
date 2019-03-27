function Set(){
	this.dataStore = [];
	this.add = add;
	//this.size = size;
	this.remove = remove;
	//this.union = union;
	//this.intersect = intersect;
	//this.subset = subset;
	//this.difference = difference;
	this.show = show;
}

//集合中添加元素
function add(data){
	if(this.dataStore.indexOf(data) < 0){
		this.dataStore.push(data);
		return true;
	}else{
		return false;
	}
}

//集合中删除元素
function remove(data){
	var pos = this.dataStore.indexOf(data);
	if(pos > -1){
		this.dataStore.splice(pos,1);
		return true;
	}else{
		return false;
	}
	
}

//显示集合中的元素
function show(){
	return this.dataStore;
}