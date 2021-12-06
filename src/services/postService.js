/*

¿COMO EXPORTAR A UN COMPONENTE/MODULO? =>{

const {getPosts, updatePost, deletePost, patchPost, createPost} = require('URL');
}


function getPosts(quantity){
    
    return new Promise ((resolve, reject)=>
    
    fetch('')
        .then(response => response.json())
            .then(data => resolve(data))
                .catch(error => reject(error));
    
    )
}

function createPost(post){

}

function updatePost(data){

}

function deletePost(){

}
*/
/*
module.exports = {
    createPost,
    updatePost,
    getPosts,
    deletePost,
}
*/