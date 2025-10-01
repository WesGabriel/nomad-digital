import { useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import { useAppTheme } from "../theme/useAppTheme";
import { Box, BoxProps } from "./Box";
import { IconButton } from "./IconButton";

type SearchInputProps = {} & Pick<
  TextInputProps,
  "onChangeText" | "value" | "placeholder"
>;

export function SearchInput({
  value,
  onChangeText,
  placeholder,
}: SearchInputProps) {
  const { colors, textVariants } = useAppTheme();
  const [isFocused, setIsFocused] = useState(false);

  function handleCleanText() {
    if (value!.length > 0) {
      onChangeText?.("");
    }
  }

  return (
    <Box
      {...boxStyles}
      style={{
        borderColor: isFocused ? colors.primary : colors.gray1,
      }}
    >
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          ...textVariants.text16,
          color: colors.text,
          width: "100%",
          height: "100%",
          flexShrink: 1,
        }}
      />
      <IconButton
        iconName={value!.length > 0 ? "Close" : "Search-outline"}
        onPress={handleCleanText}
      />
    </Box>
  );
}

const boxStyles: BoxProps = {
  flexDirection: "row",
  alignItems: "center",
  padding: "s8",
  paddingLeft: "s16",
  justifyContent: "space-between",
  backgroundColor: "gray1",
  height: 70,
  borderRadius: "rounded",
  borderWidth: 2,
};
