function CArray(numElements){
	this.dataStore = [];
	this.pos = 0;
	this.numElements = numElements;
	this.insert = insert;
	this.show = show;
	this.clear = claer;
	this.setData = setData;
	this.swap = swap;
	
	for(var i = 0; i < numElements; i++){
		this.dataStore[i] = i;
	}
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
		restr += this.dataStore[i] + "";
		if(i > 0 && i % 10 == 0){
			restr += "\n";
		}
	}
	
	return restr;
}

function swap(arr,index,index2){
	var temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}