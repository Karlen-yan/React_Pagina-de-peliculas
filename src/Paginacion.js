export default function Paginacion(props){
   const getPaginas = () =>{
    const resultado =[];
    for (let i =0; props.total; i++){
        let pagina = i +1;
        resultado.push(
        <a onClick={()=> props.onChange(pagina)} 
         className={props.pagina===pagina ?'active': ''} href>
            {pagina}
            </a>
        );
    }
    return resultado;
   }
    return(   
          <div className="topbar-filter">
             <div className="pagination2">
                 <span>Página  {props.pagina} de {props.total}:</span>
                          
                    {getPaginas()}
             </div>
           </div>

                  );
    
}