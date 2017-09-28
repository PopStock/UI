import React, {Component} from "react";
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom';

export default class StockCard extends Component {
  average;
  constructor (props) {
    super(props);
    let count = 0;
    let sum = 0;
    for (let id in props.transactions) {
      count++;
      sum = sum + props.transactions[id].price;
    }
    this.average = (sum / count).toFixed(2);

  }


  render() {
    return (
      <Card>
        <CardContent>
          <h1>{this.props.name}</h1>
          <p>${this.average}</p>
        </CardContent>
        <CardActions>
          <Link to={"/stock/" + this.props.name}>
            <Button dense>View</Button>
          </Link>
        </CardActions>

      </Card>
    )
  }
}