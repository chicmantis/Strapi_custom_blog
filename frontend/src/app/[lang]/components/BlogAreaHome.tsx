import Link from "next/link";
import Image from "next/image";

import blog_shape from "@/assets/img/shape/blog-4-shape-1.png";

// blog content data type
interface blog_content_type {
    sub_title: string;
    title: string;
    blog_data: {
        id: number;
        bg_img: string;
        tag: string;
        title: string;
        sm_info: JSX.Element;
        date: string;
        post_by: string;
    }[];
}

// blog content 
const blog_content: blog_content_type = {
    sub_title: "What's Going On",
    title: "Company blog & Insights",
    blog_data: [
        {
            id: 1,
            bg_img: "/assets/img/blog/blog-4-bg-1.jpg",
            tag: "1st Nations Mortgage",
            title: "Article",
            sm_info: <>This is test article...</>,
            date: "Nov 16,2023",
            post_by: "Admin",
        },
        {
            id: 2,
            bg_img: "/assets/img/blog/blog-4-bg-2.jpg",
            tag: "1st Nations Mortgage",
            title: "Article",
            sm_info: <>This is test article...</>,
            date: "Nov 16,2023",
            post_by: "Admin",
        },
    ]
}
const { sub_title, title, blog_data } = blog_content

const BlogAreaHomeFour = () => {
    return (
        <>
            <section className="mt-[350px] blog-area pb-50 p-relative fix">
                <div className="tpblog-4-shape wow bounceIn d-none d-lg-block" data-wow-duration=".6s" data-wow-delay=".6s">
                    <Image src={blog_shape} alt="theme-pure" />
                </div>
                <div className="container">
                    <div className='w-full flex justify-start items-center mb-24'>
                        <div>
                            <h2 className='text-left dark:text-white text-[#1e1e1e] text-lg md:text-2xl font-medium'>What&apos;s Going On</h2>
                            <h2 className='text-left font-kanit text-3xl md:text-[48px] text-[#143EC7] dark:text-[#00C4F4] mt-[4px] font-medium'>Company Blog & Insights</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 m-3 gap-12">
                        {blog_data.map((item, i) =>
                            <div key={i} className="w-full">
                                <div className="tpblog-4 relative mb-[60px]">
                                    <div className="tpblog-4-thumb" style={{ backgroundImage: `url(${item.bg_img})` }}></div>
                                    <div className="flex flex-wrap m-3 justify-end">
                                        <div className="w-[60%]">
                                            <div className="tpblog-4-content">
                                                <h5 className="tpblog-4-content-sub-tilte">{item.tag}</h5>
                                                <h4 className="tpblog-4-content-title">
                                                    <Link href="/blog-details">{item.title}</Link>
                                                </h4>
                                                <p>{item.sm_info}</p>
                                                <div className="tpblog-4-info">
                                                    <span>{item.date}</span>
                                                    <span><a href="#"><i>By</i>{item.post_by}</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogAreaHomeFour;