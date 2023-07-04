import CourseCard from '../../../components/Card/CourseCard';
import { FaArrowRight } from 'react-icons/fa';

const PopularCourses = () => {
  const courseData = [
    {
      _id: 1,
      name: 'Practical Accounting',
      lessons: 15,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, itaque.',
      instructor: 'Tushar Mohite',
      price: 999,
      rating: 5,
    },
    {
      _id: 2,
      name: 'Financial Accounting',
      lessons: 12,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, itaque.',
      instructor: 'Tushar Mohite',
      price: 1499,
      rating: 4,
    },
  ];
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
        {courseData.map((course) => (
          <CourseCard
            key={course._id}
            course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
