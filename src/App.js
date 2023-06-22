import React from 'react'
import Todo from './Todo';
import AddTodo from './AddTodo';
import { Paper, List , Container} from "@material-ui/core";
import './App.css';
import { call } from "./service/ApiService";

import './AppTable.css';

class App extends React.Component{


  //APP에서 API컴포넌틑 사용하기
  componentDidMount() {
    call("/shopping","GET",null).then((response)=>
    this.setState({items: response.data})
    );
  }
  
  add = (item) =>{
    call("/shopping","POST",item).then((response) =>
    this.setState({ items: response.data })
    );
  };
  
  delete =(item) => {
    call("/shopping", "DELETE",item).then((response) =>
    this.setState({ items: response.data })
    );
  };

  update = (item) => {
    call("/shopping","PUT",item).then((response) =>
    this.setState({items: response.data })
    );
  };

  constructor(props){
    super(props);
    this.state={
      items: [ ],
    };
    }


  render(){
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{margin: 16}}>
        <List>
          {this.state.items.map((item, idx) =>(
            <Todo item={item} key={item.id} 
            delete={this.delete}
            update ={this.update}
            />
          ))}
        </List>
      </Paper>
    );

        // 표만들기
        var todoRows = this.state.items.length > 0 && (
            <div>
              <table className="custom-table">
        <caption>Todo item List</caption>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>author</th>
            <th>userId</th>
            <th>삭제버튼</th>
          </tr>
        </thead>
        <tbody>
        {this.state.items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td>{item.userId}</td>
            <td> <button onClick={() => this.delete(item)} >Delete</button></td>
          </tr>
        ))}
        </tbody>
      </table> 
     </div>
        );
        
        

    return( 
    <div className="App">
      <Container maxWidth="md">
        <AddTodo add={this.add} />
        <div className="TodoList">
          {todoItems}
          {todoRows}
        </div>
        </Container>
        </div>
    );
  }

}

export default App;

