import React from "react";

type Props = {
  color?: string;
  height?: number;
};

const Logo: React.FC<Props> = ({ color }) => (
  <svg
    width="70"
    height="40"
    viewBox="0 0 70 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4061_3084)">
      <path
        d="M4.19298 27.8885H0V12.2242H4.19298V14.2744H4.22499C5.47328 12.7688 7.16967 12 8.89808 12C10.9466 12 12.5789 12.7688 13.5072 14.4666H13.5712C14.8515 12.8329 16.8039 12 19.0444 12C22.4052 12 24.5497 14.0181 24.5497 18.8231V27.8885H20.3568V19.8161C20.3568 17.3175 19.5886 15.7479 17.6361 15.7479C15.8757 15.7479 14.4354 17.2535 14.4354 20.0724V27.8885H10.2424V19.8161C10.2424 17.3175 9.4102 15.7479 7.48975 15.7479C5.60131 15.7479 4.19298 17.2535 4.19298 20.0724V27.8885Z"
        fill={color ? color : "currentColor"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.4547 20.2753C44.4547 24.6627 40.8899 28.2195 36.4926 28.2195C32.0953 28.2195 28.5305 24.6627 28.5305 20.2753C28.5305 15.8878 32.0953 12.331 36.4926 12.331C40.8899 12.331 44.4547 15.8878 44.4547 20.2753ZM39.1466 20.2753C39.1466 21.7378 37.9584 22.9233 36.4926 22.9233C35.0268 22.9233 33.8386 21.7378 33.8386 20.2753C33.8386 18.8128 35.0268 17.6272 36.4926 17.6272C37.9584 17.6272 39.1466 18.8128 39.1466 20.2753Z"
        fill={color ? color : "currentColor"}
      />
      <path
        d="M51.0898 14.9791C51.0898 16.4416 49.9016 17.6272 48.4358 17.6272C46.97 17.6272 45.7817 16.4416 45.7817 14.9791C45.7817 13.5166 46.97 12.331 48.4358 12.331C49.9016 12.331 51.0898 13.5166 51.0898 14.9791Z"
        fill={color ? color : "currentColor"}
      />
      <path
        d="M59.2679 27.8885H55.0711V12.2242H59.2679V14.2423H59.3319C60.5813 12.7688 62.3754 12 64.3296 12C67.6614 12 70 13.7939 70 18.5989V27.8885H65.8033V19.656C65.8033 16.6769 64.7461 15.7479 62.7918 15.7479C60.6775 15.7479 59.2679 17.2214 59.2679 20.0404V27.8885Z"
        fill={color ? color : "currentColor"}
      />
    </g>
    <defs>
      <clipPath id="clip0_4061_3084">
        <rect
          width="70"
          height="16.2195"
          fill="white"
          transform="translate(0 12)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default Logo;