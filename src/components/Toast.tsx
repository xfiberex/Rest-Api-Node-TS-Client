import { useEffect, useState } from "react";

type ToastProps = {
    message: string;
    type?: 'success' | 'error' | 'info';
    duration?: number;
    onClose?: () => void;
}

export default function Toast({ message, type = 'success', duration = 3000, onClose }: ToastProps) {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => onClose?.(), 300);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const colors = {
        success: 'bg-green-500 border-green-600',
        error: 'bg-red-500 border-red-600',
        info: 'bg-blue-500 border-blue-600'
    };

    const icons = {
        success: '✓',
        error: '✗',
        info: 'ℹ'
    };

    return (
        <div className={`${isExiting ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'} transition-all duration-300 animate-slide-in-right`}>
            <div className={`${colors[type]} text-white px-6 py-4 rounded-lg shadow-2xl border-l-4 flex items-center gap-3 min-w-[300px] max-w-md`}>
                <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full">
                    <span className="text-xl font-bold">{icons[type]}</span>
                </div>
                <p className="font-medium flex-1">{message}</p>
                <button 
                    onClick={() => {
                        setIsExiting(true);
                        setTimeout(() => onClose?.(), 300);
                    }}
                    className="ml-2 text-white/80 hover:text-white transition-colors text-xl leading-none w-6 h-6 flex items-center justify-center hover:bg-white/10 rounded"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}
