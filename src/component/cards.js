import React from "react";


class Cards extends React.Component{
    render(){
        const{name,age} = this.props;
        return(
            <div>
                <p>{name} and age : {age}</p>
            </div>
        )
    }
}

export default Cards