import { RegisterFormFields } from "@/types";

export interface RegisterFormFieldsInterface {
    type: string;
    placeholder: string;
    name: keyof RegisterFormFields;
    valueAsNumber?: boolean;
}

export const fields: RegisterFormFieldsInterface[] = [
    {
        name: "name",
        type: "text",
        placeholder: "Nom",
    },
    {
        name: "phone",
        type: "text",
        placeholder: "06 00 00 00 00",
    },
    {
        name: "password",
        type: "password",
        placeholder: "Password",
    },
    {
        name: "confirmPassword",
        type: "password",
        placeholder: "Confirmer le mot de passe",
    },
    {
        name: "city",
        type: "text",
        placeholder: "Ville",
    },
];
