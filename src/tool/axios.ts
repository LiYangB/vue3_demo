export const axios = {
    get<T>(url:string):Promise<T>{
        return new Promise((res)=>{
            const xhr = new XMLHttpRequest()
            xhr.open('GET',url)
            xhr.onreadystatechange = ()=>{
                if(xhr.readyState == 4 && xhr.status == 200){
                    setTimeout(() => {
                        res(JSON.parse(xhr.responseText))
                    }, 2000);
                }
            }
            xhr.send(null)
        })
    }
}