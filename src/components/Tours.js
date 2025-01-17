import { useState } from "react";
import Card from "./Card";



function Tours({tours, removeTour}){
    return (
        <div className="container">
            <div>
            <h2 className="title">Plan with Ishan</h2>
            </div>

            <div className="cards">
                {
                    tours.map( (tours) => {
                        return <Card key={tours.id} {...tours} removeTour = {removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Tours