// import { use, useState } from "react"
// import App from "../App"

// function Form() {
//     const [formData, setFormData] = useState({ firstname: "", secondname: "", email: "", phonenumber: "", password: "" })
//     const [data, setData] = useState([])
//     const [message,setMessage] = useState("")
//     function handleSubmit(e) {
//         e.preventDefault()
//         setData((preval) => [...preval, formData])
//         setFormData({ firstname: "", secondname: "", email: "", phonenumber: "", password: "" })
//     }

//     function handleChange(e) {
//         setFormData((preval) => ({ ...preval, [e.target.name]: e.target.value }))
//         setMessage(e.target.value)
//     }

//     // const handleChange = (event) =>{
//     //         setMessage(event.target.value)
//     // }
//     return (
//         <>

//             <div>
//                 <div>
//                     <h1>Information</h1>
//                     <div className="container mt-5">
//                         <div className="row">
//                             <div className="col-5 m-auto">
//                                 <form action="" onSubmit={handleSubmit}>
//                                     <div className="input-group mb-3">
//                                         <input type="text" className="form-control" placeholder="Firstname" aria-label="Firstname" aria-describedby="basic-addon1" value={formData.firstname} name='firstname' onChange={handleChange} />
//                                     </div>
//                                     <div className="input-group mb-3">
//                                         <input type="text" className="form-control" placeholder="Secondname" aria-label="Secondname" aria-describedby="basic-addon1" value={formData.secondname} name='secondname' onChange={handleChange} />
//                                     </div>
//                                     <div className="input-group mb-3">
//                                         <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" value={formData.email} name='email' onChange={handleChange} />
//                                     </div>
//                                     <div className="input-group mb-3">
//                                         <input type="number" className="form-control" placeholder="Phonenumber" aria-label="Phonenumber" aria-describedby="basic-addon1" value={formData.phonenumber} name='phonenumber' onChange={handleChange} />
//                                     </div>
//                                     <div className="input-group mb-3">
//                                         <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" value={formData.password} name='password' onChange={handleChange} />
//                                     </div>
//                                     <button type="submit" className="btn btn-success">Submit</button>
//                                 </form>
//                             </div>
//                         </div>

//                         <hr />
//                         <div className="row">
//                             <div className="col-5 m-auto">
//                                 <table className="table">
//                                     <thead>
//                                         <tr>
//                                             <th>Firstname</th>
//                                             <th>Secondname</th>
//                                             <th>Email</th>
//                                             <th>Phonenumber</th>
//                                             <th>Password</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {data.length > 0 && data.map((ele, index) => (
//                                             <tr key={index}>
//                                                 <td>{ele.firstname}</td>
//                                                 <td>{ele.secondname}</td>
//                                                 <td>{ele.email}</td>
//                                                 <td>{ele.phonenumber}</td>
//                                                 <td>{ele.password}</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//         </>
//     )
// }
// export default Form


function Form(abc) {
    const {xyz, username, getData} = abc
    const num = [1, 2, 3, 4, 5]
    getData(num)

  return (
    <div>
      <h1>Table</h1>
      <h1>{xyz.name}</h1>
      <h1>{xyz.age}</h1>
      <h1>{username}</h1>
    </div>
  )
}

export default Form
