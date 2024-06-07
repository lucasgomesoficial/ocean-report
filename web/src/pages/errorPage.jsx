import { useEffect } from "react";
import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  let errorMessage;

  if (isRouteErrorResponse(error)) {
    errorMessage = error?.message || error?.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    errorMessage = "Unknown error";
  }

  useEffect(() => {
    setInterval(() => navigate("/acessar-mapa"), 5000);
  }, [navigate]);

  return (
    <div
      id="error-page"
      className="flex flex-col gap-8 justify-center items-center h-screen"
    >
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>Desculpa, um erro inesperado ocorreu.</p>
      <p className="text-slate-400">
        <i>ERROR: {errorMessage}</i>
      </p>
    </div>
  );
}
