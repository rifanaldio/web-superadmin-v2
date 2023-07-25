import { HiChevronUpDown } from "react-icons/hi2"
import {
    Card,
    Typography,
    CardBody,
    CardFooter,
    Checkbox
} from "@material-tailwind/react";
import { useState } from "react";
import Pagination from "./Pagination/Pagination";
import _ from "lodash"
import ButtonAction from "./ButtonAction/ButtonAction";
import Filter from "./Filter";

const TABLE_HEAD = ["Action", "Member", "Function", "Status", "Employed"];

const Table = ({
    checked = false,
    showIndex = true,
    showActionColumns = true,
    columns = [],
    data = [],
    usePagination = true,
    itemActions = [],
    useFilter = true,
}) => {

    const [selectedItems, setSelectedItems] = useState([]);
    const [masterCheckbox, setMasterCheckbox] = useState(false);

    const getItemActions = (item) => {
        console.log(item);
        let newItemActions = itemActions.filter((d) =>
            typeof d.show === "boolean"
                ? d.show
                : typeof d.show === "function"
                    ? d.show(item)
                    : true
        );
        let newNewItemActions = _.filter(newItemActions, function (d) {
            return d;
        });

        console.log(newItemActions);
        return newNewItemActions;
    };

    //handle checkbox for table body
    const handleCheckBox = (item) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter((id) => id !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    }

    //handle checkbox for master (table header)
    const handleMasterCheckboxChange = () => {
        setMasterCheckbox(!masterCheckbox);
        if (!masterCheckbox) {
            const allItemIds = data.map((e) => e);
            setSelectedItems(allItemIds);
        } else {
            setSelectedItems([]);
        }
    };

    // const getSelectedData = () => {
    const selectedData = data.filter((item) => selectedItems.includes(item.id));
    console.log(selectedData);
    // };

    const content = (
        <CardBody className="overflow-scroll px-0 py-0 ">
            <table className="w-full min-w-max text-left">
                <thead className="sticky -top-1 bg-blue-gray-100 dark:bg-blue-gray-500 transition-color z-10">
                    <tr className="">
                        {
                            showIndex && (
                                <th
                                    className=" py-5 px-2 border-blue-gray-100 bg-blue-gray-50/50 transition-colors hover:bg-blue-gray-50"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="flex items-center justify-center gap-2 font-normal leading-none opacity-70"
                                    >
                                        No
                                    </Typography>
                                </th>
                            )
                        }
                        {
                            checked && (
                                <th onClick={handleMasterCheckboxChange} className="cursor-pointer  py-5 border-blue-gray-100 bg-blue-gray-50/50 transition-colors hover:bg-blue-gray-50 group">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="flex items-center justify-center gap-2 font-normal leading-none opacity-70"
                                    >
                                        Select All
                                    </Typography>
                                </th>
                            )
                        }

                        {
                            showActionColumns && (
                                <th className="py-5 border-blue-gray-100 bg-blue-gray-50/50 transition-colors hover:bg-blue-gray-50 group">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="flex items-center justify-center gap-2 font-normal leading-none opacity-70"
                                    >
                                        Action
                                    </Typography>
                                </th>
                            )
                        }
                        {

                        }
                        {columns.map((col, index) => (
                            <th
                                key={col}
                                className="cursor-pointer  border-blue-gray-100 bg-blue-gray-50/50 transition-colors hover:bg-blue-gray-50"
                            >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="flex items-center justify-between gap-2 px-4 font-normal leading-none opacity-70"
                                >
                                    {col.label}
                                    {index !== col.length - 1 && (
                                        <HiChevronUpDown strokeWidth={2} className="h-4 w-4" />
                                    )}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="h-screen overflow-y-auto text-sm dark:bg-blue-gray-800 transition-color">
                    {data.map((d, index) => {
                        let dItemActions = getItemActions(d);
                        return (
                            <tr
                                key={index}
                                className={`hover:bg-gray-200 dark:hover:bg-blue-gray-600 transition-color min-h-[180px] ${selectedItems.includes(d) && 'bg-gray-200 dark:bg-blue-gray-600'}`}
                            >
                                {
                                    showIndex &&
                                    <td className="overflow-hidden">
                                        <span className="flex justify-center items-center">
                                            {index + 1}
                                        </span>
                                    </td>
                                }
                                {
                                    checked &&
                                    <td className="overflow-hidden">
                                        <div className="flex items-center justify-center">
                                            <Checkbox key={index} color="green" defaultChecked={false} checked={selectedItems.includes(d)} onChange={() => handleCheckBox(d)} className="z-0 p-0" />
                                        </div>
                                    </td>
                                }
                                {
                                    showActionColumns && (
                                        <td className="overflow-hidden">
                                            <div className="flex items-center justify-center">
                                                {
                                                    itemActions.length > 0 && (
                                                        <td>
                                                            <ButtonAction
                                                                label={dItemActions[0].label}
                                                                icon={dItemActions[0].icon}
                                                                onClick={() => dItemActions[0].onClick(d, index)}
                                                                type={dItemActions[0].type}
                                                                color={dItemActions[0].color}
                                                            />
                                                        </td>
                                                    )
                                                }
                                            </div>
                                        </td>
                                    )
                                }
                                {
                                    columns.map((col) => (
                                        <td className="overflow-hidden">
                                            <Typography color="blue-gray" className="font-normal text-sm px-4 transition-color duration-1000 dark:text-white">
                                                {col.render(d, index)}
                                            </Typography>
                                        </td>
                                    ))
                                }
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </CardBody>
    )

    return (
        <>
            <div className="flex flex-col">
                <div className="flex">
                    <Card className={`h-[42rem] ${!useFilter ? 'w-full' : 'w-[80%]'} dark:bg-blue-gray-900 dark:text-white`}>
                        {
                            data.length === 0 ?
                                <div>tidak ada data</div> :
                                content
                        }

                    </Card>
                    {
                        useFilter && (
                            <div className="w-[20%] h-[42rem]">
                                <Filter />
                            </div>
                        )
                    }
                </div>
                {
                    usePagination &&
                    <CardFooter className="flex items-center justify-center border-blue-gray-50 p-4">
                        <Pagination />
                    </CardFooter>
                }
            </div>
        </>
    );
}

export default Table;