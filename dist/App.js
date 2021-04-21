import React, { useState, useEffect } from 'react';
import axios from 'axios';
var App = function () {
    var _a = useState(''), title = _a[0], setTitle = _a[1];
    var postData = {
        title: 'my title',
        body: 'hello man'
    };
    useEffect(function () {
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
    });
    var handleFileChange = function (e) {
        var files = e.target.files;
        if (files) {
            var uploadedFile = files[0];
            var formData = new FormData();
            formData.append(uploadedFile.name, uploadedFile);
            axios.post('https://jsonplaceholder.typicode.com/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function (res) {
                console.log(res);
            });
        }
    };
    return (React.createElement("div", null,
        React.createElement("h1", null, title),
        React.createElement("hr", null),
        React.createElement("hr", null),
        React.createElement("input", { type: "file", name: "myFile", onChange: handleFileChange })));
};
export default App;
