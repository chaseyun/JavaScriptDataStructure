function Dictionary(){
	this.add = add;
	this.dataStore = new Array();
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
	this.count = count;
	this.clear = clear;
}

function add(key,value){
	this.dataStore[key] = value;
}

function find(key){
	return this.dataStore[key];
}

function remove(key){
	delete this.dataStore[key];
}

function showAll(){
	let arr = Object.keys(this.dataStore);
	for(let key in arr){
		console.log(arr[key] + "->" + this.dataStore[arr[key]]);
		//console.log(arr[key]);
	}
}

function count(){
	let n = 0;
	for(let key in Object.keys(this.dataStore)){
		n++;
	}
	
	return n;
}

function clear(){
	let arr = Object.keys(this.dataStore);
	for(let key in arr){
		delete this.dataStore[arr[key]];
	}
}