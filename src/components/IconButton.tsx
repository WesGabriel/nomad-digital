import { Pressable, PressableProps } from "react-native";
import { useAppTheme } from "../theme/useAppTheme";
import { Box } from "./Box";
import { Icon, IconName } from "./Icon";

type IconButtonProps = {
  onPress: PressableProps["onPress"];
  iconName: IconName;
};

export function IconButton({ onPress, iconName }: IconButtonProps) {
  const { boxShadow } = useAppTheme();
  return (
    <Pressable onPress={onPress}>
      <Box
        backgroundColor="primary"
        borderRadius="rounded"
        justifyContent="center"
        alignItems="center"
        width={50}
        height={50}
        style={{ boxShadow: boxShadow.primary }}
      >
        <Icon name={iconName} color="pureWhite" />
      </Box>
    </Pressable>
  );
}
