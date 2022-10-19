import React from 'react';
import "./Tris.scss";
import Tavola from './Tavola';

export default class Tris extends React.Component {
    render() {
        return (
            <div className="trisWrapper">
                <div className="tavola">
                    <Tavola/>
                </div>
                <div className="info">
                    <div>{/* turno */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}