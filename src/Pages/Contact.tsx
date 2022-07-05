import { FC } from "react";
import { useTranslation } from "react-i18next";
import Page from "../Components/Page/Page";

const Contact: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return <Page header={t("contact")}>Content</Page>;
};

export default Contact;