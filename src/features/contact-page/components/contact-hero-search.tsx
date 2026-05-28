import { Search } from "lucide-react";
import {
  ContactHeroSearchIcon,
  ContactHeroSearchInput,
  ContactHeroSearchRoot
} from "../styles/contact-hero-search.styles";

type ContactHeroSearchProps = {
  ariaLabel: string;
  backgroundImage: string;
  placeholder: string;
};

export function ContactHeroSearch({
  ariaLabel,
  backgroundImage,
  placeholder
}: ContactHeroSearchProps) {
  return (
    <ContactHeroSearchRoot $backgroundImage={backgroundImage} role="search">
      <ContactHeroSearchIcon aria-hidden="true">
        <Search />
      </ContactHeroSearchIcon>
      <ContactHeroSearchInput aria-label={ariaLabel} placeholder={placeholder} type="search" />
    </ContactHeroSearchRoot>
  );
}
