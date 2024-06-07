import React from "react";
import { api } from "../../../service/api";

export const useFetchReports = () => {
  const [reports, setReports] = React.useState([]);

  const getReports = React.useCallback(async () => {
    try {
      const { data } = await api.get("/reports");

      setReports(data.reports);
    } catch (error) {
      console.log(error);
    }
  }, []);

  React.useEffect(() => {
    getReports();
  }, [getReports]);

  return { reports };
};
