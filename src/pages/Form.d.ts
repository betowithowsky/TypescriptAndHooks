import React from "react";
interface FormProps {
    initialDate?: string;
}
export interface FormRef {
    submit(): void;
}
declare const _default: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<FormRef>>;
export default _default;
