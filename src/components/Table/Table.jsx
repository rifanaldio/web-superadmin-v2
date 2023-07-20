// import { MagnifyingGlassIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { HiOutlineMagnifyingGlass, HiChevronUpDown } from "react-icons/hi2"
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { BsPencil } from "react-icons/bs"
import { FiUserPlus } from "react-icons/fi"
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
    Checkbox
} from "@material-tailwind/react";

const TABLE_HEAD = ["Action", "Member", "Function", "Status", "Employed"];

const TABLE_ROWS = [
    {
        name: "John Michael",
        email: "john@creative-tim.com",
        job: "Manager",
        org: "Organization",
        online: true,
        date: "23/04/18",
    },
    {
        name: "Alexa Liras",
        email: "alexa@creative-tim.com",
        job: "Programator",
        org: "Developer",
        online: false,
        date: "23/04/18",
    },
    {
        name: "Laurent Perrier",
        email: "laurent@creative-tim.com",
        job: "Executive",
        org: "Projects",
        online: false,
        date: "19/09/17",
    },
    {
        name: "Michael Levi",
        email: "michael@creative-tim.com",
        job: "Programator",
        org: "Developer",
        online: true,
        date: "24/12/08",
    },
    {
        name: "Richard Gran",
        email: "richard@creative-tim.com",
        job: "Manager",
        org: "Executive",
        online: false,
        date: "04/10/21",
    },
];

const Table = ({
    title="",
    checked = false,
    showIndex = true,
    showAction = true,
    columns = [],
    data = []
}) => {

    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none px-5">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            {title}
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all members
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        {/* <Button variant="outlined" color="blue-gray" size="sm">
                            view all
                        </Button> */}
                        <Button className="flex items-center gap-3" color="blue" size="sm">
                            <FiUserPlus strokeWidth={2} className="h-4 w-4" /> Add member
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-end gap-4 md:flex-row">
                    <div className="w-full md:w-72 flex items-center space-x-2">
                        <Input className="h-10" placeholder="Search" />
                        <div className="border px-2 cursor-pointer">
                            <HiOutlineMagnifyingGlass className="h-9 w-5" />
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                        {   
                            checked && (
                                <th
                                className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                    >
                                        Checkbox
                                    </Typography>
                                </th>
                            )
                        }
                        {   
                            showIndex && (
                                <th
                                className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                    >
                                        No
                                    </Typography>
                                </th>
                            )
                        }
                        {   
                            showAction && (
                                <th
                                className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                    >
                                        Action
                                    </Typography>
                                </th>
                            )
                        }
                        {

                        }
                        {columns.map((col,index) => (
                                <th
                                    key={col}
                                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                    >
                                        {col.label}
                                        {index !== TABLE_HEAD.length - 1 && (
                                            <HiChevronUpDown strokeWidth={2} className="h-4 w-4" />
                                        )}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, index) => {
                            // const isLast = index === TABLE_ROWS.length - 1;
                            // const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={index}>
                                    {
                                        checked &&
                                        <td className={""}>
                                            <Tooltip content="Edit User">
                                                <Checkbox color="green" defaultChecked={false} />
                                            </Tooltip>
                                        </td>
                                    }
                                    {
                                        showIndex && 
                                        <td className={""}>
                                            {index + 1}
                                        </td>
                                    }
                                    {/* <td className={""}>
                                        <Tooltip content="Edit User">
                                            <IconButton variant="text" color="blue-gray">
                                                <BsPencil className="h-4 ful" />
                                            </IconButton>
                                        </Tooltip>
                                    </td> */}
                                    {/* <>
                                    <td className={""}>
                                        <div className="flex items-center gap-3">
                                            <Avatar src={img} alt={name} size="sm" />
                                            <div className="flex flex-col">
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {d.name}
                                                </Typography>
                                            </div>
                                        </div>
                                    </td>
                                    </> */}
                                    {
                                        columns.map((col) => (
                                            <td>
                                                {col.render(d,index)} 
                                            </td>
                                        ))
                                    }
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page 1 of 10
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" color="blue-gray" size="sm">
                        Previous
                    </Button>
                    <Button variant="outlined" color="blue-gray" size="sm">
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}

export default Table;