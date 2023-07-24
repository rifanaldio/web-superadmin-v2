import { Button, Card, CardBody, CardFooter, CardHeader, Dialog, Input, Typography } from "@material-tailwind/react";
import React from "react";

const FormGadaiTabunganEmas = ({
    item ,
    open,
    onRequestClose = null
}) => {
    console.log(item);
    return (
        <>
            <Dialog
                size="xs"
                open={open}
                handler={onRequestClose}
                className="bg-transparent shadow-none "
            >
                <Card className="mx-auto w-full max-w-[24rem] rounded-lg">
                    <CardBody className="flex flex-col gap-4">
                        <Input label="Email" size="lg" />
                        <Input label="Password" size="lg" />
                        <div className="-ml-2.5">
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" color="green" onClick={() => { }} fullWidth>
                            Submit
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    );
}

export default FormGadaiTabunganEmas;
