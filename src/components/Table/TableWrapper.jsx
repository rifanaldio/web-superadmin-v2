import React, { useState } from "react";
import Table from "./Table";
import CommandBar from "./CommandBar/CommandBar";
import ButtonAction from "./ButtonAction/ButtonAction";
import { TfiReload } from "react-icons/tfi"
import { HiOutlineMagnifyingGlass } from "react-icons/hi2"
import action from "./Class/action.class";
import NotFoundData from "../NotFoundData/NotFoundData";

const TableWrapper = ({
    title = "",
    checked = false,
    showIndex = true,
    showAction = true,
    columns = [],
    defaultData = [],
    useCommandBar = true,
    usePagination = true,
    backTo = false,
    actions = [],
    itemActions = [],
}) => {

    const [data, setData] = useState(defaultData)

    const defaultAction = [
        new action(
            "Reload",
            <TfiReload />,
            () => alert("Berhasil reload"),
            "icon"
        ),
        new action(
            "Search",
            <HiOutlineMagnifyingGlass />,
            () => alert("Berhasil Cari"),
            "icon"
        )
    ]

    return (
        <>
            <div className="flex flex-col -mt-3 dark:bg-blue-gray-700">
                {
                    useCommandBar && (
                        <CommandBar
                            backTo={backTo}
                            title={title}
                            actions={
                                [...actions, ...defaultAction]
                            }
                        />
                    )
                }
                <div className="h-[45rem] w-full top-0">
                    {
                        data.length === 0 ?
                            <NotFoundData /> :
                            <Table
                                usePagination={usePagination}
                                checked={checked}
                                showIndex={showIndex}
                                data={data}
                                showAction={showAction}
                                itemActions={itemActions}
                                columns={columns.filter((d) =>
                                    d.show === undefined ? true : d.show
                                )}
                            />
                    }

                </div>
            </div>
        </>
    );
}

TableWrapper.action = action

export default TableWrapper;
