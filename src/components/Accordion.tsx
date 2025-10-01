import { Pressable, StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import theme from "../theme/theme";
import { useAppTheme } from "../theme/useAppTheme";
import { Box } from "./Box";
import { Text } from "./Text";

type AccordionProps = {
  title: string;
  description: string;
};

export const Accordion = ({ title, description }: AccordionProps) => {
  const isOpen = useSharedValue(false);
  const progress = useSharedValue(0); // 0 => 1

  const handleOpenPress = () => {
    isOpen.value = !isOpen.value;
    progress.value = withTiming(isOpen.value ? 0 : 1, { duration: 500 });
  };

  return (
    <Pressable onPress={handleOpenPress}>
      <View>
        <AccordionHeader title={title} progress={progress} />
        <AccordionContent
          description={description}
          isOpen={isOpen}
          progress={progress}
        />
      </View>
    </Pressable>
  );
};

const AccordionHeader = ({
  title,
  progress,
}: {
  title: string;
  progress: SharedValue<number>;
}) => {
  const { colors, borderRadii } = useAppTheme();
  const iconAnimatedStyle = useAnimatedStyle(() => ({
    tintColor: interpolateColor(
      progress.value,
      [0, 1],
      [colors.gray2, colors.primary]
    ),
    transform: [
      {
        rotate: interpolate(progress.value, [0, 1], [0, -180]) + "deg",
      },
    ],
  }));
  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0, 1],
      [colors.transparent, colors.gray1]
    ),
    borderBottomLeftRadius: interpolate(
      progress.value,
      [0, 1],
      [borderRadii.default, 0]
    ),
    borderBottomRightRadius: interpolate(
      progress.value,
      [0, 1],
      [borderRadii.default, 0]
    ),
  }));

  return (
    <Animated.View style={[styles.accordionHeader, animatedStyle]}>
      <Box flexShrink={1}>
        <Text variant="text16">{title}</Text>
      </Box>
      <Animated.Image
        source={require("@/assets/images/chevron-down.png")}
        style={[iconAnimatedStyle, { width: 24, height: 24 }]}
      />
    </Animated.View>
  );
};

const AccordionContent = ({
  description,
  isOpen,
  progress,
}: {
  description: string;
  isOpen: SharedValue<boolean>;
  progress: SharedValue<number>;
}) => {
  const { borderRadii } = useAppTheme();
  const height = useSharedValue(0);

  //   const derivedHeight = useDerivedValue(() =>
  //     withTiming(height.value * Number(isOpen.value), {
  //       duration: 500,
  //     })
  //   );

  const animedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(progress.value, [0, 1], [0, 1]),
      height: interpolate(progress.value, [0, 1], [0, height.value]),
      borderTopLeftRadius: interpolate(
        progress.value,
        [0, 1],
        [borderRadii.default, 0]
      ),
      borderTopRightRadius: interpolate(
        progress.value,
        [0, 1],
        [borderRadii.default, 0]
      ),
      // height: isOpen.value
      //   ? withTiming(height.value, { duration: 500 })
      //   : withTiming(0, { duration: 500 }),
    };
  });

  return (
    /**
     * Removeria o animedStyle e usuária o derivedHeight desta forama "{[{ overflow: "hidden", height: derivedHeight }]}"
     */
    <Animated.View style={[animedStyle, { overflow: "hidden" }]}>
      <View
        style={styles.accordionContent}
        onLayout={(event) => {
          height.value = event.nativeEvent.layout.height;
        }}
      >
        <Text>{description}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderWidth: 2,
    borderColor: theme.colors.gray1,
    borderRadius: theme.borderRadii.default,
  },
  accordionContent: {
    position: "absolute",
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.gray1,
    borderBottomLeftRadius: theme.borderRadii.default,
    borderBottomRightRadius: theme.borderRadii.default,
  },
});
