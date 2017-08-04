

class FooterComponent extends React.Component{
	constructor(props,context){
		super(props,context)
	}
	gotop(){
		$("#scroller").scrollTop(0)
	}
	render(){
		return (
			<footer>
				<div className="gotop" onClick={this.gotop.bind(this)}>
					<span><i className="icon-gotop"></i>返回顶部</span>
				</div>
				<p>开发人员：XXXXXX</p>
				<p>版权所有 © XXXXXXXXX</p>
			</footer>
		)
	}
}

export default FooterComponent