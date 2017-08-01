/**
 * Created by diwakar on 31/07/17.
 */

import React, {Component} from 'react';

// import fetch from 'fetch';

import Panels from './Panels';

class Content extends Component {

    constructor() {
        super();
        this.url = 'localhost:8080/movies';
        this.state = {
            "movies": [{"title": "abc", "description": "random des1"}, {
                "title": "bbc",
                "description": "random desc2"
            }, {"title": "ccd", "description": "random desc3"}]
        };
    }

    // componentDidMount() {
    //     fetch.fetchUrl(this.url).then(function (response) {
    //         let movies = response.json();
    //         this.setState({"movies": movies});
    //     });
    // }

    render() {
        return (
            <div className="content">
                {this.state.movies.map(function (elem, keys) {
                    return <Panels movie={elem}/>
                })}
            </div>
        );
    }
}

export default Content;