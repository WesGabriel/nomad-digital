import { Box, BoxProps } from "./Box";

export const Divider = (boxProps: BoxProps) => {
  return (
    <Box marginVertical="s24" {...boxProps}>
      <Box
        alignItems="center"
        width="100%"
        height={1}
        backgroundColor="gray1"
      />
    </Box>
  );
};
