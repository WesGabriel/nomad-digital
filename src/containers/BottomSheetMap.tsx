import { useWindowDimensions } from "react-native";
import MapView from "react-native-maps";
import { BottomSheet, BottomSheetProps } from "../components/BottomSheet";
import { Box } from "../components/Box";
import { IconButton } from "../components/IconButton";
import { City } from "../data/types";
import { useAppTheme } from "../theme/useAppTheme";

type BottomSheetMapProp = Omit<BottomSheetProps, "children"> & {
  location: City["location"];
};

export const BottomSheetMap = ({
  location,
  ...bottomSheetProps
}: BottomSheetMapProp) => {
  const { spacing } = useAppTheme();
  const { height } = useWindowDimensions();
  return (
    <BottomSheet {...bottomSheetProps}>
      <MapView
        style={{
          width: "100%",
          height: height * 0.7,
        }}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Box position="absolute" top={spacing.padding} right={spacing.padding}>
        <IconButton iconName="Close" onPress={bottomSheetProps.onPress} />
      </Box>
    </BottomSheet>
  );
};
