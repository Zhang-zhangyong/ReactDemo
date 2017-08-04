
import LiveRoomsItemComponent from './LiveRoomsItemComponent'

class LiveRoomsComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		this.state = {
			hotRooms:null,
			isRefresh:false
		}
	}

	putLives(){
		var arr = [];
		arr.push(<LiveRoomsItemComponent/>)
		return arr
	}
	render(){
		return (
			<div className="content-padded grid-demo rooms live-room">
				<div className="rooms-title">
					<span className="text">正在直播</span>
				</div>
				<div className="live-rooms rooms-list">{this.putLives()}</div>
			</div>
		)
	}
}

export default LiveRoomsComponent