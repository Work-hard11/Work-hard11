import React,{Component} from "react";
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css'

export default class App extends Component{
   //状态在哪里，操作状态的方法就在哪里
    /*---------- state init ------------*/
    state = {
        todos:[
            {id:'001', name: 'react_props', isDone: true },
            {id:'002', name: 'react_lifecycle', isDone: true },
            {id:'003', name: 'react_redux', isDone: false }
        ]
    }

    /*---------- handle event ------------*/
    addTodo = (name) => {
        const{ todos } = this.state;
        let addFlag = true
        todos.map(todo => {
            if(todo.name === name){
                alert('请勿重复添加todo')
                addFlag = false
            }
            return addFlag
        })
        if(addFlag){
            const newTodo = {id:todos.length+1, name, isDone:false}
            const newTodos = [newTodo, ...todos]
            this.setState({
                todos : newTodos,
            })
        }          
    }

    updateTodo = (id, isDone) => {
        const { todos } = this.state
        // const newTodos = []
        // todos.forEach(todo => {
        //     if(todo.id === id){
        //         let newTodo = {...todo, isDone: isDone}
        //         newTodos.push(newTodo)
        //     }else{
        //         newTodos.push(todo) 
        //     }
        // })
        const newTodos = todos.map(todo =>{
            if(todo.id === id) return {...todo, isDone}
            else return todo
        })
        this.setState({
            todos : newTodos,
        })
    }

    deleteTodo = (id) => {
        const{ todos } = this.state
        const newTodos = todos.filter(todo =>{
            return todo.id !== id
        })
        this.setState({
            todos : newTodos,
        })   
    }
    
    checkedAll = (isDone) => {
        const{ todos } = this.state
        const newTodos = todos.map( todo => {
            return {...todo, isDone}
        })
        this.setState({
            todos : newTodos,
        }) 
    }

    clearAllDone = () => {
        const{ todos } = this.state
        const newTodos = todos.filter( todo => {
            return  !todo.isDone 
        })
        this.setState({
           todos : newTodos 
        })
    }

    render(){
        // console.log('App---render')
        const{ todos } = this.state;
        return(
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                    <Footer todos={todos} checkedAll={this.checkedAll} clearAllDone={this.clearAllDone}/>
                </div>
            </div>   
        )
    }
}