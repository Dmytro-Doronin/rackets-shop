'use client'

import {Button} from "@/components/button/Button";

type GlobalErrorProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

export default function GlobalError({error, reset}: GlobalErrorProps) {
    return (
        <html
            lang="en"
        >
            <body className="min-h-full flex flex-col">
                <p>Global error</p>
                <p>{error.message}</p>
                <Button onClick={reset}>Reset</Button>
            </body>
        </html>
    );
};