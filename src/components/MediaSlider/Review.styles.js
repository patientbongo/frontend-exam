import { colors, fontSizes } from "../Shared/sharedStyles";

export const styles = {
  parent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    marginTop: "30px",
  },
  quote: {
    fontSize: fontSizes.medium,
    color: colors.lightGreyTransparent,
    marginBottom: "30px",
    textAlign: "center",
    width: "80%",
    letterSpacing: "0.3px",
    lineHeight: "24px",
  },
};
