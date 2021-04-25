import React , {useState} from 'react'
const Filter = (props) => {
 const [searchByName,setSearchByName]= useState("")
 const aa = (e)=>{
         props.searchByName(searchByName)
         setSearchByName('')
        }
     return (
        <div>
          <input style={{
              fontSize:24,
              display:'block',
              width:"99%",
              paddingTop:8,
              paddingBottom:8,
              paddingLeft:16
          }} placeholder="Enter your search movie" value={searchByName}
           onChange={(e)=>{setSearchByName(e.target.value)}}/>  
          <button onClick={aa}>search</button><br/>
        </div>
    )
}
export default Filter;