import Select from '../select';

const Roles = () => {
    const list = ["Engineering", "Medical", "Third", "Med", "Ring"];
    return (
        <Select multiSelect list={list} placeholder="Roles"/>
    )
}

export default Roles;