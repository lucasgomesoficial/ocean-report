import React from "react";
import { apiMapBox } from "../../../service/api";

const ACCESS_TOKEN_MAP_BOX = `access_token=${
  import.meta.env.VITE_ACCESS_TOKEN_MAP_BOX
}`;

export const useFetchMapbox = () => {
  const getLocal = React.useCallback(async (local) => {
    try {
      const { data } = await apiMapBox.get(
        `/${local}.json?${ACCESS_TOKEN_MAP_BOX}`
      );

      return data.features[0];
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { getLocal };
};
