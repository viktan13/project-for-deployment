import { useEffect, useState } from 'react';
import { Button } from '@/shared/ui/deprecated/Button';

// created for testing ErrorBoundary only
export const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button onClick={onThrow}>Throw Mistake</Button>
        </div>
    );
};
