module.exports = React.createClass({
  handleChange: function(inputName, evt) {
    // replace this with actual behavior
    console.log(inputName + ": " + evt.target.value);
  },
  render: function() {
    return(
      <form>
        <div className="row">
          <div className="small-12 columns">
            <label>
              Full Name
              <input type="text" onChange={this.handleChange.bind(null, 'fullName')} />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="small-12 columns">
            <label>
              Job Title
              <input type="text" onChange={this.handleChange.bind(null, 'jobTitle')} />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="small-12 columns">
            <label>
              Direct Phone Number
              <input type="text" onChange={this.handleChange.bind(null, 'directPhoneNumber')} />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="small-12 columns">
            <label>
              Cell Phone Number
              <input type="text" onChange={this.handleChange.bind(null, 'cellPhoneNumber')} />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="small-12 columns">
            <label>
              Email Address
              <input type="text" onChange={this.handleChange.bind(null, 'emailAddress')} />
            </label>
          </div>
        </div>
      </form>
    )
  }
})
