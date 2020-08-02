import React from 'react'
import streamCreate from './streams/streamcreate';
import streamDelete from './streams/streamdelete';
import streamEdit from './streams/streamedit';
import streamList from './streams/streamlist'
import streamShow from './streams/streamshow';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import Header from './Header';


const App = () => {
        
    return (
    <div className="ui container">
        <Router history={history}>
            <Header/>
            <Route path="/" exact component={streamList}></Route>
            <Route path="/stream/new" component={streamCreate}></Route>
            <Route path="/stream/edit" component={streamEdit}></Route>
            <Route path="/stream/delete" component={streamDelete}></Route>
            <Route path="/stream/show" component={streamShow}></Route>
        </Router>
    </div>);

}

export default App;