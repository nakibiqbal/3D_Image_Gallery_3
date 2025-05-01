import "./Image_Slider.css";
import { useRef } from "react";
import Images from "./Images/Images";

const Image_Slider = () => {
    const parentRef = useRef(null);

    return (
        <section ref={parentRef} id="imageSlider">

            <div className="imageWrapper">

                <Images parentRef={parentRef} />

            </div>

        </section>
    );
};

export default Image_Slider;