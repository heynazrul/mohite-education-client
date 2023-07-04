// import { useState } from 'react';
import { PiDotOutlineFill } from 'react-icons/pi';
import { MdOutlineOndemandVideo } from 'react-icons/md';

import './courseContent.css';

const CourseContent = () => {
  //   const [isOpenIntro, setIsOpenIntro] = useState(false);
  //   const [isOpenAccounting, setIsOpenAccounting] = useState(false);
  return (
    <div className="max-w-7xl mx-auto mt-12">
        <h2 className='text-3xl font-bold'>Course Content</h2>
      <div className="max-w-3xl py-8">
        {/* Introduction */}
        <div className="collapse collapse-arrow rounded-none ">
          <input
            type="radio"
            name="my-accordion-2"
            // onClick={() => setIsOpenIntro(!isOpenIntro)}
            // checked={isOpenIntro}
            // checked
          />
          {/* title side content */}
          <div className="collapse-title flex items-center justify-between pl-14 bg-gray-100 border border-gray-200 ">
            <p className="font-bold text-base">Introduction</p>
            <p className="text-sm text-gray-600 font-medium flex items-center gap-1">
              <span>3 Lecture</span>
              <PiDotOutlineFill></PiDotOutlineFill>
              <span>20min</span>
            </p>
          </div>
          <div className="collapse-content border border-gray-200 border-y-0 ">
            <ul className="space-y-4 mt-2">
              <li className=" px-10 flex justify-between">
                <div className="flex gap-2 items-center">
                  <MdOutlineOndemandVideo></MdOutlineOndemandVideo>
                  <span>Intro & Installation</span>
                </div>
                <p className="text-sm text-gray-600 font-medium flex items-center gap-1">2:30</p>
              </li>
              <li className=" px-10 flex justify-between">
                <div className="flex gap-2 items-center">
                  <MdOutlineOndemandVideo></MdOutlineOndemandVideo>
                  <span>Gsuite - Gmail & Docs</span>
                </div>
                <p className="text-sm text-gray-600 font-medium flex items-center gap-1">8:00</p>
              </li>
              <li className=" px-10 flex justify-between">
                <div className="flex gap-2 items-center">
                  <MdOutlineOndemandVideo></MdOutlineOndemandVideo>
                  <span>Gsuite - Google Sheets</span>
                </div>
                <p className="text-sm text-gray-600 font-medium flex items-center gap-1">9:30</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Basics of Accounting */}
        <div className="collapse collapse-arrow rounded-none ">
          <input
            type="radio"
            name="my-accordion-2"
            // onClick={() => setIsOpenAccounting(!isOpenAccounting)}
            // checked={isOpenAccounting}
          />
          {/* title side content */}
          <div className="collapse-title flex items-center justify-between pl-14 bg-gray-100 border border-gray-200 ">
            <p className="font-bold text-base">Basics of Accounting</p>
            <p className="text-sm text-gray-600 font-medium flex items-center gap-1">
              <span>4 Lecture</span>
              <PiDotOutlineFill></PiDotOutlineFill>
              <span>25min</span>
            </p>
          </div>
          <div className="collapse-content border border-gray-200 border-y-0">
            <ul className="space-y-4 pt-2">
              <li className=" px-10 flex justify-between">
                <div className="flex gap-2 items-center">
                  <MdOutlineOndemandVideo></MdOutlineOndemandVideo>
                  <span>Basics of Accounting - Journal</span>
                </div>
                <p className="text-sm text-gray-600 font-medium flex items-center gap-1">5:00</p>
              </li>
              <li className=" px-10 flex justify-between">
                <div className="flex gap-2 items-center">
                  <MdOutlineOndemandVideo></MdOutlineOndemandVideo>
                  <span>Basics of Accounting - Ledger</span>
                </div>
                <p className="text-sm text-gray-600 font-medium flex items-center gap-1">8:00</p>
              </li>
              <li className=" px-10 flex justify-between">
                <div className="flex gap-2 items-center">
                  <MdOutlineOndemandVideo></MdOutlineOndemandVideo>
                  <span>Basics of Accounting - Trial balance</span>
                </div>
                <p className="text-sm text-gray-600 font-medium flex items-center gap-1">5:00</p>
              </li>
              <li className=" px-10 flex justify-between">
                <div className="flex gap-2 items-center">
                  <MdOutlineOndemandVideo></MdOutlineOndemandVideo>
                  <span>Basics of Accounting - PNL Balance Sheet</span>
                </div>
                <p className="text-sm text-gray-600 font-medium flex items-center gap-1">7:00</p>
              </li>
            </ul>
          </div>
        </div>
        {/* GST Basics */}
        <div className="collapse collapse-arrow rounded-none ">
          <input
            type="radio"
            name="my-accordion-2"
          />
          {/* title side content */}
          <div className="collapse-title flex items-center justify-between pl-14 bg-gray-100 border border-gray-200 ">
            <p className="font-bold text-base">GST Basics</p>
            <p className="text-sm text-gray-600 font-medium flex items-center gap-1">
              <span>4 Lecture</span>
              <PiDotOutlineFill></PiDotOutlineFill>
              <span>20min</span>
            </p>
          </div>
          <div className="collapse-content border border-gray-200 border-y-0">
            <ul className="space-y-4 pt-2">
              <li className=" px-10 flex justify-between">
                <div className="flex gap-2 items-center">
                  <MdOutlineOndemandVideo></MdOutlineOndemandVideo>
                  <span>Intro & Installation</span>
                </div>
                <p className="text-sm text-gray-600 font-medium flex items-center gap-1">2:30</p>
              </li>
              <li className=" px-10 flex justify-between">
                <div className="flex gap-2 items-center">
                  <MdOutlineOndemandVideo></MdOutlineOndemandVideo>
                  <span>Gsuite - Gmail & Docs</span>
                </div>
                <p className="text-sm text-gray-600 font-medium flex items-center gap-1">8:00</p>
              </li>
              <li className=" px-10 flex justify-between">
                <div className="flex gap-2 items-center">
                  <MdOutlineOndemandVideo></MdOutlineOndemandVideo>
                  <span>Gsuite - Google Sheets</span>
                </div>
                <p className="text-sm text-gray-600 font-medium flex items-center gap-1">9:30</p>
              </li>
            </ul>
          </div>
        </div>
        {/* Income tax basics  */}
        <div className="collapse collapse-arrow rounded-none ">
          <input
            type="radio"
            name="my-accordion-2"
          />
          {/* title side content */}
          <div className="collapse-title flex items-center justify-between pl-14 bg-gray-100 border border-gray-200 ">
            <p className="font-bold text-base">Income Tax Basics</p>
            <p className="text-sm text-gray-600 font-medium flex items-center gap-1">
              <span>2 Lecture</span>
              <PiDotOutlineFill></PiDotOutlineFill>
              <span>12min</span>
            </p>
          </div>
          <div className="collapse-content border border-gray-200 border-y-0">
            <ul className="space-y-4 pt-2">
              <li className=" px-10 flex justify-between">
                <div className="flex gap-2 items-center">
                  <MdOutlineOndemandVideo></MdOutlineOndemandVideo>
                  <span>Income Tax Basics</span>
                </div>
                <p className="text-sm text-gray-600 font-medium flex items-center gap-1">5:00</p>
              </li>
              <li className=" px-10 flex justify-between">
                <div className="flex gap-2 items-center">
                  <MdOutlineOndemandVideo></MdOutlineOndemandVideo>
                  <span>Income Tax Return Filling</span>
                </div>
                <p className="text-sm text-gray-600 font-medium flex items-center gap-1">7:00</p>
              </li>
            </ul>
          </div>
        </div>

        {/* TDS Basics */}
        <div className="collapse collapse-arrow rounded-none ">
          <input
            type="radio"
            name="my-accordion-2"
          />
          <div className="collapse-title flex items-center justify-between pl-14 bg-gray-100 border border-gray-200 ">
            <p className="font-bold text-base">TDS Basics</p>
            <p className="text-sm text-gray-600 font-medium flex items-center gap-1">
              <span>2 Lecture</span>
              <PiDotOutlineFill></PiDotOutlineFill>
              <span>10min</span>
            </p>
          </div>
          <div className="collapse-content border border-gray-200 border-y-0">
            <ul className="space-y-4 pt-2">
              <li className=" px-10 flex justify-between">
                <div className="flex gap-2 items-center">
                  <MdOutlineOndemandVideo></MdOutlineOndemandVideo>
                  <span>TDS Basics</span>
                </div>
                <p className="text-sm text-gray-600 font-medium flex items-center gap-1">5:00</p>
              </li>
              <li className=" px-10 flex justify-between">
                <div className="flex gap-2 items-center">
                  <MdOutlineOndemandVideo></MdOutlineOndemandVideo>
                  <span>TDS Return Filling</span>
                </div>
                <p className="text-sm text-gray-600 font-medium flex items-center gap-1">5:00</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Companies Act */}
        <div className="collapse collapse-arrow rounded-none ">
          <input
            type="radio"
            name="my-accordion-2"
          />
          <div className="collapse-title flex items-center justify-between pl-14 bg-gray-100 border border-gray-200 ">
            <p className="font-bold text-base">Basics of Companies Act</p>
            <p className="text-sm text-gray-600 font-medium flex items-center gap-1">
              <span>2 Lecture</span>
              <PiDotOutlineFill></PiDotOutlineFill>
              <span>11min</span>
            </p>
          </div>
          <div className="collapse-content border border-gray-200 border-y-0">
            <ul className="space-y-4 pt-2">
              <li className=" px-10 flex justify-between">
                <div className="flex gap-2 items-center">
                  <MdOutlineOndemandVideo></MdOutlineOndemandVideo>
                  <span>Companies Act Basics</span>
                </div>
                <p className="text-sm text-gray-600 font-medium flex items-center gap-1">5:00</p>
              </li>
              <li className=" px-10 flex justify-between">
                <div className="flex gap-2 items-center">
                  <MdOutlineOndemandVideo></MdOutlineOndemandVideo>
                  <span>Companies Act Compliances</span>
                </div>
                <p className="text-sm text-gray-600 font-medium flex items-center gap-1">6:00</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Financial Management */}
        <div className="collapse collapse-arrow rounded-none ">
          <input
            type="radio"
            name="my-accordion-2"
          />
          <div className="collapse-title flex items-center justify-between pl-14 bg-gray-100 border border-gray-200 ">
            <p className="font-bold text-base">Financial Management</p>
            <p className="text-sm text-gray-600 font-medium flex items-center gap-1">
              <span>2 Lecture</span>
              <PiDotOutlineFill></PiDotOutlineFill>
              <span>15min</span>
            </p>
          </div>
          <div className="collapse-content border border-gray-200 border-y-0">
            <ul className="space-y-4 pt-2">
              <li className=" px-10 flex justify-between">
                <div className="flex gap-2 items-center">
                  <MdOutlineOndemandVideo></MdOutlineOndemandVideo>
                  <span>Financial Management & KPI's</span>
                </div>
                <p className="text-sm text-gray-600 font-medium flex items-center gap-1">7:00</p>
              </li>
              <li className=" px-10 flex justify-between">
                <div className="flex gap-2 items-center">
                  <MdOutlineOndemandVideo></MdOutlineOndemandVideo>
                  <span>Financial Management & KPI's</span>
                </div>
                <p className="text-sm text-gray-600 font-medium flex items-center gap-1">8:00</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Financial Modelling */}
        <div className="collapse collapse-arrow rounded-none ">
          <input
            type="radio"
            name="my-accordion-2"
          />
          <div className="collapse-title flex items-center justify-between pl-14 bg-gray-100 border border-gray-200 ">
            <p className="font-bold text-base">Financial Modelling</p>
            <p className="text-sm text-gray-600 font-medium flex items-center gap-1">
              <span>4 Lecture</span>
              <PiDotOutlineFill></PiDotOutlineFill>
              <span>30min</span>
            </p>
          </div>
          <div className="collapse-content border border-gray-200 border-y-0">
            <ul className="space-y-4 pt-2">
              <li className=" px-10 flex justify-between">
                <div className="flex gap-2 items-center">
                  <MdOutlineOndemandVideo></MdOutlineOndemandVideo>
                  <span>Financial Modelling</span>
                </div>
                <p className="text-sm text-gray-600 font-medium flex items-center gap-1">10:00</p>
              </li>
              <li className=" px-10 flex justify-between">
                <div className="flex gap-2 items-center">
                  <MdOutlineOndemandVideo></MdOutlineOndemandVideo>
                  <span>Financial Modelling</span>
                </div>
                <p className="text-sm text-gray-600 font-medium flex items-center gap-1">7:00</p>
              </li>
              <li className=" px-10 flex justify-between">
                <div className="flex gap-2 items-center">
                  <MdOutlineOndemandVideo></MdOutlineOndemandVideo>
                  <span>Financial Modelling</span>
                </div>
                <p className="text-sm text-gray-600 font-medium flex items-center gap-1">5:00</p>
              </li>
              <li className=" px-10 flex justify-between">
                <div className="flex gap-2 items-center">
                  <MdOutlineOndemandVideo></MdOutlineOndemandVideo>
                  <span>Financial Modelling</span>
                </div>
                <p className="text-sm text-gray-600 font-medium flex items-center gap-1">8:00</p>
              </li>
            </ul>
          </div>
        </div>

        {/* End Game */}
        <div className="collapse collapse-arrow rounded-none ">
          <input
            type="radio"
            name="my-accordion-2"
          />
          <div className="collapse-title flex items-center justify-between pl-14 bg-gray-100 border border-gray-200 ">
            <p className="font-bold text-base">End Game</p>
            <p className="text-sm text-gray-600 font-medium flex items-center gap-1">
              <span>2 Lecture</span>
              <PiDotOutlineFill></PiDotOutlineFill>
              <span>20min</span>
            </p>
          </div>
          <div className="collapse-content border border-gray-200 border-t-0">
            <ul className="space-y-4 pt-2">
              <li className=" px-10 flex justify-between">
                <div className="flex gap-2 items-center">
                  <MdOutlineOndemandVideo></MdOutlineOndemandVideo>
                  <span>Resume & Cover Letter Writing</span>
                </div>
                <p className="text-sm text-gray-600 font-medium flex items-center gap-1">10:00</p>
              </li>
              <li className=" px-10 flex justify-between">
                <div className="flex gap-2 items-center">
                  <MdOutlineOndemandVideo></MdOutlineOndemandVideo>
                  <span>Interview Prep</span>
                </div>
                <p className="text-sm text-gray-600 font-medium flex items-center gap-1">10:00</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
