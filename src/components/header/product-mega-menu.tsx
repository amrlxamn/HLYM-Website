import { AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui";
import { MODEL_TABS } from "@/data/models.constants";
import type { ModelCategory } from "@/data/site-content.types";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { NEW_PRODUCT_SLUGS, PRODUCT_CURTAIN_MODELS } from "./product-curtain-models.constants";
import {
  MegaCategoryButton,
  MegaCategoryList,
  MegaModelLink,
  MegaModelList,
  MegaModelNewBadge,
  MegaProductImage,
  MegaProductPreview,
  MegaProductStage,
  ProductMegaMenuContent,
  ProductMegaMenuRoot
} from "./product-mega-menu.styles";

type ProductCategory = Exclude<ModelCategory, "all models">;

type ProductMegaMenuProps = {
  contentTop: number;
  fullWidth: boolean;
  onClose: () => void;
  open: boolean;
};

export function ProductMegaMenu({ contentTop, fullWidth, onClose, open }: ProductMegaMenuProps) {
  const reduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(MODEL_TABS[0]!);
  const categoryModels = PRODUCT_CURTAIN_MODELS[activeCategory];
  const [activeModel, setActiveModel] = useState(categoryModels[0]!);
  const activeCategoryIndex = MODEL_TABS.indexOf(activeCategory);
  return (
    <AnimatePresence>
      {open && (
        <ProductMegaMenuRoot
          animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
          aria-label="Products submenu"
          exit={{ clipPath: "inset(0 0 100% 0)", opacity: reduceMotion ? 0 : 1 }}
          initial={{ clipPath: "inset(0 0 100% 0)", opacity: reduceMotion ? 0 : 1 }}
          onPointerLeave={onClose}
          transition={{ duration: reduceMotion ? 0.16 : 0.26, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProductMegaMenuContent $contentTop={contentTop} $fullWidth={fullWidth}>
            <MegaCategoryList aria-label="Motorcycle categories">
              {MODEL_TABS.map((category, index) => (
                <MegaCategoryButton
                  $active={category === activeCategory}
                  aria-pressed={category === activeCategory}
                  key={category}
                  onFocus={() => {
                    setActiveCategory(category);
                    setActiveModel(PRODUCT_CURTAIN_MODELS[category][0]!);
                  }}
                  onMouseEnter={() => {
                    setActiveCategory(category);
                    setActiveModel(PRODUCT_CURTAIN_MODELS[category][0]!);
                  }}
                  type="button"
                >
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  <span>{category}</span>
                </MegaCategoryButton>
              ))}
            </MegaCategoryList>
            <MegaProductStage>
              <MegaModelList
                $categoryIndex={activeCategoryIndex}
                aria-label={`${toSentenceCase(activeCategory)} motorcycles`}
              >
                {categoryModels.map((model) => (
                  <MegaModelLink
                    $active={model.name === activeModel.name}
                    href={`/products/${model.slug}`}
                    key={model.name}
                    onFocus={() => setActiveModel(model)}
                    onMouseEnter={() => setActiveModel(model)}
                  >
                    <span>{model.name}</span>
                    {NEW_PRODUCT_SLUGS.has(model.slug) && (
                      <MegaModelNewBadge>NEW</MegaModelNewBadge>
                    )}
                  </MegaModelLink>
                ))}
              </MegaModelList>
              <MegaProductPreview>
                <MegaProductImage src={activeModel.image} alt={activeModel.name} />
                <Button
                  onClick={() => window.location.assign(`/products/${activeModel.slug}`)}
                  size="sm"
                  variant="light"
                >
                  Discover more
                </Button>
              </MegaProductPreview>
            </MegaProductStage>
          </ProductMegaMenuContent>
        </ProductMegaMenuRoot>
      )}
    </AnimatePresence>
  );
}
