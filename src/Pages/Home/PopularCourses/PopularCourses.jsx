import CourseCard from '../../../components/Card/CourseCard';
import { FaArrowRight } from 'react-icons/fa';
import useCourse from '../../../hooks/useCourse';

const PopularCourses = () => {
  const [courses] = useCourse();
  console.log(courses);
  return (
    <div className="max-w-7xl mx-auto mt-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-semibold">Our Popular Courses</h2>
        <p className="text-lg font-medium flex items-center gap-2">
          <span>Browse All Courses </span>
          <FaArrowRight></FaArrowRight>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course._id}
            course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
