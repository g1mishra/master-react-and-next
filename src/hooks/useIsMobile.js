// custom hook : useIsMobile -> check if the device is mobile or not usergaent and window width

import { useEffect, useState } from "react";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            const userAgent = navigator.userAgent;
            const mobile = /Mobile/;
            const isMobile = mobile.test(userAgent);
            setIsMobile(isMobile || window.innerWidth < 768);
        };

        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);

        return () => {
            window.removeEventListener("resize", checkIfMobile);
        };
    }
    , []);

    return isMobile;
}

export default useIsMobile;

// useState -> []