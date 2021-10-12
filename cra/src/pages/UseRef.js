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

    return <>
    <h1>UseRef</h1>
        <div ref={domRef} className="p-3 bg-info text-light">
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis velit enim harum minus delectus sit aperiam obcaecati odio repudiandae quo ipsa distinctio cum quaerat eveniet suscipit beatae, deserunt, culpa rem.
            </p>
        </div>
    </>
};