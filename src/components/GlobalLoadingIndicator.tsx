import { useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

export default function GlobalLoadingIndicator() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading" || navigation.state === "submitting";

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in">
            <div className="bg-white rounded-xl shadow-2xl p-8 flex flex-col items-center gap-4 animate-slide-in-right">
                <LoadingSpinner size="lg" className="border-indigo-600 border-t-transparent" />
                <p className="text-slate-700 font-semibold">
                    {navigation.state === "submitting" ? "Guardando..." : "Cargando..."}
                </p>
            </div>
        </div>
    );
}
