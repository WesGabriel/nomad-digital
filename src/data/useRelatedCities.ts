import { cities } from "./cities";
import { CityPreview } from "./types";

export function useRelatedCities(relatedCitiesIds: string[]): CityPreview[] {
  return cities.filter((city) => relatedCitiesIds.includes(city.id));
}
