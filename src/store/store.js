import {configureStore} from '@reduxjs/toolkit';
import transactionsReducer from './transactionSlice';

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});

export default store;
