import React from 'react';
import './NavMenu.css';

import DropDown from './DropDown';

export default class NavMenu extends React.Component {

  constructor(props) {
    super(props);

    this.titleClick = this.titleClick.bind(this);
  }

  titleClick() {
    const { displayAreaName } = this.props;

    this.setState({
        contentDisplay: displayAreaName
      }
    );
  }

  render() {
    const { children } = this.props;
    console.log('NavMenu.state: ', this.state);

    return (
      <nav onClick={ this.titleClick } className="NavMenu">
        <DropDown title="Все публикации">
          { children }
        </DropDown>
      </nav>
    );
  }

}
