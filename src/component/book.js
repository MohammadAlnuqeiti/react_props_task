import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class Books extends React.Component{
    render(){
        const data = this.props.data;
        console.log(data)

        const dataBook = data.map((ele)=>{
            return ( 
            <>
                <Card style={{ width: '18rem', display:'inline-block' , margin: '20px'  }} key={Math.random()}>
                    <Card.Img variant="top" src={ele.bookImage} style={{width:'18rem',height:'22rem'}}/>
                    <Card.Body>
                    <Card.Title>{ele.bookTitle}</Card.Title>
                    <Card.Text>
                    {ele.description}
                    </Card.Text>
                    <Button variant="primary">{ele.author}</Button>
                    </Card.Body>
                </Card>
            </>
        
            )
        })

        // console.log(dataBook)
        return(
            <div>
                {data.map((ele)=>(
                <Card style={{ width: '18rem', display:'inline-block' , margin: '20px' }} key={Math.random()} >
                    <Card.Img variant="top" src={ele.bookImage} style={{width:'18rem',height:'22rem'}} />
                    <Card.Body>
                    <Card.Title>{ele.bookTitle}</Card.Title>
                    <Card.Text>
                    {ele.description}
                    </Card.Text>
                    <Button variant="primary">{ele.author}</Button>
                    </Card.Body>
                </Card>
                ))}
                <div>

                {dataBook}
                </div>
            </div>
        )
    }
}

export default Books