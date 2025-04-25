'use client';

import { useEffect } from 'react';

type ErrorProps = {
    error: Error;
    reset: () => void;
};

export default function GlobalError({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error('❌ Error caught in error.tsx:', error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-red-900 p-6">
            <h2 className="text-3xl font-bold mb-2">Something went wrong</h2>
            <p className="mb-4 text-lg">{error.message || 'An unexpected error occurred.'}</p>

            <button
                onClick={() => reset()}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
                Try again
            </button>
        </div>
    );
}
