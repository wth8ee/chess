import { useEffect, useLayoutEffect, useState } from "react";

export function useNow(updateInterval, enabled) {
    const [now, setNow] = useState(Date.now());

    useLayoutEffect(() => {
        if (!enabled) {
            return;
        }
        setNow(Date.now());

        const interval = setInterval(() => {
            setNow(Date.now());
        }, updateInterval);

        return () => clearInterval(interval);
    }, [updateInterval]);
    return now;
}
