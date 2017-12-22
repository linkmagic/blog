import React from 'react';
import './NavItem.css';

export default class NavItem extends React.Component {

  constructor(props) {
    super(props);

    this.itemTitleClick = this.itemTitleClick.bind(this);
  }

  itemTitleClick() {
    const { displayAreaName } = this.props;

    this.setState({
        contentDisplay: displayAreaName
      }
    );
  }

  render() {
    console.log('state: ', this.state);
    return (
      <button onClick={ this.itemTitleClick } className="NavItem">{ this.props.title }</button>
    );
  }

}
