function CArray(numElements){
	this.dataStore = [];
	this.pos = 0;
	this.numElements = numElements;
	this.insert = insert;
	this.show = show;
	this.clear = clear;
	this.setData = setData;
	this.swap = swap;
	
	for(var i = 0; i < numElements; i++){
		this.dataStore[i] = i;
	}
	
	//冒泡排序
	this.bubbleSort = bubbleSort;
}

function setData(){
	for(var i = 0; i < this.numElements; i++){
		this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
	}
}

function clear(){
	for(var i = 0; i < this.dataStore.length; i++){
		this.dataStore[i] = 0;
	}
}

function insert(element){
	this.dataStore[this.pos++] = element;
}

function show(){
	var restr = "";
	for(var i = 0; i < this.dataStore.length; i++){
		restr += this.dataStore[i] + " ";
		if(i > 0 && i % 10 == 0){
			restr += "\n";
		}
	}
	
	return restr;
}

function swap(arr,index1,index2){
	var temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

//冒泡排序
function bubbleSort(){
	var numElements = this.dataStore.length;
	var temp;
	for(var i = numElements; i >= 2; i--){
		for(j = 0; j <= i - 1; j++){
			if(this.dataStore[j] > this.dataStore[j+1]){
				swap(this.dataStore,j,j+1);
			}
		}
		console.log(this.show());
	}
}