import { Accordion } from "../components/Accordion";
import { Box } from "../components/Box";
import { Text } from "../components/Text";
import { City } from "../data/types";

type CityDetailsTouristAttractionsProps = Pick<City, "touristAttractions">;

export function CityDetailsTouristAttractions({
  touristAttractions,
}: CityDetailsTouristAttractionsProps) {
  return (
    <Box padding="padding">
      <Text variant="title22" mb="s8">
        Pontos Turísticos
      </Text>
      <Box gap="s8">
        {touristAttractions.map((attraction) => (
          <Accordion
            key={attraction.id}
            title={attraction.name}
            description={attraction.description}
          />
        ))}
      </Box>
    </Box>
  );
}
