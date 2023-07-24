import { mineSakerApiUrl } from "../urls";

const redirectToIdPorten = (redirectUrl: string) => {
  window.location.assign(`${mineSakerApiUrl}/login?redirect_uri=${redirectUrl}${window.location.search}`);
};

export default redirectToIdPorten;
