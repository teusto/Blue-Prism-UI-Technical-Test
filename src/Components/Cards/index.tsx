import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import "./style.scss";
import { useListSchedules } from '../../Contexts/listSchedules.context';

type Data =
    {
        title: string,
        content: {
            a: string,
            b: string
        },
        logs: string[],
        status: string
    }

type CardsProps = {
    data: Data
}

export const Cards: FunctionComponent<CardsProps> = ({ data }) => {
    const [btnStatus, setBtnStatus] = React.useState(true);
    const { toggleBtn } = useListSchedules();

    const handleToggle = () => {
        setBtnStatus(!btnStatus);
        toggleBtn(data.logs, btnStatus) 
    }

    return (
        <div className='Cards__wrapper'>
            <div className='Cards__top'>
                <p>{data.title}</p>
            </div>
            <div className='Cards__mid'>
                <p>{data.content.a}</p>
                <p>{data.content.b}</p>
            </div>
            <div className='Cards__bottom'>
                <div className='C--btn' onClick={handleToggle}>
                    {btnStatus ? 'Retire' : 'Unretired'}
                </div>
            </div>
        </div>
    )
}