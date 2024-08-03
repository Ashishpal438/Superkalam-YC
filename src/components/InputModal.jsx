import {useState} from 'react';
import {View, Modal, StyleSheet, TextInput, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {addTransaction} from '../store/transactionSlice';

const Margin = () => <View style={{marginVertical: 5}}></View>;

const InputModal = ({isVisible, onClose}) => {
  const dispatch = useDispatch();
  const [destination, setDestination] = useState('');
  const [amount, setAmount] = useState('');
  const [card, setCard] = useState('');

  const handleAddTransaction = () => {
    const newTransaction = {
      destination: destination,
      amount: amount,
      time: Date.now(),
      type: 'transfer',
    };
    dispatch(addTransaction(newTransaction));

    setDestination('');
    setAmount('');
    setCard('');
  };
  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="slide"
      style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
      <View style={[styles.modalContainer]}>
        <View
          style={{
            paddingBottom: 20,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: 'white',
            height: '50%',
          }}>
          {/* Close Icon */}
          <View
            style={{
              margin: 10,
              paddingTop: 10,
            }}>
            <Icon
              name={'close'}
              onPress={onClose}
              style={{
                fontSize: 25,
                color: 'black',
                alignSelf: 'flex-end',
              }}
            />
          </View>

          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
            }}>
            <View style={styles.container}>
              <TextInput
                style={styles.input}
                placeholder="Destination Name"
                value={destination}
                onChangeText={setDestination}
              />
              <TextInput
                style={styles.input}
                placeholder="Amount"
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Card"
                value={card}
                onChangeText={setCard}
                keyboardType="numeric"
              />
              <Margin />
              <Margin />
              <Button title="Add Transaction" onPress={handleAddTransaction} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default InputModal;
