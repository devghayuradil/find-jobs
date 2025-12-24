import { Card, Input } from "antd";
import React from "react";
import cover from '@/assets/images/cover.webp'
import profile from '@/assets/images/profile.webp'
import { ArrowDownIcon } from "@/components/icons/icons";
import FindJobFilter from "@/components/FindJobFilter";
import FilterBar from "@/components/FilterBar";
import { featureJobCardData, latestJobCardData, recommededJobCardData } from "@/lib/constant";
import DisplayCards from "@/components/DisplayCards";

const Home = () => {
  return <section className="py-[25px]">
    <div className="container">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-full lg:col-span-3">
          <Card
            hoverable
            cover={
              <img
                draggable={false}
                alt="cover photo"
                src={cover}
                className="h-[100px] object-cover"
              />

            }
            className="mb-3"
          >
            <div className="-mt-16 flex-center flex-col">
              <div className="w-[86px] h-[86px] mb-2">
                <img
                  className="border-2 border-light-100 rounded-full"
                  draggable={false}
                  alt="profile photo"
                  src={profile}
                />
              </div>
              <h2 className="text-dark-100 h2-semibold mb-1">Albert Flores</h2>
              <p className="paragraph-medium text-dark-100 text-center lg:max-w-[80%] leading-6 mb-2">Senior Product Designer  |  UI/UX Designer  |  Graphic Designer  |  Web...</p>
              <p className="subtle-medium text-dark-300">Clinton, Maryland</p>
            </div>
          </Card>
          <Card className="[&_.ant-card-body]:p-0 mb-[10px]">
            <ul className="p-5 space-y-3">
              <li className="flex-between pb-3 border-b border-light-300">
                <p className="paragraph-medium text-dark-100">Profile Visitors</p>
                <span className="body-medium text-accent-100">140</span>
              </li>
              <li className="flex-between pb-3 border-b border-light-300">
                <p className="paragraph-medium text-dark-100">Resume Viewers</p>
                <span className="body-medium text-accent-100">20</span>
              </li>
              <li className="flex-between">
                <p className="paragraph-medium text-dark-100">My Jobs</p>
                <span className="body-medium text-accent-100">88</span>
              </li>
            </ul>
          </Card>
          <Card hoverable className="[&_.ant-card-body]:p-0">
            <div className="p-[10px] relative">
              <h3 className="body-semibold text-dark-100 mb-1">My calendar</h3>
              <p className="paragraph-medium text-dark-200">Upcoming Interviews</p>
              <ArrowDownIcon className="absolute right-4 top-2/4 -translate-y-2/4" />
            </div>
          </Card>

        </div>
        <div className="col-span-full lg:col-span-9">
          <div className="mb-5">
            <h1 className="h1-semibold text-dark-100 mt-[14px] mb-[5px]">
              Find your Dream Job, <span className="text-accent-100">Albert!</span>
            </h1>
            <p className="paragraph-medium text-dark-300">Explore the latest job openings and apply for the best opportunities available today!</p>
          </div>
          <FindJobFilter />
          <FilterBar />
          <DisplayCards title="Featured Jobs" linkText="See Featured Jobs" data={featureJobCardData} />
          <DisplayCards title="Recommended Jobs" linkText="See Recommended Jobs" data={recommededJobCardData} />
          <DisplayCards title="Latest Jobs" linkText="See Latest Jobs" data={latestJobCardData} />
        </div>
      </div>
    </div>
  </section>;
};

export default Home;
