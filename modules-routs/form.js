function userform(req,res){
    res.write(`
         <form action="/Submit" method="post">
        <input type="text" placeholder="Enter Name" name='name'/>
        <input type="text" placeholder="Enter Email" name='email'/>
        <button type="submit">submit</button>
          <button type="button">submit</button>
        </form>`)
}

module.exports = userform;