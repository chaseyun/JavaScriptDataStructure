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
	//深度优先遍历
	this.dfs = dfs;
	this.marked = [];
	for(let i = 0; i < this.vertices; i++){
		this.marked[i] = false;
	}
	//广度优先遍历
	this.bfs = bfs;
	//查找最短路径
	this.pathTo = pathTo;
	this.hasPathTo = hasPathTo;
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

//深度优先遍历
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

//广度优先遍历
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

//查找最短路径
function pathTo(v){
	var source = 0;
	if(!this.hasPathTo(v)){
		return undefined;
	}
	
	var path = [];
	for(var i = v; i != source; i = this.edgeTo[i]){
		path.push(i);
	}
	
	path.push(source);
	
	return path;
}

function hasPathTo(v){
	return this.marked[v];
}