/**
 * @file 
 * ToDoList main table
 */

import React, {useState} from 'react';
import { Table } from 'reactstrap';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';
import EditTask from "./EditTask";

const Listing = props => {
  const [editId, setEditId] = useState(0);

  const onClose = () => {
    setEditId(0);
  }

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Title</th>
            <th className="centeredCell">Completed</th>
            <th className="centeredCell">Edit</th>
            <th className="centeredCell">Remove</th>
          </tr>
        </thead>
        <tbody>
          {props.rows && props.rows.map(row => (
            <tr key={row.id}>
              <th scope="row">{row.id}</th>
              <td>{row.user.name}</td>
              <td>{row.title}</td>
              <td className="centeredCell">{(row.completed) ? "YES" : "NO"}</td>
              <td className="centeredCell iconButton"><FaPencilAlt alt="Edit" onClick={() => { setEditId(row.id) }} /></td>
              <td className="centeredCell iconButton iconRed"><FaTrashAlt alt="Remove" onClick={() => { props.removeItem(row.id) }} /></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <EditTask editId={editId} updateItem={props.updateItem} users={props.users} onClose={onClose} />
    </>
  );
};

export default Listing;
