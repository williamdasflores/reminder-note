import { combineReducers } from 'redux';
import reminderNoteReducer from './reminderNoteReducer';

export default combineReducers({
    reminderNote: reminderNoteReducer
}); 