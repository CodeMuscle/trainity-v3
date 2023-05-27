'use client';
import styled, {keyframes, css} from "styled-components";

import styles from "../styles";
import { TitleText, TypingText } from "../components";

import ReviewCard from "../components/ReviewCard";
import { reviews, reviewsNegative } from "../constants";


const Feedback = () => (
  <FeedbackContainer>
    <div className="flex align-center justify-center py-4">
        <div className={`${styles.innerWidth} flex flex-col align-center justify-center`}>
            <div className={`${styles.paddings} flex flex-col align-center justify-center`}>
                <TitleText title={<>Helping You Unlock Your Potential With Our Services</>} 
                textStyles="w-[60%]"
                />
                <TypingText className={`${styles.interWidth}`} title="Unlock powerful features tailored to your specific needs" textStyles="text-footer" />    
            </div>
        </div>
    </div>
    <Wrapper>
      <Marquee>
        <MarqueeGroup>
          {
            reviews.map((review, index) => (
              <ReviewCard 
                key={review.id}
                {...review}
                index={index}

              />
            ))
          }
          {
            reviews.map((review, index) => (
              <ReviewCard 
                key={review.id}
                {...review}
                index={index}

              />
            ))
          }
          {
            reviews.map((review, index) => (
              <ReviewCard 
                key={review.id}
                {...review}
                index={index}

              />
            ))
          }
        </MarqueeGroup>
      </Marquee>
      <Marquee>
        <MarqueeGroup2>
          {
            reviewsNegative.map((review1, index) => (
              <ReviewCard 
                key={review1.id}
                {...review1}
                index={index}

              />
            ))
          }
          {
            reviewsNegative.map((review1, index) => (
              <ReviewCard 
                key={review1.id}
                {...review1}
                index={index}

              />
            ))
          }
          {
            reviewsNegative.map((review1, index) => (
              <ReviewCard 
                key={review1.id}
                {...review1}
                index={index}

              />
            ))
          }
        </MarqueeGroup2>
      </Marquee>
    </Wrapper>

  </FeedbackContainer>
);

export default Feedback;

const FeedbackContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  align-items: center;
  justify-content: center;

`

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const scrollX = keyframes`
  from{
    left: translateX(0);
  }

  to{
    transform: translateX(-100%)
  }
`
const Marquee = styled.div`
  display: flex;
  column-gap: 5rem;
  justify-content: space-around;
  width: 100%;
  overflow: hidden;
  user-select: none;
  position: relative;
`

const common = css`
  flex-shrink: 0;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 40s linear infinite;
`

const MarqueeGroup = styled.div`
  ${common}
`
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -2s;
`



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
