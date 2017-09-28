import React, {Component} from "react";
import StockCard from "./StockCard";
import Grid from "material-ui/Grid";
import firebase from "firebase";

export default class StockListPage extends Component {
  databaseRef = firebase.database().ref('/inventory');
  state = {
    stocks: []
  };
  constructor (props) {
    super(props);
    this.databaseRef.once('value', (snapshot) => {
      let results = snapshot.val();
      if (!results) {
        this.databaseRef.child('/kare2346').push(({
          quantity: 10,
          price: 187.46,
          timestamp: firebase.database.ServerValue.TIMESTAMP
        }));
      } else {
        for (let stockTicker in results) {
          let stocks = [];
          stocks.push(<Grid key={stockTicker} item>
              <StockCard transactions={results[stockTicker]} name={stockTicker}/>
            </Grid>);
          this.setState({
            stocks: stocks
          })
        }
      }
    });
  }


  render() {
    return (
      <div>
        <h1>Stocks</h1>
        <Grid container spacing={24}>
          {this.state.stocks}
        </Grid>
      </div>
    );
  }
}