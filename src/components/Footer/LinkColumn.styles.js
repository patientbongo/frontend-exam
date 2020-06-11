import { colors, fontSizes } from "../Shared/sharedStyles";

export const styles = {
  parent: {
    display: "flex",
    flexDirection: "column",
    padding: "50px 100px",
  },
  header: {
    color: colors.whiteTransparent,
    letterSpacing: "0.3px",
    fontSize: fontSizes.medium,
  },
  link: {
    textDecoration: "none",
    color: colors.whiteTransparent,
    letterSpacing: "0.3px",
    fontSize: fontSizes.medium,
  },
  list: {
    listStyle: "none",
  },
  listItem: {
    padding: "12px 0",
  },
};
