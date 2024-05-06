import Select from '../select';

const Roles = () => {
    const list = ["Backend", "Frontend", "Fullstack", "IOS", "Flutter", "React Native", "Android", "Frontend", "Tech Lead", "Dev-Ops", "Data Engineer"];

    return (
        <Select multiSelect list={list} placeholder="Roles"/>
    )
}

export default Roles;