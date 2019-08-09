import {addData} from '../api/addData'

export default{
    namespace:'app',
    state:{},
    reducers:{
        saveData(state,action){
            const {data}=action;
            return {
                ...state,
                data
            }
        }
    },
    effects:{
        *add(action,{put,call}){
           const result= yield call(addData,action.values)
            yield put({type:'saveData',data:result})
        }
    }
}