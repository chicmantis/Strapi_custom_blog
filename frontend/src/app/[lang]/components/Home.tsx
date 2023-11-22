'use client'
import Image, { StaticImageData } from "next/image";
import StarBg from './StarBg'
import { useEffect } from 'react'
import Wave from 'react-wavify'
import FeatureAreaHomeFour from './FeatureAreaHome'
import proccess_rocket from "@/app/[lang]/assets/img/shape/process-rocket.png";
import FunfactAreaHomeOne from "./Funfact";
import Link from "next/link";
import BlogAreaHomeFour from "./BlogAreaHome";



import hero from "@/app/[lang]/assets/img/hero.png"
import bannerShape_4_1 from "@/app/[lang]/assets/img/banner-shape-4-1.png"
import lineEffect_1 from "@/app/[lang]/assets/img/line-effect-1.png"
import light_t1 from "@/app/[lang]/assets/img/light-tl.png"
import light_tr from "@/app/[lang]/assets/img/light-tr.png"
import light_m from "@/app/[lang]/assets/img/light-m.png"
import star_bg_1 from "@/app/[lang]/assets/img/star-bg-1.png"
import wav_bg from "@/app/[lang]/assets/img/wav-bg.jpg"
import logo from "@/app/[lang]/assets/logo.png"
import electric from "@/app/[lang]/assets/img/electric.png"
import hero_2 from "@/app/[lang]/assets/img/hero-2.png"
import light_r from "@/app/[lang]/assets/img/light-r.png"
import light_l from "@/app/[lang]/assets/img/light-l.png"
import company_logo_1 from "@/app/[lang]/assets/img/company-logo-1.png"
import company_logo_2 from "@/app/[lang]/assets/img/company-logo-2.jpg"
import company_logo_3 from "@/app/[lang]/assets/img/company-logo-3.png"
import company_logo_4 from "@/app/[lang]/assets/img/company-logo-4.png"
import company_logo_5 from "@/app/[lang]/assets/img/company-logo-5.png"
import company_logo_6 from "@/app/[lang]/assets/img/company-logo-6.png"
import company_logo_7 from "@/app/[lang]/assets/img/company-logo-7.png"
import company_logo_8 from "@/app/[lang]/assets/img/company-logo-8.png"
import road_map_left  from "@/app/[lang]/assets/img/road-map-left.png"
import road_map_center  from "@/app/[lang]/assets/img/road-map-center.png"
import road_map_center_2  from "@/app/[lang]/assets/img/road-map-center-2.png"
import road_map_right  from "@/app/[lang]/assets/img/road-map-right.png"
import rocket_1  from "@/app/[lang]/assets/img/rocket-1.png"
import start_bg_2  from "@/app/[lang]/assets/img/star-bg-2.png"
import demo  from "@/app/[lang]/assets/img/demo.png"
import client_2  from "@/app/[lang]/assets/img/client-2.png"
import client_3  from "@/app/[lang]/assets/img/client-3.png"
import client_5  from "@/app/[lang]/assets/img/client-5.png"
import star_bg_5  from "@/app/[lang]/assets/img/star-bg-5.png"
import light_bl  from "@/app/[lang]/assets/img/light-bl.png"
import mock_up from "@/app/[lang]/assets/img/mockup.png"

interface process_content_type {
  proccess_img: StaticImageData;
}


const process_content: process_content_type = {
  proccess_img: proccess_rocket,
}

const { proccess_img } = process_content

export default function Home({contentData}:any) {
  const includedInfo = [
    {
      icon:
        <svg className='ml-2' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_145_136)">
            <path d="M13.6609 18.219V17.5053V14.8973H16.9861V16.1725C17.6727 15.5806 18.4373 15.0934 19.2626 14.718V1.18732C19.2626 0.531078 18.7315 0 18.0753 0H1.39874C0.742504 0 0.211426 0.531078 0.211426 1.18732V25.4173C0.211426 26.0736 0.742504 26.6047 1.39874 26.6047H14.1852C13.83 25.5899 13.6474 24.5277 13.6474 23.4385C13.6474 23.2761 13.6508 23.1137 13.6609 22.9514V18.219H13.6609ZM16.9861 12.8237H13.6609V9.49852H16.9861V12.8237ZM5.81315 23.6177H2.48799V20.2926H5.81315V23.6177ZM5.81315 18.219H2.48799V14.8939H5.81315V18.219ZM5.81315 12.8237H2.48799V9.49852H5.81315V12.8237ZM11.3979 23.6177H8.07277V20.2926H11.3979V23.6177ZM11.3979 18.219H8.07277V14.8939H11.3979V18.219ZM11.3979 12.8237H8.07277V9.49852H11.3979V12.8237ZM2.48799 6.75518V2.4592H16.9861V6.75518H2.48799Z" fill="white" />
            <path d="M15.271 26.6046C16.5294 29.7641 19.6177 32 23.2271 32C27.956 32 31.7886 28.1674 31.7886 23.4385C31.7886 18.7095 27.956 14.8735 23.2271 14.8735C21.7962 14.8735 20.4465 15.2253 19.2625 15.8444C18.4101 16.2909 17.6389 16.8761 16.986 17.5729C15.5484 19.1053 14.6655 21.1653 14.6655 23.4351C14.6655 23.4959 14.6655 23.5535 14.6689 23.6143C14.6892 24.6698 14.8989 25.6778 15.271 26.6046ZM24.8237 24.636C24.4787 24.2131 23.8867 24.0338 23.3556 23.9121C22.696 23.7632 22.1006 23.611 21.5053 23.2795C21.123 23.0664 20.822 22.7654 20.6156 22.3865C20.4093 22.011 20.3045 21.5781 20.3045 21.1011C20.3045 20.252 20.6089 19.5552 21.211 19.0309C21.5662 18.7197 22.0533 18.5032 22.6047 18.4017V17.9383C22.6047 17.6271 22.8584 17.3734 23.1695 17.3734H23.4774C23.7886 17.3734 24.0423 17.6271 24.0423 17.9383V18.4051C24.5531 18.5032 25.0064 18.7028 25.348 18.9869C25.71 19.2879 25.9738 19.6668 26.1362 20.1201C26.258 20.4549 26.0381 20.8136 25.6863 20.8677L25.3886 20.9116C25.118 20.9522 24.8575 20.7932 24.7696 20.5328C24.6985 20.3231 24.6004 20.1472 24.4821 20.0119C24.2114 19.7108 23.7852 19.5349 23.315 19.5349C22.8144 19.5349 22.3408 19.7311 22.0465 20.0592C21.8064 20.3265 21.6914 20.6377 21.6914 21.0064C21.6914 21.3683 21.7928 21.6727 21.9924 21.913C22.4084 22.4136 23.0918 22.5522 23.7514 22.6842C24.137 22.762 24.5361 22.8432 24.8812 22.9954C25.2498 23.1577 25.5543 23.3607 25.7911 23.5941C26.0279 23.8309 26.2105 24.115 26.3358 24.4364C26.4609 24.7577 26.5252 25.1129 26.5252 25.485C26.5252 26.307 26.2579 27.0038 25.7336 27.5552C25.3041 28.0085 24.7155 28.3062 24.0423 28.4279V28.7696C24.0423 29.0808 23.7886 29.3345 23.4774 29.3345H23.1695C22.8584 29.3345 22.6047 29.0808 22.6047 28.7696V28.4178C22.2326 28.3468 21.8774 28.2284 21.5594 28.0626C21.184 27.8698 20.8559 27.5552 20.5818 27.1256C20.3992 26.8415 20.2707 26.51 20.1895 26.1379C20.1218 25.8267 20.3316 25.5189 20.6461 25.4648L20.9506 25.4106C21.2415 25.3599 21.5222 25.5425 21.5966 25.8301C21.6847 26.1683 21.7996 26.4322 21.9451 26.6182C22.2698 27.0343 22.8043 27.2846 23.3793 27.2846C23.4774 27.2846 23.5755 27.2779 23.6702 27.2643C24.0795 27.2034 24.4483 27.0072 24.702 26.7163C24.9726 26.4085 25.1079 26.0229 25.1079 25.5662C25.1044 25.1772 25.0097 24.866 24.8237 24.636Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_145_136">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ,
      title: 'Commission Calculation and Tracking',
      desc: 'You define the commission for each employee one time only. Pay employees a percentage or a fixed amount.  You define it. Specify different tiers as necessary. Add multiple employees to one commission structure'
    },
    {
      icon:
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_145_141)">
            <path d="M17 15.5H31.5C31.7765 15.5 32 15.2765 32 15C32 6.716 25.284 0 17 0C16.7235 0 16.5 0.2235 16.5 0.5V15C16.5 15.2765 16.7235 15.5 17 15.5Z" fill="white" />
            <path d="M31.5 16.5H18C17.978 16.5 17.959 16.5095 17.9375 16.512C17.8955 16.5175 17.8535 16.5215 17.8135 16.537C17.7745 16.5525 17.742 16.579 17.709 16.6035C17.691 16.617 17.6695 16.624 17.653 16.6395C17.652 16.6405 17.6515 16.6425 17.6505 16.6435C17.6075 16.6855 17.5745 16.736 17.549 16.791C17.547 16.7955 17.542 16.799 17.54 16.8035C17.532 16.8225 17.5325 16.8455 17.527 16.866C17.5155 16.908 17.5015 16.9505 17.501 16.994L17.5 17C17.5 17.0265 17.511 17.05 17.5155 17.076C17.5215 17.113 17.5235 17.15 17.5375 17.1855C17.555 17.2295 17.5835 17.2655 17.612 17.302C17.6225 17.316 17.6275 17.3335 17.6405 17.3465L17.6455 17.3515C17.6455 17.3515 17.6465 17.353 17.6475 17.3535L27.6065 27.6065C30.3215 24.892 32 21.142 32 17C32 16.7235 31.7765 16.5 31.5 16.5Z" fill="white" />
            <path d="M15.8075 17.1455C15.506 16.844 15.5 16.3025 15.5 16.3025V2.5C15.5 2.2235 15.2765 2 15 2C6.716 2 0 8.716 0 17C0 25.284 6.716 32 15 32C19.142 32 22.892 30.3215 25.6065 27.6065C25.6065 27.6065 16.298 17.6355 15.8075 17.1455Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_145_141">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ,
      title: 'Full Live Dashboard',
      desc: 'Your dashboard will show you employees, commissions, top performers all in one quick view. Gross sales are displayed by year, month or week. Get payroll history and total expenses by time frame.'
    },
    {
      icon:
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.6667 2.66663H8.00008C7.29284 2.66663 6.61456 2.94758 6.11446 3.44767C5.61437 3.94777 5.33341 4.62605 5.33341 5.33329V20H4.00008C3.64646 20 3.30732 20.1404 3.05727 20.3905C2.80722 20.6405 2.66675 20.9797 2.66675 21.3333V24.6666C2.66675 25.9043 3.15841 27.0913 4.03358 27.9665C4.90875 28.8416 6.09574 29.3333 7.33341 29.3333H24.6667C25.9044 29.3333 27.0914 28.8416 27.9666 27.9665C28.8417 27.0913 29.3334 25.9043 29.3334 24.6666V5.33329C29.3334 4.62605 29.0525 3.94777 28.5524 3.44767C28.0523 2.94758 27.374 2.66663 26.6667 2.66663ZM13.7201 11.0533L16.3867 8.38663C16.5096 8.26669 16.6545 8.17162 16.8134 8.10663C16.8751 8.09475 16.9384 8.09475 17.0001 8.10663C17.2166 8.0354 17.4502 8.0354 17.6667 8.10663C17.7284 8.09475 17.7918 8.09475 17.8534 8.10663C18.0123 8.17162 18.1572 8.26669 18.2801 8.38663L20.9467 11.0533C21.0717 11.1772 21.1709 11.3247 21.2386 11.4872C21.3063 11.6497 21.3411 11.8239 21.3411 12C21.3411 12.176 21.3063 12.3502 21.2386 12.5127C21.1709 12.6752 21.0717 12.8227 20.9467 12.9466C20.8228 13.0716 20.6753 13.1708 20.5128 13.2385C20.3504 13.3062 20.1761 13.341 20.0001 13.341C19.8241 13.341 19.6498 13.3062 19.4873 13.2385C19.3248 13.1708 19.1774 13.0716 19.0534 12.9466L18.6667 12.56V16C18.6667 16.3536 18.5263 16.6927 18.2762 16.9428C18.0262 17.1928 17.687 17.3333 17.3334 17.3333C16.9798 17.3333 16.6407 17.1928 16.3906 16.9428C16.1406 16.6927 16.0001 16.3536 16.0001 16V12.56L15.6134 12.9466C15.3623 13.1977 15.0218 13.3387 14.6667 13.3387C14.3117 13.3387 13.9712 13.1977 13.7201 12.9466C13.469 12.6956 13.328 12.355 13.328 12C13.328 11.6449 13.469 11.3044 13.7201 11.0533ZM7.33341 26.6666C6.80298 26.6666 6.29427 26.4559 5.9192 26.0808C5.54413 25.7058 5.33341 25.1971 5.33341 24.6666V22.6666H20.0001V24.6666C20.0018 25.0027 20.0376 25.3377 20.1067 25.6666L20.2001 25.96C20.2001 26.1733 20.3334 26.3866 20.4134 26.5733V26.6666H7.33341Z" fill="white" />
        </svg>
      ,
      title: 'Expense Receipt Upload',
      desc: 'Commission Pay Pro is one of the few commission tracking programs that allows your employees to easily upload their expenses. Once uploaded, you click on the link and quickly review. '
    },
    {
      icon:
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_145_150)">
            <path d="M32 25.3334V21.3318H0V25.3334H9.99999V28.6667H7.33336V30H24.6667V28.6667H22V25.3334H32Z" fill="white" />
            <path d="M0 2V19.9984H32V2H0ZM9.99999 9.99853C11.8379 9.99853 13.3333 11.1948 13.3333 12.6652C13.3333 13.953 12.1862 15.0301 10.6666 15.2779V15.9986H9.33333V15.2779C7.81382 15.0301 6.66664 13.953 6.66664 12.6652H7.99995C7.99995 13.3879 8.91598 13.9985 9.99999 13.9985C11.084 13.9985 12 13.3879 12 12.6652C12 11.9426 11.0839 11.3319 9.99999 11.3319C8.16211 11.3319 6.66664 10.1356 6.66664 8.66521C6.66664 7.37747 7.81375 6.30029 9.33333 6.05248V5.33186H10.6666V6.05248C12.1862 6.30029 13.3333 7.37747 13.3333 8.66521H12C12 7.94256 11.084 7.3319 10.0001 7.3319C8.91604 7.3319 8.00002 7.94256 8.00002 8.66521C8.00002 9.38786 8.91598 9.99853 9.99999 9.99853ZM26.4046 16.127L25.462 17.0697L23.3335 14.9413L21.1572 17.1176L19.1716 9.8367L26.4525 11.8224L24.2762 13.9987L26.4046 16.127Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_145_150">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ,
      title: 'Pay Now Page',
      desc: 'Payroll is now due. Open this summary page. This page tells you what your payroll will be for each employee.  The time period between payroll is up to you. Fast, easy, painless. '
    },
    {
      icon:
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_145_157)">
            <path d="M4.85056 28H8.14937C8.61912 28 8.99994 27.6191 8.99994 27.1494V19.6933C8.99994 19.2236 8.61906 18.8428 8.14937 18.8428H4.85056C4.38081 18.8428 4 19.2236 4 19.6933V27.1494C4 27.6191 4.38088 28 4.85056 28Z" fill="white" />
            <path d="M12.3506 28H15.6494C16.1191 28 16.4999 27.6191 16.4999 27.1494V14.6933C16.4999 14.2236 16.1191 13.8428 15.6494 13.8428H12.3506C11.8808 13.8428 11.5 14.2236 11.5 14.6933V27.1494C11.5 27.6191 11.8809 28 12.3506 28Z" fill="white" />
            <path d="M19.8506 28H23.1494C23.6191 28 23.9999 27.6191 23.9999 27.1494V8.69334C23.9999 8.22359 23.6191 7.84277 23.1494 7.84277H19.8506C19.3808 7.84277 19 8.22365 19 8.69334V27.1494C19 27.6191 19.3809 28 19.8506 28Z" fill="white" />
            <path d="M27.3506 28H30.6494C31.1191 28 31.4999 27.6191 31.4999 27.1494V2.69334C31.4999 2.22359 31.1191 1.84277 30.6494 1.84277H27.3506C26.8808 1.84277 26.5 2.22365 26.5 2.69334V27.1494C26.5 27.6191 26.8809 28 27.3506 28Z" fill="white" />
            <path d="M31.1494 30.125H2.85056C2.38088 30.125 2 29.7441 2 29.2744V0.850563C2 0.380875 1.61913 0 1.14944 0H0.850625C0.380875 0 0 0.380875 0 0.850563V31.1494C0 31.6191 0.380875 32 0.850563 32H31.1494C31.6191 32 31.9999 31.6191 31.9999 31.1494V30.9756C32 30.5059 31.6191 30.125 31.1494 30.125Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_145_157">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ,
      title: 'Gross Sales Report',
      desc: 'Arguably the most viewed report in the software. Most owners want to keep close track of this number.  Get it in reports or see it at every login from your dashboard.'
    },
    {
      icon:
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_145_173)">
            <path d="M19.8071 9.95788C17.6935 8.74079 14.2778 8.73425 12.1774 9.95788C10.0769 11.175 10.09 13.1576 12.2036 14.3747C14.3171 15.5918 17.7328 15.5918 19.8267 14.3747C21.9337 13.1511 21.9206 11.175 19.8071 9.95788ZM18.8386 11.8751C18.6554 11.934 18.4787 11.9929 18.289 12.0452C18.1777 12.078 18.1123 12.0845 18.0599 12.0583C18.0338 12.0452 18.0076 12.0125 17.988 11.9733C17.8636 11.777 17.6804 11.6068 17.4252 11.4629C17.3991 11.4432 17.3663 11.4302 17.3336 11.4105C17.2551 11.3713 17.17 11.332 17.0719 11.3124C16.7185 11.2339 16.411 11.3647 16.4568 11.5807C16.4764 11.6919 16.5353 11.7966 16.6073 11.9013C16.7316 12.078 16.869 12.2546 16.9606 12.4378C17.2551 13.0268 16.6138 13.6026 15.5931 13.6615C15.2201 13.6811 14.8733 13.6353 14.5461 13.5306C14.4022 13.4848 14.2975 13.4848 14.1862 13.5568C14.0815 13.6222 13.9637 13.6876 13.8525 13.7531C13.7544 13.812 13.6497 13.812 13.545 13.7531C13.473 13.7138 13.401 13.6746 13.329 13.6353C13.2767 13.6091 13.2309 13.5764 13.1785 13.5437C13.0738 13.4848 13.0869 13.4194 13.1916 13.3539C13.2701 13.3081 13.3552 13.2558 13.4337 13.21C13.6169 13.1053 13.6169 13.0922 13.4664 12.9744C13.2767 12.8239 13.1065 12.6669 13.0019 12.4902C12.9168 12.3528 12.943 12.3201 13.1524 12.2481C13.3159 12.1957 13.473 12.1434 13.6366 12.091C13.7544 12.0518 13.8198 12.0452 13.8721 12.0714C13.8983 12.091 13.9245 12.1172 13.9441 12.163C14.0554 12.3593 14.2255 12.5425 14.448 12.7061C14.4872 12.7323 14.5265 12.7585 14.5657 12.7847C14.6835 12.8566 14.8209 12.909 14.9845 12.9482C15.3837 13.0398 15.7566 12.8763 15.7108 12.6276C15.6978 12.5425 15.652 12.464 15.5996 12.379C15.4622 12.1761 15.2855 11.9798 15.1874 11.7639C15.0369 11.4171 15.1023 11.0964 15.5931 10.8478C16.1427 10.5664 16.7578 10.5468 17.4056 10.7235C17.6739 10.7954 17.6739 10.7954 17.8767 10.6777C17.9487 10.6384 18.0141 10.5991 18.0861 10.5599C18.2432 10.4748 18.2955 10.4748 18.4526 10.5599C18.4722 10.5664 18.4853 10.5795 18.4984 10.586C18.5311 10.6057 18.5638 10.6253 18.59 10.6449C18.9171 10.8347 18.9171 10.8347 18.5965 11.0245C18.3675 11.1553 18.3675 11.1619 18.5573 11.3124C18.7077 11.4302 18.8255 11.561 18.9171 11.6919C18.9891 11.7835 18.9629 11.8359 18.8386 11.8751ZM31.8012 14.0999L12.6027 3.02181C12.341 2.87131 11.9091 2.87131 11.6474 3.02181L0.209391 9.66996C-0.0523477 9.82046 -0.0523477 10.0691 0.209391 10.2262L19.4014 21.3042C19.6696 21.4613 20.095 21.4547 20.3567 21.3042L31.8012 14.6561C32.0629 14.5056 32.0695 14.2569 31.8012 14.0999ZM21.7963 18.7457C21.6916 18.641 21.5607 18.5494 21.4102 18.4644C20.4352 17.9016 18.8582 17.9016 17.8833 18.4644C17.8113 18.5102 17.7459 18.5494 17.6804 18.6018L4.75055 11.1292C4.87488 11.0768 4.99266 11.0245 5.1039 10.959C6.07233 10.3963 6.06579 9.4802 5.09081 8.91747C4.98612 8.85858 4.86833 8.79968 4.75055 8.75388L10.0835 5.65882C10.1685 5.72426 10.2601 5.79624 10.3648 5.85513C11.3398 6.41787 12.9233 6.41787 13.8918 5.85513C14.003 5.78969 14.1012 5.72426 14.1797 5.65228L27.1488 13.1445C26.9787 13.2034 26.8151 13.2754 26.6711 13.3605C25.7027 13.9232 25.7092 14.8393 26.6842 15.402C26.8347 15.4871 27.0049 15.5591 27.1815 15.6245L21.7963 18.7457ZM23.3601 15.919L22.516 16.4097C22.3852 16.4817 22.1758 16.4882 22.0449 16.4097L20.5595 15.5525C20.4287 15.474 20.4287 15.3562 20.5595 15.2777L21.4037 14.787C21.5345 14.715 21.7439 14.7084 21.8748 14.787L23.3601 15.6441C23.491 15.7227 23.491 15.847 23.3601 15.919ZM11.4511 9.04179L10.6069 9.53255C10.4761 9.60453 10.2667 9.61107 10.1358 9.53255L8.65045 8.67536C8.51958 8.59684 8.51958 8.47905 8.65045 8.40053L9.49456 7.90977C9.62543 7.8378 9.83482 7.83125 9.96569 7.90977L11.4511 8.76697C11.5819 8.84549 11.5819 8.96981 11.4511 9.04179ZM30.5056 17.509L31.9975 18.3728L20.0034 25.3415L19.6107 25.1191L18.5049 24.4844L0 13.7793L1.47882 12.9221L19.9903 23.6141L30.5056 17.509ZM30.4794 21.2846L31.9713 22.1483L20.023 29.091L19.6369 28.8685L18.5311 28.2338L0 17.509L1.47882 16.6518L20.0164 27.37L30.4794 21.2846Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_145_173">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>

      ,
      title: 'Payroll History Report',
      desc: 'How much are my employees being paid or maybe I just want to review one employees pay. This provides you quick access to all payroll actions.'
    },
    {
      icon:
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_145_170)">
            <path d="M9.9177 13.4817C9.62237 13.7291 9.27914 13.8249 8.79224 13.8728V11.2387C9.37493 11.4303 9.76604 11.6298 10.0135 11.8214C10.2051 12.013 10.3567 12.3083 10.3567 12.6515C10.3089 12.9948 10.1652 13.2821 9.9177 13.4817ZM7.81851 6.59317C7.37949 6.64106 7.03627 6.78473 6.78882 6.98429C6.54138 7.23173 6.3977 7.51908 6.3977 7.81442C6.3977 8.15765 6.49349 8.39711 6.69304 8.59666C6.88461 8.78823 7.27573 8.98778 7.81851 9.17935V6.59317ZM30.7748 12.1646V28.3841C30.7748 30.3876 29.1625 32.0001 27.159 32.0001H4.84121C2.83771 32.0001 1.22534 30.3876 1.22534 28.3841V3.61586C1.22534 1.61237 2.83771 0 4.84121 0H18.8098C20.2225 0 20.909 0.39112 21.787 1.31704L29.4098 9.03567C30.4316 10.0095 30.7748 10.648 30.7748 12.1646ZM14.7069 8.54876H20.0788C20.7173 8.54876 21.2044 8.06186 21.2044 7.47119V6.64106C21.2044 6.05837 20.7173 5.56348 20.0788 5.56348H14.7069V8.54876ZM7.81851 10.9913V13.8728C6.94048 13.7291 6.11035 13.338 5.28022 12.6036L4.20264 13.8728C5.28022 14.7987 6.50147 15.3415 7.81851 15.4852V16.5548H8.74442V15.4772C9.77411 15.4293 10.5484 15.1339 11.1869 14.5992C11.7696 14.0644 12.1128 13.33 12.1128 12.4999C12.1128 11.6219 11.8654 10.9833 11.3306 10.5443C10.7958 10.1053 9.96568 9.71414 8.84021 9.4667H8.79232V6.68097C9.57456 6.77675 10.261 7.11998 10.8916 7.55899L11.8654 6.19406C10.8916 5.5555 9.86191 5.16438 8.78433 5.11649V4.28636H7.85842V5.0207C6.9325 5.0686 6.15026 5.36393 5.55959 5.89873C4.9769 6.43352 4.63367 7.16787 4.63367 7.998C4.63367 8.82814 4.92901 9.4667 5.41591 9.9536C5.9108 10.3527 6.69304 10.7438 7.81851 10.9913ZM27.8933 26.8197C27.8933 26.2369 27.4064 25.7421 26.7678 25.7421H5.12848C4.48992 25.7421 4.0509 26.229 4.0509 26.8197V27.6498C4.0509 28.2324 4.53781 28.7274 5.12848 28.7274H26.7678C27.3506 28.7274 27.8933 28.2405 27.8933 27.6498V26.8197ZM27.8933 20.0748C27.8933 19.4921 27.4064 18.9973 26.7678 18.9973H5.12848C4.48992 18.9973 4.0509 19.4842 4.0509 20.0748V20.905C4.0509 21.4876 4.53781 21.9825 5.12848 21.9825H26.7678C27.3506 21.9825 27.8933 21.4956 27.8933 20.905V20.0748ZM27.8933 13.33C27.8933 12.7473 27.4064 12.2524 26.7678 12.2524H14.7069V15.2297H26.7758C27.3585 15.2297 27.9012 14.7428 27.9012 14.1522V13.33H27.8933Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_145_170">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ,
      title: 'Expense Reports',
      desc: 'Maybe I\'m being audited by the IRS or a state agency and I need to quickly back up my pay to my employees or contractors.  This report gives you instant comfort and security.  '
    },
    {
      icon:
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.66659 28H13.3333C13.6869 28 14.026 27.8595 14.2761 27.6095C14.5261 27.3594 14.6666 27.0203 14.6666 26.6667C14.6666 26.3131 14.5261 25.9739 14.2761 25.7239C14.026 25.4738 13.6869 25.3333 13.3333 25.3333H4.09459C4.41813 23.1131 5.52943 21.0833 7.22558 19.6146C8.92173 18.1458 11.0896 17.3361 13.3333 17.3333C14.9032 17.347 16.4285 16.8109 17.6447 15.818C18.8609 14.8251 19.6914 13.438 19.9923 11.8971C20.2931 10.3561 20.0454 8.7585 19.292 7.38105C18.5386 6.00359 17.327 4.93313 15.8673 4.35518C14.4075 3.77723 12.7915 3.72823 11.2994 4.21665C9.80725 4.70508 8.53303 5.70015 7.69755 7.02942C6.86207 8.35869 6.51798 9.93837 6.72492 11.4947C6.93186 13.051 7.67678 14.4859 8.83059 15.5507C6.61753 16.4485 4.72228 17.9855 3.38686 19.9654C2.05144 21.9454 1.33647 24.2785 1.33325 26.6667C1.33325 27.0203 1.47373 27.3594 1.72378 27.6095C1.97382 27.8595 2.31296 28 2.66659 28ZM13.3333 6.66668C14.1244 6.66668 14.8977 6.90128 15.5555 7.3408C16.2133 7.78033 16.726 8.40504 17.0288 9.13595C17.3315 9.86685 17.4107 10.6711 17.2564 11.447C17.1021 12.223 16.7211 12.9357 16.1617 13.4951C15.6023 14.0545 14.8895 14.4355 14.1136 14.5898C13.3377 14.7442 12.5334 14.665 11.8025 14.3622C11.0716 14.0595 10.4469 13.5468 10.0074 12.889C9.56785 12.2312 9.33325 11.4578 9.33325 10.6667C9.33325 9.60582 9.75468 8.5884 10.5048 7.83826C11.255 7.08811 12.2724 6.66668 13.3333 6.66668ZM30.6666 18V24.6667C30.6666 24.8435 30.5963 25.0131 30.4713 25.1381C30.3463 25.2631 30.1767 25.3333 29.9999 25.3333H28.6666V28L25.3333 25.3333H19.3333C19.1564 25.3333 18.9869 25.2631 18.8618 25.1381C18.7368 25.0131 18.6666 24.8435 18.6666 24.6667V18C18.6666 17.8232 18.7368 17.6536 18.8618 17.5286C18.9869 17.4036 19.1564 17.3333 19.3333 17.3333H29.9999C30.1767 17.3333 30.3463 17.4036 30.4713 17.5286C30.5963 17.6536 30.6666 17.8232 30.6666 18Z" fill="white" />
        </svg>
      ,
      title: 'Customer Reports',
      desc: 'Sometimes you just want to drill down and determine what you customer has been spending with your company.  Do this easily by date with CommissionPayPro. '
    }
  ]

  const toggleTheme = () => {
    console.log("local>>",window.localStorage.theme)
    if (window.localStorage.theme === 'dark' || (!('theme' in window.localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {

      document.documentElement.classList.remove('dark')
      window.localStorage.theme = 'light'
    } else {
      document.documentElement.classList.add('dark')
      window.localStorage.theme = 'dark'
    }
  }

  useEffect(() => {
    if (window.localStorage.theme === 'dark' || (!('theme' in window.localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

  }, [])

  const handleEmailClick = () => {
    const recipient = '17202207465@tmomail.net';
    const subject = '🚀Hi! I am CPP USER!';
    const body = '';

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  };

  const EmailButton = () => {
    handleEmailClick();
  }

  return (
    <main className='relative overflow-hidden'>
      <div className='w-full h-auto max-w-[95%] sm:max-w-[90%] md:max-w-[640px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] ml-auto mr-auto overflow-hidden'>
        <div className='hidden dark:block'>
          <Image
            src={lineEffect_1}
            className="md:block top-0 w-[40%] h-auto absolute right-0 z-[-1] hidden"
            width={800}
            height={800}
            priority
            alt="line-effect"
          />
        </div>
        <Image
          src={bannerShape_4_1}
          className="hidden md:block top-0 left-0 h-auto absolute z-[-1] dark:hidden"
          width={1009}
          height={696}
          priority
          alt="spiral-effect"
        />
        <Image width={700} height={681} className='absolute top-0 left-0 hidden dark:block' src={light_t1} alt='light-effect' />
        <Image width={800} height={800} className='absolute top-0 right-0 hidden dark:block' src={light_tr} alt='light-effect' />
        <Image width={800} height={800} className='absolute top-24 right-0 hidden dark:block' src={light_m} alt='light-effect' />
        <Image width={800} height={800} className='absolute top-96 hidden dark:block' src={star_bg_1} alt='star-bg' />
        <div className="absolute w-full left-0 h-screen z-[-5]">
          <div className="w-full h-screen relative">
            <Image
              src={wav_bg}
              className="hidden md:block botto left-0 bottom-0 w-full h-auto absolute z-[-2] dark:hidden"
              width={1442}
              height={776}
              priority
              alt="wav-bg"
            />
          </div>
        </div>
        <section className='w-full h-auto md:h-screen relative z-10'>
          <header className='w-full h-auto py-[40px] flex items-center justify-between absolute z-50'>
            <Link href="/" className='flex justify-between items-center w-auto'>
              <Image
                src={logo}
                alt="Logo"
                className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] md:w-[58px] md:h-[58px] mr-2 sm:mr-3 md:mr-6"
                width={58}
                height={58}
                priority
              />
              <h1 className='dark:text-white text-[#1e1e1e] sm-[14px] sm:text-[18px] md:text-[32px] font-semibold font-kanit'>COMMISSION <span className='text-[#143EC7] dark:text-[#15BFFD]'>PAYPRO</span></h1>
            </Link>
            <button className='fixed top-10 right-5 md:top-10 md:right-24 bg-[#00000000] bg-white dark:bg-[#4ccfff] p-2 w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] md:w-[50px] md:h-[50px] rounded-full flex justify-center items-center border-[1px] border-[#143EC7] dark:border-[#ffffff] z-50' onClick={toggleTheme}>
              <svg
                className="dark:hidden block"
                viewBox="0 0 24 24"
                fill="#143EC7"
                height="32"
                width="32"
              >
                <path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759L4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605l-1.414 1.414-2.122-2.122 1.414-1.414z" />
              </svg>
              <svg
                className="dark:block hidden"
                viewBox="0 0 384 512"
                fill="#ffffff"
                height="24"
                width="24"
              >
                <path d="M223.5 32C100 32 0 132.3 0 256s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
              </svg>
            </button>
          </header>
          <div className='w-full h-auto flex flex-col md:flex-row justify-between items-end md:absolute bottom-0'>
            <div className='mt-[150px] sm:mt-[200px] md:mt-[100px] h-auto md:h-screen flex items-center'>
              <div>
                <h2 className='text-center md:text-left text-[18px] sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[48px] 2xl:text-[64px] font-lalezar text-[#1e1e1e] dark:text-white'>Instantly Solve Sales Commission Management for your Business</h2>
                <Image className='hidden dark:block ml-auto mr-auto md:ml-0' width={453} height={66} src={electric} alt='electric' />
                <p className='text-center md:text-left text-[12px] sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl dark:text-white text-[#1e1e1e] mt-2 leading-[42px]'>Effortlessly Manage Payments for your Expanding Workforce Supercharge Sales while Eliminating Payroll Problems Add Employees, Build Commissions, Easily Track Compensation Target Sales Make Payroll Stress Free</p>
                <div className='flex gap-6'>
                  <a href='https://app.commissionpaypro.com/' target="_blank" className='z-10 ml-auto mr-auto md:ml-0 md:mr-0 w-[40%] h-[50px] lg:w-[200px] lg:h-[60px] flex justify-center items-center text-center text-white text-[12px] lg:text-[20px] bg-[#143EC7] dark:bg-[#15BFFD] rounded-[30px] mt-12 hover:brightness-110 transition-all'>Start For Free</a>
                  <button className="ml-auto mr-auto md:ml-0 md:mr-0 w-[40%] h-[50px] lg:w-[230px] lg:h-[60px] flex justify-center items-center text-center text-white text-[12px] lg:text-[20px] bg-[#143EC7] dark:bg-[#15BFFD] rounded-[30px] mt-12 hover:brightness-110 transition-all" onClick={() => EmailButton()}>
                    Contact Sales Now
                  </button>
                </div>
              </div>
            </div>
            <Image
              src={hero}
              alt="Hero"
              className="w-[90%] md:w-[320px] lg:w-[480px] xl:w-[540px] 2xl:w-[689px] h-full dark:hidden"
              width={1000}
              height={1500}
              priority
            />
            <Image
              src={hero_2}
              alt="Hero"
              className="w-[90%] md:w-[320px] lg:w-[480px] xl:w-[540px] 2xl:w-[689px] h-full hidden dark:block"
              width={1000}
              height={1500}
              priority
            />
          </div>
        </section>
        <Image width={800} height={800} className='absolute top-[60vh] right-0 z-[-1] hidden dark:block' src={light_r}  alt='light effect' />
        <Image width={800} height={800} className='absolute top-[100vh] left-0 z-[-1] hidden dark:block' src={light_l} alt='light effect' />
        <section className='w-full h-[300px] overflow-hidden'>
          <div className="absolute w-[5000px] h-[300px] bg-gradient-to-r dark:bg-gradient-to-r from-[#143EC7] dark:from-[#ffffff00] dark:to-[#ffffff00] to-[#8EA5F4] dark:bg-[#ffffff0a] backdrop-blur-sm left-0 flex items-center">
            <div className='my-logo-slide flex items-center justify-between'>
              <div className='bg-[#ffffff00] w-[250px] h-[150px] flex items-center justify-center'>
                <Image width={800} height={800} className='w-auto h-[100px]' src={company_logo_1} alt='1st Nations Mortgage mobile' />
              </div>
              <div className='bg-[#ffffff00] w-[250px] h-[150px] flex items-center justify-center'>
                <Image width={800} height={800} className='w-auto h-[100px]' src={company_logo_2} alt='Beyond Consequences Inst' />
              </div>
              <div className='bg-[#ffffff00] w-[250px] h-[150px] flex items-center justify-center'>
                <Image width={800} height={800} className='w-auto h-[100px]' src={company_logo_3} alt='My Market Partners' />
              </div>
              <div className='bg-[#ffffff00] w-[250px] h-[150px] flex items-center justify-center'>
                <Image width={800} height={800} className='w-auto h-[100px]' src={company_logo_4} alt='Virtual Pro Learn' />
              </div>
              <div className='bg-[#ffffff00] w-[250px] h-[150px] flex items-center justify-center'>
                <Image width={800} height={800} className='w-auto h-[100px]' src={company_logo_5} alt='The Rubric' />
              </div>
              <div className='bg-[#ffffff00] w-[250px] h-[150px] flex items-center justify-center'>
                <Image width={800} height={800} className='w-auto h-[100px]' src={company_logo_6} alt='Cryptohomz' />
              </div>
              <div className='bg-[#ffffff00] w-[250px] h-[150px] flex items-center justify-center'>
                <Image width={800} height={800} className='w-auto h-[100px]' src={company_logo_7} alt='1st Nations Mortgage Logo' />
              </div>
              <div className='bg-[#ffffff00] w-[250px] h-[150px] flex items-center justify-center'>
                <Image width={800} height={800} className='w-auto h-[100px]' src={company_logo_8}  alt='Payyus Technologies' />
              </div>
              <div className='bg-[#ffffff00] w-[250px] h-[150px] flex items-center justify-center'>
                <Image width={800} height={800} className='w-auto h-[100px]' src={company_logo_1} alt='1st Nations Mortgage mobile' />
              </div>
              <div className='bg-[#ffffff00] w-[250px] h-[150px] flex items-center justify-center'>
                <Image width={800} height={800} className='w-auto h-[100px]' src={company_logo_2} alt='Beyond Consequences Inst' />
              </div>
              <div className='bg-[#ffffff00] w-[250px] h-[150px] flex items-center justify-center'>
                <Image width={800} height={800} className='w-auto h-[100px]' src={company_logo_3} alt='My Market Partners' />
              </div>
              <div className='bg-[#ffffff00] w-[250px] h-[150px] flex items-center justify-center'>
                <Image width={800} height={800} className='w-auto h-[100px]' src={company_logo_4} alt='Virtual Pro Learn' />
              </div>
              <div className='bg-[#ffffff00] w-[250px] h-[150px] flex items-center justify-center'>
                <Image width={800} height={800} className='w-auto h-[100px]' src={company_logo_5} alt='The Rubric' />
              </div>
              <div className='bg-[#ffffff00] w-[250px] h-[150px] flex items-center justify-center'>
                <Image width={800} height={800} className='w-auto h-[100px]' src={company_logo_6} alt='Cryptohomz' />
              </div>
              <div className='bg-[#ffffff00] w-[250px] h-[150px] flex items-center justify-center'>
                <Image width={800} height={800} className='w-auto h-[100px]' src={company_logo_7} alt='1st Nations Mortgage Logo' />
              </div>
              <div className='bg-[#ffffff00] w-[250px] h-[150px] flex items-center justify-center'>
                <Image width={800} height={800} className='w-auto h-[100px]' src={company_logo_8} alt='Payyus Technologies' />
              </div>
            </div>
          </div>
        </section>
        <FeatureAreaHomeFour />
        <section className='mt-[150px]'>
          <Image width={800} height={800} className='absolute w-full h-auto z-[-1] hidden dark:block' src='/img/star-bg-3.png' alt='star elements' />
          <div className='w-full flex justify-center items-center'>
            <div>
              <h2 className='text-center font-kanit text-3xl md:text-[48px] text-[#143EC7] dark:text-[#00C4F4] mt-[4px] font-medium'>What&apos;s Included</h2>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 justify-between mt-24 mb-24 px-3'>
            {includedInfo.map((item, i) => (
              <div key={i} className="w-[99%] h-auto rounded-lg border-[0.1px] border-[#143EC7] dark:border-none dark:bg-gradient-to-br from-[#15BFFD] to-[#9C37FD] shadow-lg dark:shadow-none p-[1px] hover:scale-105 transition-all">
                <div className="flex h-full w-full items-center justify-center bg-[#ffffff] dark:bg-[#151735] back p-6 rounded-lg">
                  <div>
                    <div className='w-full relative flex justify-center'>
                      <div className='w-16 h-16 bg-[#143EC7] rounded-full flex justify-center items-center'>
                        {item.icon}
                      </div>
                    </div>
                    <h2 className='dark:text-white text-[#1e1e1e] text-[18px] md:text-[22px] font-medium text-center mt-[20px]'>
                      {item.title}
                    </h2>
                    <p className='text-[#7D7D7D] text-sm md:text-md text-center mt-[16px]'>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='block dark:hidden'>
            <Wave fill='#8EA5F4'
              className='absolute w-full left-0 h-[200px]'
              paused={false}
              style={{ display: 'flex' }}
              options={{
                height: 30,
                amplitude: 40,
                speed: 0.3,
                points: 3
              }}
            />
            <Wave fill='#143EC7'
              className='absolute w-full left-0 h-[200px]'
              paused={false}
              style={{ display: 'flex' }}
              options={{
                height: 30,
                amplitude: 40,
                speed: 0.3,
                points: 2
              }}
            />
          </div>
        </section>
        <div className='w-full absolute left-0'>
          <Image width={800} height={800} className='absolute top-[400px] right-0 z-[1] hidden dark:block' src={light_r} alt='light effect' />
          <Image width={800} height={800} className='absolute top-[-400px] left-0 z-[1] hidden dark:block' src={light_l} alt='light effect' />
        </div>
        <section className='mt-[200px] sm:mt-[300px] md:mt-[400px]'>
          <div className='w-full'>
            <div>
              <h2 className='text-center font-kanit text-2xl md:text-[48px] text-[#143EC7] dark:text-[#00C4F4] mt-[4px] font-medium'>Road Map</h2>
            </div>
            <div className="mt-6 backdrop-blur-[1px] bg-[#ffffffcc] dark:bg-[#080B2Acc] z-[-10]">
              <div className="relative w-full h-auto">
                <div className="tpprocess-shape-four block md:hidden absolute mt-[200px] mr-[300px] z-[1]">
                  <Image src={proccess_img} alt="theme-pure" />
                </div>
              </div>
              <div className='mb-[500px] xl:mb-0'>
                <div className='flex justify-center items-center'>
                  <div className='flex flex-col xl:flex-row w-auto md:max-w-full xl:w-[1200px] mt-[60px]                                          '>
                    <div className='flex flex-col gap-[50vw] sm:gap-[300px] xl:gap-0'>
                      <div className='w-auto md:w-[522px] xl:h-[250px] flex justify-center items-center p-[37px]'>
                        <Image width={523} height={256} className='absolute z-[-1] hue-rotate-[309deg] dark:hue-rotate-0' src={road_map_left} alt='road map left box' />
                        <div className='w-full'>
                          <p className='w-full text-xs md:text-[20px] font-medium text-[#1e1e1e] dark:text-white text-center'>January</p>
                          <p className='text-sm md:text-[32px] mt-[4px] md:mt-[14px] text-[#1e1e1e] dark:text-white dark:font-thin font-normal text-center'>You’re a New Business</p>
                          <p className='font-medium text-[#1e1e1e] dark:text-[#B4C5CB] text-[10px] md:text-base mt-[4px] md:mt-[14px] text-center'>You’ve headed into 2024 with one employee. Paying him a straight 25% each week is simple.</p>
                        </div>
                      </div>
                      <div className='w-auto md:w-[522px] xl:h-[250px] mt-[126px] flex justify-center items-center p-[37px]'>
                        <Image width={523} height={256} className='absolute hidden dark:block z-[-1]' src={road_map_left} alt='road map left box' />
                        <Image width={523} height={256} className='absolute block dark:hidden z-[-1] hue-rotate-[309deg]' src={road_map_left} alt='road map left box' />
                        <div className='w-full'>
                          <p className='w-full text-xs md:text-[20px] font-medium text-[#1e1e1e] dark:text-white text-center'>March</p>                         <p className='text-lg md:text-[32px] mt-[4px] te md:mt-[14px]xt-[#1e1e1e] dark:text-white dark:font-thin font-normal text-center'>Start Accepting Receipts</p>
                          <p className='font-medium text-[#1e1e1e] dark:text-[#B4C5CB] text-[10px] md:text-base mt-[4px] md:mt-[14px] text-center'>A small team of 3 come aboard.  They want to submit expenses to you.  No problem.  Commission PayPro hast a built in document uploader</p>
                        </div>
                      </div>
                      <div className='w-auto md:w-[522px] xl:h-[250px] mt-[126px] flex justify-center items-center p-[37px]'>
                        <Image width={523} height={256} className='absolute hidden dark:block z-[-1]' src={road_map_left} alt='road map left box' />
                        <Image width={523} height={256} className='absolute block dark:hidden z-[-1] hue-rotate-[309deg]' src={road_map_left} alt='road map left box' />
                        <div className='w-full'>
                          <p className='w-full text-xs md:text-[20px] font-medium text-[#1e1e1e] dark:text-white text-center'>May</p>
                          <p className='text-sm md:text-[32px] mt-[4px] md:mt-[14px] text-[#1e1e1e] dark:text-white dark:font-thin font-normal text-center'>Yikes an audit</p>
                          <p className='font-medium text-[#1e1e1e] dark:text-[#B4C5CB] text-[10px] md:text-base mt-[4px] md:mt-[14px] text-center'>You have your first audit, but Commission PayPro is a life saver.  You easily provide many different reports to the auditor and easily pass.</p>
                        </div>
                      </div>
                    </div>
                    <div className='hidden xl:block'>
                      <Image width={192} height={900} className='mt-[114px] hidden dark:block' src={road_map_center} alt='road map arrow' />
                      <Image width={192} height={900} className='mt-[114px] block dark:hidden' src={road_map_center_2} alt='road map arrow' />
                    </div>
                    <div className='flex flex-col gap-[50vw] sm:gap-[300px] xl:gap-0 absolute xl:relative mt-[25vw] sm:mt-[160px] xl:mt-0'>
                      <div className='w-auto md:w-[522px] xl:h-[250px] mt-[126px] flex justify-center items-center p-[37px]'>
                        <Image width={525} height={256} className='absolute hidden dark:block z-[-1]' src={road_map_right} alt='road map right box' />
                        <Image width={525} height={256} className='absolute block dark:hidden z-[-1] hue-rotate-[309deg]' src={road_map_right} alt='road map right box' />
                        <div className='w-full'>
                          <p className='w-full text-xs md:text-[20px] font-medium text-[#1e1e1e] dark:text-white text-center'>February</p>
                          <p className='text-sm md:text-[32px] mt-[4px] md:mt-[14px] text-[#1e1e1e] dark:text-white dark:font-thin font-normal text-center'>Business is Picking Up</p>
                          <p className='font-medium text-[#1e1e1e] dark:text-[#B4C5CB] text-[10px] md:text-base mt-[4px] md:mt-[14px] text-center'>You’ve added another two employees. One is paid at 23% and the other is 20 ½%. Confusing.  Better get Commission PayPro.</p>
                        </div>
                      </div>
                      <div className='w-auto md:w-[522px] xl:h-[250px] mt-[126px] flex justify-center items-center p-[37px]'>
                        <Image width={525} height={256} className='absolute hidden dark:block z-[-1]' src={road_map_right} alt='road map right box' />
                        <Image width={525} height={256} className='absolute block dark:hidden z-[-1] hue-rotate-[309deg]' src={road_map_right} alt='road map right box' />
                        <div className='w-full'>
                          <p className='w-full text-xs md:text-[20px] font-medium text-[#1e1e1e] dark:text-white text-center'>April</p>
                          <p className='text-sm md:text-[32px] mt-[4px] md:mt-[14px] text-[#1e1e1e] dark:text-white dark:font-thin font-normal text-center'>Your Company is on Fire Now</p>
                          <p className='font-medium text-[#1e1e1e] dark:text-[#B4C5CB] text-[10px] md:text-base mt-[4px] md:mt-[14px] text-center'>Sales associates are being added at many different commission rates.  Commission PayPro easily keeps track of all employee sales and compensations.</p>
                        </div>
                      </div>
                      <div className='w-auto md:w-[522px] xl:h-[250px] mt-[126px] flex justify-center items-center p-[37px]'>
                        <Image width={525} height={256} className='absolute hidden dark:block z-[-1]' src={road_map_right} alt='road map right box' />
                        <Image width={525} height={256} className='absolute block dark:hidden z-[-1] hue-rotate-[309deg]' src={road_map_right} alt='road map right box' />
                        <div className='w-full'>
                          <p className='w-full text-xs md:text-[20px] font-medium text-[#1e1e1e] dark:text-white text-center'>June</p>
                          <p className='text-sm md:text-[32px] mt-[4px] md:mt-[14px] text-[#1e1e1e] dark:text-white dark:font-thin font-normal text-center'>You Hit 50 Employees</p>
                          <p className='font-medium text-[#1e1e1e] dark:text-[#B4C5CB] text-[10px] md:text-base mt-[4px] md:mt-[14px] text-center'>Time to integrate services so you move to Commission PayPro’s Enterprise version and you integrate your sales and payroll service with Commission PayPro. Running your business is even easier!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full h-auto">
              <div className="w-full absolute left-0 z-[-10]">
                <div className="tpprocess-shape-four hidden md:block absolute z-[-1] left-0">
                  <Image className="mt-[-1050px] z-[-10]" width={2000} height={2000} src={rocket_1} alt="theme-pure" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='w-full absolute left-0'>
          <Image width={800} height={800} className='absolute top-[400px] right-0 z-[1] hidden dark:block' src={light_r} alt='light effect' />
          <Image width={800} height={800} className='absolute top-[-400px] left-0 z-[1] hidden dark:block' src={light_l} alt='light effect' />
        </div>

        <section className='w-full h-[528px] mt-[100px] md:mt-[200px]'>
          <div className='w-full h-[750px] md:h-[650px] bg-gradient-to-r dark:bg-gradient-to-r md:from-[#143EC7] dark:from-[#ffffff00] from-[#ffffff00] dark:to-[#ffffff00] to-[#ffffff00 md:to-[#8EA5F4] dark:bg-[#ffffff0a] backdrop-blur-sm absolute left-0 bg-[#8EA5F4]'></div>
          <div className='h-[528px] flex items-center absolute z-[-1] justify-between'>
            <Image
              src={mock_up}
              alt="mockup bg"
              className="w-[200px] h-[200px] md:w-[427px] md:h-[427px] ml-[100px]"
              width={427}
              height={427}
              priority
            />
            <Image width={106} height={127} className="ml-[100px] hidden dark:block w-auto" src={start_bg_2} alt='star' />
          </div>
          <div className='relative w-full h-[528px] justify-between flex-col flex md:flex-row items-center'>
            <Image
              src={demo}
              alt="mockup"
              className="mt-12 md:mt-0 md:w-[300px] lg:w-[420px] xl:w-[512px] 2xl:w-[617px] h-auto z-10"
              width={617}
              height={342}
              priority
            />
            <div className='w-full md:w-[49%] lg:w-[50%] mt-10 md:mt-0'>
              <h2 className='text-white text-center md:text-left text-[12px] lg:text-base text-'>Track Employee&apos;s Sales Commissions in Less Time</h2>
              <h2 className='text-white dark:text-[#15BFFD] text-center md:text-left text-[24px] lg:text-[36px] font-kanit font-medium mt-4'>Rated Best Sales Commission Software</h2>
              <p className='text-white text-center md:text-left text-[14px] lg:text-[20px] leading-[30px] mt-6'>Commission Pay Pro provides the One Critical Link for Business to Increase Sales, Track Sales Commissions,Effortlessly Pay Employees Wages and Expenses</p>
              <a href='https://app.commissionpaypro.com/' target='_blank' className='z-10 ml-auto mr-auto md:ml-0 md:mr-0 w-[150px] h-[50px] lg:w-[200px] lg:h-[60px] flex justify-center items-center text-center text-white text-[16px] lg:text-[20px] bg-[#143EC7] dark:bg-[#15BFFD] rounded-[30px] mt-12 hover:brightness-110 transition-all'>Start For Free</a>
            </div>
          </div>
          <div className='block dark:hidden mt-32 md:mt-0'>
            <Wave fill='#f7effd'
              className='absolute w-full left-0'
              paused={false}
              style={{ display: 'flex' }}
              options={{
                height: 40,
                amplitude: 40,
                speed: 0.3,
                points: 2
              }}
            />
            <Wave fill='#ffffff'
              className='absolute w-full left-0'
              paused={false}
              style={{ display: 'flex' }}
              options={{
                height: 40,
                amplitude: 40,
                speed: 0.3,
                points: 3
              }}
            />
          </div>
        </section>
        <section className='mt-[212px] pt-[112px]'>
          <div className='w-full flex justify-center items-center'>
            <div>
              <h2 className='text-center font-kanit text-2xl md:text-[48px] text-[#143EC7] dark:text-[#00C4F4] mt-[4px] font-medium'>Top Voice</h2>
              <p className='text-center dark:text-white text-[#1e1e1e] text-xl md:text-[22px] mt-[15px]'>What Our Clients Have to Say</p>
            </div>
          </div>
          <div className='grid lg:grid-cols-2 2xl:grid-cols-3 gap-8 justify-between mt-24 md p-3 sm:p-6 md:p-9:lg:p-12'>
            <div className="w-full h-auto rounded-lg border-[0.1px] border-[#143EC7] dark:border-none dark:bg-gradient-to-br from-[#15BFFD] to-[#9C37FD] shadow-lg dark:shadow-none p-[1px] dark:hover:shadow-xl dark:hover:shadow-[#333764] hover:shadow-xl hover:shadow-[#888888] transition-all">
              <div className="flex h-full w-full items-center justify-center bg-[#ffffff] dark:bg-[#151735] back p-3 sm:p-9 md:p-12 rounded-lg">
                <div>
                  <div className='flex gap-3 w-full justify-start items-center rounded-lg'>
                    <div className='w-14 h-14 bg-[#D9D9D9] rounded-full'>
                      <Image width={800} height={800} className='w-14 h-14 rounded-full' src={client_3} alt='client photo' />
                    </div>
                    <div className='w-auto h-14 '>
                      <h2 className='dark:text-white text-[1e1e1e] text-xs sm:text-sm xl:text-lg 2xl:text-xl'>Mortgage Company CEO</h2>
                      <h2 className='text-sm sm:text-md md:text-lg 2xl:text-xl text-[#143EC7] dark:text-[#15BFFD] mt-[8px]'>Rich Baker</h2>
                    </div>
                  </div>
                  <p className='dark:text-[#ACACAC] text-[#1e1e1e] text-xs sm:text-base mt-[24px]'>CommissionPayPro has been a game-changer for me and my sales associates. As a mortgage professional, tracking commissions was always a tedious and time-consuming task. CommissionPayPro has streamlined my commission management process and has saved me valuable time. Thanks to this program, I can focus more on what I do best: closing deals and increasing my earnings.</p>
                </div>
              </div>
            </div>
            <div className="w-full h-auto rounded-lg border-[0.1px] border-[#143EC7] dark:border-none dark:bg-gradient-to-br from-[#15BFFD] to-[#9C37FD] shadow-lg dark:shadow-none p-[1px] dark:hover:shadow-xl dark:hover:shadow-[#333764] hover:shadow-xl hover:shadow-[#888888] transition-all">
              <div className="flex h-full w-full items-center justify-center bg-[#ffffff] dark:bg-[#151735] back p-3 sm:p-9 md:p-12 rounded-lg">
                <div>
                  <div className='flex gap-3 w-full justify-start items-center rounded-lg'>
                    <div className='w-14 h-14 bg-[#D9D9D9] rounded-full'>
                      <Image width={512} height={512} className='w-14 h-14 rounded-full' src={client_5} alt='client photo' />
                    </div>
                    <div className='w-auto h-14 '>
                      <h2 className='dark:text-white text-[1e1e1e] text-xs sm:text-sm xl:text-lg 2xl:text-xl'>Author/Speaker</h2>
                      <h2 className='text-sm sm:text-md md:text-lg 2xl:text-xl text-[#143EC7] dark:text-[#15BFFD] mt-[8px]'>Heather Forbes</h2>
                    </div>
                  </div>
                  <p className='dark:text-[#ACACAC] text-[#1e1e1e] text-xs sm:text-base mt-[24px]'>I can&apos;t express how grateful I am for CommissionPayPro. As a business woman, I have complete peace of mind knowing that my commission calculations are precise and error-free. CommissionPayPro has truly empowered me to take control of my commission pay and achieve financial success...<br /><br /><br /></p>
                </div>
              </div>
            </div>
            <div className="w-full h-auto rounded-lg border-[0.1px] border-[#143EC7] dark:border-none dark:bg-gradient-to-br from-[#15BFFD] to-[#9C37FD] shadow-lg dark:shadow-none p-[1px] dark:hover:shadow-xl dark:hover:shadow-[#333764] hover:shadow-xl hover:shadow-[#888888] transition-all">
              <div className="flex h-full w-full items-center justify-center bg-[#ffffff] dark:bg-[#151735] back p-3 sm:p-9 md:p-12 rounded-lg">
                <div>
                  <div className='flex gap-3 w-full justify-start items-center rounded-lg'>
                    <div className='w-14 h-14 bg-[#D9D9D9] rounded-full'>
                      <Image width={800} height={800} className='w-14 h-14 rounded-full' src={client_2} alt='client photo' />
                    </div>
                    <div className='w-auto h-14 '>
                      <h2 className='dark:text-white text-[1e1e1e] text-xs sm:text-sm xl:text-lg 2xl:text-xl'>Businessman</h2>
                      <h2 className='text-sm sm:text-md md:text-lg 2xl:text-xl text-[#143EC7] dark:text-[#15BFFD] mt-[8px]'>Mark Mayry</h2>
                    </div>
                  </div>
                  <p className='dark:text-[#ACACAC] text-[#1e1e1e] text-xs sm:text-base mt-[24px]'>I&apos;ve been in the sales industry for years tracking commissions with Excel, but none of these spreadsheets compares to CommissionPayPro. This platform has revolutionized the way I manage my commissions. The level of customization and flexibility. The detailed analytics and reporting features provided by CommissionPayPro have given me invaluable insights into my team&apos;s performance week after week.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <button className='z-10 w-[120px] h-[40px] md:w-[150px] md:h-[45px] lg:w-[200px] lg:h-[60px] flex justify-center items-center text-center text-[#143EC7] dark:text-[#15BFFD] text-[2 text-base0md:px] border-[1px] border-[#143EC7] dark:border-[#15BFFD] rounded-[30px] mt-6 md:mt-8 hover:brightness-110 transition-all'>Explore more</button>
          </div>
        </section>
        <FunfactAreaHomeOne />
        <section className='sm:[50px] md:mt-[112px]'>
          <div className='w-full flex justify-center items-center'>
            <div>
              <h2 className='text-center font-kanit text-2xl md:text-[48px] text-[#143EC7] dark:text-[#00C4F4] mt-[4px] font-medium'>Very Simple Pricing</h2>
              <p className='text-center dark:text-white text-[#1e1e1e] text-xl md:text-[22px] mt-[15px]'>Simple Pricing is based on your number of employees</p>
            </div>
          </div>

          <div className='grid lg:grid-cols-2 2xl:grid-cols-3 gap-8 justify-center mt-24 md p-3 sm:p-6 md:p-9:lg:p-12'>
            <div className="w-full h-auto rounded-lg border-[0.1px] border-[#143EC7] dark:border-none dark:bg-gradient-to-br from-[#15BFFD] to-[#9C37FD] shadow-lg dark:shadow-none p-[1px] dark:hover:shadow-xl dark:hover:shadow-[#333764] hover:shadow-xl hover:shadow-[#888888] transition-all">
              <div className="flex h-full w-full items-center justify-center bg-[#ffffff] dark:bg-[#151735] back p-3 sm:p-9 md:p-12 rounded-lg">
                <div className='w-full'>
                  <div className='flex flex-col gap-1'>
                    <h2 className='dark:text-white text-[1e1e1e] text-sm sm:text-[16px] md:text-[20px] font-medium'><br />PLUS for new business</h2>
                    <p className='text-[20px] sm:text-[24px] md:text-[32px] font-black text-[#143EC7] dark:text-[#15BFFD]'>$ 0.99 USD<span className='text-[14px] font-normal'>/month</span></p>
                    <p className='dark:text-white text-[1e1e1e] text-xs sm:text-sm leading-6'>For the first month, cancel anytime,<br />then $39.95/mo for up to 10 employees</p>
                  </div>
                  <div className='flex flex-col gap-4 mt-[24px] sm:mt-[32px] md:mt-[55px]'>
                    <div className='flex gap-2 items-center'>
                      <div className='w-4 h-4 md:w-6 md:h-6 bg-[#143EC7] dark:bg-[#15BFFD] rounded-full'></div>
                      <p className='text-[#143EC7] dark:text-[#15BFFD] text-sm sm:text-md md:text-lg'>Sign up to 10 employees</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <div className='w-4 h-4 md:w-6 md:h-6 bg-[#143EC7] dark:bg-[#15BFFD] rounded-full'></div>
                      <p className='text-[#143EC7] dark:text-[#15BFFD] text-sm sm:text-md md:text-lg'>Unlimited Commission Build</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <div className='w-4 h-4 md:w-6 md:h-6 bg-[#143EC7] dark:bg-[#15BFFD] rounded-full'></div>
                      <p className='text-[#143EC7] dark:text-[#15BFFD] text-sm sm:text-md md:text-lg'>Quick Learn Process</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <div className='w-4 h-4 md:w-6 md:h-6 bg-[#143EC7] dark:bg-[#15BFFD] rounded-full'></div>
                      <p className='text-[#143EC7] dark:text-[#15BFFD] text-sm sm:text-md md:text-lg'>Full Reporting Capabilities</p>
                    </div>
                  </div>
                  <div className='flex w-full justify-center'>
                    <a href='https://app.commissionpaypro.com/' target='_blank' className='w-[170px] h-[50px] lg:w-[230px] lg:h-[60px] flex justify-center items-center text-center text-white text-md md:text-[16px] lg:text-[20px] bg-[#143EC7] dark:bg-[#15BFFD] rounded-[30px] mt-[73px] hover:brightness-110 transition-all cursor-pointer'>Sign Up</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-auto rounded-lg border-[0.1px] border-[#143EC7] dark:border-none dark:bg-gradient-to-br from-[#15BFFD] to-[#9C37FD] shadow-lg dark:shadow-none p-[1px] dark:hover:shadow-xl dark:hover:shadow-[#333764] hover:shadow-xl hover:shadow-[#888888] transition-all">
              <div className="flex h-full w-full items-center justify-center bg-[#ffffff] dark:bg-[#151735] back p-3 sm:p-9 md:p-12 rounded-lg">
                <div className='w-full'>
                  <div className='flex flex-col gap-1'>
                    <h2 className='dark:text-white text-[1e1e1e] text-sm sm:text-[16px] md:text-[20px] font-medium'>PROFESSIONAL for growth (RECOMMENDED)</h2>
                    <p className='text-[20px] sm:text-[24px] md:text-[32px] font-black text-[#143EC7] dark:text-[#15BFFD]'>$ 89.95 USD<span className='text-[14px] font-normal'>/month</span></p>
                    <p className='dark:text-white text-[1e1e1e] text-xs sm:text-sm leading-6'>Add up to 24 employees<br /></p>
                  </div>
                  <div className='flex flex-col gap-4 mt-[24px] sm:mt-[32px] md:mt-[55px]'>
                    <div className='flex gap-2 items-center'>
                      <div className='w-4 h-4 md:w-6 md:h-6 bg-[#143EC7] dark:bg-[#15BFFD] rounded-full'></div>
                      <p className='text-[#143EC7] dark:text-[#15BFFD] text-sm sm:text-md md:text-lg'>Sign up to 24 employees</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <div className='w-4 h-4 md:w-6 md:h-6 bg-[#143EC7] dark:bg-[#15BFFD] rounded-full'></div>
                      <p className='text-[#143EC7] dark:text-[#15BFFD] text-sm sm:text-md md:text-lg'>Unlimited Commission Build</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <div className='w-4 h-4 md:w-6 md:h-6 bg-[#143EC7] dark:bg-[#15BFFD] rounded-full'></div>
                      <p className='text-[#143EC7] dark:text-[#15BFFD] text-sm sm:text-md md:text-lg'>Quick Learn Process</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <div className='w-4 h-4 md:w-6 md:h-6 bg-[#143EC7] dark:bg-[#15BFFD] rounded-full'></div>
                      <p className='text-[#143EC7] dark:text-[#15BFFD] text-sm sm:text-md md:text-lg'>Full Reporting Capabilities</p>
                    </div>
                  </div>
                  <div className='flex w-full justify-center'>
                    <a href='https://app.commissionpaypro.com/' target='_blank' className='w-[170px] h-[50px] lg:w-[230px] lg:h-[60px] flex justify-center items-center text-center text-white text-[16px] lg:text-[20px] bg-[#143EC7] dark:bg-[#15BFFD] rounded-[30px] mt-24 hover:brightness-110 transition-all cursor-pointer'>Sign Up</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-auto rounded-lg border-[0.1px] border-[#143EC7] dark:border-none dark:bg-gradient-to-br from-[#15BFFD] to-[#9C37FD] shadow-lg dark:shadow-none p-[1px] dark:hover:shadow-xl dark:hover:shadow-[#333764] hover:shadow-xl hover:shadow-[#888888] transition-all">
              <div className="flex h-full w-full items-center justify-center bg-[#ffffff] dark:bg-[#151735] back p-3 sm:p-9 md:p-12 rounded-lg">
                <div className='w-full'>
                  <div className='flex flex-col gap-1'>
                    <h2 className='dark:text-white text-[1e1e1e] text-sm sm:text-[16px] md:text-[20px] font-medium'>Ultimate for Enterprise</h2>
                    <p className='text-[20px] sm:text-[24px] md:text-[32px] font-black text-[#143EC7] dark:text-[#15BFFD]'>$ 349.95 USD<span className='text-[14px] font-normal'>/month</span></p>
                    <p className='dark:text-white text-[1e1e1e] text-xs sm:text-sm leading-6'>Sign up 25-100 employees<br />Customize with major company integrations</p>
                  </div>
                  <div className='flex flex-col gap-4 mt-[24px] sm:mt-[32px] md:mt-[55px]'>
                    <div className='flex gap-2 items-center'>
                      <div className='w-4 h-4 md:w-6 md:h-6 bg-[#143EC7] dark:bg-[#15BFFD] rounded-full'></div>
                      <p className='text-[#143EC7] dark:text-[#15BFFD] text-sm sm:text-md md:text-lg'>Sign up over 25 employees</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <div className='w-4 h-4 md:w-6 md:h-6 bg-[#143EC7] dark:bg-[#15BFFD] rounded-full'></div>
                      <p className='text-[#143EC7] dark:text-[#15BFFD] text-sm sm:text-md md:text-lg'>Unlimited Commission Build</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <div className='w-4 h-4 md:w-6 md:h-6 bg-[#143EC7] dark:bg-[#15BFFD] rounded-full'></div>
                      <p className='text-[#143EC7] dark:text-[#15BFFD] text-sm sm:text-md md:text-lg'>Quick Learn Process</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <div className='w-4 h-4 md:w-6 md:h-6 bg-[#143EC7] dark:bg-[#15BFFD] rounded-full'></div>
                      <p className='text-[#143EC7] dark:text-[#15BFFD] text-sm sm:text-md md:text-lg'>Full Reporting Capabilities</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <div className='w-4 h-4 md:w-6 md:h-6 bg-[#143EC7] dark:bg-[#15BFFD] rounded-full'></div>
                      <p className='text-[#143EC7] dark:text-[#15BFFD] text-sm sm:text-md md:text-lg'>Custom coding integrations</p>
                    </div>
                  </div>
                  <div className='flex w-full justify-center'>
                    <a href='https://app.commissionpaypro.com/' target='_blank' className='w-[170px] h-[50px] lg:w-[230px] lg:h-[60px] flex justify-center items-center text-center text-white text-[16px] lg:text-[20px] bg-[#143EC7] dark:bg-[#15BFFD] rounded-[30px] mt-[54px] hover:brightness-110 transition-all cursor-pointer'>Sign Up</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Image width={800} height={800} className="absolute z-[-1] ml-[-20px] hidden dark:block w-auto" src={star_bg_5} alt='star' />
        <Image
          src={wav_bg}
          className="hidden md:block botto left-0 bottom-32 w-full h-auto absolute z-[-2] dark:hidden"
          width={1442}
          height={776}
          priority
          alt="wav-bg"
        />
        <footer className='w-full h-[340px] md:h-[240px] mt-[224px]'>
          <div className='w-full h-[340px] md:h-[240px] bg-[#040615] bg-gradient-to-r dark:bg-gradient-to-r from-[#03091D] dark:from-[#ffffff00] dark:to-[#ffffff00] to-[#08143b] backdrop-blur-sm absolute left-0 z-[-1]'></div>
          <div>
            <div className='w-full mt-12 flex justify-center items-center md:justify-start'>
              <Link href="/" className="flex flex-col md:flex-row justify-between items-center">
                <Image
                  src={logo}
                  alt="Logo"
                  className="w-[58px] h-[58px] mt-12 mr-0 md:mr-6"
                  width={58}
                  height={58}
                  priority
                />
                <span className='text-white mt-3 md:mt-12 text-[14px] sm:text-[18px] md:text-[32px] font-semibold font-kanit'>COMMISSION <span className='text-[#143EC7] dark:text-[#15BFFD]'>PAYPRO</span></span>
              </Link>
            </div>
            <div className='w-full flex flex-col text-center md:text-left md:flex-row justify-between items-end'>
              <p className='text-xs md:text-sm text-white mt-6 ml-auto mr-auto md:ml-0 md:mr-0'>The powerful sales employee compensation solution for fast growing businesses.</p>
              <p className='text-xs md:text-sm text-white text-center md:text-left mt-8 md:mt-0 ml-auto mr-auto md:ml-0 md:mr-0'>Copyright ©️ COMMISSION PAYPRO 2023 All right reserved</p>
            </div>
          </div>
        </footer>
      </div>

      <Image width={800} height={800} className='absolute bottom-0 right-0 z-[-1] hidden dark:block' src={light_r} alt='light effect' />
      <Image width={800} height={800} className='absolute bottom-0 left-0 z-[-1] hidden dark:block' src={light_bl} alt='light effect' />
    </main>
  )
}
