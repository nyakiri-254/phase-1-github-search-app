const url = " https://api.github.com/"+username

const method  ={
    method: 'GET',
    Url: 'https://api.github.com/search/users?q=octocat.'
}

document.getElementById('btn').addEventListener('click', showGithubUserProfile)

function showGithubUserProfile(){
  let username = document.getElementById('github-form').value  
}
// fetch api

 fetch(url)
 .then(res=>res.json())
 .then(data =>{console.log(data)
    if (data.message){
  console.log('user not found')
    }else {
        console.log(data)
    }
   document.getElementById('res').innerHTML= username;
   <img src
//return error
})
//.catch(e=>{
  //  console.log(e)
//)})