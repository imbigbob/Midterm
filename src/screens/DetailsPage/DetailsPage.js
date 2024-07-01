// import { View, Text, TouchableOpacity, Image } from "react-native";
// import { COLORS, SIZES, icons } from "../../../constants";
// import { useNavigation } from "@react-navigation/native";
// import styles from "./DetailsPageStyle";
// import { useState, useEffect } from "react";
// import { PreviewLayoutCup, PreviewLayout } from "../../components/DetailsPage/CompoDetails";

// const DetailsPage = ({ route }) => {
//   const { name } = route.params;
//   const navigation = useNavigation();
//   const [count, setCount] = useState(0);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [selectedShot, setSelectedShot] = useState(null);
//   const [selectedIce, setSelectedIce] = useState(null);
//   const [selectedCup, setSelectedCup] = useState(null);
//   const [totalPrice, setTotalPrice] = useState(0);

//   const prices = {
//     sizes: {
//       S: 2.5,
//       M: 3.5,
//       L: 4.5,
//     },
//     shots: {
//       single: 0.5,
//       double: 1.0,
//     },
//     cups: {
//       champerPot: 1.0,
//       plasticCupStraw: 0.5,
//     },
//   };

//   useEffect(() => {
//     const calculatePrice = () => {
//       let price = 0;
//       if (count > 0 && selectedSize && selectedShot && selectedCup) price +=
//         prices.sizes[selectedSize] +
//         prices.shots[selectedShot] +
//         prices.cups[selectedCup];
//       setTotalPrice(price);
//     };

//     calculatePrice();
//   }, [count, selectedSize, selectedShot, selectedCup]);

//   const handleAddToCart = () => {
//     const cartItem = {
//       name,
//       count,
//       selectedSize,
//       selectedShot,
//       selectedIce,
//       selectedCup,
//       totalPrice,
//     };
//     navigation.navigate('MyCartPage', { cartItem });
//   };

//   return (
//     <View style={{ flex: 1, padding: '1%' }}>
//       <View style={{ flex: 4 }}>
//         <Image source={icons[name]} style={styles.productImage} />
//       </View>

//       <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
//         <Text style={[styles.countText, { minWidth: '40%' }]}>{name}</Text>

//         <TouchableOpacity style={styles.buttonStyle} onPress={() => setCount(count > 0 ? count - 1 : 0)}>
//           <Text style={styles.sign}>-</Text>
//         </TouchableOpacity>

//         <Text style={[styles.countText, { marginLeft: '5%', marginRight: '5%' }]}>{count}</Text>

//         <TouchableOpacity style={styles.buttonStyle} onPress={() => setCount(count + 1)}>
//           <Text style={styles.sign}>+</Text>
//         </TouchableOpacity>

//       </View>

//       <View style={{ flex: 1, flexDirection: 'row' }}>
//         <Text style={[styles.countText, { minWidth: '40%' }]}>Shot</Text>
//         <PreviewLayout
//           values={['single', 'double']}
//           selectedValue={selectedShot}
//           setSelectedValue={setSelectedShot}
//         />
//       </View>

//       <View style={{ flex: 1, flexDirection: 'row' }}>
//         <Text style={[styles.countText, { minWidth: '40%' }]}>Select</Text>
//         <PreviewLayoutCup
//           values={[
//             { name: 'champerPot', image: icons.champerPot },
//             { name: 'plasticCupStraw', image: icons.plasticCupStraw },
//           ]}
//           selectedValue={selectedCup}
//           setSelectedValue={setSelectedCup} />
//       </View>
//       <View style={{ flex: 1, flexDirection: 'row' }}>
//         <Text style={[styles.countText, { minWidth: '40%' }]}>Size</Text>
//         <PreviewLayoutCup values={[
//           { name: 'S', image: icons.plasticCup },
//           { name: 'M', image: icons.plasticCup },
//           { name: 'L', image: icons.plasticCup },]}
//           selectedValue={selectedSize}
//           setSelectedValue={setSelectedSize} />
//       </View>
//       <View style={{ flex: 1, flexDirection: 'row' }}>
//         {totalPrice > 0 && (
//           <View style={{ flex: 1, flexDirection: 'row', alignContent: 'space-between', flexWrap: 'wrap', }}>
//             <Text style={styles.totalPriceText}>Total Price: ${totalPrice}</Text>
//             <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
//               <Text style={styles.addToCartText}>Add to Cart</Text>
//             </TouchableOpacity>
//           </View>

//         )}
//       </View>
//     </View>
//   );
// };


// export default DetailsPage;
