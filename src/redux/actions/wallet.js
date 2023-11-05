import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../baseURL";

const token = () => JSON.parse(localStorage.getItem('phoenix_auth')).token;
const createTransaction = createAsyncThunk("transaction/create_transaction", async (data) => {
    const response = await fetch(`${baseUrl}transactions`, {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token()}`,
        },

        body: JSON.stringify(data)
    }).then((res) => res.json())
    return response
})
const approveTransaction = createAsyncThunk("transaction/approve_transaction", async ({id, status}) => {
    const response = await fetch(`${baseUrl}transactions/${id}`,{
        method: "PATCH",
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token()}`,
        },

        body: JSON.stringify({status})
    }).then((res) => res.json())
    return response
})
const getWallet = createAsyncThunk("wallet/get_wallet", async() => {
    const response = await fetch(`${baseUrl}wallets`, {
        method: "GET",
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token()}`,
        },

    }).then((res) => res.json())
    return response
} )

export { createTransaction, getWallet, approveTransaction }