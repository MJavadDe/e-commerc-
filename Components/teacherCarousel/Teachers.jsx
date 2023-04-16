import React from 'react';
import Slider from "react-slick";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", border:"black" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color: "green" }}
        onClick={onClick}
      />
    );
  }
const Teachers = () => {
    
    const settings = {
        className: 'center',
        infinite: true,
        speed: 800,
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }
    
    return (
        <div className='flex flex-col w-8/12 h-56 m-auto'>
            <h2 className="text-blue text-xl mb-4">مدرسین نمونه مجموعه آموزشی ما</h2>
            <Slider {...settings}>
                <div>
                    <img src="images/test_1.png" className='w-56' alt="" />
                    <h3>حسامی</h3>
                </div>
                <div>
                    <img src="images/test_2.png" className='w-56' alt="" />
                    <h3>حسامی</h3>
                </div>
                <div>
                    <img src="images/test_1.png" className='w-56' alt="" />
                    <h3>حسامی</h3>
                </div>
                <div>
                    <img src="images/test_2.png" className='w-56' alt="" />
                    <h3>حسامی</h3>
                </div>
                <div>
                    <img src="images/test_1.png" className='w-56' alt="" />
                    <h3>حسامی</h3>
                </div>
                <div>
                    <img src="images/test_2.png" className='w-56' alt="" />
                    <h3>حسامی</h3>
                </div>
                <div>
                    <img src="images/test_1.png" className='w-56' alt="" />
                    <h3>حسامی</h3>
                </div>
                <div>
                    <img src="images/test_2.png" className='w-56' alt="" />
                    <h3>حسامی</h3>
                </div>
                <div>
                    <img src="images/test_1.png" className='w-56' alt="" />
                    <h3>حسامی</h3>
                </div>
            </Slider>
        </div>
    );
};

export default Teachers;