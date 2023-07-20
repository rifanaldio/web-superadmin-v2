import React, { useState } from "react";
import Table from "./Table";

const TableWrapper = ({
    title="",
    checked = false,
    showIndex = true,
    showAction = true,
    columns=[],
    defaultData = []
}) => {

    const [data, setData] = useState(defaultData)

    return (
        <>
            <Table 
            title={title}
                checked={checked}
                showIndex={showIndex}
                data={data}
                showAction={showAction}
                columns={columns.filter((d) =>
                    d.show === undefined ? true : d.show
                  )}
            />
        </>
    );
}

export default TableWrapper;
