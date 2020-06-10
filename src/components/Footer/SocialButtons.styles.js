import { colors } from "../Shared/sharedStyles";

export const styles = {
  parent: { display: "flex", justifyContent: "center" },
  list: {
    padding: "0px",
    display: "flex",
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
  logo: {},
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
