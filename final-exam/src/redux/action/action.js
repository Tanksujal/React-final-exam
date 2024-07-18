
import {app} from '../../config/firbaseconfig'
import {getDatabase,ref,set,onValue} from 'firebase/database'
const db = getDatabase(app)
export const AddEmpL = (data) => {
    return async(dispatch)=>{
        try {
            set(ref(db,"emp/",data.empid),{
                empid : data.empid,
                empname : data.name,
                empemail : data.email,
                empcity : data.city,
                emppassword : data.pass,
                empsalary : data.salary,
                empdeg : data.deg,
            })
            dispatch({
                type : "addemp",
                payload : data
            })
        } catch (error) {
            console.log(error); 
            dispatch({
                type : "addemperror",
                payload: error
            })
        }
    }
}
export const VIEWEMPL = () => {
    return async(dispatch)=>{
        try {
            const studentRef = ref(db, 'emp');
            onValue(studentRef, (item) => {
                const data = item.val();
                dispatch({
                    type : "viewemp",
                    payload : data
                })
            })
            
        } catch (error) {
            console.log(error); 
            dispatch({
                type : "viewemplerr",
                payload: error
            })
        }
    }
}