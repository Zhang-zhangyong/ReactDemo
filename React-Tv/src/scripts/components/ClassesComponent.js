

class ClassesComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		this.state = {
			navinfo : null,
			allclasses : null,
			typeclasses : null

		}
		this.mySwiper = null;
	}
	componentWillMount(){
		this.getClasses()
	}
	componentWillReceiveProps(props){
		console.log(props)
	}
	getClasses(){
		let that = this
		$.ajax({
			url: 'http://stoledata.duapp.com/getTouJson.php',
			data: {
				src: 'https://m.douyu.com/category?type='
			},
			dataType:'jsonp',
			success:function(data){
				console.log(data)
				that.setState({
					allclasses : data.cate2Info,
					navinfo : data.cate1Info,
					typeclasses : data.cate2Info
				})
			}
		})
	}

	getClassInfo(id){
		
		var typeInfo = this.state.allclasses
		var arr = []
		// console.log(this,id)
		typeInfo.forEach(function(info,i){
			if(info.cate1Id == id){
				arr.push(info)				
			}
		})
		this.setState({
			typeclasses:arr
		})
		if(id == null){
			this.setState({
				typeclasses:typeInfo
			})
		}
	}
	changeClass(e){
		var that = this
		// console.log(e.target.getAttribute("data-id"))
		// console.log(this)
		console.log(e.target.add)
		$(e.target).parent().children().removeClass("cur")
		$(e.target).addClass("cur")
		var id = e.target.getAttribute("data-id")
		
		switch (id) {
			case "1":
				that.getClassInfo(id)
				break;
			case "14":
				that.getClassInfo(id)
				break;
			case "15":
				that.getClassInfo(id)
				break;
			case "9":
				that.getClassInfo(id)
				break;
			case "2":
				that.getClassInfo(id)
				break;
			case "8":
				that.getClassInfo(id)
				break;
			case "3":
				that.getClassInfo(id)
				break;
			case "11":
				that.getClassInfo(id)
				break;
			case "13":
				that.getClassInfo(id)
				break;
			default:
				that.getClassInfo(id)
				break;
		}
	}
	putClasses(){
		let arr = [<div className="swiper-slide cur">全部<b></b></div>]
		if(this.state.allclasses){
			var classesInfo = this.state.navinfo
			classesInfo.forEach(function(info,i){
				arr.push(<div className="swiper-slide" data-id={info.cate1Id}>{info.cate1Name}<b></b></div>)
			})
		}
		return arr
	}

	putNavContent(){
		let arr = []
		if(this.state.typeclasses){
			var classesInfo = this.state.typeclasses
			classesInfo.forEach(function(info,i){
				arr.push(<a href={"#/classesItem/"+info.shortName}>
							<div className="nav-item"><img src={info.icon}/><br/>{info.cate2Name}</div>
						</a>
						)
			})
		}
		return arr
	}


	render(){
		return (
			<div>
				<header className="bar bar-nav">
					<a href="#/main"><div className="pull-left icon-logo"></div></a>
					<div className="btn-box pull-right">
						<a className="search" href="#">搜索</a>丨
						<a className="classes" href="#/classes">分类</a>
					</div>
				</header>
				<div className="content">
					<nav className="layout-nav swiper-container">
						<div className="nav-header swiper-wrapper" onClick={this.changeClass.bind(this)}>
							{this.putClasses()}
						</div>
					</nav>
					<div className="nav-content">
						{this.putNavContent()}
					</div>
				</div>

				{this.props.children}
			</div>
		)
	}


	componentDidMount(){
		this.mySwiper = new Swiper('.layout-nav',{
			freeMode : true,
			slidesPerView : 'auto',
			freeModeSticky : true 
		})
	}
	componentDidUpdate(){
		var that = this
		if(this.state.allclasses){
			that.mySwiper.update()
		}
	}
}

export default ClassesComponent