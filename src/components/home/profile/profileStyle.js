import { Dimensions,StyleSheet, useWindowDimensions } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    borderRadius: SIZES.small / 1.25,

    marginLeft:'10%',
    marginTop:'2%',
  },
  btnImg: (Dimensions) => ({
    width: useWindowDimensions,
    height: useWindowDimensions,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;
