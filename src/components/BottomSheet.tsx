import { PropsWithChildren } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

export type BottomSheetProps = {
  onPress: VoidFunction;
  isOpen: SharedValue<boolean>;
  duration?: number;
};

export const BottomSheet = ({
  children,
  onPress,
  isOpen,
  duration = 600,
}: PropsWithChildren<BottomSheetProps>) => {
  const height = useSharedValue(0);
  const progress = useDerivedValue(() =>
    withTiming(isOpen.value ? 0 : 1, { duration })
  );
  const sheetAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: progress.value * height.value,
      },
    ],
    zIndex: 2,
  }));
  const backdropAnimatedStyles = useAnimatedStyle(() => ({
    opacity: 1 - progress.value,
    zIndex: isOpen.value
      ? 1
      : withDelay(duration, withTiming(-1, { duration: 0 })),
  }));

  return (
    <>
      <Animated.View style={[styles.backdrop, backdropAnimatedStyles]}>
        <TouchableOpacity style={{ flex: 1 }} onPress={onPress} />
      </Animated.View>
      <Animated.View
        style={[styles.sheet, sheetAnimatedStyle]}
        onLayout={(event) => {
          height.value = event.nativeEvent.layout.height;
        }}
      >
        {children}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  sheet: {
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
});
