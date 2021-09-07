import { object, string } from "prop-types";
import React from "react";
import { getTheme } from "@utils";
import { Box } from "@elements";

export default function SimpleCard({ text }) {
  return (
    <Box
      backgroundColor={getTheme("colors.primary")}
      color={getTheme("colors.text.light")}
    >
      {text /* <Title></Title> */}
    </Box>
  );
}

SimpleCard.propTypes = {
  text: string,
  theme: object,
};
