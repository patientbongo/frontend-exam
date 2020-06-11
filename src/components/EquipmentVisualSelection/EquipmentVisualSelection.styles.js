import { colors, fontSizes } from "../Shared/sharedStyles";

export const styles = {
  parent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    margin: "15px 0",
    letterSpacing: ".5px",
    fontSize: fontSizes.large,
    color: colors.lightGreyTransparent,
  },
  equipmentList: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 20px",
  },
};
