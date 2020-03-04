import React, { Component } from 'react';
import BothFiltersLayout from "../../layouts/BothFilters";
import { getAllBeers, clearBeers, getBeersByBothFilters, getBeersByOrganic } from "../../../../actions/beer-actions";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';

class BothFilters extends Component {

    state = {
        page: 1,
        activeRadio: 1,
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
        const { getAllBeers, getBeersByBothFilters } = this.props;
        const { alreadySearched } = this.state;

        await this.setState({ page: this.state.page + 1 });

        if (alreadySearched) {
            getBeersByBothFilters(this.state.page, this.state.text);
        } else {
            getAllBeers(this.state.page);
        }
    };

    searchByBothFilters = async () => {
        const { clearBeers, getBeersByBothFilters } = this.props;

        clearBeers();
        await this.setState({ page: 1 });
        await this.setState({ alreadySearched: true });
        getBeersByBothFilters(this.state.page, this.state.text, this.state.activeRadio);
    };

    changeSelected = (selected) => {
        this.setState({ activeRadio: selected });
    };

    onChangeTextInput = (text) => {
        this.setState({ text });
    };

    render() {
        const { history, beers, loading } = this.props;
        const { activeRadio } = this.state;
        return (
            <BothFiltersLayout changeSelected={ this.changeSelected } onChangeTextInput={ this.onChangeTextInput }
                           activeRadio={ activeRadio }
                           searchByBothFilters={ this.searchByBothFilters }
                           updateList={ this.updateList } beers={ beers }
                           loading={ loading } history={ history }/>
        );
    }
}

const mapStateToProps = state => ({
    beers: state.Beer.beers,
    loading: state.Beer.loading,
});

export default connect(mapStateToProps, { getAllBeers, clearBeers, getBeersByBothFilters, getBeersByOrganic })(withRouter(BothFilters));
