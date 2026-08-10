import type { ChangeEventHandler } from "react";
import { Search } from "lucide-react";
import { SearchFieldIcon, SearchFieldInput, SearchFieldRoot } from "./search-field.styles";

type SearchFieldProps = {
  ariaLabel: string;
  backgroundImage?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  value?: string;
  variant: "gloss" | "plain";
};

export function SearchField({
  ariaLabel,
  backgroundImage = "",
  onChange,
  placeholder,
  value,
  variant
}: SearchFieldProps) {
  return (
    <SearchFieldRoot $backgroundImage={backgroundImage} $variant={variant} role="search">
      <SearchFieldIcon $variant={variant} aria-hidden="true">
        <Search />
      </SearchFieldIcon>
      <SearchFieldInput
        $variant={variant}
        aria-label={ariaLabel}
        onChange={onChange}
        placeholder={placeholder}
        type="search"
        value={value}
      />
    </SearchFieldRoot>
  );
}
