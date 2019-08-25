const url ="https://qsefip.finanzasoaxaca.gob.mx/UISF/public/api/" 


export const uploadFile = async (file,user) => {
    let n = new FormData();
    n.append("file",file);
    n.append("user",user);
    let params ={method:"POST",body:n};
    const api_call = await fetch(url+"uploadFile",params);
    const res = await api_call.json();
    return res;
}