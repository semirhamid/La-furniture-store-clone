import logo from '../../assets/logo_furniture.png';
import React from 'react'
import './headertarget.scss'

export default function HeaderTarget() {
  return (
    <div>
      <div className="max-w-limit flex content-center justify-between mx-auto py-[15px] border-b-active border-b-[1px]" >
        <div className='left-nav flex items-center flex-1'>
          <a href="" className="pr-10 nav_box">
            <div className='group nav-icons flex'>
              <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.9999 16.015V19.015C21.0011 19.2935 20.944 19.5692 20.8324 19.8244C20.7209 20.0795 20.5572 20.3086 20.352 20.4969C20.1468 20.6851 19.9045 20.8285 19.6407 20.9177C19.3769 21.0069 19.0973 21.0401 18.8199 21.015C15.7428 20.6806 12.7869 19.6292 10.1899 17.945C7.77376 16.4097 5.72527 14.3612 4.18993 11.945C2.49991 9.33621 1.44818 6.366 1.11993 3.27501C1.09494 2.99847 1.12781 2.71977 1.21643 2.45663C1.30506 2.19349 1.4475 1.95169 1.6347 1.74663C1.82189 1.54156 2.04974 1.37771 2.30372 1.26553C2.55771 1.15334 2.83227 1.09527 3.10993 1.09501H6.10993C6.59524 1.09023 7.06572 1.26208 7.43369 1.57854C7.80166 1.89499 8.04201 2.33445 8.10993 2.81501C8.23656 3.77507 8.47138 4.71773 8.80993 5.62501C8.94448 5.98293 8.9736 6.37192 8.89384 6.74589C8.81408 7.11985 8.6288 7.46312 8.35993 7.73501L7.08993 9.00501C8.51349 11.5086 10.5864 13.5815 13.0899 15.005L14.3599 13.735C14.6318 13.4661 14.9751 13.2809 15.3491 13.2011C15.723 13.1213 16.112 13.1505 16.4699 13.285C17.3772 13.6236 18.3199 13.8584 19.2799 13.985C19.7657 14.0535 20.2093 14.2982 20.5265 14.6725C20.8436 15.0468 21.0121 15.5246 20.9999 16.015Z" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className=''>
                (866) 637-1231
              </span>
            </div>
          </a>
          <a href="" className="pr-10 nav_box">
            <div className='group nav-icons flex'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="27"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7.376 4.86C8.656 3.62 10.196 3 12 3c1.803 0 3.337.613 4.602 1.838C17.867 6.063 18.5 7.549 18.5 9.296c0 .873-.225 1.873-.676 3a18.275 18.275 0 01-1.636 3.169 62.856 62.856 0 01-1.898 2.767 33.23 33.23 0 01-1.592 2.05L12 21c-.175-.197-.407-.458-.698-.782-.29-.324-.814-.971-1.57-1.943a32.526 32.526 0 01-1.985-2.831 20.289 20.289 0 01-1.549-3.106c-.465-1.155-.698-2.169-.698-3.042 0-1.747.625-3.226 1.876-4.437z"
                  clipRule="evenodd"
                ></path>
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 9.5a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
              <span className=''>
                Store Locations
              </span>
            </div>
          </a>
          <a href="" className="pr-10 nav_box">
            <div className='group nav-icons flex fill'>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 10a3 3 0 113 3v1m9-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                  <circle cx="12" cy="17" r="1" fill="#000"></circle>
                </svg>

              </span>
              <span className=''>
                Help
              </span>
            </div>
          </a>
        </div>
        <div className="logo flex justify-center flex-grow-0 flex-shrink-1 flex-basis-[640px]">
          <img src={logo} className='max-h-[40px]' alt="" />
        </div>
        <div className="right-nav flex justify-end flex-1">
          <span className='animated-icons ml-7 stroke'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6c-1.8-2.097-4.806-2.745-7.06-.825-2.255 1.92-2.573 5.131-.802 7.402 1.472 1.888 5.927 5.87 7.387 7.16.163.144.245.216.34.245a.456.456 0 00.258 0c.095-.029.176-.1.34-.245 1.46-1.29 5.915-5.272 7.387-7.16 1.77-2.27 1.492-5.502-.802-7.402C16.755 3.275 13.8 3.903 12 6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <span className="animated-icons ml-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 20 20"
            >
              <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g fill="#000" transform="translate(-420 -2159)">
                  <g transform="translate(56 160)">
                    <path d="M374 2009c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4m3.758.673A5.983 5.983 0 00380 2005a6 6 0 10-9.758 4.673c-3.659 1.375-6.242 4.772-6.242 9.327h2c0-5 3.589-8 8-8s8 3 8 8h2c0-4.555-2.583-7.952-6.242-9.327"></path>
                  </g>
                </g>
              </g>
            </svg>
          </span>
          <span className="animated-icons ml-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                fillRule="evenodd"
                d="M1 1a1 1 0 000 2h2.206l2.78 11.909a4 4 0 003.779 3.09V18h7.822a4 4 0 003.943-3.325l1.256-7.338A2 2 0 0020.814 5H5.727l-.753-3.227A1 1 0 004 1H1zm5.194 6l1.739 7.454A2 2 0 009.88 16h7.706a2 2 0 001.972-1.663L20.814 7H6.194z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#000"
                d="M8 23a2 2 0 100-4 2 2 0 000 4zM19 23a2 2 0 100-4 2 2 0 000 4z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}
