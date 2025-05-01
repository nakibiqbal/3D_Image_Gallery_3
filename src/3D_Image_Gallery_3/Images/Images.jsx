/* eslint-disable react/prop-types */
import "./images.css";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Data } from "./Images_src/Data";

gsap.registerPlugin(ScrollTrigger);

export default function Images({ parentRef }) {
    const [data] = useState(Data);
    return (
        <div className="parentImgDiv">
            {data.map(({ src, className }, index) => (
                <ScrollFunction key={index} index={index} parentRef={parentRef} src={src} className={className} />
            ))}
        </div>
    );
}

const ScrollFunction = ({ index, src, className, parentRef }) => {
    const childRef = useRef(null);

    // For small screen size
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 500);

    // Update state on screen resize
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 500);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    useGSAP(
        () => {
            gsap.fromTo(
                childRef.current,
                {
                    z: -1000,
                    opacity: 0,
                },
                {
                    z: 300,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: childRef.current,
                        start: `${index * (isSmallScreen ? 80 : 70)}% 50%`,
                        end: `${index * (isSmallScreen ? 80 : 70)}% -100%`,
                        scrub: true,
                    },
                }
            );
        },
        { scope: parentRef.current }
    );

    return (
        <div ref={childRef} className="childImgDiv">
            <div className={`imagesSize ${className}`}>
                <img src={src} loading="lazy" />
            </div>
        </div>
    );
};
