import { colors, fontSizes } from "../Shared/sharedStyles";

export const styles = {
  parent: {
    flex: "0 1 calc(25%)",
  },
  author: {
    width: "30px",
    height: "30px",
    padding: "15px",
  },
  details: {
    padding: "15px",
  },
  detailsLink: {
    color: colors.blue,
    fontSize: fontSizes.medium,
    fontWeight: 600,
    letterSpacing: "0.3px",
    textDecoration: "none",
  },
  image: {
    width: "100%",
  },
  imageContainer: {
    position: "relative",
    display: "flex",
  },
  body: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    color: colors.darkGrey,
    fontSize: fontSizes.medium,
    fontWeight: 700,
    margin: "5px",
    letterSpacing: "0.3px",
  },
  workouts: {
    position: "absolute",
    backgroundColor: "rgba(0,12,40,0.54)",
    width: "38%",
    height: "100%",
    right: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  workoutText: {
    color: colors.white,
    fontSize: fontSizes.small,
    fontWeight: 700,
    letterSpacing: "0.3px",
    padding: "10px 0",
  },
  workoutTextCount: {
    color: colors.white,
    fontSize: fontSizes.extraLarge,
    // fontWeight: 700,
  },
  workoutTextIcon: {},
};
