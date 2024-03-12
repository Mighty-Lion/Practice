import { useState } from 'react';
import i18n from 'i18next';
import {
  DropDownHeader,
  DropDownItem,
  DropDownList,
  DropDownWrapper,
} from '@/components/DropDown/index.styles';

export function DropdownForLanguages() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(i18n.language || 'en');
  return (
    <DropDownWrapper
      isOpen={isOpen}
      role="button"
      onClick={() => setIsOpen((prev) => !prev)}
      onKeyDown={() => setIsOpen((prev) => !prev)}
    >
      <DropDownHeader>{selected}</DropDownHeader>
      <DropDownList>
        <DropDownItem
          onClick={() => {
            setSelected('en');
            i18n.changeLanguage('en');
          }}
        >
          en
        </DropDownItem>
        <DropDownItem
          onClick={() => {
            setSelected('ru');
            i18n.changeLanguage('ru');
          }}
        >
          ru
        </DropDownItem>
      </DropDownList>
    </DropDownWrapper>
  );
}
