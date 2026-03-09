import { userslist } from "../model/usermodel.js";
import express from 'express'
export function handleusers(req,resp){
    resp.render('users',{user:userslist()})
}