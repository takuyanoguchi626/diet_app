import { ReactNode } from "react";

export type Button = {
    className?: string,
    type?: "button" | "submit" | "reset" | undefined,
    onclick?: React.MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean | undefined,
    children: ReactNode;
}