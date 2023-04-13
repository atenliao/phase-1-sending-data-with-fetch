// Add your code here

const submitData = (username, useremail)=> {
    const body = document.querySelector("body");
    const userData = {
        name: `${username}`,
        email:`${useremail}`
    }
    const configureObj = {
        // method:"POST",
        headers:{
            "Content-Type":"application/json",
            "accept":"application/json",
        },
        body: JSON.stringify(userData),
    }
    return fetch("http://localhost:3000/users",configureObj)
     .then(function (response) {
        return response.json();
     })
     .then(function (object){
       
       body.innerHTML = `id is ${object.id}`;
        console.log(object.id)
     })
     .catch(function (error){
        // const div = document.createElement('div');
        // div.innerText = error.message
        body.innerHTML = error.message;
        
     })
    
};

submitData("john","john@gmail.com")