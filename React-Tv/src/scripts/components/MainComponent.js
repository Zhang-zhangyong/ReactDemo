
import HeaderComponent from './HeaderComponent'
import ClassesComponent from './ClassesComponent'
import BannerComponent from './BannerComponent'
import RoomsComponent from './RoomsComponent'
import FooterComponent from './FooterComponent'

class MainComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		this.myScroll = null
	}
	render(){
		setTimeout(function(){
			$(".mask").fadeOut();
		},1500)
		return (
			<div id="wrapper">
				<div className="mask">
					<img src="img/loading.gif"/>
					<p style={{"fontSize":"0.8rem","marginLeft":"0.5rem"}}>客官请稍等...</p>
				</div>
				<HeaderComponent/>
				<section className="content" id="scroller">
					<BannerComponent/>
					<RoomsComponent/>
					<FooterComponent/>
				</section>
			</div>
		)
	}
	// refresh(){
	// 	this.myScroll.refresh()
	// }
	// componentDidMount(){
	// 	this.myScroll = new iScroll("wrapper")
	// }
	// componentDidUpdate(){
    //     setTimeout(function(){
    //         this.props.refresh()
    //     }.bind(this),0)
	// }
}


export default MainComponent