import { useDispatch, useSelector } from "react-redux"
import { Button, Text, Wrapper } from "./UserMenu.styled";
import { logOut } from "redux/auth/operations";
import { selectUser } from "redux/auth/selectors";


export const UserMenu = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Text>Welcome to Phonebok "{user.name}"</Text>{' '}
            <Button type="button" onClick={() => dispatch(logOut())}>
                Log Out
            </Button>{' '}
        </Wrapper>
    )
};