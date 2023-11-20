import { useDispatch } from "react-redux"
import { logIn } from "redux/auth/operations";
import { Button, Form, Input, Label } from "./LoginForm.styled";

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        

        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        
        form.reset();
    };

    return (
        <Form onSubmit={handleSubmit} autoComplete="off">
            <Label>
                Email
                <Input
                    type="email"
                    name="email"
                    placeholder="Введіть адресу електронної пошти"
                   pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                    title="Будь ласка, введіть дійсну адресу електронної пошти"
                    required />
            </Label>
            <Label>
                Password
                <Input
                    type="password"
                    name="password"
                    placeholder="Введіть пароль"
                    pattern="(?=.*\d)(?=.*[a-z]).{8,}"
                    title="Пароль повинен містити тільки латинські літери (як великі, так і малі), цифри та інші символи"
                    required />
            </Label>
            <Button type="submit">Log In</Button>
        </Form>
    )
}