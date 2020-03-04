import React, { Component } from 'react';
import AlcoholLayout from "../../layouts/Alcohol";
import { getAllBeers, clearBeers, getBeersByAlcohol } from "../../../../actions/beer-actions";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';

class Alcohol extends Component {

    state = {
        page: 1,
        text: '',
        alreadySearched: false,
    };

    componentDidMount() {
        const { getAllBeers, clearBeers } = this.props;
        const { page } = this.state;
        clearBeers();
        getAllBeers(page);
    }

    updateList = async () => {
        const { getAllBeers, getBeersByAlcohol } = this.props;
        const { alreadySearched } = this.state;

        await this.setState({ page: this.state.page + 1 });

        if (alreadySearched) {
            getBeersByAlcohol(this.state.page, this.state.text);
        } else {
            getAllBeers(this.state.page);
        }
    };

    searchByAlcohol = async () => {
        const { clearBeers, getBeersByAlcohol } = this.props;

        clearBeers();
        await this.setState({ page: 1 });
        await this.setState({ alreadySearched: true });
        getBeersByAlcohol(this.state.page, this.state.text);
    };

    onChangeTextInput = (text) => {
        this.setState({ text });
    };

    render() {
        const { history, beers, loading } = this.props;
        const { activeRadio } = this.state;
        return (
            <AlcoholLayout changeSelected={ this.changeSelected } onChangeTextInput={ this.onChangeTextInput }
                           activeRadio={ activeRadio }
                           searchByAlcohol={ this.searchByAlcohol }
                           updateList={ this.updateList } beers={ beers }
                           loading={ loading } history={ history }/>
        );
    }
}

const mapStateToProps = state => ({
    beers: state.Beer.beers,
    loading: state.Beer.loading,
});

export default connect(mapStateToProps, { getAllBeers, clearBeers, getBeersByAlcohol })(withRouter(Alcohol));
