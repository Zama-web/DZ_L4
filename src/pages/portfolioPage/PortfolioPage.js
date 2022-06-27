import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleTextAction } from '../../redux/actions/actions';

class PortfolioPage extends Component {
    constructor(props) {
        super(props);
        this.handleText = this.handleText.bind(this)
    }

    handleText = () => {
        this.props.handleTextAction()
    }


    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <button onClick={this.handleText}>change text</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        title: state.title.title
    }
}

const mapDispatchToProps = {
    handleTextAction
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioPage);
