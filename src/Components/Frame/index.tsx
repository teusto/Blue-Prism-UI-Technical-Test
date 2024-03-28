import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import "./style.scss";
import { Header } from '../Header';
import { Cards } from '../Cards';
import { Table } from '../Table';
import { useFetch } from '../../Hooks/useFetch';

type FrameApplicationUIProps = {
    title: string,
    paragraph: string
}

export const FrameApplicationUI: FunctionComponent<FrameApplicationUIProps> = ({ title, paragraph }) => {
    const {data}: any = useFetch('http://localhost:3000/schedules');
    return (
        <div className='FrameApplicationUI__wrapper'>
            <section className='FAUI__top'>
                <Header/>
            </section>
            <section className='FAUI__bottom'>
                <section className='FAUI__bottom__left'>
                    {data?.map((element) => {
                        return <Cards data={element}/>
                    })}
                </section>
                <section className='FAUI__bottom__right'>
                    <Table />
                </section>
            </section>
        </div>
    )
}