import React from 'react'

export default function Show_table(props) {
  const data=props.data

  const handleEdit=(event)=>{
    const idHit=event.target.getAttribute('emailkey');
    console.log(idHit)
    props.setData(
    data.map((individual)=>{
      if(individual.email==idHit)
      {
        individual.email=""
        individual.password=""
        return individual
      }else{
        return individual
      }
    }))
  }
      
  return (
     <div  className='mt-5'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">email</th>
            <th scope="col">password</th>
            <th scope="col">Action</th>
            
          </tr>
        </thead>
        <tbody>
        {data.map((data, index) =>{
      return (
        
            <tr>
         
              <th scope="col">{index+1}</th>
              <th scope="col">{data.email}</th>
              <th scope="col">{data.password}</th>
              <th scope="col"><button emailkey={data.email} onClick={handleEdit} className='btn btn-primary'>edit</button></th>
              
            </tr>     
      )
     })}
      </tbody>
    </table>
        
    </div>
    
  )
}
