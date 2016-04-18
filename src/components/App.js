const Form = require('./Form')
const Signature = require('./Signature')
var phoneFormatter = require('phone-formatter');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      fullName: '',
      jobTitle: '',
      directPhoneNumber: '',
      cellPhoneNumber: '',
      emailAddress: ''
    }
  },
  updateSignature: function(inputName, evt) {
    var newState = {},
        value = evt.target.value;

    if ( evt.target.type === 'tel' ) {
      if ( value.length > 0 ) {
        value = phoneFormatter.format(value, "(NNN) NNN-NNNN");
      }
    }

    newState[inputName] = value;
    this.setState(newState);
  },
  render: function() {
    return(
      <div className="row">
        <div className="small-10 small-centered columns">
          <div className="row">
            <div className="small-12 columns">
              <h2>Email Signature</h2>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="small-5 columns">
              <h4>Step 1: Enter Your Information</h4>
              <Form updateSignature={this.updateSignature} />
            </div>
            <div className="small-6 columns">
              <h4>Step 2: Copy Your Signature</h4>
              <p>
                After filling out the form on the left, place your cursor inside the
                box below, select all (Control + A on a PC, Command + A on a Mac), and
                copy. Then, open Microsoft Outlook, paste into the Edit Signature box,
                and set as default signature.
              </p>
              <div id="output" contentEditable={true}>
                <Signature data={this.state} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
