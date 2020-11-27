import axios from 'axios';

export const api ={
 loadStuff () {
     // запрос за рандомным списком пользователей (есть имя, фамилия, но нет отдела)
     return axios.get('http://www.filltext.com/?rows=400&id={number|1000}&firstName={firstName}&lastName={lastName}}')
         .then(res => res.data)
         // каждому элементу добавляем ключ department со сзачением от 0 до 3, где каждой цифре соответствует название отдела
         .then(data => data.map(item => item = {...item, department:Math.floor(Math.random() * (4))}))
         .catch((e) =>{ console.log(e)})
}}



