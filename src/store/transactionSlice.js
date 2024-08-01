import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@transactions';

const loadTransactions = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error loading transactions from AsyncStorage:', error);
    return [];
  }
};

const saveTransactions = async transactions => {
  try {
    const jsonValue = JSON.stringify(transactions);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (error) {
    console.error('Error saving transactions to AsyncStorage:', error);
  }
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: [],
  },
  reducers: {
    addTransaction(state, action) {
      state.transactions.push(action.payload);
      saveTransactions(state.transactions);
    },
    setTransactions(state, action) {
      state.transactions = action.payload;
      saveTransactions(state.transactions);
    },
  },
});

export const {addTransaction, setTransactions} = transactionsSlice.actions;
export default transactionsSlice.reducer;

// Async thunk action to load transactions initially
export const loadTransactionsAsync = () => async dispatch => {
  const loadedTransactions = await loadTransactions();
  dispatch(setTransactions(loadedTransactions));
};
