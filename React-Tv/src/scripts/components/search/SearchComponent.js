class SearchComponent extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			classes : null,
			title:null
		}
	}
	
	componentWillMount(){
		let that = this
		$.ajax({
			url: 'http://stoledata.duapp.com/getTouJson.php',
			data: {
				src: 'https://m.douyu.com/search/getTodayTopData?limit=10&isAjax=1'
			},
			dataType:'jsonp',
			success:function(data){
				that.setState({
					classes : data
				})
			}
		})
	}
	
	putlive1(){
		// console.log(this.state.classes)
		let that=this;
		var arr1=[];
		if(that.state.classes){
		let classes=that.state.classes;
		for(var i=0;i<classes.length/2;i++){
			arr1.push(<span onClick={this.Change.bind(this,classes[i])}>{i+1} {classes[i]}</span>)
		}
		return arr1
		}
		
	}
	
	putlive2(){
		let that=this;
		var arr2=[];
		if(that.state.classes){
		let classes=that.state.classes;
		for(var i=classes.length/2;i<classes.length;i++){
			arr2.push(<span onClick={this.Change.bind(this,classes[i])}>{i+1} {classes[i]}</span>)
		}
		return arr2
		}
		
	}
	
	changeValue(type,e){
		var obj = {};
		obj[type]=e.target.value;
		this.setState(obj)
	}
	Change(id){
	location.hash="#/searchlist/"+id
	}
	
	
	Linkto(){
	var data=this.state.title
	var path = {
	  pathname:'/searchlist',
	  state:data
	}
	location.hash="#/searchlist/"+path.state
	}
	render() {		
		return(
			<div id="dox">
			<div id="js-app-container">
			<div data-reactroot="" className="search-app">
				<div className="layout-header">
					<input onChange={this.changeValue.bind(this,'title')} type="text" id="js-search-text" placeholder="搜索房间/主播/分类"/>
					<button onClick={this.Linkto.bind(this)} >搜索</button></div>
				<div className="layout-content">
					<h3 className="hot-title">最近热搜</h3>
					<div className="hot-content">
						<div className="left-block">
							{this.putlive1()}
						</div>
						<div className="right-block">
							{this.putlive2()}
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>

		)
	}
}

export default SearchComponent