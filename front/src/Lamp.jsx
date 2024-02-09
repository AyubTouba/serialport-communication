import React from "react";

const Lamp = ({ color }) => {
  return (
    <div className="w-1/4 ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="lamp">
        <g data-name="katman 2">
          <g>
            <path
              fill="none"
              stroke="#434a54"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M23 51v-4.56M43.87 40.83A7.26 7.26 0 0041 46.44"
            ></path>
            <path
              fill="#ecf0f1"
              stroke="#434a54"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M35 54.46V57a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.54a4 4 0 0 0 2 .54h2a4 4 0 0 0 2-.54z"
            ></path>
            <path
              fill="#ecf0f1"
              stroke="#434a54"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M37 47v4a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-4z"
            ></path>
            <path
              fill={color}
              stroke="#434a54"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M47 25.82a15 15 0 0 1-5.63 11.89A11.24 11.24 0 0 0 37 46.44V47H27v-.56a10.65 10.65 0 0 0-4.08-8.5A15 15 0 1 1 47 25.82z"
            ></path>
            <path
              fill="none"
              stroke="#434a54"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M30 47V35M34 47V35M30 35l-6-6M34 35l6-6M26 15.61A11.94 11.94 0 0132 14M20 26a12 12 0 012.57-7.42M32 8V4M19.27 13.27l-2.83-2.83M14 26h-4M50 26h4M44.73 13.27l2.83-2.83M27 50h10"
            ></path>
            <path fill="none" d="M0 0h64v64H0z"></path>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Lamp;
