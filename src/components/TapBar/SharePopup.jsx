import React from "react";
import styles from "./TapBar.module.css";
import {
    WhatsappShareButton,
    WhatsappIcon,
    TelegramShareButton,
    TelegramIcon,
    VKShareButton,
    VKIcon,
} from "react-share";

export const SharePopup = ({ openPopup, setOpenPopup }) => {
    //Урл страницы для шаринга
    const shareUrl = "inmyroom.ru";

    return (
        <div className={openPopup ? styles.popupOpen : styles.popup}>
            <div className={styles.popupInnerWrapper}>
                <button
                    className={styles.closePopup}
                    onClick={() => setOpenPopup(false)}
                >
                    X
                </button>
                <h2 className={styles.variantsTitle}>Поделиться:</h2>
                <div className={styles.shareVariants}>
                    <WhatsappShareButton
                        url={shareUrl}
                        quote={"Title"}
                        hashtag={"#hash"}
                        className={styles.shareVariant}
                    >
                        <WhatsappIcon size={40} round={true} />
                    </WhatsappShareButton>
                    <TelegramShareButton
                        url={shareUrl}
                        quote={"Title"}
                        hashtag={"#hash"}
                        className={styles.shareVariant}
                    >
                        <TelegramIcon size={40} round={true} />
                    </TelegramShareButton>
                    <VKShareButton
                        url={shareUrl}
                        quote={"Title"}
                        hashtag={"#hash"}
                        className={styles.shareVariant}
                    >
                        <VKIcon size={40} round={true} />
                    </VKShareButton>
                </div>
            </div>
        </div>
    );
};
