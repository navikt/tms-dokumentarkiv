import React from "react";
import { fetcher, include } from "../../api/api";
import { redirectToIdPorten } from "../../api/redirect";
import { authenticationUrl } from "../../urls";
import ContentLoader from "../loader/ContentLoader";
import useSWRImmutable from "swr/immutable";

type Props = {
  children?: React.ReactNode;
};

interface AuthenticationProps {
  authenticated: boolean;
  level: number;
  levelOfAssurance: string;
}

const Authentication = ({ children }: Props) => {
  const { data, isLoading, error } = useSWRImmutable<AuthenticationProps>(
    { path: authenticationUrl, options: include },
    fetcher,
    {
      shouldRetryOnError: false,
    }
  );
  const redirectUrl = window.location.origin + window.location.pathname;

  if (isLoading) {
    return <ContentLoader />;
  }

  if (!data?.authenticated || data?.levelOfAssurance != "High" || error) {
    redirectToIdPorten(redirectUrl);
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default Authentication;
