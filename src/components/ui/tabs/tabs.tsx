import { useId, useState } from "react";
import { TabButton, TabList, TabPanel, TabsRoot } from "./tabs.styles";

export type TabItem = {
  content: string;
  id: string;
  label: string;
};

export type TabsProps = {
  defaultIndex?: number;
  items: readonly TabItem[];
  onChange?: (index: number) => void;
};

export function Tabs({ defaultIndex = 0, items, onChange }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const rootId = useId();
  const activeItem = items[activeIndex];

  return (
    <TabsRoot>
      <TabList aria-label="Content sections" role="tablist">
        {items.map((item, index) => (
          <TabButton
            $active={index === activeIndex}
            aria-controls={`${rootId}-${item.id}-panel`}
            aria-selected={index === activeIndex}
            id={`${rootId}-${item.id}-tab`}
            key={item.id}
            onClick={() => {
              setActiveIndex(index);
              onChange?.(index);
            }}
            onKeyDown={(event) => {
              if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
                return;
              }

              event.preventDefault();
              const direction = event.key === "ArrowRight" ? 1 : -1;
              const nextIndex = (index + direction + items.length) % items.length;
              setActiveIndex(nextIndex);
              onChange?.(nextIndex);
              const buttons =
                event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>(
                  '[role="tab"]'
                );
              buttons?.[nextIndex]?.focus();
            }}
            role="tab"
          >
            {item.label}
          </TabButton>
        ))}
      </TabList>
      {activeItem ? (
        <TabPanel
          aria-labelledby={`${rootId}-${activeItem.id}-tab`}
          id={`${rootId}-${activeItem.id}-panel`}
          role="tabpanel"
        >
          {activeItem.content}
        </TabPanel>
      ) : null}
    </TabsRoot>
  );
}
