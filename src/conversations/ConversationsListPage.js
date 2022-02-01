import React from "react";
import { Link } from 'react-router-dom';
import { useProtectedResource } from '../data';
import { useUser } from "../auth";

export const ConversationsListPage = () => {
    const { user } = useUser();
    const { isLoading, data: conversations } = useProtectedResource(`/users/${user.uid}/conversations`, []);
    console.log(conversations);

    return (
        <h1>This is the Conversations List Page</h1>
    )
}