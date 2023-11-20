import { Div, Input, Label, Span } from "./Filter.styled";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "redux/filter/filterSlice";
import { selectFilter } from "redux/filter/selectors";




export const Filter = () => {
    const value = useSelector(selectFilter);
    const dispatch = useDispatch();

    const onChange = event => {
        const normalizedValue = event.target.value.toLowerCase();

        dispatch(changeFilter(normalizedValue));
    }
    return (
        <Div>
            <Label>
                <Span><FaSearch size="16"/>Find contacts by name</Span>
                <Input type="text" value={value} onChange={onChange} />
            </Label>
        </Div>
    )
}