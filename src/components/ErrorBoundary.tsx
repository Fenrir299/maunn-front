import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Erreur interceptée par ErrorBoundary:", error, errorInfo);
    // Vous pourriez également enregistrer l'erreur dans un service de rapport d'erreurs
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-background p-4 text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Quelque chose s'est mal passé
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Nous sommes désolés pour cette erreur. Veuillez rafraîchir la page
            ou revenir à l'accueil.
          </p>
          <div className="space-x-4">
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Rafraîchir la page
            </button>
            <a
              href="/"
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
            >
              Retour à l'accueil
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
