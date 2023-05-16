import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/pagination';

import { EffectCoverflow, Keyboard, Pagination } from 'swiper';
import MediaQueryUtil from '../util/media-query-util';

const WorkPage = () => (
    <Layout pageTitle="Work">
        <div className="row mt-10">
            <div className="col-md-3 offset-md-1">
                <h2 className="big-title">Our Work</h2>
                <p className="display-text">An anthology of our releases.</p>
                <p className="display-text">
                    For the current overview of all our pinball tables, take a
                    look at the{' '}
                    <a
                        href="https://vpuniverse.com/profile/40692-vpinworkshop/?tab=node_filestabprofile_filesTab"
                        target="_blank"
                        rel="noreferrer"
                    >
                        VPW profile on VPUniverse
                    </a>
                    .
                </p>
            </div>
        </div>
        <div className="row mt-5 mb-5">
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
                    {/*Big Bang Bar*/}
                    <SwiperSlide>
                        <a
                            href="https://vpuniverse.com/files/file/13634-big-bang-bar-capcom-1996-vpw/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <StaticImage
                                src="../images/tables/bbb.jpg"
                                alt="Top-down view of Big Bang Bar playfield"
                                layout="fullWidth"
                            />
                        </a>
                    </SwiperSlide>
                    {/* TNA */}
                    <SwiperSlide>
                        <a
                            href="https://vpuniverse.com/files/file/14359-total-nuclear-annihilation-spooky-2017-vpw/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <StaticImage
                                src="../images/tables/tna.jpg"
                                alt="Top-down view of Total Nuclear Annihilation playfield"
                                layout="fullWidth"
                            />
                        </a>
                    </SwiperSlide>
                    {/* Game of Thrones */}
                    <SwiperSlide>
                        <a
                            href="https://vpuniverse.com/files/file/12510-game-of-thrones-le-stern-2015-vpw/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <StaticImage
                                src="../images/tables/got.jpg"
                                alt="Top-down view of Game of Thrones playfield"
                                layout="fullWidth"
                            />
                        </a>
                    </SwiperSlide>
                    {/* Star Trek: The Next Generation */}
                    <SwiperSlide>
                        <a
                            href="https://vpuniverse.com/files/file/13319-star-trek-the-next-generation-williams-1993-vpw-mod/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <StaticImage
                                src="../images/tables/sttng.jpg"
                                alt="Top-down view of Star Trek: The Next Generation playfield"
                                layout="fullWidth"
                            />
                        </a>
                    </SwiperSlide>
                    {/* Iron Man */}
                    <SwiperSlide>
                        <a
                            href="https://vpuniverse.com/files/file/12116-iron-man-vault-edition-stern-2014-vpw-edition/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <StaticImage
                                src="../images/tables/im.jpg"
                                alt="Top-down view of Iron Man playfield"
                                layout="fullWidth"
                            />
                        </a>
                    </SwiperSlide>
                    {/* Road Show */}
                    <SwiperSlide>
                        <a
                            href="https://vpuniverse.com/files/file/10984-red-and-teds-road-show-williams-1994-vpw-mod/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <StaticImage
                                src="../images/tables/rs.jpg"
                                alt="Top-down view of Road Show playfield"
                                layout="fullWidth"
                            />
                        </a>
                    </SwiperSlide>
                    {/* X-Men */}
                    <SwiperSlide>
                        <a
                            href="https://vpuniverse.com/files/file/12253-x-men-le-stern-2012-vpw-mod/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <StaticImage
                                src="../images/tables/xmen.jpg"
                                alt="Top-down view of X-Men playfield"
                                layout="fullWidth"
                            />
                        </a>
                    </SwiperSlide>
                    {/* Blood Machines */}
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
                    {/* Lord of the Rings */}
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
                    {/* Indiana Jones */}
                    <SwiperSlide>
                        <a
                            href="https://vpuniverse.com/files/file/8568-indiana-jones-the-pinball-adventure-williams-1993-vpwmod/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <StaticImage
                                src="../images/tables/ij.jpg"
                                alt="Top-down view of Indiana Jones"
                                layout="fullWidth"
                            />
                        </a>
                    </SwiperSlide>
                    {/* Monster Bash */}
                    <SwiperSlide>
                        <a
                            href="https://vpuniverse.com/files/file/9091-monster-bash-williams-1998-vpwmod/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <StaticImage
                                src="../images/tables/mb.jpg"
                                alt="Top-down view of Monster Bash"
                                layout="fullWidth"
                            />
                        </a>
                    </SwiperSlide>
                    {/* Spider Man */}
                    <SwiperSlide>
                        <a
                            href="https://vpuniverse.com/files/file/6530-spider-man-vault-edition-siggis-mod-stern-2016-vpw-mod/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <StaticImage
                                src="../images/tables/sm.jpg"
                                alt="Top-down view of Spider-Man"
                                layout="fullWidth"
                            />
                        </a>
                    </SwiperSlide>
                    {/* Cactus Canyon */}
                    <SwiperSlide>
                        <a
                            href="https://vpuniverse.com/files/file/6267-cactus-canyon-continued-bally-1998-vpw-mod/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <StaticImage
                                src="../images/tables/cc.jpg"
                                alt="Top-down view of Cactus Canyon"
                                layout="fullWidth"
                            />
                        </a>
                    </SwiperSlide>
                    {/* Metallica */}
                    <SwiperSlide>
                        <a
                            href="https://vpuniverse.com/files/file/6058-metallica-premium-monsters-stern-2013-vpw-mod/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <StaticImage
                                src="../images/tables/mtl.jpg"
                                alt="Top-down view of Stern's Metallica"
                                layout="fullWidth"
                            />
                        </a>
                    </SwiperSlide>
                    {/* Simpsons: Pinball Party */}
                    <SwiperSlide>
                        <a
                            href="https://vpuniverse.com/files/file/10383-simpsons-pinball-party-stern-2003-vpw-mod/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <StaticImage
                                src="../images/tables/tspp.jpg"
                                alt="Top-down view of The Simpsons: Pinball Party"
                                layout="fullWidth"
                            />
                        </a>
                    </SwiperSlide>
                    {/* Iron Maiden */}
                    <SwiperSlide>
                        <a
                            href="https://vpuniverse.com/files/file/12603-iron-maiden-legacy-of-the-beast-original-2022-vpw/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <StaticImage
                                src="../images/tables/im_lotb.jpg"
                                alt="Top-down view of Iron Maiden playfield"
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
