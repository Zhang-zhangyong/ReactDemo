
//入口文件

require('./styles/app.scss')


///////////////////////////////////


import RootComponent from "./scripts/components/RootComponent"
import MainComponent from './scripts/components/MainComponent'
import DetailComponent from "./scripts/components/DetailComponent"
import HeaderComponent from "./scripts/components/HeaderComponent"
import ClassesComponent from "./scripts/components/ClassesComponent"
import classesItemComponent from "./scripts/components/ClassesItemComponent"
import SearchComponent from "./scripts/components/search/SearchComponent"
import SearchlistComponent from "./scripts/components/search/SearchlistComponent"

import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={RootComponent}>
			<IndexRoute component={MainComponent}/>
			<Route path="main" component={MainComponent}></Route>
			<Route path="classes" component={ClassesComponent}></Route>
			<Route path="classesItem/:id" component={classesItemComponent}></Route>
			<Route path="detail/:id" component={DetailComponent}></Route>
			<Route path="search" component={SearchComponent}></Route>
			<Route path="searchlist/:id" component={SearchlistComponent}></Route>
			<Route path="*" component={MainComponent}></Route>
		</Route>
    </Router>
	,document.getElementById('root')
)



