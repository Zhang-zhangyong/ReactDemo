

class BannerComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		this.state = {
			lives:null
		}
		this.mySwiper = null;
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
				that.setState({
					lives:data
				})
			}
		})
	}
	putLives(){
		let that = this;
		var arr = [];
		if(this.state.lives){
			let livesMessage = this.state.lives.banner
			for (var i = 0; i < livesMessage.length; i++) {
				arr.push(
					<div className="swiper-slide"><a href={"#/detail/"+livesMessage.id}><img src={livesMessage[i].pic_url}/></a></div>
				)
			}
		}
		return arr
	}

	render(){
		return (
			<div className="banner-box">
				<div className="swiper-container">
					<div className="swiper-wrapper">
						{this.putLives()}
					</div>
					<div className="swiper-pagination"></div>
				</div>
			</div>
		)
	}
	componentDidMount(){
		this.mySwiper = new Swiper('.swiper-container',{
			pagination:".swiper-pagination",
			autoplay:1500,
			autoplayDisableOnInteraction:false,
			paginationClickable:true
		})
	}
	componentDidUpdate(){
		this.mySwiper.update()
	}
}

export default BannerComponent