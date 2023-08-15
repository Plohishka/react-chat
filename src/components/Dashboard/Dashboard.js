import React, { useState, useReducer, useEffect } from 'react';
import styles from './Dashboard.module.css';
import DialogList from '../DialogList/DialogList';
import Chat from '../Chat/Chat';
import MessageArea from '../MessageArea/MessageArea';
import { userContext } from '../../contexts/userContext';
import { getData } from '../../api';
import {reducer} from '../../reducers';
import CONSTANTS from '../../constants';
const { ACTIONS } = CONSTANTS;


const Dashboard = () => {
    const [user, setUser] = useState({
        username: 'c123s'
    })

    const [state, dispatch] = useReducer(reducer, {
        messages: [],
        error: null
    })

    useEffect(() => {
        getData()
            .then((data) => {
                dispatch({
                    type: ACTIONS.DATA_LOAD_SUCCESS,
                    payload: {
                        data
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: ACTIONS.DATA_LOAD_ERROR,
                    payload: {
                        error
                    }
                })
            })
    }, [])

    const createMessage = (text) => {
        const {messages} = state;
        const newMessage = {
            body: text,
            id: messages.length + 1,
            user
        }

        dispatch({
            type: ACTIONS.ADD_NEW_MESSAGE,
            payload: {
                newMessage
            }
        })
    }

    return (
        <userContext.Provider value={user}>
            <main className={styles.container}>
                <DialogList />
                <section className={styles.wrapper}>
                    <Chat dialog={state.messages}/>
                    <MessageArea addMessage={createMessage}/>
                </section>
            </main>
        </userContext.Provider>
    );
}

export default Dashboard;
