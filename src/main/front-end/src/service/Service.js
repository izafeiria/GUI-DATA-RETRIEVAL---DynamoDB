import axios from 'axios';
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/profiles";

class Service {
    
    getProfiles(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    getHomeAttribute(props) {
        console.log(props.attribute, props.value)
        return axios.get(EMPLOYEE_API_BASE_URL + '/home', { params: { attribute: props.attribute ,value : props.value}});
    }

    getApplianceExistence(props) {
        console.log(props.appliance,props.exist)
        return axios.get(EMPLOYEE_API_BASE_URL + '/ApplianceExistence', {params: {appliance: props.appliance , exist : props.exist, app2 : props.app2, exist2 : props.exist2}});
    }

    getApplianceCondition(props) {
        console.log(props.appliance,props.value,props.condition)
        return axios.get(EMPLOYEE_API_BASE_URL + '/ApplianceValue', {params: {appliance : props.appliance, value : props.value, condition: props.condition }});
        
    }
    activity(props) {
        console.log(props.activity)
        return axios.get(EMPLOYEE_API_BASE_URL + '/Activities', { params: { activity: props.activity}});
    }



    // Home & Appliance

    homeApplianceExist(props) {
        console.log(props.attribute, props.value, props.appliance, props.exist)
        return axios.get(EMPLOYEE_API_BASE_URL + '/homeAppliance/exist', {params: { attribute: props.attribute, value: props.value , appliance: props.appliance, exist:  props.exist}});
    }

    homeApplianceCondition(props) {
        console.log(props.attribute, props.value, props.appliance, props.num, props.condition)
        return axios.get(EMPLOYEE_API_BASE_URL + '/homeAppliance/condition', {params: {attribute: props.attribute, value: props.value , appliance: props.appliance, num : props.num, condition: props.condition}});
    }

}

export default new Service()