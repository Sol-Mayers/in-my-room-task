import React from "react";
import { useState } from "react";

export const TapBar = ({ setOpenPopup, ref }) => {
    const [commentCounter, setCommentCounter] = useState(0);
    const [likeCounter, setLikeCounter] = useState(0);

    //Функция прокрутки вверх страницы
    const goToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <>
            <button onClick={() => setOpenPopup(true)}>
                <img src="share.svg" alt="share" />
            </button>

            <button onClick={goToTop}>
                <img src="pageup.svg" alt="pageup" />
            </button>
            <button onClick={() => setCommentCounter(commentCounter + 1)}>
                <img src="comments.svg" alt="comments" />
                {commentCounter}
            </button>
            <button onClick={() => setLikeCounter(likeCounter + 1)}>
                <img src="like.svg" alt="like" />
                {likeCounter}
            </button>
        </>
    );
};
