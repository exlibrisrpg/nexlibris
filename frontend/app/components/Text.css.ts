import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";

export const text = recipe({
  base: {
    margin: 0,
  },
  variants: {
    size: {
      ["1"]: {
        fontSize: "12px",
        letterSpacing: "0.0025em",
        lineHeight: "16px"
      },
      ["2"]: {
        fontSize: "14px",
        letterSpacing: "0em",
        lineHeight: "20px"
      },
      ["3"]: {
        fontSize: "16px",
        letterSpacing: "0em",
        lineHeight: "24px"
      },
      ["4"]: {
        fontSize: "18px",
        letterSpacing: "-0.0025em",
        lineHeight: "26px"
      },
      ["5"]: {
        fontSize: "20px",
        letterSpacing: "-0.005em",
        lineHeight: "28px"
      },
      ["6"]: {
        fontSize: "24px",
        letterSpacing: "-0.00625em",
        lineHeight: "30px"
      },
      ["7"]: {
        fontSize: "28px",
        letterSpacing: "-0.0075em",
        lineHeight: "36px"
      },
      ["8"]: {
        fontSize: "35px",
        letterSpacing: "-0.01em",
        lineHeight: "40px"
      },
      ["9"]: {
        fontSize: "60px",
        letterSpacing: "-0.025em",
        lineHeight: "60px"
      },
    },
    weight: {
      light: {
        fontWeight: 300
      },
      regular: {
        fontWeight: 400
      },
      medium: {
        fontWeight: 500
      },
      bold: {
        fontWeight: 700
      },
    }
  },
})

export type TextVariants = RecipeVariants<typeof text>;
