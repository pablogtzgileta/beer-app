import React, { Component } from 'react';
import OrganicLayout from "../../layouts/Organic";
import { getAllBeers, clearBeers, getBeersByOrganic } from "../../../../actions/beer-actions";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';

class Organic extends Component {

    state = {
        page: 1,
        activeRadio: 1,
        alreadySearched: false,
    };

    componentDidMount() {
        const { getBeersByOrganic, clearBeers } = this.props;
        const { page } = this.state;
        clearBeers();
        getBeersByOrganic(page, this.state.activeRadio);
    }

    updateList = async () => {
        const { getAllBeers, getBeersByOrganic } = this.props;
        const { alreadySearched } = this.state;

        await this.setState({ page: this.state.page + 1 });

            getBeersByOrganic(this.state.page, this.state.activeRadio);
    };

    searchByOrganic = async (radioClicked) => {

        if (radioClicked !== this.state.activeRadio) {
            const { clearBeers, getBeersByOrganic } = this.props;

            await clearBeers();
            await this.setState({ page: 1 });
            await this.setState({ activeRadio: radioClicked });
            await this.setState({ alreadySearched: true });
            getBeersByOrganic(this.state.page, this.state.activeRadio);
        }
    };

    onChangeTextInput = (text) => {
        this.setState({ text });
    };

    render() {
        const { history, beers, loading } = this.props;
        const { activeRadio } = this.state;
        return (
            <OrganicLayout changeSelected={ this.changeSelected } onChangeTextInput={ this.onChangeTextInput }
                           activeRadio={ activeRadio }
                           searchByOrganic={ this.searchByOrganic }
                           updateList={ this.updateList } beers={ beers }
                           loading={ loading } history={ history }/>
        );
    }
}

const mapStateToProps = state => ({
    beers: state.Beer.beers,
    loading: state.Beer.loading,
});

export default connect(mapStateToProps, { getAllBeers, clearBeers, getBeersByOrganic })(withRouter(Organic));
