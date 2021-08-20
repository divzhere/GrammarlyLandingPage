import React, { useEffect, useState } from "react";
import "./slider.scss";
import { sliderJson } from "./sliderContent";
import Button from "../Button/Button";
import useWindowDimensions from "../../utils/useWindowDimensions";
export default function Slider() {
  const [sliderData, setSliderData] = useState(sliderJson);
  const { width } = useWindowDimensions();
  const handleActive = (data) => {
    let activeIndex = 0;
    for (let i = 0; i < data.length; i++) {
      //finding index of active: true
      if (data[i].active === true) {
        activeIndex = i;
      }
    }

    if (activeIndex < data.length - 1) {
      let output = [...data].map((item, index) =>
        index === activeIndex ? { ...item, active: false } : { ...item }
      );
      return output.map((item, index) =>
        index === activeIndex + 1 ? { ...item, active: true } : { ...item }
      );
    } else if (activeIndex === data.length - 1) {
      let output = [...data].map((item, index) =>
        index === activeIndex ? { ...item, active: false } : { ...item }
      );
      return output.map((item, index) =>
        index === 0 ? { ...item, active: true } : { ...item }
      );
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderData(handleActive(sliderData));
    }, 7000);
    return () => clearInterval(interval);
  }, [sliderData]);

  return (
    <section className="main_section_container">
      <div className="main_section">
        <section className="title_container">
          <span className="title">Aim High With Brilliant Writing</span>
          <Button title={"Upgrade to Grammerly Premium"} />
        </section>
        <section className="slider_section">
          <section className="slider_section">
            <div className="animation_container">
              {sliderData.map((data, i) => (
                <>
                  {data.active && (
                    <div className="image_container" key={i}>
                      <div>
                        <img
                          src={data.writingImg}
                          alt={data.title}
                          className="writing_img animate__animated animate__fadeInDown animate__fast"
                        />
                      </div>

                      <img
                        src={data.suggestionImg}
                        alt={data.subTitle}
                        className="suggestion_img animate__animated animate__fadeInDown animate__delay-1s animate__fast"
                        style={{
                          bottom: `${
                            width < 640
                              ? i !== 0
                                ? -16
                                : -46
                              : i !== 0
                              ? 46
                              : 16
                          }px`,
                        }}
                      />
                    </div>
                  )}
                </>
              ))}
            </div>
            <ul>
              {sliderData.map((data, i) => (
                <li key={i}>
                  <div className={`${data.active ? "active " : " "}title`}>
                    {data.title}
                  </div>
                  <div className="subtitle">{data.subTitle}</div>
                  <div className="line">
                    <span>
                      <span
                        className={`${data.active ? "progress" : ""}`}
                      ></span>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </div>
    </section>
  );
}
