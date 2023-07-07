import { useParams } from 'react-router-dom';

import PageTitle from '../PageTitle/PageTitle';

// import courses from '../../../../public/courses.json';
import CourseContent from '../CourseContent/CourseContent';
import useCourse from '../../../hooks/useCourse';

const Course = () => {
  const [courses, loading] = useCourse();
  console.log(courses);
  const { id } = useParams();
  const selectedCourse = courses.find((course) => course._id === id);
  console.log(selectedCourse);
  // const { _id, name, rating, description, price, lessons, instructor } = course;
  return (
    <div>
      {/* implement skeleton here */}
      {!loading && <PageTitle selectedCourse={selectedCourse}></PageTitle>}
      <CourseContent></CourseContent>
    </div>
  );
};

export default Course;
