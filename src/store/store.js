import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import transactionsReducer, {loadTransactionsAsync} from './transactionSlice';

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

store.dispatch(loadTransactionsAsync());

export default store;
