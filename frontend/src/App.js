import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
    const [questionList, setQuestionList] = useState([])

    useEffect(() => {
        axios.get('/question/list')
        .then(response => {
            setQuestionList(response.data)
        })
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>제목</th>
                        <th>작성일시</th>
                    </tr>
                </thead>
                <tbody>
                    {questionList && questionList.map((question, index) => (
                        <tr key={question.id}>
                            <td>{question.subject}</td>
                            <td>{question.content}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;