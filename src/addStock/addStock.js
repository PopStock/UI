import React from 'react';
import './addStock.css';
import PropTypes from 'prop-types';
import {auth, database} from 'firebase';
import {TextField, Button} from 'material-ui';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  container: {
    display: 'block',
    width: '200px',
    margin: '20px auto'
  },
  textField: {
    marginLeft: '20px',
    marginRight: '20px',
    width: 150,
  },
  button: {
    margin: '20px'
  },
  menu: {
    width: 200,
  },
});

class AddStock extends React.Component {
  state = {
    owner: auth().currentUser && auth().currentUser.displayName || '',
    quantity: 1000,
    price: 0,
    symbol: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  constructor (props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="symbol"
          label="Symbol"
          className={classes.textField}
          value={this.state.symbol}
          onChange={this.handleChange('symbol')}
          margin="normal"
        />

        <TextField
          id="owner"
          label="Owner"
          className={classes.textField}
          value={this.state.owner}
          onChange={this.handleChange('owner')}
          margin="normal"
        />

        <TextField
          id="quantity"
          label="Quantity"
          value={this.state.quantity}
          onChange={this.handleChange('quantity')}
          type="number"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="price"
          label="List Price"
          value={this.state.price}
          onChange={this.handleChange('price')}
          type="number"
          className={classes.textField}
          margin="normal"
        />

        <Button
          className={classes.button}
          onClick={this.list}
          raised={true}>
          List Stock
        </Button>

      </form>
    );
  }
}

AddStock.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddStock);
