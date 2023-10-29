import axios from 'axios'
const url='https://jsonplaceholder.typicode.com/todos/1'
interface todo{
  id:number,
  title:string,
  completed:string
}
axios.get(url).then(response=>{
  const data=response.data as todo
  console.log(`
    Data id ${data.id}
    data title ${data.title}
    data completed ${data.completed}`
  )
})