import axios from 'axios'
const url='https://jsonplaceholder.typicode.com/todos/1'
interface todo{
  id:number,
  title:string,
  completed:boolean
}
axios.get(url).then(response=>{
  const data=response.data as todo
  todo(data.id,data.title,data.completed)
})

const todo=(id:number,title:string,completed:boolean)=>{
  console.log(`
    Data id: ${id}
    data title: ${title}
    data completed: ${completed}`
  )
}