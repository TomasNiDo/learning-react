import React, { Component } from 'react'

class Counter extends Component {
  componentWillUnmount() {
    console.log('Counter - Unmounted')
  }

  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
        </div>
        <button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-secondary btn-sm col-1 m-2">+</button>
        <button onClick={ () => this.props.onDecrement(this.props.counter) } className="btn btn-secondary btn-sm col-1 m-2">-</button>
        <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm col-1 m-2">Delete</button>
      </div>
    )
  }

  getBadgeClasses() {
    let classes = "m-2 p-2 badge badge-"
    classes += this.props.counter.value === 0 ? "warning" : "primary"
    return classes
  }

  formatCount() {
    const { value } = this.props.counter
    return value === 0 ? 'Zero' : value
  }
}

export default Counter
