import { useEffect } from "react";
import { applySeo } from "../utils/seo";

export const usePageSeo = (seo) => {
  useEffect(() => {
    applySeo(seo);
  }, [seo]);
};
