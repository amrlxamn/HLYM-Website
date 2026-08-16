import type { CategoryTile as CategoryTileType } from "@/data/site-content.types";
import { FeaturedImageCard } from "./featured-image-card";
import { CategoryTileNumber, CategoryTileRoot } from "./category-tile.styles";

type CategoryTileProps = {
  index: number;
  tile: CategoryTileType;
};

export function CategoryTile({ index, tile }: CategoryTileProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <CategoryTileRoot>
      <CategoryTileNumber aria-hidden="true" data-gallery-index={number}>
        {number}
      </CategoryTileNumber>
      <FeaturedImageCard
        alt={tile.alt}
        description={tile.description}
        href={tile.href}
        image={tile.image}
        title={tile.name}
      />
    </CategoryTileRoot>
  );
}
