import { Rating } from '@smastrom/react-rating';
import { LuUsers } from 'react-icons/lu';
import { RiFileList2Line } from 'react-icons/ri';

import '@smastrom/react-rating/style.css';

const CourseCard = () => {
  return (
    <div className="card card-side bg-base-200 shadow-xl p-4">
      <figure className="w-1/3">
        <img
          src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          alt="Movie"
          className="rounded-md"
        />
      </figure>
      <div className="card-body w-2/3">
        <div className="flex items-center gap-2">
          <Rating
            style={{ maxWidth: 100 }}
            value={5}
            readOnly
          />
          <p>({10} Reviews)</p>
        </div>
        <h2 className="card-title">Practical Accounting</h2>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <LuUsers size={18}></LuUsers>
            <span>{Math.floor(Math.random() * 51)} Students</span>
          </div>
          <div className="flex items-center gap-2">
            <RiFileList2Line size={18}></RiFileList2Line>
            <span>{Math.floor(Math.random() * 51)} Lessons</span>
          </div>
        </div>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
