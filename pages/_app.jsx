/**
 * @file 
 * _app
 *
 * This file helps us loading the standard information for other parts of the site
 */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import HomePage from './index'

export default function ToDoList({ Component, pageProps }) {
  return <HomePage {...pageProps} />
}
