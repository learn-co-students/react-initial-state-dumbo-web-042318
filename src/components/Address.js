// Component Code Goes Here
import React, {Component} from 'react'

class Address extends Component {
    render() {
        return (
          <div className="address">{this.props.street}, {this.props.city}</div>
        );
      }
    }

export default Address;