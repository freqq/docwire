import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunkMiddleware from 'redux-thunk';

import commonReducer from 'common/reducers';
import messagesReducer from 'messages-page/reducers';
import diagnoseReducer from 'initial-diagnose/reducers';
import videoConversationReducer from 'video-conversation-page/reducers';
import dashboardReducer from 'dashboard-page/reducers';
import patientReducer from 'patient-details-page/reducers';
import doctorReducer from 'doctor-details-page/reducers';
import appointmentsListReducer from 'appointments-page/reducers';
import appointmentDetailsReducer from 'appointment-details-page/reducers';

export const history = createBrowserHistory();

const middleware = [thunkMiddleware, routerMiddleware(history)];

let composeEnhancers = compose;

if (
  process.env.NODE_ENV === 'development' &&
  typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function'
) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
}

const rootReducer = combineReducers({
  router: connectRouter(history),
  common: commonReducer,
  call: videoConversationReducer,
  messages: messagesReducer,
  diagnose: diagnoseReducer,
  dashboard: dashboardReducer,
  patient: patientReducer,
  doctor: doctorReducer,
  appointmentsList: appointmentsListReducer,
  appointmentDetails: appointmentDetailsReducer,
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
