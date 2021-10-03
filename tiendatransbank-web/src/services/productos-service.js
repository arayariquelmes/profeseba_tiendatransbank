import axios from "axios";

export const getAll = async ()=>{
    try{
        const res = await axios.get("http://localhost:8080/productos");
        return res.data;
    }catch(err){
        return null;
    }
};

export const pagarEnTransbank = async(venta)=>{
    try{
        const res = await axios.post("http://localhost:8080/webpay/create"
            , venta
            ,{
                headers:{
                    'Content-Type': 'application/json'
                }
            });
        return res.data;
      }catch(err){
          return null;
      }
}


export const save = async(producto) =>{
  try{
    const res = await axios.post("http://localhost:8080/producto/add"
        , producto
        ,{
            headers:{
                'Content-Type': 'application/json'
            }
        });
    return res.data;
  }catch(err){
      return null;
  }
}