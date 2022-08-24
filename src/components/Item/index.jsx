import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class Item extends Component {
 state = {
  isMouseEnter: false,
 };

 static propTypes = {
  updateTodo : PropTypes.func.isRequired,
  deleteTodo : PropTypes.func.isRequired,
}

  handleMouse=(mouseEnterFlag)=>{
    return ()=>{
      this.setState({
        isMouseEnter: mouseEnterFlag,
      })
    }
  };

  handleChecked = (id) => {
    return event =>{
      // console.log('id,checked', id, event.target.checked)
      this.props.updateTodo(id, event.target.checked)
    } 
  }

  handleDelete = (id) => {
    return ()=>{
      if(window.confirm('确定删除吗？')){
        this.props.deleteTodo(id)
      }   
    }
  }

  render() {
    const{ id, name, isDone} = this.props;
    const{ isMouseEnter } = this.state;
    return (
      <li style={{backgroundColor: isMouseEnter? '#ddd': '#fff'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
            <input type="checkbox" checked={isDone} onChange={this.handleChecked(id)}/>
            <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{display:isMouseEnter? 'block': 'none'}} onClick={this.handleDelete(id)}>删除</button>
      </li>
    )
  }
}
