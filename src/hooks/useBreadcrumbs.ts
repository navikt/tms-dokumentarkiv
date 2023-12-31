import { onBreadcrumbClick, setBreadcrumbs } from "@navikt/nav-dekoratoren-moduler";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useStore } from "@nanostores/react";
import { languageAtom } from "../store/store";
import { text } from "../language/text";
import { minSideUrl } from "../urls";

type Breadcrumb = {
  url: string;
  title: string;
  handleInApp: boolean;
};

const useBreadcrumbs = (breadcrumb?: Breadcrumb) => {
  const location = useLocation();
  const navigate = useNavigate();
  const language = useStore(languageAtom);

  onBreadcrumbClick((breadcrumb) => {
    navigate(breadcrumb.url);
  });

  useEffect(() => {
    const baseBreadcrumbs: Breadcrumb[] = [
      {
        url: minSideUrl,
        title: text.minSide[language],
        handleInApp: false,
      },
      {
        url: "/dokumentarkiv",
        title: text.dokumentarkiv[language],
        handleInApp: true,
      },
    ];

    const breadcrumbs = breadcrumb ? baseBreadcrumbs.concat(breadcrumb) : baseBreadcrumbs;
    setBreadcrumbs(breadcrumbs);
  }, [location, breadcrumb]);
};

export default useBreadcrumbs;
