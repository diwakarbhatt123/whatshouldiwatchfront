/**
 * Created by diwakar on 31/07/17.
 */
import React, {Component} from 'react';

import './Panels.css';

class Panels extends Component {

    render() {
        console.log(this.props);
        return (
            <div className="moviePanel">
                <div className="moviePosterDiv">
                    <img height="300" width="200" src="" className="moviePoster"/>
                </div>
                <div className="movieContent">
                    <h1 className="movieTitle">{this.props.movie.title}</h1>
                    <p className="movieDescription">{this.props.movie.description}</p>
                </div>
            </div>
        );
    }
}

export default Panels;