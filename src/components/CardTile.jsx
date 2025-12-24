import React from "react";
import { BadgeIcon, LocationIcon, TeamsIcon, WatchIcon } from "./icons/icons";
import { Card } from "antd";
import GlobalButton from "./ui/GlobalButton";

const CardTile = ({ item }) => {
    return (
        <Card hoverable className="[&_.ant-card-body]:p-0 px-5 py-[10px] border border-light-400">

            {/* Promoted */}
            {item.promoted && (
                <span className="text-xs text-dark-100 font-semibold mb-2 inline-block">
                    Promoted
                </span>
            )}

            {/* Header */}
            <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-100/20 rounded-lg flex-center">
                    <TeamsIcon />
                </div>

                <div className="flex-1">
                    <h3 className="paragraph-medium text-dark-100"> {item.title}</h3>
                    <p className="subtle text-dark-100">{item.company}</p>
                </div>
            </div>

            {/* Meta */}
            <div className="text-sm text-gray-500 space-y-1 mb-4">
                <p className="flex items-center gap-2 subtle-medium text-dark-300"><LocationIcon /> {item.location}</p>
                <div className="flex items-center gap-2">
                    <WatchIcon />
                    <p className="subtle-medium text-dark-300">
                        {item.postedAt} ·{" "}
                        <span className="text-blue-600">
                            {item.applicants} applicants
                        </span>
                    </p>
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between gap-2">
                <GlobalButton className="px-[30px] py-[10px] subtle-medium">
                    {item.applyText}
                </GlobalButton>

                <button className="w-6 h-9 flex-center">
                    <BadgeIcon />
                </button>
            </div>
        </Card>
    );
};

export default CardTile;
