import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Form,
    ButtonToolbar,
    ButtonGroup,
    FormControl,
    Button,
    ToggleButtonGroup,
    ToggleButton,
    InputGroup,
} from "react-bootstrap";
import { Redirect } from "react-router-dom";

import TodoBauyersList from '../components/TodoBauyersList';
import { Items } from '../data/dataTable';


export default class Buyers extends React.Component {
    constructor(props) {
        super(props);
        let STATUS_LOGGED = true;
        let key = this.props.location.key;
        if (key == undefined) {
            STATUS_LOGGED = false;
        }
        

        this.state = {
            loggedIn: STATUS_LOGGED,
            items: Items,
            selectSort: 0,
            isSearchByName: false,
            searchByNameText: '',
            numberShow: '',
            numberShowWithPagination: '',
            isSelectFive: false,
            isSelectTen: false,
            isSelectFifteen: false

        }

    }

    changeSort = (sortId) => {
        this.setState({ selectSort: sortId });
    }

    sortingMethod = (a, b) => {
        if (this.state.selectSort === 1) {
            return a.totalRevenues - b.totalRevenues;
        }
        if (this.state.selectSort === 2) {
            return b.totalRevenues - a.totalRevenues;
        }
        if (this.state.selectSort === 3) {
            return a.averageCheck - b.averageCheck;
        }
        if (this.state.selectSort === 4) {
            return b.averageCheck - a.averageCheck;
        }
        if (this.state.selectSort === 5) {
            return a.numberOfPurchases - b.numberOfPurchases;
        }
        if (this.state.selectSort === 6) {
            return b.numberOfPurchases - a.numberOfPurchases;
        }

    }

    searchByName = (e) => {
        this.setState({
            searchByNameText: e.target.value,
            isSearchByName: true
        });
        if (e.target.value == '') {
            this.setState({ isSearchByName: false });
        }
    }

    limitedItems = (e) => {
        this.setState({ numberShow: e.target.value });

        if (e.target.value === '5') {
            this.setState({
                isSelectFive: true,
                isSelectTen: false,
                isSelectFifteen: false
            });
        }
        if (e.target.value === '10') {
            this.setState({
                isSelectTen: true,
                isSelectFive: false,
                isSelectFifteen: false
            });
        }
        if (e.target.value === '15') {
            this.setState({
                isSelectTen: false,
                isSelectFive: false,
                isSelectFifteen: true
            });
        }
    }

    limitedItemsWithPagination = (e) => {
        this.setState({ numberShowWithPagination: e.target.value });
    }


    render() {
        if (this.state.loggedIn === false) {
            //to="/auth"
            return <Redirect to="/auth" ></Redirect>
        }
        return (
            <div style={{ paddingLeft: "250px", paddingTop: "60px", paddingRight: "250px" }}>
                <ToggleButtonGroup onChange={this.changeSort} type="radio" name="options" defaultValue={1}>
                    <ToggleButton value={1}>Общая выручка по убыванию</ToggleButton>
                    <ToggleButton value={2}>Общая выручка по возрастанию</ToggleButton>
                    <ToggleButton value={3}>Средний чек по возрастанию</ToggleButton>
                    <ToggleButton value={4}>Средний чек по убыванию</ToggleButton>
                    <ToggleButton value={5}>Количество покупок по возрастанию</ToggleButton>
                    <ToggleButton value={6}>Количество покупок по убыванию</ToggleButton>
                    <InputGroup size="sm" className="mb-3">
                        <Form.Label style={{paddingLeft: "30px"}} >Поиск по имени</Form.Label>
                        <FormControl onChange={this.searchByName} value={this.state.searchByNameText} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>

                </ToggleButtonGroup>
                <ButtonGroup style={{ paddingTop: "30px" }} className="mb-2">
                    <Button onClick={this.limitedItems} value={5}  variant={this.state.isSelectFive ? "primary" : "text-muted"}>5</Button>
                    <Button onClick={this.limitedItems} value={10} variant={this.state.isSelectTen ? "primary" : "text-muted"}>10</Button>
                    <Button onClick={this.limitedItems} value={15} variant={this.state.isSelectFifteen ? "primary" : "text-muted"}>15</Button>
                </ButtonGroup>

                <ButtonToolbar style={{ paddingTop: "40px" }} aria-label="Toolbar with button groups">
                    <ButtonGroup className="mr-2" aria-label="First group">
                        <Button onClick={this.limitedItemsWithPagination} value={1}>1</Button>
                        <Button onClick={this.limitedItemsWithPagination} value={2}>2</Button>
                        <Button onClick={this.limitedItemsWithPagination} value={3}>3</Button>
                        <Button onClick={this.limitedItemsWithPagination} value={4}>4</Button>
                    </ButtonGroup>
                </ButtonToolbar>

                <TodoBauyersList
                    pagination={this.state.numberShowWithPagination}
                    numberShow={this.state.numberShow}
                    isActiveSearch={this.state.isSearchByName}
                    filter={this.state.searchByNameText}
                    items={this.state.items.sort(this.sortingMethod)}
                ></TodoBauyersList>
            </div>
        )
    }
}