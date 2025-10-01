import { ScrollView } from "react-native";
import { Box } from "../components/Box";
import { CategoryPill } from "../components/CategoryPill";
import { SearchInput } from "../components/SearchInput";
import { Category } from "../data/types";

type CityFiltersProps = {
  categories: Category[];
  cityName: string;
  selectedCategoryId: string | null;
  onChangeCityName: (cityName: string) => void;
  onChangeSelectedCategoryId: (id: string | null) => void;
};

export function CityFilters({
  categories,
  cityName,
  selectedCategoryId,
  onChangeCityName,
  onChangeSelectedCategoryId,
}: CityFiltersProps) {
  return (
    <Box>
      <Box paddingHorizontal="padding">
        <SearchInput
          value={cityName}
          onChangeText={onChangeCityName}
          placeholder="Qual o seu próximo destino?"
        />
      </Box>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Box
          flexDirection="row"
          flexWrap="wrap"
          gap="s8"
          mt="s16"
          paddingHorizontal="padding"
        >
          {categories.map((category) => (
            <CategoryPill
              key={category.id}
              isActive={category.id === selectedCategoryId}
              category={category}
              onPress={() =>
                onChangeSelectedCategoryId(
                  category.id === selectedCategoryId ? null : category.id
                )
              }
            />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}
