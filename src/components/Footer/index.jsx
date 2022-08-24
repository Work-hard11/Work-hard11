import React, { Component } from 'react'
import './index.css';

// let isDoneFlag = false

export default class Footer extends Component {

  handleCheckAll = (event) => {
    // isDoneFlag = !isDoneFlag
    // this.props.checkedAll(isDoneFlag)
    this.props.checkedAll(event.target.checked)
  }

  handleClearAllDone = () => {
    this.props.clearAllDone()
  }

  render() {
    const{ todos } = this.props
    const doneCount = todos.reduce((pre,todo) => pre + (todo.isDone ? 1 : 0), 0)
    const totalCount = todos.length
    return (
      <div className="todo-footer">
          <label>
            <input type="checkbox"  onChange={this.handleCheckAll} checked={ doneCount === totalCount && totalCount !== 0 ? true : false}/>
          </label>
          <span>
            <span>已完成{doneCount}</span> / 全部{totalCount}
          </span>
          <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
