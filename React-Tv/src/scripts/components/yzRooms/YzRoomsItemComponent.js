
class YzRoomsItemComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		this.state = {
			rooms:null
		}
	}

	componentWillMount(){
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
					rooms:data.yzList
				})
			}
		})
	}
	putRoomItem(){
		let roomInfo = this.state.rooms
		let arr = []
		if(roomInfo){
			// console.log(roomInfo[i])
			for(var i = 0 ; i < roomInfo.length ; i++){
				arr.push(<RoomsIndexComponent info={roomInfo[i]}/>)
			}
		}
		return arr
	}

	render(){
		return (
			<div className="room-item">
				{this.putRoomItem()}
			</div>
		)
	}
}

class RoomsIndexComponent extends React.Component{
	constructor(props,context){
		super(props,context)
	}
	render(){
		console.log(this.props.info)
		return(
			<div className="row">
				<div className="c-room-item">
					<a href={"#/detail/"+this.props.info.room_id}>
						<div className="room-show">
							<img src={this.props.info.vertical_src}/>
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

export default YzRoomsItemComponent