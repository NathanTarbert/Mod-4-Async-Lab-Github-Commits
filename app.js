function loadCommits() {
    
    let username = document.getElementById("username").value;//get the username
    let repo = document.getElementById("repo").value;//get the repo input field
    let commits = document.getElementById("commits");
    let urlLInk = `https://api.github.com/repos/${username}/${repo}/commits`;//make the url dynamic by using both variables

    fetch(urlLInk)//pass url link into fetch
    .then((response) => {
        if(response.status == 200){
            return response.json();//convert what's inside the url link and parse it so we can use it
        }else {
            throw new TypeError(response.statusText);//if error, throw error
        }
    })
    .then((username) => {
        console.log("get this data",username);
      username.map((data) => {
          let newListItem = document.createElement("ul");//create unordered list tag
          let newLi = document.createElement('li');//create list item tag
          newListItem.textContent = `${data.commit.author.name} : ${data.commit.message}`;// put li in this order
          newLi.appendChild(newListItem);
          commits.appendChild(newLi);//append to commits tag
          
      });
    })
    .catch((error) => {
        console.log(error);
        commits.innerHTML = `<li>${error}</li>`;
}); 
}