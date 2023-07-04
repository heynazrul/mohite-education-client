import { Rating } from '@smastrom/react-rating';
import { LuUsers } from 'react-icons/lu';
import { RiFileList2Line } from 'react-icons/ri';

import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {
  const { _id, name, rating, description, price, lessons, instructor } = course;

  return (
    <div className="card card-side bg-base-200 shadow-xl p-4">
      <figure className="w-1/3">
        <img
          src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          alt="Movie"
          className="rounded-md"
        />
      </figure>
      <div className="card-body w-2/3 py-4">
        <div className="flex items-center gap-2">
          <Rating
            style={{ maxWidth: 80 }}
            value={rating}
            readOnly
          />
          <p>({Math.floor(Math.random() * 20)} Reviews)</p>
        </div>
        <h2 className="card-title font-bold">{name}</h2>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <LuUsers size={18}></LuUsers>
            <span>{Math.floor(Math.random() * 51)} Students</span>
          </div>
          <div className="flex items-center gap-2">
            <RiFileList2Line size={18}></RiFileList2Line>
            <span>{lessons} Lessons</span>
          </div>
        </div>
        <p>{description}</p>
        <div className="flex items-center gap-4 mt-4">
          <div className="avatar">
            <div className="w-8 rounded-full ring ring-base ring-offset-base-100 ring-offset-2">
              <img src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
          </div>
          <p>
            By <span className="font-semibold">{instructor}</span>
          </p>
        </div>
        <div className="card-actions justify-between mt-8">
          <h2 className="font-semibold text-xl"> INR {price}</h2>
          <Link
            to={`/course/${_id}`}
            class="relative inline-flex items-center justify-center btn-sm overflow-hidden font-medium text-neutral transition duration-300 ease-out border-2 border-primary btn group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-primary transition-all duration-300 transform group-hover:translate-x-full ease">
              Learn More
            </span>
            <span className="relative invisible">Learn More</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;


// https://preview.themeforest.net/item/histudy-online-courses-education-template/full_screen_preview/42846507?_ga=2.181062055.168396082.1688377818-316469563.1653574672&_gac=1.124323192.1687525068.CjwKCAjwhdWkBhBZEiwA1ibLmLWSygY3vm8Yflcchqxdd6huf7peoFmSKX8gJdUeh7Fl0YAXQJWl1BoCvXoQAvD_BwE