import { createStore, appyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './rootReducer';

const enhancer = compose(appyMiddleware(thunk));

export default createStore(reducers, enhancer);