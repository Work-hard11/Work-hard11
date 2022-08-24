import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class Header extends Component {
  
  static propTypes = {
    addTodo : PropTypes.func.isRequired
  }
  // state={

  // }
// /*---------- life cycle ------------*/
//     constructor(props){
//         super(props);
//         console.log('Header---constructor');
//     }

//     static getDerivedStateFromProps(props, state){
//         console.log('Header---getDerivedStateFromProps',props, state);
//         return null;
//     }

//     shouldComponentUpdate(){
//         console.log('Header---shouldComponentUpdate')
//         return true
//     }

//     componentDidMount(){
//         console.log('Header---componentDidMount')
//     }

//     getSnapshotBeforeUpdate(){
//         console.log('Header---getSnapshotBeforeUpdate')
//         return 'snapshotValue'
//     }

//     componentDidUpdate(prevProps, prevState, snapshotValue){
//         console.log('Header---componentDidUpdate', prevProps, prevState, snapshotValue)
//     }

//     componentWillUnmount(){
//       console.log('Header---componentWillUnmount')
//     }

  /*---------- handle event ------------*/
  handleKeyUp =(event)=>{
    const{keyCode,target} = event;
    if(keyCode !== 13) return;
    if(target.value.trim() === ''){
      alert('输入不能为空')
      return;
    }
    this.props.addTodo(target.value);
    target.value=''
  };
  render() {
    // console.log('Header---render')
    return (
      <div className="todo-header">
          <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
