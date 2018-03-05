
// user data endpoint
const userdata = 'https://gist.githubusercontent.com/sohamd3/a4d99609e0217d5dd7047c21d8174ec4/raw/e88702dda8ef56daffa0fe4f6dc7d7bddddac6f0/user.json'

// user's post data endpoint
const postsdata = 'https://gist.githubusercontent.com/sohamd3/65322fee6d244913c0abd9ec744f249a/raw/9fba9da026c27be217cd8ac7b70c9e7878647630/posts.json'

export const api_endpoints = [
    {
        "storekey": "posts",
        "endpoint": postsdata
    },
    {
        "storekey": "users",
        "endpoint": userdata
    }   
]