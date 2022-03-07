

/**
 * Api method to call dummy api to fetch employees list
 * @returns object with status code, and message and if success with body
 */
export async function fetchFromDummyApi() {

    try {
        let response = await fetch("http://dummy.restapiexample.com/api/v1/employees")
        if (response.status === 200) {
            const responseJson = await response.json();
            return {status:response.status, body:responseJson.data, message:response.statusText}
        }else{
            return {status:response.status, message:response.statusText}
        }
    } catch (error) {
        console.log(error)
    }
}