const signUp=(req,res)=>{
    res.send('sign up')
}

const singIn=(req,res)=>{
    res.send('sing in')
  
}

const logOut=(req,res)=>{
    res.send('log out');
  
}

export {singIn,signUp,logOut};