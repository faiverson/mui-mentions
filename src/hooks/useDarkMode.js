import { useEffect, useState } from 'react';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(null);
    let eventListenersAdded = false;

    useEffect(() => {
        // Initialize dark mode
        if (darkMode === null) {
            setDarkMode(localStorage.getItem('theme') === 'dark');
        }

        // Sets the dark mode of the theme.
        const handleEvent = () => {
            if (localStorage.getItem('theme') === 'dark') {
                setDarkMode(true);
            } else {
                setDarkMode(false);
            }
        };

        // If event listeners haven't been added yet, then add them. This ensures they are only added once.
        if (!eventListenersAdded) {
            // When storage is changed
            window.addEventListener('storage', (e) => {
                handleEvent(e);
            });

            // When page is loaded/refreshed
            window.addEventListener('load', (e) => {
                handleEvent(e);
            });

            eventListenersAdded = true;
        }

        // Remove event listeners when component is unmounted
        return () => {
            window.removeEventListener('storage', (e) => {
                handleEvent(e);
            });

            window.removeEventListener('load', (e) => {
                handleEvent(e);
            });
        };
    }, [darkMode]);

    return darkMode;
};

export default useDarkMode;
