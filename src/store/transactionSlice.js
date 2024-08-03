import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@transactions';

const saveTransactions = async newTransaction => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    const existingTransactions = jsonValue != null ? JSON.parse(jsonValue) : [];
    const updatedTransactions = [...existingTransactions, newTransaction];
    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedTransactions),
    );
  } catch (error) {
    console.error('Error saving transactions to AsyncStorage:', error);
  }
};
const loadTransactions = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : initialTransactions;
  } catch (error) {
    console.error('Error loading transactions from AsyncStorage:', error);
    return [];
  }
};

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async () => {
    const transactions = await loadTransactions();
    return transactions;
  },
);

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: [],
  },
  reducers: {
    addTransaction(state, action) {
      state.transactions.push(action.payload);
      saveTransactions(action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchTransactions.fulfilled, (state, action) => {
      state.transactions = action.payload;
    });
  },
});

export const {addTransaction} = transactionsSlice.actions;
export default transactionsSlice.reducer;
