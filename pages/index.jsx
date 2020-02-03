/**
 * @file 
 * HomePage
 *
 * This is the homepage of the site, everything happens here
 */


import React, { useState } from 'react';
import Api from '../utils/Api';
import { Layout } from '../components/Template'
import ToDoListModule from '../components/Modules/ToDoListModule'

const HomePage = props => {
  const [users, setUsers] = useState(props.users);
  const [list, setList] = useState(props.list);

  const filterAction = async (filters, sort = null) => {
    const newProps = await HomePage.loadTable(filters, sort);
    setUsers(newProps.users);
    setList(newProps.list);
  }

  return (
    <Layout>
      <ToDoListModule onUpdate={filterAction} users={users} rows={list} />
    </Layout>
  );
}

HomePage.loadTable = async (filters = null, sort = null) => {
  let todoFilterObject = null;
  if (filters !== null && Object.keys(filters).length > 0) {
    todoFilterObject = {
      ...filters
    };
  }
  const toDos_data = await Api.getTodos(todoFilterObject);
  const users_data = await Api.getUsers();
  let list = toDos_data.map(x => {
    x.user = users_data.find(o => o.id === x.userId)
    return x;
  });
  if (sort !== null) {
    let order = (sort === true) ? -1 : 1;
    list = list.sort((x, y) => (x.completed > y.completed) ? order : order * -1);
  }

  return { list, users: users_data };
}

HomePage.getInitialProps = async () => {
  return await HomePage.loadTable();
};

export default HomePage;
