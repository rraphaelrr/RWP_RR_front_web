import React from 'react';
import api from '../api/api';

export  async function getUsers() {
    const response = await api.get('/clientes');
    return response.data;
}

export async function validateUsers(data) {
    const body = {"documento": data.user, "senha": data.password};
    const response = await api.post('/verificarUsuario', body);
    return response.data;
}