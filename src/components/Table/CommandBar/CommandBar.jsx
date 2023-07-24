import React from "react";
import { BsArrowReturnLeft } from "react-icons/bs"
import { useNavigate } from "react-router-dom";
import ButtonAction from "../ButtonAction/ButtonAction";

const CommandBar = ({
    title,
    backTo,
    actions = null,
    limitActionType = 2,
}) => {

    const navigate = useNavigate()

    var actionsWType = [];
    var actionsList = [];
    console.log(actionsList);

    try {
        actions.map((d,index) => {
            actionsList.push(d);
            if (index < limitActionType) {
                actionsWType.push(d);
            } else {
                actionsWType.push(d);
            }
        })
    } catch (e) {
    }

    return (
        <>
            <div className="flex flex-col my-3">
                <div className="flex items-center space-x-5">
                    {backTo && (
                        <BsArrowReturnLeft className="cursor-pointer " onClick={() => navigate(-1)} />
                    )}
                    {title && <span className="font-sans text-xl font-bold">{title}</span>}

                </div>
                <div className="flex justify-end items-center bg-blue-gray-100 dark:bg-blue-gray-500 transition-color py-1 rounded-tl-lg">
                    {actionsWType.map((e, i) => {
                            return (
                                <>
                                <div>
                                    <ButtonAction
                                        key={`commandbar-action-${i}`}
                                        onClick={e.onClick}
                                        icon={e.icon}
                                        label={e.label}
                                        type={e.type}
                                    />
                                </div>
                                </>
                            );
                        })}
                </div>
            </div>
        </>
    );
}

export default CommandBar;
