import React, { Component } from 'react';
import { connect } from 'react-redux';

import './NavMenu.css';
import DropDown from './DropDown';

class NavMenu extends Component {

  buttonGroupOnClick = (event) => {
    let groupId = event.target.getAttribute('groupid');
    this.props.onDisplayContentChange({
      name: 'OPEN_ARTICLES_BY_GROUP',
      value: groupId
    });
  };

  render() {
    const { menuTitle } = this.props;
    const { listArticleGroups } = this.props.blogState;

    return (
      <nav className="NavMenu">
        <DropDown title={menuTitle}>
        {
          listArticleGroups.map((group, index) => {
            return (<button className="DropDown__MenuItem"
                            onClick={this.buttonGroupOnClick}
                            groupid={group.groupid}
                            key={index}>
                     {group.name}
                   </button>);
          })
        }
        </DropDown>
      </nav>
    );
  }

}

export default connect(

  state => ({
    blogState: state
  }),

  dispatch => ({
    onDisplayContentChange: (action) => {
      dispatch({ type: 'DISPLAY_CONTENT', action})
    }
  })

)(NavMenu);