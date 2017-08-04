
import HotRoomsItemComponent from './HotRoomsItemComponent'

class HotRoomsComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		this.state = {
			hotRooms:null,
			isRefresh:false
		}
	}

	putLives(){
		var arr = [];
		for(var i=0; i<4;i++){
			arr.push(<HotRoomsItemComponent ref="ID" index={i}/>)
		}
		return arr
	}
	toRefresh(){
		this.setState({
			isRefresh:!this.state.isRefresh
		})
	}
	render(){
		// console.log(this)
		return (
			<div className="content-padded grid-demo hot-room rooms">
				<div className="room-title">
					<span className="text">最热</span>
					<span onClick={this.toRefresh.bind(this)} className="change">换一换</span>
				</div>
				<div className="hot-rooms">{this.putLives()}</div>
			</div>
		)
	}
}

export default HotRoomsComponent