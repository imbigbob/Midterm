const COLORS = {
  primary: "#312651",
  secondary: "#444262",
  tertiary: "#FF7754",

  gray: "#83829A",
  gray2: "#C1C0C8",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",



  colorWhite: "#fff",
  bardilBlack1: "#001833",
  colorWhitesmoke_100: "#f7f8fb",
  colorWhitesmoke_200: "#f4f5f7",
  colorGainsboro_100: "#d8d8d8",
  colorGainsboro_200: "rgba(216, 216, 216, 0.4)",
  black: "#000",
  colorDarkslategray_100: "#324a59",
  colorDarkslategray_200: "rgba(50, 74, 89, 0.6)",
  colorDarkslategray_300: "rgba(50, 74, 89, 0.5)",
  colorDarkslategray_400: "rgba(50, 74, 89, 0.22)",
  bardilOrange1: "#ff7465",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};
export const FontFamily = {
  poppinsMedium: "Poppins-Medium",
  dMSansMedium: "DMSans-Medium",
  poppinsSemiBold: "Poppins-SemiBold",
  sFProText: "SF Pro Text",
  poppinsRegular: "Poppins-Regular",
};
const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
