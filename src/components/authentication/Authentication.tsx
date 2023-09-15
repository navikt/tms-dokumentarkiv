import React from "react";
import useSWRImmutable from "swr/immutable";
import redirectToIdPorten from "../../api/redirect";
import { authenticationUrl, baseUrl } from "../../urls";
import { fetcher, include } from "../../api/api";
import ContentLoader from "../loader/ContentLoader";

type Props = {
  children?: React.ReactNode;
};

const Authentication = ({ children }: Props) => {
  const { data, isLoading, error } = useSWRImmutable({ path: authenticationUrl, options: include }, fetcher, {
    shouldRetryOnError: false,
  });
  const redirectUrl = baseUrl + window.location.pathname;

  if (isLoading) {
    return <ContentLoader />;
  }

  if (!data?.authenticated || error) {
    redirectToIdPorten(redirectUrl);
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default Authentication;
