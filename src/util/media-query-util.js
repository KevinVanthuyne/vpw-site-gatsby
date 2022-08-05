class MediaQueryUtil {
    /**
     * @returns {boolean} If the screen size is smaller than Bootstrap's medium breakpoint
     */
    static isMobile() {
        return window.matchMedia("only screen and (max-width: 768px)").matches;
    }
}

export default MediaQueryUtil