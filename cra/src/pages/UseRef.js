import { useEffect, useRef } from "react";
import VanillaTilt from 'vanilla-tilt';

const vanillaTiltOptions = {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5
}

export const UseRef = () => {
    const domRef = useRef(null);

    useEffect(() => {
        console.log(domRef.current);
        VanillaTilt.init(domRef.current, vanillaTiltOptions);
    }, [])

    return <div ref={domRef} className="p-3 bg-info text-light">
        UseRef
    </div>
};