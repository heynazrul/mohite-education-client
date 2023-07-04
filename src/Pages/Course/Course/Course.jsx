import { useParams } from 'react-router-dom';

import PageTitle from '../PageTitle/PageTitle';

import courses from '../../../../public/courses.json';
import CourseContent from '../CourseContent/CourseContent';

const Course = () => {
    const { id } = useParams();
    const course = courses.find(course => course._id === id)
    // const { _id, name, rating, description, price, lessons, instructor } = course;
  return (
    <div>
      <PageTitle course={course} ></PageTitle>
      <CourseContent></CourseContent>
    </div>
  );
};

export default Course;
