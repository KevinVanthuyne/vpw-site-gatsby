import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/pagination';

import { EffectCoverflow, Pagination, Keyboard } from 'swiper';
import MediaQueryUtil from '../util/media-query-util';

const WorkPage = () => (
    <Layout pageTitle="Work">
        <div className="row mt-10 mb-5">
            <div className="col-md-3 offset-md-1">
                <h2 className="big-title">Our Work</h2>
                <p className="display-text">An anthology of our releases.</p>
                <p className="display-text">
                    For the current overview of all our pinball tables, take a
                    look at the{' '}
                    <a
                        href="https://vpuniverse.com/profile/40692-vpinworkshop/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        VPW profile on VPUniverse
                    </a>
                    .
                </p>
            </div>
        </div>
        <div className="row mb-5">
            <div className="col gx-0">
                <Swiper
                    keyboard={{
                        enabled: true,
                    }}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    autoHeight={true}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Keyboard]}
                    slidesPerView={1.3}
                    spaceBetween={15}
                    loop={true}
                    breakpoints={{
                        [MediaQueryUtil.MD_BREAKPOINT]: {
                            slidesPerView: 2,
                            spaceBetween: 25,
                        },
                        [MediaQueryUtil.LG_BREAKPOINT]: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        [MediaQueryUtil.XL_BREAKPOINT]: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                >
                    <SwiperSlide>
                        <a
                            href="https://vpuniverse.com/files/file/6933-tales-from-the-crypt-vpw-premium-data-east-1993/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <StaticImage
                                src="../images/tables/tftc.jpg"
                                alt="Top-down view of Tales From The Crypt"
                                layout="fullWidth"
                            />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a
                            href="https://vpuniverse.com/files/file/9847-blood-machines-vpw-original-2022/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <StaticImage
                                src="../images/tables/bm.jpg"
                                alt="Top-down view of Blood Machines"
                                layout="fullWidth"
                            />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a
                            href="https://vpuniverse.com/files/file/8828-lord-of-the-rings-valinor-edition-stern-2003-vpw/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <StaticImage
                                src="../images/tables/lotr.jpg"
                                alt="Top-down view of Lord of the Rings"
                                layout="fullWidth"
                            />
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </Layout>
);

export default WorkPage;
