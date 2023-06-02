'use client';
// import styled, {keyframes, css} from "styled-components";

import styles from "../styles";
import { TitleText, TypingText } from "../components";

import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";


const Feedback = () => (
  <>
    <div className="flex align-center justify-center py-4">
        <div className={`${styles.innerWidth} flex flex-col align-center justify-center`}>
            <div className={`${styles.paddings} pt-6 pb-2 flex flex-col align-center justify-center`}>
                <TitleText title={<>Placement Offers at 70+ partner companies</>} 
                textStyles="md:w-[60%] lg:w-[60%] text-[32px] py-4"
                />
                <TypingText className={`${styles.interWidth}`} title="Unlock powerful features tailored to your specific needs" textStyles="text-footer hidden md:flex lg:flex" />    
            </div>
        </div>
    </div>

    <div className="my-16 flex items-center justify-center">
        {/* 1. */}
        <div className="w-[200%] shrink-0 h-40 overflow-hidden relative">
          {/* 2. */}
          <div className="w-[200%] overflow-hidden flex items-center h-40 justify-around absolute left-0 animate gap-4 md:gap-10 lg:gap-10">
            {/* 3 */}
            {reviews.map((image, index) => (
                <ReviewCard 
                    key={image.id}
                    {...image}
                    index={index}
                />
            ))}
            {reviews.map((image,index) => (
                <ReviewCard 
                key={image.id}
                {...image}
                index={index}
            />
            ))}
          </div>
        </div>
    </div>
    <div className="my-16 flex items-center justify-center">
        {/* 1. */}
        <div className="w-[200%] shrink-0 h-40 overflow-hidden relative">
          {/* 2. */}
          <div className="w-[200%] overflow-hidden flex items-center h-40 justify-around absolute left-0 animate-reverse gap-4 md:gap-10 lg:gap-10">
            {/* 3 */}
            {reviews.map((image, index) => (
                <ReviewCard 
                    key={image.id}
                    {...image}
                    index={index}
                />
            ))}
            {reviews.map((image,index) => (
                <ReviewCard 
                key={image.id}
                {...image}
                index={index}
            />
            ))}
          </div>
        </div>
    </div>
  </>
);

export default Feedback;

// const FeedbackContainer = styled.div`
//   width: 100vw;
//   height: 100vh;
//   color: #fff;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   row-gap: 2rem;
//   align-items: center;
//   justify-content: center;

// `

// const Wrapper = styled.div`
//   width: 100%;
//   height: fit-content;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// `

// const scrollX = keyframes`
//   from{
//     left: translateX(0);
//   }

//   to{
//     transform: translateX(-100%)
//   }
// `
// const Marquee = styled.div`
//   display: flex;
//   column-gap: 5rem;
//   justify-content: space-around;
//   width: 100%;
//   overflow: hidden;
//   user-select: none;
//   position: relative;
// `

// const common = css`
//   flex-shrink: 0;
//   display: flex;
//   position: relative;
//   align-items: center;
//   justify-content: space-around;
//   white-space: nowrap;
//   width: 100%;
//   animation: ${scrollX} 40s linear infinite;
// `

// const MarqueeGroup = styled.div`
//   ${common}
// `
// const MarqueeGroup2 = styled.div`
//   ${common}
//   animation-direction: reverse;
//   animation-delay: -2s;
// `



// const ImageGroup = styled.div`
//   display: grid;
//   place-items: center;
//   width: clamp(10rem, 1rem + 40rem, 30rem);
//   padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
// `

// const Image = styled.div`
//   object-fit: contain;
//   width: 100%;
//   height: 100%;
//   border-radius: 0.5rem;
//   aspect-ratio: 16/9;
//   padding: 5px 20px;
//   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

// `
