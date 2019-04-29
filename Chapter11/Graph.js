function Vertex(label){
	this.label = label;
}

function Graph(v){
	this.vertices = v;
	this.edges = 0;
	this.adj = [];
	this.edgeTo = [];
	for(let i = 0; i < this.vertices; i++){
		this.adj[i] = [];
		// this.adj[i].push("");
	}
	this.addEdge = addEdge;
	this.showGraph = showGraph;
	
	this.dfs = dfs;
	this.marked = [];
	for(let i = 0; i < this.vertices; i++){
		this.marked[i] = false;
	}
	
	this.bfs = bfs;
}

function addEdge(v,w){
	this.adj[v].push(w);
	this.adj[w].push(v);
	this.edges++;
}

function showGraph(){
	for(let i = 0; i < this.vertices; i++){
		// console.log(i + " ->");
		for(let j = 0; j < this.vertices; j++){
			if(this.adj[i][j] != undefined){
				console.log(i + ' ->' + this.adj[i][j] + '  ');
			}
		}
	}
}

function dfs(v){
	this.marked[v] = true;
	if(this.adj[v] != undefined){
		console.log("Visited vertex: " + v);
	}
	
	for (var w of this.adj[v]){
		if( !this.marked[w]){
			this.dfs(w);
		}
	}
}

function bfs(s){
	var queue = [];
	this.marked[s] = true;
	queue.push(s);
	while(queue.length > 0){
		var v = queue.shift();
		if(typeof(v) != 'string'){
			console.log("Visited vertex: " + v);
		}
		for(var w of this.adj[v]){
			if(!this.marked[w]){
				this.edgeTo[w] = v;
				this.marked[w] = true;
				queue.push(w);
			}
		}
	}
}