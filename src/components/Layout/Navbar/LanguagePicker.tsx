import { Select } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const LanguagePicker = () => {
  const { i18n } = useTranslation();

  const handleChange = (event: { target: { value: string | undefined } }) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Select size="md" defaultValue={i18n.language} onChange={handleChange}>
      <option value="en">🇺🇸</option>
      <option value="tw">🇹🇼</option>
    </Select>
  );
};

export default LanguagePicker;
