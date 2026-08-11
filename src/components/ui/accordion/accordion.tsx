import { AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useId, useState } from "react";
import {
  AccordionContent,
  AccordionIcon,
  AccordionItemRoot,
  AccordionPanel,
  AccordionRoot,
  AccordionTrigger
} from "./accordion.styles";

export type AccordionItem = {
  content: string;
  id: string;
  title: string;
};

export type AccordionProps = {
  allowMultiple?: boolean;
  defaultOpenIds?: readonly string[];
  items: readonly AccordionItem[];
};

export function Accordion({ allowMultiple = false, defaultOpenIds = [], items }: AccordionProps) {
  const [openIds, setOpenIds] = useState<readonly string[]>(defaultOpenIds);
  const rootId = useId();
  const reduceMotion = useReducedMotion();

  return (
    <AccordionRoot>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const panelId = `${rootId}-${item.id}-panel`;
        return (
          <AccordionItemRoot key={item.id}>
            <AccordionTrigger
              aria-controls={panelId}
              aria-expanded={isOpen}
              onClick={() => {
                setOpenIds((current) => {
                  if (current.includes(item.id)) {
                    return current.filter((id) => id !== item.id);
                  }
                  return allowMultiple ? [...current, item.id] : [item.id];
                });
              }}
            >
              {item.title}
              <AccordionIcon $open={isOpen}>
                <Plus aria-hidden="true" size={18} />
              </AccordionIcon>
            </AccordionTrigger>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <AccordionPanel
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  id={panelId}
                  initial={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
                >
                  <AccordionContent>{item.content}</AccordionContent>
                </AccordionPanel>
              ) : null}
            </AnimatePresence>
          </AccordionItemRoot>
        );
      })}
    </AccordionRoot>
  );
}
