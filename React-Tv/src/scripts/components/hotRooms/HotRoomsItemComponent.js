

class HotRoomsItemComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		this.state = {
			rooms:null,
			imgUrl:null
		}
	}
	putRoomItem(){
		let that = this
		let i = parseInt(Math.random()*4)
		let roomInfo = this.state.rooms
		let arr = []
		if(roomInfo){
			arr.push(<HotRoomsIndexComponent info={roomInfo[i]}/>)
		}
		return arr
	}
	render(){
		return (
			<div className="hot-room-item">
				{this.putRoomItem()}
			</div>
		)
	}
	componentDidMount(){
		let that = this
		$.ajax({
			url: 'http://stoledata.duapp.com/getTouJson.php',
			data: {
				src: 'https://m.douyu.com/index/getHomeData'
			},
			dataType:'jsonp',
			success:function(data){
				// console.log(data)
				that.setState({
					rooms:data.hotList[that.props.index].data
				})
			}
		})
	}
}

class HotRoomsIndexComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		this.state = {
			imgUrl : this.props.info.room_src
		}
	}
	handleImageErrored() {
    	this.setState({ imgUrl: "img/moe.png"});
  	}
	render(){
		return(
			<div className="row">
				<div className="c-room-item">
					<a href={"#/detail/"+this.props.info.room_id}>
						<div className="room-show">
							<img src={this.state.imgUrl?this.state.imgUrl:"img/moe.png"} onError={this.handleImageErrored.bind(this)}/>
							<div className="up-shadow"><span className="room-online">{this.props.info.online}</span></div>
							<span className="room-nickname">{this.props.info.nickname}</span>
						</div>
						<div className="room-des">{this.props.info.room_name}</div>
					</a>
				</div>
			</div>
		)
	}
}


export default HotRoomsItemComponent