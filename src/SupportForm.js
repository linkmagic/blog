import React, { Component } from 'react';

import './SupportForm.css'

export default class SupportForm extends Component {

  render() {
    return (
      <div className="SupportForm__Container">
        <form className="SupportForm" method="get">

          <label className="SupportForm__QuestionThemeLabel">
            Specify the subject of the appeal:
          </label>
          <select className="SupportForm__QuestionThemeSelect" id="idQuestionTheme" name="questionTheme">
            <option value="1">General issues</option>
            <option value="2">Error in site operation</option>
            <option value="3">Vulnerability on the site</option>
            <option value="4">Violation of site rules</option>
            <option value="5">Account lockout</option>
            <option value="6">Changing data (user name or email)</option>
            <option value="7">Account deleting</option>
            <option value="8">Brilliant idea</option>
            <option value="9">Offer of cooperation</option>
          </select>

          <label className="SupportForm__EmailLabel">
            E-mail address:
          </label>
          <input className="SupportForm__EmailText" id="idEmailText" name="emailText" type="text"
                 pattern="^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$" placeholder="your@email"/>

          <label className="SupportForm__MessageLabel" >Your text message</label>
          <textarea className="SupportForm__MessageText" name="textMessage" id="idTextMessage" placeholder="Your text message"/>

          <input className="SupportForm__SubmitAgreeCheckbox" type="checkbox"/>
          <label className="SupportForm__SubmitAgreeLabel">
            By clicking the 'Submit' button, you consent to the processing of your personal data
          </label>

          <input className="SupportForm__SubmitButton" type="submit" value="Submit"/>
        </form>
      </div>
    );
  }

}