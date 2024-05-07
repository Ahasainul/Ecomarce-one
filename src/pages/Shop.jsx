import React from 'react'
import Hadding from '../components/Hadding'
import Container from '../components/Container'
import Subhadding from '../components/Subhadding'
import { FaPlus } from "react-icons/fa";
import Flex from '../components/Flex';
import Iconetow from '../iconss/Iconetow';
import Iconethree from '../iconss/Iconethree';
import CardBox from '../components/CardBox';
import { BiSolidUpArrow } from "react-icons/bi";
import puta from '../assets/pota.png'
import cat from '../assets/cat.png'
import bag from '../assets/bag.png'
import bagtow from '../assets/bagtow.png'
import cup from '../assets/cup.png'
import lamps from '../assets/lamps.png'
import buskat from '../assets/buskat.png'
import sunglass from '../assets/sunglass.png'
import pute from '../assets/pute.png'
import { useSelector } from 'react-redux';

const Shop = () => {
    let data = useSelector((state) => state.bradcome.currentname);


    return (
        <>
            <Container className={'py-20'}>
                <Hadding className={'text-5xl font-bold font-dm '} hedText={'Products'} />
            {/* bradcome  */}
            <Flex className={'items-center '}>
            {data} <h4 className='mt-1'>/</h4>
            <p className='first-letter:uppercase pt-2'>{window.location.pathname.replace("/", "").replace("/", "")}</p>
            </Flex>
  {/* bradcome  */}
                <div className="flex pt-24">
                    <div className="w-[20%]">
                        <div className="">
                            <Hadding className='text-xl pt-10 font-bold pb-20' hedText={'Shop by Category'} />
                            <div className="">
                                <Flex className={'justify-between items-center pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'Category 1'} />
                                    <FaPlus className='text-base text-ash ' />

                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'justify-between items-center pt-5 pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'Category 1'} />


                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'justify-between items-center  pt-5 pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'Category 1'} />
                                    <FaPlus className='text-base text-ash ' />

                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'justify-between items-center pt-5 pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'Category 1'} />

                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'justify-between items-center pt-5 pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'Category 1'} />

                                </Flex>
                            </div>

                        </div>
                        <div className=" mt-12">
                            <div className=" pb-20">
                                <Flex className={'justify-between items-center  '}>
                                    <Hadding className='text-xl font-bold' hedText={'Shop by Color'} />
                                    <BiSolidUpArrow />
                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'gap-5 items-center pb-5 border-b'}>
                                    <div className="w-3 h-3 rounded-full bg-black" ></div>
                                    <Subhadding className={'font-dm text-base '} subText={'Color 1 '} />


                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={' gap-5 items-center pt-5 pb-5 border-b'}>
                                    <div className="w-3 h-3 rounded-full bg-blue-500" ></div>
                                    <Subhadding className={'font-dm text-base '} subText={'Color 1 '} />

                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={' gap-5 items-center  pt-5 pb-5 border-b'}>
                                    <div className="w-3 h-3 rounded-full bg-green-700" ></div>
                                    <Subhadding className={'font-dm text-base '} subText={'Color 1 '} />
                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'items-center gap-5 pt-5 pb-5 border-b'}>
                                    <div className="w-3 h-3 rounded-full bg-red-700" ></div>
                                    <Subhadding className={'font-dm text-base '} subText={'Color 1 '} />

                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'gap-5 items-center pt-5 pb-5 border-b'}>
                                    <div className="w-3 h-3 rounded-full bg-yellow-600" ></div>
                                    <Subhadding className={'font-dm text-base '} subText={'Color 1 '} />

                                </Flex>
                            </div>

                        </div>
                        <div className=" mt-12">
                            <div className=" pb-20">
                                <Flex className={'justify-between items-center  '}>
                                    <Hadding className='text-xl font-bold' hedText={'Shop by Brand'} />
                                    <BiSolidUpArrow />
                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'gap-5 items-center pb-5 border-b'}>  
                                    <Subhadding className={'font-dm text-base '} subText={'Brand 1'} />
                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'gap-5 items-center pt-5 pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'Brand 2 '} />

                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'gap-5 items-center pt-5 pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'Brand 3 '} />

                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'gap-5 items-center pt-5 pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'Brand 4 '} />

                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'gap-5 items-center pt-5 pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'Brand 5 '} />

                                </Flex>
                            </div>
                        </div>
                        <div className=" mt-12">
                            <div className=" pb-20">
                                <Flex className={'justify-between items-center  '}>
                                    <Hadding className='text-xl font-bold' hedText={'Shop by Price'} />
                                    <BiSolidUpArrow />
                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'gap-5 items-center pb-5 border-b'}>  
                                    <Subhadding className={'font-dm text-base '} subText={'$0.00 - $9.99'} />
                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'gap-5 items-center pt-5 pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'$0.00 - $9.99 '} />

                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'gap-5 items-center pt-5 pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'$0.00 - $9.99'} />

                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'gap-5 items-center pt-5 pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'$0.00 - $9.99'} />

                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'gap-5 items-center pt-5 pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'$0.00 - $9.99'} />

                                </Flex>
                            </div>
                        </div>


                    </div>


                    <div className="w-[80%] mt-12 ml-10">
                        <div className="flex justify-between">
                            <Flex className={'gap-3'}>
                                <Iconetow />
                                <Iconethree />
                            </Flex >

                            <div className="flex">
                                <div className="items-center gap-3  flex">
                                    <Subhadding className={'text-base text-ash'} subText={'Sort by:'} />

                                    <select className='w-40 text-ash border px-4 py-2 '>
                                        <option value=""  > Featured</option>
                                        <option value=""  > one</option>
                                        <option value=""  > tow</option>
                                        <option value=""  > three</option>
                                        <option value=""  > four</option>
                                    </select>
                                </div>
                                <div className="items-center gap-3 ml-9  flex">
                                    <Subhadding className={'text-base text-ash'} subText={'Sort by:'} />

                                    <select className='w-28 text-ash border px-2 py-2 '>
                                        <option value=""  > 30</option>
                                        <option value=""  > one</option>
                                        <option value=""  > tow</option>
                                        <option value=""  > three</option>
                                        <option value=""  > four</option>
                                    </select>
                                </div>
                            </div>


                        </div>
                        <div className="flex  gap-5">
                            <div className="w-1/3">
                                <CardBox ProcdtImg={puta} className={'w-full'} btnName={'New'} alt={'puta.png'} />
                            </div>
                            <div className="w-1/3">
                                <CardBox ProcdtImg={cat} className={'w-full'} btnName={'-10%'} alt={'puta.png'} />
                            </div>
                            <div className="w-1/3">
                                <CardBox ProcdtImg={bag} className={'w-full '} btnName={'New '} alt={'puta.png'} />
                            </div>
                        </div>
                        <div className="flex  gap-5">
                            <div className="w-1/3">
                                <CardBox ProcdtImg={bagtow} className={'w-full'} btnName={'New'} alt={'puta.png'} />
                            </div>
                            <div className="w-1/3">
                                <CardBox ProcdtImg={cup} className={'w-full'} btnName={'New'} alt={'puta.png'} />
                            </div>
                            <div className="w-1/3">
                                <CardBox ProcdtImg={buskat} className={'w-full'} btnName={'New'} alt={'puta.png'} />
                            </div>
                        </div>
                        <div className="flex  gap-5">
                            <div className="w-1/3">
                                <CardBox ProcdtImg={lamps} className={'w-full'} btnName={'New'} alt={'puta.png'} />
                            </div>
                            <div className="w-1/3">
                                <CardBox ProcdtImg={sunglass} className={'w-full'} btnName={'New'} alt={'puta.png'} />
                            </div>
                            <div className="w-1/3">
                                <CardBox ProcdtImg={puta} className={'w-full'} btnName={'New'} alt={'puta.png'} />
                            </div>
                        </div>
                        <div className="flex  gap-5">
                            <div className="w-1/3">
                                <CardBox ProcdtImg={puta} className={'w-full'} btnName={'New'} alt={'puta.png'} />
                            </div>
                            <div className="w-1/3">
                                <CardBox ProcdtImg={bag} className={'w-full'} btnName={'New'} alt={'puta.png'} />
                            </div>
                            <div className="w-1/3">
                                <CardBox ProcdtImg={pute} className={'w-full'} btnName={'New'} alt={'puta.png'} />
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </>
    )
}

export default Shop