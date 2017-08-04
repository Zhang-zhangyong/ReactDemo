import Searchbox from './Searchbox'

class SearchlistComponent extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			classNamees: null,
			classes: null,
			title: null,
			flag:false
		}
	}

	componentWillMount() {
		let that = this
//		console.log(that.state)
		if(that.state.title) {
			let k = that.state.title
		}
		let k = that.props.params.id
		$.ajax({
			url: 'http://stoledata.duapp.com/getTouJson.php',
			data: {
				src: 'https://m.douyu.com/search/getData?sk=' + k + '&type=1&sort=1&limit=20&offset=0'
			},
			dataType: 'jsonp',
			success: function(data) {
				// console.log(data)
				that.setState({
					classNamees: data
				})
			}
		})
	}
	putlive() {
		let that = this;
		var arr1 = [];
		if(that.state.classNamees) {
			let classes = that.state.classNamees;
			for(var i = 0; i < classes.anchor.length; i++) {
				arr1.push(<a href={"/#detail/"+classes.anchor[i].room_id}>
					<div className="anchor-item">
						<img src={classes.anchor[i].avatar} alt=""/>
						<p className="nickname">{classes.anchor[i].noRed}</p>
						<p className="follow">{classes.anchor[i].follow}人关注</p>
					</div>
					</a>)
			}
			return arr1
		}

	}
	putlive1() {
		let that = this;
		var arr1 = [];
		if(that.state.classNamees) {
			let classes = that.state.classNamees;
			for(var i = 0; i < classes.live.length; i++) {
				arr1.push(
					<div className="c-room-item">
			<a href={"/#detail/"+classes.live[i].room_id}>
				<div className="room-show islive"><img className="room-pic" src={classes.live[i].roomSrc}/>
					<div className="up-shadow"></div>
					<span className="room-online">{classes.live[i].popularity}</span>
					<div className="bottom-shadow"></div>
					<span className="room-nickname">{classes.live[i].nickname}</span>
					</div>
				<div className="room-des">{classes.live[i].noRed}</div>
			</a>
			</div>
				)
			}
			return arr1
		}

	}
	putlive3() {
		let that = this;
		var arr1 = [];
//		console.log(that.state.classNamees)
		if(that.state.classNamees) {
			let classes = that.state.classNamees;
			for(var i = 0; i < classes.anchor.length; i++) {
				arr1.push(
					<a href={"/#detail/"+classes.anchor[i].room_id}>
						<div className="anchor-item">
							<img src={classes.anchor[i].avatar} alt=""/>
							<div className="down-line">
								<p className="nickname">
								<span className="name">{classes.anchor[i].noRed}</span>
								<span className="belive"></span>
								</p>
								<p className="follow">
								<span>
								观看人数:{classes.anchor[i].popularity}
								</span>关注:{classes.anchor[i].follow}<span>
								</span>
								</p>
							</div>
						</div>
					</a>
				)
			}
			return arr1
		}

	}
	changeValue(type, e) {
		var obj = {};
		obj[type] = e.target.value;
		this.setState(obj)
	}

	Linkto() {
		this.setState(this.state)
		var that = this
		let k = that.state.title
		$.ajax({
			url: 'http://stoledata.duapp.com/getTouJson.php',
			data: {
				src: 'https://m.douyu.com/search/getData?sk=' + k + '&type=1&sort=1&limit=20&offset=0'
			},
			dataType: 'jsonp',
			success: function(data) {
				that.setState({
					classNamees: data
				})
			}
		})
		location.hash = "#/searchlist/" + k
	}
	Css(num,e){
	
	if(num==3){
	$("#zb").parent().children().removeClass("active")
	$("#zb").addClass("active")
	}
	if(num==2){
	$("#live").parent().children().removeClass("active")
	$("#live").addClass("active")
	}
	$(e.target).parent().children().removeClass("active")
	$(e.target).addClass("active")

 	 this.setState({
			flag:num
		})
}
	render() {
		return(
			<div id="box">
			
			<div className="layout-header">
			<input onChange={this.changeValue.bind(this,'title')} type="text" id="js-search-text" placeholder=""/>
			<button onClick={this.Linkto.bind(this)}>搜索</button>
			</div>


			<div className="layout-control">
			<div id="all"  onClick={this.Css.bind(this,1)} KK={this.Css.bind(this)} className="item active">全部</div>
			<div id="live" onClick={this.Css.bind(this,2)} className="item">直播</div>
			<div id="zb" onClick={this.Css.bind(this,3)} className="item">主播</div>
			
			</div>
			
			<Searchbox p4={this.Css.bind(this)} k={this.state.flag} p3={this.putlive3.bind(this)} p1={this.putlive1.bind(this)} p2={this.putlive.bind(this)}/>
			
			</div>
		)
	}
}

export default SearchlistComponent