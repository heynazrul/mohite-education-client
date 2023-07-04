import { Rating } from '@smastrom/react-rating';
import { MdOutlineLanguage } from 'react-icons/md';
import { TbInfoOctagon } from 'react-icons/tb';


const PageTitle = ({ course }) => {
  return (
    <div className={`bg-gradient-to-b from-gray-700 via-gray-900 to-black h-[450px] relative`}>
      <div className="max-w-7xl mx-auto ">
        <div className="absolute top-1/2 -translate-y-1/2 space-y-4">
          <h2 className="text-5xl font-bold text-base-100">{course.name}</h2>
          <p className="text-lg font-medium text-base-100">{course.description}</p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <Rating
              style={{ maxWidth: 80 }}
              value={course.rating}
              readOnly
            />
            <p className="text-base-100">({Math.floor(Math.random() * 20)} Reviews)</p>
          </div>

          {/* Instructor Avatar */}
          <div className="flex items-center gap-4 mt-4">
            <div className="avatar">
              <div className="w-8 rounded-full ring ring-base ring-offset-base-100 ring-offset-2">
                <img src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
              </div>
            </div>
            <p className="text-base-100">
              By <span className="font-semibold ">{course.instructor}</span>
            </p>
          </div>

          {/* Last Updated, Language */}
          <div className="text-base-100 mt-4 flex gap-8">
            <div className='flex gap-2 items-center'>
              <TbInfoOctagon></TbInfoOctagon>
              <p>Last Updated 01/06/2023</p>
            </div>
            <div className="flex gap-2 items-center">
              <MdOutlineLanguage></MdOutlineLanguage>
              <p>Hindi</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default PageTitle;
