import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);

    // del evento puedo desestructurar el target
    const onInputChange = ({ target }) => {
        const { name, value } = target; // lo desestructuro asi porque, name es el targuet del username y email es el target de email
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    };
};
