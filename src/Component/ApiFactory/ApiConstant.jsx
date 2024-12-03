import { REACT_APP_API } from "../../runtime-config";

export const APIS = {
    getCategory: REACT_APP_API + "/category",
    allCourses: REACT_APP_API + "/course",
    getBlog: REACT_APP_API + "/blog/bloglist",
    addNewsLetter: REACT_APP_API + "/newsletter",
    contactUS: REACT_APP_API + "/contactUs/form",
    testimonials: REACT_APP_API + "/testimonial",
    banner:REACT_APP_API + "/webbanner",
    duration: REACT_APP_API + "/duration",
    StudentData: REACT_APP_API + "/count",
    Whyus: REACT_APP_API + "/aboutUS/whyChoose/id",
    getPopularColurses: REACT_APP_API + "/course?popular=Y",
    getBlogCards: REACT_APP_API + "/blog/bloglist?popular=Y",
    
}