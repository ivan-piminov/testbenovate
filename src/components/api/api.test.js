import axios from 'axios';
import {api} from './api'

jest.mock('axios');

describe('api GET', () => {
    let response
    let user
    beforeEach(() => {
            user = {
                "id": 784,
                "firstName": "Verna",
                "lastName": "Ramirez"
            }
            response = {
                data: {
                    user
                }
            }}
    )
    it('should return data from backend', () => {
        axios.get.mockReturnValue(response)
         return api.loadStuff().then((data =>{
             expect(data.user).toEqual(user)
         }))
    });
})