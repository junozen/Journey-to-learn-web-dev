import { FormControl, InputGroup, Dropdown, DropdownButton } from "react-bootstrap"
import {BsCheck} from "react-icons/bs";

const DropDown = ({sortBy, onSortByChange, orderBy, onOrderByChange}) => {
    return (
        <>
            <DropdownButton
                variant="info"
                title="Sort">
                <Dropdown.Item href="#" onClick={() => onSortByChange('firstName')}>First Name {(sortBy === 'firstName') && <BsCheck className="float-end" />}
                </Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => onSortByChange('lastName')}>Last Name {(sortBy === 'lastName') && <BsCheck className="float-end" />}
                </Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => onSortByChange('aptDate')}>Date {(sortBy === 'aptDate') && <BsCheck className="float-end" />}
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#" onClick={() => onOrderByChange('asc')}>Ascending {(orderBy === 'asc') && <BsCheck className="float-end" />}
                </Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => onOrderByChange('desc')}>Descending {(orderBy === 'desc') && <BsCheck className="float-end" />}
                </Dropdown.Item>
            </DropdownButton>
        </>
    )
}

const Search = ({query, onQueryChange, sortBy, onSortByChange, orderBy, onOrderByChange}) => {
    return (
        <>
            <InputGroup className="mb-3">
                <FormControl placeholder="Search" onChange={(event) => {
                    onQueryChange(event.target.value)
                }} value={query} />
                <DropDown
                sortBy={sortBy}
                onSortByChange={mySort => onSortByChange(mySort)}
                orderBy={orderBy}
                onOrderByChange={myOrder => onOrderByChange(myOrder)} />
            </InputGroup>
        </>
    )
}

export default Search;