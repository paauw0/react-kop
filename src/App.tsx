import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App: React.FC = () => {
    const [ title, setTitle ] = useState('')

    const postData = {
        title: 'my title',
        body: 'hello man'
    }

    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/posts/1', {
        //     headers: {
        //         'X-Requested-With': 'XMLHttpRequest'
        //     },
        //     responseType: 'json'
        // }).then(res => {
        //     setTitle(res.data.title)
        // })
        // axios.post('https://jsonplaceholder.typicode.com/posts', postData).then(res => {
        //     setTitle(res.data.title)
        // })
    })

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        
        if (files) {
            const uploadedFile = files[0]
            const formData = new FormData()
            formData.append(uploadedFile.name, uploadedFile)
            axios.post('https://jsonplaceholder.typicode.com/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
                console.log(res)
            })
        }
    }

    return (
        <div>
            <h1>
                {title}
            </h1>

            <hr />

            {/* <form method="post" encType="multipart/form-data" action="https://jsonplaceholder.typicode.com/posts">
                <input type="file" name="myFile" />
                <button type="submit">Submit</button>
            </form> */}

            <hr />

            <input type="file" name="myFile" onChange={handleFileChange} />
        </div>
    )
}

export default App