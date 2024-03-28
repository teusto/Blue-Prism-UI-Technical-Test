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
    data: Data,
    id: Number
}

export const Cards: FunctionComponent<CardsProps> = ({ data = {title:'Test', content: {a:'', b:''}}, id = -1 }) => {
    const [btnStatus, setBtnStatus] = React.useState(true);
    const [scheduleStatus, setScheduleStatus] = React.useState(true);
    const [scheduleId, setScheduleId] = React.useState('');
    const { toggleBtn, selectedCard } = useListSchedules();

    const handleToggle = () => {
        setScheduleStatus(!scheduleStatus);
        let idCSS
        scheduleStatus ? idCSS = id : idCSS = -1
        toggleBtn(data.logs, scheduleStatus, idCSS)
    }

    const handleBtnStatus = (e) => {
        e.preventDefault()
        setBtnStatus(!btnStatus)
        // This endpoint doesnt exist
        // fetch('http://localhost:3000/schedule/update', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         status: scheduleStatus ? 'Retired' : 'Unretired',
        //         scheduleId: scheduleId
        //     }),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        // })
        e.cancelBubble = true;
        if (e.stopPropagation) e.stopPropagation();
    }

    return (
        <div className={selectedCard === id ? 'Cards__wrapper--selected' : 'Cards__wrapper'} onClick={handleToggle}>
            <div className='Cards__top'>
                <p>{data.title}</p>
            </div>
            <div className='Cards__mid'>
                <p>{data.content?.a}</p>
                <p>{data.content?.b}</p>
            </div>
            <div className='Cards__bottom'>
                <div className='C--btn' onClick={handleBtnStatus} role='cards-btn-test'>
                    <span role='cards-btn-text-test'>{btnStatus ? 'Retire' : 'Unretired'}</span>
                </div>
            </div>
        </div>
    )
}