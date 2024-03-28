import React, { FunctionComponent, useEffect, useState } from 'react'; // importing FunctionComponent
import "./style.scss";
import { Header } from '../Header';
import { Cards } from '../Cards';
import { useFetch } from '../../Hooks/useFetch';
import { useListSchedules } from '../../Contexts/listSchedules.context';

type TableProps = {
    title?: string,
    paragraph?: string
}

export const Table: FunctionComponent<TableProps> = ({ title, paragraph }) => {
    const { data }: any = useFetch("http://localhost:3000/schedulesLogs")
    const { logs, toggleBtn, allLogs, setInitialLogs } = useListSchedules();
    const [logsList, setLogsList] = useState([])

    useEffect(() => {
        setLogsList(data)
        setInitialLogs(data)
    }, [data])

    useEffect(() => {
        setLogsList(logs)
    }, [logs])

    return (
        <div className='Table__wrapper'>
            {logsList?.map(element => {
                return (
                    <div className='Table--logs__wrapper'>
                        <p>{element?.content}</p>
                        <p>{element?.date}</p>
                    </div>
                )
            })}
        </div>
    )
}