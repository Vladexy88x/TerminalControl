import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Buyers from './Buyers';
import Terminals from './Terminals';
import Layout from './Layout';
import { Items } from '../data/dataTable';
import Navbar from '../components/Navbar';

export default class Buyer extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {
            items: Items,
            avatarUrl: localStorage.getItem("avatarUrl")
        }

    }
    render() {
        const ids = this.props.match.params.id - 1;
        const { items } = this.state;
        const UserInfo = () => {
            return (
                <div>
                    <h4 style={{ paddingLeft: "270px" }}>ID покупателя: {items[ids].id}</h4> 
                    <h4 style={{ paddingLeft: "270px" }}>Имя покупателя: {items[ids].username}</h4>  
                    <h4 style={{ paddingLeft: "270px" }}>Средний чек: {items[ids].averageCheck}</h4>
                    <h4 style={{ paddingLeft: "270px" }}>Количество покупок: {items[ids].numberOfPurchases}</h4>
                    <h4 style={{ paddingLeft: "270px" }}>Общая выручка: {items[ids].totalRevenues}</h4>      
                </div>
            )
        }
        return (
            <Router>
                <Navbar avatarUrl={this.state.avatarUrl} />
                <Route exact path='/layout' component={Layout} />
                <Route exact path='/terminals' component={Terminals} />
                <Route exact path='/buyers' component={Buyers} />
                <Route exact path='/buyer/:id' component={UserInfo} />
            </Router>
        )
    }
}