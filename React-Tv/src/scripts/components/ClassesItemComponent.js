

class ClassesItemComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		this.state = {
			classesItem : null,
			game_name : null
		}
		this.index = 0
		this.arr = []
	}

	componentWillMount(){
		var that = this
		var path = this.props.params.id
		$.ajax({
			url: 'http://stoledata.duapp.com/getTouJson.php',
			data: {
				src: 'http://open.douyucdn.cn/api/RoomApi/live/'+path+'?limit=8&offset='+this.index
			},
			dataType:'jsonp',
			success:function(data){
				that.setState({
					classesItem : data,
					game_name : data.data[0].game_name
				})
			}
		})
	}

	putItems(){
		if(this.state.classesItem){
			var item = this.state.classesItem.data
			for(var i = 0 ; i < item.length ; i++){
				this.arr.push(
					<div className="c-room-item">
						<a href={"#/detail/"+item[i].room_id}>
							<div className="room-show">
								<img src={item[i].room_src}/>
								<div className="up-shadow"><span className="room-online">{item[i].online}</span></div>
								<span className="room-nickname">{item[i].nickname}</span>
							</div>
							<div className="room-des">{item[i].room_name}</div>
						</a>
					</div>
				)	
			}
		}
		return this.arr
	}

	addMore(){
		this.index = this.index + 7
		var path = this.props.params.id
		var that = this
		$.ajax({
			url: 'http://stoledata.duapp.com/getTouJson.php',
			data: {
				src: 'http://open.douyucdn.cn/api/RoomApi/live/'+path+'?limit=8&offset='+this.index
			},
			dataType:'jsonp',
			success:function(data){
				console.log(data)
				that.setState({
					classesItem : data,
					game_name : data.data[0].game_name
				})
			}
		})
	}
	render(){
		// console.log(this.props.params.id)
		return (
			<div>
				<header className="bar bar-nav">
					<a href="#/main"><div className="pull-left icon-logo"></div></a>
					<div className="btn-box pull-right">
						<a className="classes" href="#/classes">直播分类</a>
					</div>
				</header>
				<div className="content m-row">
					<div className="item-title"><span><img src="https://shark.douyucdn.cn/app/douyu-mobile/m-douyu/res/icon_play.png?v=2.9" alt=""/>{this.state.game_name?this.state.game_name:"加载中..."}<i>{this.state.game_name?this.state.game_name:"加载中..."}</i></span></div>
					<div className="live-list row">
						{this.putItems()}
					</div>
					<div className="more" onClick={this.addMore.bind(this)}>加载更多</div>
					<footer className="footer">
						<p>开发人员：XXXXXX</p>
						<p>版权所有 © XXXXXXXXX</p>
					</footer>


				</div>
			</div>
		)
	}
}

export default ClassesItemComponent