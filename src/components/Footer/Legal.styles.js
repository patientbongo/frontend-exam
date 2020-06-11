import { colors, fontSizes } from "../Shared/sharedStyles";

export const styles = {
  parent: {
    display: "flex",
    justifyContent: "space-between",
    width: "50%",
  },
  link: {
    margin: "10px",
    textDecoration: "none",
    color: colors.whiteTransparent,
    letterSpacing: "0.3px",
    fontSize: fontSizes.medium,
  },
  linkContainer: {
    padding: "20px 0",
  },
};
