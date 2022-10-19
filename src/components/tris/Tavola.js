import React from "react";
import "./Tavola.scss"
import Quadratino from "./Quadratino";

export default class Tavola extends React.Component {
    creaQuadrato(i) {
        return <Quadratino />;
    }

    render() {
        const turno = 'Tocca a: X';

        return (
            <div>
                <div className="turno">{turno}</div>
                <div className="riga">
                    {this.creaQuadrato(0)}
                    {this.creaQuadrato(1)}
                    {this.creaQuadrato(2)}
                </div>
                <div className="riga">
                    {this.creaQuadrato(3)}
                    {this.creaQuadrato(4)}
                    {this.creaQuadrato(5)}
                </div>
                <div className="riga">
                    {this.creaQuadrato(6)}
                    {this.creaQuadrato(7)}
                    {this.creaQuadrato(8)}
                </div>
            </div>
        );
    }
}