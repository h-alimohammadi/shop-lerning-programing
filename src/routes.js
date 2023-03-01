import Course from "./pages/Course/Course";
import Courses from "./pages/Courses/Courses";
import Index from "./pages/Index/Index";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import Profile from "./pages/Profile/Profile";
import SingleCourse from "./pages/SingleCourse/SingleCourse";

const routes =[
    {path : "/" , element:<Index />},
    {path : "/courses" , element:<Courses />},
    {path : "/course" , element:<Course />},
    {path : "/course/:courseId" , element:<SingleCourse />},
    {path : "/login" , element:<LoginRegister />},
    {path : "/register" , element:<LoginRegister />},
    {path : "/profile" , element:<Profile />},
];



export default routes;