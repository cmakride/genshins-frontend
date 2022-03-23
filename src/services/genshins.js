const BASE_URL = 'api/genshins'

function create(genshin){
  return fetch(BASE_URL,{
    method: 'POST',
    headers: {'content-type':'application/json'},
    body: JSON.stringify(genshin)
  })
  .then(res => res.json())

}

export {
  create
}