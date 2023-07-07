import { Rating } from '@smastrom/react-rating';
import { MdOutlineLanguage, MdOutlineOndemandVideo } from 'react-icons/md';
import { TbInfoOctagon } from 'react-icons/tb';
import { RiFileList2Line } from 'react-icons/ri';
import { LuInfinity } from 'react-icons/lu';
import { LiaCertificateSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const PageTitle = ({ selectedCourse }) => {
  console.log(selectedCourse);
  return (
    <div className={`bg-gradient-to-b from-gray-700 via-gray-900 to-black h-[450px] relative`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="absolute top-1/2 -translate-y-1/2 space-y-4">
          <h2 className="text-5xl font-bold text-base-100">{selectedCourse.name}</h2>
          <p className="text-lg font-medium text-base-100">{selectedCourse.description}</p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <Rating
              style={{ maxWidth: 80 }}
              value={selectedCourse.rating}
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
              By <span className="font-semibold ">{selectedCourse.instructor}</span>
            </p>
          </div>

          {/* Last Updated, Language */}
          <div className="text-base-100 mt-4 flex gap-8">
            <div className="flex gap-2 items-center">
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
      {/* Course summary card */}
      <div className="card w-96 bg-base-100 shadow-xl absolute top-32  left-2/3">
        {/* Course preview */}
        <figure>
          <img
            src={selectedCourse.img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="flex gap-4 items-center">
            <h2 className="card-title font-bold">INR {selectedCourse.price} </h2>
            <p className="line-through text-xs">INR 1500</p>
          </div>
          <div className="card-actions mt-4">
            <Link className="btn bg-indigo-700 text-base-100 hover:bg-indigo-600 btn-block">Add to Cart</Link>
            <Link className="btn btn-neutral btn-outline btn-block">Buy Now</Link>
            <p className="text-center text-xs">30-Day Money-Back Guarantee</p>
          </div>

          {/* Course includes */}
          <div className="space-y-2">
            <h2 className="text-lg font-bold">This course includes:</h2>
            <div className="flex items-center gap-4">
              <MdOutlineOndemandVideo></MdOutlineOndemandVideo>
              <p className="text-sm">40 hours on-demand video</p>
            </div>
            <div className="flex items-center gap-4">
              <RiFileList2Line></RiFileList2Line>
              <p className="text-sm">{selectedCourse.lessons} Lessons</p>
            </div>
            <div className="flex items-center gap-4">
              <LuInfinity></LuInfinity>
              <p className="text-sm">Lifetime Access</p>
            </div>
            <div className="flex items-center gap-4">
              <LiaCertificateSolid></LiaCertificateSolid>
              <p className="text-sm">Certificate of completion</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='w-96 bg-base-100 p-8 '> */}

      {/* <div></div>
        
      </div> */}
    </div>
  );
};

export default PageTitle;
