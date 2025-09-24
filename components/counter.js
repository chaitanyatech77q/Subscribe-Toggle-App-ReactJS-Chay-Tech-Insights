import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {isSubscribed: false}

  toggleSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome To Chay_Tech_Insights</h1>
        <h1 className="heading1">
          Where you can learn about any Technologies with AI 🚀
        </h1>
        <h1 className="heading2">
          Instagram : @Chay_Tech_Insights / Youtube : @ChayTechTalks •
        </h1>
        <button className="button subscribe" onClick={this.toggleSubscribe}>
          {isSubscribed ? 'Subscribed ✅' : 'Do Subscribe'}
        </button>
      </div>
    )
  }
}

export default Counter
