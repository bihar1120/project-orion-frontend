import API from "./api";
export const sendContactForm=async(formData)=>{
    const response=await fetch(`${API}/contact`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
    });
    if(!response.ok){
        throw new Error("Request failed ");
    }
    return response.json();

}
