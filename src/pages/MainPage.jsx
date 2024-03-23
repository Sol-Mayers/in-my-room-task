import React from "react";
import styles from "../components/TapBar/TapBar.module.css";
import { useEffect, useState, useRef } from "react";
import { TapBar } from "../components/TapBar/TapBar";
import { SharePopup } from "../components/TapBar/SharePopup";
import useScrollDirection from "../helpers/useScrollDirection";

export const MainPage = () => {
    let lastScrollY = Math.round(window.scrollY);
    const [scrollCount, setScrollCount] = useState(0);
    const [openPopup, setOpenPopup] = useState(false);

    const ref = useRef(null);

    //Анимации появления-исчезновения для тап-бара
    const animate = {
        animation: `${styles.transitionBottom} 1s`,
        animationFillMode: "forwards",
    };
    const animateBack = {
        animation: `${styles.transitionTop} 1s`,
    };

    const detectScrollDirection = useScrollDirection(
        setScrollCount,
        lastScrollY
    );

    //Функция анимирования скрытия тап-бара вниз при скролле вниз
    useEffect(() => {
        if (
            detectScrollDirection === "down" &&
            ref.current &&
            ref.current.style
        ) {
            ref.current.style.animation = animate.animation;
            ref.current.style.animationFillMode = animate.animationFillMode;
        }
    }, [
        animate.animation,
        animate.animationFillMode,
        detectScrollDirection,
        scrollCount,
    ]);

    //Функция анимирования возвращения тап-бара в исходное состояние спустя секунду ожидания (без скролла)
    let timer = null;
    const pickStopScrolling = function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            if (ref.current && ref.current.style) {
                ref.current.style.animation = animateBack.animation;
            }
        }, 1000);
    };
    window.addEventListener("scroll", pickStopScrolling);

    return (
        <div className={styles.tapbarWrapper}>
            <div className={styles.tapbarContent}>
                <h1 className={styles.tapbarTitle}>
                    Одноэтажный дом с двумя спальнями в стиле эклектика
                </h1>
                {Array.from({ length: 15 }).map((_, index) => (
                    <p key={index}>
                        Учитывая ключевые сценарии поведения, современная
                        методология разработки влечет за собой процесс внедрения
                        и модернизации вывода текущих активов. Ясность нашей
                        позиции очевидна: высококачественный прототип будущего
                        проекта играет определяющее значение для первоочередных
                        требований.
                    </p>
                ))}
            </div>
            <div ref={ref} className={styles.tapbarMenu}>
                <TapBar setOpenPopup={setOpenPopup} />
            </div>
            <SharePopup openPopup={openPopup} setOpenPopup={setOpenPopup} />
        </div>
    );
};
