import Header from './component/header';
import Footer from './component/footer';
import Cards from './component/cards';
import Books from './component/book';
import React from 'react';
import './App.css';


class App extends React.Component{
  constructor(){
    super();
    this.state={
      parent: 'App is the parent component',
      name:'mohammad',
      age:24,
      count:0,
      message: [
        {bookTitle:'Becoming Free Indeed',
         author:'Mary Pope Osborne ',
        description:`Jinger Vuolo, the sixth child in the famous Duggar family of TLC's 19 Kids and Counting and Counting On, recounts how she began to question the unhealthy ideology of her youth and learned to embrace true freedom in Christ`,
        bookImage:'https://m.media-amazon.com/images/I/61zHWm8mvQL._SX338_BO1,204,203,200_.jpg'},
        {bookTitle:'Afternoon on the Amazon',
         author:'Jinger Vuolo',
        description:`Vampire bats and killer ants? That's what Jack and Annie are about to run into when the Magic Tree House whisks them away to the Amazon River. It's not long before they get hopelessly lost. Will they be able to find their way back `,
        bookImage:'https://m.media-amazon.com/images/P/1949078205.01._SCLZZZZZZZ_SX500_.jpg'},
        {bookTitle:'Hannah Saves the World',
         author:'Luzzader ',
        description:`Hannahs got a funny feeling that its up to her to save the entire world, but before she can do so, she and her skeptical best friend Mia have to figure out what they’re saving the world from! As the girls’ detective work proceeds.`,
        bookImage:'https://m.media-amazon.com/images/I/51neNJ95N-L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'},
      ]

    }
  }
  handleChange=()=>{
    this.setState({
    
      parent:'hello react',
      name:'ahmed',
      count:this.state.count + 1,
    })
  }
render(){

  return (
    <div className="App">
      <Header/>
          <h1>Hello, react</h1>

          {this.state.parent}
          <br/>
          count : {this.state.count}
          <br/>

          <button onClick={this.handleChange}>Change state</button>
          <br/>
          <br/>
          <br/>

          <Cards name="first title" age='25'/>
          <Cards name="second title" age='26'/>
          <Cards name="third title" age='27'/>
          <Cards name="fourth title" age='28'/>
          <Books data={this.state.message}/>

      <Footer/>
    </div>
  );
}
}

export default App;
