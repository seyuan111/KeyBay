import React, {useState} from 'react'
import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Sliders = () => {

    const [current, setCurrent] = useState(0)

    const slides = [
        {
            url: "https://www.bblocksmiths.com/wp-content/uploads/2019/05/B_B-locksmith-residential-key-duplication-1.jpg"
        },
        {
            url: "https://s3-media0.fl.yelpcdn.com/bphoto/UAuXJe2PNPGk6iYkrRveAw/1000s.jpg"
        },
        {
            url: "https://affordablelock.com/wp-content/uploads/2022/09/different-types-keys-duplicate-placed-order-top-view1-1080x628.png"
        },
        {
            url: "https://i0.wp.com/www.wynnslocksmiths.com.au/wp-content/uploads/2020/01/autocarkeys.jpg?fit=750%2C500&ssl=1"
        },
        {
            url: "https://3guyslocksmiths.com/wp-content/uploads/2021/11/How-Long-Does-Emergency-Locksmith-Service-Usually-Take1200x628.png"
        }
    ]

    const prevSlide = () => {
        const lastSlide = current === 0;
        const goBack = lastSlide ? slides.length -1 : current -1;
        setCurrent(goBack);
    }

    const nextSlide = () => {
        const nextSlide = current === slides.length -1;
        const goNext = nextSlide ? 0 : current +1;
        setCurrent(goNext)
    }

    const goToSlide = (indexSlide) => {
        setCurrent(indexSlide)
    }



  return (
    <div className="bg-slate-600">
    <div className="max-w-[800px] h-[500px] w-full m-auto py-16 px-4 relative group">
        <div style={{backgroundImage: `url(${slides[current].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-300"></div>
        <div className="text-white cursor-pointer absolute top-[50%] transition-x-0 transition-y-[50%] left-10">
            <BsArrowLeftCircle onClick={prevSlide} size={30} />
        </div>
        <div className="text-white cursor-pointer absolute top-[50%] transition-x-0 transition-y-[50%] right-10">
            <BsArrowRightCircle onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
            {slides.map((slide, indexSlide) => (
                <div key={indexSlide} onClick={() => goToSlide(indexSlide)} className="text-white cursor-pointer text-2xl">
                    <RxDotFilled />
                </div>
            ))}
        </div>
    </div>
</div>
  )
}

export default Sliders