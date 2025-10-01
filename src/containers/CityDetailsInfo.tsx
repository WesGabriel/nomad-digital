import { Box } from "../components/Box";
import { Text } from "../components/Text";
import { City } from "../data/types";

type CityDetailsInfoProps = Pick<City, "name" | "country" | "description">;

export function CityDetailsInfo({
  name,
  country,
  description,
}: CityDetailsInfoProps) {
  return (
    <Box padding="padding">
      <Text variant="title28">{name}</Text>
      <Text variant="text18" marginTop="s4">
        {country}
      </Text>
      <Text variant="text14" marginTop="s24" style={{ textAlign: "justify" }}>
        {description}
      </Text>
    </Box>
  );
}
