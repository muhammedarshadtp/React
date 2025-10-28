
const List =()=>{
    const users =[
        {id:"1",name:"Arshad",age:24},
        {id:"2",name:"Aswin",age:23},
        {id:"3",name:"Alan",age:25},
        {id:"4",name:"Zayyan",age:28}
    ]
    return(
        <div>
            <h1>hello</h1>
            <ul>
                
                    {users.map((user)=>{
                        return user.age > 25 ?(
                            <li key={user.id}>{user.name}  is  {user.age}years old</li>
                        ):(
                            <li key={user.id}>{user.name} is   {user.age}  years old</li>
                        )

                    })}
                
            </ul>

        </div>
    )
}

export default List;