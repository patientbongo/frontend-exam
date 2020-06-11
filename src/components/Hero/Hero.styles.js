import { colors, fontSizes } from "../Shared/sharedStyles";

export const styles = {
  contentContainer: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    textAlign: "center",
  },
  image: {
    width: "100%",
    filter: "contrast(125%) brightness(80%)",
  },
  parent: {
    position: "relative",
    backgroundColor: colors.veryLightGrey,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.hero,
  },
};
