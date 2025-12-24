import { Card, Input } from 'antd'
import React, { useState } from 'react'
import GlobalDropdown from './ui/GlobalDropdown'
import { jobTypeData, locationData } from '@/lib/constant';
import GlobalButton from './ui/GlobalButton';
import { SearchIcon } from './icons/icons';

const FindJobFilter = () => {
    const [locationType, setLocationType] = useState("Select Location");
    const [jobType, setJobType] = useState("Job Type");
    const [search, setSearch] = useState("")

    const searchResult = () => {
        console.log("The logic goes here....")
    }

    return (
        <Card hoverable className="[&_.ant-card-body]:p-0">
            <div className="p-5 flex items-center max-md:flex-wrap">
                <div className="flex-[0_0_100%] sm:flex-[0_0_30%] xl:flex-[0_0_57%] max-sm:mb-4">
                    <Input
                        className="rounded-none border-none px-5 py-1 focus:shadow-none pl-0"
                        placeholder="Job Title, Company, or Keywords"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="flex-[0_0_50%] sm:flex-[0_0_25%] xl:flex-[0_0_16%] px-2 md:px-6 h-full relative max-sm:mb-4">
                    <span className="absolute left-0 -top-2 h-10 w-[1px] bg-light-300 max-md:h-4 max-md:top-0"></span>
                    <GlobalDropdown items={locationData} label={locationType} onSelect={(item) => setLocationType(item.label)} />
                </div>
                <div className="flex-[0_0_50%] sm:flex-[0_0_20%] xl:flex-[0_0_12%] px-6 h-full relative max-sm:mb-4">
                    <span className="absolute left-0 -top-2 h-10 w-[1px] bg-light-300 max-md:h-4 max-md:top-0"></span>
                    <GlobalDropdown items={jobTypeData} label={jobType} onSelect={(item) => setJobType(item.label)} />
                </div>
                <div onClick={searchResult} className="flex-[0_0_100%] sm:flex-[0_0_25%] xl:flex-[0_0_15%]">
                    <GlobalButton className="flex-center gap-3 w-full group py-[10px]">
                        <SearchIcon className="brightness-200 group-hover:brightness-100" />
                        Search
                    </GlobalButton>
                </div>
            </div>
        </Card>
    )
}

export default FindJobFilter