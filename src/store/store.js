

import userReducer from './reducers/userReducer';
import revenueReducer from './reducers/revenueReducer';
import { createStore, applyMiddleware, compose ,combineReducers} from 'redux';
import thunk from 'redux-thunk';
const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;
const rootReducer = combineReducers({
   user:userReducer,
   revenues:revenueReducer
});
    

// function to store reducer state to local Storage
function saveToLocalStorage(state){
    try{
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state',serializedState)
    } catch(e){
    }
}

// functino to load State from local Storage on refresh 
function loadFromLocalStorage(){
    try{
        const serializedState  = localStorage.getItem('state')
        if(serializedState === null) return undefined
        return JSON.parse(serializedState);
    }catch(e){
        return undefined
    }
    
}
const persistedState = loadFromLocalStorage();
export const store = createStore(rootReducer, 
    persistedState,
    composeEnhancers(
    applyMiddleware(thunk)
    ));

    
store.subscribe(()=>saveToLocalStorage(store.getState()))