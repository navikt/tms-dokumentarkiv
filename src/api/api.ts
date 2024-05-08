import { dokumentArkivUrl, postUserUrl } from "../urls";
import { redirectToIdPorten, redirectToLandingsside } from "./redirect.ts";

interface Props {
  path: string;
  options?: object;
  handleNotFound?: boolean;
  eventObj?: object;
}

interface eventObjectProps {
  ident: string;
}

export const include = {
  credentials: "include",
};

export const fetcher = async ({ path, options, handleNotFound }: Props) => {
  const response = await fetch(path, {
    method: "GET",
    credentials: "include",
    ...options,
  });

  if (!response.ok) {
    if (response.status === 401) {
      redirectToIdPorten(`${dokumentArkivUrl}`);
    } else if (handleNotFound && response.status === 404) {
      redirectToLandingsside();
    }

    throw new Error("Fetch request failed");
  }

  return await response.json();
};

export const postUser = async (ident: eventObjectProps) => {
  const response = await fetch(postUserUrl, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ident),
  });

  if (!response.ok) {
    throw new Error("Post request failed");
  }
};
