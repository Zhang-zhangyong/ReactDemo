
class Searchbox extends React.Component {
constructor(props, context) {
		super(props, context)
		this.state = {
			classNamees: null,
			classes: null
		}
}

render(){
	var play1,play2,play3
	switch (this.props.k){
		case 1:play1="block",play2="none",play3="none" 
			break;
		case 2:play2="block",play1="none",play3="none" 
		break;
		case 3:play3="block",play2="none",play1="none" 
		break;
		default:play1="block",play2="none",play3="none" 
			break;
	}
	return(
		<div>
		<div className="layout-content content" id="scroller" style={{display:play1}}>
			<div className="content-block anchors">
			<h3 className="title"><d></d>
			主播
			<span onClick={this.props.p4.bind(this,3)} className="more">更多</span>
			</h3>
			<div className="contents">
				{this.props.p2()}
			</div>
			</div>
			<div className="content-block rooms">
			<h2 className="title">
			直播
			<span onClick={this.props.p4.bind(this,2)} className="more">更多</span>
			</h2>
			<div className="content1">				
				{this.props.p1()}				
			</div>
			</div>
			</div>
			
			<div className="layout-content content"  style={{display:play2}}>
				<div className="content-block rooms">
				<div className="content1">				
					{this.props.p1()}				
				</div>
				</div>
			</div>
			
			<div className="layout-content content"  style={{display:play3}}>
				<div className="content2">
					{this.props.p3()}		
				</div>
			</div>	

		</div>
		)
	}
}
export default Searchbox