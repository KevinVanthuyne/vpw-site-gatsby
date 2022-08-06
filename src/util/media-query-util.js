class MediaQueryUtil {
    static SM_BREAKPOINT = 576;
    static MD_BREAKPOINT = 768;
    static LG_BREAKPOINT = 992;
    static XL_BREAKPOINT = 1200;
    static XXL_BREAKPOINT = 1400;

    /**
     * @returns {boolean} If the screen size is smaller than Bootstrap's medium breakpoint
     */
    static isMobile() {
        return window.matchMedia('only screen and (max-width: 768px)').matches;
    }
}

export default MediaQueryUtil;
