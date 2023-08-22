import { useEffect } from "react";
import { setBreadcrumbs } from "@navikt/nav-dekoratoren-moduler";
import { TextLanguages, text } from "../language/text";

type Breadcrumb = {
  url: string;
  title: string;
  handleInApp?: boolean;
};

export const useBreadcrumbs = (breadcrumb: Breadcrumb[], language: TextLanguages) => {
  useEffect(() => {
    const baseBreadcrumbs: Breadcrumb[] = [
      {
        url: "/dokumentarkiv",
        title: text.dokumentarkiv[language],
        handleInApp: false,
      },
    ];

    const breadcrumbs = baseBreadcrumbs.concat(breadcrumb);
    setBreadcrumbs(breadcrumbs);
  }, []);
};
