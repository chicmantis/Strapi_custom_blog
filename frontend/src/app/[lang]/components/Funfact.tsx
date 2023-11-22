import Image from "next/image";
import BGShapeThree from "./svg/bg_shape_3";

import shape_1 from "@/app/[lang]/assets/img/shape/funfact-2.png";
import shape_2 from "@/app/[lang]/assets/img/shape/funfact-3.png";

import icon_1 from "@/app/[lang]/assets/img/shape/funfact-icon-1.png";
import icon_2 from "@/app/[lang]/assets/img/shape/funfact-icon-2.png";
import icon_3 from "@/app/[lang]/assets/img/shape/funfact-icon-3.png";
import icon_4 from "@/app/[lang]/assets/img/shape/funfact-icon-4.png";

interface funfact_content_type {
    sub_title: string;
    title: string;
    funfacts: {
        id: number;
        question: string;
        desc: string;
    }[];
}
const funfact_content: funfact_content_type = {
    sub_title: "COMMISSION PAYPRO",
    title: "Get Reports by Employee, Customer, Date and More",
    funfacts: [
        {
            id: 1,
            question: "Gross Sales Report",
            desc: "What are Sales this week?",
        },
    ]
}
const { sub_title, title, funfacts } = funfact_content

const FunfactAreaHomeOne = () => {
    return (
        <>
            <section className="funfact-area pb-[80px] mt-[100px] sm:mt-[200px] md:mt-[300px] relative">
                <div className="w-full">
                    <div className="hidden md:block overflow-hidden mt-[180px] z-[-1] absolute w-full theme-bg-2 rounded-2xl h-[300px]">
                        <div className="dark:hidden block">
                            <div className="tpfunfact-bg theme-bg-2 rounded-2xl" style={{ backgroundImage: `url(/assets/img/shape/funfact-1.png)` }}>
                                <div className="tpfunfact-shape hidden md:block">
                                    <div className="tpfunfact-shape-one"><Image src={shape_1} alt="theme-pure" /></div>
                                    <div className="tpfunfact-shape-two"><Image src={shape_2} alt="theme-pure" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden dark:block">
                            <div className="tpfunfact-bg rounded-2xl">
                                <div className="tpfunfact-shape hidden md:block">
                                    <div className="tpfunfact-shape-one"><Image src={shape_1} alt="theme-pure" /></div>
                                    <div className="tpfunfact-shape-two"><Image src={shape_2} alt="theme-pure" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tpfunfact-box">
                        <div className="flex flex-col xl:flex-row justify-center">
                            <Image className='hidden xl:block xl:pl-6 2xl:p-0 w-[40%] h-full drop-shadow-xl' width={436} height={348} src='/img/mockup.png' alt='mockup' />
                            <div className="w-auto md:m-6 mt-24">
                                <div className="tpfunfact-wrapper text-center mb-[50px] dark:border-[1px] dark:border-[#15BFFD] dark:bg-[#03091D]">
                                    <div className="p-1 sm:p-3 md:p-6">
                                        <h5 className="text-[#131683] dark:text-[#15BFFD] text-sm sm:text-lg md:text-2xl font-bold mb-[15px]">
                                            Get Reports by Employee, Customer, Date and More
                                        </h5>
                                        <div className="">
                                            <p className="text-left text-xs sm:text-md md:text-lg dark:text-white">
                                                Gross Sales Report - What are Sales this week?
                                                <br />
                                                Payroll Report - What&apos;s my pay to employees and subcontractors?  <br />
                                                Payroll History Report - What month did they get that fat commission? <br />
                                                Expense Report - Management easily reviews expenses<br />
                                                Customer Report - Has this customer purchased before?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FunfactAreaHomeOne;