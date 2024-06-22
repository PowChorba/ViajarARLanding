import axios from 'axios'


export const newSubscriber = async (data: {email: string, fullName: string}) => {
    try {
        const response = await axios.post('https://robotizeweb-production.up.railway.app/suscribers', data)
        return response.data
    } catch (error) {
        return {status: 'fail', message: 'Error'}
    }
}