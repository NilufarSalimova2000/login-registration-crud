import React from "react";
import { useForm } from "react-hook-form";
import { request } from "../../config/request";
import { toast } from 'react-toastify';

export const Form = ({refetch}) => {
    const { handleSubmit, register, reset } = useForm();
    const Submit = (data) => {
        request
          .post("/messages", data)
          .then(() => toast.success("Added successfully"));
        reset();
        refetch();
      };
    
      return (
        <>
          <form
            onSubmit={handleSubmit(Submit)}
            className="mx-auto text-center mt-[50px] w-[300px] bg-green-500 p-[30px] rounded-[15px]"
          >
            <div>
              <input
                className="py-[10px] w-[100%] text-[20px] capitalize fot-[600] pr-[20px] bg-blue-300 mb-[15px] pl-[10px] outline-none rounded-[10px]"
                {...register("name")}
                type="text"
              />
            </div>
            <div>
              <button className="btn w-[100%]"> Send</button>
            </div>
          </form>
        </>
      );
    return
}