import React, {useEffect} from 'react';
import styled from "styled-components/native";
import {FlatList} from "react-native";
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import {loadRequest} from "../redux/actions";
import {BrowseListItem} from "../components";

const FlightsListBrowse = ({fetchedFlights, loadRequest}) => {
    useEffect(() => {
        loadRequest()
    }, []);

    return (
        <Container>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={fetchedFlights}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => <BrowseListItem item={item} key={index}/>}
            />
        </Container>
    )
};

const Container = styled.View`
    flex: 1;
    padding: 20px;
    background-color: #F8F8F8;
`;

FlightsListBrowse.defaultProps = {
    fetchedFlights: []
};

FlightsListBrowse.propTypes = {
    fetchedFlights: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    fetchedFlights: state.flights.fetchedFlights
});

const mapDispatchToProps = {
    loadRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightsListBrowse)