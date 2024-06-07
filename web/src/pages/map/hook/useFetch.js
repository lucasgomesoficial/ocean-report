import React from "react";
import { api } from "../../../service/api";

export const useFetchReports = () => {
  const sendReportByState = React.useCallback(async (state) => {
    try {
      await api.post("/send/report", { name: state });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { sendReportByState };
};
