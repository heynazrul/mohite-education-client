import { useEffect, useState } from 'react';

const useCourse = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://mohite-education-server.vercel.app/course')
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      });
  }, []);
  return [courses, loading];
};

export default useCourse;
