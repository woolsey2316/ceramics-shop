// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container } from "./styled";
import { useForm } from "react-hook-form";
// #endregion Local Imports

// #region Interface Imports
import { ISubscribeForm } from "./SubscribeForm";
// #endregion Interface Imports

type FormData = {
    email: string;
    lastName: string;
};

export const SubscribeForm: React.FunctionComponent<ISubscribeForm.IProps> = (
    props: ISubscribeForm.IProps
) => {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();
    const onSubmit = handleSubmit(data => console.log(data));
    // firstName and lastName will have correct type

    return (
        <form onSubmit={onSubmit}>
            <label>Email</label>
            <input {...register("email")} />
            <button
                type="button"
                onClick={() => {
                    setValue("email", "luo"); // ✅
                }}
            >
                SetValue
            </button>
        </form>
    );
};
