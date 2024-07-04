import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from './NavigatePageStyle';
import { COLORS, SIZES, icons } from "../../../../constants";

const NavigatePage = () => {
  const [flexDirection, setflexDirection] = useState('column');

  return (
    <PreviewLayout
      values={[
        { name: 'HomePage', image: icons.Tab },
        { name: 'BookingPage', image: icons.Booking },
        { name: 'BellPage', image: icons.Bell },
        { name: 'ProfilePage', image: icons.user}
      ]}
      selectedValue={flexDirection}
      setSelectedValue={setflexDirection}>

    </PreviewLayout>
  );
}


const PreviewLayout = ({
  values,
  selectedValue,
  setSelectedValue
}) => {
  const navigation = useNavigation();
  return (
    <View style={{ padding: 10, flex: 1,backgroundColor:'white' }}>

      <View style={styles.row}>
        {values.map(value => (
          <TouchableOpacity
            key={value.name}
            onPress={() => {
              if (selectedValue !== value.name) {
                navigation.navigate(value.name);
              }
            }}
            style={[styles.button, selectedValue === value.name && styles.selected]}>
            <Image source={value.image} style={styles.productImage} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default NavigatePage;