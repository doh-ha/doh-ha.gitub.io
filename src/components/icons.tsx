import React from "react";

export const VelogIcon = ({ size = 15, className = "" }) => (
  <svg
    width={size} // props로 넘김
    height={size}
    viewBox="0 0 40 40"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <rect width="40" height="40" rx="8" fill="#fff" />
      <text x="20" y="24" dominantBaseline="middle" textAnchor="middle" fontSize="20" fontFamily="Arial" fontWeight="bold">
        V
      </text>
    </g>
  </svg>
);

export const TistoryIcon = ({ size = 15, className = "" }) => (
  <svg
    width={size} // props로 넘김
    height={size}
    viewBox="0 0 459 459"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>티스토리 로고</title>
    <g>
      <path
        d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z"
        fill="#fff"
      />
    </g>
  </svg>
);
