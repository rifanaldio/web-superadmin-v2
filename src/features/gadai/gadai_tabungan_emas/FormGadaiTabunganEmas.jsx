import { Button, Card, CardBody, CardFooter, CardHeader, Dialog, Input, Typography } from "@material-tailwind/react";
import React from "react";

const FormGadaiTabunganEmas = ({
    item ,
    open,
    onRequestClose = null
}) => {
    return (
        <>
            <Dialog
                size="xs"
                open={open}
                handler={onRequestClose}
                className="bg-transparent shadow-none "
            >
                <Card className="mx-auto w-full max-w-[24rem] rounded-lg">
                    {/* <CardHeader
                        variant="gradient"
                        color="green"
                        className="mb-4 grid h-10 place-items-center"
                    >
                        <Typography variant="h4" color="white">
                            Form Gadai Tabungan Emas
                        </Typography>
                    </CardHeader> */}
                    <CardBody className="flex flex-col gap-4">
                        <Input label="Email" size="lg" />
                        <Input label="Password" size="lg" />
                        <div className="-ml-2.5">
                            {/* <Checkbox label="Remember Me" /> */}
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
