import React, { useState } from "react";
import getBrowserSupporting from "../../helpers/getBrowserSupporting";
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
    const [alertWindow, setAlertWindow] = useState(false);
    //Урл страницы для шаринга
    const shareUrl = "inmyroom.ru";

    console.log(alertWindow);

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
                        onClick={() => getBrowserSupporting(setAlertWindow)}
                    >
                        <WhatsappIcon size={40} round={true} />
                    </WhatsappShareButton>
                    <TelegramShareButton
                        url={shareUrl}
                        quote={"Title"}
                        hashtag={"#hash"}
                        className={styles.shareVariant}
                        onClick={() => getBrowserSupporting(setAlertWindow)}
                    >
                        <TelegramIcon size={40} round={true} />
                    </TelegramShareButton>
                    <VKShareButton
                        url={shareUrl}
                        quote={"Title"}
                        hashtag={"#hash"}
                        className={styles.shareVariant}
                        onClick={() => getBrowserSupporting(setAlertWindow)}
                    >
                        <VKIcon size={40} round={true} />
                    </VKShareButton>
                    <div
                        className={
                            alertWindow ? styles.alertWindow : styles.popup
                        }
                    >
                        Ссылка на страницу скопирована в буфер обмена!
                    </div>
                </div>
            </div>
        </div>
    );
};
