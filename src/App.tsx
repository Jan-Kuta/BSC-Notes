import React from 'react';
import {Router, Redirect, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import {NoteList} from './components/NoteList';
import {NoteDetail} from './components/NoteDetail';
import {NoteEdit} from './components/NoteEdit';
import {store, history} from './redux/rootReducer';


const App = () => {
  return (
    <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={NoteList} />
            <Route path="/:id" exact component={NoteDetail} />
            <Route path="/:id/edit" component={NoteEdit} />

            // Redirect all 404's to home
            <Redirect to='/' />
          </Switch>
        </Router>
    </Provider>
  );
};

export default App;
