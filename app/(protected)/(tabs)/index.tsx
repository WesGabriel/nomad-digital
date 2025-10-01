import { Box } from "@/src/components/Box";
import { CityCard } from "@/src/components/CityCard";
import { Screen } from "@/src/components/Screens";
import { CityFilters } from "@/src/containers/CityFilters";
import { categories } from "@/src/data/categories";
import { CityPreview } from "@/src/data/types";
import { useCities } from "@/src/data/useCities";
import { useDebounce } from "@/src/hooks/useDebounce";
import { useAppTheme } from "@/src/theme/useAppTheme";
import { useScrollToTop } from "@react-navigation/native";
import { useRef, useState } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { spacing } = useAppTheme();
  const { top } = useSafeAreaInsets();
  const [cityName, setCityName] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );
  const debounceCityName = useDebounce(cityName, 500);
  const { cityPreviewList } = useCities({
    name: debounceCityName,
    categoryId: selectedCategoryId,
  });

  const flatListRef = useRef(null);
  useScrollToTop(flatListRef);

  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return (
      <Box paddingHorizontal="padding">
        <CityCard cityPreview={item} />;
      </Box>
    );
  }

  return (
    <Screen style={{ paddingHorizontal: 0 }}>
      <FlatList
        ref={flatListRef}
        contentContainerStyle={{
          gap: spacing.padding,
          paddingTop: top,
          paddingBottom: spacing.padding,
        }}
        data={cityPreviewList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <CityFilters
            categories={categories}
            cityName={cityName}
            onChangeCityName={setCityName}
            selectedCategoryId={selectedCategoryId}
            onChangeSelectedCategoryId={setSelectedCategoryId}
          />
        }
      />
    </Screen>
  );
}
