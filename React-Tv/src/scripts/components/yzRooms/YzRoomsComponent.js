
import YzRoomsItemComponent from './YzRoomsItemComponent'

class YzRoomsComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		this.state = {
			hotRooms:null,
			isRefresh:false
		}
	}

	putLives(){
		var arr = [];
		arr.push(<YzRoomsItemComponent/>)
		return arr
	}
	render(){
		return (
			<div className="content-padded grid-demo rooms yz-room">
				<div className="rooms-title">
					<span className="text">颜值</span>
				</div>
				<div className="yz-rooms rooms-list">{this.putLives()}</div>
			</div>
		)
	}
}

export default YzRoomsComponent