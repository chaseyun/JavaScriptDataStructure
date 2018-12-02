function Queue(){
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toShow = toShow;
	this.empty = empty;
	this.count = count;
}

//向队尾添加一个元素
function enqueue(element){
	this.dataStore.push(element)
}

//删除队首的元素
function dequeue(){
	return this.dataStore.shift();
}

//读取队首的元素
function front(){
	return this.dataStore[0];
}

//读取队尾的元素
function back(){
	return this.dataStore[this.dataStore.length -1];
}

//显示队列内的所有元素
function toShow(){
	let retStr = '';
	for(let i=0; i<this.dataStore.length; i++){
		retStr += this.dataStore[i] + '\n';
	}
	
	return retStr;
}

//判断队列是否为空
function empty(){
	if(this.dataStore.length === 0){
		return true;
	}else{
		return false
	}
}

//显示元素的个数
function count(){
	return this.dataStore.length;
}