
import MainComponent from './MainComponent'
import HeaderComponent from './HeaderComponent'



class RootComponent extends React.Component{
	constructor(props,context){
		super(props,context)
	}
	
	render(){
		return (
			<div className="big-box">
				{this.props.children}
			</div>
			
		)
	}
}

export default RootComponent