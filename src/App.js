import React from 'react';
import Nav from "./components/Nav/Nav";
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, withRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ContentContainer from './components/Profile/ContentContainer';
import NewsContainer from './components/News/NewsContainer';
import NewContentContainer from './components/News/NewContentContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeAuth } from './Redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/Preloader/Preloader';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/redux-store';
import { withSuspense } from './hoc/withSuspense';

// import DialogsContainer from './components/Dialogs/DialogsContainer';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeAuth();
  }

  render() {

    if (!this.props.initialized) { return (<Preloader />) }

    return (
      <div className="wrapper">
        <HeaderContainer />
        <Nav />
        <div className="wrapper-content">
          <Route path="/profile/:userId?" render={() => <ContentContainer />} />
          <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
          <Route path="/news" render={() => <NewsContainer />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/newcontent/:newId" render={() => <NewContentContainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

const AppRouter = compose(
  withRouter,
  connect(mapStateToProps, { initializeAuth })
)(App);

const SocialApp = (props) => {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </BrowserRouter>
}

export default SocialApp;
