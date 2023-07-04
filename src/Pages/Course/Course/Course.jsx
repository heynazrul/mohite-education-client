import { useParams } from 'react-router-dom';

import PageTitle from '../PageTitle/PageTitle';

import courses from '../../../../public/courses.json';

const Course = () => {
    const { id } = useParams();
    const course = courses.find(course => course._id === id)
    // const { _id, name, rating, description, price, lessons, instructor } = course;
  return (
    <div>
      <PageTitle course={course} ></PageTitle>
    </div>
  );
};

export default Course;
