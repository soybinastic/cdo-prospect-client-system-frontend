import adminReducer from './admin/adminSlice'
import appointmentSlice from './appointment/appointmentSlice'
import authReducer from './auth/authSlice'
import evaluationSlice from './evaluation/evaluationSlice'
import profileSlice from './profile/profileSlice'
import propertySlice from './property/propertySlice'
import requirementSlice from './requirement/requirementSlice'

export const rootReducer = {
    admin : adminReducer,
    auth : authReducer,
    profile : profileSlice,
    property : propertySlice,
    requirement : requirementSlice,
    evaluation : evaluationSlice,
    appointment : appointmentSlice
}