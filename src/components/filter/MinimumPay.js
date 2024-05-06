import Select from '../select';

const MinimumPay = ({className}) => {
    const list = ["0L", "10L", "20L", "30L", "40L", "50L", "60L", "70L"];

    return (
        <Select list={list} placeholder="Minimum Base Pay" selectClassName={className}/>
    )
}

export default MinimumPay;