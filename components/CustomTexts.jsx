'use client';

export const TypingText = ({ title, textStyles }) => (
  <p
  className={`flex self-center justify-center mt-[4px] w-[80%] font-normal md:text-[20px] text-[18px] text-center ${textStyles}`}
  >
    {title}
  </p>
);

export const TitleText = ({ title, textStyles }) => (
  <h2
  className={`mt-[8px] font-normal md:text-[40px] text-[36px] capitalize text-center text-white my-2 self-center ${textStyles}`}
  >
    {title}
  </h2>
);
