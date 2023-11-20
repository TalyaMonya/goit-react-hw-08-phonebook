import { useDispatch } from "react-redux"
import { register } from "redux/auth/operations";
import { Button, Form, Input, Label } from "./RegisterForm.styled";


export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;

        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <Form onSubmit={handleSubmit} autoComplete="off">
            <Label>Username
                <Input
                    type="text"
                    name="name"
                    placeholder="Введіть ім'я"
                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Ім'я має містити лише літери, апострофи, дефіси та відступи"
                    required />
            </Label>
            <Label> Email
                <Input
                    type="email"
                    name="email"
                    placeholder="Введіть адресу електронної пошти"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="Будь ласка, введіть дійсну адресу електронної пошти"
                    required />
            </Label>
            <Label>Password
                <Input
                    type="password"
                    name="password"
                    placeholder="Введіть пароль"
                    pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
                    title="Пароль повинен містити тільки латинські літери (як великі, так і малі), цифри та інші символи"
                    required />
            </Label>
            <Button type="submit">Register</Button>
        </Form>
    );
};