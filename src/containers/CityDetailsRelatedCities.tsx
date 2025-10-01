import { ScrollView, useWindowDimensions } from "react-native";
import { Box } from "../components/Box";
import { CityCard } from "../components/CityCard";
import { Text } from "../components/Text";
import { City } from "../data/types";
import { useRelatedCities } from "../data/useRelatedCities";
import { useAppTheme } from "../theme/useAppTheme";

type CityDetailsRelatedCitiesProp = Pick<City, "relatedCitiesIds">;

export function CityDetailsRelatedCities({
  relatedCitiesIds,
}: CityDetailsRelatedCitiesProp) {
  const cities = useRelatedCities(relatedCitiesIds);
  const { spacing } = useAppTheme();
  const { width, height } = useWindowDimensions();

  const cardWidth = width * 0.5;
  const cardHeight = height * 0.2;

  return (
    <Box style={{ paddingBottom: 28 }}>
      <Text variant="title22" mb="s16" paddingHorizontal="padding">
        Veja também
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: spacing.padding,
          paddingHorizontal: spacing.padding,
        }}
      >
        {cities.map((city) => (
          <CityCard
            key={city.id}
            cityPreview={city}
            style={{ width: cardWidth, height: cardHeight }}
          />
        ))}
      </ScrollView>
    </Box>
  );
}
