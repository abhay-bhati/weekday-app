import Select from '../select';

const NumberOfEmployees = () => {
    const list = ["1-10", "11-20", "21-50", "51-100", "101-200", "201-500", "500+"];
    return (
        <Select multiSelect list={list} placeholder="Number Of Employees"/>
    )
}

export default NumberOfEmployees;