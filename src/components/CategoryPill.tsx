import { Category, CategoryCode } from "../data/types";
import { IconName } from "./Icon";
import { Pill, PillProps } from "./Pill";

export type CategoryPillProps = {
  category: Category;
} & Pick<PillProps, "isActive" | "onPress">;

export function CategoryPill({ category, ...pillProps }: CategoryPillProps) {
  return (
    <Pill
      iconName={categoryIconMap[category.code]}
      {...pillProps}
      label={category.name}
    />
  );
}

const categoryIconMap: Record<CategoryCode, IconName> = {
  ADVENTURE: "Adventure",
  BEACH: "Beach",
  CULTURE: "Culture",
  GASTRONOMY: "Gastronomy",
  HISTORY: "History",
  LUXURY: "Luxury",
  NATURE: "Nature",
  URBAN: "Urban",
  SHOPPING: "Shopping",
  FAVORITE: "Star",
};
