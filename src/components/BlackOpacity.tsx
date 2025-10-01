import { Box } from "./Box";

type BlackOpacityProps = {
  children?: React.ReactNode;
};

export const BlackOpacity = ({ children }: BlackOpacityProps) => {
  return (
    <Box
      position="absolute"
      width="100%"
      height="100%"
      backgroundColor="midnightBlack"
      opacity={0.25}
    >
      {children}
    </Box>
  );
};
