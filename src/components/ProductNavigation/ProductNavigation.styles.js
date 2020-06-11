import { colors, fontSizes } from "../Shared/sharedStyles";

export const styles = {
  parent: {
    border: `1px solid ${colors.lightGrey}`,
    display: "flex",
    justifyContent: "flexStart",
  },
  productLink: {
    fontSize: fontSizes.medium,
    borderRight: `1px solid ${colors.lightGrey}`,
    color: colors.darkGreyTransparent,
    padding: "15px 30px",
    letterSpacing: "1px",
    textAlign: "center",
    textDecoration: "none",
    lineHeight: "14px",
  },
};
// font-size: 14px;
