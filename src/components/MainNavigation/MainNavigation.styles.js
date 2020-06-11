import { colors, fontSizes } from "../Shared/sharedStyles";

export const styles = {
  parent: {
    display: "flex",
    justifyContent: "space-between",
  },
  linkContainer: {
    display: "flex",
  },
  mainNavigationLinks: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: fontSizes.medium,
    color: colors.darkGreyTransparent,
    padding: "15px 30px",
    letterSpacing: "1px",
    lineHeight: "14px",
    textDecoration: "none",
  },
  logo: {
    padding: "20px 30px",
  },
  logoContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    // marginRight: "auto",
  },

  button: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: "30px",
  },
};

// box-shadow: 0 1px 2px 0 rgba(46,49,52,0.40);
// background: rgba(46,49,52,0.80);

// background: #0096D6;
// letter-spacing: 1px;
// text-align: center;
// line-height: 14px;

// letter-spacing: 0.5px;
// line-height: 16px;
