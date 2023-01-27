import { Grid, styled } from "@nextui-org/react";
import { StyledCardBlur } from "../primitives";

export const FeatureItem = styled(Grid, StyledCardBlur, {
  transition: "$default",
  minWidth: "100%",
  "& .icon-wrapper": {
    dflex: "center",
    background: "rgb(42,22,60)",
    br: "$pill",
    p: "$4",
  },
  variants: {
    clickable: {
      true: {
        cursor: "pointer",
        "&:hover": {
          opacity: 0.8,
        },
      },
    },
  },
});
