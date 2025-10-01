import { Category, CityPreview, TouristAttraction } from "../data/types";
import { supabase } from "./supabase";

async function findAll(): Promise<CityPreview[]> {
  const { data } = await supabase.from("cities").select("*");

  if (!data) {
    return [];
  }

  return data.map((row) => ({
    id: row.id,
    name: row.name,
    country: row.country,
    coverImage: row.cover_image,
    description: row.description,
    touristAttractions: row.tourist_attractions as TouristAttraction[],
    location: {
      latitude: row.location.latitude,
      longitude: row.location.longitude,
    },
    categories: row.categories as Category[],
    relatedCitiesIds: row.related_cities_ids as string[],
  }));
}

export const supabaseService = {};
