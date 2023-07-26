import { postUserUrl } from "../urls";

interface Props {
  path: string;
  options?: object;
  eventObj?: object;
}

interface eventObjectProps {
  ident: string;
}

export const include = {
  credentials: "include",
};

export const fetcher = async ({ path, options }: Props) => {
  const response = await fetch(path, {
    method: "GET",
    ...options,
  });

  if (!response.ok) {
    throw new Error("Fetch request failed");
  }

  return await response.json();
};

export const postUser = async (ident : eventObjectProps) => {
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
