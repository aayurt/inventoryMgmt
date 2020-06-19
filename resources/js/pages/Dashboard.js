import React, { Component } from 'react';
import { connect } from 'react-redux';
import Http from '../Http';
import {Button} from '@material-ui/core';
class Dashboard extends Component {
  constructor(props) {
    super(props);

    // Initial state.
    this.state = {
      todo: null,
      error: false,
      data: [],
    };

    // API endpoint.
    this.api = '/api/v1/todo';
  }

  componentDidMount() {
    Http.get(`${this.api}?status=open`)
      .then((response) => {
        const { data } = response.data;
        this.setState({
          data,
          error: false,
        });
      })
      .catch(() => {
        this.setState({
          error: 'Unable to fetch data.',
        });
      });
  }

  // handleChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { todo } = this.state;
  //   this.addTodo(todo);
  // };

  // addTodo = (todo) => {
  //   Http.post(this.api, { value: todo })
  //     .then(({ data }) => {
  //       const newItem = {
  //         id: data.id,
  //         value: todo,
  //       };
  //       const allTodos = [newItem, ...this.state.data];
  //       this.setState({ data: allTodos, todo: null });
  //       this.todoForm.reset();
  //     })
  //     .catch(() => {
  //       this.setState({
  //         error: 'Sorry, there was an error saving your to do.',
  //       });
  //     });
  // };

  // closeTodo = (e) => {
  //   const { key } = e.target.dataset;
  //   const { data: todos } = this.state;

  //   Http.patch(`${this.api}/${key}`, { status: 'closed' })
  //     .then(() => {
  //       const updatedTodos = todos.filter(
  //         (todo) => todo.id !== parseInt(key, 10),
  //       );
  //       this.setState({ data: updatedTodos });
  //     })
  //     .catch(() => {
  //       this.setState({
  //         error: 'Sorry, there was an error closing your to do.',
  //       });
  //     });
  // };

  render() {
    const { data, error } = this.state;

    return (
     <></>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
  user: state.Auth.user,
});

export default connect(mapStateToProps)(Dashboard);
