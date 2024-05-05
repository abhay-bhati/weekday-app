import Select from '../select';

const Remote = () => {
    const list = ["Remote", "Hybrid", "In-office"];
    return (
        <Select multiSelect list={list} placeholder="Remote"/>
    )
}

export default Remote;