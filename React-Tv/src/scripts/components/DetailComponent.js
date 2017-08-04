
import async from 'async'

class DetailComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		this.state = {
			detail : null,
			cate_id : null,
			common_live : null
		}
		this.index = 0
		this.common_arr = [],
		this.arrNew = []
	}
	componentWillMount(){
		let that = this
		let path = this.props.params.id
		async.waterfall([
			function(callback){
				$.ajax({
					type:"GET",
					url: 'http://stoledata.duapp.com/getTouJson.php',
					data: {
						src: 'http://open.douyucdn.cn/api/RoomApi/room/'+path
					},
					dataType:'jsonp',
					success:function(data){
						callback(null,data)
					}
				})
			},
			function(param,callback){
				// console.log(param,1)
				$.ajax({
					type:"GET",
					url: 'http://stoledata.duapp.com/getTouJson.php',
					data: {
						src: 'http://open.douyucdn.cn/api/RoomApi/live/'+param.data.cate_id+'?limit=4&offset='+that.index
					},
					dataType:'jsonp',
					success:function(data){
						that.setState({
							detail : param,
							common_live : data.data
						})
						that.arrNew = that.state.common_live
						callback(null,'ok')
					}
				})
				
			}
		],function(err,result){
			console.log(result)
			// console.log(that.state.detail)
			// console.log(that.state.common_live)
		})

	}

	render(){
		var info=null;
		if(this.state.detail){
			info = this.state.detail.data
		}
		return (
			<div className="detail-box">
				<header className="bar bar-nav">
					<div className="pull-left icon-logo"></div>
					<a className="head-btn pull-right" href="#/main">进入首页</a>
				</header>
				<div className="video-area">
					<div className="player">
						<video id="dy-video-player" width="100%" controls type="application/x-mpegURL"  preload="auto" src='http://hls1a.douyucdn.cn/live/567695ryp4NDCs6N_550/playlist.m3u8?wsSecret=841cbe57152bcdc9d51ce2bf143b6ada&wsTime=1500377895&did=&ver='>
							<p>您的浏览器不支持 video 标签</p>
						</video>
					</div>
				</div>
				<div className="info-area">
					<div className="info-room">
						<img src={info?info.avatar:""}/>
						<div className="info-content">
							<p className="name">主播：<span>{info?info.owner_name:""}</span></p>
							<p className="online">共<span>{info?info.online:""}</span>人正在观看</p>
						</div>
					</div>
					<div className="info-handle">
						<div id="sendBar" class="hd-item hd-send">
							<img class="icon" src="https://shark.douyucdn.cn/app/douyu-mobile/m-douyu/res/hd-send.png?v=2.8" alt=""/>发弹幕
							<b class="split-line"></b>
						</div>
						<div id="focusRoom" class="hd-item hd-focus">
							<img class="icon" src="https://shark.douyucdn.cn/app/douyu-mobile/m-douyu/res/hd-focus.png?v=2.8" alt=""/>关注
							<b class="split-line"></b>
						</div>
						<div id="shareRoom" class="hd-item hd-share">
							<img class="icon" src="https://shark.douyucdn.cn/app/douyu-mobile/m-douyu/res/hd-share.png?v=2.8" alt=""/>分享
						</div>
					</div>
				</div>
				<div className="content-padded grid-demo rooms live-room">
					<div className="rooms-title"><span className="text">同类直播</span></div>
					<div className="room-item tl-zb">
						{this.putCommonLives()}
					</div>
				</div>
				<div className="more" onClick={this.addMore.bind(this)}>加载更多</div>
			</div>
		)
	}

	putCommonLives(){
		let that = this
		that.common_arr=[]
		if(this.state.common_live){
			let common_rooms = this.state.common_live
			
			common_rooms.forEach(function(room,i){
				that.common_arr.push(
					<div className="row">
						<div className="c-room-item">
							<a href={"#/detail/"+room.room_id}>
								<div onClick={that.putcome.bind(that,room.room_id)} className="room-show">
									<img src={room.room_src}/>
									<div className="up-shadow"><span className="room-online">{room.online}</span></div>
									<span className="room-nickname">{room.nickname}</span>
								</div>
								<div className="room-des">{room.room_name}</div>
							</a>
						</div>
					</div>
				)
			})
		}
		return that.common_arr
	}
	putcome(k){
		let that = this
		let path = k
		async.waterfall([
			function(callback){
				$.ajax({
					type:"GET",
					url: 'http://stoledata.duapp.com/getTouJson.php',
					data: {
						src: 'http://open.douyucdn.cn/api/RoomApi/room/'+path
					},
					dataType:'jsonp',
					success:function(data){
						callback(null,data)
					}
				})
			},
			function(param,callback){
				// console.log(param,1)
				$.ajax({
					type:"GET",
					url: 'http://stoledata.duapp.com/getTouJson.php',
					data: {
						src: 'http://open.douyucdn.cn/api/RoomApi/live/'+param.data.cate_id+'?limit=4&offset='+that.index
					},
					dataType:'jsonp',
					success:function(data){
						that.setState({
							detail : param,
							common_live : data.data
						})
						that.arrNew = that.state.common_live
						callback(null,'ok')
					}
				})
				
			}
		],function(err,result){
			console.log(result)
			// console.log(that.state.detail)
			// console.log(that.state.common_live)
		})
	}
	addMore(){
		this.index = this.index + 3
		let that = this
		console.log(this.index,this.arrNew)
		let cate_id = this.state.detail.data.cate_id
		$.ajax({
			type:"GET",
			url: 'http://stoledata.duapp.com/getTouJson.php',
			data: {
				src: 'http://open.douyucdn.cn/api/RoomApi/live/'+cate_id+'?limit=4&offset='+this.index
			},
			dataType:'jsonp',
			success:function(data){
				// console.log(data.data,1)
				// console.log(that.state.common_live)
				data.data.forEach(function(item,i){
					that.arrNew.push(item)
				})
				// console.log(that.arrNew)
				that.setState({
					common_live : that.arrNew
				})
			}
		})
	}
}

export default DetailComponent