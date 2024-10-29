import React, { useState, useEffect } from "react";
import { request } from "../../config/request";
import { Form } from "../../components/form";

export const Messages = () => {
    const [data, setData] = React.useState([]);

    const getData = () => {
        request
            .get("/messages")
            .then((res) => setData(res.data))
            .catch((error) => console.log(error));
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container">
            <div>
                <Form refetch={getData} />
                {data?.map((item) => (
                    <h1 key={item.id}>{item.id} {item.name}</h1>
                ))}
            </div>
        </div>
    );
}
