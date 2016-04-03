module.exports = React.createClass({
  render: function() {
    let fullName          = this.props.data.fullName;
    let jobTitle          = this.props.data.jobTitle;
    let directPhoneNumber = this.props.data.directPhoneNumber;
    let cellPhoneNumber   = this.props.data.cellPhoneNumber;
    let emailAddress      = this.props.data.emailAddress;

    return(
      <table cellPadding={0} cellSpacing={0} style={{width: '300px', backgroundColor: '#FFFFFF', borderColor: '#FFFFFF'}}>
        <tbody style={{border: 'none'}}>
          <tr>
            <td><img src="https://s3.amazonaws.com/jobs.lhm.com/generic-logo.png" style={{width: '50px', height: '50px'}}/></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    )
  }
})
