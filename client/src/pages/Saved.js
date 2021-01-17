import React, { Component } from 'react'
import { Container } from "../components/Grid/Grid";
import Navigation from "../components/Nav/Navigation";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import API from '../utils/API';
import SavedList from "../components/SavedList/SavedList";

class Saved extends Component {

    state = {
        savedBooks: []
    }

    componentDidMount = () => {
        this.getBooks()
    }

    deleteGoogleBook = currentBook => {
        API.deleteBook( currentBook.id )
        .then(res => {
            console.log("Deleted book:", res);
            this.getBooks();
        })
        .catch(err => {
            console.log("Error: ", err);
        })
    }

    getBooks = () => {
        API.getBooks()
        .then(res => {
            this.setState({
                savedBooks: res.data
            })
            console.log("Response form get books", res);
        })
        .catch(err => {
            console.log("Error: ", err);
        })
    }


    render() {
        return (
            <div>
                <Navigation />
                <Container fluid>
                <Jumbotron />
                {this.state.savedBooks.length ? (
                    <SavedList 
                    bookState={this.state.savedBooks}
                    deleteGoogleBook={this.deleteGoogleBook}
                    >
                    </SavedList>
                ) : (
                    <h5>No results to display</h5>
                )}
                </Container>
            </div>
        )
    }
}

export default Saved
