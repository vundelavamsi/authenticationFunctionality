// Write your JS code here
import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

class LogoutButton extends Component {
  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.onClickLogout}>
          Logout
        </button>
      </div>
    )
  }
}

export default withRouter(LogoutButton)
