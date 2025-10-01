import { Pressable, PressableProps } from "react-native";
import { Box, BoxProps } from "./Box";
import { Icon, IconName } from "./Icon";
import { Text } from "./Text";

export type PillProps = {
  label: string;
  iconName: IconName;
  isActive: boolean;
  onPress?: PressableProps["onPress"];
};

/**
 * A altura do pill é a soma do tamanho do ícone, padding e largura da borda.
 * Isso é usado para calcular a marginTop do Pill para centralizá-lo verticalmente.
 */
export const PILL_HEIGHT = 36;

export function Pill({ iconName, label, isActive, onPress }: PillProps) {
  return (
    <Pressable onPress={onPress}>
      <Box {...boxStyles} backgroundColor={isActive ? "gray1" : "transparent"}>
        <Icon
          name={iconName}
          size={16}
          color={isActive ? "primary" : "gray2"}
        />
        <Text ml="s4" variant="text12">
          {label}
        </Text>
      </Box>
    </Pressable>
  );
}

const boxStyles: BoxProps = {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: "s8",
  paddingHorizontal: "s12",
  borderColor: "gray1",
  borderRadius: "rounded",
  borderWidth: 2,
};
