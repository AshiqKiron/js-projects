import React, { Component } from 'react';
import Cryptocurrency from './Cryptocurrency'
import './Tickers.css';
import axios from 'axios';



class Tickers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: "bitcoin",
                    price: "1",
                    symbol: "BTC",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",
                },
                {
                    id: "ethereum",
                    price: "1",
                    symbol: "BTC",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",
                },
                {
                    id: "litecoin",
                    price: "1",
                    symbol: "BTC",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",
                }
            ]
        };
    }

    render() {
        var tickers = this.state.data.map((currency) =>
            <Cryptocurrency data={currency} key={currency.id} />
        );
        return (
            <div className="tickers-container">
                <ul className="tickers">{tickers}</ul>
                <p>Information updated every 10 seconds courtesy of coinmarketcap.com</p>
           </div>
        );
    }


fetchCryptocurrencyData() {
    axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=5")
        .then(response => {
            var wanted = ["bitcoin", "ethereum", "litecoin"];
            var result = response.data.filter(currency => wanted.includes(currency.id));
            this.setState({ data: result});
        })
        .catch(err => console.log(err));
    }

    componentDidMount() {
        this.fetchCryptocurrencyData();
        this.interval = setInterval(() => this.fetchCryptocurrencyData(), 10 * 1000);
    }
	
}

export default Tickers;
