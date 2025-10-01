import { PropsWithChildren } from "react";
import { ScrollView, View } from "react-native";
import { Box, BoxProps } from "./Box";

export function Screen({
  children,
  scrollable = false,
  ...boxProps
}: PropsWithChildren & BoxProps & { scrollable?: boolean }) {
  const IsScrollable = scrollable ? ScrollView : View;

  return (
    <Box
      flex={1}
      backgroundColor="background"
      paddingHorizontal="padding"
      {...boxProps}
    >
      <IsScrollable>{children}</IsScrollable>
    </Box>
  );
}
