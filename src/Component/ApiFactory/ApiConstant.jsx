import { REACT_APP_API } from "../../runtime-config";
import { getBlogCards, getCountryNames } from "./ApiAction";

export const APIS = {
    getCategory: REACT_APP_API + "/category",
    allCourses: REACT_APP_API + "/course",
    getPopularCourse: REACT_APP_API + "/course?popular=Y", //getCourse
    getCountryNames: REACT_APP_API + "/aboutUS/whyChoose/id", //About-us--> country names
    getBlog: REACT_APP_API + "/blog/bloglist",
    getBlogCards: REACT_APP_API + "/blog/bloglist?popular=Y",// Blog.js --> popular cards
    getTeamMembers: REACT_APP_API + "/teamMember/member_id", 
    addNewsLetter: REACT_APP_API + "/blog/newsletter",
    contactUS: REACT_APP_API + "/contactUs/form",
    testimonials: REACT_APP_API + "/testimonial",
    banner:REACT_APP_API + "/webbanner",
    duration: REACT_APP_API + "/duration",
    onlineCourseCount: REACT_APP_API + "/count",
}
