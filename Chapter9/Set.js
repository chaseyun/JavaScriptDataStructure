function Set(){
	this.dataStore = [];
	this.add = add;
	//this.size = size;
	this.remove = remove;
	this.contains = contains;
	this.union = union;
	this.intersect = intersect;
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


function contains(data){
	if(this.dataStore.indexOf(data) > -1){
		return true;
	}else{
		return false;
	}
}

//求并集
function union(set){
	var tempSet = new Set();
	for(let i = 0; i < this.dataStore.length; i++){
		tempSet.add(this.dataStore[i])
	}
	
	for(let i = 0; i < set.dataStore.length; i++){
		if(!tempSet.contains(set.dataStore[i])){
			tempSet.dataStore.push(set.dataStore[i]);
		}
	}
	
	return tempSet;
}

//求合集
function intersect(set){
	var tempSet = new Set();
	
	for(let i = 0; i < this.dataStore.length; i++){
		if(set.contains(this.dataStore[i])){
			tempSet.add(this.dataStore[i]);
		}
	}
	
	return tempSet;
}