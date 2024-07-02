import { useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './BookingServiceStyle';
import { COLORS, SIZES, icons } from '../../../../constants';


const Product = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState('column');

  return (
    <PreviewLayout
      values={[
        { name: 'Trips', image: icons.Earth },
        { name: 'Hotel', image: icons.Hotel },
        { name: 'Transport', image: icons.Plane },
        { name: 'Event', image: icons.Event }
      ]}
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
      navigation={navigation}
    />
  );
};

const PreviewLayout = ({ values, selectedValue, setSelectedValue, navigation }) => {
  return (
    <View style={{ padding: 10, flex: 1 }}>
      <View style={styles.row}>
        {values.map(value => (
          <View style={{ flex: 1, alignItems: 'center' }}>
            <TouchableOpacity
              key={value.name}
              onPress={() => navigation.navigate(value.name)}
              style={[styles.button, selectedValue === value.name && styles.selected]}>
              <Image source={value.image} style={styles.productImage} />

            </TouchableOpacity>
            <Text>{value.name} </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Product;
