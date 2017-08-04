
import HotRoomsComponent from './hotRooms/HotRoomsComponent'

import LiveRoomsComponent from './liveRooms/LiveRoomsComponent'

import YzRoomsComponent from './yzRooms/YzRoomsComponent'

class RoomsComponent extends React.Component{
	constructor(props,context){
		super(props,context)
	}
	render(){
		return (
			<div>
				<HotRoomsComponent/>
				<LiveRoomsComponent/>
				<YzRoomsComponent/>
			</div>
		)
	}
}
export default RoomsComponent