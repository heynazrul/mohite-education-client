import { useState } from 'react';
import './courseContent.css';

const CourseContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-7xl mx-auto mt-12">
      <div className="max-w-3xl">
        <div className="collapse collapse-arrow bg-base-200 ">
          <input
            type="radio"
            name="my-accordion-2"
            onClick={() => setIsOpen(!isOpen)}
            checked={isOpen}
          />
          <div className="collapse-title text-base font-bold pl-14">Introduction</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input
            type="radio"
            name="my-accordion-2"
          />
          <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input
            type="radio"
            name="my-accordion-2"
          />
          <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
