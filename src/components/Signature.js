module.exports = React.createClass({
  render: function() {
    let fullName          = this.props.data.fullName;
    let jobTitle          = this.props.data.jobTitle;
    let directPhoneNumber = this.props.data.directPhoneNumber;
    let cellPhoneNumber   = this.props.data.cellPhoneNumber;
    let emailAddress      = this.props.data.emailAddress;

    return(
      <table cellPadding={0} cellSpacing={0} style={{width: '256px', backgroundColor: '#FFFFFF', borderColor: '#FFFFFF', margin: '5px 0'}}>
        <tbody style={{border: 'none'}}>
          <tr>
            <td style={{padding: '3px 8px'}}>
              <img src="https://s3.amazonaws.com/jobs.lhm.com/generic-logo.png" style={{width: '50px', height: '50px'}}/>
            </td>
            <td style={{padding: '0px'}}>
              <table cellPadding={0} cellSpacing={0} style={{width: '190px', margin: '0 5px', backgroundColor: '#FFFFFF', borderColor: '#FFFFFF'}}>
                <tbody style={{border: 'none'}}>
                  <tr>
                    <td style={{padding: '0px'}}>
                      {fullName.toUpperCase()}
                    </td>
                  </tr>
                  <tr>
                    <td style={{padding: '0px', color: '#E2231A', fontSize: '10px'}}>
                      {jobTitle.toUpperCase()}
                    </td>
                  </tr>
                  <tr>
                    <td style={{padding: '0px', fontSize: '12px'}}>
                      {directPhoneNumber}
                    </td>
                  </tr>
                  <tr>
                    <td style={{padding: '0px', fontSize: '12px'}}>
                      {cellPhoneNumber}
                    </td>
                  </tr>
                  <tr>
                    <td style={{padding: '0px', fontSize: '12px', color: '#E2231A'}}>
                      {emailAddress}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
})
