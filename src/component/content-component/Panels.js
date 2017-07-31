/**
 * Created by diwakar on 31/07/17.
 */
import React, {Component} from 'react';

class Panels extends Component {
    render() {
        return (
            <div className="moviePanel">
                <div className="moviePosterDiv">
                    <img height="300" width="200" src="" className="moviePoster"/>
                </div>
                <div className="movieContent">
                    <h1 className="movieTitle">Random Title</h1>
                    <p className="movieDescription">Random Description</p>
                </div>
            </div>
        );
    }
}

export default Panels;