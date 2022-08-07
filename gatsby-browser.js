import './src/styles/global.scss';

// Always start at the top of the page on a route change.

export const onRouteUpdate = () => {
    if (typeof window !== `undefined`) {
        window.scrollTo(0, 0);
    }
};

export const shouldUpdateScroll = (args) => {
    return false;
};
