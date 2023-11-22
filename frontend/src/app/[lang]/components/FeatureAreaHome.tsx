import Image from "next/image";
import BgColorIcon from "./svg/bg_color_shape/bg_color_icon";
import BgColorIconTwo from "./svg/bg_color_shape/bg_color_icon_2";
import BgColorIconThree from "./svg/bg_color_shape/bg_color_icon_3";

import shape_1 from "@/app/[lang]/assets/img/shape/choose-shape-1.png";
import shape_2 from "@/app/[lang]/assets/img/shape/choose-shape-2.png";
import shape_3 from "@/app/[lang]/assets/img/shape/choose-shape-3.png";
import banner_img from "@/app/[lang]/assets/img/banner/choose-hero.png";
import RoundShape from "./svg/bg_color_shape/round_shape_1";
import RoundShapeTwo from "./svg/bg_color_shape/round_shape_2";

const feature_content = {
    sub_title: "Let us do the work",
    title: "How we do It",
    feature_data: [
        {
            id: 1,
            cls: "relative flex justify-start",
            icon: <BgColorIcon />,
            sirial_no: "01",
            title: "Create Employees, Build Commissions",
            sm_des: <>Quickly enter an employee or contractor. <br /> Spec out their commission structure. <br /> You can enter multiple commissions and multiple employees</>,
            shape: <RoundShape />,
            shape_cls: "1 hidden md:block"
        },
        {
            id: 2,
            cls: "relative pl-10 flex",
            icon: <BgColorIconTwo />,
            sirial_no: "02",
            title: "Enter Gross Sales",
            sm_des: <>Allocate all incoming gross sales to an employee <br /> with their corresponding commission. <br /> The system will automatically calculate the commission <br /> due the employee and save it!</>,
            shape: <RoundShapeTwo />,
            shape_cls: "2 hidden md:block"
        },
        {
            id: 3,
            cls: "pl-3 flex",
            icon: <BgColorIconThree />,
            sirial_no: "03",
            title: "Pay Now and Reports",
            sm_des: <>After each gross sale is allocated the system will tell you <br /> what total commission is due each employee for payroll. <br /> No more spreadsheets or remembering commissions due.</>,
            // shape: ,
            // shape_cls: ""
        },
    ]
}
const { sub_title, title, feature_data } = feature_content

const FeatureAreaHomeFour = () => {
    return (
        <>
            <section className="mt-[130px] pt-10 pb-20">
                <div className="w-full">
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="w-full lg:w-[50%]">
                            <div className="tpchoose-thumb relative mb-12 md:ml-[100px]">
                                <Image
                                    className="tpchoose-border-anim"
                                    src={banner_img}
                                    alt="theme-pure"
                                />
                                <div className="tpchoose-shape hidden lg:block">
                                    <div className="tpchoose-shape-one none lg:block">
                                        <Image className="dark:contrast-0" src={shape_1} alt="theme-pure" />
                                    </div>
                                    <div className="tpchoose-shape-two">
                                        <Image src={shape_2} alt="theme-pure" />
                                    </div>
                                    <div className="tpchoose-shape-three">
                                        <Image src={shape_3} alt="theme-pure" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-[50%]">
                            <div className="feature-content-4 pl-[70px]">
                                <div className='w-full flex justify-start items-center mb-12'>
                                    <div>
                                        <h2 className='text-left dark:text-white text-[#1e1e1e] text-md md:text-2xl font-medium'>Step by step guide</h2>
                                        <h2 className='text-left font-kanit text-2xl md:text-[48px] text-[#143EC7] dark:text-[#00C4F4] mt-[4px] font-medium'>Easy Steps to Success</h2>
                                        <p className='text-left dark:text-white text-[#1e1e1e] text-sm md:text-[22px] mt-[15px]'>Simple to use, quick to deliver payroll results</p>
                                    </div>
                                </div>

                                <ul className="feature-list-4">
                                    {feature_data.map((item, i) => (
                                        <li key={i}>
                                            <div className={`feature-list-4-item ${item.cls}`}>
                                                <div className="feature-list-4-icon ">
                                                    <div className="feature-list-bg relative">
                                                        <i> {item.icon} </i>
                                                        <b>{item.sirial_no}</b>
                                                        <span className="feature-bg-border-1 border-[rgba(2,29,53,0.4)] dark:border-[#ffffff] border-[1px]"></span>
                                                        <span className="feature-bg-border-2 border-[rgba(2,29,53,0.4)] dark:border-[#ffffff] border-[1px]"></span>
                                                        <span className="feature-bg-border-3 border-[rgba(2,29,53,0.4)] dark:border-[#ffffff] border-[1px]"></span>
                                                        <span className="feature-bg-border-4 border-[rgba(2,29,53,0.4)] dark:border-[#ffffff] border-[1px]"></span>
                                                    </div>
                                                </div>
                                                <div className="feature-list-4-content">
                                                    <h4 className="text-[#1e1e1e] dark:text-white text-lg m:text-2xl font-bold pb-3">{item.title}</h4>
                                                    <p className="text-[#1e1e1e] dark:text-[#ffffffcc]">{item.sm_des}</p>
                                                </div>
                                                {item.shape ? (
                                                    <div className={`feature-4-shape-${item.shape_cls}`}>
                                                        {item.shape}
                                                    </div>
                                                ) : (
                                                    ""
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeatureAreaHomeFour;