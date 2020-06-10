import { colors } from "../Shared/sharedStyles";

export const styles = {
  contentContainer: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  image: {
    width: "100%",
    filter: "contrast(125%) brightness(79%)",
  },
  parent: {
    border: "1px solid black",
    position: "relative",
  },
  title: {
    color: colors.white,
  },
};
