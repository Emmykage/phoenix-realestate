export const token = () => {
  const token =  localStorage.getItem('phoenix_auth')
  const string =  JSON.parse(token);
  console.log(string)

  return string
  
}


export const  setToken =  (token) => {
    const stringToken = JSON.stringify(token);
    localStorage.setItem('phoenix_auth',stringToken);

}