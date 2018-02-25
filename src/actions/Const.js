
const userdata = 'https://gist.githubusercontent.com/sohamd3/a4d99609e0217d5dd7047c21d8174ec4/raw/95eb29915408f860b202d1bf4d61dd84ad85ad6f/user.json'
const postsdata = 'https://gist.githubusercontent.com/sohamd3/65322fee6d244913c0abd9ec744f249a/raw/19a5f321018e7111323f4fcc86e60425823b0641/posts.json'

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