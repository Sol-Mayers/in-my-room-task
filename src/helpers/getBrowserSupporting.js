//Функция, копирующая текущий урл, если браузер не поддерживает функцию "поделиться"
export default function getBrowserSupporting(setAlertWindow) {
    if (!navigator.share) {
        navigator.clipboard.writeText(window.location.href);
        setAlertWindow(true);
        setTimeout(() => {
            setAlertWindow(false);
        }, 2000);
    }
}
