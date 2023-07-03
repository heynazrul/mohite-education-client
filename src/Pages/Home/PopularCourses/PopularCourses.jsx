import CourseCard from '../../../components/Card/CourseCard';
import { FaArrowRight } from 'react-icons/fa';

const PopularCourses = () => {
  return (
    <div className="max-w-7xl mx-auto mt-16">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold">Our Popular Courses</h2>
        <p className="text-lg font-medium flex items-center gap-2">
          <span>Browse All Courses </span>
          <FaArrowRight></FaArrowRight>
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
      </div>
    </div>
  );
};

export default PopularCourses;
