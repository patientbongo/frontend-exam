import { colors } from "../Shared/sharedStyles";

export const styles = {
  parent: {
    display: "flex",
    justifyContent: "center",
    borderTop: `2px solid ${colors.grey}`,
    borderBottom: `2px solid ${colors.grey}`,
  },
  list: {
    display: "flex",
    width: "35%",
    justifyContent: "space-around",
  },
  logoBackground: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    listStyle: "none",
    background: colors.blueGreenGradient,
    borderRadius: "50%",
    width: "40px",
    height: "40px",
  },
  socialLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.darkGrey,
    borderRadius: "50%",
    height: "90%",
    width: "90%",
  },
};
