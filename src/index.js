import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: "There's only one thing I hate more than lying: skim milk. Which is water that's lying about being milk."
    };
  }



  getQuote() {
    const apiKey = "IbS_pi4yPKyL7suY6RADFAeF";
    const url = "https://quotes.rest/quote/random";

    this.setState({
      quote: "Thinking purrr..."
    })

    fetch(url, {
      headers: {
        "Accept": "application/json",
        "X-TheySaidSo-Api-Secret": apiKey
      },
    })
    .then((res) => {
      return res.json();
    })
    .then((myJson) => {
      const quote = JSON.stringify(myJson.contents.quote).replace(/['"]+/g, '')
      this.setState({
        quote: quote,
      })
    })
  }



  render () {
    const quote = this.state.quote
    return (
      <div>
        <header>
          <h1>Philosophy Cat Says:</h1>
        </header>
        <main>
          <section id="cat-image">
            <img src="https://t1.ea.ltmcdn.com/en/images/2/0/5/img_my_cat_is_depressed_1502_paso_0_600.jpg"/>
          </section>
          <section id="cat-text">
            <div id="quote-box">
              <p id="quote-text">{quote}</p>
            </div>
            <button id="next-quote" onClick={() => this.getQuote()}>Next Quote</button>
          </section>
        </main>
        <footer>
          <p>Created by Brian Danger Flynn &mdash; 2018</p>
        </footer>
      </div>
    );
  }
}


ReactDOM.render(
  <Main />,
  document.getElementById('root')
);


