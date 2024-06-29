//This file to make Controller process

import {Request ,Response} from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function get(req:Request,res:Response){
    res.send('welcome to expressTS')
}

export async function create(req:Request,res:Response){
    const new_user = await prisma.user.create({
        data:{
            email : "dose@gmail.com",
            name : "dose"
        }
    })
    res.send(new_user)
}  