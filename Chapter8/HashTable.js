function HashTable(){
	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.showDistro = showDistro;
	this.put = put;
	//this.get = get;
}

function simpleHash(data){
	var total = 0;
	// console.log(data)
	for(let i = 0; i < data.length; i++){
		// console.log(data.length);
		total += data.charCodeAt(i);
	}
	
	return total % this.table.length;
}

function put(data){
	var pos = this.simpleHash(data);
	this.table[pos] = data;
}

function showDistro(){
	var n = 0;
	for(let i = 0; i < this.table.length; i++){
		if(this.table[i] != undefined){
			console.log(i + ":" + this.table[i]);
		}
	}
}